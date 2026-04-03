#!/usr/bin/env node
/**
 * Migration Check Script for Docusaurus multi-language docs (EN, VI, JA)
 *
 * Checks:
 * 1. Sidebar doc IDs -> actual .md files exist
 * 2. Orphaned files (exist on disk but not in sidebar)
 * 3. Cross-language file consistency (EN <-> VI <-> JA) with mismatch details
 * 4. Empty / stub / too-short files
 * 5. Wrong-language content detection
 * 6. Frontmatter validation (id, title, description)
 * 7. Image URL validation (broken local images, external URLs)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const STATIC_DIR = path.join(ROOT, 'static');

// ── Config ──────────────────────────────────────────────────────────
const LANGUAGES = [
  { code: 'en', docsDir: 'docs', sidebarFile: 'sidebars.js' },
  { code: 'vi', docsDir: 'docs-vi', sidebarFile: 'sidebars-vi.js' },
  { code: 'ja', docsDir: 'docs-ja', sidebarFile: 'sidebars-ja.js' },
];

const MIN_CONTENT_LENGTH = 100;

const LANG_PATTERNS = {
  vi: /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i,
  ja: /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/,
  en: /^[a-zA-Z0-9\s\p{P}\p{S}]+$/u,
};

// Image URL regex patterns in markdown
const IMG_PATTERNS = [
  // ![alt](url) and [![alt](url)](link)
  /!\[[^\]]*\]\(([^)]+)\)/g,
  // <img src="url" /> or <img src='url' />
  /<img[^>]+src=["']([^"']+)["'][^>]*>/g,
  // Docusaurus require() imports: require('path').default or require('path')
  /require\(['"]([^'"]+)['"]\)/g,
];

// ── Helpers ──────────────────────────────────────────────────────────

function getAllMdFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  function walk(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
        const rel = path.relative(dir, full);
        const docId = rel.replace(/\\/g, '/').replace(/\.(mdx?|md)$/, '');
        results.push({ filePath: full, docId });
      }
    }
  }
  walk(dir);
  return results;
}

function extractDocIds(sidebar) {
  const ids = [];

  function walk(item) {
    if (typeof item === 'string') {
      ids.push(item);
    } else if (item && typeof item === 'object') {
      if (item.type === 'doc' && item.id) {
        ids.push(item.id);
      }
      if (Array.isArray(item.items)) {
        item.items.forEach(walk);
      }
      if (Array.isArray(item)) {
        item.forEach(walk);
      }
    }
  }

  if (sidebar && typeof sidebar === 'object') {
    for (const key of Object.keys(sidebar)) {
      const val = sidebar[key];
      if (Array.isArray(val)) {
        val.forEach(walk);
      } else {
        walk(val);
      }
    }
  }
  return ids;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fm = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      let val = line.slice(idx + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      fm[key] = val;
    }
  }
  return fm;
}

function getContentBody(content) {
  return content.replace(/^---[\s\S]*?---\s*/, '').trim();
}

function detectLanguage(text) {
  if (LANG_PATTERNS.ja.test(text)) return 'ja';
  if (LANG_PATTERNS.vi.test(text)) return 'vi';
  return 'en';
}

/**
 * Extract all image URLs from markdown content.
 * Returns array of { url, line, type }
 */
function extractImageUrls(content) {
  const images = [];
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Markdown images: ![alt](url)
    const mdImgRe = /!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
    let m;
    while ((m = mdImgRe.exec(line)) !== null) {
      images.push({ url: m[1], line: i + 1, type: 'markdown' });
    }

    // HTML images: <img src="url" />
    const htmlImgRe = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
    while ((m = htmlImgRe.exec(line)) !== null) {
      images.push({ url: m[1], line: i + 1, type: 'html' });
    }
  }

  return images;
}

/**
 * Check if an image URL resolves to an existing file.
 * Returns { exists, resolvedPath, reason }
 */
function checkImageExists(imageUrl, mdFilePath) {
  // Skip external URLs
  if (/^https?:\/\//i.test(imageUrl)) {
    return { exists: 'external', resolvedPath: imageUrl, reason: 'external URL' };
  }

  // Skip data URIs
  if (imageUrl.startsWith('data:')) {
    return { exists: 'skip', resolvedPath: imageUrl, reason: 'data URI' };
  }

  // Absolute path (starts with /) → resolve from static/
  if (imageUrl.startsWith('/')) {
    const resolved = path.join(STATIC_DIR, imageUrl);
    const exists = fs.existsSync(resolved);
    return { exists: exists ? 'ok' : 'broken', resolvedPath: resolved, reason: exists ? '' : 'file not found in static/' };
  }

  // Relative path → resolve from the markdown file's directory
  const mdDir = path.dirname(mdFilePath);
  const resolved = path.resolve(mdDir, imageUrl);
  const exists = fs.existsSync(resolved);
  return { exists: exists ? 'ok' : 'broken', resolvedPath: resolved, reason: exists ? '' : 'file not found (relative)' };
}

/**
 * Analyze a markdown file for content fingerprinting.
 * Returns { imageUrls: string[], headingCount, bodyLength, headings: string[] }
 */
function analyzeFileContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const body = getContentBody(content);

    // Extract image URLs (order-preserving)
    const imageUrls = [];
    const imgRe = /!\[[^\]]*\]\(([^)\s]+)/g;
    let m;
    while ((m = imgRe.exec(content)) !== null) {
      imageUrls.push(m[1]);
    }

    // Extract headings (text only, stripped of markdown)
    const headings = [];
    const headingRe = /^(#{1,6})\s+(.+)/gm;
    while ((m = headingRe.exec(body)) !== null) {
      headings.push({ level: m[1].length, text: m[2].trim() });
    }

    return {
      imageUrls,
      headingCount: headings.length,
      bodyLength: body.length,
      headings,
    };
  } catch (_) {
    return { imageUrls: [], headingCount: 0, bodyLength: 0, headings: [] };
  }
}

/**
 * Score how likely two files are content-equivalent translations.
 * Returns 0..1 (1 = definitely equivalent)
 */
function contentSimilarityScore(infoA, infoB) {
  let score = 0;
  let weights = 0;

  // 1. Image fingerprint (strongest signal, weight=5)
  if (infoA.imageUrls.length > 0 || infoB.imageUrls.length > 0) {
    const setA = new Set(infoA.imageUrls);
    const setB = new Set(infoB.imageUrls);
    const intersection = [...setA].filter(x => setB.has(x)).length;
    const union = new Set([...setA, ...setB]).size;
    const jaccard = union > 0 ? intersection / union : 0;
    score += jaccard * 5;
    weights += 5;
  }

  // 2. Heading count similarity (weight=2)
  if (infoA.headingCount > 0 || infoB.headingCount > 0) {
    const maxH = Math.max(infoA.headingCount, infoB.headingCount);
    const minH = Math.min(infoA.headingCount, infoB.headingCount);
    score += (minH / maxH) * 2;
    weights += 2;
  }

  // 3. Body length ratio (weight=1) — translations are usually similar length
  if (infoA.bodyLength > 50 && infoB.bodyLength > 50) {
    const ratio = Math.min(infoA.bodyLength, infoB.bodyLength) / Math.max(infoA.bodyLength, infoB.bodyLength);
    score += ratio * 1;
    weights += 1;
  }

  // 4. Heading structure similarity (weight=2) — same heading levels in same order
  if (infoA.headings.length > 0 && infoB.headings.length > 0) {
    const levelsA = infoA.headings.map(h => h.level);
    const levelsB = infoB.headings.map(h => h.level);
    const minLen = Math.min(levelsA.length, levelsB.length);
    const maxLen = Math.max(levelsA.length, levelsB.length);
    let matching = 0;
    for (let i = 0; i < minLen; i++) {
      if (levelsA[i] === levelsB[i]) matching++;
    }
    score += (matching / maxLen) * 2;
    weights += 2;
  }

  return weights > 0 ? score / weights : 0;
}

/**
 * For a folder with mismatched files between two languages,
 * try to find content-equivalent pairs.
 */
function findContentMatches(folder, onlyInA, onlyInB, dirA, dirB) {
  const matched = [];
  const unmatchedA = [];
  const unmatchedB = new Set(onlyInB);

  // Pre-analyze all files
  const infoA = {};
  for (const f of onlyInA) {
    const filePath = findMdFile(dirA, folder, f);
    if (filePath) infoA[f] = analyzeFileContent(filePath);
  }
  const infoB = {};
  for (const f of onlyInB) {
    const filePath = findMdFile(dirB, folder, f);
    if (filePath) infoB[f] = analyzeFileContent(filePath);
  }

  // Greedy matching: for each A file, find best B match
  for (const fA of onlyInA) {
    if (!infoA[fA]) { unmatchedA.push(fA); continue; }

    let bestMatch = null;
    let bestScore = 0;

    for (const fB of unmatchedB) {
      if (!infoB[fB]) continue;
      const s = contentSimilarityScore(infoA[fA], infoB[fB]);
      if (s > bestScore) {
        bestScore = s;
        bestMatch = fB;
      }
    }

    if (bestMatch && bestScore >= 0.4) {
      matched.push({
        fileA: fA,
        fileB: bestMatch,
        score: Math.round(bestScore * 100),
        sharedImages: [...new Set(infoA[fA].imageUrls)].filter(u => new Set(infoB[bestMatch].imageUrls).has(u)).length,
        imagesA: infoA[fA].imageUrls.length,
        imagesB: infoB[bestMatch].imageUrls.length,
      });
      unmatchedB.delete(bestMatch);
    } else {
      unmatchedA.push(fA);
    }
  }

  return { matched, unmatchedA, unmatchedB: [...unmatchedB] };
}

function findMdFile(baseDir, folder, fileName) {
  const dir = path.join(ROOT, baseDir, folder === '_root_' ? '' : folder);
  const candidates = [`${fileName}.md`, `${fileName}.mdx`];
  for (const c of candidates) {
    const fp = path.join(dir, c);
    if (fs.existsSync(fp)) return fp;
  }
  return null;
}

// ── Main ────────────────────────────────────────────────────────────

function main() {
  const report = {
    summary: {},
    sidebarMissing: {},
    orphanedFiles: {},
    emptyFiles: {},
    wrongLanguage: {},
    frontmatterIssues: {},
    brokenImages: {},
    imageStats: {},
    crossLangMissing: {},
    crossLangMismatch: {},
    contentMatches: {},
  };

  const allDocIdsByLang = {};
  const allFileIdsByLang = {};
  const allFilesByLang = {};

  for (const lang of LANGUAGES) {
    const docsDir = path.join(ROOT, lang.docsDir);
    const sidebarPath = path.join(ROOT, lang.sidebarFile);

    // 1. Load sidebar
    let sidebarModule;
    try {
      sidebarModule = require(sidebarPath);
    } catch (e) {
      console.error(`Cannot load sidebar: ${lang.sidebarFile} — ${e.message}`);
      continue;
    }
    const sidebarIds = extractDocIds(sidebarModule);
    allDocIdsByLang[lang.code] = new Set(sidebarIds);

    // 2. Scan files on disk
    const files = getAllMdFiles(docsDir);
    allFilesByLang[lang.code] = files;
    const fileIdMap = new Map();
    for (const f of files) {
      fileIdMap.set(f.docId, f.filePath);
    }

    // Frontmatter id overrides
    const fmIdMap = new Map();
    for (const f of files) {
      try {
        const content = fs.readFileSync(f.filePath, 'utf-8');
        const fm = parseFrontmatter(content);
        if (fm && fm.id) {
          const fmDocId = f.docId.includes('/')
            ? f.docId.substring(0, f.docId.lastIndexOf('/') + 1) + fm.id
            : fm.id;
          fmIdMap.set(fmDocId, f.filePath);
        }
      } catch (_) { /* skip */ }
    }

    const allFileIds = new Set([...fileIdMap.keys(), ...fmIdMap.keys()]);
    allFileIdsByLang[lang.code] = allFileIds;

    // ── Check 1: Sidebar IDs without matching files ──
    const missing = [];
    for (const id of sidebarIds) {
      if (!allFileIds.has(id)) {
        const lowerIds = [...allFileIds].map(x => x.toLowerCase());
        if (!lowerIds.includes(id.toLowerCase())) {
          missing.push(id);
        }
      }
    }
    report.sidebarMissing[lang.code] = missing;

    // ── Check 2: Orphaned files ──
    const sidebarIdSet = new Set(sidebarIds.map(id => id.toLowerCase()));
    const orphaned = [];
    for (const fid of allFileIds) {
      if (!sidebarIdSet.has(fid.toLowerCase())) {
        orphaned.push(fid);
      }
    }
    report.orphanedFiles[lang.code] = orphaned;

    // ── Check 3-6: Content + Image checks ──
    const emptyFiles = [];
    const wrongLang = [];
    const fmIssues = [];
    const brokenImgs = [];
    let totalImages = 0;
    let brokenCount = 0;
    let externalCount = 0;
    let okCount = 0;
    const brokenUrlSet = new Set(); // deduplicate broken URLs across files

    for (const f of files) {
      try {
        const content = fs.readFileSync(f.filePath, 'utf-8');
        const body = getContentBody(content);
        const fm = parseFrontmatter(content);

        // Empty / too short
        if (body.length < MIN_CONTENT_LENGTH) {
          emptyFiles.push({ docId: f.docId, length: body.length, preview: body.slice(0, 80) });
        }

        // Wrong language detection
        if (body.length > 50) {
          const sample = (fm ? (fm.title || '') + ' ' : '') + body.slice(0, 500);
          const detected = detectLanguage(sample);
          if (lang.code === 'en' && detected !== 'en') {
            wrongLang.push({ docId: f.docId, expected: 'en', detected });
          } else if (lang.code === 'vi' && detected === 'ja') {
            wrongLang.push({ docId: f.docId, expected: 'vi', detected: 'ja' });
          } else if (lang.code === 'ja' && detected === 'vi') {
            wrongLang.push({ docId: f.docId, expected: 'ja', detected: 'vi' });
          }
        }

        // Frontmatter checks
        if (!fm) {
          fmIssues.push({ docId: f.docId, issue: 'no frontmatter' });
        } else {
          const issues = [];
          if (!fm.id) issues.push('missing id');
          if (!fm.title) issues.push('missing title');
          if (!fm.description && !fm.sidebar_label) issues.push('missing description');
          if (issues.length > 0) {
            fmIssues.push({ docId: f.docId, issue: issues.join(', ') });
          }
        }

        // ── Image URL checks ──
        const images = extractImageUrls(content);
        totalImages += images.length;

        for (const img of images) {
          const result = checkImageExists(img.url, f.filePath);
          if (result.exists === 'ok') {
            okCount++;
          } else if (result.exists === 'external') {
            externalCount++;
          } else if (result.exists === 'broken') {
            brokenCount++;
            brokenImgs.push({
              docId: f.docId,
              url: img.url,
              line: img.line,
              type: img.type,
              reason: result.reason,
            });
            brokenUrlSet.add(img.url);
          }
        }
      } catch (_) { /* skip unreadable */ }
    }

    report.emptyFiles[lang.code] = emptyFiles;
    report.wrongLanguage[lang.code] = wrongLang;
    report.frontmatterIssues[lang.code] = fmIssues;
    report.brokenImages[lang.code] = brokenImgs;
    report.imageStats[lang.code] = {
      total: totalImages,
      ok: okCount,
      broken: brokenCount,
      external: externalCount,
      uniqueBrokenUrls: brokenUrlSet.size,
    };

    report.summary[lang.code] = {
      sidebarIds: sidebarIds.length,
      filesOnDisk: files.length,
      sidebarMissing: missing.length,
      orphaned: orphaned.length,
      emptyOrShort: emptyFiles.length,
      wrongLanguage: wrongLang.length,
      frontmatterIssues: fmIssues.length,
      totalImages: totalImages,
      brokenImages: brokenCount,
    };
  }

  // ── Cross-language consistency with content equivalence check ──

  const enFiles = allFileIdsByLang['en'] || new Set();
  const viFiles = allFileIdsByLang['vi'] || new Set();
  const jaFiles = allFileIdsByLang['ja'] || new Set();

  function buildFolderMap(fileIds) {
    const map = new Map();
    for (const id of fileIds) {
      const parts = id.split('/');
      const fileName = parts.pop();
      const folder = parts.join('/') || '_root_';
      if (!map.has(folder)) map.set(folder, new Set());
      map.get(folder).add(fileName);
    }
    return map;
  }

  const enFolderMap = buildFolderMap(enFiles);
  const viFolderMap = buildFolderMap(viFiles);
  const jaFolderMap = buildFolderMap(jaFiles);

  // Compare two languages folder-by-folder WITH content matching
  function compareFoldersWithContent(mapA, mapB, dirA, dirB, labelA, labelB) {
    const results = [];
    const allFolders = new Set([...mapA.keys(), ...mapB.keys()]);

    for (const folder of [...allFolders].sort()) {
      const filesA = mapA.get(folder) || new Set();
      const filesB = mapB.get(folder) || new Set();

      const onlyInA = [...filesA].filter(f => !filesB.has(f)).sort();
      const onlyInB = [...filesB].filter(f => !filesA.has(f)).sort();

      if (onlyInA.length === 0 && onlyInB.length === 0) continue;

      // Content-match the mismatched files
      const contentResult = findContentMatches(folder, onlyInA, onlyInB, dirA, dirB);

      results.push({
        folder,
        [`onlyIn${labelA}`]: onlyInA,
        [`onlyIn${labelB}`]: onlyInB,
        countA: filesA.size,
        countB: filesB.size,
        contentMatched: contentResult.matched,
        trulyOnlyA: contentResult.unmatchedA,
        trulyOnlyB: contentResult.unmatchedB,
      });
    }
    return results;
  }

  console.log('\n  Analyzing content equivalence (image fingerprints + heading structure)...');

  const enViMismatch = compareFoldersWithContent(enFolderMap, viFolderMap, 'docs', 'docs-vi', 'EN', 'VI');
  const enJaMismatch = compareFoldersWithContent(enFolderMap, jaFolderMap, 'docs', 'docs-ja', 'EN', 'JA');
  const viJaMismatch = compareFoldersWithContent(viFolderMap, jaFolderMap, 'docs-vi', 'docs-ja', 'VI', 'JA');

  // Summary counts
  const enViOnlyEN = enViMismatch.reduce((s, r) => s + (r.onlyInEN?.length || 0), 0);
  const enViOnlyVI = enViMismatch.reduce((s, r) => s + (r.onlyInVI?.length || 0), 0);
  const enJaOnlyEN = enJaMismatch.reduce((s, r) => s + (r.onlyInEN?.length || 0), 0);
  const enJaOnlyJA = enJaMismatch.reduce((s, r) => s + (r.onlyInJA?.length || 0), 0);
  const viJaOnlyVI = viJaMismatch.reduce((s, r) => s + (r.onlyInVI?.length || 0), 0);
  const viJaOnlyJA = viJaMismatch.reduce((s, r) => s + (r.onlyInJA?.length || 0), 0);

  const totalContentMatched = {
    enVi: enViMismatch.reduce((s, r) => s + r.contentMatched.length, 0),
    enJa: enJaMismatch.reduce((s, r) => s + r.contentMatched.length, 0),
    viJa: viJaMismatch.reduce((s, r) => s + r.contentMatched.length, 0),
  };
  const totalTrulyMissing = {
    enViA: enViMismatch.reduce((s, r) => s + r.trulyOnlyA.length, 0),
    enViB: enViMismatch.reduce((s, r) => s + r.trulyOnlyB.length, 0),
    enJaA: enJaMismatch.reduce((s, r) => s + r.trulyOnlyA.length, 0),
    enJaB: enJaMismatch.reduce((s, r) => s + r.trulyOnlyB.length, 0),
    viJaA: viJaMismatch.reduce((s, r) => s + r.trulyOnlyA.length, 0),
    viJaB: viJaMismatch.reduce((s, r) => s + r.trulyOnlyB.length, 0),
  };

  report.crossLangMissing = {
    counts: { enViOnlyEN, enViOnlyVI, enJaOnlyEN, enJaOnlyJA, viJaOnlyVI, viJaOnlyJA },
  };
  report.crossLangMismatch = {
    enVsVi: enViMismatch,
    enVsJa: enJaMismatch,
    viVsJa: viJaMismatch,
  };
  report.contentMatches = {
    summary: totalContentMatched,
    trulyMissing: totalTrulyMissing,
  };

  // ═══════════════════════════════════════════════════════════════════
  // PRINT REPORT
  // ═══════════════════════════════════════════════════════════════════

  console.log('\n╔══════════════════════════════════════════════════════════════════════════╗');
  console.log('║              DOCUSAURUS MIGRATION CHECK REPORT                          ║');
  console.log('╚══════════════════════════════════════════════════════════════════════════╝\n');

  // ── Summary table ──
  console.log('┌──────────────────────────────────────────────────────────────────────────┐');
  console.log('│  SUMMARY                                                                 │');
  console.log('├────────┬─────────┬───────┬─────────┬──────────┬───────┬────────┬─────────┤');
  console.log('│ Lang   │ Sidebar │ Files │ Missing │ Orphaned │ Empty │ Images │ Broken  │');
  console.log('├────────┼─────────┼───────┼─────────┼──────────┼───────┼────────┼─────────┤');
  for (const lang of LANGUAGES) {
    const s = report.summary[lang.code];
    if (!s) continue;
    console.log(
      `│ ${lang.code.toUpperCase().padEnd(6)} │ ${String(s.sidebarIds).padEnd(7)} │ ${String(s.filesOnDisk).padEnd(5)} │ ${String(s.sidebarMissing).padEnd(7)} │ ${String(s.orphaned).padEnd(8)} │ ${String(s.emptyOrShort).padEnd(5)} │ ${String(s.totalImages).padEnd(6)} │ ${String(s.brokenImages).padEnd(7)} │`
    );
  }
  console.log('└────────┴─────────┴───────┴─────────┴──────────┴───────┴────────┴─────────┘\n');

  let hasIssues = false;

  // ── Per-language details ──
  for (const lang of LANGUAGES) {
    const code = lang.code.toUpperCase();

    if (report.sidebarMissing[lang.code]?.length > 0) {
      hasIssues = true;
      console.log(`\n[${code}] SIDEBAR -> FILE MISSING (${report.sidebarMissing[lang.code].length}):`);
      for (const id of report.sidebarMissing[lang.code].slice(0, 30)) {
        console.log(`   - ${id}`);
      }
      if (report.sidebarMissing[lang.code].length > 30) {
        console.log(`   ... and ${report.sidebarMissing[lang.code].length - 30} more`);
      }
    }

    if (report.orphanedFiles[lang.code]?.length > 0) {
      hasIssues = true;
      console.log(`\n[${code}] ORPHANED FILES -- not in sidebar (${report.orphanedFiles[lang.code].length}):`);
      for (const id of report.orphanedFiles[lang.code].slice(0, 20)) {
        console.log(`   - ${id}`);
      }
      if (report.orphanedFiles[lang.code].length > 20) {
        console.log(`   ... and ${report.orphanedFiles[lang.code].length - 20} more`);
      }
    }

    if (report.emptyFiles[lang.code]?.length > 0) {
      hasIssues = true;
      console.log(`\n[${code}] EMPTY/SHORT FILES (${report.emptyFiles[lang.code].length}):`);
      for (const f of report.emptyFiles[lang.code].slice(0, 20)) {
        console.log(`   - ${f.docId} (${f.length} chars) -- "${f.preview}"`);
      }
      if (report.emptyFiles[lang.code].length > 20) {
        console.log(`   ... and ${report.emptyFiles[lang.code].length - 20} more`);
      }
    }

    if (report.wrongLanguage[lang.code]?.length > 0) {
      hasIssues = true;
      console.log(`\n[${code}] WRONG LANGUAGE DETECTED (${report.wrongLanguage[lang.code].length}):`);
      for (const f of report.wrongLanguage[lang.code].slice(0, 20)) {
        console.log(`   - ${f.docId} -- expected ${f.expected}, detected ${f.detected}`);
      }
      if (report.wrongLanguage[lang.code].length > 20) {
        console.log(`   ... and ${report.wrongLanguage[lang.code].length - 20} more`);
      }
    }

    // ── Broken Images ──
    if (report.brokenImages[lang.code]?.length > 0) {
      hasIssues = true;
      const stats = report.imageStats[lang.code];
      console.log(`\n[${code}] BROKEN IMAGES (${stats.broken} broken / ${stats.total} total, ${stats.uniqueBrokenUrls} unique URLs):`);
      // Group by broken URL for clearer output
      const byUrl = new Map();
      for (const img of report.brokenImages[lang.code]) {
        if (!byUrl.has(img.url)) {
          byUrl.set(img.url, []);
        }
        byUrl.get(img.url).push(img);
      }
      let shown = 0;
      for (const [url, refs] of byUrl) {
        if (shown >= 30) {
          console.log(`   ... and ${byUrl.size - 30} more unique broken URLs`);
          break;
        }
        console.log(`   - ${url}`);
        for (const ref of refs.slice(0, 3)) {
          console.log(`     ^ ${ref.docId}:${ref.line} (${ref.type})`);
        }
        if (refs.length > 3) {
          console.log(`     ^ ... and ${refs.length - 3} more references`);
        }
        shown++;
      }
    }

    if (report.frontmatterIssues[lang.code]?.length > 0) {
      hasIssues = true;
      console.log(`\n[${code}] FRONTMATTER ISSUES (${report.frontmatterIssues[lang.code].length}):`);
      for (const f of report.frontmatterIssues[lang.code].slice(0, 20)) {
        console.log(`   - ${f.docId} -- ${f.issue}`);
      }
      if (report.frontmatterIssues[lang.code].length > 20) {
        console.log(`   ... and ${report.frontmatterIssues[lang.code].length - 20} more`);
      }
    }
  }

  // ── Image Stats Summary ──
  console.log('\n┌──────────────────────────────────────────────────────────────────────────┐');
  console.log('│  IMAGE STATS                                                             │');
  console.log('├────────┬────────┬────────┬────────┬──────────┬───────────────────────────┤');
  console.log('│ Lang   │ Total  │ OK     │ Broken │ External │ Unique Broken URLs        │');
  console.log('├────────┼────────┼────────┼────────┼──────────┼───────────────────────────┤');
  for (const lang of LANGUAGES) {
    const s = report.imageStats[lang.code];
    if (!s) continue;
    console.log(
      `│ ${lang.code.toUpperCase().padEnd(6)} │ ${String(s.total).padEnd(6)} │ ${String(s.ok).padEnd(6)} │ ${String(s.broken).padEnd(6)} │ ${String(s.external).padEnd(8)} │ ${String(s.uniqueBrokenUrls).padEnd(25)} │`
    );
  }
  console.log('└────────┴────────┴────────┴────────┴──────────┴───────────────────────────┘');

  // ── Cross-Language Mismatch with Content Equivalence ──
  const cl = report.crossLangMissing.counts;
  const totalMismatch = cl.enViOnlyEN + cl.enViOnlyVI + cl.enJaOnlyEN + cl.enJaOnlyJA + cl.viJaOnlyVI + cl.viJaOnlyJA;

  if (totalMismatch > 0) {
    hasIssues = true;
    console.log('\n┌──────────────────────────────────────────────────────────────────────────┐');
    console.log('│  CROSS-LANGUAGE FILE MISMATCH + CONTENT EQUIVALENCE                      │');
    console.log('└──────────────────────────────────────────────────────────────────────────┘');

    // Overview
    console.log('\n  File name mismatches (different filenames between languages):');
    console.log(`    EN <-> VI: ${cl.enViOnlyEN} only in EN, ${cl.enViOnlyVI} only in VI`);
    console.log(`    EN <-> JA: ${cl.enJaOnlyEN} only in EN, ${cl.enJaOnlyJA} only in JA`);
    console.log(`    VI <-> JA: ${cl.viJaOnlyVI} only in VI, ${cl.viJaOnlyJA} only in JA`);

    console.log('\n  Content equivalence analysis (matched by images + heading structure):');
    console.log(`    EN <-> VI: ${totalContentMatched.enVi} equivalent pairs found, ${totalTrulyMissing.enViA} truly only EN, ${totalTrulyMissing.enViB} truly only VI`);
    console.log(`    EN <-> JA: ${totalContentMatched.enJa} equivalent pairs found, ${totalTrulyMissing.enJaA} truly only EN, ${totalTrulyMissing.enJaB} truly only JA`);
    console.log(`    VI <-> JA: ${totalContentMatched.viJa} equivalent pairs found, ${totalTrulyMissing.viJaA} truly only VI, ${totalTrulyMissing.viJaB} truly only JA`);

    function printMismatchWithContent(pairs, labelA, labelB, limit) {
      let printed = 0;
      for (const entry of pairs) {
        if (printed >= limit) {
          console.log(`\n   ... and ${pairs.length - printed} more folders with mismatches`);
          break;
        }
        const onlyA = entry[`onlyIn${labelA}`] || [];
        const onlyB = entry[`onlyIn${labelB}`] || [];
        if (onlyA.length === 0 && onlyB.length === 0) continue;

        console.log(`\n   [${entry.folder}] (${labelA}: ${entry.countA || 0}, ${labelB}: ${entry.countB || 0})`);

        // Show content-matched pairs first
        if (entry.contentMatched.length > 0) {
          console.log(`     EQUIVALENT PAIRS (${entry.contentMatched.length}):`);
          for (const p of entry.contentMatched.slice(0, 15)) {
            const imgInfo = p.sharedImages > 0 ? `, ${p.sharedImages} shared imgs` : '';
            console.log(`       ${labelA}: ${p.fileA}  <=>  ${labelB}: ${p.fileB}  (${p.score}% match${imgInfo})`);
          }
          if (entry.contentMatched.length > 15) {
            console.log(`       ... and ${entry.contentMatched.length - 15} more pairs`);
          }
        }

        // Show truly unmatched
        if (entry.trulyOnlyA.length > 0) {
          console.log(`     TRULY ONLY in ${labelA} (${entry.trulyOnlyA.length}):`);
          for (const f of entry.trulyOnlyA.slice(0, 8)) console.log(`       - ${f}`);
          if (entry.trulyOnlyA.length > 8) console.log(`       ... and ${entry.trulyOnlyA.length - 8} more`);
        }
        if (entry.trulyOnlyB.length > 0) {
          console.log(`     TRULY ONLY in ${labelB} (${entry.trulyOnlyB.length}):`);
          for (const f of entry.trulyOnlyB.slice(0, 8)) console.log(`       - ${f}`);
          if (entry.trulyOnlyB.length > 8) console.log(`       ... and ${entry.trulyOnlyB.length - 8} more`);
        }
        printed++;
      }
    }

    if (cl.enViOnlyEN + cl.enViOnlyVI > 0) {
      console.log('\n  ── EN <-> VI Detail ──');
      printMismatchWithContent(enViMismatch, 'EN', 'VI', 30);
    }
    if (cl.enJaOnlyEN + cl.enJaOnlyJA > 0) {
      console.log('\n  ── EN <-> JA Detail ──');
      printMismatchWithContent(enJaMismatch, 'EN', 'JA', 30);
    }
    if (cl.viJaOnlyVI + cl.viJaOnlyJA > 0) {
      console.log('\n  ── VI <-> JA Detail ──');
      printMismatchWithContent(viJaMismatch, 'VI', 'JA', 30);
    }
  }

  // ── Final verdict ──
  console.log('\n══════════════════════════════════════════════════════════════════════════');
  if (!hasIssues) {
    console.log('ALL CHECKS PASSED -- Migration looks clean!');
  } else {
    console.log('ISSUES FOUND -- Review the details above.');
  }
  console.log('══════════════════════════════════════════════════════════════════════════\n');

  // Write JSON report
  const reportPath = path.join(ROOT, 'migration-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`Full JSON report saved to: ${reportPath}\n`);

  // Exit with error code if critical issues
  const criticalCount = LANGUAGES.reduce((sum, l) => sum + (report.sidebarMissing[l.code]?.length || 0), 0);
  const brokenImgCount = LANGUAGES.reduce((sum, l) => sum + (report.brokenImages[l.code]?.length || 0), 0);
  if (criticalCount > 0 || brokenImgCount > 0) {
    process.exit(1);
  }
}

main();
