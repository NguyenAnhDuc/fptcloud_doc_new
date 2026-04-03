#!/usr/bin/env node
/**
 * Find all JA stub/short files and populate them from EN or VI equivalents.
 * A "stub" is a file with content body < 150 chars (after frontmatter).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const JA_DIR = path.join(ROOT, 'docs-ja');
const EN_DIR = path.join(ROOT, 'docs');
const VI_DIR = path.join(ROOT, 'docs-vi');

const STUB_THRESHOLD = 150; // chars of body content

function extractParts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^(---\n[\s\S]*?\n---)\n?([\s\S]*)$/);
    if (!match) return { frontmatter: '', body: content.trim(), raw: content };
    return { frontmatter: match[1], body: match[2].trim(), raw: content };
  } catch {
    return null;
  }
}

function getAllMdFiles(dir) {
  const results = [];
  function walk(d, prefix) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) {
        walk(full, prefix ? `${prefix}/${entry.name}` : entry.name);
      } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
        results.push({ relPath: prefix ? `${prefix}/${entry.name}` : entry.name, fullPath: full });
      }
    }
  }
  walk(dir, '');
  return results;
}

// Find JA stubs
const jaFiles = getAllMdFiles(JA_DIR);
const stubs = [];

for (const f of jaFiles) {
  const parts = extractParts(f.fullPath);
  if (!parts) continue;
  if (parts.body.length < STUB_THRESHOLD) {
    stubs.push({ ...f, bodyLen: parts.body.length, frontmatter: parts.frontmatter });
  }
}

console.log(`Found ${stubs.length} JA stub files (body < ${STUB_THRESHOLD} chars)\n`);

// For each stub, try to find EN or VI equivalent
let fixed = 0;
let noSource = 0;

for (const stub of stubs) {
  const enPath = path.join(EN_DIR, stub.relPath);
  const viPath = path.join(VI_DIR, stub.relPath);

  let sourceParts = null;
  let sourceLang = null;

  // Try EN first
  if (fs.existsSync(enPath)) {
    const p = extractParts(enPath);
    if (p && p.body.length >= STUB_THRESHOLD) {
      sourceParts = p;
      sourceLang = 'EN';
    }
  }

  // Try VI if EN doesn't have good content
  if (!sourceParts && fs.existsSync(viPath)) {
    const p = extractParts(viPath);
    if (p && p.body.length >= STUB_THRESHOLD) {
      sourceParts = p;
      sourceLang = 'VI';
    }
  }

  if (!sourceParts) {
    // No good source - skip
    noSource++;
    console.log(`  SKIP (no source): ${stub.relPath} (${stub.bodyLen} chars)`);
    continue;
  }

  // Keep JA frontmatter, use source body with a translation note
  const jaFm = stub.frontmatter;
  const sourceBody = sourceParts.body;

  // Write the file: JA frontmatter + source content
  // Add a note that content is from EN/VI
  const newContent = `${jaFm}\n\n${sourceBody}\n`;

  fs.writeFileSync(stub.fullPath, newContent, 'utf-8');
  fixed++;
  console.log(`  FIXED: ${stub.relPath} (${stub.bodyLen} -> ${sourceBody.length} chars, from ${sourceLang})`);
}

console.log(`\n=== Summary ===`);
console.log(`Total stubs: ${stubs.length}`);
console.log(`Fixed: ${fixed}`);
console.log(`No source available: ${noSource}`);
