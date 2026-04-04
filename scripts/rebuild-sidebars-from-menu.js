#!/usr/bin/env node
/**
 * Rebuild sidebars from crawled menu-tree.json
 *
 * Strategy:
 * 1. Parse menu-tree.json (Vietnamese menu from fptcloud.com)
 * 2. Map each URL to a doc file in docs-vi/
 * 3. Generate sidebars-vi.js with exact hierarchy from web
 * 4. Generate sidebars.js (EN) and sidebars-ja.js (JA) with same structure,
 *    mapping to equivalent files in docs/ and docs-ja/
 * 5. For files not in menu, add them as "Other" categories
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const MENU = require(path.join(ROOT, 'scripts', 'menu-tree.json'));

const DIRS = {
  vi: path.join(ROOT, 'docs-vi'),
  en: path.join(ROOT, 'docs'),
  ja: path.join(ROOT, 'docs-ja'),
};

// ── Helpers ──

function extractFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return {};
    const fm = {};
    for (const line of match[1].split('\n')) {
      const m = line.match(/^(\w[\w_-]*)\s*:\s*(.+)$/);
      if (m) {
        let val = m[2].trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        fm[m[1]] = val;
      }
    }
    return fm;
  } catch { return {}; }
}

function buildDocIndex(docsDir) {
  // Map: slug → { docId, filePath, frontmatter }
  // slug is the filename without extension (e.g., "initial-setup")
  // docId includes directory prefix (e.g., "tagging/initial-setup")
  const index = {};

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
          const baseName = entry.name.slice(0, -ext.length);
          const fm = extractFrontmatter(full);
          const fmId = fm.id;

          // docId: use frontmatter id if present, else filename
          const docId = fmId
            ? (prefix ? `${prefix}/${fmId}` : fmId)
            : (prefix ? `${prefix}/${baseName}` : baseName);

          const dirName = prefix || '';
          const key = `${dirName}/${baseName}`;

          index[key] = { docId, filePath: full, baseName, dirName, fm };

          // Also index by frontmatter id
          if (fmId && fmId !== baseName) {
            index[`${dirName}/${fmId}`] = { docId, filePath: full, baseName, dirName, fm };
          }
        }
      }
    } catch {}
  }

  walk(docsDir, '');
  return index;
}

// Map menu URL module names to actual docs directory names
const MODULE_ALIASES = {
  'object-storage': 'fpt-object-storage',
  'vpn-site-to-site-0': 'vpn-site-to-site',
  'fpt-argocd-3': 'fpt-argocd',
  'fpt-container-registry-2': 'fpt-container-registry',
  'create_vpc': 'create-vpc',
  'managed-fpt-database-engines-new': 'managed-fpt-database-engine',
};

// JA-specific: some directories use Japanese names
const JA_MODULE_ALIASES = {
  ...MODULE_ALIASES,
  'tagging': 'タグ-付け',
};

// Map orphaned doc directories to their correct parent category
// Format: 'dir-name': 'L1 > L2' (or just 'L1' for top-level placement)
// When L2 is specified, the module is placed INSIDE that L2 category as L3
const DIR_TO_PARENT = {
  // Sub-features of Cloud Server (L3 inside L2 "Cloud Server")
  'affinity-anti-affinity': 'FPT Cloud Server > Cloud Server',
  'allow-address-pair': 'FPT Cloud Server > Cloud Server',
  'auto-schedule-to-on-off-instance': 'FPT Cloud Server > Cloud Server',
  'change-network-config': 'FPT Cloud Server > Cloud Server',
  'lock-unlock-instance-deletion': 'FPT Cloud Server > Cloud Server',
  'nic': 'FPT Cloud Server > Cloud Server',
  'notification-bell': 'FPT Cloud Server > Cloud Server',

  // Sub-features of Cloud Server (L3)
  'fpt-cloud-portal': 'FPT Cloud Server > Cloud Server',
  'terraform': 'FPT Cloud Server > Cloud Server',
  'user-token': 'FPT Cloud Server > Cloud Server',
  'relation-management': 'FPT Cloud Server > Cloud Server',

  // FPT Network
  'vpn-site-to-site': 'FPT Network',
  'create-vpc': 'FPT Network',

  // These belong to Cloud Server, not Network
  'nat_instance': 'FPT Cloud Server > Cloud Server',
  'gateway': 'FPT Cloud Server > Cloud Server',

  // FPT Container
  'fpt-container-registry': 'FPT Container',

  // These need review — move to top-level "Other" for now
  // 'gpu-container': AI Factory related
  // 'gpu-virtual-machine-en': Cloud Server related
  // 'managed-gpu-cluster-kubernetes-ja': duplicate of fpt-managed-gpu-cluster (JA)
  // 'metal-cloud-ja': JA-only bare metal service

  // FPT Security
  'fpt-monitoring-ip-access-control': 'FPT Security',
  'fpt-cloud-waf': 'FPT Security',
  'fpt-cloud-wapples': 'FPT Security',
  'fpt-va': 'FPT Security',
  'fortigate-fpt-ngfw': 'FPT Security',
  'ddos-protection': 'FPT Security',
  'checkpoint-fpt-ngfw': 'FPT Security',

  // FPT Monitoring
  'huong-dan-su-dung-grafana': 'FPT Monitoring > FPT Cloud Monitoring',
  'incident-management': 'FPT Monitoring',
  'cloud-advisor': 'FPT Monitoring > FPT Cloud Guard',

  // FPT Integration
  'fpt-message-bus': 'FPT Integration',
  'fpt-kafka': 'FPT Integration',
  'fpt-event-gateway': 'FPT Integration',
  'fpt-api-gateway': 'FPT Integration',
  'fpt-app-catalogs': 'FPT Integration',

  // Billing
  'budget-alert': 'Billing',
  'cost-explorer': 'Billing',
  'billing': 'Billing',

  // FPT DevSecOps Services
  'fpt-key-vault': 'FPT DevSecOps Services',
  'fpt-jenkins-ci': 'FPT DevSecOps Services',
  'fpt-argocd': 'FPT DevSecOps Services',

  // FPT Database Engine
  'managed-fpt-database-engine': 'FPT Database Engine',
  'managed-fpt-database-engines-new': 'FPT Database Engine',

  // FPT AI Factory
  'ai-factory-billing': 'FPT AI Factory',
  'ai-notebook': 'FPT AI Factory',
  'ai_marketplace': 'FPT AI Factory',
  'data-hub': 'FPT AI Factory',
  'model-hub': 'FPT AI Factory',
  'model-serving': 'FPT AI Factory',
  'model-fine-tuning': 'FPT AI Factory',
  'model-testing-interactive-sessions': 'FPT AI Factory',
  'model-testing-test-jobs': 'FPT AI Factory',
  'モデルテスト': 'FPT AI Factory',

  // Support
  'trellix-customer-guide': 'Support',
  'zalo-ticket-support': 'Support',
  'end-user-request-resource': 'Support',
  'iac-old': 'Support',

  // FPT Cloud Backup & DR
  'backup': 'FPT Cloud Backup & DR',
  'fpt-backup-as-a-service': 'FPT Cloud Backup & DR',

  // FPT Storage
  'fpt-object-storage': 'FPT Storage',
  'file-storage-high-performance': 'FPT Storage',

  // FPT Cloud Server — direct L2
  'cloud-server': 'FPT Cloud Server',
  'tagging': 'FPT Cloud Server',
  'sso-single-sign-on': 'FPT Cloud Server',
  'policy-management': 'FPT Cloud Server',
  'global-search': 'FPT Cloud Server',
  'fpt-cloud-desktop': 'FPT Cloud Server',
  'fpt-autoscale': 'FPT Cloud Server',
  'fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go': 'FPT Cloud Server',

  // FPT Monitoring
  'fpt-cloud-monitoring': 'FPT Monitoring',
  'cloud-guard': 'FPT Monitoring',
  'reporting': 'FPT Monitoring',

  // FPT Container
  'managed-fpt-kubernetes-engine': 'FPT Container',
  'fpt-kubernetes-engine-with-gpu': 'FPT Container',
  'fpt-container-registry': 'FPT Container',
  'dedicated-fpt-kubernetes-engine': 'FPT Container',

  // FPT Security Platform
  'fpt-appsec': 'FPT Security Platform',

  // IAM → FPT Security
  'iam': 'FPT Security',

  // FPT Integration
  'fpt-api-management': 'FPT Integration',

  // FPT Data Platform
  'fpt-data-platform': 'FPT Data Platform',
};

function parseMenuUrl(url, lang) {
  if (!url) return null;
  try {
    const u = new URL(url);
    // Extract module from path: /documents/{module}/
    const pathMatch = u.pathname.match(/\/documents\/([^/]+)\/?$/);
    if (!pathMatch) return null;
    let module = decodeURIComponent(pathMatch[1]);

    // Apply aliases
    const aliases = lang === 'ja' ? JA_MODULE_ALIASES : MODULE_ALIASES;
    if (aliases[module]) module = aliases[module];

    // Extract doc slug from query: ?doc={slug}
    const doc = u.searchParams.get('doc');
    return { module, doc: doc ? decodeURIComponent(doc).trim() : null };
  } catch { return null; }
}

// ── Build sidebar from menu ──

function menuItemToSidebar(item, docIndex, lang, stats) {
  const parsed = parseMenuUrl(item.url, lang);

  if (item.children && item.children.length > 0) {
    // Category with children
    const childItems = [];

    for (const child of item.children) {
      const result = menuItemToSidebar(child, docIndex, lang, stats);
      if (result) childItems.push(result);
    }

    // If this category itself has a URL (L2 page), add it as first item
    if (parsed && parsed.doc) {
      const key = `${parsed.module}/${parsed.doc}`;
      const doc = docIndex[key];
      if (doc) {
        const label = getLabel(doc, item.label, lang);
        childItems.unshift({ type: 'doc', id: doc.docId, label });
        stats.matched++;
      } else {
        stats.missing.push(`${parsed.module}/${parsed.doc}`);
      }
    }

    if (childItems.length > 0) {
      return {
        type: 'category',
        label: item.label,
        collapsed: true,
        items: childItems,
      };
    }

    // Empty category - skip it
    return null;
  }

  // Leaf item (no children)
  if (!parsed) return null;

  if (parsed.doc) {
    // L3/L4 doc
    const key = `${parsed.module}/${parsed.doc}`;
    const doc = docIndex[key];
    if (doc) {
      stats.matched++;
      const label = getLabel(doc, item.label, lang);
      return { type: 'doc', id: doc.docId, label };
    } else {
      stats.missing.push(`${parsed.module}/${parsed.doc}`);
      return null;
    }
  } else {
    // L2 category page (no ?doc=) - look for index
    const indexDoc = docIndex[`${parsed.module}/index`];
    if (indexDoc) {
      stats.matched++;
      const label = getLabel(indexDoc, item.label, lang);
      return { type: 'doc', id: indexDoc.docId, label };
    }
    // No index file, return null (category will be created by parent)
    return null;
  }
}

function getLabel(doc, fallbackLabel, lang) {
  if (lang === 'vi') return doc.fm.sidebar_label || doc.fm.title || fallbackLabel;
  if (lang === 'en') return doc.fm.sidebar_label || doc.fm.title || fallbackLabel;
  if (lang === 'ja') return doc.fm.sidebar_label || doc.fm.title || fallbackLabel;
  return fallbackLabel;
}

// ── Find files not covered by menu ──

function collectUsedDocIds(items) {
  const ids = new Set();
  function walk(list) {
    if (!Array.isArray(list)) return;
    for (const item of list) {
      if (item.type === 'doc' && item.id) ids.add(item.id);
      if (item.items) walk(item.items);
    }
  }
  walk(items);
  return ids;
}

function addOrphanedFiles(sidebarItems, docIndex, usedIds, lang) {
  // Group orphaned files by directory
  const orphaned = {};
  for (const [key, doc] of Object.entries(docIndex)) {
    if (usedIds.has(doc.docId)) continue;
    // Avoid duplicate entries (same docId via different keys)
    if (!doc.dirName) continue;
    const dir = doc.dirName;
    if (!orphaned[dir]) orphaned[dir] = new Map();
    if (!orphaned[dir].has(doc.docId)) {
      const label = doc.fm.sidebar_label || doc.fm.title || doc.baseName;
      const position = doc.fm.sidebar_position ? parseInt(doc.fm.sidebar_position, 10) : 999;
      orphaned[dir].set(doc.docId, { docId: doc.docId, label, position });
    }
  }

  let addedCount = 0;

  // Find the L2 (module-level) category for this directory.
  // Only match categories at depth 1-2 to avoid stuffing orphaned docs
  // into L3+ subcategories like "Tutorials" or "Quick Starts".
  function findBestCategory(sidebarItems, dir) {
    let best = null;

    function search(items, depth) {
      for (const item of items) {
        if (item.type !== 'category') continue;

        // Only consider categories at depth 0-2 (L1, L2, L3 max)
        if (depth <= 2) {
          // Check if any doc (including in subcategories) belongs to this dir
          const allIds = collectUsedDocIds(item.items || []);
          let hasMatch = false;
          for (const id of allIds) {
            if (id.startsWith(dir + '/')) { hasMatch = true; break; }
          }

          if (hasMatch) {
            // At depth 0 (L1): only use if no better L2 match found
            // At depth 1-2 (L2/L3): prefer this level
            if (depth > 0 || !best) {
              best = item;
            }
          }
        }

        search(item.items || [], depth + 1);
      }
    }

    search(sidebarItems, 0);
    return best;
  }

  for (const [dir, docsMap] of Object.entries(orphaned)) {
    const docs = [...docsMap.values()].sort((a, b) => a.position - b.position);
    if (docs.length === 0) continue;

    // Find the best matching category for this directory
    const targetCat = findBestCategory(sidebarItems, dir);

    if (targetCat) {
      // Add orphaned docs as a new "Other" subcategory inside the matching L2 category,
      // NOT mixed into existing subcategories like Tutorials/Samples
      const existingIds = collectUsedDocIds(targetCat.items || []);
      const newDocs = docs.filter(d => !existingIds.has(d.docId));
      if (newDocs.length > 0) {
        // If few docs (<=3), add directly; if many, create "Other" subcategory
        if (newDocs.length <= 3) {
          for (const doc of newDocs) {
            targetCat.items.push({ type: 'doc', id: doc.docId, label: doc.label });
            usedIds.add(doc.docId);
            addedCount++;
          }
        } else {
          const otherCat = {
            type: 'category',
            label: 'Other',
            collapsed: true,
            items: newDocs.map(d => ({ type: 'doc', id: d.docId, label: d.label })),
          };
          targetCat.items.push(otherCat);
          for (const doc of newDocs) usedIds.add(doc.docId);
          addedCount += newDocs.length;
        }
      }
    } else {
      // No matching category by doc IDs — try DIR_TO_L1 mapping
      const dirLabel = dir.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
        .replace(/Fpt/g, 'FPT').replace(/Vpc/g, 'VPC').replace(/Vpn/g, 'VPN')
        .replace(/Iam/g, 'IAM').replace(/Gpu/g, 'GPU').replace(/Waf/g, 'WAF')
        .replace(/Api/g, 'API');

      const targetPath = DIR_TO_PARENT[dir];
      let parentCat = null;

      if (targetPath) {
        const parts = targetPath.split(' > ').map(s => s.trim());
        // Navigate down the path: L1 > L2 > ...
        let searchItems = sidebarItems;
        for (const part of parts) {
          let found = null;
          for (const item of searchItems) {
            if (item.type === 'category' && item.label === part) {
              found = item;
              break;
            }
          }
          if (!found) {
            // Create missing category
            found = { type: 'category', label: part, collapsed: true, items: [] };
            searchItems.push(found);
          }
          parentCat = found;
          searchItems = found.items;
        }
      }

      const newCategory = {
        type: 'category',
        label: dirLabel,
        collapsed: true,
        items: docs.map(d => ({ type: 'doc', id: d.docId, label: d.label })),
      };

      if (parentCat) {
        // Add as L2 category inside the correct L1
        parentCat.items.push(newCategory);
      } else {
        // Fallback: add to top level
        sidebarItems.push(newCategory);
      }

      for (const doc of docs) usedIds.add(doc.docId);
      addedCount += docs.length;
    }
  }

  return addedCount;
}

// ── Generate sidebar JS ──

function generateSidebarJS(sidebar, comment) {
  const json = JSON.stringify(sidebar, null, 2);
  let js = json
    .replace(/"(\w+)":/g, '$1: ')
    .replace(/: "([^"]*?)"/g, (match, val) => `: '${val.replace(/'/g, "\\'")}'`);
  return `${comment}module.exports = ${js};\n`;
}

// ── Main ──

function buildSidebarForLang(lang) {
  const docsDir = DIRS[lang];
  const docIndex = buildDocIndex(docsDir);
  const stats = { matched: 0, missing: [] };

  // Build sidebar from menu
  const sidebarItems = ['intro'];

  for (const l1 of MENU.menu) {
    const children = [];

    for (const l2 of (l1.children || [])) {
      const parsed = parseMenuUrl(l2.url, lang);
      if (!parsed) continue;

      if (l2.children && l2.children.length > 0) {
        // L2 category with L3+ children
        const l2Items = [];

        for (const child of l2.children) {
          const result = menuItemToSidebar(child, docIndex, lang, stats);
          if (result) l2Items.push(result);
        }

        if (l2Items.length > 0) {
          children.push({
            type: 'category',
            label: l2.label,
            collapsed: true,
            items: l2Items,
          });
        }
      } else {
        // L2 leaf page (no sub-items in menu, but may have files in directory)
        // Look for all files in this module directory
        const moduleFiles = [];
        for (const [key, doc] of Object.entries(docIndex)) {
          if (doc.dirName === parsed.module) {
            moduleFiles.push(doc);
          }
        }

        if (moduleFiles.length > 0) {
          // Sort by sidebar_position
          moduleFiles.sort((a, b) => {
            const posA = a.fm.sidebar_position ? parseInt(a.fm.sidebar_position, 10) : 999;
            const posB = b.fm.sidebar_position ? parseInt(b.fm.sidebar_position, 10) : 999;
            return posA - posB;
          });

          const items = moduleFiles.map(doc => ({
            type: 'doc',
            id: doc.docId,
            label: doc.fm.sidebar_label || doc.fm.title || doc.baseName,
          }));

          // Deduplicate by docId
          const seen = new Set();
          const uniqueItems = items.filter(item => {
            if (seen.has(item.id)) return false;
            seen.add(item.id);
            return true;
          });

          children.push({
            type: 'category',
            label: l2.label,
            collapsed: true,
            items: uniqueItems,
          });
          stats.matched += uniqueItems.length;
        }
      }
    }

    if (children.length > 0) {
      sidebarItems.push({
        type: 'category',
        label: l1.label,
        collapsed: true,
        items: children,
      });
    }
  }

  // Add orphaned files not in menu
  const usedIds = collectUsedDocIds(sidebarItems);
  const orphanedAdded = addOrphanedFiles(sidebarItems, docIndex, usedIds, lang);

  console.log(`[${lang.toUpperCase()}] Menu matched: ${stats.matched}, Missing: ${stats.missing.length}, Orphaned added: ${orphanedAdded}`);
  if (stats.missing.length > 0 && stats.missing.length <= 20) {
    console.log(`  Missing: ${stats.missing.join(', ')}`);
  } else if (stats.missing.length > 20) {
    console.log(`  Missing (first 20): ${stats.missing.slice(0, 20).join(', ')}`);
  }

  return { tutorialSidebar: sidebarItems };
}

// ── Run ──

console.log('=== Rebuilding sidebars from menu-tree.json ===\n');

const comments = {
  vi: '// Rebuilt from crawled menu-tree.json (fptcloud.com)\n',
  en: '// Rebuilt from crawled menu-tree.json — EN docs\n',
  ja: '// Rebuilt from crawled menu-tree.json — JA docs\n',
};

for (const lang of ['vi', 'en', 'ja']) {
  const sidebar = buildSidebarForLang(lang);
  const outFile = lang === 'en' ? 'sidebars.js' : `sidebars-${lang}.js`;
  const outPath = path.join(ROOT, outFile);
  fs.writeFileSync(outPath, generateSidebarJS(sidebar, comments[lang]), 'utf-8');
  console.log(`  Written: ${outFile}\n`);
}

console.log('=== Done! ===');
