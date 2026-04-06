#!/usr/bin/env python3
"""
Re-download failed images from crawled-web using direct HTTP requests.

The original crawl used browser fetch() which gets CORS-blocked by
s3-sgn10.fptcloud.com. This script uses urllib directly to bypass that.

Usage:
  python recrawl_failed_images.py                # Re-download all failed images
  python recrawl_failed_images.py --dry-run      # Show what would be downloaded
  python recrawl_failed_images.py --concurrency 5  # Parallel downloads
"""

import argparse
import json
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.error import URLError, HTTPError

SCRIPT_DIR = Path(__file__).parent
DEFAULT_CRAWLED_DIR = SCRIPT_DIR.parent / "crawled-web"

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/131.0.0.0 Safari/537.36"
)


def download_image(url: str, save_path: Path, timeout: int = 15) -> dict:
    """Download a single image via urllib."""
    try:
        req = Request(url, headers={"User-Agent": USER_AGENT})
        with urlopen(req, timeout=timeout) as resp:
            data = resp.read()
            save_path.parent.mkdir(parents=True, exist_ok=True)
            save_path.write_bytes(data)
            return {"ok": True, "size": len(data)}
    except HTTPError as e:
        return {"ok": False, "error": f"HTTP {e.code}"}
    except URLError as e:
        return {"ok": False, "error": str(e.reason)}
    except Exception as e:
        return {"ok": False, "error": str(e)}


def collect_failed_images(crawled_dir: Path) -> list[dict]:
    """Scan metadata.json files to find images that need re-downloading."""
    tasks = []
    for meta_file in sorted(crawled_dir.rglob("metadata.json")):
        data = json.load(open(meta_file))
        img_info = data.get("images", {})
        if img_info.get("failed", 0) == 0:
            continue

        page_dir = meta_file.parent
        img_dir = page_dir / "images"

        for img in data.get("imageList", []):
            img_path = img_dir / img["filename"]
            if img_path.exists() and img_path.stat().st_size > 0:
                continue

            src = img.get("src", "")
            if not src or not src.startswith("http"):
                continue

            tasks.append({
                "slug": data["slug"],
                "module": data["module"],
                "url": src,
                "save_path": img_path,
                "filename": img["filename"],
            })

    return tasks


def update_metadata(crawled_dir: Path):
    """Update metadata.json files with corrected image counts."""
    for meta_file in sorted(crawled_dir.rglob("metadata.json")):
        data = json.load(open(meta_file))
        img_dir = meta_file.parent / "images"
        image_list = data.get("imageList", [])

        downloaded = 0
        failed = 0
        for img in image_list:
            img_path = img_dir / img["filename"]
            if img_path.exists() and img_path.stat().st_size > 0:
                downloaded += 1
            else:
                failed += 1

        old = data.get("images", {})
        if old.get("downloaded") != downloaded or old.get("failed") != failed:
            data["images"] = {
                "total": len(image_list),
                "downloaded": downloaded,
                "failed": failed,
            }
            meta_file.write_text(
                json.dumps(data, ensure_ascii=False, indent=2),
                encoding="utf-8",
            )


def main():
    parser = argparse.ArgumentParser(description="Re-download failed crawl images")
    parser.add_argument("--dir", default=str(DEFAULT_CRAWLED_DIR),
                        help="Crawled output directory")
    parser.add_argument("--dry-run", action="store_true",
                        help="Only show what would be downloaded")
    parser.add_argument("--concurrency", type=int, default=4,
                        help="Parallel downloads (default: 4)")
    parser.add_argument("--timeout", type=int, default=15,
                        help="Download timeout in seconds")
    args = parser.parse_args()

    crawled_dir = Path(args.dir)
    tasks = collect_failed_images(crawled_dir)

    if not tasks:
        print("No failed images to re-download.")
        return

    print(f"Found {len(tasks)} failed images to re-download\n")

    if args.dry_run:
        for t in tasks[:20]:
            print(f"  {t['module'][:25]:25s} {t['slug'][:30]:30s} {t['filename']} <- {t['url'][:80]}")
        if len(tasks) > 20:
            print(f"  ... +{len(tasks) - 20} more")
        return

    ok = 0
    fail = 0

    with ThreadPoolExecutor(max_workers=args.concurrency) as pool:
        futures = {
            pool.submit(download_image, t["url"], t["save_path"], args.timeout): t
            for t in tasks
        }
        for i, future in enumerate(as_completed(futures), 1):
            task = futures[future]
            result = future.result()
            status = "OK" if result["ok"] else f"FAIL ({result['error']})"
            if result["ok"]:
                ok += 1
                size_kb = result["size"] / 1024
                print(f"  [{i}/{len(tasks)}] {task['slug'][:30]:30s} {task['filename']} {size_kb:.0f}KB")
            else:
                fail += 1
                print(f"  [{i}/{len(tasks)}] {task['slug'][:30]:30s} {task['filename']} {status}")

    # Update metadata
    print(f"\nUpdating metadata...")
    update_metadata(crawled_dir)

    print(f"\n{'='*50}")
    print(f"  Downloaded: {ok}")
    print(f"  Still failed: {fail}")
    print(f"{'='*50}")


if __name__ == "__main__":
    main()
