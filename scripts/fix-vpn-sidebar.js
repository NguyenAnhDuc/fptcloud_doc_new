const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

// VPN correct structure (based on VI, translated for EN/JA)
function buildVPN(lang) {
  const L = {
    en: { overview: 'VPN Site-to-Site Overview', setup: 'Initial Setup', qs: 'Quick Starts', tutorials: 'Tutorials', cert: 'Certificate Authentication', newVer: 'VPN Site to Site (new version)', commonCfg: 'Common VPN Device Configuration', manageConn: 'Manage VPN Connection', faq: 'FAQs' },
    ja: { overview: 'VPN Site-to-Site 概要', setup: '初期設定', qs: 'クイックスタート', tutorials: 'チュートリアル', cert: '証明書認証', newVer: 'VPN Site to Site (new version)', commonCfg: '一般的なVPNデバイスの設定', manageConn: 'VPN Connectionの管理', faq: 'よくある質問' },
  }[lang];

  return {
    type: 'category', label: 'VPN Site-to-Site', collapsed: true,
    items: [
      { type: 'doc', id: 'vpn-site-to-site/overviews-vpn', label: L.overview },
      { type: 'doc', id: 'vpn-site-to-site/initial-setup', label: L.setup },
      { type: 'category', label: L.qs, collapsed: true, items: [
        { type: 'doc', id: 'vpn-site-to-site/create-vpn' },
        { type: 'doc', id: 'vpn-site-to-site/view-vpn-' },
      ]},
      { type: 'category', label: L.tutorials, collapsed: true, items: [
        { type: 'doc', id: 'vpn-site-to-site/disable-VPN-Site-to-Site' },
        { type: 'doc', id: 'vpn-site-to-site/enable-vpn-s2S' },
        { type: 'doc', id: 'vpn-site-to-site/edit-vpn' },
        { type: 'doc', id: 'vpn-site-to-site/edit-security-profile' },
        { type: 'doc', id: 'vpn-site-to-site/download-config-' },
        { type: 'doc', id: 'vpn-site-to-site/delete-vpn' },
        { type: 'doc', id: 'vpn-site-to-site/VPN-Activity' },
      ]},
      { type: 'doc', id: 'vpn-site-to-site/authenticate-certificate-mode', label: L.cert },
      { type: 'category', label: L.newVer, collapsed: true, items: [
        { type: 'category', label: L.commonCfg, collapsed: true, items: [
          { type: 'doc', id: 'vpn-site-to-site/VPN-Site-to-Site-Configuration-with-Palo-Alto-guide' },
          { type: 'doc', id: 'vpn-site-to-site/connect-pfsense' },
          { type: 'doc', id: 'vpn-site-to-site/connect-strongswan' },
          { type: 'doc', id: 'vpn-site-to-site/connect-vyos-1.5' },
          { type: 'doc', id: 'vpn-site-to-site/connect-checkpoint-r8120' },
          { type: 'doc', id: 'vpn-site-to-site/connect-fci-aws-transitgw' },
          { type: 'doc', id: 'vpn-site-to-site/connect-fci-aws-virtualgw' },
          { type: 'doc', id: 'vpn-site-to-site/connect-fci-vmware' },
          { type: 'doc', id: 'vpn-site-to-site/VPN-Site-to-Site-Configuration-with-Fortigate-guide' },
          { type: 'doc', id: 'vpn-site-to-site/connect-behind-NAT' },
        ]},
        { type: 'category', label: L.manageConn, collapsed: true, items: [
          { type: 'doc', id: 'vpn-site-to-site/action-management' },
          { type: 'doc', id: 'vpn-site-to-site/create-vpn-connection' },
          { type: 'doc', id: 'vpn-site-to-site/edit-vpn-connection' },
          { type: 'doc', id: 'vpn-site-to-site/enable-disable-vpn-connection' },
          { type: 'doc', id: 'vpn-site-to-site/delete-vpn-connection' },
          { type: 'doc', id: 'vpn-site-to-site/ket-noi-thiet-bi-behind-NAT-IP' },
          { type: 'doc', id: 'vpn-site-to-site/create-customer-gateway' },
          { type: 'doc', id: 'vpn-site-to-site/edit-customer-gateway' },
          { type: 'doc', id: 'vpn-site-to-site/delete-customer-gateway' },
          { type: 'doc', id: 'vpn-site-to-site/permission-access-guide' },
          { type: 'doc', id: 'vpn-site-to-site/setting-up-alerts-via-the-cloud-guard-service-guide' },
          { type: 'doc', id: 'vpn-site-to-site/monitoring-service-through-monitoring-feature-guide' },
          { type: 'doc', id: 'vpn-site-to-site/monitoring-service-through-logging-feature-guide' },
        ]},
        { type: 'doc', id: 'vpn-site-to-site/faq', label: L.faq },
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
  const vpn = buildVPN(lang);
  if (replaceCat(sidebar.tutorialSidebar, 'VPN Site-to-Site', vpn)) {
    writeSidebar(file, sidebar, comment);
    console.log(file + ': VPN restructured');
  }
}

// Also fix VI — remove Other category
delete require.cache[require.resolve(path.join(ROOT, 'sidebars-vi.js'))];
const viSidebar = require(path.join(ROOT, 'sidebars-vi.js'));

function removeOther(items) {
  for (let i = items.length - 1; i >= 0; i--) {
    if (items[i].type === 'category' && items[i].label === 'Other') {
      items.splice(i, 1);
    } else if (items[i].items) {
      removeOther(items[i].items);
    }
  }
}

function findCat(items, label) {
  for (const i of items) {
    if (i.type === 'category' && i.label === label) return i;
    if (i.items) { const r = findCat(i.items, label); if (r) return r; }
  }
  return null;
}

const viVpn = findCat(viSidebar.tutorialSidebar, 'VPN Site-to-Site');
if (viVpn) {
  removeOther(viVpn.items);
  // Also remove Other from nested
  const viNewVer = findCat(viVpn.items, 'VPN Site to Site (new version)');
  if (viNewVer) removeOther(viNewVer.items);
}

const json = JSON.stringify(viSidebar, null, 2);
let js = json.replace(/"(\w+)":/g, '$1: ').replace(/: "([^"]*?)"/g, (m, v) => ':  "' + v + '"');
fs.writeFileSync(path.join(ROOT, 'sidebars-vi.js'), '// VI\nmodule.exports = ' + js + ';\n');
console.log('sidebars-vi.js: VPN Other removed');

// Verify
for (const f of ['sidebars.js', 'sidebars-vi.js', 'sidebars-ja.js']) {
  delete require.cache[require.resolve(path.join(ROOT, f))];
  require(path.join(ROOT, f));
}
console.log('Syntax OK');
