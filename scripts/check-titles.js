#!/usr/bin/env node
/**
 * Check title quality across all docs:
 * 1. Frontmatter title vs sidebar label mismatch
 * 2. Title in wrong language for the docs directory
 * 3. Title formatting issues (ALL CAPS, docId-style, encoding issues)
 * 4. H1 heading vs frontmatter title mismatch
 */

const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");

const VI_PAT = /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]/i;
const JA_PAT = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/;

const issues = [];

function parseFm(c) {
  const m = c.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = {};
  for (const l of m[1].split("\n")) {
    const mm = l.match(/^(\w[\w_-]*)\s*:\s*(.+)$/);
    if (mm) { let v = mm[2].trim(); if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1); fm[mm[1]] = v; }
  }
  return fm;
}

function getH1(c) {
  const body = c.replace(/^---\n[\s\S]*?\n---\n?/, "");
  const m = body.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : null;
}

// Collect sidebar labels
function collectSidebarLabels(file) {
  delete require.cache[require.resolve(path.join(ROOT, file))];
  const s = require(path.join(ROOT, file));
  const labels = {};
  function collect(items) {
    for (const i of items) {
      if (i.type === "doc" && i.id && i.label) labels[i.id] = i.label;
      if (i.items) collect(i.items);
    }
  }
  collect(s.tutorialSidebar);
  return labels;
}

const sidebarLabels = {
  en: collectSidebarLabels("sidebars.js"),
  vi: collectSidebarLabels("sidebars-vi.js"),
  ja: collectSidebarLabels("sidebars-ja.js"),
};

for (const [lang, dir, expected] of [["en", "docs", "English"], ["vi", "docs-vi", "Vietnamese"], ["ja", "docs-ja", "Japanese"]]) {
  function walk(d, prefix) {
    try {
      for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        if (e.name.startsWith(".")) continue;
        const full = path.join(d, e.name);
        if (e.isDirectory()) { walk(full, prefix ? prefix + "/" + e.name : e.name); continue; }
        if (!e.name.endsWith(".md")) continue;
        const c = fs.readFileSync(full, "utf-8");
        const fm = parseFm(c);
        const title = fm.title || "";
        const sidebarLabel = fm.sidebar_label || "";
        const h1 = getH1(c);
        const docId = fm.id || e.name.replace(/\.md$/, "");
        const fullId = prefix ? prefix + "/" + docId : docId;
        const relFile = prefix ? prefix + "/" + e.name : e.name;

        // 1. Wrong language title
        if (lang === "en" && (VI_PAT.test(title) || JA_PAT.test(title))) {
          issues.push({ type: "WRONG_LANG", lang, file: relFile, title, detail: "EN file has " + (VI_PAT.test(title) ? "Vietnamese" : "Japanese") + " title" });
        }
        if (lang === "vi" && JA_PAT.test(title)) {
          issues.push({ type: "WRONG_LANG", lang, file: relFile, title, detail: "VI file has Japanese title" });
        }
        if (lang === "ja" && VI_PAT.test(title)) {
          issues.push({ type: "WRONG_LANG", lang, file: relFile, title, detail: "JA file has Vietnamese title" });
        }

        // 2. DocId-style title (not human readable)
        if (title && /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+/.test(title) === false) {
          // Check if title looks like docId (has dashes, underscores, no spaces)
          if (title.includes("-") && !title.includes(" ") && title.length > 10) {
            issues.push({ type: "DOCID_TITLE", lang, file: relFile, title, detail: "Title looks like docId (not human readable)" });
          }
        }

        // 3. ALL CAPS or weird casing
        if (title && title === title.toUpperCase() && title.length > 5) {
          issues.push({ type: "ALL_CAPS", lang, file: relFile, title, detail: "Title is ALL CAPS" });
        }
        // Mixed weird casing like "TạO" "DịCh" etc
        if (title && /[A-Z][a-zàáảãạ][A-Z]/.test(title)) {
          issues.push({ type: "BAD_CASE", lang, file: relFile, title, detail: "Mixed/broken casing in title" });
        }

        // 4. Sidebar label vs frontmatter title mismatch
        const sLabel = sidebarLabels[lang][fullId];
        if (sLabel && title && sLabel !== title && sLabel !== sidebarLabel) {
          // Only flag if significantly different
          if (sLabel.toLowerCase() !== title.toLowerCase() && sLabel.toLowerCase() !== sidebarLabel.toLowerCase()) {
            issues.push({ type: "LABEL_MISMATCH", lang, file: relFile, title, detail: "sidebar: \"" + sLabel + "\" vs title: \"" + title + "\"" });
          }
        }

        // 5. H1 vs title mismatch (significant)
        if (h1 && title && h1.toLowerCase() !== title.toLowerCase()) {
          // Only flag if very different
          const h1Clean = h1.replace(/[#*_`]/g, "").trim().toLowerCase();
          const titleClean = title.toLowerCase();
          if (!h1Clean.includes(titleClean) && !titleClean.includes(h1Clean) && h1Clean.length > 5) {
            issues.push({ type: "H1_MISMATCH", lang, file: relFile, title, detail: "H1: \"" + h1.substring(0, 60) + "\" vs title: \"" + title.substring(0, 60) + "\"" });
          }
        }

        // 6. Empty/missing title
        if (!title || title.length < 2) {
          issues.push({ type: "EMPTY_TITLE", lang, file: relFile, title: "(empty)", detail: "Missing or empty title" });
        }
      }
    } catch {}
  }
  walk(path.join(ROOT, dir), "");
}

// Report
console.log("╔══════════════════════════════════════════════════════════════╗");
console.log("║           TITLE QUALITY CHECK                               ║");
console.log("╚══════════════════════════════════════════════════════════════╝\n");

const byType = {};
for (const i of issues) { if (!byType[i.type]) byType[i.type] = []; byType[i.type].push(i); }

for (const [type, items] of Object.entries(byType).sort((a, b) => b[1].length - a[1].length)) {
  const byLang = {};
  for (const i of items) { byLang[i.lang] = (byLang[i.lang] || 0) + 1; }
  console.log(type + " (" + items.length + ") — EN:" + (byLang.en||0) + " VI:" + (byLang.vi||0) + " JA:" + (byLang.ja||0));
  for (const i of items.slice(0, 5)) {
    console.log("  [" + i.lang.toUpperCase() + "] " + i.file.substring(0, 50));
    console.log("       " + i.detail);
  }
  if (items.length > 5) console.log("  ... +" + (items.length - 5) + " more\n");
  else console.log();
}

console.log("=== SUMMARY ===");
console.log("Total issues: " + issues.length);
for (const [type, items] of Object.entries(byType).sort((a, b) => b[1].length - a[1].length)) {
  console.log("  " + type + ": " + items.length);
}

// CSV
const rows = ["type,lang,file,title,detail"];
for (const i of issues) {
  rows.push(i.type + "," + i.lang + ",\"" + i.file + "\",\"" + (i.title || "").replace(/"/g, "'").substring(0, 100) + "\",\"" + i.detail.replace(/"/g, "'") + "\"");
}
fs.writeFileSync(path.join(ROOT, "title-check-report.csv"), rows.join("\n"));
console.log("\nCSV: title-check-report.csv (" + (rows.length - 1) + " rows)");
