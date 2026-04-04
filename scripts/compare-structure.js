#!/usr/bin/env node
/**
 * Compare crawled menu hierarchy with current sidebar hierarchy.
 * Focus on:
 * 1. Category structure: L1 > L2 matching
 * 2. Items under wrong category
 * 3. Missing vs extra modules
 * 4. Wrong-language items in sidebar
 */

const fs = require('fs');
const path = require('path');
const crawled = JSON.parse(fs.readFileSync(path.join(__dirname, 'menu-tree.json'), 'utf-8'));
const sidebarVI = require('../sidebars-vi.js');

// ── Helpers ─────────────────────────────────────────────────────────

function normalize(str) {
  if (!str) return '';
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

const hasJA = s => /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(s);
const hasVI = s => /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(s);

// ── Extract crawled structure ───────────────────────────────────────

function extractCrawledStructure() {
  const structure = []; // { l1, l2, l3Categories[], docSlugs[] }
  for (const cat of crawled.menu) {
    for (const l2 of (cat.children || [])) {
      const entry = { l1: cat.label, l2: l2.label, url: l2.url, l3Categories: [], docSlugs: [] };
      for (const l3 of (l2.children || [])) {
        if (!l3.url && l3.children && l3.children.length > 0) {
          entry.l3Categories.push({ label: l3.label, count: l3.children.length });
        }
        // Collect all doc slugs recursively
        (function collect(items) {
          for (const i of items) {
            if (i.url) { try { const d = new URL(i.url).searchParams.get('doc'); if (d) entry.docSlugs.push(d); } catch(e){} }
            collect(i.children || []);
          }
        })(l3.url ? [l3] : (l3.children || []));
      }
      structure.push(entry);
    }
  }
  return structure;
}

// ── Extract sidebar structure ───────────────────────────────────────

function extractSidebarStructure() {
  const structure = []; // { l1, l2, l3Categories[], docIds[], wrongLang[] }

  function walkL2(item, l1Label) {
    if (!item.label || !item.items) return;
    const entry = { l1: l1Label, l2: item.label, l3Categories: [], docIds: [], wrongLang: [] };

    function collectDocs(subItem, catLabel) {
      if (typeof subItem === 'string') {
        entry.docIds.push({ id: subItem, slug: subItem.split('/').pop(), cat: catLabel });
        return;
      }
      if (subItem.type === 'doc' && subItem.id) {
        const label = subItem.label || '';
        entry.docIds.push({ id: subItem.id, slug: subItem.id.split('/').pop(), label, cat: catLabel });
        // Check wrong language
        if (hasJA(label)) entry.wrongLang.push({ id: subItem.id, label, issue: 'Japanese in VI sidebar' });
        if (!hasVI(label) && !hasJA(label) && label.length > 3 && !/^[A-Z]/.test(label)) {
          // Could be English - only flag if it looks like a full English phrase
        }
        return;
      }
      if (subItem.label && subItem.items) {
        entry.l3Categories.push({ label: subItem.label, count: subItem.items.length });
        if (hasJA(subItem.label)) entry.wrongLang.push({ label: subItem.label, issue: 'JA category label in VI' });
        subItem.items.forEach(i => collectDocs(i, subItem.label));
        return;
      }
      if (Array.isArray(subItem)) subItem.forEach(i => collectDocs(i, catLabel));
    }

    item.items.forEach(i => collectDocs(i, item.label));
    structure.push(entry);
  }

  // Walk top-level categories (L1)
  function walkL1(item) {
    if (!item.label || !item.items) return;
    // This is L1 — its children are L2
    for (const child of item.items) {
      if (child.label && child.items) {
        walkL2(child, item.label);
      }
    }
  }

  const root = sidebarVI.tutorialSidebar;
  if (Array.isArray(root)) {
    for (const item of root) {
      if (typeof item === 'string') continue;
      if (item.label && item.items) walkL1(item);
    }
  }

  return structure;
}

// ── Compare ─────────────────────────────────────────────────────────

function main() {
  const crawledStruct = extractCrawledStructure();
  const sidebarStruct = extractSidebarStructure();

  console.log('╔══════════════════════════════════════════════════════════════════╗');
  console.log('║   MENU STRUCTURE COMPARISON (Crawled vs Sidebar-VI)            ║');
  console.log('╚══════════════════════════════════════════════════════════════════╝\n');

  // 1. Compare L1 categories
  const crawledL1s = [...new Set(crawledStruct.map(s => s.l1))];
  const sidebarL1s = [...new Set(sidebarStruct.map(s => s.l1))];

  console.log('=== L1 CATEGORIES ===\n');
  console.log('  Crawled:', crawledL1s.length, '→', crawledL1s.join(', '));
  console.log('  Sidebar:', sidebarL1s.length, '→', sidebarL1s.join(', '));

  const extraL1 = sidebarL1s.filter(s => !crawledL1s.some(c => normalize(c) === normalize(s)));
  const missingL1 = crawledL1s.filter(c => !sidebarL1s.some(s => normalize(c) === normalize(s)));
  if (extraL1.length) console.log('\n  Extra L1 in sidebar (not in crawled):', extraL1.join(', '));
  if (missingL1.length) console.log('\n  Missing L1 from sidebar:', missingL1.join(', '));

  // 2. Compare L2 modules per L1
  console.log('\n\n=== L2 MODULES PER CATEGORY ===\n');

  for (const l1 of crawledL1s) {
    const crawledL2s = crawledStruct.filter(s => s.l1 === l1).map(s => s.l2);
    const matchedL1 = sidebarL1s.find(s => normalize(s) === normalize(l1)) || l1;
    const sidebarL2s = sidebarStruct.filter(s => s.l1 === matchedL1).map(s => s.l2);

    const matchedL2 = [];
    const missingL2 = [];
    const extraL2 = [...sidebarL2s];

    for (const cl2 of crawledL2s) {
      const idx = extraL2.findIndex(s => normalize(s) === normalize(cl2) ||
        normalize(s).includes(normalize(cl2)) || normalize(cl2).includes(normalize(s)));
      if (idx >= 0) {
        matchedL2.push({ crawled: cl2, sidebar: extraL2[idx] });
        extraL2.splice(idx, 1);
      } else {
        missingL2.push(cl2);
      }
    }

    console.log(`  [${l1}]`);
    console.log(`    Crawled: ${crawledL2s.length} modules → ${crawledL2s.join(', ')}`);
    console.log(`    Sidebar: ${sidebarL2s.length} modules → ${sidebarL2s.join(', ')}`);
    if (matchedL2.length) console.log(`    Matched: ${matchedL2.length}`);
    if (missingL2.length) console.log(`    MISSING from sidebar: ${missingL2.join(', ')}`);
    if (extraL2.length) console.log(`    EXTRA in sidebar: ${extraL2.join(', ')}`);
    console.log();
  }

  // Show extra L1s and their L2s
  for (const l1 of extraL1) {
    const l2s = sidebarStruct.filter(s => s.l1 === l1).map(s => s.l2);
    console.log(`  [${l1}] (EXTRA - not in crawled menu)`);
    console.log(`    Modules: ${l2s.join(', ')}`);
    console.log();
  }

  // 3. Per-module doc count comparison
  console.log('\n=== DOC COUNT PER MODULE (Crawled vs Sidebar) ===\n');
  console.log('  ' + 'Module'.padEnd(45) + 'Crawled'.padEnd(10) + 'Sidebar'.padEnd(10) + 'Diff');
  console.log('  ' + '-'.repeat(75));

  for (const cs of crawledStruct) {
    // Find matching sidebar module
    const match = sidebarStruct.find(ss =>
      normalize(ss.l2) === normalize(cs.l2) ||
      normalize(ss.l2).includes(normalize(cs.l2)) ||
      normalize(cs.l2).includes(normalize(ss.l2))
    );

    const crawledCount = cs.docSlugs.length;
    const sidebarCount = match ? match.docIds.length : 0;
    const diff = sidebarCount - crawledCount;
    const diffStr = diff > 0 ? `+${diff}` : diff === 0 ? '=' : String(diff);
    const flag = !match ? ' ⚠ NOT FOUND' : Math.abs(diff) > 10 ? ' ⚠' : '';

    console.log(`  ${(cs.l1 + ' > ' + cs.l2).padEnd(45)} ${String(crawledCount).padEnd(10)} ${String(sidebarCount).padEnd(10)} ${diffStr}${flag}`);
  }

  // 4. Wrong language items in sidebar
  console.log('\n\n=== WRONG LANGUAGE IN SIDEBAR-VI ===\n');
  let totalWrongLang = 0;
  for (const ss of sidebarStruct) {
    if (ss.wrongLang.length > 0) {
      console.log(`  [${ss.l1} > ${ss.l2}] (${ss.wrongLang.length} issues):`);
      for (const w of ss.wrongLang.slice(0, 5)) {
        console.log(`    - ${w.label || w.id} → ${w.issue}`);
      }
      if (ss.wrongLang.length > 5) console.log(`    ... +${ss.wrongLang.length - 5} more`);
      totalWrongLang += ss.wrongLang.length;
    }
  }
  if (totalWrongLang === 0) console.log('  No wrong language issues found.');
  else console.log(`\n  Total: ${totalWrongLang} wrong language items`);

  // 5. L3 category structure comparison
  console.log('\n\n=== L3 CATEGORY STRUCTURE (Crawled vs Sidebar) ===\n');
  for (const cs of crawledStruct) {
    if (cs.l3Categories.length === 0) continue;
    const match = sidebarStruct.find(ss =>
      normalize(ss.l2) === normalize(cs.l2) ||
      normalize(ss.l2).includes(normalize(cs.l2)) ||
      normalize(cs.l2).includes(normalize(ss.l2))
    );
    if (!match) continue;

    const crawledCats = cs.l3Categories.map(c => c.label);
    const sidebarCats = match.l3Categories.map(c => c.label);

    // Find extra categories in sidebar
    const extraCats = sidebarCats.filter(sc =>
      !crawledCats.some(cc => normalize(cc) === normalize(sc))
    );

    if (extraCats.length > 0) {
      console.log(`  [${cs.l2}]`);
      console.log(`    Crawled L3: ${crawledCats.join(' | ')}`);
      console.log(`    Extra in sidebar: ${extraCats.join(' | ')}`);
      console.log();
    }
  }

  console.log('\n══════════════════════════════════════════════════════════════════');
  console.log('Report complete.');
}

main();
