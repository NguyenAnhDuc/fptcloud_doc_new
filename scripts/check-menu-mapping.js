#!/usr/bin/env node
/**
 * Check 1:1:1 menu mapping between EN/VI/JA.
 *
 * For each L1 > L2 > doc, check if the same docId exists in all 3 languages.
 * Report:
 * - Matched (all 3): ✅
 * - Partial (2 of 3): ⚠️ which lang missing
 * - Orphan (1 only): ❌ which lang has it
 *
 * Also compare sidebar structure (category hierarchy) between languages.
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

const SECTION_ALIASES = { 'タグ-付け': 'tagging' };
function normSection(s) { return SECTION_ALIASES[s] || s; }

function parseFm(c) {
  const m = c.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = {};
  for (const l of m[1].split('\n')) {
    const mm = l.match(/^(\w[\w_-]*)\s*:\s*(.+)$/);
    if (mm) { let v = mm[2].trim(); if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1); fm[mm[1]] = v; }
  }
  return fm;
}

// ── Collect sidebar structure ──

function collectSidebarTree(items, parentPath) {
  const result = [];
  for (const item of items) {
    if (item.type === 'doc') {
      result.push({ type: 'doc', id: item.id, label: item.label || '', path: parentPath });
    } else if (item.type === 'category') {
      const catPath = parentPath ? `${parentPath} > ${item.label}` : item.label;
      result.push({ type: 'category', label: item.label, path: parentPath, childCount: (item.items || []).length });
      result.push(...collectSidebarTree(item.items || [], catPath));
    }
  }
  return result;
}

// ── Collect file-based doc index ──

function collectFileIndex(docsDir) {
  const index = {}; // normSection/docId → { filePath, title, bytes }
  function walk(dir, prefix) {
    try {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith('.')) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) { walk(full, prefix ? `${prefix}/${entry.name}` : entry.name); continue; }
        if (!entry.name.endsWith('.md')) continue;
        const content = fs.readFileSync(full, 'utf-8');
        const fm = parseFm(content);
        const body = content.replace(/^---\n[\s\S]*?\n---\n?/, '').trim();
        const sec = normSection(prefix || '_root');
        const docId = fm.id || entry.name.replace(/\.md$/, '');
        const key = `${sec}/${docId}`;
        index[key] = {
          filePath: full,
          title: fm.title || '',
          sidebarLabel: fm.sidebar_label || fm.title || '',
          bytes: body.length,
          section: sec,
          docId,
        };
      }
    } catch {}
  }
  walk(docsDir, '');
  return index;
}

// ── Main ──

console.log('╔══════════════════════════════════════════════════════════════════════╗');
console.log('║           MENU 1:1:1 MAPPING CHECK                                  ║');
console.log('╚══════════════════════════════════════════════════════════════════════╝\n');

// Collect file indexes
const indexes = {};
for (const [lang, dir] of Object.entries(DOC_DIRS)) {
  indexes[lang] = collectFileIndex(dir);
}

// Collect all unique docId keys
const allKeys = new Set([
  ...Object.keys(indexes.en),
  ...Object.keys(indexes.vi),
  ...Object.keys(indexes.ja),
]);

// Classify each key
const matched = []; // all 3
const partial = []; // 2 of 3
const orphan = [];  // 1 only

for (const key of allKeys) {
  const hasEN = !!indexes.en[key];
  const hasVI = !!indexes.vi[key];
  const hasJA = !!indexes.ja[key];
  const count = (hasEN ? 1 : 0) + (hasVI ? 1 : 0) + (hasJA ? 1 : 0);
  const missing = [];
  if (!hasEN) missing.push('EN');
  if (!hasVI) missing.push('VI');
  if (!hasJA) missing.push('JA');

  const section = key.split('/')[0];
  const docId = key.split('/').slice(1).join('/');

  if (count === 3) {
    matched.push({ key, section, docId });
  } else if (count === 2) {
    partial.push({ key, section, docId, missing: missing[0] });
  } else {
    const presentLang = hasEN ? 'en' : hasVI ? 'vi' : 'ja';
    orphan.push({ key, section, docId, presentIn: presentLang, missing });
  }
}

// ── Summary ──

console.log(`  Total unique docIds: ${allKeys.size}`);
console.log(`  Matched (3/3): ${matched.length} (${(matched.length/allKeys.size*100).toFixed(1)}%)`);
console.log(`  Partial (2/3): ${partial.length}`);
console.log(`  Orphan  (1/3): ${orphan.length}`);
console.log();

// ── Partial details by section ──

console.log('┌──────────────────────────────────────────────────────────────────────┐');
console.log('│  PARTIAL MATCHES (2 of 3 languages)                                  │');
console.log('└──────────────────────────────────────────────────────────────────────┘\n');

const partialBySection = {};
for (const p of partial) {
  if (!partialBySection[p.section]) partialBySection[p.section] = { missingEN: [], missingVI: [], missingJA: [] };
  partialBySection[p.section][`missing${p.missing}`].push(p.docId);
}

const partialSections = Object.entries(partialBySection).sort((a, b) => {
  const ta = a[1].missingEN.length + a[1].missingVI.length + a[1].missingJA.length;
  const tb = b[1].missingEN.length + b[1].missingVI.length + b[1].missingJA.length;
  return tb - ta;
});

console.log('Section'.padEnd(45) + 'No EN'.padStart(6) + 'No VI'.padStart(6) + 'No JA'.padStart(6));
console.log('─'.repeat(63));
for (const [sec, data] of partialSections) {
  const total = data.missingEN.length + data.missingVI.length + data.missingJA.length;
  if (total === 0) continue;
  console.log(sec.padEnd(45) + String(data.missingEN.length).padStart(6) + String(data.missingVI.length).padStart(6) + String(data.missingJA.length).padStart(6));
}

// ── Orphan details ──

console.log('\n┌──────────────────────────────────────────────────────────────────────┐');
console.log('│  ORPHANS (only 1 language)                                            │');
console.log('└──────────────────────────────────────────────────────────────────────┘\n');

const orphanBySection = {};
for (const o of orphan) {
  if (!orphanBySection[o.section]) orphanBySection[o.section] = [];
  orphanBySection[o.section].push(o);
}

for (const [sec, items] of Object.entries(orphanBySection).sort((a, b) => b[1].length - a[1].length).slice(0, 15)) {
  console.log(`  [${sec}] ${items.length} orphans:`);
  for (const item of items.slice(0, 5)) {
    console.log(`    ${item.presentIn.toUpperCase()} only: ${item.docId}`);
  }
  if (items.length > 5) console.log(`    ... +${items.length - 5} more`);
}

// ── Sidebar structure comparison ──

console.log('\n┌──────────────────────────────────────────────────────────────────────┐');
console.log('│  SIDEBAR STRUCTURE COMPARISON                                         │');
console.log('└──────────────────────────────────────────────────────────────────────┘\n');

// Compare L1 > L2 category structure
const sidebarData = {};
for (const [lang, file] of Object.entries(SIDEBAR_FILES)) {
  delete require.cache[require.resolve(file)];
  const s = require(file);
  sidebarData[lang] = collectSidebarTree(s.tutorialSidebar, '');
}

// Count docs per L1 category
for (const [lang, tree] of Object.entries(sidebarData)) {
  const l1Cats = tree.filter(n => n.type === 'category' && !n.path);
  // Already printed above
}

// ── File count comparison per section ──

console.log('Section'.padEnd(45) + 'EN'.padStart(5) + 'VI'.padStart(5) + 'JA'.padStart(5) + ' Match');
console.log('─'.repeat(65));

const allSections = new Set();
for (const lang of ['en', 'vi', 'ja']) {
  for (const key of Object.keys(indexes[lang])) {
    allSections.add(key.split('/')[0]);
  }
}

let matchedSections = 0;
for (const sec of [...allSections].sort()) {
  const en = Object.keys(indexes.en).filter(k => k.split('/')[0] === sec).length;
  const vi = Object.keys(indexes.vi).filter(k => k.split('/')[0] === sec).length;
  const ja = Object.keys(indexes.ja).filter(k => k.split('/')[0] === sec).length;
  const isMatch = en === vi && vi === ja;
  if (isMatch) matchedSections++;
  if (!isMatch) {
    console.log(sec.padEnd(45) + String(en).padStart(5) + String(vi).padStart(5) + String(ja).padStart(5) + (isMatch ? '  ✅' : '  ❌'));
  }
}
console.log('─'.repeat(65));
console.log(`Matched sections: ${matchedSections}/${allSections.size}`);

// ── CSV Export ──

const csvRows = ['status,section,docId,in_en,in_vi,in_ja,en_title,vi_title,ja_title'];
for (const key of [...allKeys].sort()) {
  const en = indexes.en[key];
  const vi = indexes.vi[key];
  const ja = indexes.ja[key];
  const count = (en ? 1 : 0) + (vi ? 1 : 0) + (ja ? 1 : 0);
  const status = count === 3 ? 'MATCHED' : count === 2 ? 'PARTIAL' : 'ORPHAN';
  const section = key.split('/')[0];
  const docId = key.split('/').slice(1).join('/');
  csvRows.push(`${status},${section},"${docId}",${en?'Y':'N'},${vi?'Y':'N'},${ja?'Y':'N'},"${(en?.title||'').replace(/"/g,"'")}","${(vi?.title||'').replace(/"/g,"'")}","${(ja?.title||'').replace(/"/g,"'")}"`);
}

fs.writeFileSync(path.join(ROOT, 'menu-mapping-report.csv'), csvRows.join('\n'));

console.log(`\n  CSV: menu-mapping-report.csv (${csvRows.length - 1} rows)`);

// Final summary
console.log('\n╔══════════════════════════════════════════════════════════════════════╗');
console.log('║  FINAL SUMMARY                                                       ║');
console.log('╚══════════════════════════════════════════════════════════════════════╝');
console.log(`  Matched 1:1:1 (all 3 langs): ${matched.length}/${allKeys.size} (${(matched.length/allKeys.size*100).toFixed(1)}%)`);
console.log(`  Partial (missing 1 lang):     ${partial.length}`);
console.log(`    - Missing EN: ${partial.filter(p=>p.missing==='EN').length}`);
console.log(`    - Missing VI: ${partial.filter(p=>p.missing==='VI').length}`);
console.log(`    - Missing JA: ${partial.filter(p=>p.missing==='JA').length}`);
console.log(`  Orphan (1 lang only):         ${orphan.length}`);
console.log(`  Sections matched:             ${matchedSections}/${allSections.size}`);
