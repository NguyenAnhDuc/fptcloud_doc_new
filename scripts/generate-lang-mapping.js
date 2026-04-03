#!/usr/bin/env node
/**
 * Generate language URL mapping from migration-report.json content matches.
 *
 * Reads equivalent pairs (matched by shared images + heading structure)
 * and creates a static mapping file for the langMappingPlugin.
 *
 * Output: src/docusaurus/lang-url-mapping.json
 */

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const report = require(path.join(ROOT, 'migration-report.json'));
const mismatch = report.crossLangMismatch;

const DOC_DIRS = {
  en: path.join(ROOT, 'docs'),
  vi: path.join(ROOT, 'docs-vi'),
  ja: path.join(ROOT, 'docs-ja'),
};

// Section name mapping
const SECTION_ALIASES = {
  'タグ-付け': 'tagging',
};

function resolveSection(section) {
  return SECTION_ALIASES[section] || section;
}

// ── Build docId → URL mapping per language ──

function extractFrontmatterId(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;
    const idMatch = match[1].match(/^id\s*:\s*["']?(.+?)["']?\s*$/m);
    return idMatch ? idMatch[1] : null;
  } catch { return null; }
}

function buildFileToUrlMap(docsDir, basePath) {
  // Two maps:
  //   byDocId: normalizedSection/docId → urlPath (for cross-lang matching by frontmatter ID)
  //   byFileName: normalizedSection/fileName → urlPath (for same-filename matching)
  const byDocId = {};
  const byFileName = {};

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
          const fileName = entry.name.slice(0, -ext.length);
          const section = prefix || '';
          const fmId = extractFrontmatterId(full);
          const docId = fmId || fileName;
          const urlPath = section ? `${basePath}/${section}/${docId}` : `${basePath}/${docId}`;
          const normSection = resolveSection(section);
          const docIdKey = normSection ? `${normSection}/${docId}` : docId;
          const fileNameKey = normSection ? `${normSection}/${fileName}` : fileName;
          byDocId[docIdKey] = urlPath;
          byFileName[fileNameKey] = urlPath;
        }
      }
    } catch {}
  }

  walk(docsDir, '');
  return { byDocId, byFileName };
}

// ── Main ──

console.log('Building file-to-URL maps...');
const rawMaps = {
  en: buildFileToUrlMap(DOC_DIRS.en, '/docs/en'),
  vi: buildFileToUrlMap(DOC_DIRS.vi, '/docs/vi'),
  ja: buildFileToUrlMap(DOC_DIRS.ja, '/docs/ja'),
};

// For backward compat, urlMaps uses byDocId (primary) merged with byFileName
const urlMaps = {
  en: { ...rawMaps.en.byFileName, ...rawMaps.en.byDocId },
  vi: { ...rawMaps.vi.byFileName, ...rawMaps.vi.byDocId },
  ja: { ...rawMaps.ja.byFileName, ...rawMaps.ja.byDocId },
};

// Priority 1: Match by frontmatter docId (most accurate)
const docIdMapping = {};
const docIdKeys = new Set([
  ...Object.keys(rawMaps.en.byDocId),
  ...Object.keys(rawMaps.vi.byDocId),
  ...Object.keys(rawMaps.ja.byDocId),
]);

let docIdMatchCount = 0;
for (const key of docIdKeys) {
  const en = rawMaps.en.byDocId[key];
  const vi = rawMaps.vi.byDocId[key];
  const ja = rawMaps.ja.byDocId[key];

  const urls = {};
  if (en) urls.en = en;
  if (vi) urls.vi = vi;
  if (ja) urls.ja = ja;

  if (Object.keys(urls).length >= 2) {
    for (const [fromLang, fromUrl] of Object.entries(urls)) {
      if (!docIdMapping[fromUrl]) docIdMapping[fromUrl] = {};
      for (const [toLang, toUrl] of Object.entries(urls)) {
        if (fromLang !== toLang) {
          docIdMapping[fromUrl][toLang] = toUrl;
        }
      }
    }
    docIdMatchCount++;
  }
}

console.log(`DocId matches (frontmatter): ${docIdMatchCount}`);

// Priority 2: Same-filename matches (fallback for files without matching docId)
const sameNameMapping = {};
const fileNameKeys = new Set([
  ...Object.keys(rawMaps.en.byFileName),
  ...Object.keys(rawMaps.vi.byFileName),
  ...Object.keys(rawMaps.ja.byFileName),
]);

let sameNameCount = 0;
for (const key of fileNameKeys) {
  const en = rawMaps.en.byFileName[key];
  const vi = rawMaps.vi.byFileName[key];
  const ja = rawMaps.ja.byFileName[key];

  const urls = {};
  if (en) urls.en = en;
  if (vi) urls.vi = vi;
  if (ja) urls.ja = ja;

  if (Object.keys(urls).length >= 2) {
    for (const [fromLang, fromUrl] of Object.entries(urls)) {
      if (!sameNameMapping[fromUrl]) sameNameMapping[fromUrl] = {};
      for (const [toLang, toUrl] of Object.entries(urls)) {
        if (fromLang !== toLang) {
          sameNameMapping[fromUrl][toLang] = toUrl;
        }
      }
    }
    sameNameCount++;
  }
}

console.log(`Same-filename matches: ${sameNameCount}`);

// ── Extract content-matched pairs from migration report ──

const contentMapping = {};
let contentPairCount = 0;

function processContentMatches(data, langA, langB) {
  if (!data || !Array.isArray(data)) return;

  for (const item of data) {
    const folder = item.folder;
    const pairs = item.contentMatched || [];

    for (const pair of pairs) {
      if (pair.score < 80) continue; // Only use high-confidence matches

      const keyA = `${folder}/${pair.fileA}`;
      const keyB = `${folder}/${pair.fileB}`;

      const urlA = urlMaps[langA][keyA];
      const urlB = urlMaps[langB][keyB];

      if (!urlA || !urlB) continue;

      // Map A → B
      if (!contentMapping[urlA]) contentMapping[urlA] = {};
      contentMapping[urlA][langB] = urlB;

      // Map B → A
      if (!contentMapping[urlB]) contentMapping[urlB] = {};
      contentMapping[urlB][langA] = urlA;

      contentPairCount++;
    }
  }
}

processContentMatches(mismatch.enVsVi, 'en', 'vi');
processContentMatches(mismatch.enVsJa, 'en', 'ja');
processContentMatches(mismatch.viVsJa, 'vi', 'ja');

console.log(`Content-matched pairs: ${contentPairCount}`);

// ── Merge: docId > content > fileName (priority order) ──

const finalMapping = {};

// Layer 1: same-filename matches (lowest priority)
for (const [url, targets] of Object.entries(sameNameMapping)) {
  finalMapping[url] = { ...targets };
}

// Layer 2: content matches override filename matches
for (const [url, targets] of Object.entries(contentMapping)) {
  if (!finalMapping[url]) finalMapping[url] = {};
  Object.assign(finalMapping[url], targets);
}

// Layer 3: docId matches override everything (highest priority)
for (const [url, targets] of Object.entries(docIdMapping)) {
  if (!finalMapping[url]) finalMapping[url] = {};
  Object.assign(finalMapping[url], targets);
}

// ── Add section index fallbacks for unmapped URLs ──

// Build section index URLs
const sectionIndexes = {};
for (const [lang, map] of Object.entries(urlMaps)) {
  for (const [key, url] of Object.entries(map)) {
    const parts = key.split('/');
    if (parts.length === 2 && parts[1] === 'index') {
      const section = parts[0];
      if (!sectionIndexes[section]) sectionIndexes[section] = {};
      sectionIndexes[section][lang] = url;
    }
  }
}

// For any URL without a full mapping, add section index as fallback
let fallbackCount = 0;
for (const [lang, map] of Object.entries(urlMaps)) {
  for (const [key, url] of Object.entries(map)) {
    if (!finalMapping[url]) finalMapping[url] = {};

    const section = key.split('/')[0];
    const otherLangs = ['en', 'vi', 'ja'].filter(l => l !== lang);

    for (const targetLang of otherLangs) {
      if (!finalMapping[url][targetLang]) {
        // No mapping — use section index
        const idx = sectionIndexes[section]?.[targetLang];
        if (idx) {
          finalMapping[url][targetLang] = idx;
          fallbackCount++;
        }
      }
    }
  }
}

console.log(`Section index fallbacks added: ${fallbackCount}`);

// ── Write output ──

const outputPath = path.join(ROOT, 'src', 'docusaurus', 'lang-url-mapping.json');
fs.writeFileSync(outputPath, JSON.stringify(finalMapping, null, 0)); // compact

const totalUrls = Object.keys(finalMapping).length;
const totalMappings = Object.values(finalMapping).reduce((sum, m) => sum + Object.keys(m).length, 0);
const fileSize = (fs.statSync(outputPath).size / 1024).toFixed(1);

console.log(`\nOutput: ${outputPath}`);
console.log(`Total URLs mapped: ${totalUrls}`);
console.log(`Total cross-lang mappings: ${totalMappings}`);
console.log(`File size: ${fileSize} KB`);
