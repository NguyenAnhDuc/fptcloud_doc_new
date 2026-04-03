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

def extract_categories_from_page(page):
    """Extract L1 categories and L2 items from the currently visible tab content."""
    return page.evaluate("""() => {
        const results = [];
        const categories = document.querySelectorAll('.bota_doccument_category_li');
        for (const cat of categories) {
            // Skip hidden categories (from inactive tabs)
            if (cat.offsetParent === null && cat.style.display !== '') continue;

            let label = '';
            for (const node of cat.childNodes) {
                if (node.nodeType === 3) {
                    const t = node.textContent.trim();
                    if (t.length > 2) { label = t; break; }
                }
            }
            if (!label) {
                for (const child of cat.children) {
                    if (!child.classList.contains('bota_doccument_cat_item')) {
                        const t = child.textContent.trim();
                        if (t.length > 2 && t.length < 80) { label = t; break; }
                    }
                }
            }
            if (!label) continue;

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
        return results;
    }""")


def crawl_step1(base_url, headed=False, timeout=15, delay=1.5):
    """Crawl the listing page to get L1 categories and L2 page links.

    Clicks through ALL tabs (FPT Cloud Portal, FPT AI Factory, FAQ, etc.)
    to capture the complete menu structure.
    """
    url = base_url.rstrip("/") + DEFAULT_LISTING_PATH
    print(f"\n=== Step 1: Crawling L1-L2 from {url} ===\n")

    with sync_playwright() as pw:
        browser, context = create_browser(pw, headed)
        page = context.new_page()

        if not safe_navigate(page, url, timeout * 1000):
            print("Failed to load listing page.")
            browser.close()
            return None

        # 1. Get all tab links
        tab_info = page.evaluate("""() => {
            const tabs = [];
            const tabLinks = document.querySelectorAll('.bota_doccument_category_nav_tab li a[href]');
            for (const a of tabLinks) {
                tabs.push({
                    label: a.textContent.trim(),
                    href: a.href,
                    dataId: a.getAttribute('data-id') || a.getAttribute('href'),
                    isActive: a.closest('li')?.classList?.contains('active') || false,
                });
            }
            return {
                tabs: tabs,
                pageTitle: document.title,
            };
        }""")

        all_tabs = tab_info["tabs"]
        print(f"  Page: {tab_info['pageTitle']}")
        print(f"  Found {len(all_tabs)} tabs: {', '.join(t['label'] for t in all_tabs)}\n")

        # 2. Extract categories from the default active tab first
        all_results = []
        print(f"  --- Extracting from default active tab ---")
        default_cats = extract_categories_from_page(page)
        print(f"  Found {len(default_cats)} categories from default tab")
        all_results.extend(default_cats)

        # Track which tab labels we've processed
        processed_labels = set()
        for cat in default_cats:
            processed_labels.add(cat["label"])

        # 3. Click each non-active tab and extract its categories
        for tab in all_tabs:
            if tab["isActive"]:
                continue

            print(f"\n  --- Clicking tab: {tab['label']} ({tab['href']}) ---")
            try:
                # Navigate to the tab URL
                if not safe_navigate(page, tab["href"], timeout * 1000):
                    print(f"    Failed to load tab: {tab['label']}")
                    # Try clicking instead
                    try:
                        page.click(f"a[href='{tab['href']}']", timeout=5000)
                        page.wait_for_timeout(2000)
                    except Exception:
                        print(f"    Click also failed, skipping tab")
                        continue

                tab_cats = extract_categories_from_page(page)
                new_cats = [c for c in tab_cats if c["label"] not in processed_labels]

                if new_cats:
                    print(f"    Found {len(new_cats)} new categories")
                    all_results.extend(new_cats)
                    for cat in new_cats:
                        processed_labels.add(cat["label"])
                elif tab_cats:
                    print(f"    Found {len(tab_cats)} categories (all duplicates, skipped)")
                else:
                    # No categories found — this tab might be a single-page section
                    # Add it as an L1 entry so step2 can crawl its sub-pages
                    print(f"    No categories found — adding as L1 entry")
                    all_results.append({
                        "label": tab["label"],
                        "level": 1,
                        "url": tab["href"],
                        "children": [],
                        "isTopTab": True,
                    })

                time.sleep(delay)

            except Exception as e:
                print(f"    Error processing tab {tab['label']}: {e}")

        browser.close()

    results = all_results

    print(f"\n  === Summary ===")
    print(f"  Extracted {len(results)} total categories\n")

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

    Strategy:
    1. Find the sidebar container that holds ?doc= links
    2. Walk the <ul>/<li> tree structure to capture BOTH:
       - Link items (<a href="?doc=...">) → leaf docs
       - Non-link group headers (text-only <li> with child <ul>) → categories
    3. Use the DOM tree structure (not depth heuristics) for accurate hierarchy
    """

    result = page.evaluate("""(pageUrl) => {
        // Step 1: Find sidebar container
        // Look for the first UL that contains ?doc= links (desktop sidebar)
        const allDocLinks = document.querySelectorAll("a[href*='?doc=']");
        if (allDocLinks.length === 0) {
            return { items: [], usedSelector: null };
        }

        // Find the common ancestor UL of all doc links (the sidebar root)
        // Use the first doc link's ancestor UL that contains many links
        let sidebarRoot = null;
        let firstLink = allDocLinks[0];
        let node = firstLink.parentElement;
        while (node) {
            if (node.tagName === 'UL' || node.tagName === 'OL') {
                const linkCount = node.querySelectorAll("a[href*='?doc=']").length;
                // Take the first UL that has most of the links (desktop sidebar)
                if (linkCount >= allDocLinks.length / 2) {
                    sidebarRoot = node;
                    break;
                }
            }
            node = node.parentElement;
        }

        if (!sidebarRoot) {
            // Fallback: use old method with flat links
            sidebarRoot = firstLink.closest('ul');
        }

        // Step 2: Recursively walk the UL/LI tree
        function walkList(ul, baseLevel) {
            const items = [];
            if (!ul) return items;

            const lis = ul.children;
            for (const li of lis) {
                if (li.tagName !== 'LI') continue;

                // Find direct <a> link (not in nested UL)
                let link = null;
                let groupLabel = null;
                let childUl = null;

                for (const child of li.children) {
                    if (child.tagName === 'A' && child.href && child.href.includes('?doc=')) {
                        link = child;
                    } else if (child.tagName === 'UL' || child.tagName === 'OL') {
                        childUl = child;
                    } else if (child.tagName === 'SPAN' || child.tagName === 'DIV' ||
                               child.tagName === 'P' || child.tagName === 'STRONG') {
                        const text = child.textContent.trim();
                        if (text.length > 1 && text.length < 200) {
                            groupLabel = text;
                        }
                    }
                }

                // Also check: the <a> might be a direct child text node
                if (!link) {
                    const directA = li.querySelector(':scope > a[href*="?doc="]');
                    if (directA) link = directA;
                }

                // Also look for child UL if not found yet
                if (!childUl) {
                    childUl = li.querySelector(':scope > ul, :scope > ol');
                }

                // If no link and no group label, try getting text from LI directly
                if (!link && !groupLabel && childUl) {
                    // This LI is a group header — get its text (excluding child UL text)
                    let text = '';
                    for (const cn of li.childNodes) {
                        if (cn.nodeType === 3) { // text node
                            text += cn.textContent.trim();
                        } else if (cn.tagName !== 'UL' && cn.tagName !== 'OL') {
                            text += cn.textContent.trim();
                        }
                    }
                    text = text.trim();
                    if (text.length > 1 && text.length < 200) {
                        groupLabel = text;
                    }
                }

                if (link) {
                    const item = {
                        label: link.textContent.trim(),
                        url: link.href,
                        level: baseLevel,
                        children: [],
                    };

                    // If this link item also has a child UL, recurse
                    if (childUl) {
                        item.children = walkList(childUl, baseLevel + 1);
                    }

                    items.push(item);
                } else if (groupLabel && childUl) {
                    // Non-link group header with children
                    const item = {
                        label: groupLabel,
                        url: null,
                        level: baseLevel,
                        children: walkList(childUl, baseLevel + 1),
                    };
                    items.push(item);
                } else if (childUl) {
                    // UL without identifiable header — flatten children up
                    const subItems = walkList(childUl, baseLevel);
                    items.push(...subItems);
                }
            }

            return items;
        }

        // Deduplicate by doc param (desktop vs mobile sidebar)
        const seenDocs = new Set();
        function dedup(items) {
            const result = [];
            for (const item of items) {
                if (item.url) {
                    try {
                        const u = new URL(item.url);
                        const doc = u.searchParams.get('doc');
                        if (doc && seenDocs.has(doc)) continue;
                        if (doc) seenDocs.add(doc);
                    } catch(e) {}
                }
                item.children = dedup(item.children || []);
                result.push(item);
            }
            return result;
        }

        const rawTree = walkList(sidebarRoot, 3);
        const tree = dedup(rawTree);

        // Count total items
        function countAll(items) {
            let c = items.length;
            for (const i of items) c += countAll(i.children || []);
            return c;
        }

        return {
            items: tree,
            usedSelector: 'UL/LI tree walk (' + countAll(tree) + ' items)',
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
