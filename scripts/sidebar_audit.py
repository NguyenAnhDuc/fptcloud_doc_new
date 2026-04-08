#!/usr/bin/env python3
"""
sidebar_audit.py

Compares the sidebar menu structure (sidebars-vi.js) against the crawled web
menu (crawled-web/), matching via frontmatter `id` (not filename slug), and
checks sub-level (nesting) correctness.

Usage: python3 scripts/sidebar_audit.py
"""

import json
import re
from collections import defaultdict
from pathlib import Path
from typing import NamedTuple
from urllib.parse import unquote

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
SCRIPT_DIR = Path(__file__).parent
REPO_ROOT = SCRIPT_DIR.parent
CRAWLED_ROOT = REPO_ROOT / "crawled-web"
DOCS_VI_ROOT = REPO_ROOT / "docs-vi"
SIDEBAR_FILE = REPO_ROOT / "sidebars-vi.js"
REPORTS_DIR = SCRIPT_DIR / "reports"
OUTPUT_JSON = REPORTS_DIR / "sidebar-audit.json"


# ---------------------------------------------------------------------------
# Data types
# ---------------------------------------------------------------------------
class SidebarEntry(NamedTuple):
    doc_id: str
    depth: int
    parent_label: str
    category_path: str


class CrawledPage(NamedTuple):
    module_slug: str
    module_name: str
    slug: str
    web_category: str
    content_path: Path
    meta: dict


# ---------------------------------------------------------------------------
# Part 1a: Parse sidebars-vi.js
# ---------------------------------------------------------------------------

def _tokenize_js(text: str) -> list[str]:
    """Simple tokenizer for JS object literals in sidebars file.

    Extracts meaningful tokens: braces, brackets, colons, commas,
    quoted strings, and bare words.
    """
    tokens: list[str] = []
    i = 0
    length = len(text)
    while i < length:
        ch = text[i]
        # Skip whitespace
        if ch in " \t\n\r":
            i += 1
            continue
        # Skip single-line comments
        if ch == "/" and i + 1 < length and text[i + 1] == "/":
            while i < length and text[i] != "\n":
                i += 1
            continue
        # Skip multi-line comments
        if ch == "/" and i + 1 < length and text[i + 1] == "*":
            i += 2
            while i + 1 < length and not (text[i] == "*" and text[i + 1] == "/"):
                i += 1
            i += 2
            continue
        # Punctuation
        if ch in "{}[]:,":
            tokens.append(ch)
            i += 1
            continue
        # Quoted string (double or single)
        if ch in "\"'":
            quote = ch
            i += 1
            start = i
            while i < length and text[i] != quote:
                if text[i] == "\\":
                    i += 1  # skip escaped char
                i += 1
            tokens.append(text[start:i])
            i += 1  # skip closing quote
            continue
        # Bare word (identifiers, booleans, numbers)
        if ch.isalnum() or ch == "_" or ch == ".":
            start = i
            while i < length and (text[i].isalnum() or text[i] in "_.$"):
                i += 1
            tokens.append(text[start:i])
            continue
        # Skip everything else (semicolons, equals in module.exports, etc.)
        i += 1
    return tokens


def _parse_value(tokens: list[str], pos: int) -> tuple:
    """Recursive descent parser for JS values. Returns (value, next_pos)."""
    if pos >= len(tokens):
        return None, pos

    tok = tokens[pos]

    # Array
    if tok == "[":
        items = []
        pos += 1
        while pos < len(tokens) and tokens[pos] != "]":
            if tokens[pos] == ",":
                pos += 1
                continue
            val, pos = _parse_value(tokens, pos)
            if val is not None:
                items.append(val)
        return items, pos + 1  # skip ]

    # Object
    if tok == "{":
        obj: dict = {}
        pos += 1
        while pos < len(tokens) and tokens[pos] != "}":
            if tokens[pos] == ",":
                pos += 1
                continue
            key = tokens[pos]
            pos += 1
            if pos < len(tokens) and tokens[pos] == ":":
                pos += 1
            val, pos = _parse_value(tokens, pos)
            obj[key] = val
        return obj, pos + 1  # skip }

    # String or bare word
    return tok, pos + 1


def _parse_sidebar_js(text: str) -> list:
    """Parse sidebars-vi.js and return the tutorialSidebar array."""
    # Find the array assignment: tutorialSidebar: [...]
    # Strip module.exports wrapper
    tokens = _tokenize_js(text)

    # Find tutorialSidebar key and its value
    for i, tok in enumerate(tokens):
        if tok == "tutorialSidebar" and i + 1 < len(tokens) and tokens[i + 1] == ":":
            val, _ = _parse_value(tokens, i + 2)
            if isinstance(val, list):
                return val
    return []


def _walk_sidebar(
    items: list,
    depth: int,
    parent_label: str,
    category_path: str,
    results: list[SidebarEntry],
) -> None:
    """Recursively walk parsed sidebar tree and collect doc entries."""
    for item in items:
        if isinstance(item, str):
            # Bare doc id string
            results.append(SidebarEntry(
                doc_id=item,
                depth=depth,
                parent_label=parent_label,
                category_path=category_path,
            ))
        elif isinstance(item, dict):
            item_type = item.get("type", "")
            if item_type == "doc":
                doc_id = item.get("id", "")
                if doc_id:
                    results.append(SidebarEntry(
                        doc_id=doc_id,
                        depth=depth,
                        parent_label=parent_label,
                        category_path=category_path,
                    ))
            elif item_type == "category":
                label = item.get("label", "")
                child_path = f"{category_path} > {label}" if category_path else label
                sub_items = item.get("items", [])
                if isinstance(sub_items, list):
                    _walk_sidebar(sub_items, depth + 1, label, child_path, results)
            elif item_type == "link":
                # External links - skip
                pass
            else:
                # Could be a category without explicit type
                if "items" in item and "label" in item:
                    label = item.get("label", "")
                    child_path = (
                        f"{category_path} > {label}" if category_path else label
                    )
                    sub_items = item.get("items", [])
                    if isinstance(sub_items, list):
                        _walk_sidebar(
                            sub_items, depth + 1, label, child_path, results
                        )


def parse_sidebar() -> tuple[list[SidebarEntry], dict[str, SidebarEntry]]:
    """Parse sidebars-vi.js and return (entries_list, id_to_entry_map)."""
    text = SIDEBAR_FILE.read_text(encoding="utf-8")
    tree = _parse_sidebar_js(text)
    entries: list[SidebarEntry] = []
    _walk_sidebar(tree, 0, "", "", entries)
    id_map: dict[str, SidebarEntry] = {}
    for entry in entries:
        id_map[entry.doc_id] = entry
    return entries, id_map


# ---------------------------------------------------------------------------
# Part 1b: Build docs-vi frontmatter id index
# ---------------------------------------------------------------------------

_FM_ID_RE = re.compile(r'^id:\s*"?([^"\n]+)"?', re.MULTILINE)
_FM_SLUG_RE = re.compile(r'^slug:\s*"?([^"\n]+)"?', re.MULTILINE)


def build_docsvi_id_index() -> dict[str, list[Path]]:
    """Map frontmatter id -> list of file paths for ALL .md files in docs-vi.

    Also indexes by filename stem and decoded variants.
    """
    index: dict[str, list[Path]] = defaultdict(list)
    for md in DOCS_VI_ROOT.rglob("*.md"):
        try:
            content = md.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue

        fid = None
        m = _FM_ID_RE.search(content)
        if m:
            fid = m.group(1).strip()

        folder = md.parent.name

        if fid:
            # Index by frontmatter id
            index[fid].append(md)
            # Index by folder/id (sidebar format)
            sidebar_key = f"{folder}/{fid}"
            index[sidebar_key].append(md)
            # Decoded variants
            decoded_fid = unquote(fid)
            if decoded_fid != fid:
                index[decoded_fid].append(md)
                index[f"{folder}/{decoded_fid}"].append(md)

        # Index by filename stem
        stem = md.stem
        index[stem].append(md)
        index[f"{folder}/{stem}"].append(md)
        decoded_stem = unquote(stem)
        if decoded_stem != stem:
            index[decoded_stem].append(md)
            index[f"{folder}/{decoded_stem}"].append(md)

    return index


# ---------------------------------------------------------------------------
# Part 1c: Build crawled web index
# ---------------------------------------------------------------------------

def build_crawled_index() -> list[CrawledPage]:
    """Collect all crawled pages with metadata."""
    pages: list[CrawledPage] = []
    for mod_dir in sorted(CRAWLED_ROOT.iterdir()):
        if not mod_dir.is_dir():
            continue
        for slug_dir in sorted(mod_dir.iterdir()):
            if not slug_dir.is_dir():
                continue
            content_path = slug_dir / "content.md"
            meta_path = slug_dir / "metadata.json"
            if not content_path.exists():
                continue

            meta: dict = {}
            if meta_path.exists():
                try:
                    meta = json.loads(meta_path.read_text(encoding="utf-8"))
                except (json.JSONDecodeError, OSError):
                    pass

            slug = unquote(slug_dir.name)
            pages.append(CrawledPage(
                module_slug=mod_dir.name,
                module_name=meta.get("module", mod_dir.name),
                slug=slug,
                web_category=meta.get("category", ""),
                content_path=content_path,
                meta=meta,
            ))
    return pages


# ---------------------------------------------------------------------------
# Module name mapping: crawled-web module slug -> sidebar top-level category
# ---------------------------------------------------------------------------

def _build_module_mapping(
    sidebar_entries: list[SidebarEntry],
) -> dict[str, str]:
    """Build a mapping from crawled-web module slug to sidebar category path.

    Strategy: extract the first path component from sidebar doc ids
    (e.g. "tagging/initial-setup" -> "tagging") and map that to the
    top-level category label. Then map crawled module slugs to these.
    """
    # sidebar folder -> top category path (first component of category_path)
    folder_to_top_category: dict[str, str] = {}
    for entry in sidebar_entries:
        parts = entry.doc_id.split("/")
        if len(parts) >= 2:
            folder = parts[0]
            if folder not in folder_to_top_category:
                folder_to_top_category[folder] = entry.category_path

    # crawled module slug -> sidebar folder
    # Many are identical; build known overrides for the rest
    mapping: dict[str, str] = {}

    # Collect all unique crawled module slugs
    crawled_modules: set[str] = set()
    for mod_dir in sorted(CRAWLED_ROOT.iterdir()):
        if mod_dir.is_dir():
            crawled_modules.add(mod_dir.name)

    # Direct matches
    for cms in crawled_modules:
        if cms in folder_to_top_category:
            mapping[cms] = folder_to_top_category[cms]

    # For unmatched, try fuzzy matching
    unmatched = crawled_modules - set(mapping.keys())
    sidebar_folders = set(folder_to_top_category.keys())
    for cms in unmatched:
        # Try normalized comparison
        cms_norm = cms.lower().replace("-", "").replace("_", "")
        for sf in sidebar_folders:
            sf_norm = sf.lower().replace("-", "").replace("_", "")
            if cms_norm == sf_norm:
                mapping[cms] = folder_to_top_category[sf]
                break

    return mapping


# ---------------------------------------------------------------------------
# Part 2: Match crawled pages to sidebar and check categories
# ---------------------------------------------------------------------------

def _find_sidebar_id_for_slug(
    slug: str,
    module_slug: str,
    docsvi_index: dict[str, list[Path]],
    sidebar_id_map: dict[str, SidebarEntry],
) -> tuple[str | None, str | None, str]:
    """Try to find the sidebar entry for a crawled page slug.

    Returns (sidebar_doc_id, frontmatter_id, reason).
    reason is empty string on success, otherwise explains failure.
    """
    decoded_slug = unquote(slug)
    candidates_to_try = [decoded_slug, slug]
    if decoded_slug != slug:
        candidates_to_try = [decoded_slug, slug]

    # Strategy 1: Look up slug directly in docsvi index
    for candidate in candidates_to_try:
        paths = docsvi_index.get(candidate, [])
        if not paths:
            continue

        # For each matching file, try to construct sidebar id
        for path in paths:
            folder = path.parent.name
            # Read frontmatter id
            try:
                content = path.read_text(encoding="utf-8", errors="replace")
            except OSError:
                continue
            m = _FM_ID_RE.search(content)
            fid = m.group(1).strip() if m else path.stem

            sidebar_id = f"{folder}/{fid}"
            if sidebar_id in sidebar_id_map:
                return sidebar_id, fid, ""

            # Try with stem as fallback
            sidebar_id_stem = f"{folder}/{path.stem}"
            if sidebar_id_stem in sidebar_id_map:
                return sidebar_id_stem, fid, ""

    # Strategy 2: Try module_slug/slug as sidebar id directly
    for prefix in [module_slug]:
        for candidate in candidates_to_try:
            sid = f"{prefix}/{candidate}"
            if sid in sidebar_id_map:
                return sid, candidate, ""

    # Strategy 3: Search all sidebar ids for slug match in the id part
    for candidate in candidates_to_try:
        candidate_lower = candidate.lower()
        for sid, entry in sidebar_id_map.items():
            id_part = sid.split("/")[-1] if "/" in sid else sid
            if id_part.lower() == candidate_lower:
                return sid, candidate, ""

    # Strategy 4: Check docsvi index with module_slug prefix
    for candidate in candidates_to_try:
        key = f"{module_slug}/{candidate}"
        paths = docsvi_index.get(key, [])
        if paths:
            path = paths[0]
            folder = path.parent.name
            try:
                content = path.read_text(encoding="utf-8", errors="replace")
            except OSError:
                continue
            m = _FM_ID_RE.search(content)
            fid = m.group(1).strip() if m else path.stem
            sidebar_id = f"{folder}/{fid}"
            if sidebar_id in sidebar_id_map:
                return sidebar_id, fid, ""

    # Not found
    # Determine reason
    found_in_docs = False
    for candidate in candidates_to_try:
        if docsvi_index.get(candidate):
            found_in_docs = True
            break

    if found_in_docs:
        return None, None, "found_in_docs_but_not_in_sidebar"
    return None, None, "not_found_in_docs"


def _extract_top_category(category_path: str) -> str:
    """Extract the top-level category from a sidebar category path.

    e.g. "FPT Cloud Server > Tagging > Quick Starts" -> "FPT Cloud Server"
    """
    if not category_path:
        return ""
    return category_path.split(" > ")[0].strip()


def _normalize_category(cat: str) -> str:
    """Normalize a category string for comparison."""
    return (
        cat.lower()
        .replace("–", "-")
        .replace("—", "-")
        .strip()
    )


def _categories_match(web_category: str, sidebar_category_path: str) -> bool:
    """Check if the web category is consistent with the sidebar category path.

    The web category is a broad grouping (e.g. "FPT Cloud Server"),
    while sidebar_category_path is the full nesting path.
    We check if the web category matches the top-level sidebar category
    or is contained somewhere in the path.
    """
    if not web_category or not sidebar_category_path:
        return True  # Cannot compare, assume OK

    web_norm = _normalize_category(web_category)
    path_norm = _normalize_category(sidebar_category_path)

    # Direct containment
    if web_norm in path_norm or path_norm.startswith(web_norm):
        return True

    # Check top-level
    top = _normalize_category(_extract_top_category(sidebar_category_path))
    if web_norm == top:
        return True

    # Check each component
    components = [_normalize_category(c) for c in sidebar_category_path.split(" > ")]
    for comp in components:
        if web_norm == comp:
            return True
        # Fuzzy: strip "fpt" prefix and compare
        web_stripped = web_norm.replace("fpt ", "").replace("fpt-", "").strip()
        comp_stripped = comp.replace("fpt ", "").replace("fpt-", "").strip()
        if web_stripped and comp_stripped and web_stripped == comp_stripped:
            return True

    return False


# ---------------------------------------------------------------------------
# Part 3: Main audit
# ---------------------------------------------------------------------------

def run_audit() -> dict:
    """Execute the full audit and return results."""
    print("Parsing sidebars-vi.js...")
    sidebar_entries, sidebar_id_map = parse_sidebar()
    print(f"  Found {len(sidebar_entries)} doc entries in sidebar")

    print("Building docs-vi frontmatter index...")
    docsvi_index = build_docsvi_id_index()
    print(f"  Indexed {len(docsvi_index)} keys")

    print("Building crawled-web index...")
    crawled_pages = build_crawled_index()
    print(f"  Found {len(crawled_pages)} crawled pages")

    print("Building module mapping...")
    module_mapping = _build_module_mapping(sidebar_entries)
    mapped_modules = set(module_mapping.keys())
    all_crawled_modules = {p.module_slug for p in crawled_pages}
    unmapped_modules = all_crawled_modules - mapped_modules
    if unmapped_modules:
        print(f"  WARNING: {len(unmapped_modules)} crawled modules have no "
              f"sidebar mapping: {sorted(unmapped_modules)}")

    print("Matching crawled pages to sidebar entries...")
    matched: list[dict] = []
    unmatched: list[dict] = []
    wrong_category: list[dict] = []

    # Per-module stats
    module_stats: dict[str, dict] = defaultdict(
        lambda: {"total": 0, "matched": 0, "unmatched": 0, "wrong_category": 0}
    )

    for page in crawled_pages:
        stats = module_stats[page.module_slug]
        stats["total"] += 1

        sidebar_id, fm_id, reason = _find_sidebar_id_for_slug(
            page.slug,
            page.module_slug,
            docsvi_index,
            sidebar_id_map,
        )

        if sidebar_id is None:
            stats["unmatched"] += 1
            unmatched.append({
                "module": page.module_slug,
                "slug": page.slug,
                "frontmatter_id": fm_id,
                "reason": reason,
                "web_category": page.web_category,
            })
            continue

        stats["matched"] += 1
        entry = sidebar_id_map[sidebar_id]

        match_record = {
            "module": page.module_slug,
            "slug": page.slug,
            "sidebar_id": sidebar_id,
            "frontmatter_id": fm_id,
            "sidebar_depth": entry.depth,
            "sidebar_parent": entry.parent_label,
            "sidebar_category_path": entry.category_path,
            "web_category": page.web_category,
        }

        # Check category correctness
        if not _categories_match(page.web_category, entry.category_path):
            stats["wrong_category"] += 1
            match_record["category_mismatch"] = True
            wrong_category.append({
                "module": page.module_slug,
                "slug": page.slug,
                "web_category": page.web_category,
                "sidebar_category_path": entry.category_path,
                "sidebar_id": sidebar_id,
            })
        else:
            match_record["category_mismatch"] = False

        matched.append(match_record)

    total = len(crawled_pages)
    matched_count = len(matched)
    unmatched_count = len(unmatched)
    wrong_cat_count = len(wrong_category)
    match_pct = (matched_count / total * 100) if total > 0 else 0

    report = {
        "summary": {
            "total_crawled_pages": total,
            "matched_to_sidebar": matched_count,
            "match_percentage": round(match_pct, 1),
            "unmatched": unmatched_count,
            "wrong_category": wrong_cat_count,
            "total_sidebar_entries": len(sidebar_entries),
        },
        "per_module": {
            mod: dict(stats)
            for mod, stats in sorted(module_stats.items())
        },
        "matched": matched,
        "unmatched": unmatched,
        "wrong_category": wrong_category,
    }

    return report


def print_report(report: dict) -> None:
    """Print human-readable summary."""
    s = report["summary"]
    print()
    print("SIDEBAR vs CRAWLED WEB AUDIT")
    print("=" * 60)
    print(f"Total crawled pages:  {s['total_crawled_pages']}")
    print(f"Matched to sidebar:   {s['matched_to_sidebar']} "
          f"({s['match_percentage']}%)")
    print(f"Unmatched:            {s['unmatched']}")
    print(f"Wrong category:       {s['wrong_category']}")
    print(f"Total sidebar entries: {s['total_sidebar_entries']}")
    print()

    # Per-module breakdown
    print("Per-module breakdown:")
    header = (
        f"  {'Module Name':<45} {'Total':>5} {'Match':>5} "
        f"{'Unmat':>5} {'WrCat':>5}"
    )
    print(header)
    print("  " + "-" * (len(header) - 2))
    for mod, stats in sorted(report["per_module"].items()):
        print(
            f"  {mod:<45} {stats['total']:>5} {stats['matched']:>5} "
            f"{stats['unmatched']:>5} {stats['wrong_category']:>5}"
        )
    print()

    # Unmatched pages
    if report["unmatched"]:
        print(f"UNMATCHED PAGES ({len(report['unmatched'])}):")
        print(f"  {'module':<35} {'slug':<40} {'reason'}")
        print("  " + "-" * 100)
        for item in report["unmatched"]:
            slug_display = item["slug"][:38]
            print(
                f"  {item['module']:<35} {slug_display:<40} "
                f"{item['reason']}"
            )
        print()

    # Wrong category
    if report["wrong_category"]:
        print(f"WRONG CATEGORY ({len(report['wrong_category'])}):")
        print(
            f"  {'module':<30} {'slug':<30} {'web_category':<25} "
            f"{'sidebar_category_path'}"
        )
        print("  " + "-" * 120)
        for item in report["wrong_category"]:
            slug_display = item["slug"][:28]
            web_cat = item["web_category"][:23]
            print(
                f"  {item['module']:<30} {slug_display:<30} "
                f"{web_cat:<25} {item['sidebar_category_path']}"
            )
        print()


def main() -> None:
    report = run_audit()

    # Save JSON report
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_JSON.write_text(
        json.dumps(report, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )
    print(f"\nReport saved to: {OUTPUT_JSON}")

    # Print summary
    print_report(report)


if __name__ == "__main__":
    main()
