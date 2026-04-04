#!/usr/bin/env node
/**
 * Compare crawled content fingerprints with local Docusaurus markdown files.
 *
 * For each crawled page (by slug), finds the matching local .md file and compares:
 *   - Heading structure (count + labels)
 *   - Image count
 *   - Table count
 *   - Code block count
 *   - Word count difference %
 *   - Missing/extra sections
 *
 * Runs across all 3 languages: vi, en, ja
 *
 * Usage:
 *   node compare_content.js                          # Compare all languages
 *   node compare_content.js --lang vi                # Compare only Vietnamese
 *   node compare_content.js --threshold 30           # Flag word count diff > 30%
 *   node compare_content.js --output report.json     # Custom output path
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const FINGERPRINT_FILE = path.join(__dirname, 'content-fingerprints.json');

const LANGS = [
  { code: 'vi', dir: 'docs-vi', label: 'Vietnamese' },
  { code: 'en', dir: 'docs', label: 'English' },
  { code: 'ja', dir: 'docs-ja', label: 'Japanese' },
];

// ── Parse CLI args ─────────────────────────────────────────────────

const args = process.argv.slice(2);
const langFilter = args.includes('--lang') ? args[args.indexOf('--lang') + 1] : null;
const threshold = args.includes('--threshold')
  ? parseInt(args[args.indexOf('--threshold') + 1], 10)
  : 30;
const outputPath = args.includes('--output')
  ? args[args.indexOf('--output') + 1]
  : path.join(__dirname, 'content-compare-report.json');

// ── Markdown fingerprint extraction ────────────────────────────────

function extractMdFingerprint(content) {
  const lines = content.split('\n');

  // Remove frontmatter
  let bodyStart = 0;
  if (lines[0] && lines[0].trim() === '---') {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        bodyStart = i + 1;
        break;
      }
    }
  }
  const body = lines.slice(bodyStart).join('\n');

  // Headings
  const headings = [];
  const headingRe = /^(#{1,6})\s+(.+)$/gm;
  let match;
  while ((match = headingRe.exec(body)) !== null) {
    headings.push({ level: match[1].length, text: match[2].trim() });
  }

  // Images: ![alt](src) or <img> tags
  const imgMd = (body.match(/!\[([^\]]*)\]\([^)]+\)/g) || []);
  const imgHtml = (body.match(/<img\s[^>]*>/gi) || []);
  const imageCount = imgMd.length + imgHtml.length;

  // Tables: lines with | at start
  const tableLines = body.split('\n').filter(l => /^\s*\|/.test(l) && l.includes('|'));
  // Count table blocks (separated by non-table lines)
  let tableCount = 0;
  let inTable = false;
  for (const line of body.split('\n')) {
    const isTableLine = /^\s*\|/.test(line) && line.includes('|');
    if (isTableLine && !inTable) {
      tableCount++;
      inTable = true;
    } else if (!isTableLine) {
      inTable = false;
    }
  }

  // Code blocks: ``` or ~~~
  const codeBlockMatches = body.match(/^(```|~~~)/gm) || [];
  const codeBlockCount = Math.floor(codeBlockMatches.length / 2);

  // Word count (strip markdown syntax roughly)
  const stripped = body
    .replace(/```[\s\S]*?```/g, '')      // remove code blocks
    .replace(/`[^`]+`/g, '')              // remove inline code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // remove images
    .replace(/\[[^\]]*\]\([^)]*\)/g, '')  // remove links (keep text)
    .replace(/<[^>]+>/g, '')              // remove HTML tags
    .replace(/[#*_~`>|]/g, '')            // remove markdown chars
    .replace(/---+/g, '');                // remove HR
  const words = stripped.trim().split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length;

  // Paragraphs (non-empty lines that aren't headings, lists, code, tables)
  let paragraphCount = 0;
  const bodyLines = body.split('\n');
  let inCodeBlock = false;
  for (const line of bodyLines) {
    if (/^(```|~~~)/.test(line.trim())) { inCodeBlock = !inCodeBlock; continue; }
    if (inCodeBlock) continue;
    const trimmed = line.trim();
    if (trimmed.length > 20
      && !trimmed.startsWith('#')
      && !trimmed.startsWith('-')
      && !trimmed.startsWith('*')
      && !trimmed.startsWith('|')
      && !trimmed.startsWith('>')
      && !trimmed.startsWith(':::')
      && !trimmed.startsWith('![')) {
      paragraphCount++;
    }
  }

  // List items
  const listItems = (body.match(/^[\s]*[-*+]\s+/gm) || []).length
    + (body.match(/^[\s]*\d+\.\s+/gm) || []).length;

  return {
    headings,
    imageCount,
    tableCount,
    codeBlockCount,
    wordCount,
    paragraphCount,
    listItemCount: listItems,
  };
}

// ── Find local file by slug ────────────────────────────────────────

function buildFileIndex(docsDir) {
  const index = new Map(); // slug → { filePath, relativePath }
  const baseDir = path.join(ROOT, docsDir);

  function walk(dir) {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
    catch { return; }

    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
        const slug = entry.name.replace(/\.mdx?$/, '');
        const relative = path.relative(baseDir, full);

        // Also check frontmatter id
        let fmId = null;
        try {
          const content = fs.readFileSync(full, 'utf-8');
          const fmMatch = content.match(/^---\s*\n[\s\S]*?\nid:\s*"?([^"\n]+)"?\s*\n[\s\S]*?\n---/);
          if (fmMatch) fmId = fmMatch[1].trim();
        } catch { /* skip */ }

        const entry_data = { filePath: full, relativePath: relative, slug, fmId };

        // Index by filename slug
        if (!index.has(slug)) index.set(slug, entry_data);

        // Also index by frontmatter id
        if (fmId && !index.has(fmId)) index.set(fmId, entry_data);
      }
    }
  }

  walk(baseDir);
  return index;
}

// ── Comparison logic ───────────────────────────────────────────────

function normalize(str) {
  if (!str) return '';
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function compareFingerprints(crawled, local, slug) {
  const cf = crawled;
  const lf = local;

  const issues = [];

  // 1. Heading count
  const headingDiff = lf.headings.length - cf.headings.length;
  if (cf.headings.length > 0 && lf.headings.length === 0) {
    issues.push({ type: 'NO_HEADINGS', severity: 'HIGH', detail: `Crawled has ${cf.headings.length} headings, local has 0` });
  } else if (Math.abs(headingDiff) > 3) {
    issues.push({ type: 'HEADING_COUNT_DIFF', severity: 'MEDIUM', detail: `Crawled: ${cf.headings.length}, Local: ${lf.headings.length} (diff: ${headingDiff > 0 ? '+' : ''}${headingDiff})` });
  }

  // 2. Missing headings (crawled headings not found in local)
  const localHeadingTexts = new Set(lf.headings.map(h => normalize(h.text)));
  const missingHeadings = cf.headings.filter(h => {
    const norm = normalize(h.text);
    if (localHeadingTexts.has(norm)) return false;
    // Fuzzy: check if any local heading contains the crawled heading text
    for (const lt of localHeadingTexts) {
      if (lt.includes(norm) || norm.includes(lt)) return false;
    }
    return true;
  });

  if (missingHeadings.length > 0) {
    issues.push({
      type: 'MISSING_HEADINGS',
      severity: missingHeadings.length > 2 ? 'HIGH' : 'LOW',
      detail: `${missingHeadings.length} headings from crawled not found in local`,
      headings: missingHeadings.map(h => `h${h.level}: ${h.text}`).slice(0, 10),
    });
  }

  // 3. Image count
  const imgDiff = lf.imageCount - cf.imageCount;
  if (cf.imageCount > 0 && lf.imageCount === 0) {
    issues.push({ type: 'NO_IMAGES', severity: 'HIGH', detail: `Crawled has ${cf.imageCount} images, local has 0` });
  } else if (cf.imageCount > 0 && imgDiff < -2) {
    issues.push({ type: 'FEWER_IMAGES', severity: 'MEDIUM', detail: `Crawled: ${cf.imageCount}, Local: ${lf.imageCount} (missing ${Math.abs(imgDiff)})` });
  }

  // 4. Table count
  const tableDiff = lf.tableCount - cf.tableCount;
  if (cf.tableCount > 0 && lf.tableCount === 0) {
    issues.push({ type: 'NO_TABLES', severity: 'MEDIUM', detail: `Crawled has ${cf.tableCount} tables, local has 0` });
  } else if (cf.tableCount > 0 && tableDiff < -1) {
    issues.push({ type: 'FEWER_TABLES', severity: 'LOW', detail: `Crawled: ${cf.tableCount}, Local: ${lf.tableCount}` });
  }

  // 5. Code block count
  const codeDiff = lf.codeBlockCount - cf.codeBlockCount;
  if (cf.codeBlockCount > 0 && lf.codeBlockCount === 0) {
    issues.push({ type: 'NO_CODE_BLOCKS', severity: 'MEDIUM', detail: `Crawled has ${cf.codeBlockCount} code blocks, local has 0` });
  }

  // 6. Word count difference
  if (cf.wordCount > 50) {
    const pctDiff = ((lf.wordCount - cf.wordCount) / cf.wordCount * 100);
    if (pctDiff < -threshold) {
      issues.push({
        type: 'WORD_COUNT_LOW',
        severity: pctDiff < -60 ? 'HIGH' : 'MEDIUM',
        detail: `Crawled: ${cf.wordCount} words, Local: ${lf.wordCount} words (${pctDiff.toFixed(0)}%)`,
      });
    }
  }

  return {
    slug,
    crawled: {
      headings: cf.headings.length,
      images: cf.imageCount,
      tables: cf.tableCount,
      codeBlocks: cf.codeBlockCount,
      words: cf.wordCount,
    },
    local: {
      headings: lf.headings.length,
      images: lf.imageCount,
      tables: lf.tableCount,
      codeBlocks: lf.codeBlockCount,
      words: lf.wordCount,
    },
    issues,
  };
}

// ── Main ───────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(FINGERPRINT_FILE)) {
    console.error(`Error: ${FINGERPRINT_FILE} not found. Run crawl_content.py first.`);
    process.exit(1);
  }

  const fpData = JSON.parse(fs.readFileSync(FINGERPRINT_FILE, 'utf-8'));
  const crawledPages = fpData.pages;

  console.log('╔══════════════════════════════════════════════════════════════════╗');
  console.log('║   CONTENT FINGERPRINT COMPARISON                               ║');
  console.log('╚══════════════════════════════════════════════════════════════════╝');
  console.log(`\nCrawled: ${crawledPages.length} pages (${fpData.crawled_at})`);
  console.log(`Word count diff threshold: ${threshold}%\n`);

  const selectedLangs = LANGS.filter(l => !langFilter || l.code === langFilter);
  const fullReport = {};

  for (const lang of selectedLangs) {
    console.log('┌──────────────────────────────────────────────────────────────────┐');
    console.log(`│  ${lang.label.toUpperCase()} (${lang.dir})`.padEnd(67) + '│');
    console.log('└──────────────────────────────────────────────────────────────────┘\n');

    const fileIndex = buildFileIndex(lang.dir);
    console.log(`  File index: ${fileIndex.size} entries\n`);

    const results = [];
    let matched = 0;
    let notFound = 0;
    const notFoundList = [];
    const issuesByType = {};
    const issuesBySeverity = { HIGH: 0, MEDIUM: 0, LOW: 0 };

    for (const pg of crawledPages) {
      const slug = pg.slug;
      const fp = pg.fingerprint;
      if (!fp) continue;

      // Find local file
      const localEntry = fileIndex.get(slug);
      if (!localEntry) {
        notFound++;
        notFoundList.push({ slug, label: pg.label, module: pg.module });
        continue;
      }

      matched++;

      // Extract local fingerprint
      let localContent;
      try {
        localContent = fs.readFileSync(localEntry.filePath, 'utf-8');
      } catch {
        notFound++;
        notFoundList.push({ slug, label: pg.label, module: pg.module, error: 'read_failed' });
        continue;
      }

      const localFp = extractMdFingerprint(localContent);
      const comparison = compareFingerprints(fp, localFp, slug);
      comparison.module = pg.module;
      comparison.category = pg.category;
      comparison.label = pg.label;
      comparison.localFile = localEntry.relativePath;
      results.push(comparison);

      // Aggregate issues
      for (const issue of comparison.issues) {
        issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1;
        issuesBySeverity[issue.severity]++;
      }
    }

    // ── Summary ──────────────────────────────────────────────────

    const pagesWithIssues = results.filter(r => r.issues.length > 0);
    const pagesClean = results.filter(r => r.issues.length === 0);

    console.log(`  Matched: ${matched} / ${crawledPages.length}`);
    console.log(`  Not found: ${notFound}`);
    console.log(`  Clean (no issues): ${pagesClean.length}`);
    console.log(`  With issues: ${pagesWithIssues.length}`);
    console.log(`    HIGH: ${issuesBySeverity.HIGH}  MEDIUM: ${issuesBySeverity.MEDIUM}  LOW: ${issuesBySeverity.LOW}`);

    if (Object.keys(issuesByType).length > 0) {
      console.log('\n  Issue breakdown:');
      for (const [type, count] of Object.entries(issuesByType).sort((a, b) => b[1] - a[1])) {
        console.log(`    ${type}: ${count}`);
      }
    }

    // ── HIGH severity details ──────────────────────────────────

    const highIssuePages = pagesWithIssues.filter(r => r.issues.some(i => i.severity === 'HIGH'));
    if (highIssuePages.length > 0) {
      console.log(`\n  ── HIGH SEVERITY (${highIssuePages.length} pages) ──\n`);
      for (const pg of highIssuePages.slice(0, 30)) {
        console.log(`  [${pg.module}] ${pg.slug} (${pg.localFile})`);
        for (const issue of pg.issues.filter(i => i.severity === 'HIGH')) {
          console.log(`    ⚠ ${issue.type}: ${issue.detail}`);
          if (issue.headings) {
            issue.headings.slice(0, 3).forEach(h => console.log(`      - ${h}`));
            if (issue.headings.length > 3) console.log(`      ... +${issue.headings.length - 3} more`);
          }
        }
      }
      if (highIssuePages.length > 30) {
        console.log(`\n  ... +${highIssuePages.length - 30} more HIGH severity pages`);
      }
    }

    // ── Not found ──────────────────────────────────────────────

    if (notFoundList.length > 0) {
      console.log(`\n  ── NOT FOUND IN LOCAL DOCS (${notFoundList.length}) ──\n`);
      const byModule = {};
      for (const nf of notFoundList) {
        if (!byModule[nf.module]) byModule[nf.module] = [];
        byModule[nf.module].push(nf);
      }
      for (const [mod, items] of Object.entries(byModule).sort((a, b) => b[1].length - a[1].length)) {
        console.log(`    [${mod}] (${items.length}):`);
        items.slice(0, 5).forEach(i => console.log(`      - ${i.slug} — "${i.label}"`));
        if (items.length > 5) console.log(`      ... +${items.length - 5} more`);
      }
    }

    console.log();

    fullReport[lang.code] = {
      matched,
      notFound,
      clean: pagesClean.length,
      withIssues: pagesWithIssues.length,
      issuesBySeverity,
      issuesByType,
      notFoundList,
      pages: results,
    };
  }

  // ── Cross-language summary ─────────────────────────────────────

  if (selectedLangs.length > 1) {
    console.log('╔══════════════════════════════════════════════════════════════════╗');
    console.log('║   CROSS-LANGUAGE SUMMARY                                       ║');
    console.log('╚══════════════════════════════════════════════════════════════════╝\n');
    console.log('  ' + 'Lang'.padEnd(12) + 'Matched'.padEnd(10) + 'NotFound'.padEnd(10) + 'Clean'.padEnd(10) + 'Issues'.padEnd(10) + 'HIGH'.padEnd(8) + 'MED'.padEnd(8) + 'LOW');
    console.log('  ' + '-'.repeat(76));
    for (const lang of selectedLangs) {
      const r = fullReport[lang.code];
      if (!r) continue;
      console.log('  '
        + lang.code.toUpperCase().padEnd(12)
        + String(r.matched).padEnd(10)
        + String(r.notFound).padEnd(10)
        + String(r.clean).padEnd(10)
        + String(r.withIssues).padEnd(10)
        + String(r.issuesBySeverity.HIGH).padEnd(8)
        + String(r.issuesBySeverity.MEDIUM).padEnd(8)
        + String(r.issuesBySeverity.LOW)
      );
    }
  }

  // Save full report
  fs.writeFileSync(outputPath, JSON.stringify(fullReport, null, 2));
  console.log(`\nFull report saved → ${outputPath}`);
}

main();
