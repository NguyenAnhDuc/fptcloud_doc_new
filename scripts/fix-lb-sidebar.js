const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

function buildLB(lang) {
  const L = {
    en: { lb: 'Load Balancer (Tutorials)', manageLB: 'Manage Load Balancer', manageListener: 'Manage Listener', managePool: 'Manage Server Pool', manageSSL: 'Manage SSL Certificate', classicLB: 'Classic Load Balancer (Tutorials)', classicManageLB: 'Manage Load Balancer', classicManageSSL: 'Manage SSL Certificate' },
    ja: { lb: 'Load Balancer (Tutorials)', manageLB: 'Load Balancerの管理', manageListener: 'Listenerの管理', managePool: 'Server Poolの管理', manageSSL: 'SSL証明書の管理', classicLB: 'Classic Load Balancer (Tutorials)', classicManageLB: 'Load Balancerの管理', classicManageSSL: 'SSL証明書の���理' },
  }[lang];

  return {
    type: 'category', label: 'Load Balancer', collapsed: true,
    items: [
      { type: 'doc', id: 'load-balancer/load-balancer' },
      { type: 'doc', id: 'load-balancer/initial-setup' },
      { type: 'category', label: L.lb, collapsed: true, items: [
        { type: 'category', label: L.manageLB, collapsed: true, items: [
          { type: 'doc', id: 'load-balancer/create-load-balancer' },
          { type: 'doc', id: 'load-balancer/update-load-balancer' },
          { type: 'doc', id: 'load-balancer/monitor-load-balancer' },
          { type: 'doc', id: 'load-balancer/add-external-member' },
          { type: 'doc', id: 'load-balancer/integrate-with-fmon' },
          { type: 'doc', id: 'load-balancer/resize-load-balancer' },
          { type: 'doc', id: 'load-balancer/access-logs' },
        ]},
        { type: 'category', label: L.manageListener, collapsed: true, items: [
          { type: 'doc', id: 'load-balancer/create-listener' },
          { type: 'doc', id: 'load-balancer/configure-timeout' },
          { type: 'doc', id: 'load-balancer/configure-l7-policy' },
          { type: 'doc', id: 'load-balancer/redirect-http-to-https' },
          { type: 'doc', id: 'load-balancer/redirect-prefix' },
          { type: 'doc', id: 'load-balancer/enable-hsts' },
          { type: 'doc', id: 'load-balancer/allow-ip-cidr' },
          { type: 'doc', id: 'load-balancer/configure-sni' },
        ]},
        { type: 'category', label: L.managePool, collapsed: true, items: [
          { type: 'doc', id: 'load-balancer/create-server-pool' },
          { type: 'doc', id: 'load-balancer/manage-pool-members' },
          { type: 'doc', id: 'load-balancer/configure-health-check' },
        ]},
        { type: 'category', label: L.manageSSL, collapsed: true, items: [
          { type: 'doc', id: 'load-balancer/import-ssl-certificate' },
          { type: 'doc', id: 'load-balancer/delete-ssl-certificate' },
        ]},
      ]},
      { type: 'category', label: L.classicLB, collapsed: true, items: [
        { type: 'category', label: L.classicManageLB, collapsed: true, items: [
          { type: 'doc', id: 'load-balancer/khoi tao mot load balancer moi' },
          { type: 'doc', id: 'load-balancer/them may ao vao load balancer' },
          { type: 'doc', id: 'load-balancer/xoa may ao khoi load balancer' },
          { type: 'doc', id: 'load-balancer/thay doi thong tin cau hinh load balancer' },
          { type: 'doc', id: 'load-balancer/xoa load balancer' },
        ]},
        { type: 'category', label: L.classicManageSSL, collapsed: true, items: [
          { type: 'doc', id: 'load-balancer/classic-import-ssl-certificate' },
          { type: 'doc', id: 'load-balancer/xem thong tin chi tiet ssl certificate' },
        ]},
      ]},
    ],
  };
}

function replaceCat(items, label, newCat) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].type === 'category' && items[i].label === label) { items[i] = newCat; return true; }
    if (items[i].items && replaceCat(items[i].items, label, newCat)) return true;
  }
  return false;
}

function writeSidebar(file, sidebar, comment) {
  const json = JSON.stringify(sidebar, null, 2);
  let js = json.replace(/"(\w+)":/g, '$1: ').replace(/: "([^"]*?)"/g, (m, v) => ':  "' + v + '"');
  fs.writeFileSync(path.join(ROOT, file), comment + 'module.exports = ' + js + ';\n');
}

for (const [lang, file, comment] of [
  ['en', 'sidebars.js', '// EN\n'],
  ['ja', 'sidebars-ja.js', '// JA\n'],
]) {
  delete require.cache[require.resolve(path.join(ROOT, file))];
  const sidebar = require(path.join(ROOT, file));
  const lb = buildLB(lang);
  if (replaceCat(sidebar.tutorialSidebar, 'Load Balancer', lb)) {
    writeSidebar(file, sidebar, comment);
    console.log(file + ': Load Balancer restructured');
  }
}

// Fix VI: remove Other from Classic LB
delete require.cache[require.resolve(path.join(ROOT, 'sidebars-vi.js'))];
const viSidebar = require(path.join(ROOT, 'sidebars-vi.js'));
function removeOther(items) {
  for (let i = items.length - 1; i >= 0; i--) {
    if (items[i].type === 'category' && items[i].label === 'Other') items.splice(i, 1);
    else if (items[i].items) removeOther(items[i].items);
  }
}
function findCat(items, l) { for(const i of items){if(i.type==='category'&&i.label===l)return i;if(i.items){const r=findCat(i.items,l);if(r)return r;}}return null; }
const viLB = findCat(viSidebar.tutorialSidebar, 'Load Balancer');
if (viLB) removeOther(viLB.items);
const json = JSON.stringify(viSidebar, null, 2);
let js = json.replace(/"(\w+)":/g, '$1: ').replace(/: "([^"]*?)"/g, (m, v) => ':  "' + v + '"');
fs.writeFileSync(path.join(ROOT, 'sidebars-vi.js'), '// VI\nmodule.exports = ' + js + ';\n');
console.log('sidebars-vi.js: LB Other removed');

// Verify
for (const f of ['sidebars.js', 'sidebars-vi.js', 'sidebars-ja.js']) {
  delete require.cache[require.resolve(path.join(ROOT, f))];
  require(path.join(ROOT, f));
}
console.log('Syntax OK');
