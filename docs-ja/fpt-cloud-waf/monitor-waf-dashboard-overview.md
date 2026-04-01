---
id: "monitor-waf-dashboard-overview"
title: "Dashboard OverviewでWAFを監視する"
description: "Overviewページを使用してWAFサーバーのステータスとメトリクスをリアルタイムで監視するガイドです。"
sidebar_label: "Dashboard OverviewでWAFを監視する"
sidebar_position: 10
---

# Dashboard OverviewでWAFを監視する

**Home dashboard**は、管理者がWAFサーバーのさまざまなパラメーターと統計をリアルタイムで監視できる概要ページです。

**WAF Dashboard**で**Overview**を選択します。画面には継続的に更新されるメトリクスが表示されます。

| メトリクス | 説明 |
|---|---|
| **Total Hosts** | 作成済みのproxy host数 |
| **Total Redirection** | 作成済みのredirection host数 |
| **Total Stream** | 作成済みのstream host数 |
| **Total Not Found Hosts** | 作成済みの404 Not Found host数 |
| **Active Connections** | proxy hostで現在アクティブな接続数 |
| **Security Events** | WAFがブロックおよび記録したセキュリティイベントの合計数 |
| **Top By Attack Type** | WAFがブロックした最も頻繁な攻撃タイプ |
| **Top By RuleID** | 最も頻繁に違反されたルールID |
| **Top By Host** | セキュリティイベントが最も多いproxy host |
| **Top By Source Attack** | 最も多くの攻撃が記録された送信元IPアドレス |

[![Dashboard Overview](/img/migrated/Userguide-FPT-WAF-2022-9-1024x538-d28bf827.png)](/img/migrated/Userguide-FPT-WAF-2022-9-1024x538-d28bf827.png)
