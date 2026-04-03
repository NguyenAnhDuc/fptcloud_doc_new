#!/usr/bin/env node
/**
 * Analyze remaining unmatched docs across languages.
 * For each file that only exists in 1-2 languages, show:
 * - Content size (bytes, lines)
 * - Which languages have it
 * - Best partial match score if any
 * - Recommendation: translate from which source
 *
 * Output: unmatched-docs-report.csv
 */

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const DOC_DIRS = {
  en: path.join(ROOT, 'docs'),
  vi: path.join(ROOT, 'docs-vi'),
  ja: path.join(ROOT, 'docs-ja'),
};

const SECTION_ALIASES = { 'タグ-付け': 'tagging' };
function resolveSection(s) { return SECTION_ALIASES[s] || s; }

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w[\w_-]*)\s*:\s*(.+)$/);
    if (m) {
      let val = m[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'")))
        val = val.slice(1, -1);
      fm[m[1]] = val;
    }
  }
  return fm;
}

function getBody(content) {
  const match = content.match(/^---\n[\s\S]*?\n---\n?([\s\S]*)$/);
  return match ? match[1].trim() : content.trim();
}

function countImages(content) {
  return (content.match(/!\[.*?\]\(.*?\)/g) || []).length;
}

function getAllDocs(docsDir, lang) {
  const docs = [];
  function walk(dir, prefix) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.name.startsWith('.')) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(full, prefix ? `${prefix}/${entry.name}` : entry.name);
        } else if (entry.name.endsWith('.md')) {
          const content = fs.readFileSync(full, 'utf-8');
          const fm = parseFrontmatter(content);
          const body = getBody(content);
          const section = prefix || '_root';
          docs.push({
            lang,
            filePath: full,
            fileName: entry.name.replace(/\.md$/, ''),
            section,
            normSection: resolveSection(section),
            docId: fm.id || entry.name.replace(/\.md$/, ''),
            title: fm.title || '',
            bytes: Buffer.byteLength(body, 'utf-8'),
            lines: body.split('\n').length,
            images: countImages(body),
            body,
          });
        }
      }
    } catch {}
  }
  walk(docsDir, '');
  return docs;
}

// ── Load all docs ──

console.log('Loading docs...');
const allDocs = {};
for (const [lang, dir] of Object.entries(DOC_DIRS)) {
  allDocs[lang] = getAllDocs(dir, lang);
}

// ── Build docId index ──

const docIdIndex = {}; // normSection/docId → { en, vi, ja }
for (const [lang, docs] of Object.entries(allDocs)) {
  for (const doc of docs) {
    const key = `${doc.normSection}/${doc.docId}`;
    if (!docIdIndex[key]) docIdIndex[key] = {};
    docIdIndex[key][lang] = doc;
  }
}

// ── Find unmatched ──

const unmatched = []; // docs that exist in < 3 languages

for (const [key, langs] of Object.entries(docIdIndex)) {
  const langCount = Object.keys(langs).length;
  if (langCount >= 3) continue; // fully matched

  const present = Object.keys(langs);
  const missing = ['en', 'vi', 'ja'].filter(l => !langs[l]);

  // Pick the richest version as source
  let bestDoc = null;
  let bestBytes = 0;
  for (const [lang, doc] of Object.entries(langs)) {
    if (doc.bytes > bestBytes) {
      bestBytes = doc.bytes;
      bestDoc = doc;
    }
  }

  unmatched.push({
    section: bestDoc.normSection,
    docId: bestDoc.docId,
    title: bestDoc.title,
    presentIn: present.join('+'),
    missingIn: missing.join('+'),
    bytes: bestDoc.bytes,
    lines: bestDoc.lines,
    images: bestDoc.images,
    sourceLang: bestDoc.lang,
  });
}

// Sort by content size (richest first)
unmatched.sort((a, b) => b.bytes - a.bytes);

// ── Summary by section ──

console.log('\n=== UNMATCHED DOCS BY SECTION (sorted by content size) ===\n');

const bySectionSize = {};
for (const doc of unmatched) {
  if (!bySectionSize[doc.section]) bySectionSize[doc.section] = { count: 0, totalBytes: 0 };
  bySectionSize[doc.section].count++;
  bySectionSize[doc.section].totalBytes += doc.bytes;
}

const sectionsSorted = Object.entries(bySectionSize).sort((a, b) => b[1].totalBytes - a[1].totalBytes);

console.log('Section'.padEnd(45) + 'Files'.padStart(6) + 'Total KB'.padStart(10) + '  Top missing');
console.log('─'.repeat(90));

for (const [section, stats] of sectionsSorted.slice(0, 30)) {
  const sectionDocs = unmatched.filter(d => d.section === section);
  const missingCounts = {};
  for (const d of sectionDocs) {
    for (const m of d.missingIn.split('+')) {
      missingCounts[m] = (missingCounts[m] || 0) + 1;
    }
  }
  const topMissing = Object.entries(missingCounts).sort((a, b) => b[1] - a[1]).map(([l, c]) => `${l}:${c}`).join(' ');
  console.log(section.padEnd(45) + String(stats.count).padStart(6) + (stats.totalBytes / 1024).toFixed(1).padStart(10) + '  ' + topMissing);
}

// ── Summary stats ──

console.log('\n=== SUMMARY ===\n');

const missingCounts = { en: 0, vi: 0, ja: 0 };
const missingBytes = { en: 0, vi: 0, ja: 0 };
for (const doc of unmatched) {
  for (const lang of doc.missingIn.split('+')) {
    missingCounts[lang]++;
    missingBytes[lang] += doc.bytes;
  }
}

console.log('Total unmatched docs: ' + unmatched.length);
console.log('Missing in EN: ' + missingCounts.en + ' docs (' + (missingBytes.en / 1024).toFixed(0) + ' KB content to translate)');
console.log('Missing in VI: ' + missingCounts.vi + ' docs (' + (missingBytes.vi / 1024).toFixed(0) + ' KB content to translate)');
console.log('Missing in JA: ' + missingCounts.ja + ' docs (' + (missingBytes.ja / 1024).toFixed(0) + ' KB content to translate)');

// Content richness distribution
const byRichness = { tiny: 0, small: 0, medium: 0, large: 0 };
for (const doc of unmatched) {
  if (doc.bytes < 500) byRichness.tiny++;
  else if (doc.bytes < 2000) byRichness.small++;
  else if (doc.bytes < 10000) byRichness.medium++;
  else byRichness.large++;
}

console.log('\nContent richness:');
console.log('  Large (>10KB):  ' + byRichness.large + ' docs — high value to translate');
console.log('  Medium (2-10KB): ' + byRichness.medium + ' docs');
console.log('  Small (0.5-2KB): ' + byRichness.small + ' docs');
console.log('  Tiny (<500B):   ' + byRichness.tiny + ' docs — stubs, may skip');

// ── CSV export ──

const csvRows = ['section,docId,title,present_in,missing_in,source_lang,bytes,lines,images'];
for (const doc of unmatched) {
  const title = doc.title.replace(/,/g, ';').replace(/"/g, "'");
  csvRows.push(`${doc.section},${doc.docId},"${title}",${doc.presentIn},${doc.missingIn},${doc.sourceLang},${doc.bytes},${doc.lines},${doc.images}`);
}

const csvPath = path.join(ROOT, 'unmatched-docs-report.csv');
fs.writeFileSync(csvPath, csvRows.join('\n'));
console.log('\nCSV exported: unmatched-docs-report.csv (' + (csvRows.length - 1) + ' rows)');
