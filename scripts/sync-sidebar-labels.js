#!/usr/bin/env node
/**
 * sync-sidebar-labels.js
 * Reads each sidebar file, finds every doc entry with a label,
 * reads the frontmatter title from the corresponding .md file,
 * and updates the sidebar label to match if they differ.
 */

const fs = require('fs');
const path = require('path');

const REPO = '/root/codes/fptcloud_doc_new';

const SIDEBARS = [
  { file: path.join(REPO, 'sidebars.js'),    docsDir: path.join(REPO, 'docs'),    lang: 'EN' },
  { file: path.join(REPO, 'sidebars-vi.js'), docsDir: path.join(REPO, 'docs-vi'), lang: 'VI' },
  { file: path.join(REPO, 'sidebars-ja.js'), docsDir: path.join(REPO, 'docs-ja'), lang: 'JA' },
];

/**
 * Extract frontmatter title from a markdown file.
 * Returns null if not found.
 */
function getFrontmatterTitle(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, 'utf8');
  // Match title field in YAML frontmatter
  const match = content.match(/^---[\s\S]*?^title:\s*["']?(.+?)["']?\s*$/m);
  if (!match) return null;
  return match[1].trim();
}

/**
 * Find a markdown file for a given doc ID.
 * The ID can be like "tagging/initial-setup" or "タグ-付け/initial-setup"
 */
function findDocFile(docsDir, docId) {
  const mdPath = path.join(docsDir, docId + '.md');
  const mdxPath = path.join(docsDir, docId + '.mdx');
  if (fs.existsSync(mdPath)) return mdPath;
  if (fs.existsSync(mdxPath)) return mdxPath;
  return null;
}

/**
 * Process a single sidebar file.
 * Returns { updates: [{docId, oldLabel, newLabel}], notFound: [docId] }
 */
function processSidebar(sidebarFile, docsDir, lang) {
  let content = fs.readFileSync(sidebarFile, 'utf8');
  const updates = [];
  const notFound = [];

  // Regex to find doc entries with both id and label
  // Matches patterns like:
  //   type: "doc", id: "some/path", label: "Some Label"
  // or in any order with possible whitespace/newlines between fields
  // We capture the full block between { and } for each doc entry

  // Strategy: find all occurrences of label: "..." that are preceded (within same object) by id: "..."
  // We'll use a stateful approach: find type: "doc" blocks and extract id + label from each

  // Match doc entries: { type: "doc", id: "...", label: "..." } (fields in any order)
  const docBlockRegex = /\{[^{}]*type:\s*["']doc["'][^{}]*\}/gs;
  const idRegex = /id:\s*["']([^"']+)["']/;
  const labelRegex = /label:\s*["']([^"']+)["']/;

  let updatedContent = content.replace(docBlockRegex, (block) => {
    const idMatch = block.match(idRegex);
    const labelMatch = block.match(labelRegex);
    if (!idMatch || !labelMatch) return block;

    const docId = idMatch[1];
    const currentLabel = labelMatch[1];

    const filePath = findDocFile(docsDir, docId);
    if (!filePath) {
      notFound.push(docId);
      return block;
    }

    const title = getFrontmatterTitle(filePath);
    if (!title) return block;

    if (title === currentLabel) return block;

    updates.push({ docId, oldLabel: currentLabel, newLabel: title });

    // Replace label in this block
    const updatedBlock = block.replace(
      /label:\s*["']([^"']+)["']/,
      (m, lbl) => m.replace(lbl, title)
    );
    return updatedBlock;
  });

  return { updatedContent, updates, notFound };
}

// Main
let totalUpdates = 0;

for (const { file, docsDir, lang } of SIDEBARS) {
  console.log(`\n=== Processing ${lang}: ${path.basename(file)} ===`);

  const { updatedContent, updates, notFound } = processSidebar(file, docsDir, lang);

  if (updates.length > 0) {
    fs.writeFileSync(file, updatedContent, 'utf8');
    console.log(`Updated ${updates.length} labels:`);
    for (const u of updates) {
      console.log(`  [${u.docId}]`);
      console.log(`    OLD: ${u.oldLabel}`);
      console.log(`    NEW: ${u.newLabel}`);
    }
    totalUpdates += updates.length;
  } else {
    console.log('No label updates needed.');
  }

  if (notFound.length > 0) {
    console.log(`\nMissing doc files (${notFound.length}):`);
    for (const id of notFound.slice(0, 20)) {
      console.log(`  - ${id}`);
    }
    if (notFound.length > 20) console.log(`  ... and ${notFound.length - 20} more`);
  }
}

console.log(`\nTotal labels updated: ${totalUpdates}`);
