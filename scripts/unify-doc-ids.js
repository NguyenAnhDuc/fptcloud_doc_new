#!/usr/bin/env node
/**
 * Unify frontmatter doc IDs across languages.
 *
 * Strategy:
 * 1. For each section, compare files across EN/VI/JA by content (shared images + headings)
 * 2. When content matches, standardize the frontmatter `id` to EN's ID
 * 3. Update sidebar references accordingly
 *
 * Uses migration-report.json contentMatched pairs + fresh image/heading comparison.
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
const REVERSE_ALIASES = { 'tagging': 'タグ-付け' };

function resolveSection(s) { return SECTION_ALIASES[s] || s; }

// ── Content comparison ──

function extractImages(content) {
  const imgs = [];
  const re = /!\[.*?\]\((.*?)\)/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    imgs.push(path.basename(m[1]));
  }
  return imgs;
}

function extractHeadings(content) {
  const headings = [];
  const re = /^#{1,6}\s+(.+)$/gm;
  let m;
  while ((m = re.exec(content)) !== null) {
    headings.push(m[1].trim());
  }
  return headings;
}

function contentSimilarity(contentA, contentB) {
  const imgsA = extractImages(contentA);
  const imgsB = extractImages(contentB);
  const shared = imgsA.filter(i => imgsB.includes(i));
  const imgScore = (imgsA.length + imgsB.length) > 0
    ? (shared.length * 2) / (imgsA.length + imgsB.length) : 0;

  const hdA = extractHeadings(contentA);
  const hdB = extractHeadings(contentB);
  const sharedHd = hdA.filter(h => hdB.includes(h));
  const hdScore = (hdA.length + hdB.length) > 0
    ? (sharedHd.length * 2) / (hdA.length + hdB.length) : 0;

  const sizeRatio = Math.min(contentA.length, contentB.length) / Math.max(contentA.length, contentB.length);

  return { imgScore, hdScore, sizeRatio, sharedImgs: shared.length };
}

// ── File parsing ──

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { fm: {}, body: content, raw: '' };
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
  return { fm, body: content.slice(match[0].length), raw: match[0] };
}

function getAllDocs(docsDir) {
  const docs = {};
  function walk(dir, prefix) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.name.startsWith('.')) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(full, prefix ? `${prefix}/${entry.name}` : entry.name);
        } else if (entry.name.endsWith('.md')) {
          const section = prefix || '';
          const normSection = resolveSection(section);
          const content = fs.readFileSync(full, 'utf-8');
          const { fm, body } = parseFrontmatter(content);
          const fileName = entry.name.replace(/\.md$/, '');
          if (!docs[normSection]) docs[normSection] = [];
          docs[normSection].push({
            filePath: full,
            fileName,
            section, // original section name
            normSection,
            docId: fm.id || fileName,
            content,
            body,
            fm,
          });
        }
      }
    } catch {}
  }
  walk(docsDir, '');
  return docs;
}

// ── Main ──

console.log('Loading docs...');
const allDocs = {
  en: getAllDocs(DOC_DIRS.en),
  vi: getAllDocs(DOC_DIRS.vi),
  ja: getAllDocs(DOC_DIRS.ja),
};

// For each section, match files across languages
const allSections = new Set([
  ...Object.keys(allDocs.en),
  ...Object.keys(allDocs.vi),
  ...Object.keys(allDocs.ja),
]);

let totalUnified = 0;
let totalSkipped = 0;
const changes = []; // { lang, filePath, oldId, newId }

for (const section of allSections) {
  const enDocs = allDocs.en[section] || [];
  const viDocs = allDocs.vi[section] || [];
  const jaDocs = allDocs.ja[section] || [];

  // Already matched by docId — skip
  const enIds = new Set(enDocs.map(d => d.docId));

  // Match VI docs to EN by content
  for (const viDoc of viDocs) {
    if (enIds.has(viDoc.docId)) continue; // Already same ID

    // Find best EN match by content
    let bestMatch = null;
    let bestScore = 0;

    for (const enDoc of enDocs) {
      if (enDoc.docId === viDoc.docId) continue; // Already matched
      const sim = contentSimilarity(enDoc.body, viDoc.body);
      const score = sim.imgScore * 0.6 + sim.hdScore * 0.3 + sim.sizeRatio * 0.1;
      if (score > bestScore && score > 0.4) {
        bestScore = score;
        bestMatch = enDoc;
      }
    }

    if (bestMatch) {
      changes.push({
        lang: 'vi',
        filePath: viDoc.filePath,
        oldId: viDoc.docId,
        newId: bestMatch.docId,
        score: bestScore,
        section,
      });
    }
  }

  // Match JA docs to EN by content
  for (const jaDoc of jaDocs) {
    if (enIds.has(jaDoc.docId)) continue;

    let bestMatch = null;
    let bestScore = 0;

    for (const enDoc of enDocs) {
      if (enDoc.docId === jaDoc.docId) continue;
      const sim = contentSimilarity(enDoc.body, jaDoc.body);
      const score = sim.imgScore * 0.6 + sim.hdScore * 0.3 + sim.sizeRatio * 0.1;
      if (score > bestScore && score > 0.4) {
        bestScore = score;
        bestMatch = enDoc;
      }
    }

    if (bestMatch) {
      changes.push({
        lang: 'ja',
        filePath: jaDoc.filePath,
        oldId: jaDoc.docId,
        newId: bestMatch.docId,
        score: bestScore,
        section,
      });
    }
  }

  // Also match JA to VI for cases where EN doesn't have the doc
  const viIds = new Set(viDocs.map(d => d.docId));
  for (const jaDoc of jaDocs) {
    if (enIds.has(jaDoc.docId) || viIds.has(jaDoc.docId)) continue;
    // Check if already planned for change
    if (changes.find(c => c.filePath === jaDoc.filePath)) continue;

    let bestMatch = null;
    let bestScore = 0;

    for (const viDoc of viDocs) {
      if (viDoc.docId === jaDoc.docId) continue;
      const sim = contentSimilarity(viDoc.body, jaDoc.body);
      const score = sim.imgScore * 0.6 + sim.hdScore * 0.3 + sim.sizeRatio * 0.1;
      if (score > bestScore && score > 0.4) {
        bestScore = score;
        bestMatch = viDoc;
      }
    }

    if (bestMatch) {
      changes.push({
        lang: 'ja',
        filePath: jaDoc.filePath,
        oldId: jaDoc.docId,
        newId: bestMatch.docId,
        score: bestScore,
        section,
      });
    }
  }
}

// Deduplicate: don't change if newId would conflict with existing file in same section
const usedIds = {};
for (const lang of ['en', 'vi', 'ja']) {
  usedIds[lang] = {};
  for (const [section, docs] of Object.entries(allDocs[lang])) {
    usedIds[lang][section] = new Set(docs.map(d => d.docId));
  }
}

const safeChanges = changes.filter(c => {
  // Don't create duplicate IDs
  const existing = usedIds[c.lang][c.section];
  if (existing && existing.has(c.newId)) {
    return false; // Would create duplicate
  }
  return true;
});

console.log(`\nContent matches found: ${changes.length}`);
console.log(`Safe to apply (no conflicts): ${safeChanges.length}`);
console.log(`Skipped (would create duplicates): ${changes.length - safeChanges.length}`);

// Preview top changes
console.log(`\nSample changes:`);
for (const c of safeChanges.slice(0, 15)) {
  console.log(`  [${c.lang.toUpperCase()}] ${c.section}: "${c.oldId}" → "${c.newId}" (${(c.score*100).toFixed(0)}%)`);
}
if (safeChanges.length > 15) console.log(`  ... and ${safeChanges.length - 15} more`);

// Apply changes
console.log(`\nApplying ${safeChanges.length} ID changes...`);

let applied = 0;
const sidebarUpdates = {}; // { lang: { oldDocId: newDocId } }

for (const c of safeChanges) {
  const content = fs.readFileSync(c.filePath, 'utf-8');
  // Replace id in frontmatter
  const oldPattern = new RegExp(`^id:\\s*["']?${c.oldId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']?\\s*$`, 'm');
  if (!oldPattern.test(content)) continue;

  const newContent = content.replace(oldPattern, `id: "${c.newId}"`);
  if (newContent === content) continue;

  fs.writeFileSync(c.filePath, newContent);
  applied++;

  // Track sidebar update needed
  if (!sidebarUpdates[c.lang]) sidebarUpdates[c.lang] = {};
  const oldSidebarId = c.section ? `${c.section === c.normSection ? c.section : (allDocs[c.lang][c.normSection]?.[0]?.section || c.section)}/${c.oldId}` : c.oldId;
  const newSidebarId = c.section ? `${c.section === c.normSection ? c.section : (allDocs[c.lang][c.normSection]?.[0]?.section || c.section)}/${c.newId}` : c.newId;
  sidebarUpdates[c.lang][oldSidebarId] = newSidebarId;
}

console.log(`Applied: ${applied} files updated`);

// Update sidebars
const SIDEBAR_FILES = {
  en: path.join(ROOT, 'sidebars.js'),
  vi: path.join(ROOT, 'sidebars-vi.js'),
  ja: path.join(ROOT, 'sidebars-ja.js'),
};

for (const [lang, updates] of Object.entries(sidebarUpdates)) {
  if (Object.keys(updates).length === 0) continue;
  const sidebarPath = SIDEBAR_FILES[lang];
  let sidebar = fs.readFileSync(sidebarPath, 'utf-8');
  let count = 0;
  for (const [oldId, newId] of Object.entries(updates)) {
    const escaped = oldId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`"${escaped}"`, 'g');
    const matches = sidebar.match(re);
    if (matches) {
      sidebar = sidebar.replace(re, `"${newId}"`);
      count += matches.length;
    }
  }
  fs.writeFileSync(sidebarPath, sidebar);
  console.log(`Sidebar [${lang.toUpperCase()}]: ${count} references updated`);
}

console.log('\nDone!');
