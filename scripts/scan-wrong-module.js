#!/usr/bin/env node
/**
 * Scan all docs for files placed in wrong modules.
 *
 * Detection methods:
 * 1. Content references a different service URL/domain than expected
 * 2. Content mentions a product name that doesn't match the module
 * 3. File exists in one lang but content is completely different topic
 *
 * Also detect files where JA/EN content is actually from a different
 * language source (title in wrong language for the module).
 */

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const DOC_DIRS = {
  en: path.join(ROOT, 'docs'),
  vi: path.join(ROOT, 'docs-vi'),
  ja: path.join(ROOT, 'docs-ja'),
};

// Module → expected keywords in content
const MODULE_KEYWORDS = {
  'user-token': ['portal', 'cloud portal', 'fptcloud.com/portal'],
  'ai-factory-billing': ['ai.fptcloud.com', 'AI Factory', 'AI Studio'],
  'ai-notebook': ['ai.fptcloud.com', 'notebook', 'jupyter'],
  'ai_marketplace': ['ai.fptcloud.com', 'marketplace'],
  'model-hub': ['ai.fptcloud.com', 'Model Hub', 'AI Studio'],
  'model-fine-tuning': ['ai.fptcloud.com', 'fine-tun', 'pipeline'],
  'model-serving': ['ai.fptcloud.com', 'model serving', 'deployment'],
  'model-testing': ['ai.fptcloud.com', 'model test'],
  'model-testing-interactive-sessions': ['ai.fptcloud.com', 'interactive session'],
  'model-testing-test-jobs': ['ai.fptcloud.com', 'test job'],
};

// Keywords that indicate AI Factory content (should NOT be in non-AI modules)
const AI_FACTORY_MARKERS = ['ai.fptcloud.com', 'AI Studio', 'AI Factory', 'Model Fine-tuning', 'Model Hub', 'Model Serving'];
const AI_MODULES = new Set(['ai-factory-billing', 'ai-notebook', 'ai_marketplace', 'model-hub',
  'model-fine-tuning', 'model-serving', 'model-testing', 'model-testing-interactive-sessions',
  'model-testing-test-jobs', 'data-hub', 'gpu-container']);

// Language detection
const JA_PAT = /[\u3040-\u309F\u30A0-\u30FF]/;
const VI_PAT = /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]/i;

function parseFm(c) {
  const m = c.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = {};
  for (const l of m[1].split('\n')) {
    const mm = l.match(/^(\w[\w_-]*)\s*:\s*(.+)$/);
    if (mm) { let v = mm[2].trim(); if (v.startsWith('"')) v = v.slice(1, -1); fm[mm[1]] = v; }
  }
  return fm;
}

function getBody(c) {
  const m = c.match(/^---\n[\s\S]*?\n---\n?([\s\S]*)$/);
  return m ? m[1] : c;
}

const issues = [];

for (const [lang, docsDir] of Object.entries(DOC_DIRS)) {
  function walk(dir, prefix) {
    try {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.name.startsWith('.')) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) { walk(full, prefix ? `${prefix}/${entry.name}` : entry.name); continue; }
        if (!entry.name.endsWith('.md')) continue;

        const content = fs.readFileSync(full, 'utf-8');
        const fm = parseFm(content);
        const body = getBody(content);
        const section = prefix || '_root';
        const title = fm.title || '';

        // Check 1: AI Factory content in non-AI module
        if (!AI_MODULES.has(section)) {
          const aiMarkers = AI_FACTORY_MARKERS.filter(k => body.includes(k) || content.includes(k));
          if (aiMarkers.length >= 2) {
            issues.push({
              type: 'WRONG_MODULE',
              lang, file: `${section}/${entry.name}`, title,
              detail: `AI Factory content in ${section} (markers: ${aiMarkers.join(', ')})`,
              suggestion: 'Move to AI Factory module',
            });
          }
        }

        // Check 2: Wrong language title
        if (lang === 'en' && (JA_PAT.test(title) || VI_PAT.test(title))) {
          issues.push({
            type: 'WRONG_LANG_TITLE',
            lang, file: `${section}/${entry.name}`, title,
            detail: `EN file has ${JA_PAT.test(title) ? 'Japanese' : 'Vietnamese'} title`,
            suggestion: 'Fix title or regenerate from correct source',
          });
        }
        if (lang === 'vi' && JA_PAT.test(title)) {
          issues.push({
            type: 'WRONG_LANG_TITLE',
            lang, file: `${section}/${entry.name}`, title,
            detail: 'VI file has Japanese title',
            suggestion: 'Fix title or regenerate from correct source',
          });
        }
        if (lang === 'ja' && VI_PAT.test(title)) {
          issues.push({
            type: 'WRONG_LANG_TITLE',
            lang, file: `${section}/${entry.name}`, title,
            detail: 'JA file has Vietnamese title',
            suggestion: 'Fix title or regenerate from correct source',
          });
        }

        // Check 3: JA content in non-JA docs (body has mostly Japanese)
        if (lang !== 'ja') {
          const jaChars = (body.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/g) || []).length;
          const totalChars = body.replace(/\s/g, '').length;
          if (totalChars > 100 && jaChars / totalChars > 0.3) {
            issues.push({
              type: 'WRONG_LANG_CONTENT',
              lang, file: `${section}/${entry.name}`, title,
              detail: `${lang.toUpperCase()} file has ${(jaChars/totalChars*100).toFixed(0)}% Japanese body content`,
              suggestion: 'Delete and recreate from correct source',
            });
          }
        }

        // Check 4: VI content in JA docs (body has mostly Vietnamese)
        if (lang === 'ja') {
          const viChars = (body.match(/[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]/gi) || []).length;
          const totalChars = body.replace(/\s/g, '').length;
          if (totalChars > 100 && viChars / totalChars > 0.02) {
            issues.push({
              type: 'WRONG_LANG_CONTENT',
              lang, file: `${section}/${entry.name}`, title,
              detail: `JA file has Vietnamese body content (${viChars} VI chars)`,
              suggestion: 'Delete and recreate from correct source',
            });
          }
        }
      }
    } catch {}
  }
  walk(docsDir, '');
}

// Report
console.log('╔══════════════════════════════════════════════════════════════════╗');
console.log('║           WRONG MODULE / WRONG LANGUAGE SCAN                     ║');
console.log('╚══════════════════════════════════════════════════════════════════╝\n');

const byType = {};
for (const i of issues) {
  if (!byType[i.type]) byType[i.type] = [];
  byType[i.type].push(i);
}

for (const [type, items] of Object.entries(byType)) {
  console.log(`┌─ ${type}: ${items.length} issues`);
  // Group by lang
  const byLang = {};
  for (const i of items) { if (!byLang[i.lang]) byLang[i.lang] = []; byLang[i.lang].push(i); }
  for (const [lang, langItems] of Object.entries(byLang)) {
    console.log(`│  [${lang.toUpperCase()}] ${langItems.length} files:`);
    for (const i of langItems.slice(0, 10)) {
      console.log(`│    ${i.file}`);
      console.log(`│      ${i.detail}`);
    }
    if (langItems.length > 10) console.log(`│    ... +${langItems.length - 10} more`);
  }
  console.log('└\n');
}

// Summary
console.log('=== SUMMARY ===');
console.log('Wrong module: ' + (byType.WRONG_MODULE || []).length);
console.log('Wrong language title: ' + (byType.WRONG_LANG_TITLE || []).length);
console.log('Wrong language content: ' + (byType.WRONG_LANG_CONTENT || []).length);
console.log('Total issues: ' + issues.length);

// CSV
const rows = ['type,lang,file,title,detail,suggestion'];
for (const i of issues) {
  rows.push(`${i.type},${i.lang},"${i.file}","${(i.title||'').replace(/"/g,"'")}","${i.detail}","${i.suggestion}"`);
}
fs.writeFileSync(path.join(ROOT, 'wrong-module-scan.csv'), rows.join('\n'));
console.log('\nCSV: wrong-module-scan.csv (' + (rows.length - 1) + ' rows)');
