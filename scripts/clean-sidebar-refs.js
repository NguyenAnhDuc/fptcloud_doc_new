#!/usr/bin/env node
/**
 * Remove sidebar entries that reference non-existent doc files.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const CONFIGS = [
  { sidebar: 'sidebars.js', docsDir: 'docs' },
  { sidebar: 'sidebars-vi.js', docsDir: 'docs-vi' },
  { sidebar: 'sidebars-ja.js', docsDir: 'docs-ja' },
];

function extractFrontmatterId(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;
    const idMatch = match[1].match(/^id\s*:\s*["']?(.+?)["']?\s*$/m);
    return idMatch ? idMatch[1] : null;
  } catch { return null; }
}

function buildDocIdSet(docsDir) {
  const ids = new Set();

  function walk(dir, prefix) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, prefix ? `${prefix}/${entry.name}` : entry.name);
      } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
        const ext = path.extname(entry.name);
        const baseName = entry.name.slice(0, -ext.length);
        const filePathId = prefix ? `${prefix}/${baseName}` : baseName;
        ids.add(filePathId);

        // Also add frontmatter-based ID
        const fmId = extractFrontmatterId(full);
        if (fmId) {
          const fmDocId = prefix ? `${prefix}/${fmId}` : fmId;
          ids.add(fmDocId);
        }
      }
    }
  }

  walk(docsDir, '');
  return ids;
}

function cleanItems(items, validIds) {
  if (!Array.isArray(items)) return items;

  const cleaned = [];
  let removed = 0;

  for (const item of items) {
    if (typeof item === 'string') {
      if (validIds.has(item)) {
        cleaned.push(item);
      } else {
        removed++;
      }
    } else if (item && typeof item === 'object') {
      if (item.type === 'doc') {
        if (validIds.has(item.id)) {
          cleaned.push(item);
        } else {
          removed++;
        }
      } else if (item.type === 'category') {
        const cleanedSub = cleanItems(item.items || [], validIds);
        if (cleanedSub.items.length > 0) {
          cleaned.push({ ...item, items: cleanedSub.items });
        }
        removed += cleanedSub.removed;
      } else {
        cleaned.push(item);
      }
    }
  }

  return { items: cleaned, removed };
}

for (const config of CONFIGS) {
  const sidebarPath = path.join(ROOT, config.sidebar);
  const docsDir = path.join(ROOT, config.docsDir);

  delete require.cache[require.resolve(sidebarPath)];
  const sidebar = require(sidebarPath);
  const validIds = buildDocIdSet(docsDir);

  const result = cleanItems(sidebar.tutorialSidebar, validIds);
  sidebar.tutorialSidebar = result.items;

  if (result.removed > 0) {
    const comments = {
      'sidebars.js': '// Auto-generated from crawled menu structure\n',
      'sidebars-vi.js': '// Auto-generated from crawled menu structure — synced with EN sidebar order\n',
      'sidebars-ja.js': '// Japanese sidebar - synced with EN structure (sidebars.js)\n',
    };

    const json = JSON.stringify(sidebar, null, 2);
    let js = json
      .replace(/"(\w+)":/g, '$1: ')
      .replace(/: "([^"]*?)"/g, (match, val) => `: '${val.replace(/'/g, "\\'")}'`);

    const comment = comments[config.sidebar] || '';
    fs.writeFileSync(sidebarPath, `${comment}module.exports = ${js};\n`, 'utf-8');
  }

  console.log(`[${config.sidebar}] Valid IDs: ${validIds.size}, Removed: ${result.removed} invalid entries`);
}
