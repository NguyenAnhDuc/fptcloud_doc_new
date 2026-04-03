#!/usr/bin/env node
/**
 * Cleanup JA duplicate files:
 * 1. Files in docs-ja/ that are exact copies from docs/ (cross-dir duplicates)
 * 2. Japanese-named files in docs-ja/ that have English-named equivalents
 *    in the same directory with matching content (internal duplicates)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const JA_DIR = path.join(ROOT, 'docs-ja');
const EN_DIR = path.join(ROOT, 'docs');

// Load sidebar to know which files are referenced
const sidebar = require(path.join(ROOT, 'sidebars-ja.js'));

function collectSidebarIds(items) {
  const ids = new Set();
  function walk(list) {
    if (!Array.isArray(list)) return;
    for (const item of list) {
      if (typeof item === 'string') ids.add(item);
      else if (item && typeof item === 'object') {
        if (item.type === 'doc' && item.id) ids.add(item.id);
        if (item.items) walk(item.items);
      }
    }
  }
  walk(items);
  return ids;
}

const sidebarIds = collectSidebarIds(sidebar.tutorialSidebar);

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

function getDocId(filePath, baseDir) {
  const rel = path.relative(baseDir, filePath);
  const ext = path.extname(rel);
  return rel.slice(0, -ext.length);
}

function contentSimilarity(fileA, fileB) {
  try {
    const a = fs.readFileSync(fileA, 'utf-8');
    const b = fs.readFileSync(fileB, 'utf-8');

    const imgsA = extractImages(a);
    const imgsB = extractImages(b);

    // Check shared images
    const sharedImgs = imgsA.filter(i => imgsB.includes(i));
    const imgScore = (imgsA.length + imgsB.length) > 0
      ? (sharedImgs.length * 2) / (imgsA.length + imgsB.length)
      : 0;

    // Check heading similarity
    const hdA = extractHeadings(a);
    const hdB = extractHeadings(b);
    const sharedHd = hdA.filter(h => hdB.includes(h));
    const hdScore = (hdA.length + hdB.length) > 0
      ? (sharedHd.length * 2) / (hdA.length + hdB.length)
      : 0;

    // Size similarity
    const sizeRatio = Math.min(a.length, b.length) / Math.max(a.length, b.length);

    return { imgScore, hdScore, sizeRatio, sharedImgs: sharedImgs.length };
  } catch {
    return { imgScore: 0, hdScore: 0, sizeRatio: 0, sharedImgs: 0 };
  }
}

function getAllMdFiles(dir) {
  const results = [];
  function walk(d) {
    try {
      const entries = fs.readdirSync(d, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.name.startsWith('.')) continue;
        const full = path.join(d, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
          results.push(full);
        }
      }
    } catch {}
  }
  walk(dir);
  return results;
}

// ── Part 1: Cross-directory duplicates ──
// Files in docs-ja/ that have exact same filename in docs/ (should not exist in JA)
console.log('=== Part 1: Cross-directory duplicates (docs-ja/ ↔ docs/) ===\n');

const jaFiles = getAllMdFiles(JA_DIR);
const crossDupes = [];

for (const jaFile of jaFiles) {
  const rel = path.relative(JA_DIR, jaFile);
  const enFile = path.join(EN_DIR, rel);

  if (fs.existsSync(enFile)) {
    // Check if content is very similar (same images/headings)
    const sim = contentSimilarity(jaFile, enFile);
    if (sim.imgScore > 0.5 || sim.hdScore > 0.5 || sim.sizeRatio > 0.8) {
      const docId = getDocId(jaFile, JA_DIR);
      const inSidebar = sidebarIds.has(docId);
      if (!inSidebar) {
        crossDupes.push({ jaFile, rel, sim });
      }
    }
  }
}

console.log(`Found ${crossDupes.length} cross-directory duplicates (not in sidebar)\n`);

// ── Part 2: Internal duplicates (Japanese-named vs English-named in same dir) ──
console.log('=== Part 2: Internal duplicates (Japanese vs English names in docs-ja/) ===\n');

// Group files by directory
const byDir = {};
for (const f of jaFiles) {
  const dir = path.dirname(f);
  if (!byDir[dir]) byDir[dir] = [];
  byDir[dir].push(f);
}

const internalDupes = [];

for (const [dir, files] of Object.entries(byDir)) {
  if (files.length < 2) continue;

  // Separate sidebar-referenced vs orphaned files
  const inSidebar = [];
  const orphaned = [];

  for (const f of files) {
    const docId = getDocId(f, JA_DIR);
    if (sidebarIds.has(docId)) {
      inSidebar.push(f);
    } else {
      orphaned.push(f);
    }
  }

  // For each orphaned file, check if it matches any sidebar file
  for (const orphanFile of orphaned) {
    let bestMatch = null;
    let bestScore = 0;

    for (const sidebarFile of inSidebar) {
      const sim = contentSimilarity(orphanFile, sidebarFile);
      const score = sim.imgScore * 0.5 + sim.hdScore * 0.3 + sim.sizeRatio * 0.2;
      if (score > bestScore) {
        bestScore = score;
        bestMatch = { file: sidebarFile, sim, score };
      }
    }

    if (bestMatch && bestScore > 0.3) {
      internalDupes.push({
        orphanFile,
        matchFile: bestMatch.file,
        score: bestScore,
        sim: bestMatch.sim,
      });
    }
  }
}

console.log(`Found ${internalDupes.length} internal duplicates\n`);

// ── Delete duplicates ──
console.log('=== Deleting duplicates ===\n');

let deleted = 0;

for (const d of crossDupes) {
  console.log(`  DEL (cross): ${d.rel}`);
  fs.unlinkSync(d.jaFile);
  deleted++;
}

for (const d of internalDupes) {
  if (!fs.existsSync(d.orphanFile)) continue;
  const rel = path.relative(JA_DIR, d.orphanFile);
  const matchRel = path.relative(JA_DIR, d.matchFile);
  console.log(`  DEL (internal): ${rel}  ~  ${matchRel} (score: ${d.score.toFixed(2)})`);
  fs.unlinkSync(d.orphanFile);
  deleted++;
}

console.log(`\n=== Deleted ${deleted} duplicate files ===`);
