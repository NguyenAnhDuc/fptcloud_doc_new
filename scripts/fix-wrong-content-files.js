#!/usr/bin/env node
/**
 * Fix files with wrong language content/titles.
 *
 * For each file flagged in wrong-module-scan.csv:
 * 1. WRONG_LANG_TITLE: Find VI source, use its content, generate EN/JA title from docId
 * 2. WRONG_LANG_CONTENT: Find correct-language source for the same docId, replace body
 * 3. WRONG_MODULE: Report only (manual fix)
 *
 * Priority: Use VI as source of truth (per style guide), translate title for EN/JA
 * If VI doesn't have the file, use EN. Never use JA as source for VI/EN.
 */

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const DOC_DIRS = {
  en: path.join(ROOT, 'docs'),
  vi: path.join(ROOT, 'docs-vi'),
  ja: path.join(ROOT, 'docs-ja'),
};

const JA_PAT = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/;
const VI_PAT = /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]/i;

const SECTION_ALIASES = { 'タグ-付け': 'tagging' };
function normSection(s) { return SECTION_ALIASES[s] || s; }

function parseFm(c) {
  const m = c.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = {};
  for (const l of m[1].split('\n')) {
    const mm = l.match(/^(\w[\w_-]*)\s*:\s*(.+)$/);
    if (mm) { let v = mm[2].trim(); if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1); fm[mm[1]] = v; }
  }
  return fm;
}

function getBody(c) {
  const m = c.match(/^---\n[\s\S]*?\n---\n?([\s\S]*)$/);
  return m ? m[1].trim() : c.trim();
}

function getFrontmatterBlock(c) {
  const m = c.match(/^(---\n[\s\S]*?\n---)/);
  return m ? m[1] : '';
}

function buildFm(fm) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(fm)) {
    lines.push(`${k}: "${v}"`);
  }
  lines.push('---');
  return lines.join('\n');
}

function titleFromDocId(docId) {
  return docId.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

// Build index: normSection/docId → { en, vi, ja } each with { filePath, fm, body }
function buildIndex() {
  const index = {};
  for (const [lang, dir] of Object.entries(DOC_DIRS)) {
    function walk(d, prefix) {
      try {
        for (const e of fs.readdirSync(d, { withFileTypes: true })) {
          if (e.name.startsWith('.')) continue;
          const full = path.join(d, e.name);
          if (e.isDirectory()) { walk(full, prefix ? `${prefix}/${e.name}` : e.name); continue; }
          if (!e.name.endsWith('.md')) continue;
          const content = fs.readFileSync(full, 'utf-8');
          const fm = parseFm(content);
          const body = getBody(content);
          const sec = normSection(prefix || '_root');
          const docId = fm.id || e.name.replace(/\.md$/, '');
          const key = `${sec}/${docId}`;
          if (!index[key]) index[key] = {};
          index[key][lang] = { filePath: full, fm, body, bytes: body.length, lang };
        }
      } catch {}
    }
    walk(dir, '');
  }
  return index;
}

// ── Main ──
console.log('Building index...');
const index = buildIndex();

let fixed = 0, skipped = 0;
const report = [];

for (const [key, langs] of Object.entries(index)) {
  const [section, ...rest] = key.split('/');
  const docId = rest.join('/');

  for (const [lang, doc] of Object.entries(langs)) {
    const title = doc.fm.title || '';
    const body = doc.body;
    const bodyChars = body.replace(/\s/g, '').length;

    // Detect wrong language
    let isWrongTitle = false;
    let isWrongContent = false;

    if (lang === 'en') {
      isWrongTitle = JA_PAT.test(title) || VI_PAT.test(title);
      const jaChars = (body.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/g) || []).length;
      const viChars = (body.match(/[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]/gi) || []).length;
      isWrongContent = bodyChars > 100 && (jaChars / bodyChars > 0.3 || viChars / bodyChars > 0.05);
    }
    if (lang === 'vi') {
      isWrongTitle = JA_PAT.test(title);
      const jaChars = (body.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/g) || []).length;
      isWrongContent = bodyChars > 100 && jaChars / bodyChars > 0.3;
    }
    if (lang === 'ja') {
      isWrongTitle = VI_PAT.test(title);
      const viChars = (body.match(/[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]/gi) || []).length;
      isWrongContent = bodyChars > 100 && viChars / bodyChars > 0.02;
    }

    if (!isWrongTitle && !isWrongContent) continue;

    // Find correct source
    // For EN: prefer VI, then original EN content if body is OK
    // For VI: prefer original VI, skip if body is JA
    // For JA: prefer EN, then VI
    const SOURCE_PRIO = { en: ['vi', 'ja'], vi: ['en', 'ja'], ja: ['en', 'vi'] };

    let source = null;
    for (const srcLang of SOURCE_PRIO[lang]) {
      if (langs[srcLang] && langs[srcLang].bytes > 100) {
        const srcTitle = langs[srcLang].fm.title || '';
        const srcBody = langs[srcLang].body;
        // Validate source isn't also wrong language
        if (srcLang === 'vi' && JA_PAT.test(srcTitle)) continue;
        if (srcLang === 'en' && JA_PAT.test(srcTitle)) continue;
        if (srcLang === 'en' && VI_PAT.test(srcTitle)) continue;
        // Check body isn't wrong language either
        const srcBodyChars = srcBody.replace(/\s/g, '').length;
        if (srcLang !== 'ja') {
          const jaInSrc = (srcBody.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/g) || []).length;
          if (srcBodyChars > 100 && jaInSrc / srcBodyChars > 0.3) continue;
        }
        source = langs[srcLang];
        break;
      }
    }

    if (!source) {
      // No clean source — just fix title if needed
      if (isWrongTitle) {
        const newTitle = titleFromDocId(docId);
        let content = fs.readFileSync(doc.filePath, 'utf-8');
        content = content.replace(/^(title:\s*)".*?"/m, `$1"${newTitle}"`);
        content = content.replace(/^(sidebar_label:\s*)".*?"/m, `$1"${newTitle}"`);
        fs.writeFileSync(doc.filePath, content);
        report.push({ action: 'TITLE_ONLY', lang, file: key, newTitle });
        fixed++;
      } else {
        skipped++;
      }
      continue;
    }

    // Generate proper title for target language
    let newTitle;
    if (lang === 'en') {
      // Use docId-based English title
      newTitle = titleFromDocId(docId);
    } else if (lang === 'vi') {
      // Use VI source title if available, else docId
      newTitle = (source.lang === 'vi') ? source.fm.title : titleFromDocId(docId);
    } else if (lang === 'ja') {
      // Use docId-based title (English is OK for JA sidebar, better than wrong language)
      newTitle = titleFromDocId(docId);
    }

    // Build new file: keep target's frontmatter structure, replace body with source body
    const newFm = {
      ...doc.fm,
      title: newTitle,
      sidebar_label: newTitle,
    };

    const newContent = buildFm(newFm) + '\n\n' + source.body + '\n';
    fs.writeFileSync(doc.filePath, newContent);

    report.push({
      action: isWrongContent ? 'CONTENT+TITLE' : 'TITLE_ONLY',
      lang, file: key,
      sourceFrom: source.lang,
      newTitle,
    });
    fixed++;
  }
}

console.log(`\nFixed: ${fixed}, Skipped: ${skipped}`);
console.log(`\nBy action:`);
const byAction = {};
for (const r of report) { byAction[r.action] = (byAction[r.action] || 0) + 1; }
console.log(byAction);

console.log(`\nBy language:`);
const byLang = {};
for (const r of report) { byLang[r.lang] = (byLang[r.lang] || 0) + 1; }
console.log(byLang);

// Sample
console.log(`\nSample fixes:`);
for (const r of report.slice(0, 10)) {
  console.log(`  [${r.lang}] ${r.action}: ${r.file} → "${r.newTitle}" ${r.sourceFrom ? '(from ' + r.sourceFrom + ')' : ''}`);
}
if (report.length > 10) console.log(`  ... +${report.length - 10} more`);
