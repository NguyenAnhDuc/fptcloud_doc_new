#!/usr/bin/env node
/**
 * Fix all untranslated sidebar labels across 3 sidebar files.
 * Uses string replacement on label values only.
 */

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

// ── Common Vietnamese → English translations ──
const VI_TO_EN = {
  // Category labels with bilingual format
  'Hướng dẫn nhanh (Quick Starts)': 'Quick Starts',
  'Hướng dẫn chi tiết (Tutorials)': 'Tutorials',
  'Hướng dẫn chi tiết (Tutorial)': 'Tutorials',
  'Các câu hỏi thường gặp (FAQs)': 'FAQs',
  'Câu hỏi thường gặp (FAQs)': 'FAQs',
  'Thiết lập ban đầu (Initial Setup)': 'Initial Setup',
  'Tổng quan (Overview)': 'Overview',

  // Pure Vietnamese
  'Hướng dẫn chi tiết': 'Tutorials',
  'Hướng dẫn nhanh': 'Quick Starts',
  'Hướng dẫn sử dụng trên Docker CLI': 'Docker CLI Guide',
  'Hướng dẫn trên Gaia Portal': 'Gaia Portal Guide',
  'Hướng dẫn trên SmartConsole': 'SmartConsole Guide',
  'Đăng ký, đăng nhập': 'Registration & Sign In',
  'Đăng ký thông tin cá nhân/ tổ chức': 'Register Personal/Organization Info',
  'Nạp tiền vào tài khoản': 'Top Up Account',
  'Mua máy ảo': 'Purchase Virtual Machine',
  'Mua Public IP': 'Purchase Public IP',
  'Mua Storage': 'Purchase Storage',
  'Xem billing các dịch vụ trên hệ thống': 'View Service Billing',
  'Đăng nhập với tài khoản SSO (Azure)': 'Sign In with SSO Account (Azure)',
  'Đăng nhập với Account/Password': 'Sign In with Account/Password',
  'Quản lý Profile': 'Manage Profile',
  'Quản lý Group': 'Manage Group',
  'Quản lý Policy': 'Manage Policy',
  'Tạo một máy ảo': 'Create Virtual Machine',
  'Quản lý máy ảo': 'Manage Virtual Machines',
  'Quản lý GPU với Portal Console': 'Manage GPU with Portal Console',
  'Quản lý GPU Server với HPC Portal': 'Manage GPU Server with HPC Portal',
  'Quản lý Instance Template': 'Manage Instance Template',
  'Quản lý NIC (Network Interface Card)': 'Manage NIC (Network Interface Card)',
  'Quản lý Security Group': 'Manage Security Group',
  'Quản lý Instance Group với chính sách Affinity & Anti-Affinity': 'Manage Instance Group with Affinity & Anti-Affinity',
  'Quản lý Project': 'Manage Project',
  'Sử dụng Object Storage trên FPT Portal': 'Use Object Storage on FPT Portal',
  'Quản lý & thao tác VPN Connection': 'Manage VPN Connection',
  'Quản lý Load Balancer': 'Manage Load Balancer',
  'Quản lý Listener': 'Manage Listener',
  'Thay đổi cấu hình K8s Cluster': 'Modify K8s Cluster Configuration',
  'Thay đổi cấu hình K8S Cluster': 'Modify K8S Cluster Configuration',
  'Quản lý Role': 'Manage Role',
  'Quản lý Target': 'Manage Target',
  'Cấu hình webhook': 'Configure Webhook',
  'Quản lý account trên argocd': 'Manage Account on ArgoCD',
  'Quản lý dịch vụ FPT Database Engine': 'Manage FPT Database Engine Service',
  'Khởi tạo và vận hành cơ sở dữ liệu': 'Initialize and Operate Database',
  'Xem đối soát theo kỳ hóa đơn': 'View Billing Reconciliation',
  'Organization Management - Quản lý Organization': 'Organization Management',
  'Team Management - Quản lý Team': 'Team Management',
  'Integration Management - Quản lý tích hợp': 'Integration Management',
  'Workspace Management - Quản lý Asset và Issue': 'Workspace Management',
  'Schedule Management - Quản lý lịch chạy scan': 'Schedule Management',
  'Quản lý Managed GPU Cluster': 'Manage Managed GPU Cluster',
  'Quản lý Subnets': 'Manage Subnets',
  'Câu hỏi thường gặp': 'FAQs',
};

// ── English → Vietnamese translations ──
const EN_TO_VI = {
  'Initial Setup': 'Thiết lập ban đầu',
  'Overviews': 'Tổng quan',
  'Overview': 'Tổng quan',
  'Quick Start': 'Bắt đầu nhanh',
  'Configuration': 'Cấu hình',
  'Manage tag to Resource': 'Quản lý tag cho tài nguyên',
};

// ── Vietnamese → Japanese translations ──
const VI_TO_JA = {
  ...Object.fromEntries(Object.entries(VI_TO_EN).map(([vi, en]) => {
    // We'll define JA separately for accuracy
    return [vi, null];
  })),
  // Override with proper Japanese
  'Hướng dẫn nhanh (Quick Starts)': 'クイックスタート',
  'Hướng dẫn chi tiết (Tutorials)': 'チュートリアル',
  'Hướng dẫn chi tiết (Tutorial)': 'チュートリアル',
  'Các câu hỏi thường gặp (FAQs)': 'よくある質問',
  'Câu hỏi thường gặp (FAQs)': 'よくある質問',
  'Thiết lập ban đầu (Initial Setup)': '初期設定',
  'Tổng quan (Overview)': '概要',
  'Hướng dẫn chi tiết': 'チュートリアル',
  'Hướng dẫn nhanh': 'クイックスタート',
  'Hướng dẫn sử dụng trên Docker CLI': 'Docker CLI ガイド',
  'Hướng dẫn trên Gaia Portal': 'Gaia Portal ガイド',
  'Hướng dẫn trên SmartConsole': 'SmartConsole ガイド',
  'Đăng ký, đăng nhập': '登録・ログイン',
  'Đăng ký thông tin cá nhân/ tổ chức': '個人・組織情報の登録',
  'Nạp tiền vào tài khoản': 'アカウントチャージ',
  'Mua máy ảo': '仮想マシンの購入',
  'Mua Public IP': 'Public IPの購入',
  'Mua Storage': 'ストレージの購入',
  'Xem billing các dịch vụ trên hệ thống': 'サービス請求の確認',
  'Đăng nhập với tài khoản SSO (Azure)': 'SSO (Azure) アカウントでログイン',
  'Đăng nhập với Account/Password': 'アカウント/パスワードでログイン',
  'Quản lý Profile': 'Profileの管理',
  'Quản lý Group': 'Groupの管理',
  'Quản lý Policy': 'Policyの管理',
  'Tạo một máy ảo': '仮想マシンの作成',
  'Quản lý máy ảo': '仮想マシンの管理',
  'Quản lý GPU với Portal Console': 'Portal ConsoleでのGPU管理',
  'Quản lý GPU Server với HPC Portal': 'HPC PortalでのGPU Server管理',
  'Quản lý Instance Template': 'Instance Templateの管理',
  'Quản lý NIC (Network Interface Card)': 'NIC (Network Interface Card) の管理',
  'Quản lý Security Group': 'Security Groupの管理',
  'Quản lý Instance Group với chính sách Affinity & Anti-Affinity': 'Affinity & Anti-Affinity Instanceグループの管理',
  'Quản lý Project': 'Projectの管理',
  'Sử dụng Object Storage trên FPT Portal': 'FPT PortalでのObject Storageの利用',
  'Quản lý & thao tác VPN Connection': 'VPN Connectionの管理',
  'Quản lý Load Balancer': 'Load Balancerの管理',
  'Quản lý Listener': 'Listenerの管理',
  'Thay đổi cấu hình K8s Cluster': 'K8s Cluster設定の変更',
  'Thay đổi cấu hình K8S Cluster': 'K8S Cluster設定の変更',
  'Quản lý Role': 'Roleの管理',
  'Quản lý Target': 'Targetの管理',
  'Cấu hình webhook': 'Webhookの設定',
  'Quản lý account trên argocd': 'ArgoCD上のアカウント管理',
  'Quản lý dịch vụ FPT Database Engine': 'FPT Database Engineサービスの管理',
  'Khởi tạo và vận hành cơ sở dữ liệu': 'データベースの初期化と運用',
  'Xem đối soát theo kỳ hóa đơn': '請求期間別の照合確認',
  'Organization Management - Quản lý Organization': 'Organization管理',
  'Team Management - Quản lý Team': 'Team管理',
  'Integration Management - Quản lý tích hợp': '統合管理',
  'Workspace Management - Quản lý Asset và Issue': 'Workspace管理',
  'Schedule Management - Quản lý lịch chạy scan': 'スケジュール管理',
  'Quản lý Managed GPU Cluster': 'Managed GPU Clusterの管理',
  'Quản lý Subnets': 'Subnetsの管理',
  'Câu hỏi thường gặp': 'よくある質問',
};

// ── English → Japanese translations ──
const EN_TO_JA = {
  'Initial Setup': '初期設定',
  'Overviews': '概要',
  'Overview': '概要',
  'Quick Start': 'クイックスタート',
  'Configuration': '設定',
  'Manage tag to Resource': 'リソースのタグ管理',
  'Step By Step': 'ステップバイステップ',
};

function applyReplacements(content, replacements) {
  let result = content;
  let count = 0;

  for (const [from, to] of Object.entries(replacements)) {
    if (!to) continue; // Skip null mappings
    // Only replace in label values: label:  "xxx" or label: 'xxx' (1 or 2 spaces)
    const patterns = [
      { regex: new RegExp(`label:\\s+"${escapeRegex(from)}"`, 'g'), replacement: `label:  "${to}"` },
      { regex: new RegExp(`label:\\s+'${escapeRegex(from)}'`, 'g'), replacement: `label:  "${to}"` },
    ];

    for (const { regex, replacement } of patterns) {
      const matches = result.match(regex);
      if (matches) {
        count += matches.length;
        result = result.replace(regex, replacement);
      }
    }
  }

  return { result, count };
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&');
}

// ── Process each file ──

const files = [
  {
    path: path.join(ROOT, 'sidebars.js'),
    name: 'EN',
    replacements: VI_TO_EN,
  },
  {
    path: path.join(ROOT, 'sidebars-vi.js'),
    name: 'VI',
    replacements: EN_TO_VI,
  },
  {
    path: path.join(ROOT, 'sidebars-ja.js'),
    name: 'JA',
    replacements: { ...VI_TO_JA, ...EN_TO_JA },
  },
];

let totalFixes = 0;

for (const file of files) {
  const content = fs.readFileSync(file.path, 'utf-8');
  const { result, count } = applyReplacements(content, file.replacements);

  if (count > 0) {
    fs.writeFileSync(file.path, result, 'utf-8');
    console.log(`[${file.name}] ${file.path}: ${count} labels fixed`);
    totalFixes += count;
  } else {
    console.log(`[${file.name}] ${file.path}: no changes needed`);
  }
}

console.log(`\nTotal: ${totalFixes} labels fixed`);

// Validate
for (const file of files) {
  try {
    delete require.cache[require.resolve(file.path)];
    require(file.path);
    console.log(`[${file.name}] Syntax OK`);
  } catch (e) {
    console.error(`[${file.name}] SYNTAX ERROR: ${e.message}`);
  }
}
