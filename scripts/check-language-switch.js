#!/usr/bin/env node
/**
 * Check language switching compatibility.
 *
 * When user switches from lang A to lang B, Docusaurus changes URL:
 *   /docs/A/{docId} → /docs/B/{docId}
 *
 * This fails (404) if lang B doesn't have a doc with the same ID.
 *
 * This script:
 * 1. Collects all doc IDs from each sidebar
 * 2. Finds IDs that exist in one language but not others
 * 3. Reports which pages will 404 on language switch
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

// ── Collect sidebar doc IDs ──

function collectDocIds(items) {
  const ids = new Set();
  for (const item of items) {
    if (typeof item === 'string') ids.add(item);
    if (item?.type === 'doc' && item.id) ids.add(item.id);
    if (item?.items) for (const id of collectDocIds(item.items)) ids.add(id);
  }
  return ids;
}

// ── Collect actual file-based doc IDs ──

function extractFrontmatterId(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;
    const idMatch = match[1].match(/^id\s*:\s*["']?(.+?)["']?\s*$/m);
    return idMatch ? idMatch[1] : null;
  } catch { return null; }
}

function collectFileDocIds(docsDir) {
  const ids = new Set();
  function walk(dir, prefix) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.name.startsWith('.')) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(full, prefix ? `${prefix}/${entry.name}` : entry.name);
        } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
          const ext = path.extname(entry.name);
          const baseName = entry.name.slice(0, -ext.length);
          const fileId = prefix ? `${prefix}/${baseName}` : baseName;
          ids.add(fileId);
          // Also add frontmatter-based ID
          const fmId = extractFrontmatterId(full);
          if (fmId) {
            const fmDocId = prefix ? `${prefix}/${fmId}` : fmId;
            ids.add(fmDocId);
          }
        }
      }
    } catch {}
  }
  walk(docsDir, '');
  return ids;
}

// ── Main ──

console.log('╔══════════════════════════════════════════════════════════════════╗');
console.log('║           LANGUAGE SWITCH COMPATIBILITY CHECK                    ║');
console.log('╚══════════════════════════════════════════════════════════════════╝\n');

// Collect all sidebar IDs and file IDs
const sidebarIds = {};
const fileIds = {};
for (const [lang, file] of Object.entries(SIDEBAR_FILES)) {
  delete require.cache[require.resolve(file)];
  const sidebar = require(file);
  sidebarIds[lang] = collectDocIds(sidebar.tutorialSidebar);
  fileIds[lang] = collectFileDocIds(DOC_DIRS[lang]);
}

console.log('  Sidebar doc counts: EN=' + sidebarIds.en.size + ', VI=' + sidebarIds.vi.size + ', JA=' + sidebarIds.ja.size);
console.log('  File doc counts:    EN=' + fileIds.en.size + ', VI=' + fileIds.vi.size + ', JA=' + fileIds.ja.size);
console.log();

// For each pair of languages, find doc IDs in sidebar A that don't exist as files in B
const langs = ['en', 'vi', 'ja'];
const langNames = { en: 'EN', vi: 'VI', ja: 'JA' };

let totalIssues = 0;

for (const from of langs) {
  for (const to of langs) {
    if (from === to) continue;

    const issues = [];
    for (const docId of sidebarIds[from]) {
      // Check if this docId exists as a file in the target language
      if (!fileIds[to].has(docId)) {
        issues.push(docId);
      }
    }

    if (issues.length > 0) {
      console.log(`┌─ ${langNames[from]} → ${langNames[to]}: ${issues.length} pages will 404 on switch`);

      // Group by directory
      const byDir = {};
      for (const id of issues) {
        const dir = id.split('/')[0] || '_root';
        if (!byDir[dir]) byDir[dir] = [];
        byDir[dir].push(id);
      }

      const dirs = Object.entries(byDir).sort((a, b) => b[1].length - a[1].length);
      for (const [dir, ids] of dirs.slice(0, 15)) {
        console.log(`│  ${dir}/ (${ids.length} pages)`);
        for (const id of ids.slice(0, 3)) {
          console.log(`│    - ${id}`);
        }
        if (ids.length > 3) console.log(`│    ... +${ids.length - 3} more`);
      }
      if (dirs.length > 15) console.log(`│  ... +${dirs.length - 15} more directories`);
      console.log('└');
      console.log();
      totalIssues += issues.length;
    } else {
      console.log(`  ${langNames[from]} → ${langNames[to]}: OK (all pages exist in target)`);
    }
  }
}

// Summary
console.log('┌──────────────────────────────────────────────────────────────────┐');
console.log('│  SUMMARY                                                         │');
console.log('└──────────────────────────────────────────────────────────────────┘\n');

// Matrix
console.log('  Switch compatibility matrix (404 count):');
console.log('  ' + ''.padEnd(8) + langs.map(l => langNames[l].padStart(8)).join(''));
for (const from of langs) {
  let row = '  ' + langNames[from].padEnd(8);
  for (const to of langs) {
    if (from === to) { row += '   -    '; continue; }
    let count = 0;
    for (const docId of sidebarIds[from]) {
      if (!fileIds[to].has(docId)) count++;
    }
    row += String(count).padStart(8);
  }
  console.log(row);
}

console.log(`\n  Total potential 404s: ${totalIssues}`);
if (totalIssues === 0) {
  console.log('  ALL CLEAR! Language switching will work for all pages.');
}
