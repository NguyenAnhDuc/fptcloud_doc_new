#!/usr/bin/env python3
"""
Crawl full menu structure from FPT Cloud documentation.

Usage:
  python crawl_menu.py --inspect URL          # Inspect DOM structure of a page
  python crawl_menu.py --step1                # Crawl L1-L2 menu from listing page
  python crawl_menu.py --step2 --input F      # Deep crawl L3+ from each L2 URL
  python crawl_menu.py --full                 # Run step1 + step2

Options:
  --headed          Open browser with UI (for debugging)
  --delay N         Delay between pages in seconds (default: 1.5)
  --timeout N       Timeout per page in seconds (default: 15)
  --resume          Resume from checkpoint
  --base-url URL    Base URL (default: https://fptcloud.com)
  --selectors FILE  Selector config file (default: selectors.json)
  --output FILE     Output file path
  --input FILE      Input file for step2
"""

import argparse
import csv
import json
import os
import sys
import time
from datetime import datetime, timezone, timedelta
from pathlib import Path
from urllib.parse import urljoin

from playwright.sync_api import sync_playwright, TimeoutError as PwTimeout

SCRIPT_DIR = Path(__file__).parent
DEFAULT_BASE_URL = "https://fptcloud.com"
DEFAULT_LISTING_PATH = "/danh-sach-tai-lieu/"
DEFAULT_SELECTORS = SCRIPT_DIR / "selectors.json"
CHECKPOINT_FILE = SCRIPT_DIR / "checkpoint.json"

# Known L1-L2 structure for validation
KNOWN_L1 = [
    "FPT Cloud Server", "FPT Storage", "FPT Network", "FPT Container",
    "FPT Security", "FPT Monitoring", "FPT Cloud Backup & DR",
    "FPT DevSecOps Services", "FPT Integration", "FPT Database Engine",
    "Support", "Billing", "FPT Security Platform", "FPT Data Platform",
]


def load_selectors(path):
    p = Path(path)
    if p.exists():
        with open(p) as f:
            return json.load(f)
    return {
        "sidebar_container": [".table-of-contents", "aside nav", "nav[role='navigation']"],
        "menu_item": ["a[href]"],
        "expandable_trigger": ["[aria-expanded]", "details > summary"],
    }


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
    """Navigate to URL with retry. Returns True if successful."""
    for attempt in range(3):
        try:
            resp = page.goto(url, wait_until="domcontentloaded", timeout=timeout_ms)
            if resp and resp.status >= 400:
                print(f"    HTTP {resp.status} for {url}")
                if resp.status == 404:
                    return False
            # Wait a bit for dynamic content
            page.wait_for_timeout(1500)
            return True
        except PwTimeout:
            if attempt < 2:
                print(f"    Timeout (attempt {attempt + 1}/3), retrying...")
                page.wait_for_timeout(2000)
            else:
                print(f"    Timeout after 3 attempts for {url}")
                return False
        except Exception as e:
            if attempt < 2:
                print(f"    Error (attempt {attempt + 1}/3): {e}")
                page.wait_for_timeout(2000)
            else:
                print(f"    Failed after 3 attempts: {e}")
                return False
    return False


# ── Inspect Mode ─────────────────────────────────────────────────────

def inspect_page(url, headed=False, timeout=15):
    """Dump DOM elements that look like navigation/menu."""
    print(f"\n=== Inspecting: {url} ===\n")
    with sync_playwright() as pw:
        browser, context = create_browser(pw, headed)
        page = context.new_page()

        if not safe_navigate(page, url, timeout * 1000):
            print("Failed to load page.")
            browser.close()
            return

        # Dump potential nav/menu elements
        results = page.evaluate("""() => {
            const selectors = [
                'nav', '[role="navigation"]', '[role="menu"]',
                '.menu', '.nav', '.sidebar', '.toc', '.table-of-contents',
                '[class*="menu"]', '[class*="nav"]', '[class*="sidebar"]',
                '[id*="menu"]', '[id*="nav"]', '[id*="sidebar"]',
                'aside', 'ul.menu', 'ul.nav',
                '.entry-content', 'article', '.post-content',
                '.wp-block-navigation',
            ];
            const seen = new Set();
            const results = [];
            for (const sel of selectors) {
                try {
                    const els = document.querySelectorAll(sel);
                    for (const el of els) {
                        const key = el.tagName + '.' + el.className + '#' + el.id;
                        if (seen.has(key)) continue;
                        seen.add(key);
                        const text = el.textContent.trim().substring(0, 200);
                        const children = el.children.length;
                        const links = el.querySelectorAll('a[href]').length;
                        const depth = (() => {
                            let d = 0, n = el;
                            while (n.parentElement) { d++; n = n.parentElement; }
                            return d;
                        })();
                        results.push({
                            selector: sel,
                            tag: el.tagName.toLowerCase(),
                            className: el.className.substring(0, 120),
                            id: el.id,
                            depth: depth,
                            childElements: children,
                            links: links,
                            textPreview: text.substring(0, 150),
                        });
                    }
                } catch(e) {}
            }
            return results;
        }""")

        print(f"Found {len(results)} potential menu/nav elements:\n")
        for i, r in enumerate(results):
            print(f"  [{i+1}] <{r['tag']}> class=\"{r['className']}\" id=\"{r['id']}\"")
            print(f"      selector matched: {r['selector']}")
            print(f"      depth={r['depth']}, children={r['childElements']}, links={r['links']}")
            preview = r['textPreview'].replace('\n', ' ')[:120]
            print(f"      text: \"{preview}\"")
            print()

        # Also dump the full page structure summary
        page_info = page.evaluate("""() => {
            return {
                title: document.title,
                url: window.location.href,
                totalLinks: document.querySelectorAll('a[href]').length,
                totalLists: document.querySelectorAll('ul, ol').length,
                totalNavs: document.querySelectorAll('nav').length,
                bodyClasses: document.body.className,
            };
        }""")
        print(f"  Page info: title=\"{page_info['title']}\"")
        print(f"  Links: {page_info['totalLinks']}, Lists: {page_info['totalLists']}, Navs: {page_info['totalNavs']}")
        print(f"  Body classes: {page_info['bodyClasses']}")

        browser.close()


# ── Step 1: Crawl L1-L2 ─────────────────────────────────────────────

def crawl_step1(base_url, headed=False, timeout=15, delay=1.5):
    """Crawl the listing page to get L1 categories and L2 page links."""
    url = base_url.rstrip("/") + DEFAULT_LISTING_PATH
    print(f"\n=== Step 1: Crawling L1-L2 from {url} ===\n")

    with sync_playwright() as pw:
        browser, context = create_browser(pw, headed)
        page = context.new_page()

        if not safe_navigate(page, url, timeout * 1000):
            print("Failed to load listing page.")
            browser.close()
            return None

        # Extract menu using the known FPT Cloud DOM structure:
        #   .bota_doccument_category_li     = L1 category
        #   .bota_doccument_cat_item_li a   = L2 doc link
        #   .bota_doccument_category_nav_tab = top-level tabs (Portal, AI Factory, FAQ)
        menu_data = page.evaluate("""() => {
            const results = [];

            // 1. Extract top-level tabs (FPT Cloud Portal, FPT AI Factory, FAQ)
            const topTabs = document.querySelectorAll('.bota_doccument_category_nav_tab li a[href]');
            const topTabItems = [];
            for (const a of topTabs) {
                const text = a.textContent.trim();
                const href = a.href;
                if (text && href && !href.endsWith('/danh-sach-tai-lieu/')) {
                    topTabItems.push({ label: text, url: href, level: 1, children: [], isTopTab: true });
                }
            }

            // 2. Extract category groups from the main tab content
            const categories = document.querySelectorAll('.bota_doccument_category_li');
            for (const cat of categories) {
                // Get category label — first direct text node or first element text
                let label = '';
                for (const node of cat.childNodes) {
                    if (node.nodeType === 3) { // text node
                        const t = node.textContent.trim();
                        if (t.length > 2) { label = t; break; }
                    }
                }
                if (!label) {
                    // Try first child that's not the item list
                    for (const child of cat.children) {
                        if (!child.classList.contains('bota_doccument_cat_item')) {
                            const t = child.textContent.trim();
                            if (t.length > 2 && t.length < 80) { label = t; break; }
                        }
                    }
                }
                if (!label) continue;

                // Get L2 items
                const children = [];
                const items = cat.querySelectorAll('.bota_doccument_cat_item_li a[href]');
                for (const a of items) {
                    const text = a.textContent.trim();
                    const href = a.href;
                    if (text && href) {
                        children.push({ label: text, url: href, level: 2, children: [] });
                    }
                }

                if (children.length > 0) {
                    results.push({ label: label, level: 1, url: null, children: children });
                }
            }

            return {
                results: results,
                topTabs: topTabItems,
                debug: {
                    categoriesFound: categories.length,
                    topTabsFound: topTabs.length,
                    pageTitle: document.title,
                    url: window.location.href,
                }
            };
        }""")

        browser.close()

    results = menu_data["results"]
    top_tabs = menu_data["topTabs"]
    debug = menu_data["debug"]

    # Add top tabs as separate L1 entries
    for tab in top_tabs:
        results.append(tab)

    print(f"  Page: {debug['pageTitle']}")
    print(f"  Categories: {debug['categoriesFound']}, Top tabs: {debug['topTabsFound']}")
    print(f"  Extracted {len(results)} categories\n")

    # Validate against known structure
    found_labels = {r["label"] for r in results}
    for known in KNOWN_L1:
        if known not in found_labels:
            matched = any(known.lower() in fl.lower() or fl.lower() in known.lower() for fl in found_labels)
            if not matched:
                print(f"  WARNING: Known category '{known}' not found in crawl results")

    # Print summary
    for cat in results:
        children = cat.get("children", [])
        print(f"  {cat['label']} ({len(children)} items)")
        for ch in children:
            print(f"    - {ch['label']} → {ch['url']}")

    total_pages = sum(len(r.get("children", [])) for r in results)
    print(f"\n  Total: {len(results)} categories, {total_pages} pages")

    return results


# ── Step 2: Deep crawl L3+ ──────────────────────────────────────────

def crawl_sidebar(page, selectors, url):
    """Extract sidebar/TOC menu items from an FPT Cloud doc page.

    Doc pages contain ?doc= query param links for sub-pages. These appear in
    the desktop sidebar (depth ~11) and mobile sidebar (depth ~19). We only
    take the first occurrence (desktop) and use DOM depth differences to
    determine nesting (depth 11 = L3, depth 13 = L4).
    """

    result = page.evaluate("""(pageUrl) => {
        // Find ALL links with ?doc= — these are the actual doc sub-pages
        const allDocLinks = document.querySelectorAll("a[href*='?doc=']");
        if (allDocLinks.length === 0) {
            return { items: [], usedSelector: null };
        }

        // Deduplicate: same href appears in desktop + mobile sidebar.
        // Take first occurrence of each ?doc= value (desktop version).
        const seen = new Set();
        const rawLinks = [];
        for (const a of allDocLinks) {
            const url = new URL(a.href);
            const docParam = url.searchParams.get('doc');
            if (!docParam || seen.has(docParam)) continue;
            seen.add(docParam);

            // Compute DOM depth relative to body
            let depth = 0;
            let node = a;
            while (node.parentElement) { depth++; node = node.parentElement; }

            // Check if parent LI has class 'has-child' (indicates sub-items follow)
            const parentLi = a.closest('li');
            const hasChild = parentLi?.classList?.contains('has-child') || false;

            rawLinks.push({
                label: a.textContent.trim(),
                url: a.href,
                docParam: docParam,
                depth: depth,
                hasChild: hasChild,
            });
        }

        if (rawLinks.length === 0) {
            return { items: [], usedSelector: null };
        }

        // Determine base depth (minimum depth = L3)
        const minDepth = Math.min(...rawLinks.map(l => l.depth));

        // Build tree: iterate flat list, use depth to determine parent-child.
        // Same depth = siblings, greater depth = children of previous item.
        function buildTree(links) {
            const root = [];
            const stack = [{ children: root, depth: minDepth - 1 }];

            for (const link of links) {
                const item = {
                    label: link.label,
                    url: link.url,
                    level: 3 + Math.round((link.depth - minDepth) / 2),
                    children: [],
                };

                // Pop stack until we find a parent with lesser depth
                while (stack.length > 1 && stack[stack.length - 1].depth >= link.depth) {
                    stack.pop();
                }

                // Add to current parent
                stack[stack.length - 1].children.push(item);

                // If this item has children (deeper items follow), push it as potential parent
                stack.push({ children: item.children, depth: link.depth });
            }

            return root;
        }

        const treeItems = buildTree(rawLinks);

        return {
            items: treeItems,
            usedSelector: '?doc= links (' + rawLinks.length + ' unique)',
        };
    }""", url)

    return result


def crawl_step2(menu_l2, selectors, headed=False, timeout=15, delay=1.5, resume_data=None):
    """Deep crawl L3+ from each L2 URL."""
    print(f"\n=== Step 2: Deep crawling L3+ ===\n")

    errors = []
    total_sub_items = 0
    checkpoint = resume_data or {}
    completed_urls = set(checkpoint.get("completed", []))

    with sync_playwright() as pw:
        browser, context = create_browser(pw, headed)
        page = context.new_page()

        for cat_idx, category in enumerate(menu_l2):
            cat_label = category["label"]
            children = category.get("children", [])
            print(f"[{cat_idx + 1:02d}/{len(menu_l2)}] {cat_label}")

            for ch_idx, child in enumerate(children):
                url = child.get("url")
                if not url:
                    continue

                if url in completed_urls:
                    sub_count = count_items(child.get("children", []))
                    print(f"  [{ch_idx + 1}/{len(children)}] {child['label']} → SKIP (resumed), {sub_count} sub-items")
                    total_sub_items += sub_count
                    continue

                print(f"  [{ch_idx + 1}/{len(children)}] {child['label']} → {url}")

                if not safe_navigate(page, url, timeout * 1000):
                    errors.append({
                        "url": url,
                        "error": f"Failed to load after retries",
                        "category": cat_label,
                        "page": child["label"],
                    })
                    continue

                # Check for redirect to login/404
                current_url = page.url
                if "/login" in current_url or "/404" in current_url:
                    print(f"         Redirected to {current_url} → skip")
                    errors.append({
                        "url": url,
                        "error": f"Redirected to {current_url}",
                        "category": cat_label,
                        "page": child["label"],
                    })
                    continue

                sidebar_result = crawl_sidebar(page, selectors, url)
                sub_items = sidebar_result["items"]
                used_sel = sidebar_result["usedSelector"]

                child["children"] = sub_items
                sub_count = count_items(sub_items)
                total_sub_items += sub_count

                if used_sel:
                    print(f"         sidebar: {used_sel}, {sub_count} sub-items")
                else:
                    print(f"         no sidebar found")

                completed_urls.add(url)
                time.sleep(delay)

            # Save checkpoint after each category
            save_checkpoint(menu_l2, list(completed_urls), errors)
            print()

        browser.close()

    print(f"\n=== Summary ===")
    print(f"Total: {len(menu_l2)} categories, "
          f"{sum(len(c.get('children', [])) for c in menu_l2)} pages, "
          f"{total_sub_items} sub-items")
    print(f"Errors: {len(errors)}")

    return menu_l2, errors


def count_items(items):
    """Recursively count all items in a tree."""
    count = len(items)
    for item in items:
        count += count_items(item.get("children", []))
    return count


def save_checkpoint(menu, completed, errors):
    data = {
        "menu": menu,
        "completed": completed,
        "errors": errors,
        "saved_at": datetime.now().isoformat(),
    }
    with open(CHECKPOINT_FILE, "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def load_checkpoint():
    if CHECKPOINT_FILE.exists():
        with open(CHECKPOINT_FILE) as f:
            return json.load(f)
    return None


# ── Output ───────────────────────────────────────────────────────────

def save_json(menu, errors, output_path, source_url):
    """Save the final menu tree as JSON."""
    tz = timezone(timedelta(hours=7))
    total_categories = len(menu)
    total_pages = sum(len(c.get("children", [])) for c in menu)
    total_sub = sum(
        count_items(ch.get("children", []))
        for c in menu
        for ch in c.get("children", [])
    )

    data = {
        "crawled_at": datetime.now(tz).isoformat(),
        "source_url": source_url,
        "total_categories": total_categories,
        "total_pages": total_pages,
        "total_sub_items": total_sub,
        "menu": menu,
        "errors": errors,
    }

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Saved → {output_path}")


def save_csv(menu, output_path):
    """Save a flat CSV for easy review."""
    csv_path = Path(output_path).with_suffix(".csv")

    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["level", "label", "url", "parent"])

        def write_items(items, parent_label):
            for item in items:
                writer.writerow([
                    item.get("level", ""),
                    item.get("label", ""),
                    item.get("url", ""),
                    parent_label,
                ])
                write_items(item.get("children", []), item.get("label", ""))

        for category in menu:
            writer.writerow([1, category["label"], category.get("url", ""), ""])
            write_items(category.get("children", []), category["label"])

    print(f"Saved → {csv_path}")


# ── CLI ──────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Crawl FPT Cloud documentation menu structure")

    # Modes
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--inspect", metavar="URL", help="Inspect DOM of a page")
    mode.add_argument("--step1", action="store_true", help="Crawl L1-L2 from listing page")
    mode.add_argument("--step2", action="store_true", help="Deep crawl L3+ from L2 URLs")
    mode.add_argument("--full", action="store_true", help="Run step1 + step2")

    # Options
    parser.add_argument("--headed", action="store_true", help="Show browser UI")
    parser.add_argument("--delay", type=float, default=1.5, help="Delay between pages (seconds)")
    parser.add_argument("--timeout", type=int, default=15, help="Timeout per page (seconds)")
    parser.add_argument("--resume", action="store_true", help="Resume from checkpoint")
    parser.add_argument("--base-url", default=DEFAULT_BASE_URL, help="Base URL")
    parser.add_argument("--selectors", default=str(DEFAULT_SELECTORS), help="Selector config file")
    parser.add_argument("--output", default=None, help="Output file path")
    parser.add_argument("--input", default=None, help="Input file for step2")

    args = parser.parse_args()
    selectors = load_selectors(args.selectors)

    if args.inspect:
        inspect_page(args.inspect, headed=args.headed, timeout=args.timeout)
        return

    if args.step1:
        output = args.output or "menu-l2.json"
        menu = crawl_step1(args.base_url, headed=args.headed, timeout=args.timeout, delay=args.delay)
        if menu:
            save_json(menu, [], output, args.base_url + DEFAULT_LISTING_PATH)
            save_csv(menu, output)

    elif args.step2:
        input_file = args.input or "menu-l2.json"
        output = args.output or "menu-tree.json"

        if not Path(input_file).exists():
            print(f"Error: Input file '{input_file}' not found. Run --step1 first.")
            sys.exit(1)

        with open(input_file) as f:
            data = json.load(f)

        # Handle both raw array and wrapped format
        menu_l2 = data if isinstance(data, list) else data.get("menu", data)

        resume_data = load_checkpoint() if args.resume else None
        if resume_data:
            # Use checkpoint menu (has partial results) instead of input
            menu_l2 = resume_data.get("menu", menu_l2)
            print(f"  Resuming from checkpoint ({len(resume_data.get('completed', []))} pages done)")

        menu, errors = crawl_step2(
            menu_l2, selectors,
            headed=args.headed, timeout=args.timeout, delay=args.delay,
            resume_data=resume_data,
        )
        save_json(menu, errors, output, args.base_url + DEFAULT_LISTING_PATH)
        save_csv(menu, output)

    elif args.full:
        output = args.output or "menu-tree.json"

        # Step 1
        menu = crawl_step1(args.base_url, headed=args.headed, timeout=args.timeout, delay=args.delay)
        if not menu:
            print("Step 1 failed. Exiting.")
            sys.exit(1)

        l2_output = "menu-l2.json"
        save_json(menu, [], l2_output, args.base_url + DEFAULT_LISTING_PATH)
        save_csv(menu, l2_output)

        # Step 2
        menu, errors = crawl_step2(
            menu, selectors,
            headed=args.headed, timeout=args.timeout, delay=args.delay,
        )
        save_json(menu, errors, output, args.base_url + DEFAULT_LISTING_PATH)
        save_csv(menu, output)


if __name__ == "__main__":
    main()
