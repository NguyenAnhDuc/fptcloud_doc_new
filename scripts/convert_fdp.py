#!/usr/bin/env python3
"""
convert_fdp.py - Convert crawled FPT Data Platform content into Docusaurus docs-vi files.

Usage: python3 scripts/convert_fdp.py
"""

import json
import os
import re
import shutil
from pathlib import Path
from urllib.parse import unquote

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
ROOT = Path(__file__).parent.parent
CRAWLED_BASE = ROOT / "crawled-web" / "fpt-data-platform"
DOCS_VI_BASE = ROOT / "docs-vi" / "fpt-data-platform"
REPORTS_DIR = ROOT / "scripts" / "reports"
MENU_TREE_PATH = ROOT / "scripts" / "menu-tree.json"
SIDEBAR_OUTPUT = REPORTS_DIR / "fdp-sidebar.js"

# ---------------------------------------------------------------------------
# Menu-tree slug → (category_dir, output_filename) mapping
# Built from the known structure described in the task.
# Key: slug (url param after ?doc=)
# Value: (category_subdir, output_stem)
# ---------------------------------------------------------------------------
SLUG_TO_PATH: dict[str, tuple[str, str]] = {
    # initial-setup
    "initial-setup": ("initial-setup", "initial-setup"),
    # workspace
    "gioi-thieu-workspace": ("workspace", "index"),
    "tao-workspace": ("workspace", "tao-workspace"),
    "xem-thong-tin-workspace": ("workspace", "xem-thong-tin-workspace"),
    "xoa-workspace": ("workspace", "xoa-workspace"),
    "keystore-management": ("workspace", "keystore-management"),
    "certificate-manager": ("workspace", "certificate-manager"),
    "monitoring": ("workspace", "monitoring"),
    # cdc-service
    "cdc-service": ("cdc-service", "index"),
    "tao-cdc-service": ("cdc-service", "tao-cdc-service"),
    "xem-thong-tin-cdc-service": ("cdc-service", "xem-thong-tin-cdc-service"),
    "postgresql-source-connector": ("cdc-service", "postgresql-source-connector"),
    "mongoDB-source-connector": ("cdc-service", "mongoDB-source-connector"),
    "sql-server-source-connector": ("cdc-service", "sql-server-source-connector"),
    "mysql-source-connector": ("cdc-service", "mysql-source-connector"),
    "mariadb-source-connector": ("cdc-service", "mariadb-source-connector"),
    "oracle-source-connector": ("cdc-service", "oracle-source-connector"),
    "clickhouse-logs-sink-connector": ("cdc-service", "clickhouse-logs-sink-connector"),
    "mongodb-sink-connector": ("cdc-service", "mongodb-sink-connector"),
    "postgresql-sink-connector": ("cdc-service", "postgresql-sink-connector"),
    "opensearch-sink-connector": ("cdc-service", "opensearch-sink-connector"),
    "sql-server-sink-connector": ("cdc-service", "sql-server-sink-connector"),
    "mysql-sink-connector": ("cdc-service", "mysql-sink-connector"),
    "mariadb-sink-connector": ("cdc-service", "mariadb-sink-connector"),
    "iceberg-sink-connector": ("cdc-service", "iceberg-sink-connector"),
    "clickhouse-replication-sink-connector": ("cdc-service", "clickhouse-replication-sink-connector"),
    "s3-sink-connector": ("cdc-service", "s3-sink-connector"),
    "elasticsearch-sink-connector": ("cdc-service", "elasticsearch-sink-connector"),
    "iceberg-logs-sink-connector": ("cdc-service", "iceberg-logs-sink-connector"),
    "redis-sink-connector": ("cdc-service", "redis-sink-connector"),
    "tao-connector-source-kafka": ("cdc-service", "tao-connector-source-kafka"),
    "tao-connector-source-s3": ("cdc-service", "tao-connector-source-s3"),
    "xem-thong-tin-connector": ("cdc-service", "xem-thong-tin-connector"),
    "hanh-dong-voi-connector": ("cdc-service", "hanh-dong-voi-connector"),
    "xoa-connector": ("cdc-service", "xoa-connector"),
    "xem-th%C3%B4ng-tin-snapshot": ("cdc-service", "xem-thong-tin-snapshot"),
    "trang-thai-snapshot": ("cdc-service", "trang-thai-snapshot"),
    "hanh-dong-voi-snapshot": ("cdc-service", "hanh-dong-voi-snapshot"),
    "xoa-cdc-service": ("cdc-service", "xoa-cdc-service"),
    "kafka-mm2": ("cdc-service", "kafka-mm2"),
    # superset
    "cai-dat-superset": ("superset", "index"),
    "tao-superset": ("superset", "tao-superset"),
    "xem-thong-tin-superset": ("superset", "xem-thong-tin-superset"),
    "xoa-superset": ("superset", "xoa-superset"),
    # jupyterhub
    "jupyterhub-guide": ("jupyterhub", "index"),
    "tao-Jupyterhub": ("jupyterhub", "tao-Jupyterhub"),
    "xem-thong-tin-juperterhub": ("jupyterhub", "xem-thong-tin-juperterhub"),
    "xoa-jupyterhub": ("jupyterhub", "xoa-jupyterhub"),
    "them-nguoi-dung": ("jupyterhub", "them-nguoi-dung"),
    "tao-profile": ("jupyterhub", "tao-profile"),
    "phan-quyen-nguoi-dung-su-dung-profile": ("jupyterhub", "phan-quyen-nguoi-dung-su-dung-profile"),
    "dbt": ("jupyterhub", "dbt"),
    # ranger
    "guide-ranger": ("ranger", "index"),
    "tao-ranger": ("ranger", "tao-ranger"),
    "xem-ranger": ("ranger", "xem-ranger"),
    "cau-hinh-va-quan-ly-query-engine": ("ranger", "cau-hinh-va-quan-ly-query-engine"),
    "tag-sync": ("ranger", "tag-sync"),
    "xoa-ranger": ("ranger", "xoa-ranger"),
    # hive-metastore
    "hive-metastore": ("hive-metastore", "index"),
    "tao-hive-metastore": ("hive-metastore", "tao-hive-metastore"),
    "xem-thong-tin-hive-metastore": ("hive-metastore", "xem-thong-tin-hive-metastore"),
    "xoa-hive-metastore": ("hive-metastore", "xoa-hive-metastore"),
    # query-engine
    "query-engine": ("query-engine", "index"),
    "tao-query-engine": ("query-engine", "tao-query-engine"),
    "xem-thong-tin-query-engine": ("query-engine", "xem-thong-tin-query-engine"),
    "xoa-query-engine": ("query-engine", "xoa-query-engine"),
    "quan-ly-connectors": ("query-engine", "quan-ly-connectors"),
    "quan-ly-users": ("query-engine", "quan-ly-users"),
    "quan-ly-Policies": ("query-engine", "quan-ly-Policies"),
    # nessie
    "guide-nessie": ("nessie", "index"),
    "tao-nessie": ("nessie", "tao-nessie"),
    "xem-thong-tin-nessie": ("nessie", "xem-thong-tin-nessie"),
    "xoa-nessie": ("nessie", "xoa-nessie"),
    # flink
    "apache-flink": ("flink", "index"),
    "tao-apache-flink": ("flink", "tao-apache-flink"),
    "xem-thong-tin-apache-flink": ("flink", "xem-thong-tin-apache-flink"),
    "xoa-apache-flink": ("flink", "xoa-apache-flink"),
    # orchestration
    "userguide-airflow": ("orchestration", "index"),
    "tao-airflow": ("orchestration", "tao-airflow"),
    "xem-thong-tin-orchestration": ("orchestration", "xem-thong-tin-orchestration"),
    "xoa-orchestration": ("orchestration", "xoa-orchestration"),
    "huong-dan-airflow-dbt": ("orchestration", "huong-dan-airflow-dbt"),
    "huong-dan-airflow-my-workspace": ("orchestration", "huong-dan-airflow-my-workspace"),
    "huong-dan-airflow-job-submit": ("orchestration", "huong-dan-airflow-job-submit"),
    "huong-dan-secert-backends": ("orchestration", "huong-dan-secert-backends"),
    "huong-dan-airflow-workflow": ("orchestration", "huong-dan-airflow-workflow"),
    # ingestion
    "cai-dat-ingestion-service": ("ingestion", "index"),
    "tao-ingestion": ("ingestion", "tao-ingestion"),
    "xem-thong-tin-ingestion": ("ingestion", "xem-thong-tin-ingestion"),
    "xoa-ingestion": ("ingestion", "xoa-ingestion"),
    "chinh-sua-ingestion": ("ingestion", "chinh-sua-ingestion"),
    # processing
    "processing-service": ("processing", "index"),
    "tao-processing-service": ("processing", "tao-processing-service"),
    "xem-thong-tin-processing-service": ("processing", "xem-thong-tin-processing-service"),
    "xoa-processing-service": ("processing", "xoa-processing-service"),
    "quan-ly-compute": ("processing", "quan-ly-compute"),
    "quan-ly-image-cua-compute": ("processing", "quan-ly-image-cua-compute"),
    # open-metadata
    "open-metadata": ("open-metadata", "index"),
    "tao-open-metadata-service": ("open-metadata", "tao-open-metadata-service"),
    "xem-thong-tin-open-metadata-service": ("open-metadata", "xem-thong-tin-open-metadata-service"),
    "cap-nhat-open-metadata": ("open-metadata", "cap-nhat-open-metadata"),
    "xoa-open-metadata": ("open-metadata", "xoa-open-metadata"),
    "huong-dan-su-dung-open-metadata": ("open-metadata", "huong-dan-su-dung-open-metadata"),
}

# Category display labels for sidebar
CATEGORY_LABELS: dict[str, str] = {
    "initial-setup": "Initial Setup",
    "workspace": "Workspace",
    "cdc-service": "CDC Service",
    "superset": "Apache Superset",
    "jupyterhub": "JupyterHub",
    "ranger": "Ranger",
    "hive-metastore": "Hive Metastore",
    "query-engine": "Query Engine",
    "nessie": "Nessie",
    "flink": "Flink",
    "orchestration": "Orchestration",
    "ingestion": "Ingestion Service",
    "processing": "Processing Service",
    "open-metadata": "Open Metadata",
}

# Ordered categories for sidebar
CATEGORY_ORDER = [
    "initial-setup",
    "workspace",
    "cdc-service",
    "superset",
    "jupyterhub",
    "ranger",
    "hive-metastore",
    "query-engine",
    "nessie",
    "flink",
    "orchestration",
    "ingestion",
    "processing",
    "open-metadata",
]


# ---------------------------------------------------------------------------
# Content cleaning helpers
# ---------------------------------------------------------------------------

EMOJI_PATTERN = re.compile(
    "["
    "\U0001f300-\U0001f5ff"
    "\U0001f600-\U0001f64f"
    "\U0001f680-\U0001f9ff"
    "\U00002700-\U000027bf"
    "\U0000200d"
    "\U00002500-\U00002bef"
    "\u2714"   # ✅ check
    "\u2705"
    "\u26a0"   # ⚠️
    "\U0001f4cc"  # 📌
    "\U0001f534"  # 🔴
    "\U0001f4a1"  # 💡
    "]+",
    flags=re.UNICODE,
)


def strip_frontmatter(text: str) -> str:
    """Remove YAML frontmatter block from markdown."""
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            return text[end + 4:].lstrip("\n")
    return text


def extract_title_from_content(body: str) -> str:
    """Extract first non-empty heading or first line as title."""
    for line in body.splitlines():
        line = line.strip()
        if line.startswith("#"):
            title = re.sub(r"^#+\s*", "", line)
            title = clean_heading_text(title)
            if title:
                return title
        elif line and not line.startswith("[") and not line.startswith("!"):
            # First paragraph text - strip bold markers, numbering, emojis
            title = clean_heading_text(line)
            title = re.sub(r"\s+", " ", title).strip()
            if len(title) > 5:
                return title[:80]
    return ""


def clean_heading_text(text: str) -> str:
    """Remove numbering prefixes like '2.1 ', '1. ', bold markers, emojis."""
    text = re.sub(r"^\*+|\*+$", "", text).strip()
    text = re.sub(r"^\d+[\.\d]*\s+", "", text)
    text = EMOJI_PATTERN.sub("", text).strip()
    return text


def extract_description(body: str) -> str:
    """Get first real paragraph (not heading, not image) as description."""
    lines = body.splitlines()
    paragraph_lines = []
    in_para = False
    for line in lines:
        stripped = line.strip()
        if not stripped:
            if in_para:
                break
            continue
        if stripped.startswith("#") or stripped.startswith("!") or stripped.startswith("["):
            if in_para:
                break
            continue
        if stripped.startswith(":::") or stripped.startswith("```"):
            if in_para:
                break
            continue
        # Strip bold/italic markers, numbering prefixes, and link syntax for description
        clean = re.sub(r"\*+", "", stripped)
        clean = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", clean)
        clean = re.sub(r"^\d+[\.\d]*\s+", "", clean)
        clean = EMOJI_PATTERN.sub("", clean).strip()
        if clean:
            paragraph_lines.append(clean)
            in_para = True

    desc = " ".join(paragraph_lines)
    desc = re.sub(r"\s+", " ", desc).strip()
    return desc[:200] if desc else ""


def clean_body(body: str) -> str:
    """Apply all markdown cleanup rules."""
    # 1. Remove wrapped image links: [![alt](img)](link) → ![alt](img)
    body = re.sub(r"\[!\[([^\]]*)\]\(([^)]+)\)\]\([^)]+\)", r"![\1](\2)", body)

    # 2. Fix image paths - strip any URL prefix, keep images/img-XXX.png
    body = re.sub(
        r"!\[([^\]]*)\]\(https?://[^)]+/(images/img-[^)]+)\)",
        r"![\1](\2)",
        body,
    )

    # 3. Remove orphan navigation links like [Next ...](<?doc=...>) or [Prev ...]
    body = re.sub(r"\[\s*(?:Next|Previous|Prev|←|→)[^\]]*\]\([^)]*\)", "", body)
    body = re.sub(r"\[\s*(?:Next|Trang tiếp|Trang trước)[^\]]*\]\([^)]*\)", "", body)

    # 4. Remove empty links: [](...)  or  [ ](...)
    body = re.sub(r"\[\s*\]\([^)]*\)", "", body)

    # 5. Remove orphan brackets with just whitespace
    body = re.sub(r"\[\s+\]", "", body)

    # 6. Fix bold spacing: "**text** :" → "**text**:"
    body = re.sub(r"(\*\*[^*]+\*\*)\s+:", r"\1:", body)

    # 7. Convert **Bước N**: pattern to numbered list items
    body = _convert_buoc_steps(body)

    # 8. Convert **Chú ý**: to :::warning admonitions
    body = _convert_admonitions(body, "Chú ý", "warning")

    # 9. Convert **Lưu ý**: to :::note admonitions
    body = _convert_admonitions(body, "Lưu ý", "note")

    # 10. Remove heading number prefixes: ## **2.1 Title** → ## Title
    body = re.sub(
        r"^(#{1,6})\s+\*{0,2}(\d+[\.\d]*\s+)(.*?)\*{0,2}\s*$",
        lambda m: m.group(1) + " " + m.group(3).strip("*").strip(),
        body,
        flags=re.MULTILINE,
    )

    # 11. Remove emojis
    body = EMOJI_PATTERN.sub("", body)

    # 12. Clean up [code] Copy ... [/code] blocks → proper fenced code blocks
    body = _clean_code_blocks(body)

    # 13. Remove excessive blank lines (max 2 consecutive)
    body = re.sub(r"\n{3,}", "\n\n", body)

    return body.strip()


def _convert_buoc_steps(body: str) -> str:
    """Convert **Bước N** : text patterns to numbered list friendly format.
    Leaves bold step label intact but normalises spacing.
    """
    # Normalise "**Bước N** :" → "**Bước N**:"
    body = re.sub(r"\*\*Bước\s+(\d+)\*\*\s*:", r"**Bước \1**:", body)
    return body


def _convert_admonitions(body: str, keyword: str, admonition_type: str) -> str:
    """Convert **Keyword**: some text → :::type\\nsome text\\n:::"""

    def replacer(m: re.Match) -> str:
        content = m.group(1).strip()
        if content:
            return f"\n:::{admonition_type}\n{content}\n:::\n"
        return f"\n:::{admonition_type}\n\n:::\n"

    # Inline pattern: **Chú ý**: text on same line (possibly in list item)
    pattern = re.compile(
        r"\*\*" + re.escape(keyword) + r"\*\*\s*:\s*(.+?)(?=\n|\Z)",
        re.MULTILINE,
    )
    body = pattern.sub(replacer, body)
    return body


def _clean_code_blocks(body: str) -> str:
    """Convert [code]Copy ...[/code] to fenced ``` blocks."""

    def replacer(m: re.Match) -> str:
        code = m.group(1)
        # Remove leading "Copy" word
        code = re.sub(r"^\s*Copy\s*", "", code).strip()
        return f"\n```\n{code}\n```\n"

    body = re.sub(r"\[code\](.*?)\[/code\]", replacer, body, flags=re.DOTALL)
    return body


def build_frontmatter(slug: str, title: str, description: str, label: str) -> str:
    """Build Docusaurus frontmatter block."""
    safe_title = title.replace('"', '\\"') if title else slug
    safe_desc = description.replace('"', '\\"') if description else ""
    safe_label = label.replace('"', '\\"') if label else safe_title

    lines = [
        "---",
        f'id: "{slug}"',
        f'title: "{safe_title}"',
        f'sidebar_label: "{safe_label}"',
    ]
    if safe_desc:
        lines.append(f'description: "{safe_desc}"')
    lines.append("---")
    return "\n".join(lines)


def make_sidebar_label(title: str) -> str:
    """Create a shorter sidebar label from title."""
    # Remove common verbose prefixes for labels
    prefixes = [
        "Hướng dẫn ",
        "FPT Data Platform - ",
        "FPT Smart Cloud - ",
    ]
    label = title
    for p in prefixes:
        if label.startswith(p):
            label = label[len(p):]
    return label[:50] if len(label) > 50 else label


# ---------------------------------------------------------------------------
# Process a single page
# ---------------------------------------------------------------------------

def process_page(slug: str, category: str, output_stem: str) -> dict:
    """Read crawled page, clean it, return dict with path and content."""
    crawled_dir = CRAWLED_BASE / slug
    content_path = crawled_dir / "content.md"
    metadata_path = crawled_dir / "metadata.json"

    if not content_path.exists():
        return {"slug": slug, "status": "missing", "path": None}

    raw = content_path.read_text(encoding="utf-8")
    body = strip_frontmatter(raw)

    # Read metadata if available
    meta_title = slug
    if metadata_path.exists():
        try:
            meta = json.loads(metadata_path.read_text(encoding="utf-8"))
            meta_title = meta.get("title", slug)
        except (json.JSONDecodeError, OSError):
            pass

    # Extract proper title from content
    content_title = extract_title_from_content(body)
    title = content_title if content_title else meta_title

    # Clean the body
    body = clean_body(body)

    # Description from cleaned body
    description = extract_description(body)

    # Sidebar label
    sidebar_label = make_sidebar_label(title)

    # Build frontmatter
    fm = build_frontmatter(slug, title, description, sidebar_label)

    final_content = fm + "\n\n" + body + "\n"

    # Output path
    out_dir = DOCS_VI_BASE / category
    out_path = out_dir / f"{output_stem}.md"

    return {
        "slug": slug,
        "status": "ok",
        "path": out_path,
        "content": final_content,
        "category": category,
        "output_stem": output_stem,
    }


# ---------------------------------------------------------------------------
# Sidebar generation
# ---------------------------------------------------------------------------

def build_sidebar_js(category_items: dict[str, list[str]]) -> str:
    """Build the sidebar JS snippet."""
    lines = ["  {", "    type: 'category',", "    label: 'FPT Data Platform',", "    items: ["]

    for cat in CATEGORY_ORDER:
        items = category_items.get(cat, [])
        if not items:
            continue

        label = CATEGORY_LABELS.get(cat, cat)

        if cat == "initial-setup":
            # Flat item, no sub-category wrapper needed if single item
            for item in items:
                lines.append(f"      '{item}',")
        else:
            lines.append("      {")
            lines.append("        type: 'category',")
            lines.append(f"        label: '{label}',")
            lines.append("        items: [")
            for item in items:
                lines.append(f"          '{item}',")
            lines.append("        ],")
            lines.append("      },")

    lines.append("    ],")
    lines.append("  },")
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    # Ensure output directories exist
    DOCS_VI_BASE.mkdir(parents=True, exist_ok=True)
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)

    results = []
    category_items: dict[str, list[str]] = {cat: [] for cat in CATEGORY_ORDER}

    # Process all slugs in SLUG_TO_PATH
    for slug, (category, output_stem) in SLUG_TO_PATH.items():
        decoded_slug = unquote(slug)  # handle %C3%B4 etc for dir lookup
        # Try decoded slug as directory name first, then original
        if (CRAWLED_BASE / decoded_slug).exists():
            actual_slug = decoded_slug
        elif (CRAWLED_BASE / slug).exists():
            actual_slug = slug
        else:
            print(f"  [WARN] crawled dir not found for slug: {slug}")
            results.append({"slug": slug, "status": "missing", "path": None})
            continue

        result = process_page(actual_slug, category, output_stem)
        results.append(result)

        if result["status"] == "ok":
            # Write file
            out_path: Path = result["path"]
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_text(result["content"], encoding="utf-8")

            # Track sidebar item
            doc_id = f"fpt-data-platform/{category}/{output_stem}"
            category_items[category].append(doc_id)

    # Write sidebar snippet
    sidebar_js = build_sidebar_js(category_items)
    SIDEBAR_OUTPUT.write_text(sidebar_js + "\n", encoding="utf-8")

    # Summary
    ok = sum(1 for r in results if r["status"] == "ok")
    missing = sum(1 for r in results if r["status"] == "missing")

    print("\n" + "=" * 60)
    print("FPT Data Platform - Conversion Summary")
    print("=" * 60)
    print(f"  Pages processed:  {ok}")
    print(f"  Pages missing:    {missing}")
    print(f"  Output directory: {DOCS_VI_BASE}")
    print(f"  Sidebar snippet:  {SIDEBAR_OUTPUT}")

    if missing > 0:
        print("\n  Missing pages:")
        for r in results:
            if r["status"] == "missing":
                print(f"    - {r['slug']}")

    print("\n  Files written per category:")
    for cat in CATEGORY_ORDER:
        count = len(category_items.get(cat, []))
        if count:
            print(f"    {cat:35s} {count} file(s)")

    print("=" * 60)


if __name__ == "__main__":
    main()
