#!/usr/bin/env node
/**
 * Find and remove duplicate translation files.
 *
 * When create-missing-translations.js created new files, it may have
 * created files that duplicate existing content (same images/headings
 * but different docId). This script finds and removes them.
 *
 * Strategy: For each section in each lang, find files with >60% content
 * similarity. If one was recently created (by the translation script)
 * and the other existed before, remove the new one.
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

function extractImages(content) {
  const imgs = [];
  const re = /!\[.*?\]\((.*?)\)/g;
  let m;
  while ((m = re.exec(content)) !== null) imgs.push(path.basename(m[1]));
  return imgs;
}

function extractHeadings(content) {
  const hds = [];
  const re = /^#{1,6}\s+(.+)$/gm;
  let m;
  while ((m = re.exec(content)) !== null) hds.push(m[1].trim());
  return hds;
}

function similarity(bodyA, bodyB) {
  const imgsA = extractImages(bodyA), imgsB = extractImages(bodyB);
  const shared = imgsA.filter(i => imgsB.includes(i));
  const imgScore = (imgsA.length + imgsB.length) > 0
    ? (shared.length * 2) / (imgsA.length + imgsB.length) : 0;
  const hdA = extractHeadings(bodyA), hdB = extractHeadings(bodyB);
  const sharedHd = hdA.filter(h => hdB.includes(h));
  const hdScore = (hdA.length + hdB.length) > 0
    ? (sharedHd.length * 2) / (hdA.length + hdB.length) : 0;
  const sizeRatio = Math.min(bodyA.length, bodyB.length) / Math.max(bodyA.length, bodyB.length);
  return imgScore * 0.5 + hdScore * 0.3 + sizeRatio * 0.2;
}

function parseParts(content) {
  const match = content.match(/^(---\n[\s\S]*?\n---)\n?([\s\S]*)$/);
  if (!match) return { fm: '', body: content.trim() };
  return { fm: match[1], body: match[2].trim() };
}

function parseFmObj(content) {
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

// Load sidebar doc IDs to know which files are "original"
function loadSidebarIds(sidebarFile) {
  delete require.cache[require.resolve(sidebarFile)];
  const sidebar = require(sidebarFile);
  const ids = new Set();
  function walk(items) {
    for (const item of items) {
      if (item.type === 'doc' && item.id) ids.add(item.id);
      if (item.items) walk(item.items);
    }
  }
  walk(sidebar.tutorialSidebar);
  return ids;
}

// ── Main ──

let totalDeleted = 0;

for (const [lang, docsDir] of Object.entries(DOC_DIRS)) {
  console.log(`\n[${lang.toUpperCase()}] Scanning for duplicates...`);

  // Group files by section
  const bySec = {};
  function walk(dir, prefix) {
    try {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith('.')) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full, prefix ? `${prefix}/${entry.name}` : entry.name);
        else if (entry.name.endsWith('.md')) {
          const sec = resolveSection(prefix || '_root');
          const content = fs.readFileSync(full, 'utf-8');
          const fm = parseFmObj(content);
          const parts = parseParts(content);
          if (!bySec[sec]) bySec[sec] = [];
          bySec[sec].push({
            filePath: full,
            fileName: entry.name,
            docId: fm.id || entry.name.replace(/\.md$/, ''),
            body: parts.body,
            bytes: parts.body.length,
            section: prefix || '',
          });
        }
      }
    } catch {}
  }
  walk(docsDir, '');

  // For each section, find duplicate pairs
  for (const [sec, docs] of Object.entries(bySec)) {
    if (docs.length < 2) continue;

    const toDelete = new Set();

    for (let i = 0; i < docs.length; i++) {
      if (toDelete.has(docs[i].filePath)) continue;
      for (let j = i + 1; j < docs.length; j++) {
        if (toDelete.has(docs[j].filePath)) continue;
        if (docs[i].docId === docs[j].docId) continue; // Same ID = same file via different means

        const sim = similarity(docs[i].body, docs[j].body);
        if (sim > 0.6) {
          // Found duplicate pair — keep the one with the "simpler" filename (likely original)
          // Heuristic: files with spaces or uppercase in name are likely from EN originals
          // Files matching their docId are "newer" created files
          const iIsNewer = docs[i].fileName === docs[i].docId + '.md';
          const jIsNewer = docs[j].fileName === docs[j].docId + '.md';

          let deleteTarget;
          if (iIsNewer && !jIsNewer) {
            deleteTarget = docs[i];
          } else if (jIsNewer && !iIsNewer) {
            deleteTarget = docs[j];
          } else {
            // Both same pattern — delete the smaller one
            deleteTarget = docs[i].bytes <= docs[j].bytes ? docs[i] : docs[j];
          }

          toDelete.add(deleteTarget.filePath);
          const kept = deleteTarget === docs[i] ? docs[j] : docs[i];
          console.log(`  DEL: ${path.relative(docsDir, deleteTarget.filePath)} (${(sim*100).toFixed(0)}% dup of ${path.relative(docsDir, kept.filePath)})`);
        }
      }
    }

    for (const fp of toDelete) {
      fs.unlinkSync(fp);
      totalDeleted++;
    }
  }
}

console.log(`\nTotal deleted: ${totalDeleted} duplicate files`);
