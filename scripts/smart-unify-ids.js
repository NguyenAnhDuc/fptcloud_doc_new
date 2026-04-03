#!/usr/bin/env node
/**
 * Smart unify doc IDs with content quality check.
 *
 * For each matched pair:
 * 1. Compare content size across languages
 * 2. If target lang has <50% content of source → copy source content (keep target frontmatter)
 * 3. Then unify frontmatter ID
 * 4. Update sidebar references
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
  const sharedImgs = imgsA.filter(i => imgsB.includes(i));
  const imgScore = (imgsA.length + imgsB.length) > 0
    ? (sharedImgs.length * 2) / (imgsA.length + imgsB.length) : 0;
  const hdA = extractHeadings(bodyA), hdB = extractHeadings(bodyB);
  const sharedHd = hdA.filter(h => hdB.includes(h));
  const hdScore = (hdA.length + hdB.length) > 0
    ? (sharedHd.length * 2) / (hdA.length + hdB.length) : 0;
  const sizeRatio = Math.min(bodyA.length, bodyB.length) / Math.max(bodyA.length, bodyB.length);
  return { score: imgScore * 0.5 + hdScore * 0.3 + sizeRatio * 0.2, sharedImgs: sharedImgs.length };
}

function parseParts(content) {
  const match = content.match(/^(---\n[\s\S]*?\n---)\n?([\s\S]*)$/);
  if (!match) return { frontmatter: '', body: content.trim(), raw: content };
  return { frontmatter: match[1], body: match[2].trim(), raw: content };
}

function parseFm(content) {
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

function getAllDocs(docsDir, lang) {
  const docs = [];
  function walk(dir, prefix) {
    try {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith('.')) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full, prefix ? `${prefix}/${entry.name}` : entry.name);
        else if (entry.name.endsWith('.md')) {
          const content = fs.readFileSync(full, 'utf-8');
          const fm = parseFm(content);
          const parts = parseParts(content);
          docs.push({
            lang, filePath: full,
            section: prefix || '_root',
            normSection: resolveSection(prefix || '_root'),
            docId: fm.id || entry.name.replace(/\.md$/, ''),
            title: fm.title || '',
            frontmatter: parts.frontmatter,
            body: parts.body,
            bytes: Buffer.byteLength(parts.body, 'utf-8'),
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
const allDocs = {};
for (const [lang, dir] of Object.entries(DOC_DIRS)) allDocs[lang] = getAllDocs(dir, lang);

// Build index
const idIndex = {};
for (const [lang, docs] of Object.entries(allDocs)) {
  for (const doc of docs) {
    const key = `${doc.normSection}/${doc.docId}`;
    if (!idIndex[key]) idIndex[key] = {};
    idIndex[key][lang] = doc;
  }
}

// Find unmatched & match across languages
const actions = []; // { type, sourceLang, sourceDoc, targetLang, targetDoc, matchDoc, score }

for (const [key, langs] of Object.entries(idIndex)) {
  if (Object.keys(langs).length >= 3) continue;

  const present = Object.entries(langs);
  const missing = ['en', 'vi', 'ja'].filter(l => !langs[l]);
  if (missing.length === 0) continue;

  // For each present doc, find best match in missing language
  for (const [srcLang, srcDoc] of present) {
    for (const missingLang of missing) {
      const candidates = allDocs[missingLang].filter(d => d.normSection === srcDoc.normSection);
      let best = null, bestScore = 0;

      for (const cand of candidates) {
        const candKey = `${cand.normSection}/${cand.docId}`;
        if (idIndex[candKey] && Object.keys(idIndex[candKey]).length >= 3) continue;
        const sim = similarity(srcDoc.body, cand.body);
        if (sim.score > bestScore && sim.score > 0.4) {
          bestScore = sim.score;
          best = { doc: cand, score: sim.score, sharedImgs: sim.sharedImgs };
        }
      }

      if (best) {
        // Compare content quality
        const srcBytes = srcDoc.bytes;
        const tgtBytes = best.doc.bytes;
        const contentRatio = tgtBytes / Math.max(srcBytes, 1);

        actions.push({
          section: srcDoc.normSection,
          sourceDocId: srcDoc.docId,
          sourceLang: srcLang,
          sourceBytes: srcBytes,
          targetDocId: best.doc.docId,
          targetLang: missingLang,
          targetBytes: tgtBytes,
          targetFilePath: best.doc.filePath,
          targetFrontmatter: best.doc.frontmatter,
          sourceBody: srcDoc.body,
          targetBody: best.doc.body,
          score: best.score,
          contentRatio,
          needsContentUpdate: contentRatio < 0.5,
        });
      }
    }
  }
}

// Deduplicate: for each target file, keep only the best match
const bestPerTarget = {};
for (const a of actions) {
  const tKey = a.targetFilePath;
  if (!bestPerTarget[tKey] || a.score > bestPerTarget[tKey].score) {
    bestPerTarget[tKey] = a;
  }
}
const dedupedActions = Object.values(bestPerTarget);

// ── Report & Apply ──

console.log(`\nMatched pairs: ${dedupedActions.length}`);

let idChanged = 0, contentUpdated = 0, skipped = 0;
const sidebarUpdates = {};

// Sort: content updates first, then ID-only changes
dedupedActions.sort((a, b) => (b.needsContentUpdate ? 1 : 0) - (a.needsContentUpdate ? 1 : 0));

for (const action of dedupedActions) {
  const { section, sourceDocId, sourceLang, sourceBytes, targetDocId, targetLang,
    targetBytes, targetFilePath, targetFrontmatter, sourceBody, targetBody,
    score, contentRatio, needsContentUpdate } = action;

  // Check if unifying would create duplicate
  const targetSection = allDocs[targetLang].find(d => d.filePath === targetFilePath)?.section;
  const existingWithNewId = allDocs[targetLang].find(d =>
    d.normSection === section && d.docId === sourceDocId && d.filePath !== targetFilePath
  );
  if (existingWithNewId) {
    skipped++;
    continue;
  }

  const tag = needsContentUpdate ? 'CONTENT+ID' : 'ID_ONLY';
  const sizeInfo = needsContentUpdate
    ? `${(targetBytes/1024).toFixed(1)}KB → ${(sourceBytes/1024).toFixed(1)}KB`
    : `${(targetBytes/1024).toFixed(1)}KB (${(contentRatio*100).toFixed(0)}%)`;

  console.log(`  ${tag}: [${targetLang}] ${section}/${targetDocId} → ${sourceDocId} (${(score*100).toFixed(0)}% match, ${sizeInfo})`);

  // Build new content
  let newContent;
  if (needsContentUpdate) {
    // Replace body with source content, keep target frontmatter
    const newFm = targetFrontmatter.replace(
      /^id:\s*["']?.*?["']?\s*$/m,
      `id: "${sourceDocId}"`
    );
    newContent = newFm + '\n\n' + sourceBody + '\n';
    contentUpdated++;
  } else {
    // Just change the ID
    const oldContent = fs.readFileSync(targetFilePath, 'utf-8');
    const oldIdPattern = new RegExp(
      `^id:\\s*["']?${targetDocId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']?\\s*$`, 'm'
    );
    newContent = oldContent.replace(oldIdPattern, `id: "${sourceDocId}"`);
    if (newContent === oldContent) { skipped++; continue; }
  }

  fs.writeFileSync(targetFilePath, newContent);
  idChanged++;

  // Track sidebar update
  if (!sidebarUpdates[targetLang]) sidebarUpdates[targetLang] = {};
  const oldSidebarId = targetSection ? `${targetSection}/${targetDocId}` : targetDocId;
  const newSidebarId = targetSection ? `${targetSection}/${sourceDocId}` : sourceDocId;
  if (oldSidebarId !== newSidebarId) {
    sidebarUpdates[targetLang][oldSidebarId] = newSidebarId;
  }
}

console.log(`\nApplied: ${idChanged} files (${contentUpdated} with content update)`);
console.log(`Skipped: ${skipped} (conflicts or no change)`);

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
    if (matches) { sidebar = sidebar.replace(re, `"${newId}"`); count += matches.length; }
  }
  fs.writeFileSync(sidebarPath, sidebar);
  console.log(`Sidebar [${lang.toUpperCase()}]: ${count} references updated`);
}

console.log('\nDone! Run generate-lang-mapping.js to update URL mapping.');
