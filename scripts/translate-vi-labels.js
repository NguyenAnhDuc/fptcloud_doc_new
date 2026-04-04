#!/usr/bin/env node
/**
 * Find and translate Vietnamese labels in EN/JA sidebars and frontmatter.
 *
 * Two-pass approach:
 * 1. Scan EN/JA docs for Vietnamese sidebar_label/title in frontmatter → update frontmatter
 * 2. Scan sidebars for Vietnamese category labels → translate in sidebar files
 */

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const VI_PATTERN = /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]/i;

// Common Vietnamese → English translations for labels
const VI_EN_MAP = {
  'Hướng dẫn nhanh (Quick Starts)': 'Quick Starts',
  'Hướng dẫn chi tiết (Tutorials)': 'Tutorials',
  'Hướng dẫn chi tiết (Tutorial)': 'Tutorials',
  'Hướng dẫn chi tiết': 'Detailed Guide',
  'Hướng dẫn nhanh': 'Quick Starts',
  'Các câu hỏi thường gặp (FAQs)': 'FAQs',
  'Câu hỏi thường gặp (FAQs)': 'FAQs',
  'Câu hỏi thường gặp': 'FAQs',
  'Thiết lập ban đầu (Initial Setup)': 'Initial Setup',
  'Thiết lập ban đầu': 'Initial Setup',
  'Tổng quan (Overview)': 'Overview',
  'Tổng quan': 'Overview',
  'Giới thiệu': 'Introduction',
  'Một số gợi ý mẫu (Samples)': 'Samples',
  'Đăng ký, đăng nhập': 'Registration & Login',
  'Đăng ký thông tin cá nhân/ tổ chức': 'Personal/Organization Registration',
  'Nạp tiền vào tài khoản': 'Top Up Account',
  'Mua máy ảo': 'Purchase Virtual Machine',
  'Mua Public IP': 'Purchase Public IP',
  'Mua Storage': 'Purchase Storage',
  'Xem billing các dịch vụ trên hệ thống': 'View Service Billing',
  'Đăng nhập với tài khoản SSO (Azure)': 'Login with SSO (Azure)',
  'Đăng nhập với Account/Password': 'Login with Account/Password',
  'Quản lý Profile': 'Manage Profile',
  'Quản lý Group': 'Manage Group',
  'Quản lý Policy': 'Manage Policy',
  'Tạo một máy ảo': 'Create Virtual Machine',
  'Quản lý máy ảo': 'Manage Virtual Machines',
  'Quản lý GPU với Portal Console': 'Manage GPU with Portal Console',
  'Quản lý GPU Server với HPC Portal': 'Manage GPU Server with HPC Portal',
  'Quản lý Instance Template': 'Manage Instance Template',
  'Quản lý NIC (Network Interface Card)': 'Manage NIC',
  'Quản lý Security Group': 'Manage Security Group',
  'Quản lý Instance Group với chính sách Affinity & Anti-Affinity': 'Manage Instance Group (Affinity & Anti-Affinity)',
  'Quản lý Project': 'Manage Project',
  'Lịch snapshot máy ảo': 'VM Snapshot Schedule',
  'Lịch snapshot ổ đĩa': 'Disk Snapshot Schedule',
  'Sử dụng Object Storage trên FPT Portal': 'Use Object Storage on FPT Portal',
  'Region Việt Nam': 'Vietnam Region',
  'Region Nhật Bản': 'Japan Region',
  'Cấu hình thiết bị VPN phổ biến': 'Common VPN Device Configuration',
  'Quản lý & thao tác VPN Connection': 'Manage VPN Connection',
  'Quản lý Load Balancer': 'Manage Load Balancer',
  'Quản lý Kubernetes Cluster': 'Manage Kubernetes Cluster',
  'Quản lý Kubernetes cluster': 'Manage Kubernetes Cluster',
  'Thay đổi cấu hình K8s Cluster': 'Modify K8s Cluster Configuration',
  'Thay đổi cấu hình K8S Cluster': 'Modify K8S Cluster Configuration',
  'Tính năng tự động nâng cấp phiên bản (Automatic Upgrade Version)': 'Automatic Version Upgrade',
  'Tính năng tăng cường bảo mật cho dịch vụ MFKE': 'MFKE Security Enhancement',
  'Snapshot và restore persistent volume trong Kubernetes': 'Snapshot & Restore Persistent Volume in Kubernetes',
  'Cấu hình proxy protocol': 'Proxy Protocol Configuration',
  'Kích hoạt dịch vụ FPT Container Registry': 'Activate FPT Container Registry',
  'Hướng dẫn sử dụng trên Docker CLI': 'Docker CLI Guide',
  'Quản lý Retention Rule': 'Manage Retention Rule',
  'Quản lý Robot Account': 'Manage Robot Account',
  'Quản lý Gói dịch vụ': 'Manage Service Package',
  'Quản lý Role': 'Manage Role',
  'Quản lý Target': 'Manage Target',
  'Xem kết quả quét': 'View Scan Results',
  'Hướng dẫn trên Gaia Portal': 'Gaia Portal Guide',
  'Hướng dẫn trên SmartConsole': 'SmartConsole Guide',
  '3. Quản lý một Workspace': '3. Manage a Workspace',
  '7. Trực quan hóa dữ liệu': '7. Data Visualization',
  'Quản lý Alert': 'Manage Alert',
  'Quản lý Recipient': 'Manage Recipient',
  'Quản lý Secret Engine': 'Manage Secret Engine',
  'Quản lý Secret': 'Manage Secret',
  'Quản lý Auth Method': 'Manage Auth Method',
  'Quản lý FPT Cloud Agent': 'Manage FPT Cloud Agent',
  'Quản lý Credential': 'Manage Credential',
  'Quản lý cấu hình': 'Manage Configuration',
  'Quản lý account trên argocd': 'Manage Account on ArgoCD',
  'Cấu hình OIDC phục vụ SSO config': 'OIDC SSO Configuration',
  'Cấu hình Notifications': 'Configure Notifications',
  'Cấu hình webhook': 'Configure Webhook',
  'Thiết lập ban đầu (Initial Setup)': 'Initial Setup',
  'Quản lý dịch vụ FPT Database Engine': 'Manage FPT Database Engine',
  'Khởi tạo và vận hành cơ sở dữ liệu': 'Initialize & Operate Database',
  'Xem đối soát theo kỳ hóa đơn': 'View Billing Reconciliation',
  'Organization Management - Quản lý Organization': 'Organization Management',
  'Team Management - Quản lý Team': 'Team Management',
  'Integration Management - Quản lý tích hợp': 'Integration Management',
  'Workspace Management - Quản lý Asset và Issue': 'Workspace Management',
  'Schedule Management - Quản lý lịch chạy scan': 'Schedule Management',
  'Quản lý Managed GPU Cluster': 'Manage Managed GPU Cluster',
  'Triển khai workload GPU mẫu lên Managed GPU Cluster': 'Deploy GPU Workload to Managed GPU Cluster',
  'Các lưu ý khi sử dụng M-FKE': 'M-FKE Usage Notes',
  'Các lưu ý khi sử dụng FKE': 'FKE Usage Notes',
  'Quản lý topics': 'Manage Topics',
  'Hướng dẫn chi tiết (Tutorial)': 'Tutorials',
  'Quản trị incident': 'Manage Incident',
  'Quản lý proxy host': 'Manage Proxy Host',
  'GPU là gì?': 'What is GPU?',
};

// Vietnamese → Japanese
const VI_JA_MAP = {};
for (const [vi, en] of Object.entries(VI_EN_MAP)) {
  // Build JA from EN with standard translations
  VI_JA_MAP[vi] = en
    .replace('Quick Starts', 'クイックスタート')
    .replace('Tutorials', 'チュートリアル')
    .replace('Detailed Guide', '詳細ガイド')
    .replace('FAQs', 'よくある質問')
    .replace('Initial Setup', '初期設定')
    .replace('Overview', '概要')
    .replace('Introduction', '紹介')
    .replace('Samples', 'サンプル')
    .replace('Registration & Login', '登録・ログイン')
    .replace('Personal/Organization Registration', '個人・組織情報の登録')
    .replace('Top Up Account', 'アカウントチャージ')
    .replace('Purchase Virtual Machine', '仮想マシンの購入')
    .replace('Purchase Public IP', 'Public IPの購入')
    .replace('Purchase Storage', 'ストレージの購入')
    .replace('View Service Billing', 'サービス請求の確認')
    .replace('Login with SSO (Azure)', 'SSO (Azure) でログイン')
    .replace('Login with Account/Password', 'アカウント/パスワードでログイン')
    .replace(/^Manage (.+)$/, '$1の管理')
    .replace(/^Modify (.+)$/, '$1の変更')
    .replace(/^View (.+)$/, '$1の確認')
    .replace(/^Create (.+)$/, '$1の作成')
    .replace(/^Activate (.+)$/, '$1の有効化')
    .replace(/^Configure (.+)$/, '$1の設定')
    .replace('Docker CLI Guide', 'Docker CLI ガイド')
    .replace('Gaia Portal Guide', 'Gaia Portal ガイド')
    .replace('SmartConsole Guide', 'SmartConsole ガイド')
    .replace('Common VPN Device Configuration', '一般的なVPNデバイスの設定')
    .replace('VM Snapshot Schedule', 'VMスナップショットスケジュール')
    .replace('Disk Snapshot Schedule', 'ディスクスナップショットスケジュール')
    .replace('Vietnam Region', 'ベトナムリージョン')
    .replace('Japan Region', '日本リージョン')
    .replace('Automatic Version Upgrade', '自動バージョンアップグレード')
    .replace('MFKE Security Enhancement', 'MFKEセキュリティ強化')
    .replace('Snapshot & Restore Persistent Volume in Kubernetes', 'KubernetesでのPersistent Volumeのスナップショットとリストア')
    .replace('Proxy Protocol Configuration', 'Proxy Protocolの設定')
    .replace('7. Data Visualization', '7. データの可視化')
    .replace('3. Manage a Workspace', '3. Workspaceの管理')
    .replace('OIDC SSO Configuration', 'OIDC SSO設定')
    .replace('Initialize & Operate Database', 'データベースの初期化と運用')
    .replace('View Billing Reconciliation', '請求照合の確認')
    .replace('Organization Management', 'Organization管理')
    .replace('Team Management', 'Team管理')
    .replace('Integration Management', '統合管理')
    .replace('Workspace Management', 'Workspace管理')
    .replace('Schedule Management', 'スケジュール管理')
    .replace('Deploy GPU Workload to Managed GPU Cluster', 'Managed GPU ClusterへのGPUワークロードのデプロイ')
    .replace('M-FKE Usage Notes', 'M-FKE利用時の注意事項')
    .replace('FKE Usage Notes', 'FKE利用時の注意事項')
    .replace('Manage Incident', 'インシデントの管理')
    .replace('What is GPU?', 'GPUとは？');
}

function applyToSidebar(filePath, translations) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let count = 0;

  for (const [from, to] of Object.entries(translations)) {
    if (!to || from === to) continue;
    const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp('"' + escaped + '"', 'g');
    const matches = content.match(re);
    if (matches) {
      content = content.replace(re, '"' + to + '"');
      count += matches.length;
    }
  }

  if (count > 0) fs.writeFileSync(filePath, content);
  return count;
}

// Also fix frontmatter in EN/JA files that have Vietnamese sidebar_label
function fixFrontmatter(docsDir, translations) {
  let count = 0;

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(full); continue; }
      if (!entry.name.endsWith('.md')) continue;

      let content = fs.readFileSync(full, 'utf-8');
      const fmMatch = content.match(/^(---\n[\s\S]*?\n---)/);
      if (!fmMatch) continue;

      let fm = fmMatch[1];
      let changed = false;

      // Check sidebar_label and title
      for (const field of ['sidebar_label', 'title']) {
        const re = new RegExp(`^(${field}:\\s*)"(.+?)"\\s*$`, 'm');
        const m = fm.match(re);
        if (m && VI_PATTERN.test(m[2])) {
          const translated = translations[m[2]];
          if (translated) {
            fm = fm.replace(re, `$1"${translated}"`);
            changed = true;
          }
        }
      }

      if (changed) {
        content = content.replace(fmMatch[1], fm);
        fs.writeFileSync(full, content);
        count++;
      }
    }
  }

  walk(docsDir);
  return count;
}

// ── Apply ──

console.log('=== Fixing EN sidebar ===');
const enSidebarCount = applyToSidebar(path.join(ROOT, 'sidebars.js'), VI_EN_MAP);
console.log(`Sidebar labels: ${enSidebarCount}`);

const enFmCount = fixFrontmatter(path.join(ROOT, 'docs'), VI_EN_MAP);
console.log(`Frontmatter: ${enFmCount} files`);

console.log('\n=== Fixing JA sidebar ===');
const jaSidebarCount = applyToSidebar(path.join(ROOT, 'sidebars-ja.js'), VI_JA_MAP);
console.log(`Sidebar labels: ${jaSidebarCount}`);

const jaFmCount = fixFrontmatter(path.join(ROOT, 'docs-ja'), VI_JA_MAP);
console.log(`Frontmatter: ${jaFmCount} files`);

// Verify
delete require.cache[require.resolve(path.join(ROOT, 'sidebars.js'))];
delete require.cache[require.resolve(path.join(ROOT, 'sidebars-ja.js'))];
require(path.join(ROOT, 'sidebars.js'));
require(path.join(ROOT, 'sidebars-ja.js'));
console.log('\nSyntax OK');

console.log(`\nTotal: ${enSidebarCount + jaSidebarCount} sidebar labels + ${enFmCount + jaFmCount} frontmatter files fixed`);
