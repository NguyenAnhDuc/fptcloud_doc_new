/**
 * Fix ALL sidebar doc IDs to exactly match Docusaurus frontmatter IDs.
 * For each sidebar entry, find the actual file and use its frontmatter id.
 */
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");

const configs = [
  { file: "sidebars.js", docsDir: "docs", comment: "// EN\n" },
  { file: "sidebars-vi.js", docsDir: "docs-vi", comment: "// VI\n" },
  { file: "sidebars-ja.js", docsDir: "docs-ja", comment: "// JA\n" },
];

function buildIdMap(docsDir) {
  // Map: section/lowercaseDocId -> actual Docusaurus ID (section/frontmatterId)
  // Also map: section/filename -> actual ID
  const idMap = new Map();

  function walk(dir, prefix) {
    try {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (e.name.startsWith(".")) continue;
        const full = path.join(dir, e.name);
        if (e.isDirectory()) { walk(full, prefix ? prefix + "/" + e.name : e.name); continue; }
        if (!e.name.endsWith(".md")) continue;
        const c = fs.readFileSync(full, "utf-8");
        const m = c.match(/^id:\s*"(.+?)"/m);
        const baseName = e.name.replace(/\.md$/, "");
        const fmId = m ? m[1] : baseName;
        const actualId = prefix ? prefix + "/" + fmId : fmId;

        // Map various lookup keys to actual ID
        const keys = [
          actualId,
          actualId.toLowerCase(),
          (prefix ? prefix + "/" + baseName : baseName),
          (prefix ? prefix + "/" + baseName : baseName).toLowerCase(),
        ];
        for (const key of keys) {
          if (!idMap.has(key)) idMap.set(key, actualId);
        }
      }
    } catch {}
  }
  walk(docsDir, "");
  return idMap;
}

function fixItems(items, idMap) {
  let fixed = 0, removed = 0;
  const result = [];

  for (const item of items) {
    if (typeof item === "string") {
      const actual = idMap.get(item) || idMap.get(item.toLowerCase());
      if (actual) { result.push(actual === item ? item : actual); if (actual !== item) fixed++; }
      else removed++;
    } else if (item.type === "doc") {
      const actual = idMap.get(item.id) || idMap.get(item.id.toLowerCase());
      if (actual) {
        if (actual !== item.id) { item.id = actual; fixed++; }
        result.push(item);
      } else removed++;
    } else if (item.type === "category") {
      const cleaned = fixItems(item.items || [], idMap);
      fixed += cleaned.fixed;
      removed += cleaned.removed;
      if (cleaned.items.length > 0) result.push({ ...item, items: cleaned.items });
    } else {
      result.push(item);
    }
  }
  return { items: result, fixed, removed };
}

for (const cfg of configs) {
  const fp = path.join(ROOT, cfg.file);
  delete require.cache[require.resolve(fp)];
  const sidebar = require(fp);
  const idMap = buildIdMap(path.join(ROOT, cfg.docsDir));

  const result = fixItems(sidebar.tutorialSidebar, idMap);
  sidebar.tutorialSidebar = result.items;

  const json = JSON.stringify(sidebar, null, 2);
  let js = json.replace(/"(\w+)":/g, "$1: ").replace(/: "([^"]*?)"/g, (m, v) => ':  "' + v + '"');
  fs.writeFileSync(fp, cfg.comment + "module.exports = " + js + ";\n");

  console.log(cfg.file + ": fixed " + result.fixed + " IDs, removed " + result.removed + " invalid");
}
