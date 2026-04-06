#!/usr/bin/env python3
"""
compare_detail.py

Compares crawled web content (crawled-web/) against local docs (docs-vi/)
and produces a detailed per-page report.

Usage: python3 scripts/compare_detail.py
"""

import csv
import json
import os
import re
import unicodedata
from collections import defaultdict
from pathlib import Path

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
SCRIPT_DIR = Path(__file__).parent
REPO_ROOT = SCRIPT_DIR.parent
CRAWLED_ROOT = REPO_ROOT / "crawled-web"
DOCS_VI_ROOT = REPO_ROOT / "docs-vi"
COMPARE_REPORT = SCRIPT_DIR / "content-compare-report.json"
REPORTS_DIR = SCRIPT_DIR / "reports"

OUTPUT_JSON = REPORTS_DIR / "detail-compare-vi.json"
OUTPUT_CSV = REPORTS_DIR / "detail-compare-vi.csv"

# Thresholds
FULL_THRESHOLD = 0.70
PARTIAL_THRESHOLD = 0.30

# Per-page nav noise (Previous/Next links on every web page)
NAV_NOISE_WORDS = 25

# ---------------------------------------------------------------------------
# Markdown parsing helpers
# ---------------------------------------------------------------------------

FRONTMATTER_RE = re.compile(r"^---\s*\n.*?\n---\s*\n", re.DOTALL)


def strip_frontmatter(text: str) -> str:
    return FRONTMATTER_RE.sub("", text, count=1)


def count_words(text: str) -> int:
    return len(text.split())


def count_headings(text: str) -> list[str]:
    """Return list of heading strings like 'h1: Some Title'."""
    results = []
    for line in text.splitlines():
        m = re.match(r"^(#{1,6})\s+(.*)", line.strip())
        if m:
            level = len(m.group(1))
            title = m.group(2).strip()
            results.append(f"h{level}: {title}")
    return results


def count_images(text: str) -> int:
    markdown_imgs = len(re.findall(r"!\[", text))
    html_imgs = len(re.findall(r"<img\s", text, re.IGNORECASE))
    return markdown_imgs + html_imgs


def count_tables(text: str) -> int:
    """Count markdown tables by finding lines with | that form table rows."""
    table_lines = [l for l in text.splitlines() if re.match(r"^\s*\|", l)]
    if not table_lines:
        return 0
    # Group consecutive table lines into tables
    count = 0
    in_table = False
    for line in text.splitlines():
        if re.match(r"^\s*\|", line):
            if not in_table:
                count += 1
                in_table = True
        else:
            in_table = False
    return count


def normalize_heading(heading: str) -> str:
    """Lowercase + strip accents for fuzzy heading comparison."""
    # Strip prefix like 'h2: '
    text = re.sub(r"^h\d+:\s*", "", heading)
    # Remove markdown bold/italic markers
    text = re.sub(r"[\*_`]", "", text)
    # Normalize unicode (NFD then drop combining marks)
    nfd = unicodedata.normalize("NFD", text)
    stripped = "".join(c for c in nfd if not unicodedata.combining(c))
    return stripped.lower().strip()


def fingerprint_text(text: str) -> dict:
    """Extract metrics from markdown text (frontmatter already stripped)."""
    return {
        "words": count_words(text),
        "headings": count_headings(text),
        "images": count_images(text),
        "tables": count_tables(text),
    }


def read_md_file(path: Path) -> str:
    try:
        raw = path.read_text(encoding="utf-8", errors="replace")
        return strip_frontmatter(raw)
    except OSError:
        return ""


# ---------------------------------------------------------------------------
# Build docs-vi directory index (slug -> directory path)
# ---------------------------------------------------------------------------

def build_docsvi_dir_index() -> dict[str, Path]:
    """Map directory name -> absolute path for all subdirs in docs-vi."""
    index = {}
    for entry in DOCS_VI_ROOT.iterdir():
        if entry.is_dir():
            index[entry.name] = entry
    return index


def build_docsvi_id_index() -> dict[str, list[Path]]:
    """Map frontmatter id -> list of file paths for ALL .md files in docs-vi.

    Returns a multi-map because multiple modules can have files with the same
    id/filename (e.g. FAQ.md, Initial-setup.md, backup-restore.md).

    This handles cases where:
    - web slug is URL-encoded but file id is decoded
    - web slug differs from filename
    - file is in a different module directory
    """
    from urllib.parse import unquote
    index: dict[str, list[Path]] = defaultdict(list)
    for md in DOCS_VI_ROOT.rglob("*.md"):
        try:
            content = md.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        m = re.search(r'^id:\s*"?([^"\n]+)"?', content, re.MULTILINE)
        if m:
            fid = m.group(1).strip()
            index[fid].append(md)
            decoded = unquote(fid)
            if decoded != fid:
                index[decoded].append(md)
        # Also index by filename (without extension)
        fname = md.stem
        index[fname].append(md)
    return index


def collect_md_files_in_dir(dir_path: Path) -> list[Path]:
    """Recursively collect all .md files under a directory."""
    return list(dir_path.rglob("*.md"))


# ---------------------------------------------------------------------------
# Build crawled-web index: slug -> {module_slug, meta, content_path}
# ---------------------------------------------------------------------------

def build_crawled_index() -> dict[str, dict]:
    """Build slug -> {module_slug, module, meta_path, content_path} index."""
    index = {}
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
            slug = slug_dir.name
            meta = {}
            if meta_path.exists():
                try:
                    meta = json.loads(meta_path.read_text(encoding="utf-8"))
                except (json.JSONDecodeError, OSError):
                    pass
            index[slug] = {
                "module_slug": mod_dir.name,
                "module": meta.get("module", mod_dir.name),
                "category": meta.get("category", ""),
                "meta": meta,
                "content_path": content_path,
            }
    return index


# ---------------------------------------------------------------------------
# Load report mapping: slug -> localFile
# ---------------------------------------------------------------------------

def load_report_mapping() -> dict[str, str | None]:
    """Load slug -> localFile from content-compare-report.json vi section."""
    mapping: dict[str, str | None] = {}
    try:
        data = json.loads(COMPARE_REPORT.read_text(encoding="utf-8"))
        pages = data.get("vi", {}).get("pages", [])
        for page in pages:
            slug = page.get("slug", "")
            local_file = page.get("localFile")  # may be None/missing
            if slug:
                mapping[slug] = local_file
    except (OSError, json.JSONDecodeError) as exc:
        print(f"WARNING: Could not load {COMPARE_REPORT}: {exc}")
    return mapping


# ---------------------------------------------------------------------------
# Aggregate local doc content for a page
# ---------------------------------------------------------------------------

def _norm_slug_words(slug: str) -> set[str]:
    """Extract meaningful words from a slug, stripping common prefixes."""
    words = set(slug.lower().replace("–", "-").split("-"))
    # Strip noise words that appear in many module names
    words.discard("fpt")
    words.discard("")
    return words


def _pick_best_match(
    candidates: list[Path],
    module_slug: str,
) -> Path | None:
    """From a list of candidate paths, pick the one whose parent dir best
    matches the crawled module slug.  Falls back to first candidate."""
    if not candidates:
        return None
    if len(candidates) == 1:
        return candidates[0]
    # Normalise module slug for comparison (lowercase, strip special chars)
    mod_norm = module_slug.lower().replace(" ", "-").replace("–", "-")
    # Exact match first
    for c in candidates:
        parent = c.parent.name.lower()
        if parent == mod_norm:
            return c
    # Prefix/suffix match
    for c in candidates:
        parent = c.parent.name.lower()
        if mod_norm.startswith(parent) or parent.startswith(mod_norm):
            return c
    # Substring match
    for c in candidates:
        parent = c.parent.name.lower()
        if parent in mod_norm or mod_norm in parent:
            return c
    # Word-overlap match (handles "managed-gpu-cluster-kubernetes" vs "fpt-managed-gpu-cluster")
    mod_words = _norm_slug_words(module_slug)
    best_score = 0
    best_candidate = candidates[0]
    for c in candidates:
        parent_words = _norm_slug_words(c.parent.name)
        overlap = len(mod_words & parent_words)
        total = len(mod_words | parent_words)
        score = overlap / total if total else 0
        if score > best_score:
            best_score = score
            best_candidate = c
    return best_candidate


def get_local_files(
    slug: str,
    local_file: str | None,
    dir_index: dict[str, Path],
    id_index: dict[str, list[Path]] | None = None,
    module_slug: str = "",
) -> list[Path]:
    """Return list of local .md file paths relevant to this slug."""
    files: list[Path] = []

    # Primary file from report mapping
    if local_file:
        primary = DOCS_VI_ROOT / local_file
        if primary.exists():
            # Verify the mapped file is in the right module
            parent = primary.parent.name.lower()
            mod_norm = module_slug.lower().replace(" ", "-").replace("–", "-")
            mod_words = _norm_slug_words(module_slug)
            parent_words = _norm_slug_words(primary.parent.name)
            word_overlap = len(mod_words & parent_words) / len(mod_words | parent_words) if (mod_words | parent_words) else 0
            if parent == mod_norm or mod_norm in parent or parent in mod_norm or word_overlap >= 0.4 or not module_slug:
                files.append(primary)

    # Fallback: search by frontmatter id with module-aware selection
    if not files and id_index:
        from urllib.parse import unquote
        candidates_list: list[str] = [slug, unquote(slug)]
        for candidate in candidates_list:
            if candidate in id_index:
                best = _pick_best_match(id_index[candidate], module_slug)
                if best:
                    files.append(best)
                    break

    # Check if slug matches a docs-vi subdirectory (directory aggregation)
    decoded_slug = __import__('urllib.parse', fromlist=['unquote']).unquote(slug)
    for s in [slug, decoded_slug]:
        if s in dir_index:
            dir_files = collect_md_files_in_dir(dir_index[s])
            for f in dir_files:
                if f not in files:
                    files.append(f)

    return files


def aggregate_local_fingerprint(files: list[Path]) -> dict:
    """Merge fingerprints from multiple local files."""
    combined_text = "\n\n".join(read_md_file(f) for f in files)
    return fingerprint_text(combined_text)


# ---------------------------------------------------------------------------
# Comparison logic
# ---------------------------------------------------------------------------

def content_status(web_words: int, doc_words: int) -> str:
    if web_words == 0:
        return "full"
    ratio = doc_words / web_words
    if ratio >= FULL_THRESHOLD:
        return "full"
    if ratio >= PARTIAL_THRESHOLD:
        return "partial"
    return "stub"


def images_status(web_images: int, doc_images: int) -> str:
    if web_images == 0:
        return "n/a"
    if doc_images == 0:
        return "none"
    ratio = doc_images / web_images
    if ratio >= FULL_THRESHOLD:
        return "full"
    if ratio >= PARTIAL_THRESHOLD:
        return "partial"
    return "none"


def tables_status(web_tables: int, doc_tables: int) -> str:
    if web_tables == 0:
        return "n/a"
    if doc_tables == 0:
        return "missing"
    if doc_tables >= web_tables:
        return "match"
    ratio = doc_tables / web_tables
    if ratio >= FULL_THRESHOLD:
        return "match"
    return "partial"


def headings_match(web_headings: list[str], doc_headings: list[str]) -> tuple[int, list[str]]:
    """Return (match_pct, missing_headings_list)."""
    if not web_headings:
        return 100, []
    doc_normalized = {normalize_heading(h) for h in doc_headings}
    missing = []
    found = 0
    for h in web_headings:
        if normalize_heading(h) in doc_normalized:
            found += 1
        else:
            missing.append(h)
    pct = int(round(found / len(web_headings) * 100))
    return pct, missing


# ---------------------------------------------------------------------------
# Main processing
# ---------------------------------------------------------------------------

def process_page(
    slug: str,
    crawled_info: dict,
    local_file: str | None,
    dir_index: dict[str, Path],
    module_baseline: int = 0,
    id_index: dict[str, list[Path]] | None = None,
) -> dict:
    """Produce a per-page analysis record."""

    # Web content
    web_text = strip_frontmatter(
        crawled_info["content_path"].read_text(encoding="utf-8", errors="replace")
    )
    web_fp = fingerprint_text(web_text)
    # Adjust web words: subtract per-module baseline + nav noise
    web_fp["words_adj"] = max(0, web_fp["words"] - module_baseline - NAV_NOISE_WORDS)

    # Local files — pass module_slug for module-aware matching
    module_slug = crawled_info.get("module_slug", "")
    local_files = get_local_files(slug, local_file, dir_index, id_index, module_slug)
    aggregated = len(local_files) > 1 or (local_file is not None and slug in dir_index)

    if not local_files:
        return {
            "slug": slug,
            "module": crawled_info["module"],
            "web_words": web_fp["words_adj"],
            "doc_words": 0,
            "content_status": "missing",
            "images_status": "n/a" if web_fp["images"] == 0 else "none",
            "web_images": web_fp["images"],
            "doc_images": 0,
            "headings_match_pct": 0,
            "missing_headings": [h for h in web_fp["headings"]],
            "tables_status": "n/a" if web_fp["tables"] == 0 else "missing",
            "web_tables": web_fp["tables"],
            "doc_tables": 0,
            "local_files": [],
            "aggregated": False,
        }

    doc_fp = aggregate_local_fingerprint(local_files)
    hdg_pct, missing_hdgs = headings_match(web_fp["headings"], doc_fp["headings"])

    return {
        "slug": slug,
        "module": crawled_info["module"],
        "web_words": web_fp["words_adj"],
        "doc_words": doc_fp["words"],
        "content_status": content_status(web_fp["words_adj"], doc_fp["words"]),
        "images_status": images_status(web_fp["images"], doc_fp["images"]),
        "web_images": web_fp["images"],
        "doc_images": doc_fp["images"],
        "headings_match_pct": hdg_pct,
        "missing_headings": missing_hdgs,
        "tables_status": tables_status(web_fp["tables"], doc_fp["tables"]),
        "web_tables": web_fp["tables"],
        "doc_tables": doc_fp["tables"],
        "local_files": [str(f.relative_to(DOCS_VI_ROOT)) for f in local_files],
        "aggregated": aggregated,
    }


# ---------------------------------------------------------------------------
# Summary builders
# ---------------------------------------------------------------------------

def build_summary(pages: list[dict]) -> dict:
    counts: dict[str, int] = defaultdict(int)
    for p in pages:
        counts[p["content_status"]] += 1
    return {
        "total": len(pages),
        "full": counts["full"],
        "partial": counts["partial"],
        "stub": counts["stub"],
        "missing": counts["missing"],
    }


def build_by_module(pages: list[dict]) -> dict:
    by_module: dict[str, dict[str, int]] = defaultdict(lambda: defaultdict(int))
    for p in pages:
        mod = p["module"]
        by_module[mod][p["content_status"]] += 1
        by_module[mod]["total"] = by_module[mod].get("total", 0) + 1
    return {mod: dict(v) for mod, v in sorted(by_module.items())}


# ---------------------------------------------------------------------------
# Terminal output
# ---------------------------------------------------------------------------

def print_terminal_summary(summary: dict, by_module: dict) -> None:
    print("\n" + "=" * 70)
    print("DETAIL COMPARE REPORT — docs-vi vs crawled web")
    print("=" * 70)
    print(f"  Total pages : {summary['total']}")
    print(f"  Full        : {summary['full']}")
    print(f"  Partial     : {summary['partial']}")
    print(f"  Stub        : {summary['stub']}")
    print(f"  Missing     : {summary['missing']}")
    print()
    print(f"{'Module':<50} {'Total':>6} {'Full':>6} {'Partial':>8} {'Stub':>6} {'Missing':>8}")
    print("-" * 90)
    for mod, counts in by_module.items():
        total = counts.get("total", 0)
        full = counts.get("full", 0)
        partial = counts.get("partial", 0)
        stub = counts.get("stub", 0)
        missing = counts.get("missing", 0)
        print(f"  {mod:<48} {total:>6} {full:>6} {partial:>8} {stub:>6} {missing:>8}")
    print("=" * 70)


# ---------------------------------------------------------------------------
# CSV output
# ---------------------------------------------------------------------------

CSV_FIELDS = [
    "slug",
    "module",
    "web_words",
    "doc_words",
    "content_status",
    "images_status",
    "web_images",
    "doc_images",
    "headings_match_pct",
    "tables_status",
    "web_tables",
    "doc_tables",
    "aggregated",
    "local_files",
    "missing_headings",
]


def write_csv(pages: list[dict], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=CSV_FIELDS)
        writer.writeheader()
        for page in pages:
            row = {k: page.get(k, "") for k in CSV_FIELDS}
            row["local_files"] = "; ".join(page.get("local_files", []))
            row["missing_headings"] = "; ".join(page.get("missing_headings", []))
            writer.writerow(row)


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

def main() -> None:
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)

    print("Loading report mapping...")
    report_mapping = load_report_mapping()

    print("Building crawled-web index...")
    crawled_index = build_crawled_index()
    print(f"  Found {len(crawled_index)} crawled pages")

    print("Building docs-vi directory index...")
    dir_index = build_docsvi_dir_index()
    print(f"  Found {len(dir_index)} docs-vi directories")

    print("Building docs-vi id index...")
    id_index = build_docsvi_id_index()
    print(f"  Found {len(id_index)} doc IDs")

    # Compute per-module baselines (min web word count per module)
    module_words: dict[str, list[int]] = defaultdict(list)
    for slug, info in crawled_index.items():
        text = strip_frontmatter(info["content_path"].read_text(encoding="utf-8", errors="replace"))
        fp = fingerprint_text(text)
        module_words[info["module"]].append(fp["words"])
    module_baselines = {mod: min(wc) for mod, wc in module_words.items() if wc}
    print(f"  Module baselines computed for {len(module_baselines)} modules")

    pages: list[dict] = []
    processed = 0

    print("Processing pages...")
    for slug, crawled_info in sorted(crawled_index.items()):
        local_file = report_mapping.get(slug)
        baseline = module_baselines.get(crawled_info["module"], 0)
        record = process_page(slug, crawled_info, local_file, dir_index, baseline, id_index)
        pages.append(record)
        processed += 1
        if processed % 100 == 0:
            print(f"  {processed}/{len(crawled_index)} processed...")

    print(f"  Done: {processed} pages processed")

    summary = build_summary(pages)
    by_module = build_by_module(pages)

    report = {
        "summary": summary,
        "by_module": by_module,
        "pages": pages,
    }

    print(f"Writing JSON report to {OUTPUT_JSON}...")
    OUTPUT_JSON.write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    print(f"Writing CSV report to {OUTPUT_CSV}...")
    write_csv(pages, OUTPUT_CSV)

    print_terminal_summary(summary, by_module)
    print(f"\nReports written to:\n  {OUTPUT_JSON}\n  {OUTPUT_CSV}\n")


if __name__ == "__main__":
    main()
