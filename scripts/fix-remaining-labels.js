const fs = require('fs');

function fixLabels(file, fixes) {
  let content = fs.readFileSync(file, 'utf-8');
  let count = 0;
  for (const [from, to] of Object.entries(fixes)) {
    const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp('"' + escaped + '"', 'g');
    const matches = content.match(re);
    if (matches) { count += matches.length; content = content.replace(re, '"' + to + '"'); }
  }
  fs.writeFileSync(file, content);
  return count;
}

// EN fixes
const enCount = fixLabels('sidebars.js', {
  'Lịch snapshot máy ảo': 'VM Snapshot Schedule',
  'Lịch snapshot ổ đĩa': 'Disk Snapshot Schedule',
  'Một số gợi ý mẫu (Samples)': 'Samples',
  '7. Trực quan hóa dữ liệu': '7. Data Visualization',
  'Quyền truy cập dịch vụ FPT Database Engine': 'FPT Database Engine Access Permissions',
  'Triển khai workload GPU mẫu lên Managed GPU Cluster': 'Deploy Sample GPU Workload to Managed GPU Cluster',
});
console.log('EN: ' + enCount + ' fixed');

// JA fixes
const jaCount = fixLabels('sidebars-ja.js', {
  'Lịch snapshot máy ảo': 'VMスナップショットスケジュール',
  'Lịch snapshot ổ đĩa': 'ディスクスナップショットスケジュール',
  'Region Việt Nam': 'ベトナムリージョン',
  'Region Nhật Bản': '日本リージョン',
  'Tính năng tự động nâng cấp phiên bản (Automatic Upgrade Version)': '自動バージョンアップグレード',
  'Tính năng tăng cường bảo mật cho dịch vụ MFKE': 'MFKEセキュリティ強化機能',
  'Các lưu ý khi sử dụng M-FKE': 'M-FKE利用時の注意事項',
  'Một số gợi ý mẫu (Samples)': 'サンプル',
  'Snapshot và restore persistent volume trong Kubernetes': 'KubernetesでのPersistent Volumeのスナップショットとリストア',
  'Cấu hình proxy protocol': 'Proxy Protocolの設定',
  'Triển khai workload GPU mẫu lên Managed GPU Cluster': 'Managed GPU ClusterへのサンプルGPUワークロードのデプロイ',
  'Quyền truy cập dịch vụ FPT Database Engine': 'FPT Database Engineのアクセス権限',
  'VPN Site To Site': 'VPN Site-to-Site',
});
console.log('JA: ' + jaCount + ' fixed');

// Verify syntax
delete require.cache[require.resolve('./sidebars.js')];
delete require.cache[require.resolve('./sidebars-ja.js')];
require('./sidebars.js'); console.log('EN syntax OK');
require('./sidebars-ja.js'); console.log('JA syntax OK');
