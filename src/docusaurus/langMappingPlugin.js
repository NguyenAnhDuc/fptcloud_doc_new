/**
 * Docusaurus plugin: Language URL Mapping
 *
 * Scans all docs across EN/VI/JA, matches pages by (equivalent_section + sidebar_position),
 * and exposes the mapping as global plugin data for the LanguageSwitcher component.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import matter from 'gray-matter';

// Maps equivalent section folder names across languages.
// For EN↔VI: most folder names are the same; list exceptions here.
// For EN/VI↔JA: all differ.
const SECTION_EQUIVALENTS = [
  // [en, vi, ja]
  // --- Modules with different folder names across locales ---
  ['tagging',                         'tagging',                         'タグ-付け'],
  ['budget-alert',                     'budget-alert',                    '予算アラート'],
  ['cost-explorer',                    'cost-explorer',                   'コストエクスプローラー'],
  ['create-vpc',                       'create_vpc',                      'vpc-の作成'],
  ['vpn-site-to-site',                 'vpn-site-to-site',                'サイト間-vpn'],
  ['ai-notebook',                      null,                              'ai-notebook-jp'],
  ['ai_marketplace',                   'app-catalogs',                    'ai-marketplace-ja'],
  ['data-hub',                         null,                              'data-hub-ja'],
  ['model-fine-tuning',               null,                              'model-fine-tuning-ja'],
  ['gpu-virtual-machine-en',          null,                              'gpu-virtual-machine'],
  ['fpt-app-catalogs',                 'app-catalogs',                    null],
  ['fpt-message-bus',                  'fpt-message-bus-for-rabbitmq',    'fpt-message-bus'],
  ['fpt-object-storage',               'object-storage',                  'fpt-object-storage'],
  ['user-token',                       'token',                           'user-token'],
  [null,                               'policy-management',               'ポリシー管理'],
  [null,                               null,                              'metal-cloud-ja'],
  [null,                               null,                              'モデルテスト'],

  // --- Modules with SAME folder name across all 3 locales ---
  ['cloud-server',                     'cloud-server',                    'cloud-server'],
  ['managed-fpt-kubernetes-engine',    'managed-fpt-kubernetes-engine',   'managed-fpt-kubernetes-engine'],
  ['dedicated-fpt-kubernetes-engine',  'dedicated-fpt-kubernetes-engine', 'dedicated-fpt-kubernetes-engine'],
  ['managed-fpt-database-engine',      'managed-fpt-database-engine',     'managed-fpt-database-engine'],
  ['fpt-api-management',               'fpt-api-management',              'fpt-api-management'],
  ['iam',                              'iam',                             'iam'],
  ['load-balancer',                    'load-balancer',                   'load-balancer'],
  ['fpt-argocd',                       'fpt-argocd',                      'fpt-argocd'],
  ['fpt-cloud-waf',                    'fpt-cloud-waf',                   'fpt-cloud-waf'],
  ['fpt-container-registry',           'fpt-container-registry',          'fpt-container-registry'],
  ['fpt-kafka',                        'fpt-kafka',                       'fpt-kafka'],
  ['fpt-key-vault',                    'fpt-key-vault',                   'fpt-key-vault'],
  ['incident-management',              'incident-management',             'incident-management'],
  ['trellix-customer-guide',           'trellix-customer-guide',          'trellix-customer-guide'],
];

const LANG_CONFIGS = [
  { code: 'en', dir: 'docs',    basePath: '/docs/en' },
  { code: 'vi', dir: 'docs-vi', basePath: '/docs/vi' },
  { code: 'ja', dir: 'docs-ja', basePath: '/docs/ja' },
];

/**
 * Walk a directory recursively and return all .md/.mdx files
 */
function walkDir(dir) {
  const results = [];
  try {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        results.push(...walkDir(fullPath));
      } else if (/\.(md|mdx)$/.test(entry) && entry !== 'index.md') {
        results.push(fullPath);
      }
    }
  } catch {
    // ignore unreadable dirs
  }
  return results;
}

/**
 * Parse a doc file and extract id + sidebar_position + section
 */
function parseDoc(filePath, langDir, basePath) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const { data } = matter(content);
    const relPath = relative(langDir, filePath);
    const parts = relPath.split('/');
    const section = parts.length > 1 ? parts[0] : '';
    const sidebarPosition = data.sidebar_position ?? null;
    const docId = data.id ?? null;

    if (!docId || sidebarPosition === null) return null;

    // Build the URL path: basePath + section + docId
    const urlPath = section
      ? `${basePath}/${section}/${docId}`
      : `${basePath}/${docId}`;

    return { section, sidebarPosition, docId, urlPath };
  } catch {
    return null;
  }
}

/**
 * Build a lookup: lang → section → sidebarPosition → doc
 */
function buildSectionIndex(siteDir) {
  const index = {};
  for (const lang of LANG_CONFIGS) {
    index[lang.code] = {};
    const langDir = join(siteDir, lang.dir);
    const files = walkDir(langDir);
    for (const file of files) {
      const doc = parseDoc(file, langDir, lang.basePath);
      if (!doc) continue;
      const { section, sidebarPosition, urlPath } = doc;
      if (!index[lang.code][section]) index[lang.code][section] = {};
      index[lang.code][section][sidebarPosition] = urlPath;
    }
  }
  return index;
}

/**
 * Given a section name and language code, find equivalent section names in other languages.
 */
function findEquivalentSections(section, fromLang) {
  const fromIdx = LANG_CONFIGS.findIndex((l) => l.code === fromLang);
  if (fromIdx === -1) return {};

  for (const triple of SECTION_EQUIVALENTS) {
    if (triple[fromIdx] === section) {
      const result = {};
      for (let i = 0; i < LANG_CONFIGS.length; i++) {
        if (i !== fromIdx && triple[i]) {
          result[LANG_CONFIGS[i].code] = triple[i];
        }
      }
      return result;
    }
  }

  // No explicit mapping — assume section name is the same for en/vi, null for ja
  const result = {};
  for (const lang of LANG_CONFIGS) {
    if (lang.code !== fromLang && lang.code !== 'ja') {
      result[lang.code] = section;
    }
  }
  return result;
}

/**
 * Build the full URL → { en, vi, ja } mapping
 */
function buildMapping(sectionIndex) {
  const mapping = {};

  for (const lang of LANG_CONFIGS) {
    const langSections = sectionIndex[lang.code];
    for (const [section, posMap] of Object.entries(langSections)) {
      const equivalentSections = findEquivalentSections(section, lang.code);

      for (const [pos, urlPath] of Object.entries(posMap)) {
        if (!mapping[urlPath]) mapping[urlPath] = {};

        for (const [targetLang, targetSection] of Object.entries(equivalentSections)) {
          if (!targetSection) continue;
          const targetLangIndex = sectionIndex[targetLang];
          if (!targetLangIndex) continue;
          const targetSectionIndex = targetLangIndex[targetSection];
          if (!targetSectionIndex) continue;
          const targetUrl = targetSectionIndex[pos];
          if (targetUrl) {
            mapping[urlPath][targetLang] = targetUrl;
          }
        }
      }
    }
  }

  return mapping;
}

export default function langMappingPlugin(context) {
  return {
    name: 'lang-mapping-plugin',

    async loadContent() {
      const sectionIndex = buildSectionIndex(context.siteDir);
      return buildMapping(sectionIndex);
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData({ urlMapping: content });
    },
  };
}
