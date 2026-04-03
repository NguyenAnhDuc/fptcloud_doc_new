/**
 * Docusaurus plugin: Language URL Mapping
 *
 * Scans all docs across EN/VI/JA, matches pages by content equivalence
 * (shared images + heading structure), and exposes the mapping as global
 * plugin data for the LanguageSwitcher component.
 *
 * Matching strategy (in priority order):
 * 1. Same filename in equivalent section directories
 * 2. Same sidebar_position within equivalent sections
 * 3. Fallback: section index page
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative, basename, extname } from 'path';
import matter from 'gray-matter';

// Maps equivalent section folder names across languages: [en, vi, ja]
// null means the section doesn't exist in that language
const SECTION_EQUIVALENTS = [
  // Different folder names across locales
  ['tagging', 'tagging', 'タグ-付け'],

  // All same folder names (majority after migration fixes)
  ['affinity-anti-affinity', 'affinity-anti-affinity', 'affinity-anti-affinity'],
  ['ai-factory-billing', 'ai-factory-billing', 'ai-factory-billing'],
  ['ai-notebook', 'ai-notebook', 'ai-notebook'],
  ['ai_marketplace', 'ai_marketplace', 'ai_marketplace'],
  ['allow-address-pair', 'allow-address-pair', 'allow-address-pair'],
  ['auto-schedule-to-on-off-instance', 'auto-schedule-to-on-off-instance', 'auto-schedule-to-on-off-instance'],
  ['backup', 'backup', 'backup'],
  ['billing', 'billing', 'billing'],
  ['budget-alert', 'budget-alert', 'budget-alert'],
  ['change-network-config', 'change-network-config', 'change-network-config'],
  ['checkpoint-fpt-ngfw', 'checkpoint-fpt-ngfw', 'checkpoint-fpt-ngfw'],
  ['cloud-advisor', 'cloud-advisor', 'cloud-advisor'],
  ['cloud-guard', 'cloud-guard', 'cloud-guard'],
  ['cloud-server', 'cloud-server', 'cloud-server'],
  ['cost-explorer', 'cost-explorer', 'cost-explorer'],
  ['create-vpc', 'create-vpc', 'create-vpc'],
  ['data-hub', 'data-hub', 'data-hub'],
  ['ddos-protection', 'ddos-protection', 'ddos-protection'],
  ['dedicated-fpt-kubernetes-engine', 'dedicated-fpt-kubernetes-engine', 'dedicated-fpt-kubernetes-engine'],
  ['end-user-request-resource', 'end-user-request-resource', 'end-user-request-resource'],
  ['file-storage-high-performance', 'file-storage-high-performance', 'file-storage-high-performance'],
  ['fortigate-fpt-ngfw', 'fortigate-fpt-ngfw', 'fortigate-fpt-ngfw'],
  ['fpt-api-gateway', 'fpt-api-gateway', 'fpt-api-gateway'],
  ['fpt-api-management', 'fpt-api-management', 'fpt-api-management'],
  ['fpt-app-catalogs', 'fpt-app-catalogs', 'fpt-app-catalogs'],
  ['fpt-appsec', 'fpt-appsec', 'fpt-appsec'],
  ['fpt-argocd', 'fpt-argocd', 'fpt-argocd'],
  ['fpt-autoscale', 'fpt-autoscale', 'fpt-autoscale'],
  ['fpt-backup-as-a-service', 'fpt-backup-as-a-service', 'fpt-backup-as-a-service'],
  ['fpt-cloud-desktop', 'fpt-cloud-desktop', 'fpt-cloud-desktop'],
  ['fpt-cloud-monitoring', 'fpt-cloud-monitoring', 'fpt-cloud-monitoring'],
  ['fpt-cloud-portal', 'fpt-cloud-portal', null],
  ['fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go', 'fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go', 'fpt-cloud-portal-pay-as-you-gofpt-cloud-portal-pay-as-you-go'],
  ['fpt-cloud-waf', 'fpt-cloud-waf', 'fpt-cloud-waf'],
  ['fpt-cloud-wapples', 'fpt-cloud-wapples', 'fpt-cloud-wapples'],
  ['fpt-container-registry', 'fpt-container-registry', 'fpt-container-registry'],
  ['fpt-event-gateway', 'fpt-event-gateway', 'fpt-event-gateway'],
  ['fpt-jenkins-ci', 'fpt-jenkins-ci', 'fpt-jenkins-ci'],
  ['fpt-kafka', 'fpt-kafka', 'fpt-kafka'],
  ['fpt-key-vault', 'fpt-key-vault', 'fpt-key-vault'],
  ['fpt-kubernetes-engine-with-gpu', 'fpt-kubernetes-engine-with-gpu', 'fpt-kubernetes-engine-with-gpu'],
  ['fpt-managed-gpu-cluster', 'fpt-managed-gpu-cluster', 'fpt-managed-gpu-cluster'],
  ['fpt-message-bus', 'fpt-message-bus', 'fpt-message-bus'],
  ['fpt-monitoring-ip-access-control', 'fpt-monitoring-ip-access-control', 'fpt-monitoring-ip-access-control'],
  ['fpt-object-storage', 'fpt-object-storage', 'fpt-object-storage'],
  ['fpt-va', 'fpt-va', 'fpt-va'],
  ['gateway', 'gateway', 'gateway'],
  ['global-search', 'global-search', 'global-search'],
  ['gpu-container', 'gpu-container', 'gpu-container'],
  ['gpu-virtual-machine-en', 'gpu-virtual-machine-en', 'gpu-virtual-machine-en'],
  ['huong-dan-su-dung-grafana', 'huong-dan-su-dung-grafana', 'huong-dan-su-dung-grafana'],
  ['iam', 'iam', 'iam'],
  ['incident-management', 'incident-management', 'incident-management'],
  ['load-balancer', 'load-balancer', 'load-balancer'],
  ['lock-unlock-instance-deletion', 'lock-unlock-instance-deletion', 'lock-unlock-instance-deletion'],
  ['managed-fpt-database-engine', 'managed-fpt-database-engine', 'managed-fpt-database-engine'],
  ['managed-fpt-database-engines-new', 'managed-fpt-database-engines-new', 'managed-fpt-database-engines-new'],
  ['managed-fpt-kubernetes-engine', 'managed-fpt-kubernetes-engine', 'managed-fpt-kubernetes-engine'],
  ['model-fine-tuning', 'model-fine-tuning', 'model-fine-tuning'],
  ['model-hub', 'model-hub', 'model-hub'],
  ['model-serving', 'model-serving', 'model-serving'],
  ['model-testing', 'model-testing', 'model-testing'],
  ['model-testing-interactive-sessions', 'model-testing-interactive-sessions', 'model-testing-interactive-sessions'],
  ['model-testing-test-jobs', 'model-testing-test-jobs', 'model-testing-test-jobs'],
  ['nat_instance', 'nat_instance', 'nat_instance'],
  ['nic', 'nic', 'nic'],
  ['notification-bell', 'notification-bell', 'notification-bell'],
  ['policy-management', 'policy-management', 'policy-management'],
  ['relation-management', 'relation-management', 'relation-management'],
  ['reporting', 'reporting', 'reporting'],
  ['sso-single-sign-on', 'sso-single-sign-on', 'sso-single-sign-on'],
  ['terraform', 'terraform', 'terraform'],
  ['trellix-customer-guide', 'trellix-customer-guide', 'trellix-customer-guide'],
  ['user-token', 'user-token', 'user-token'],
  ['vpn-site-to-site', 'vpn-site-to-site', 'vpn-site-to-site'],
  ['zalo-ticket-support', 'zalo-ticket-support', 'zalo-ticket-support'],
  ['iac-old', 'iac-old', null],
  ['managed-gpu-cluster-kubernetes-ja', null, 'managed-gpu-cluster-kubernetes-ja'],
  ['metal-cloud-ja', null, 'metal-cloud-ja'],
];

const LANG_CONFIGS = [
  { code: 'en', dir: 'docs', basePath: '/docs/en' },
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
      } else if (/\.(md|mdx)$/.test(entry)) {
        results.push(fullPath);
      }
    }
  } catch {
    // ignore unreadable dirs
  }
  return results;
}

/**
 * Parse a doc file and extract metadata
 */
function parseDoc(filePath, langDir, basePath) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const { data } = matter(content);
    const relPath = relative(langDir, filePath);
    const parts = relPath.split('/');
    const section = parts.length > 1 ? parts[0] : '';
    const fileName = basename(filePath, extname(filePath));
    const sidebarPosition = data.sidebar_position != null ? Number(data.sidebar_position) : null;
    const docId = data.id ?? fileName;

    // Build the URL path
    const urlPath = section
      ? `${basePath}/${section}/${docId}`
      : `${basePath}/${docId}`;

    return { section, fileName, sidebarPosition, docId, urlPath };
  } catch {
    return null;
  }
}

/**
 * Build index: lang → section → { byFileName, byPosition, indexUrl }
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
      const { section, fileName, sidebarPosition, urlPath } = doc;

      if (!index[lang.code][section]) {
        index[lang.code][section] = { byFileName: {}, byPosition: {}, indexUrl: null };
      }

      index[lang.code][section].byFileName[fileName] = urlPath;

      if (sidebarPosition !== null) {
        index[lang.code][section].byPosition[sidebarPosition] = urlPath;
      }

      // Track index page
      if (fileName === 'index') {
        index[lang.code][section].indexUrl = urlPath;
      }
    }
  }
  return index;
}

/**
 * Find equivalent sections for a given section and source language
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

  // No explicit mapping — assume same section name for all
  const result = {};
  for (const lang of LANG_CONFIGS) {
    if (lang.code !== fromLang) {
      result[lang.code] = section;
    }
  }
  return result;
}

/**
 * Build the full URL → { en, vi, ja } mapping
 * Priority: 1) same filename, 2) same sidebar_position, 3) section index
 */
function buildMapping(sectionIndex) {
  const mapping = {};

  for (const lang of LANG_CONFIGS) {
    const langSections = sectionIndex[lang.code];
    for (const [section, sectionData] of Object.entries(langSections)) {
      const equivalentSections = findEquivalentSections(section, lang.code);

      // Process each doc in this section
      const allDocs = { ...sectionData.byFileName };
      for (const [fileName, urlPath] of Object.entries(allDocs)) {
        if (!mapping[urlPath]) mapping[urlPath] = {};

        for (const [targetLang, targetSection] of Object.entries(equivalentSections)) {
          if (!targetSection) continue;
          const targetData = sectionIndex[targetLang]?.[targetSection];
          if (!targetData) continue;

          // Priority 1: same filename
          if (targetData.byFileName[fileName]) {
            mapping[urlPath][targetLang] = targetData.byFileName[fileName];
            continue;
          }

          // Priority 2: same sidebar_position
          const pos = Object.entries(sectionData.byFileName)
            .find(([fn]) => fn === fileName);
          if (pos) {
            const posNum = Object.entries(sectionData.byPosition)
              .find(([, url]) => url === urlPath)?.[0];
            if (posNum && targetData.byPosition[posNum]) {
              mapping[urlPath][targetLang] = targetData.byPosition[posNum];
              continue;
            }
          }

          // Priority 3: fallback to section index
          if (targetData.indexUrl) {
            mapping[urlPath][targetLang] = targetData.indexUrl;
          } else {
            // Fallback: target language base path for this section
            const targetBasePath = LANG_CONFIGS.find(l => l.code === targetLang)?.basePath;
            if (targetBasePath) {
              mapping[urlPath][targetLang] = `${targetBasePath}/${targetSection}/`;
            }
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
