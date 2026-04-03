#!/usr/bin/env node
/**
 * Flatten categories that have only 1 child:
 * - Category with 1 doc → replace category with the doc
 * - Category with 1 sub-category → promote sub-category up
 */

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const FILES = ['sidebars.js', 'sidebars-vi.js', 'sidebars-ja.js'];

function flatten(items, depth = 0) {
  const result = [];
  let count = 0;

  for (const item of items) {
    if (item.type === 'category' && item.items) {
      // First, recursively flatten children
      const { items: flatChildren, count: childCount } = flatten(item.items, depth + 1);
      count += childCount;
      item.items = flatChildren;

      // Now check if this category has only 1 child
      if (item.items.length === 1) {
        const child = item.items[0];

        if (child.type === 'doc') {
          // Category with 1 doc → replace with doc directly
          // But only if it's NOT a top-level L1 category (depth > 0)
          // and the category label adds no meaningful grouping
          if (depth > 0) {
            result.push(child);
            count++;
            continue;
          }
        }

        if (child.type === 'category') {
          // Category with 1 sub-category → promote sub-category
          // Merge label: "Parent > Child" or just use child label
          result.push(child);
          count++;
          continue;
        }
      }

      // Keep category as-is (has 2+ children or is top-level)
      result.push(item);
    } else {
      result.push(item);
    }
  }

  return { items: result, count };
}

for (const file of FILES) {
  const filePath = path.join(ROOT, file);
  delete require.cache[require.resolve(filePath)];
  const sidebar = require(filePath);

  const { items: flatItems, count } = flatten(sidebar.tutorialSidebar);
  sidebar.tutorialSidebar = flatItems;

  if (count > 0) {
    const json = JSON.stringify(sidebar, null, 2);
    let js = json
      .replace(/"(\w+)":/g, '$1: ')
      .replace(/: "([^"]*?)"/g, (m, v) => ':  "' + v + '"');

    const comments = {
      'sidebars.js': '// Rebuilt from crawled menu-tree.json — EN docs\n',
      'sidebars-vi.js': '// Rebuilt from crawled menu-tree.json (fptcloud.com)\n',
      'sidebars-ja.js': '// Japanese sidebar - synced with EN structure\n',
    };

    fs.writeFileSync(filePath, (comments[file] || '') + 'module.exports = ' + js + ';\n');
  }

  console.log(`[${file}] Flattened ${count} single-child categories`);
}

// Verify
for (const file of FILES) {
  const filePath = path.join(ROOT, file);
  delete require.cache[require.resolve(filePath)];
  require(filePath);
}
console.log('\nAll syntax OK');
