#!/usr/bin/env node
/**
 * Check language matching between EN/VI/JA sidebars.
 *
 * For each doc in one sidebar, check if an equivalent doc exists
 * in the other sidebars (by filename). Report mismatches.
 *
 * Also checks if files physically exist in each docs directory.
 */

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const SIDEBAR_FILES = {
  en: path.join(ROOT, 'sidebars.js'),
  vi: path.join(ROOT, 'sidebars-vi.js'),
  ja: path.join(ROOT, 'sidebars-ja.js'),
};

const DOC_DIRS = {
  en: path.join(ROOT, 'docs'),
  vi: path.join(ROOT, 'docs-vi'),
  ja: path.join(ROOT, 'docs-ja'),
};

// Section name mapping (for directories with different names)
const SECTION_MAP = {
  'タグ-付け': 'tagging',
  'tagging': 'tagging',
};

function normalizeSectionName(section) {
  return SECTION_MAP[section] || section;
}

// ── Collect doc IDs grouped by section ──

function collectDocsBySectionFromSidebar(items, parentLabel) {
  const docs = []; // { id, section, fileName, label, categoryPath }

  for (const item of items) {
    if (item.type === 'doc' && item.id) {
      const parts = item.id.split('/');
      const section = parts.length > 1 ? parts[0] : '_root';
      const fileName = parts[parts.length - 1];
      docs.push({
        id: item.id,
        section: normalizeSectionName(section),
        rawSection: section,
        fileName,
        label: item.label || fileName,
        categoryPath: parentLabel,
      });
    }
    if (item.type === 'category' && item.items) {
      const catPath = parentLabel ? `${parentLabel} > ${item.label}` : item.label;
      docs.push(...collectDocsBySectionFromSidebar(item.items, catPath));
    }
  }
  return docs;
}

function collectFilesBySectionFromDisk(docsDir) {
  const files = {}; // section → Set of fileNames

  function walk(dir, prefix) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.name.startsWith('.')) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(full, prefix ? `${prefix}/${entry.name}` : entry.name);
        } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
          const section = prefix || '_root';
          const normSection = normalizeSectionName(section);
          const fileName = entry.name.replace(/\.(md|mdx)$/, '');
          if (!files[normSection]) files[normSection] = new Set();
          files[normSection].add(fileName);
        }
      }
    } catch {}
  }

  walk(docsDir, '');
  return files;
}

// ── Main ──

console.log('╔══════════════════════════════════════════════════════════════════════╗');
console.log('║           LANGUAGE MATCHING CHECK                                    ║');
console.log('╚══════════════════════════════════════════════════════════════════════╝\n');

// Load all sidebar docs
const sidebarDocs = {};
for (const [lang, file] of Object.entries(SIDEBAR_FILES)) {
  delete require.cache[require.resolve(file)];
  const sidebar = require(file);
  sidebarDocs[lang] = collectDocsBySectionFromSidebar(sidebar.tutorialSidebar, '');
}

// Load all files from disk
const diskFiles = {};
for (const [lang, dir] of Object.entries(DOC_DIRS)) {
  diskFiles[lang] = collectFilesBySectionFromDisk(dir);
}

// Collect all sections and fileNames across all languages
const allSections = new Set();
for (const lang of ['en', 'vi', 'ja']) {
  for (const doc of sidebarDocs[lang]) {
    allSections.add(doc.section);
  }
}

// For each section, compare which fileNames exist in which languages
console.log('┌──────────────────────────────────────────────────────────────────────┐');
console.log('│  PER-SECTION MATCHING                                                │');
console.log('└──────────────────────────────────────────────────────────────────────┘\n');

const sectionStats = [];
let totalMatched = 0;
let totalMissingEN = 0;
let totalMissingVI = 0;
let totalMissingJA = 0;

for (const section of [...allSections].sort()) {
  // Get all unique fileNames for this section across all languages (from disk)
  const allFiles = new Set();
  for (const lang of ['en', 'vi', 'ja']) {
    const sectionFiles = diskFiles[lang][section] || new Set();
    for (const f of sectionFiles) allFiles.add(f);
  }

  if (allFiles.size === 0) continue;

  const enFiles = diskFiles.en[section] || new Set();
  const viFiles = diskFiles.vi[section] || new Set();
  const jaFiles = diskFiles.ja[section] || new Set();

  // Files in all 3
  const inAll = [...allFiles].filter(f => enFiles.has(f) && viFiles.has(f) && jaFiles.has(f));
  // Missing per lang
  const missingEN = [...allFiles].filter(f => !enFiles.has(f) && (viFiles.has(f) || jaFiles.has(f)));
  const missingVI = [...allFiles].filter(f => !viFiles.has(f) && (enFiles.has(f) || jaFiles.has(f)));
  const missingJA = [...allFiles].filter(f => !jaFiles.has(f) && (enFiles.has(f) || viFiles.has(f)));

  totalMatched += inAll.length;
  totalMissingEN += missingEN.length;
  totalMissingVI += missingVI.length;
  totalMissingJA += missingJA.length;

  if (missingEN.length > 0 || missingVI.length > 0 || missingJA.length > 0) {
    sectionStats.push({
      section,
      total: allFiles.size,
      matched: inAll.length,
      missingEN,
      missingVI,
      missingJA,
    });
  }
}

// Sort by most mismatches first
sectionStats.sort((a, b) => {
  const aMiss = a.missingEN.length + a.missingVI.length + a.missingJA.length;
  const bMiss = b.missingEN.length + b.missingVI.length + b.missingJA.length;
  return bMiss - aMiss;
});

for (const s of sectionStats.slice(0, 25)) {
  const missTotal = s.missingEN.length + s.missingVI.length + s.missingJA.length;
  console.log(`  [${s.section}] ${s.matched}/${s.total} matched, ${missTotal} missing`);
  if (s.missingEN.length > 0) {
    console.log(`    Missing EN (${s.missingEN.length}): ${s.missingEN.slice(0, 5).join(', ')}${s.missingEN.length > 5 ? ' ...' : ''}`);
  }
  if (s.missingVI.length > 0) {
    console.log(`    Missing VI (${s.missingVI.length}): ${s.missingVI.slice(0, 5).join(', ')}${s.missingVI.length > 5 ? ' ...' : ''}`);
  }
  if (s.missingJA.length > 0) {
    console.log(`    Missing JA (${s.missingJA.length}): ${s.missingJA.slice(0, 5).join(', ')}${s.missingJA.length > 5 ? ' ...' : ''}`);
  }
  console.log();
}

if (sectionStats.length > 25) {
  console.log(`  ... and ${sectionStats.length - 25} more sections with mismatches\n`);
}

// ── Summary ──

console.log('┌──────────────────────────────────────────────────────────────────────┐');
console.log('│  SUMMARY                                                              │');
console.log('└──────────────────────────────────────────────────────────────────────┘\n');

console.log(`  Files matched in all 3 languages: ${totalMatched}`);
console.log(`  Files missing in EN: ${totalMissingEN}`);
console.log(`  Files missing in VI: ${totalMissingVI}`);
console.log(`  Files missing in JA: ${totalMissingJA}`);
console.log(`  Total mismatches: ${totalMissingEN + totalMissingVI + totalMissingJA}`);
console.log(`  Sections with mismatches: ${sectionStats.length}/${allSections.size}`);

// ── CSV export ──
const csvRows = ['section,fileName,in_en,in_vi,in_ja,status'];
for (const section of [...allSections].sort()) {
  const allFiles = new Set();
  for (const lang of ['en', 'vi', 'ja']) {
    const sf = diskFiles[lang][section] || new Set();
    for (const f of sf) allFiles.add(f);
  }
  for (const fileName of [...allFiles].sort()) {
    const inEN = (diskFiles.en[section] || new Set()).has(fileName) ? 'Y' : 'N';
    const inVI = (diskFiles.vi[section] || new Set()).has(fileName) ? 'Y' : 'N';
    const inJA = (diskFiles.ja[section] || new Set()).has(fileName) ? 'Y' : 'N';
    const status = (inEN === 'Y' && inVI === 'Y' && inJA === 'Y') ? 'OK' : 'MISSING';
    if (status === 'MISSING') {
      csvRows.push(`${section},${fileName},${inEN},${inVI},${inJA},${status}`);
    }
  }
}

const csvPath = path.join(ROOT, 'language-matching-report.csv');
fs.writeFileSync(csvPath, csvRows.join('\n'));
console.log(`\n  CSV exported: language-matching-report.csv (${csvRows.length - 1} mismatched files)`);
