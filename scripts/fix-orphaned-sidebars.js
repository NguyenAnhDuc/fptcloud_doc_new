#!/usr/bin/env node
/**
 * Fix orphaned files by adding them to sidebars.
 *
 * Strategy:
 * 1. Scan all .md files in each docs directory
 * 2. Extract frontmatter (id, sidebar_label, sidebar_position, title)
 * 3. Compare with existing sidebar entries to find orphaned files
 * 4. Group orphaned files by directory (module)
 * 5. For each module, check if a category already exists in the sidebar
 *    - If exists: add missing docs to it
 *    - If not: create a new category at the end
 * 6. Write updated sidebar files
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Config per language
const LANG_CONFIG = {
  en: {
    docsDir: path.join(ROOT, 'docs'),
    sidebarFile: path.join(ROOT, 'sidebars.js'),
  },
  vi: {
    docsDir: path.join(ROOT, 'docs-vi'),
    sidebarFile: path.join(ROOT, 'sidebars-vi.js'),
  },
  ja: {
    docsDir: path.join(ROOT, 'docs-ja'),
    sidebarFile: path.join(ROOT, 'sidebars-ja.js'),
  },
};

// ── Helpers ──

function extractFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;

    const fm = {};
    const lines = match[1].split('\n');
    for (const line of lines) {
      const m = line.match(/^(\w[\w_-]*)\s*:\s*(.+)$/);
      if (m) {
        let val = m[2].trim();
        // Remove quotes
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        fm[m[1]] = val;
      }
    }
    return fm;
  } catch {
    return null;
  }
}

function getAllDocFiles(docsDir) {
  const results = [];

  function walk(dir, prefix) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath, prefix ? `${prefix}/${entry.name}` : entry.name);
      } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
        const ext = path.extname(entry.name);
        const baseName = entry.name.slice(0, -ext.length);
        // Use frontmatter id if present (Docusaurus resolves as dir/frontmatter-id)
        const fm = extractFrontmatter(fullPath);
        let docId;
        if (fm && fm.id) {
          docId = prefix ? `${prefix}/${fm.id}` : fm.id;
        } else {
          docId = prefix ? `${prefix}/${baseName}` : baseName;
        }
        results.push({ docId, fullPath });
      }
    }
  }

  walk(docsDir, '');
  return results;
}

function collectSidebarIds(items) {
  const ids = new Set();

  function walk(list) {
    if (!Array.isArray(list)) return;
    for (const item of list) {
      if (typeof item === 'string') {
        ids.add(item);
      } else if (item && typeof item === 'object') {
        if (item.type === 'doc' && item.id) {
          ids.add(item.id);
        }
        if (item.items) {
          walk(item.items);
        }
      }
    }
  }

  walk(items);
  return ids;
}

function parseSidebar(filePath) {
  // We need to eval the sidebar JS file
  delete require.cache[require.resolve(filePath)];
  return require(filePath);
}

// Map directory name to a display label
function dirToLabel(dir, lang) {
  const labelMap = {
    'affinity-anti-affinity': { en: 'Affinity & Anti-Affinity', vi: 'Affinity & Anti-Affinity', ja: 'Affinity & Anti-Affinity' },
    'ai-factory-billing': { en: 'AI Factory Billing', vi: 'AI Factory Billing', ja: 'AI Factory Billing' },
    'ai-notebook': { en: 'AI Notebook', vi: 'AI Notebook', ja: 'AI Notebook' },
    'ai_marketplace': { en: 'AI Marketplace', vi: 'AI Marketplace', ja: 'AI Marketplace' },
    'allow-address-pair': { en: 'Allow Address Pair', vi: 'Allow Address Pair', ja: 'Allow Address Pair' },
    'auto-schedule-to-on-off-instance': { en: 'Auto Schedule Instance', vi: 'Tự động lên lịch bật/tắt Instance', ja: 'インスタンス自動スケジュール' },
    'cloud-server': { en: 'Cloud Server', vi: 'Cloud Server', ja: 'クラウドサーバー' },
    'fpt-cloud-portal': { en: 'FPT Cloud Portal', vi: 'FPT Cloud Portal', ja: 'FPT Cloud Portal' },
  };

  if (labelMap[dir] && labelMap[dir][lang]) {
    return labelMap[dir][lang];
  }

  // Auto-generate label from directory name
  return dir
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/Fpt/g, 'FPT')
    .replace(/Vpc/g, 'VPC')
    .replace(/Vpn/g, 'VPN')
    .replace(/Iam/g, 'IAM')
    .replace(/Gpu/g, 'GPU')
    .replace(/Waf/g, 'WAF')
    .replace(/Ssl/g, 'SSL')
    .replace(/Nlb/g, 'NLB')
    .replace(/Api/g, 'API')
    .replace(/Nfs/g, 'NFS')
    .replace(/Hpc/g, 'HPC')
    .replace(/K8s/g, 'K8S')
    .replace(/Db /g, 'DB ')
    .replace(/Ci /g, 'CI ')
    .replace(/Ip /g, 'IP ');
}

// Find if a category for this directory already exists in sidebar
function findCategoryForDir(items, dir) {
  if (!Array.isArray(items)) return null;

  for (const item of items) {
    if (item && typeof item === 'object' && item.type === 'category') {
      // Check if any doc in this category belongs to this directory
      const ids = collectSidebarIds(item.items || []);
      for (const id of ids) {
        if (id.startsWith(dir + '/')) {
          return item;
        }
      }
      // Recurse into subcategories
      const found = findCategoryForDir(item.items || [], dir);
      if (found) return found;
    }
  }
  return null;
}

// ── Main ──

function processLanguage(lang) {
  const config = LANG_CONFIG[lang];
  const sidebar = parseSidebar(config.sidebarFile);
  const sidebarItems = sidebar.tutorialSidebar;
  const existingIds = collectSidebarIds(sidebarItems);

  // Get all doc files
  const allDocs = getAllDocFiles(config.docsDir);

  // Find orphaned files
  const orphaned = allDocs.filter(d => !existingIds.has(d.docId));

  console.log(`[${lang.toUpperCase()}] Total docs: ${allDocs.length}, In sidebar: ${existingIds.size}, Orphaned: ${orphaned.length}`);

  if (orphaned.length === 0) return 0;

  // Group orphaned by directory
  const grouped = {};
  for (const doc of orphaned) {
    const parts = doc.docId.split('/');
    const dir = parts.length > 1 ? parts[0] : '_root';
    if (!grouped[dir]) grouped[dir] = [];

    // Extract frontmatter for label and position
    const fm = extractFrontmatter(doc.fullPath);
    const label = fm?.sidebar_label || fm?.title || parts[parts.length - 1];
    const position = fm?.sidebar_position ? parseInt(fm.sidebar_position, 10) : 999;

    grouped[dir].push({
      docId: doc.docId,
      label,
      position,
    });
  }

  // Sort items within each group by position
  for (const dir of Object.keys(grouped)) {
    grouped[dir].sort((a, b) => a.position - b.position);
  }

  // Add orphaned files to sidebar
  let addedCount = 0;

  for (const [dir, docs] of Object.entries(grouped)) {
    if (dir === '_root') {
      // Root-level docs - add directly to top level
      for (const doc of docs) {
        sidebarItems.push({ type: 'doc', id: doc.docId, label: doc.label });
        addedCount++;
      }
      continue;
    }

    // Find existing category for this directory
    const existingCategory = findCategoryForDir(sidebarItems, dir);

    if (existingCategory) {
      // Add to existing category
      for (const doc of docs) {
        existingCategory.items.push({ type: 'doc', id: doc.docId, label: doc.label });
        addedCount++;
      }
    } else {
      // Create new category
      const label = dirToLabel(dir, lang);
      const newCategory = {
        type: 'category',
        label,
        className: 'sidebar-migrated',
        collapsed: true,
        items: docs.map(doc => ({ type: 'doc', id: doc.docId, label: doc.label })),
      };

      // Find appropriate parent category or add to top level
      // Heuristic: add as top-level category
      sidebarItems.push(newCategory);
      addedCount += docs.length;
    }
  }

  console.log(`[${lang.toUpperCase()}] Added ${addedCount} docs to sidebar`);

  // Write updated sidebar
  const output = generateSidebarJS(sidebar, lang);
  fs.writeFileSync(config.sidebarFile, output, 'utf-8');
  console.log(`[${lang.toUpperCase()}] Written to ${config.sidebarFile}`);

  return addedCount;
}

function generateSidebarJS(sidebar, lang) {
  const comments = {
    en: '// Auto-generated from crawled menu structure\n',
    vi: '// Auto-generated from crawled menu structure — synced with EN sidebar order\n',
    ja: '// Japanese sidebar - synced with EN structure (sidebars.js)\n',
  };

  const json = JSON.stringify(sidebar, null, 2);

  // Convert JSON to JS module.exports format
  // Remove quotes from keys that don't need them
  let js = json
    .replace(/"(\w+)":/g, '$1: ')  // Remove quotes from simple keys
    .replace(/: "([^"]*?)"/g, (match, val) => {
      // Keep quotes on values, but use single quotes
      return `: '${val.replace(/'/g, "\\'")}'`;
    });

  return `${comments[lang]}module.exports = ${js};\n`;
}

// ── Run ──

console.log('=== Fixing orphaned files in sidebars ===\n');

let totalAdded = 0;
for (const lang of ['en', 'vi', 'ja']) {
  totalAdded += processLanguage(lang);
  console.log('');
}

console.log(`\n=== Done! Total added: ${totalAdded} docs ===`);
