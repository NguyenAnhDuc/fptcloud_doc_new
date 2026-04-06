#!/usr/bin/env python3
"""
Crawl full content (text + images) from FPT Cloud documentation pages.

Downloads the actual doc content as markdown and all images, saving to
a structured directory for offline comparison with local docs.

Usage:
  python crawl_full_content.py                             # Crawl all pages
  python crawl_full_content.py --slugs gateway,Initial-Setup  # Specific slugs
  python crawl_full_content.py --issues-only               # Only WORD_COUNT_LOW pages
  python crawl_full_content.py --issues-only --lang vi     # Only VI issues
  python crawl_full_content.py --resume                    # Resume from checkpoint
  python crawl_full_content.py --headed                    # Show browser

Output structure:
  crawled-web/
    {module-slug}/
      {slug}/
        content.md          # Extracted markdown content
        metadata.json       # Page metadata + stats
        images/
          img-001.png       # Downloaded images
          img-002.jpg
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
import time
from datetime import datetime, timezone, timedelta
from pathlib import Path
from typing import Optional
from urllib.parse import urljoin, urlparse

import html2text
from playwright.sync_api import sync_playwright, TimeoutError as PwTimeout

SCRIPT_DIR = Path(__file__).parent
DEFAULT_MENU_TREE = SCRIPT_DIR / "menu-tree.json"
DEFAULT_ISSUES_REPORT = SCRIPT_DIR / "content-compare-report.json"
DEFAULT_OUTPUT_DIR = SCRIPT_DIR.parent / "crawled-web"
CHECKPOINT_FILE = SCRIPT_DIR / "crawl-full-checkpoint.json"


def create_browser(pw, headed: bool = False):
    browser = pw.chromium.launch(headless=not headed)
    context = browser.new_context(
        viewport={"width": 1440, "height": 900},
        user_agent=(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/131.0.0.0 Safari/537.36"
        ),
    )
    return browser, context


def safe_navigate(page, url: str, timeout_ms: int = 15000) -> bool:
    for attempt in range(3):
        try:
            resp = page.goto(url, wait_until="domcontentloaded", timeout=timeout_ms)
            if resp and resp.status == 404:
                return False
            page.wait_for_timeout(1500)
            return True
        except PwTimeout:
            if attempt < 2:
                page.wait_for_timeout(2000)
            else:
                return False
        except Exception:
            if attempt < 2:
                page.wait_for_timeout(2000)
            else:
                return False
    return False


def slugify(text: str) -> str:
    """Convert text to filesystem-safe slug."""
    text = re.sub(r'[^\w\s-]', '', text.lower())
    return re.sub(r'[-\s]+', '-', text).strip('-')


def setup_html2text() -> html2text.HTML2Text:
    """Configure html2text for clean markdown output."""
    h = html2text.HTML2Text()
    h.body_width = 0  # No line wrapping
    h.protect_links = True
    h.wrap_links = False
    h.skip_internal_links = False
    h.ignore_emphasis = False
    h.ignore_links = False
    h.ignore_images = False
    h.ignore_tables = False
    h.single_line_break = False
    h.mark_code = True
    h.wrap_list_items = False
    h.unicode_snob = True
    return h


def extract_content_html(page) -> dict:
    """Extract the main doc content HTML and image URLs from the page."""
    return page.evaluate("""() => {
        // Find main doc content area — the FPT Cloud SPA uses this structure:
        //   .bota_document_col_content_mb  (actual doc content, inside right column)
        //   .bota_document_col_content     (wrapper)
        //   .bota_document_col_right_cont  (right column)
        // The left column (.bota_document_col_left) is the sidebar/nav — skip it.
        const contentSelectors = [
            '.bota_document_col_content_mb',
            '.bota_document_col_content',
            '.bota_document_col_right_cont',
            '.bota_document_col_right',
            '.entry-content',
            'article',
            'main',
        ];

        let content = null;
        for (const sel of contentSelectors) {
            const el = document.querySelector(sel);
            if (el && el.textContent.trim().length > 50) {
                content = el;
                break;
            }
        }
        if (!content) content = document.body;

        // Clone and remove remaining noise
        const clone = content.cloneNode(true);
        const noiseSelectors = [
            'nav', '.sidebar', '.toc', '.table-of-contents',
            'header', 'footer', 'script', 'style',
            '.bota_document_col_left', '.bota_document_left_ul',
            '.bota_doccument_cat', '.bota_doccument_category',
            '.bota_menu_commom', '.bota_header',
            '.bota_document_col_rights',
            '[role="navigation"]',
        ];
        for (const sel of noiseSelectors) {
            clone.querySelectorAll(sel).forEach(el => el.remove());
        }

        // Remove share/social links and export buttons
        clone.querySelectorAll('a[href*="facebook.com/sharer"], a[href*="linkedin.com/sharing"], a[href*="twitter.com/share"], a[href*="export_pdf"]').forEach(el => {
            // Remove the parent container if it's a share bar
            const parent = el.closest('ul, div, p');
            if (parent && parent.textContent.trim().length < 200) {
                parent.remove();
            } else {
                el.remove();
            }
        });

        // Remove "Updated on..." and "Share:" / "Print:" / "Export:" lines
        clone.querySelectorAll('*').forEach(el => {
            if (el.children.length === 0) {
                const t = el.textContent.trim();
                if (/^(Updated on|Share:|Print:|Export:)/i.test(t) && t.length < 100) {
                    el.remove();
                }
            }
        });

        // Collect image info before converting
        const images = [];
        const imgs = clone.querySelectorAll('img');
        for (let i = 0; i < imgs.length; i++) {
            const img = imgs[i];
            const src = img.getAttribute('src') || '';
            const alt = img.getAttribute('alt') || '';
            // Skip tiny icons, tracking pixels, logos
            if (!src) continue;
            if (src.includes('tracking') || src.includes('pixel')) continue;
            if (alt === 'logo') continue;

            const ext = src.split('?')[0].split('.').pop().toLowerCase();
            const validExts = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'];
            const imgExt = validExts.includes(ext) ? ext : 'png';
            const filename = 'img-' + String(i + 1).padStart(3, '0') + '.' + imgExt;

            images.push({
                originalSrc: src,
                absoluteSrc: img.src,  // browser-resolved absolute URL
                alt: alt,
                filename: filename,
            });

            // Replace src in clone for markdown output
            img.setAttribute('src', 'images/' + filename);
        }

        // Get page title
        const pageTitle = clone.querySelector('h1')?.textContent?.trim()
            || document.title || '';

        // Get clean HTML
        const html = clone.innerHTML;

        return {
            html: html,
            pageTitle: pageTitle,
            images: images,
            url: window.location.href,
        };
    }""")


def download_image(page, url: str, save_path: Path, timeout_ms: int = 10000) -> bool:
    """Download an image using the browser context (handles cookies/auth)."""
    try:
        response = page.evaluate("""async (url) => {
            try {
                const resp = await fetch(url);
                if (!resp.ok) return { ok: false, status: resp.status };
                const blob = await resp.blob();
                const buffer = await blob.arrayBuffer();
                const bytes = Array.from(new Uint8Array(buffer));
                return { ok: true, bytes: bytes, type: resp.headers.get('content-type') };
            } catch (e) {
                return { ok: false, error: e.message };
            }
        }""", url)

        if response and response.get("ok"):
            data = bytes(response["bytes"])
            save_path.parent.mkdir(parents=True, exist_ok=True)
            save_path.write_bytes(data)
            return True
        return False
    except Exception:
        return False


def collect_target_pages(
    menu_tree_path: Path,
    issues_report_path: Optional[Path],
    issues_only: bool,
    lang: str,
    slug_filter: Optional[list[str]],
) -> list[dict]:
    """Build list of pages to crawl."""
    # Load menu tree for URL mapping
    with open(menu_tree_path) as f:
        data = json.load(f)
    menu = data if isinstance(data, list) else data.get("menu", data)

    # Flatten menu tree → slug-to-page mapping
    all_pages = {}
    for cat in menu:
        for l2 in cat.get("children", []):
            def walk(items, mod_label: str, cat_label: str):
                for item in items:
                    url = item.get("url", "")
                    if url and "?doc=" in url:
                        try:
                            slug = url.split("?doc=")[1].split("&")[0]
                            all_pages[slug] = {
                                "slug": slug,
                                "url": url,
                                "label": item.get("label", ""),
                                "module": mod_label,
                                "moduleSlug": slugify(mod_label),
                                "category": cat_label,
                            }
                        except (IndexError, ValueError):
                            pass
                    walk(item.get("children", []), mod_label, cat_label)
            walk(l2.get("children", []), l2.get("label", ""), cat.get("label", ""))

    # Filter by specific slugs
    if slug_filter:
        return [all_pages[s] for s in slug_filter if s in all_pages]

    # Filter to issues-only pages
    if issues_only and issues_report_path and issues_report_path.exists():
        with open(issues_report_path) as f:
            report = json.load(f)

        lang_data = report.get(lang, {})
        issue_slugs = set()
        for pg in lang_data.get("pages", []):
            for issue in pg.get("issues", []):
                if issue.get("type") == "WORD_COUNT_LOW":
                    issue_slugs.add(pg["slug"])
                    break

        return [all_pages[s] for s in issue_slugs if s in all_pages]

    # All pages
    return list(all_pages.values())


def save_checkpoint(completed: set, errors: list):
    data = {
        "completed": list(completed),
        "errors": errors,
        "saved_at": datetime.now().isoformat(),
    }
    with open(CHECKPOINT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def load_checkpoint() -> Optional[dict]:
    if CHECKPOINT_FILE.exists():
        with open(CHECKPOINT_FILE) as f:
            return json.load(f)
    return None


def main():
    parser = argparse.ArgumentParser(
        description="Crawl full content + images from FPT Cloud docs"
    )
    parser.add_argument("--input", default=str(DEFAULT_MENU_TREE),
                        help="Input menu-tree.json")
    parser.add_argument("--output", default=str(DEFAULT_OUTPUT_DIR),
                        help="Output directory")
    parser.add_argument("--issues-only", action="store_true",
                        help="Only crawl WORD_COUNT_LOW pages from compare report")
    parser.add_argument("--lang", default="vi",
                        help="Language for issues filter (default: vi)")
    parser.add_argument("--slugs", default=None,
                        help="Comma-separated list of specific slugs to crawl")
    parser.add_argument("--headed", action="store_true",
                        help="Show browser UI")
    parser.add_argument("--delay", type=float, default=1.0,
                        help="Delay between pages (seconds)")
    parser.add_argument("--timeout", type=int, default=15,
                        help="Page timeout (seconds)")
    parser.add_argument("--resume", action="store_true",
                        help="Resume from checkpoint")
    parser.add_argument("--skip-images", action="store_true",
                        help="Skip downloading images")
    args = parser.parse_args()

    menu_tree_path = Path(args.input)
    output_dir = Path(args.output)
    slug_filter = args.slugs.split(",") if args.slugs else None

    issues_report = DEFAULT_ISSUES_REPORT if args.issues_only else None

    pages = collect_target_pages(
        menu_tree_path, issues_report,
        args.issues_only, args.lang, slug_filter,
    )

    if not pages:
        print("No pages to crawl.")
        sys.exit(0)

    print(f"Pages to crawl: {len(pages)}")
    print(f"Output: {output_dir}")
    print()

    # Resume support
    completed_slugs: set[str] = set()
    errors: list[dict] = []
    if args.resume:
        cp = load_checkpoint()
        if cp:
            completed_slugs = set(cp.get("completed", []))
            errors = cp.get("errors", [])
            print(f"Resuming: {len(completed_slugs)} pages already done\n")

    converter = setup_html2text()
    stats = {"crawled": 0, "images_downloaded": 0, "images_failed": 0, "errors": 0}

    with sync_playwright() as pw:
        browser, context = create_browser(pw, args.headed)
        page = context.new_page()

        for idx, pg in enumerate(pages):
            slug = pg["slug"]
            if slug in completed_slugs:
                continue

            url = pg["url"]
            module_slug = pg["moduleSlug"]
            progress = f"[{idx + 1}/{len(pages)}]"

            print(f"  {progress} {pg['module']} > {pg['label']} ({slug})")

            if not safe_navigate(page, url, args.timeout * 1000):
                print(f"         FAILED to load")
                errors.append({"slug": slug, "url": url, "error": "load_failed"})
                stats["errors"] += 1
                completed_slugs.add(slug)
                continue

            # Check redirect
            current = page.url
            if "/login" in current or "/404" in current:
                print(f"         Redirected → {current}")
                errors.append({"slug": slug, "url": url, "error": f"redirect:{current}"})
                stats["errors"] += 1
                completed_slugs.add(slug)
                continue

            try:
                # Extract content
                result = extract_content_html(page)
                html_content = result["html"]
                images = result["images"]

                # Convert HTML to markdown
                markdown = converter.handle(html_content)

                # Clean up markdown
                # Remove noise lines that survived DOM cleanup
                noise_patterns = [
                    r'^Updated on .*$',
                    r'^Print:\s*$',
                    r'^Export:\s*$',
                    r'^Share:\s*$',
                    r'^\* \* \*\s*$',  # horizontal rules at top
                ]
                lines = markdown.split('\n')
                # Only clean noise from first 20 lines (header area)
                cleaned = []
                for i, line in enumerate(lines):
                    if i < 20:
                        skip = False
                        for pat in noise_patterns:
                            if re.match(pat, line.strip()):
                                skip = True
                                break
                        if skip:
                            continue
                    cleaned.append(line)
                markdown = '\n'.join(cleaned)
                # Remove excessive blank lines
                markdown = re.sub(r'\n{4,}', '\n\n\n', markdown)
                # Remove trailing whitespace
                markdown = '\n'.join(line.rstrip() for line in markdown.split('\n'))
                # Remove leading blank lines
                markdown = markdown.lstrip('\n')

                # Prepare output directory
                page_dir = output_dir / module_slug / slug
                page_dir.mkdir(parents=True, exist_ok=True)

                # Add frontmatter
                frontmatter = f"""---
slug: "{slug}"
title: "{result['pageTitle']}"
module: "{pg['module']}"
category: "{pg['category']}"
source_url: "{url}"
crawled_at: "{datetime.now(timezone(timedelta(hours=7))).isoformat()}"
---

"""
                # Save markdown
                md_path = page_dir / "content.md"
                md_path.write_text(frontmatter + markdown, encoding="utf-8")

                # Download images
                img_stats = {"total": len(images), "downloaded": 0, "failed": 0}
                if not args.skip_images and images:
                    img_dir = page_dir / "images"
                    img_dir.mkdir(exist_ok=True)

                    for img in images:
                        img_url = img["absoluteSrc"]
                        img_path = img_dir / img["filename"]

                        if img_path.exists():
                            img_stats["downloaded"] += 1
                            continue

                        if download_image(page, img_url, img_path):
                            img_stats["downloaded"] += 1
                            stats["images_downloaded"] += 1
                        else:
                            img_stats["failed"] += 1
                            stats["images_failed"] += 1

                # Save metadata
                metadata = {
                    "slug": slug,
                    "title": result["pageTitle"],
                    "module": pg["module"],
                    "moduleSlug": module_slug,
                    "category": pg["category"],
                    "sourceUrl": url,
                    "crawledAt": datetime.now(timezone(timedelta(hours=7))).isoformat(),
                    "wordCount": len(markdown.split()),
                    "images": img_stats,
                    "imageList": [
                        {"filename": img["filename"], "alt": img["alt"], "src": img["originalSrc"]}
                        for img in images
                    ],
                }
                meta_path = page_dir / "metadata.json"
                meta_path.write_text(
                    json.dumps(metadata, ensure_ascii=False, indent=2),
                    encoding="utf-8",
                )

                stats["crawled"] += 1
                print(f"         saved: {len(markdown.split())} words, "
                      f"{img_stats['downloaded']}/{img_stats['total']} images")

            except Exception as e:
                print(f"         ERROR: {e}")
                errors.append({"slug": slug, "url": url, "error": str(e)})
                stats["errors"] += 1

            completed_slugs.add(slug)

            # Checkpoint every 20 pages
            if len(completed_slugs) % 20 == 0:
                save_checkpoint(completed_slugs, errors)
                print(f"    [checkpoint: {len(completed_slugs)} done]")

            time.sleep(args.delay)

        browser.close()

    # Final save
    save_checkpoint(completed_slugs, errors)

    # Summary
    print(f"\n{'='*60}")
    print(f"  Crawled:          {stats['crawled']} pages")
    print(f"  Images downloaded: {stats['images_downloaded']}")
    print(f"  Images failed:     {stats['images_failed']}")
    print(f"  Errors:            {stats['errors']}")
    print(f"  Output:            {output_dir}")
    print(f"{'='*60}")

    if errors:
        print(f"\nErrors ({len(errors)}):")
        for e in errors[:10]:
            print(f"  - {e['slug']}: {e['error']}")
        if len(errors) > 10:
            print(f"  ... +{len(errors) - 10} more")

    # Cleanup checkpoint on full success
    if not errors and CHECKPOINT_FILE.exists():
        CHECKPOINT_FILE.unlink()
        print("\nCheckpoint cleaned up.")


if __name__ == "__main__":
    main()
