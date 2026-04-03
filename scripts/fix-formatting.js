#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const DIRS = ['docs', 'docs-vi', 'docs-ja'];
const ROOT = path.resolve(__dirname, '..');

const stats = {
  filesScanned: 0,
  filesModified: 0,
  byDir: {},
  byType: {
    missingBlankBeforeHeading: 0,
    buocStuckToPrevLine: 0,
    stepStuckToPrevLine: 0,
  },
};

function initDirStats(dir) {
  if (!stats.byDir[dir]) {
    stats.byDir[dir] = {
      filesScanned: 0,
      filesModified: 0,
      missingBlankBeforeHeading: 0,
      buocStuckToPrevLine: 0,
      stepStuckToPrevLine: 0,
    };
  }
}

/**
 * Process a single markdown file and return the fixed content.
 * Returns null if no changes were made.
 */
function processFile(content) {
  const lines = content.split('\n');
  const result = [];
  let fixCounts = { missingBlankBeforeHeading: 0, buocStuckToPrevLine: 0, stepStuckToPrevLine: 0 };

  let inFrontmatter = false;
  let frontmatterDone = false;
  let inCodeBlock = false;
  let frontmatterDashCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Track frontmatter boundaries
    if (!frontmatterDone && trimmed === '---') {
      frontmatterDashCount++;
      if (frontmatterDashCount === 1) {
        inFrontmatter = true;
      } else if (frontmatterDashCount === 2) {
        inFrontmatter = false;
        frontmatterDone = true;
      }
      result.push(line);
      continue;
    }

    // Track code block boundaries (``` or ~~~)
    if (!inFrontmatter && /^```|^~~~/.test(trimmed)) {
      inCodeBlock = !inCodeBlock;
      result.push(line);
      continue;
    }

    // Skip modifications inside frontmatter or code blocks
    if (inFrontmatter || inCodeBlock) {
      result.push(line);
      continue;
    }

    const prevLine = result.length > 0 ? result[result.length - 1] : '';
    const prevTrimmed = prevLine.trim();

    // Issue 1: Missing blank line before heading
    if (/^#{1,6}\s/.test(trimmed)) {
      const prevIsBlank = prevTrimmed === '';
      const prevIsHeading = /^#{1,6}\s/.test(prevTrimmed);
      const prevIsAdmonition = /^:::/.test(prevTrimmed);

      if (!prevIsBlank && !prevIsHeading && !prevIsAdmonition && result.length > 0) {
        result.push('');
        fixCounts.missingBlankBeforeHeading++;
      }
      result.push(line);
      continue;
    }

    // Issue 2: "Bước X:" stuck to previous line (docs-vi)
    if (/^Bước\s+\d+\s*:/.test(trimmed)) {
      const prevIsBlank = prevTrimmed === '';
      const prevIsHeading = /^#{1,6}\s/.test(prevTrimmed);
      const prevIsAdmonition = /^:::/.test(prevTrimmed);

      if (!prevIsBlank && !prevIsHeading && !prevIsAdmonition && result.length > 0) {
        result.push('');
        fixCounts.buocStuckToPrevLine++;
      }
      result.push(line);
      continue;
    }

    // Issue 3: "Step X:" stuck to previous line (docs/ and docs-ja/)
    if (/^Step\s+\d+\s*:/.test(trimmed)) {
      const prevIsBlank = prevTrimmed === '';
      const prevIsHeading = /^#{1,6}\s/.test(prevTrimmed);
      const prevIsAdmonition = /^:::/.test(prevTrimmed);

      if (!prevIsBlank && !prevIsHeading && !prevIsAdmonition && result.length > 0) {
        result.push('');
        fixCounts.stepStuckToPrevLine++;
      }
      result.push(line);
      continue;
    }

    result.push(line);
  }

  const totalFixes = fixCounts.missingBlankBeforeHeading + fixCounts.buocStuckToPrevLine + fixCounts.stepStuckToPrevLine;
  if (totalFixes === 0) {
    return null;
  }

  return { content: result.join('\n'), fixCounts };
}

function walkDir(dirPath, callback) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      callback(fullPath);
    }
  }
}

function processDir(dirName) {
  const dirPath = path.join(ROOT, dirName);
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory not found, skipping: ${dirPath}`);
    return;
  }

  initDirStats(dirName);

  walkDir(dirPath, (filePath) => {
    stats.filesScanned++;
    stats.byDir[dirName].filesScanned++;

    const original = fs.readFileSync(filePath, 'utf8');
    const result = processFile(original);

    if (result !== null) {
      fs.writeFileSync(filePath, result.content, 'utf8');

      stats.filesModified++;
      stats.byDir[dirName].filesModified++;

      stats.byType.missingBlankBeforeHeading += result.fixCounts.missingBlankBeforeHeading;
      stats.byType.buocStuckToPrevLine += result.fixCounts.buocStuckToPrevLine;
      stats.byType.stepStuckToPrevLine += result.fixCounts.stepStuckToPrevLine;

      stats.byDir[dirName].missingBlankBeforeHeading += result.fixCounts.missingBlankBeforeHeading;
      stats.byDir[dirName].buocStuckToPrevLine += result.fixCounts.buocStuckToPrevLine;
      stats.byDir[dirName].stepStuckToPrevLine += result.fixCounts.stepStuckToPrevLine;

      const totalFixed = result.fixCounts.missingBlankBeforeHeading + result.fixCounts.buocStuckToPrevLine + result.fixCounts.stepStuckToPrevLine;
      if (totalFixed > 0) {
        const rel = path.relative(ROOT, filePath);
        const parts = [];
        if (result.fixCounts.missingBlankBeforeHeading > 0) parts.push(`headings:${result.fixCounts.missingBlankBeforeHeading}`);
        if (result.fixCounts.buocStuckToPrevLine > 0) parts.push(`buoc:${result.fixCounts.buocStuckToPrevLine}`);
        if (result.fixCounts.stepStuckToPrevLine > 0) parts.push(`step:${result.fixCounts.stepStuckToPrevLine}`);
        console.log(`  fixed ${rel} [${parts.join(', ')}]`);
      }
    }
  });
}

console.log('=== fix-formatting.js ===\n');

for (const dir of DIRS) {
  console.log(`Processing ${dir}/...`);
  processDir(dir);
  console.log();
}

console.log('=== Results ===\n');
console.log(`Files scanned : ${stats.filesScanned}`);
console.log(`Files modified: ${stats.filesModified}`);
console.log();
console.log('Fixes by type:');
console.log(`  Missing blank line before heading : ${stats.byType.missingBlankBeforeHeading}`);
console.log(`  Bước X: stuck to previous line    : ${stats.byType.buocStuckToPrevLine}`);
console.log(`  Step X: stuck to previous line    : ${stats.byType.stepStuckToPrevLine}`);
console.log();
console.log('Fixes by directory:');
for (const [dir, s] of Object.entries(stats.byDir)) {
  const total = s.missingBlankBeforeHeading + s.buocStuckToPrevLine + s.stepStuckToPrevLine;
  console.log(`  ${dir}/`);
  console.log(`    Files scanned/modified: ${s.filesScanned} / ${s.filesModified}`);
  console.log(`    Total fixes: ${total}`);
  if (s.missingBlankBeforeHeading) console.log(`      heading fixes : ${s.missingBlankBeforeHeading}`);
  if (s.buocStuckToPrevLine)       console.log(`      buoc fixes    : ${s.buocStuckToPrevLine}`);
  if (s.stepStuckToPrevLine)       console.log(`      step fixes    : ${s.stepStuckToPrevLine}`);
}
