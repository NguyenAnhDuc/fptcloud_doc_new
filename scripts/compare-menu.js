#!/usr/bin/env node
/**
 * Compare crawled menu structure (from fptcloud.com) with current Docusaurus sidebars.
 *
 * Matching strategy (in order):
 * 1. Exact slug match (?doc= param == sidebar doc ID last segment)
 * 2. Case-insensitive slug match
 * 3. Normalized label match (remove diacritics, lowercase, trim)
 * 4. Fuzzy label match (>80% token overlap)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const crawled = JSON.parse(fs.readFileSync(path.join(__dirname, 'menu-tree.json'), 'utf-8'));

const SIDEBARS = [
  { code: 'vi', file: 'sidebars-vi.js', label: 'Vietnamese' },
  { code: 'en', file: 'sidebars.js', label: 'English' },
  { code: 'ja', file: 'sidebars-ja.js', label: 'Japanese' },
];

// ── Normalize for matching ──────────────────────────────────────────

function normalize(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[đĐ]/g, 'd')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(str) {
  return normalize(str).split(' ').filter(t => t.length > 1);
}

function tokenOverlap(a, b) {
  const tokA = new Set(tokenize(a));
  const tokB = new Set(tokenize(b));
  if (tokA.size === 0 || tokB.size === 0) return 0;
  const intersection = [...tokA].filter(t => tokB.has(t)).length;
  const union = new Set([...tokA, ...tokB]).size;
  return intersection / union; // Jaccard
}

// ── Extract crawled pages ───────────────────────────────────────────

function extractCrawled(menu) {
  const pages = []; // { slug, label, module, category, normalizedLabel }

  for (const cat of menu) {
    for (const l2 of (cat.children || [])) {
      let moduleSlug = '';
      if (l2.url) {
        const m = l2.url.match(/\/documents\/([^/?]+)/);
        if (m) moduleSlug = m[1];
      }

      function walk(items) {
        for (const item of items) {
          if (item.url) {
            try {
              const u = new URL(item.url);
              const doc = u.searchParams.get('doc');
              if (doc) {
                pages.push({
                  slug: doc,
                  label: item.label,
                  normalizedLabel: normalize(item.label),
                  module: l2.label,
                  moduleSlug,
                  category: cat.label,
                });
              }
            } catch (e) { /* skip */ }
          }
          walk(item.children || []);
        }
      }
      walk(l2.children || []);
    }
  }
  return pages;
}

// ── Extract sidebar pages ───────────────────────────────────────────

function extractSidebar(sidebarModule) {
  const pages = []; // { slug, fullId, label, folder, normalizedLabel }

  function walk(item, parentLabel) {
    if (typeof item === 'string') {
      const slug = item.split('/').pop();
      pages.push({ slug, fullId: item, label: null, normalizedLabel: '', folder: item.split('/')[0] || '', parent: parentLabel });
      return;
    }
    if (item.type === 'doc' && item.id) {
      const slug = item.id.split('/').pop();
      pages.push({ slug, fullId: item.id, label: item.label || null, normalizedLabel: normalize(item.label || ''), folder: item.id.split('/')[0] || '', parent: parentLabel });
      return;
    }
    if (item.label && item.items) {
      for (const child of item.items) walk(child, item.label);
      return;
    }
    if (Array.isArray(item)) {
      for (const child of item) walk(child, parentLabel);
    }
  }

  for (const val of Object.values(sidebarModule)) {
    if (Array.isArray(val)) val.forEach(i => walk(i, ''));
    else walk(val, '');
  }
  return pages;
}

// ── Smart matching ──────────────────────────────────────────────────

function smartMatch(crawledPages, sidebarPages) {
  const matched = [];
  const unmatchedCrawl = [];

  // Build sidebar lookup indices
  const sbBySlug = new Map();       // slug → [entries]
  const sbBySlugLower = new Map();  // slug.lower → [entries]
  const sbByNormLabel = new Map();  // normalizedLabel → [entries]

  for (const sb of sidebarPages) {
    // By slug
    if (!sbBySlug.has(sb.slug)) sbBySlug.set(sb.slug, []);
    sbBySlug.get(sb.slug).push(sb);
    // By slug lowercase
    const slugLower = sb.slug.toLowerCase();
    if (!sbBySlugLower.has(slugLower)) sbBySlugLower.set(slugLower, []);
    sbBySlugLower.get(slugLower).push(sb);
    // By normalized label
    if (sb.normalizedLabel) {
      if (!sbByNormLabel.has(sb.normalizedLabel)) sbByNormLabel.set(sb.normalizedLabel, []);
      sbByNormLabel.get(sb.normalizedLabel).push(sb);
    }
  }

  const usedSidebarIds = new Set();

  for (const cr of crawledPages) {
    let match = null;
    let method = '';

    // 1. Exact slug
    const exact = sbBySlug.get(cr.slug);
    if (exact) {
      const unused = exact.find(s => !usedSidebarIds.has(s.fullId));
      if (unused) { match = unused; method = 'exact-slug'; }
    }

    // 2. Case-insensitive slug
    if (!match) {
      const lower = sbBySlugLower.get(cr.slug.toLowerCase());
      if (lower) {
        const unused = lower.find(s => !usedSidebarIds.has(s.fullId));
        if (unused) { match = unused; method = 'case-insensitive-slug'; }
      }
    }

    // 3. Normalized crawl slug → sidebar slug (e.g. "xem danh sach role" vs "view-role-list")
    //    Try matching crawl label against sidebar label
    if (!match && cr.normalizedLabel) {
      const byLabel = sbByNormLabel.get(cr.normalizedLabel);
      if (byLabel) {
        const unused = byLabel.find(s => !usedSidebarIds.has(s.fullId));
        if (unused) { match = unused; method = 'normalized-label'; }
      }
    }

    // 4. Fuzzy label match — find best token overlap
    if (!match && cr.label && cr.label.length > 3) {
      let bestScore = 0;
      let bestMatch = null;
      for (const sb of sidebarPages) {
        if (usedSidebarIds.has(sb.fullId)) continue;
        if (!sb.label || sb.label.length < 3) continue;
        const score = tokenOverlap(cr.label, sb.label);
        if (score > bestScore && score >= 0.6) {
          bestScore = score;
          bestMatch = sb;
        }
      }
      if (bestMatch) {
        match = bestMatch;
        method = `fuzzy-label(${Math.round(bestScore * 100)}%)`;
      }
    }

    if (match) {
      usedSidebarIds.add(match.fullId);
      matched.push({
        crawlSlug: cr.slug,
        crawlLabel: cr.label,
        sidebarId: match.fullId,
        sidebarLabel: match.label,
        method,
        module: cr.module,
        category: cr.category,
      });
    } else {
      unmatchedCrawl.push(cr);
    }
  }

  // Extra in sidebar = not matched
  const extraSidebar = sidebarPages.filter(s => !usedSidebarIds.has(s.fullId));

  return { matched, unmatchedCrawl, extraSidebar };
}

// ── Main ────────────────────────────────────────────────────────────

function main() {
  const crawledPages = extractCrawled(crawled.menu);

  console.log('╔══════════════════════════════════════════════════════════════════╗');
  console.log('║   CRAWLED vs SIDEBAR — SMART COMPARISON                        ║');
  console.log('╚══════════════════════════════════════════════════════════════════╝');
  console.log(`\nCrawled: ${crawledPages.length} doc pages from ${crawled.source_url}\n`);

  const fullReport = {};

  for (const sb of SIDEBARS) {
    const sidebarPath = path.join(ROOT, sb.file);
    if (!fs.existsSync(sidebarPath)) continue;

    const sidebarModule = require(sidebarPath);
    const sidebarPages = extractSidebar(sidebarModule);
    const result = smartMatch(crawledPages, sidebarPages);

    // Count match methods
    const methods = {};
    for (const m of result.matched) {
      methods[m.method] = (methods[m.method] || 0) + 1;
    }

    console.log('┌──────────────────────────────────────────────────────────────────┐');
    console.log(`│  ${sb.label.toUpperCase()} (${sb.file})`.padEnd(67) + '│');
    console.log('├──────────────────────────────────────────────────────────────────┤');
    console.log(`│  Crawled: ${String(crawledPages.length).padEnd(8)} Sidebar: ${String(sidebarPages.length).padEnd(26)}│`);
    console.log(`│  Matched: ${String(result.matched.length).padEnd(8)} (${(result.matched.length / crawledPages.length * 100).toFixed(1)}% of crawled)`.padEnd(67) + '│');
    console.log(`│  Missing: ${String(result.unmatchedCrawl.length).padEnd(8)} Extra in sidebar: ${String(result.extraSidebar.length).padEnd(18)}│`);
    console.log('├──────────────────────────────────────────────────────────────────┤');
    console.log('│  Match methods:'.padEnd(67) + '│');
    for (const [method, count] of Object.entries(methods).sort((a, b) => b[1] - a[1])) {
      console.log(`│    ${method}: ${count}`.padEnd(67) + '│');
    }
    console.log('└──────────────────────────────────────────────────────────────────┘');

    // Missing from sidebar — grouped by module
    if (result.unmatchedCrawl.length > 0) {
      console.log(`\n  MISSING from ${sb.code.toUpperCase()} sidebar (${result.unmatchedCrawl.length}):`);
      const byModule = {};
      for (const m of result.unmatchedCrawl) {
        const k = m.module;
        if (!byModule[k]) byModule[k] = [];
        byModule[k].push(m);
      }
      for (const [mod, items] of Object.entries(byModule).sort((a, b) => b[1].length - a[1].length)) {
        console.log(`\n    [${mod}] (${items.length}):`);
        for (const item of items.slice(0, 10)) {
          console.log(`      - ?doc=${item.slug} — "${item.label}"`);
        }
        if (items.length > 10) console.log(`      ... +${items.length - 10} more`);
      }
    }

    // Check if missing pages have content files
    if (result.unmatchedCrawl.length > 0) {
      const docsDir = sb.code === 'vi' ? 'docs-vi' : sb.code === 'en' ? 'docs' : 'docs-ja';
      let hasFile = 0, noFile = 0;
      const missingNoFile = [];

      for (const m of result.unmatchedCrawl) {
        // Search for file by slug
        let found = false;
        function search(dir) {
          if (found) return;
          try {
            for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
              if (found) return;
              const full = path.join(dir, entry.name);
              if (entry.isDirectory()) { search(full); }
              else if (entry.name.replace(/\.mdx?$/, '') === m.slug) { found = true; }
            }
          } catch (e) { /* skip */ }
        }
        search(path.join(ROOT, docsDir));
        if (found) hasFile++;
        else { noFile++; missingNoFile.push(m); }
      }

      console.log(`\n  Content file check for ${result.unmatchedCrawl.length} missing pages:`);
      console.log(`    Has file on disk: ${hasFile} (needs sidebar entry)`);
      console.log(`    No file on disk:  ${noFile} (needs content + sidebar)`);

      if (missingNoFile.length > 0) {
        console.log(`\n  Pages with NO content file:`);
        const byMod = {};
        for (const m of missingNoFile) {
          if (!byMod[m.module]) byMod[m.module] = [];
          byMod[m.module].push(m);
        }
        for (const [mod, items] of Object.entries(byMod).sort((a, b) => b[1].length - a[1].length)) {
          console.log(`    [${mod}] (${items.length}):`);
          items.slice(0, 5).forEach(i => console.log(`      - ${i.slug} — "${i.label}"`));
          if (items.length > 5) console.log(`      ... +${items.length - 5} more`);
        }
      }
    }

    console.log();
    fullReport[sb.code] = {
      total: { crawled: crawledPages.length, sidebar: sidebarPages.length },
      matched: result.matched.length,
      methods,
      missing: result.unmatchedCrawl.length,
      extra: result.extraSidebar.length,
      missingPages: result.unmatchedCrawl,
      extraPages: result.extraSidebar.map(s => ({ slug: s.slug, fullId: s.fullId, label: s.label, folder: s.folder })),
    };
  }

  // Summary
  console.log('┌──────────────────────────────────────────────────────────────────┐');
  console.log('│  SUMMARY                                                         │');
  console.log('├──────────┬──────────┬──────────┬──────────┬──────────┬──────────┤');
  console.log('│ Lang     │ Crawled  │ Sidebar  │ Matched  │ Missing  │ Extra    │');
  console.log('├──────────┼──────────┼──────────┼──────────┼──────────┼──────────┤');
  for (const sb of SIDEBARS) {
    const r = fullReport[sb.code];
    if (!r) continue;
    const pct = (r.matched / r.total.crawled * 100).toFixed(0);
    console.log(`│ ${sb.code.toUpperCase().padEnd(8)} │ ${String(r.total.crawled).padEnd(8)} │ ${String(r.total.sidebar).padEnd(8)} │ ${(r.matched + ' (' + pct + '%)').padEnd(8)} │ ${String(r.missing).padEnd(8)} │ ${String(r.extra).padEnd(8)} │`);
  }
  console.log('└──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘');

  fs.writeFileSync(path.join(__dirname, 'compare-report.json'), JSON.stringify(fullReport, null, 2));
  console.log('\nFull report saved to: scripts/compare-report.json');
}

main();
