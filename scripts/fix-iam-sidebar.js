const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const IAM_DOCS = {
  'Manage Role': ['role-management', 'role-overview', 'view-role-list', 'create-role', 'view-role-detail', 'edit-role-and-permissions', 'delete-role'],
  'Manage User Group': ['overview-user-group', 'create-user-group', 'view-list-user-group', 'view-detail-user-group', 'edit-user-group', 'delete-user-group'],
  'Manage IAM User': ['overview-iam-user', 'invite-iam-user', 'create-account-access-vpc', 'change-password', 'configure-2fa'],
  'IP Access': ['ip-access', 'overview-ip-access', 'create-ip-access', 'delete-ip-access', 'ip-access-activity-log', 'download-access-log'],
};

const LABELS = {
  en: { 'Manage Role': 'Manage Role', 'Manage User Group': 'Manage User Group', 'Manage IAM User': 'Manage IAM User', 'IP Access': 'IP Access', tutorials: 'Tutorials', overview: 'Overview', initialSetup: 'Initial Setup' },
  ja: { 'Manage Role': 'Roleの管理', 'Manage User Group': 'User Groupの管理', 'Manage IAM User': 'IAM Userの管理', 'IP Access': 'IP Access', tutorials: 'チュートリアル', overview: '概要', initialSetup: '初期設定' },
};

function buildIAM(lang) {
  const L = LABELS[lang];
  return {
    type: 'category',
    label: 'IAM',
    collapsed: true,
    items: [
      { type: 'doc', id: 'iam/iam', label: L.overview },
      { type: 'doc', id: 'iam/Initial Setup', label: L.initialSetup },
      {
        type: 'category',
        label: L.tutorials,
        collapsed: true,
        items: Object.entries(IAM_DOCS).map(([catKey, docIds]) => ({
          type: 'category',
          label: L[catKey],
          collapsed: true,
          items: docIds.map(id => ({ type: 'doc', id: 'iam/' + id })),
        })),
      },
    ],
  };
}

function replaceIAM(items, newIAM) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].type === 'category' && items[i].label === 'IAM') {
      items[i] = newIAM;
      return true;
    }
    if (items[i].type === 'category' && items[i].items) {
      if (replaceIAM(items[i].items, newIAM)) return true;
    }
  }
  return false;
}

function writeSidebar(file, sidebar, comment) {
  const json = JSON.stringify(sidebar, null, 2);
  let js = json
    .replace(/"(\w+)":/g, '$1: ')
    .replace(/: "([^"]*?)"/g, (m, v) => ':  "' + v + '"');
  fs.writeFileSync(path.join(ROOT, file), comment + 'module.exports = ' + js + ';\n');
}

for (const [lang, file, comment] of [
  ['en', 'sidebars.js', '// Rebuilt from crawled menu-tree.json — EN docs\n'],
  ['ja', 'sidebars-ja.js', '// Japanese sidebar - synced with EN structure\n'],
]) {
  delete require.cache[require.resolve(path.join(ROOT, file))];
  const sidebar = require(path.join(ROOT, file));
  const newIAM = buildIAM(lang);
  if (replaceIAM(sidebar.tutorialSidebar, newIAM)) {
    writeSidebar(file, sidebar, comment);
    console.log(file + ': IAM restructured (' + lang + ')');
  } else {
    console.log(file + ': IAM not found!');
  }
}

// Verify
delete require.cache[require.resolve(path.join(ROOT, 'sidebars.js'))];
delete require.cache[require.resolve(path.join(ROOT, 'sidebars-ja.js'))];
require(path.join(ROOT, 'sidebars.js'));
require(path.join(ROOT, 'sidebars-ja.js'));
console.log('Syntax OK');
