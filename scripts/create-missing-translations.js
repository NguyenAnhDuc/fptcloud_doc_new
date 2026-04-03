#!/usr/bin/env node
/**
 * Create missing translations for docs that only exist in 1-2 languages.
 *
 * Strategy:
 * 1. Find docs missing in each language (by unified docId)
 * 2. For each missing doc, find the richest source version
 * 3. If 2 versions exist with different content sizes, merge (keep longer sections)
 * 4. Create target file with: proper frontmatter + source content
 * 5. Update sidebar if needed
 *
 * Only processes docs with >500 bytes body content (skip stubs).
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
function getActualSection(normSection, lang) {
  if (lang === 'ja' && normSection === 'tagging') return 'タグ-付け';
  return normSection;
}

const MIN_BYTES = 500; // Skip tiny stubs

function parseParts(content) {
  const match = content.match(/^(---\n[\s\S]*?\n---)\n?([\s\S]*)$/);
  if (!match) return { frontmatter: '', body: content.trim() };
  return { frontmatter: match[1], body: match[2].trim() };
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

function buildFrontmatter(fm) {
  const lines = ['---'];
  for (const [key, val] of Object.entries(fm)) {
    lines.push(`${key}: "${val}"`);
  }
  lines.push('---');
  return lines.join('\n');
}

function extractSections(body) {
  // Split body into heading-based sections
  const sections = [];
  const re = /^(#{1,6})\s+(.+)$/gm;
  let lastIdx = 0, lastHeading = null, lastLevel = 0;
  let m;

  while ((m = re.exec(body)) !== null) {
    if (lastHeading !== null) {
      sections.push({
        heading: lastHeading,
        level: lastLevel,
        content: body.slice(lastIdx, m.index).trim(),
      });
    }
    lastHeading = m[2];
    lastLevel = m[1].length;
    lastIdx = m.index;
  }

  if (lastHeading !== null) {
    sections.push({
      heading: lastHeading,
      level: lastLevel,
      content: body.slice(lastIdx).trim(),
    });
  }

  return sections;
}

function mergeContent(bodyA, bodyB) {
  // If one is significantly longer (>2x), use it as base
  if (bodyA.length > bodyB.length * 2) return bodyA;
  if (bodyB.length > bodyA.length * 2) return bodyB;

  // Similar length — use the longer one
  return bodyA.length >= bodyB.length ? bodyA : bodyB;
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
            lang, filePath: full, fileName: entry.name,
            section: prefix || '_root',
            normSection: resolveSection(prefix || '_root'),
            docId: fm.id || entry.name.replace(/\.md$/, ''),
            fm, body: parts.body,
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

// Build index by normSection/docId
const idIndex = {};
for (const [lang, docs] of Object.entries(allDocs)) {
  for (const doc of docs) {
    const key = `${doc.normSection}/${doc.docId}`;
    if (!idIndex[key]) idIndex[key] = {};
    idIndex[key][lang] = doc;
  }
}

// Find missing translations
let created = 0, skipped = 0, merged = 0;

const langs = ['en', 'vi', 'ja'];

for (const [key, langDocs] of Object.entries(idIndex)) {
  const presentLangs = Object.keys(langDocs);
  const missingLangs = langs.filter(l => !langDocs[l]);

  if (missingLangs.length === 0) continue; // All 3 exist

  // Find best source (longest content)
  let bestDoc = null;
  for (const [lang, doc] of Object.entries(langDocs)) {
    if (!bestDoc || doc.bytes > bestDoc.bytes) bestDoc = doc;
  }

  if (bestDoc.bytes < MIN_BYTES) { skipped++; continue; }

  // If 2 versions exist, merge content
  let finalBody = bestDoc.body;
  if (presentLangs.length === 2) {
    const [docA, docB] = Object.values(langDocs);
    finalBody = mergeContent(docA.body, docB.body);
    if (finalBody !== bestDoc.body) merged++;
  }

  // Create file in each missing language
  for (const targetLang of missingLangs) {
    const actualSection = getActualSection(bestDoc.normSection, targetLang);
    const targetDir = path.join(DOC_DIRS[targetLang], actualSection);

    // Ensure directory exists
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Build filename — use docId as filename for consistency
    const targetFileName = bestDoc.docId + '.md';
    const targetPath = path.join(targetDir, targetFileName);

    // Skip if file already exists (shouldn't happen but safety check)
    if (fs.existsSync(targetPath)) continue;

    // Build frontmatter — copy from source, keep same docId
    const newFm = {
      id: bestDoc.docId,
      title: bestDoc.fm.title || bestDoc.docId,
      description: bestDoc.fm.description || '',
      sidebar_label: bestDoc.fm.sidebar_label || bestDoc.fm.title || bestDoc.docId,
    };
    if (bestDoc.fm.sidebar_position) {
      newFm.sidebar_position = bestDoc.fm.sidebar_position;
    }

    const newContent = buildFrontmatter(newFm) + '\n\n' + finalBody + '\n';
    fs.writeFileSync(targetPath, newContent);
    created++;
  }
}

console.log(`\nCreated: ${created} translation files`);
console.log(`Merged content: ${merged} docs had 2 versions merged`);
console.log(`Skipped: ${skipped} docs (too small, <${MIN_BYTES} bytes)`);

// Summary by language
const createdByLang = { en: 0, vi: 0, ja: 0 };
for (const [key, langDocs] of Object.entries(idIndex)) {
  for (const lang of langs) {
    if (!langDocs[lang]) {
      const bestDoc = Object.values(langDocs).reduce((a, b) => a.bytes > b.bytes ? a : b);
      if (bestDoc.bytes >= MIN_BYTES) createdByLang[lang]++;
    }
  }
}
console.log(`  EN: ${createdByLang.en} new files`);
console.log(`  VI: ${createdByLang.vi} new files`);
console.log(`  JA: ${createdByLang.ja} new files`);

console.log('\nDone! Run rebuild-sidebars-from-menu.js + generate-lang-mapping.js next.');
