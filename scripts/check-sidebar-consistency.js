#!/usr/bin/env node
/**
 * Check sidebar consistency across EN/VI/JA:
 * 1. L1/L2 category structure match
 * 2. Label language correctness
 * 3. Doc coverage per category
 * 4. Missing categories across languages
 */

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const sidebars = {
  en: require(path.join(ROOT, 'sidebars.js')),
  vi: require(path.join(ROOT, 'sidebars-vi.js')),
  ja: require(path.join(ROOT, 'sidebars-ja.js')),
};

// Vietnamese detection
const VI_PATTERN = /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]/i;
const VI_WORDS = /\b(Hướng dẫn|Quản lý|Tạo|Xóa|Thiết lập|Khởi tạo|Chỉnh sửa|Cấu hình|Đăng ký|Đăng nhập|Nạp tiền|Xem|Câu hỏi|Bắt đầu|Tổng quan)\b/;

// Japanese detection
const JA_PATTERN = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/;

// Allowed English terms (keep in all languages)
const ALLOWED_EN = new Set([
  'tag', 'tenant', 'Instance', 'VPC', 'Subnet', 'Floating IP', 'Snapshot',
  'Load Balancer', 'Security Group', 'API', 'SDK', 'CLI', 'Dashboard',
  'Webhook', 'Token', 'SSO', 'RAM', 'CPU', 'GPU', 'bucket', 'FPT',
  'ArgoCD', 'Jenkins', 'Kubernetes', 'Docker', 'Grafana', 'Terraform',
  'Key Vault', 'WAF', 'WAPPLES', 'AppSec', 'NIC', 'NGFW', 'VPN', 'SSL',
  'NFS', 'HPC', 'IAM', 'Container Registry', 'Pipeline', 'Autoscale',
  'Profile', 'Policy', 'NLB', 'K8s', 'K8S', 'Azure', 'Cluster',
  'Alert', 'Recipient', 'Credential', 'Workspace', 'Organization',
  'Team', 'Integration', 'Schedule', 'Object Storage',
]);

function isAllowedEnglish(label) {
  // Check if label is mostly allowed English terms + product names
  let cleaned = label;
  for (const term of ALLOWED_EN) {
    cleaned = cleaned.replace(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), '');
  }
  // Remove common connectors
  cleaned = cleaned.replace(/[-–—&,./():\d\s]/g, '').trim();
  return cleaned.length < 5; // Mostly allowed terms
}

function collectCategories(items, depth = 0) {
  const cats = [];
  for (const item of items) {
    if (item.type === 'category') {
      const docCount = countDocs(item.items || []);
      const subCats = (item.items || []).filter(i => i.type === 'category');
      cats.push({
        label: item.label,
        depth,
        docCount,
        subCatCount: subCats.length,
        totalItems: (item.items || []).length,
      });
      cats.push(...collectCategories(item.items || [], depth + 1));
    }
  }
  return cats;
}

function countDocs(items) {
  let count = 0;
  for (const item of items) {
    if (item.type === 'doc') count++;
    if (item.items) count += countDocs(item.items);
  }
  return count;
}

function collectLabels(items, lang, issues, path = '') {
  for (const item of items) {
    const label = item.label || '';
    const loc = path ? `${path} > ${label}` : label;

    if (item.type === 'category' || item.type === 'doc') {
      if (label && !isAllowedEnglish(label)) {
        if (lang === 'en' && (VI_PATTERN.test(label) || VI_WORDS.test(label))) {
          issues.push({ lang, type: 'WRONG_LANG', label, expected: 'English', found: 'Vietnamese', location: loc });
        }
        if (lang === 'en' && JA_PATTERN.test(label)) {
          issues.push({ lang, type: 'WRONG_LANG', label, expected: 'English', found: 'Japanese', location: loc });
        }
        if (lang === 'vi' && !VI_PATTERN.test(label) && !VI_WORDS.test(label) && !isAllowedEnglish(label) && label.length > 3) {
          // Pure English that's not an allowed term
          issues.push({ lang, type: 'WRONG_LANG', label, expected: 'Vietnamese', found: 'English', location: loc });
        }
        if (lang === 'ja' && (VI_PATTERN.test(label) || VI_WORDS.test(label))) {
          issues.push({ lang, type: 'WRONG_LANG', label, expected: 'Japanese', found: 'Vietnamese', location: loc });
        }
      }
    }

    if (item.items) {
      collectLabels(item.items, lang, issues, loc);
    }
  }
}

// ── Main Report ──

console.log('╔══════════════════════════════════════════════════════════════════╗');
console.log('║           SIDEBAR CONSISTENCY CHECK REPORT                      ║');
console.log('╚══════════════════════════════════════════════════════════════════╝\n');

// 1. L1 Category comparison
console.log('┌──────────────────────────────────────────────────────────────────┐');
console.log('│  L1 CATEGORIES                                                   │');
console.log('└──────────────────────────────────────────────────────────────────┘\n');

const allL1 = new Set();
const l1Data = {};
for (const [lang, s] of Object.entries(sidebars)) {
  for (const item of s.tutorialSidebar) {
    if (item.type === 'category') {
      allL1.add(item.label);
      if (!l1Data[item.label]) l1Data[item.label] = {};
      l1Data[item.label][lang] = {
        items: (item.items || []).length,
        docs: countDocs(item.items || []),
      };
    }
  }
}

console.log('  ' + 'Category'.padEnd(35) + 'VI L2/Docs'.padStart(12) + 'EN L2/Docs'.padStart(12) + 'JA L2/Docs'.padStart(12) + '  Status');
console.log('  ' + '─'.repeat(75));

let l1Issues = 0;
for (const label of [...allL1].sort()) {
  const vi = l1Data[label]?.vi;
  const en = l1Data[label]?.en;
  const ja = l1Data[label]?.ja;
  const viStr = vi ? `${vi.items}/${vi.docs}` : '-';
  const enStr = en ? `${en.items}/${en.docs}` : '-';
  const jaStr = ja ? `${ja.items}/${ja.docs}` : '-';

  let status = '  OK';
  if (!vi || !en || !ja) { status = '  MISSING'; l1Issues++; }
  else if (vi.items !== en.items || en.items !== ja.items) { status = '  MISMATCH'; l1Issues++; }

  console.log('  ' + label.padEnd(35) + viStr.padStart(12) + enStr.padStart(12) + jaStr.padStart(12) + status);
}

console.log(`\n  L1 issues: ${l1Issues}\n`);

// 2. L2 Category comparison per L1
console.log('┌──────────────────────────────────────────────────────────────────┐');
console.log('│  L2 CATEGORIES (per L1)                                          │');
console.log('└──────────────────────────────────────────────────────────────────┘\n');

let l2Issues = 0;
for (const l1Label of [...allL1].sort()) {
  const l2Labels = new Set();
  const l2Data = {};

  for (const [lang, s] of Object.entries(sidebars)) {
    const l1 = s.tutorialSidebar.find(i => i.type === 'category' && i.label === l1Label);
    if (!l1) continue;
    for (const item of (l1.items || [])) {
      if (item.type === 'category') {
        l2Labels.add(item.label);
        if (!l2Data[item.label]) l2Data[item.label] = {};
        l2Data[item.label][lang] = countDocs(item.items || []);
      }
    }
  }

  if (l2Labels.size === 0) continue;

  let hasIssue = false;
  for (const l2 of l2Labels) {
    const vi = l2Data[l2]?.vi;
    const en = l2Data[l2]?.en;
    const ja = l2Data[l2]?.ja;
    if (vi === undefined || en === undefined || ja === undefined) { hasIssue = true; break; }
  }

  if (hasIssue) {
    console.log(`  [${l1Label}]`);
    for (const l2 of [...l2Labels].sort()) {
      const vi = l2Data[l2]?.vi ?? '-';
      const en = l2Data[l2]?.en ?? '-';
      const ja = l2Data[l2]?.ja ?? '-';
      const miss = (vi === '-' || en === '-' || ja === '-') ? ' <<<' : '';
      if (miss) l2Issues++;
      console.log('    ' + l2.padEnd(40) + `VI:${String(vi).padStart(3)} EN:${String(en).padStart(3)} JA:${String(ja).padStart(3)}${miss}`);
    }
    console.log();
  }
}

console.log(`  L2 cross-lang issues: ${l2Issues}\n`);

// 3. Language label issues
console.log('┌──────────────────────────────────────────────────────────────────┐');
console.log('│  LABEL LANGUAGE CHECK                                            │');
console.log('└──────────────────────────────────────────────────────────────────┘\n');

const langIssues = [];
for (const [lang, s] of Object.entries(sidebars)) {
  collectLabels(s.tutorialSidebar, lang, langIssues);
}

if (langIssues.length === 0) {
  console.log('  No language mixing issues found! All labels are in correct language.\n');
} else {
  const byLang = {};
  for (const issue of langIssues) {
    if (!byLang[issue.lang]) byLang[issue.lang] = [];
    byLang[issue.lang].push(issue);
  }
  for (const [lang, issues] of Object.entries(byLang)) {
    console.log(`  [${lang.toUpperCase()}] ${issues.length} issues:`);
    for (const issue of issues.slice(0, 10)) {
      console.log(`    "${issue.label}" — expected ${issue.expected}, found ${issue.found}`);
    }
    if (issues.length > 10) console.log(`    ... and ${issues.length - 10} more`);
    console.log();
  }
}

// 4. Summary
console.log('┌──────────────────────────────────────────────────────────────────┐');
console.log('│  SUMMARY                                                         │');
console.log('└──────────────────────────────────────────────────────────────────┘\n');

for (const [lang, s] of Object.entries(sidebars)) {
  const cats = collectCategories(s.tutorialSidebar);
  const l1Cats = cats.filter(c => c.depth === 0);
  const l2Cats = cats.filter(c => c.depth === 1);
  const l3Cats = cats.filter(c => c.depth === 2);
  const totalDocs = countDocs(s.tutorialSidebar);
  console.log(`  [${lang.toUpperCase()}] ${l1Cats.length} L1, ${l2Cats.length} L2, ${l3Cats.length} L3+ categories, ${totalDocs} total docs`);
}

console.log(`\n  L1 structure issues: ${l1Issues}`);
console.log(`  L2 cross-lang issues: ${l2Issues}`);
console.log(`  Label language issues: ${langIssues.length}`);
console.log(`\n  Overall: ${l1Issues + l2Issues + langIssues.length === 0 ? 'ALL CLEAR!' : (l1Issues + l2Issues + langIssues.length) + ' issues to review'}`);
