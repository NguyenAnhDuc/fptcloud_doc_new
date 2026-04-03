#!/usr/bin/env node
/**
 * Deep analysis of unmatched docs:
 * 1. Find content-similar pairs with lower threshold (>20%)
 * 2. Classify: TRANSLATABLE (similar content, just missing translation)
 *    vs UNIQUE (truly different content, different page)
 * 3. For TRANSLATABLE: identify best source lang (longest content)
 * 4. Output actionable report
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

  return {
    score: imgScore * 0.5 + hdScore * 0.3 + sizeRatio * 0.2,
    imgScore, hdScore, sizeRatio,
    sharedImgs: sharedImgs.length,
    totalImgs: Math.max(imgsA.length, imgsB.length),
  };
}

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
            lang, filePath: full, section,
            normSection: resolveSection(section),
            docId: fm.id || entry.name.replace(/\.md$/, ''),
            title: fm.title || '',
            bytes: Buffer.byteLength(body, 'utf-8'),
            body,
          });
        }
      }
    } catch {}
  }
  walk(docsDir, '');
  return docs;
}

// ── Load docs ──
console.log('Loading docs...');
const allDocs = {};
for (const [lang, dir] of Object.entries(DOC_DIRS)) {
  allDocs[lang] = getAllDocs(dir, lang);
}

// Build index by normSection/docId
const idIndex = {};
for (const [lang, docs] of Object.entries(allDocs)) {
  for (const doc of docs) {
    const key = `${doc.normSection}/${doc.docId}`;
    if (!idIndex[key]) idIndex[key] = {};
    idIndex[key][lang] = doc;
  }
}

// ── Find unmatched files ──
const unmatched = [];
for (const [key, langs] of Object.entries(idIndex)) {
  if (Object.keys(langs).length >= 3) continue;
  const present = Object.entries(langs);
  const missing = ['en', 'vi', 'ja'].filter(l => !langs[l]);
  const best = present.reduce((a, b) => a[1].bytes > b[1].bytes ? a : b);
  unmatched.push({
    key,
    section: best[1].normSection,
    docId: best[1].docId,
    title: best[1].title,
    bestLang: best[0],
    bestBytes: best[1].bytes,
    bestBody: best[1].body,
    presentLangs: present.map(([l]) => l),
    missingLangs: missing,
    allDocs: langs,
  });
}

console.log(`Total unmatched: ${unmatched.length}`);

// ── For each unmatched, try to find content-similar in missing languages ──
console.log('Comparing content across languages...\n');

const translatable = []; // similar content exists, just need ID sync or translation
const unique = []; // truly unique, no similar content in other langs

for (const doc of unmatched) {
  let bestCrossMatch = null;

  for (const missingLang of doc.missingLangs) {
    // Find all docs in same section of missing language
    const candidates = allDocs[missingLang].filter(d => d.normSection === doc.section);

    for (const candidate of candidates) {
      // Skip if already matched to another doc
      const candKey = `${candidate.normSection}/${candidate.docId}`;
      if (idIndex[candKey] && Object.keys(idIndex[candKey]).length >= 3) continue;

      const sim = similarity(doc.bestBody, candidate.body);
      if (sim.score > 0.2 && (!bestCrossMatch || sim.score > bestCrossMatch.score)) {
        bestCrossMatch = {
          lang: missingLang,
          docId: candidate.docId,
          title: candidate.title,
          bytes: candidate.bytes,
          score: sim.score,
          sharedImgs: sim.sharedImgs,
          totalImgs: sim.totalImgs,
        };
      }
    }
  }

  if (bestCrossMatch && bestCrossMatch.score > 0.25) {
    translatable.push({
      ...doc,
      match: bestCrossMatch,
      type: bestCrossMatch.score > 0.6 ? 'HIGH_MATCH' : bestCrossMatch.score > 0.4 ? 'MEDIUM_MATCH' : 'LOW_MATCH',
    });
  } else {
    unique.push({ ...doc, type: 'UNIQUE' });
  }
}

// ── Report ──
console.log('╔══════════════════════════════════════════════════════════════════╗');
console.log('║           UNMATCHED DOCS DEEP ANALYSIS                          ║');
console.log('╚══════════════════════════════════════════════════════════════════╝\n');

console.log(`┌─ TRANSLATABLE (similar content found in other language): ${translatable.length}`);
const highMatch = translatable.filter(d => d.type === 'HIGH_MATCH');
const medMatch = translatable.filter(d => d.type === 'MEDIUM_MATCH');
const lowMatch = translatable.filter(d => d.type === 'LOW_MATCH');
console.log(`│  HIGH (>60%): ${highMatch.length} — can auto-unify ID`);
console.log(`│  MEDIUM (40-60%): ${medMatch.length} — likely same content, review recommended`);
console.log(`│  LOW (25-40%): ${lowMatch.length} — possibly same topic, needs manual check`);
console.log(`└`);

console.log(`\n┌─ UNIQUE (no similar content in other languages): ${unique.length}`);
const uniqueLarge = unique.filter(d => d.bestBytes > 2000);
const uniqueSmall = unique.filter(d => d.bestBytes <= 2000);
console.log(`│  With substantial content (>2KB): ${uniqueLarge.length} — need translation`);
console.log(`│  Small/stub (<2KB): ${uniqueSmall.length} — may skip or create stubs`);
console.log(`└`);

// ── Show top TRANSLATABLE by section ──
console.log('\n=== TOP TRANSLATABLE (can unify IDs) ===\n');
console.log('Source'.padEnd(55) + 'Match'.padEnd(40) + 'Score  Size');
console.log('─'.repeat(110));
for (const d of highMatch.slice(0, 30)) {
  const src = `[${d.bestLang}] ${d.section}/${d.docId}`;
  const match = `→ [${d.match.lang}] ${d.match.docId}`;
  console.log(src.padEnd(55) + match.padEnd(40) + `${(d.match.score*100).toFixed(0)}%`.padStart(5) + `${(d.bestBytes/1024).toFixed(1)}KB`.padStart(8));
}
if (highMatch.length > 30) console.log(`... +${highMatch.length - 30} more`);

// ── Show top UNIQUE by content size ──
console.log('\n=== TOP UNIQUE DOCS (need translation, sorted by size) ===\n');
console.log('Lang  Section'.padEnd(50) + 'DocId'.padEnd(40) + 'Size'.padStart(10) + '  Missing');
console.log('─'.repeat(110));
for (const d of uniqueLarge.sort((a, b) => b.bestBytes - a.bestBytes).slice(0, 30)) {
  const src = `[${d.bestLang}] ${d.section}`;
  console.log(src.padEnd(50) + d.docId.padEnd(40) + `${(d.bestBytes/1024).toFixed(1)}KB`.padStart(10) + '  ' + d.missingLangs.join('+'));
}
if (uniqueLarge.length > 30) console.log(`... +${uniqueLarge.length - 30} more`);

// ── CSV export ──
const rows = ['type,match_level,section,docId,title,present_in,missing_in,source_lang,bytes,match_lang,match_docId,match_score'];
for (const d of [...translatable, ...unique]) {
  const title = (d.title || '').replace(/,/g, ';').replace(/"/g, "'");
  const ml = d.match ? d.match.lang : '';
  const mid = d.match ? d.match.docId : '';
  const ms = d.match ? (d.match.score * 100).toFixed(0) : '';
  rows.push(`${d.type},${d.type},${d.section},"${d.docId}","${title}",${d.presentLangs.join('+')},${d.missingLangs.join('+')},${d.bestLang},${d.bestBytes},${ml},"${mid}",${ms}`);
}
fs.writeFileSync(path.join(ROOT, 'unmatched-deep-analysis.csv'), rows.join('\n'));
console.log(`\nCSV: unmatched-deep-analysis.csv (${rows.length - 1} rows)`);

// ── Summary ──
console.log('\n=== ACTION SUMMARY ===');
console.log(`1. Auto-unify IDs (HIGH_MATCH): ${highMatch.length} files — run unify-doc-ids with lower threshold`);
console.log(`2. Review & unify (MEDIUM_MATCH): ${medMatch.length} files — manual review then unify`);
console.log(`3. Translate unique large docs: ${uniqueLarge.length} files — copy from source lang, translate`);
console.log(`4. Skip tiny/stubs: ${uniqueSmall.length} files`);
console.log(`Total actionable: ${highMatch.length + medMatch.length + uniqueLarge.length} files`);
