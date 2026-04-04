#!/usr/bin/env python3
"""
Crawl content fingerprints from FPT Cloud documentation pages.

For each doc page (?doc=slug), extracts:
  - Headings (h1-h6) with hierarchy
  - Image count + alt texts
  - Table count
  - Code block count
  - Word count (visible text only)
  - Paragraph count

Usage:
  python crawl_content.py                          # Crawl all from menu-tree.json
  python crawl_content.py --input menu-tree.json   # Specify input
  python crawl_content.py --resume                 # Resume from checkpoint
  python crawl_content.py --headed                 # Show browser for debugging
  python crawl_content.py --delay 2                # Delay between pages (default: 1.0)
  python crawl_content.py --timeout 20             # Page timeout in seconds (default: 15)

Output:
  content-fingerprints.json — fingerprint per doc page
"""

import argparse
import json
import sys
import time
from datetime import datetime, timezone, timedelta
from pathlib import Path

from playwright.sync_api import sync_playwright, TimeoutError as PwTimeout

SCRIPT_DIR = Path(__file__).parent
DEFAULT_INPUT = SCRIPT_DIR / "menu-tree.json"
DEFAULT_OUTPUT = SCRIPT_DIR / "content-fingerprints.json"
CHECKPOINT_FILE = SCRIPT_DIR / "content-checkpoint.json"


def create_browser(pw, headed=False):
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


def safe_navigate(page, url, timeout_ms=15000):
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


def extract_fingerprint(page):
    """Extract content fingerprint from the current page's main content area."""
    return page.evaluate("""() => {
        // Find main content area — try common selectors
        const contentSelectors = [
            '.entry-content',
            '.post-content',
            'article .content',
            'article',
            '.documentation-content',
            '.doc-content',
            'main .content',
            'main',
        ];

        let content = null;
        for (const sel of contentSelectors) {
            const el = document.querySelector(sel);
            if (el && el.textContent.trim().length > 100) {
                content = el;
                break;
            }
        }

        if (!content) {
            // Fallback: use body but try to exclude nav/sidebar/header/footer
            content = document.body;
        }

        // Headings
        const headings = [];
        const hTags = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
        for (const h of hTags) {
            const level = parseInt(h.tagName[1]);
            const text = h.textContent.trim();
            if (text.length > 0 && text.length < 300) {
                headings.push({ level, text });
            }
        }

        // Images
        const images = [];
        const imgs = content.querySelectorAll('img');
        for (const img of imgs) {
            const src = img.getAttribute('src') || '';
            const alt = img.getAttribute('alt') || '';
            // Skip tiny icons, tracking pixels
            if (img.naturalWidth > 0 && img.naturalWidth < 10) continue;
            if (src.includes('tracking') || src.includes('pixel')) continue;
            images.push({ alt: alt.substring(0, 200), hasSrc: !!src });
        }

        // Tables
        const tables = content.querySelectorAll('table');
        const tableCount = tables.length;
        const tableSummaries = [];
        for (const t of tables) {
            const rows = t.querySelectorAll('tr').length;
            const cols = t.querySelector('tr')
                ? t.querySelector('tr').querySelectorAll('th, td').length
                : 0;
            tableSummaries.push({ rows, cols });
        }

        // Code blocks
        const codeBlocks = content.querySelectorAll('pre, pre code');
        const codeBlockCount = content.querySelectorAll('pre').length;

        // Word count — visible text only, excluding nav elements
        const excludeSelectors = 'nav, .sidebar, .toc, .table-of-contents, header, footer, .menu, script, style';
        const clone = content.cloneNode(true);
        clone.querySelectorAll(excludeSelectors).forEach(el => el.remove());
        const visibleText = clone.textContent || '';
        const words = visibleText.trim().split(/\s+/).filter(w => w.length > 0);
        const wordCount = words.length;

        // Paragraphs
        const paragraphs = content.querySelectorAll('p');
        let paragraphCount = 0;
        for (const p of paragraphs) {
            if (p.textContent.trim().length > 10) paragraphCount++;
        }

        // Lists
        const lists = content.querySelectorAll('ul, ol');
        let listItemCount = 0;
        for (const l of lists) {
            listItemCount += l.querySelectorAll(':scope > li').length;
        }

        // Links (external)
        const links = content.querySelectorAll('a[href]');
        let externalLinkCount = 0;
        for (const a of links) {
            const href = a.getAttribute('href') || '';
            if (href.startsWith('http') && !href.includes('fptcloud.com')) {
                externalLinkCount++;
            }
        }

        // Page title
        const pageTitle = document.querySelector('h1')?.textContent?.trim()
            || document.title || '';

        return {
            pageTitle,
            headings,
            imageCount: images.length,
            images: images.slice(0, 50),  // cap for size
            tableCount,
            tables: tableSummaries,
            codeBlockCount,
            wordCount,
            paragraphCount,
            listItemCount,
            externalLinkCount,
        };
    }""")


def collect_urls(menu):
    """Flatten menu tree into list of { slug, url, label, module, category }."""
    pages = []
    for cat in menu:
        for l2 in cat.get("children", []):
            def walk(items):
                for item in items:
                    url = item.get("url", "")
                    if url and "?doc=" in url:
                        try:
                            slug = url.split("?doc=")[1].split("&")[0]
                            pages.append({
                                "slug": slug,
                                "url": url,
                                "label": item.get("label", ""),
                                "module": l2.get("label", ""),
                                "moduleSlug": (l2.get("url", "") or "").split("/documents/")[-1].rstrip("/"),
                                "category": cat.get("label", ""),
                            })
                        except (IndexError, ValueError):
                            pass
                    walk(item.get("children", []))
            walk(l2.get("children", []))
    return pages


def save_checkpoint(results, completed_slugs, errors):
    data = {
        "results": results,
        "completed": list(completed_slugs),
        "errors": errors,
        "saved_at": datetime.now().isoformat(),
    }
    with open(CHECKPOINT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def load_checkpoint():
    if CHECKPOINT_FILE.exists():
        with open(CHECKPOINT_FILE) as f:
            return json.load(f)
    return None


def main():
    parser = argparse.ArgumentParser(description="Crawl content fingerprints from FPT Cloud docs")
    parser.add_argument("--input", default=str(DEFAULT_INPUT), help="Input menu-tree.json")
    parser.add_argument("--output", default=str(DEFAULT_OUTPUT), help="Output file")
    parser.add_argument("--headed", action="store_true", help="Show browser UI")
    parser.add_argument("--delay", type=float, default=1.0, help="Delay between pages (seconds)")
    parser.add_argument("--timeout", type=int, default=15, help="Page timeout (seconds)")
    parser.add_argument("--resume", action="store_true", help="Resume from checkpoint")
    args = parser.parse_args()

    # Load menu tree
    input_path = Path(args.input)
    if not input_path.exists():
        print(f"Error: {input_path} not found. Run crawl_menu.py --full first.")
        sys.exit(1)

    with open(input_path) as f:
        data = json.load(f)
    menu = data if isinstance(data, list) else data.get("menu", data)

    pages = collect_urls(menu)
    print(f"Found {len(pages)} doc pages to crawl\n")

    # Resume support
    results = {}
    completed_slugs = set()
    errors = []

    if args.resume:
        cp = load_checkpoint()
        if cp:
            results = {r["slug"]: r for r in cp.get("results", [])}
            completed_slugs = set(cp.get("completed", []))
            errors = cp.get("errors", [])
            print(f"Resuming: {len(completed_slugs)} pages already done\n")

    with sync_playwright() as pw:
        browser, context = create_browser(pw, args.headed)
        page = context.new_page()

        for idx, pg in enumerate(pages):
            slug = pg["slug"]
            if slug in completed_slugs:
                continue

            url = pg["url"]
            label = pg["label"]
            module = pg["module"]
            progress = f"[{idx + 1}/{len(pages)}]"

            print(f"  {progress} {module} > {label} ({slug})")

            if not safe_navigate(page, url, args.timeout * 1000):
                print(f"         FAILED to load")
                errors.append({"slug": slug, "url": url, "error": "load_failed"})
                completed_slugs.add(slug)
                continue

            # Check redirect
            current = page.url
            if "/login" in current or "/404" in current:
                print(f"         Redirected → {current}")
                errors.append({"slug": slug, "url": url, "error": f"redirect:{current}"})
                completed_slugs.add(slug)
                continue

            try:
                fp = extract_fingerprint(page)
                results[slug] = {
                    "slug": slug,
                    "url": url,
                    "label": label,
                    "module": module,
                    "moduleSlug": pg["moduleSlug"],
                    "category": pg["category"],
                    "fingerprint": fp,
                }
                h_count = len(fp.get("headings", []))
                print(f"         words={fp['wordCount']}, headings={h_count}, "
                      f"imgs={fp['imageCount']}, tables={fp['tableCount']}, "
                      f"code={fp['codeBlockCount']}")
            except Exception as e:
                print(f"         ERROR extracting: {e}")
                errors.append({"slug": slug, "url": url, "error": str(e)})

            completed_slugs.add(slug)

            # Save checkpoint every 20 pages
            if len(completed_slugs) % 20 == 0:
                save_checkpoint(list(results.values()), completed_slugs, errors)
                print(f"    [checkpoint saved: {len(completed_slugs)} done]")

            time.sleep(args.delay)

        browser.close()

    # Save final output
    tz = timezone(timedelta(hours=7))
    output = {
        "crawled_at": datetime.now(tz).isoformat(),
        "source_url": data.get("source_url", ""),
        "total_pages": len(results),
        "total_errors": len(errors),
        "pages": list(results.values()),
        "errors": errors,
    }

    output_path = Path(args.output)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"\n=== Done ===")
    print(f"Crawled: {len(results)} pages")
    print(f"Errors: {len(errors)}")
    print(f"Saved → {output_path}")

    # Cleanup checkpoint on success
    if CHECKPOINT_FILE.exists() and len(errors) == 0:
        CHECKPOINT_FILE.unlink()
        print("Checkpoint cleaned up.")


if __name__ == "__main__":
    main()
