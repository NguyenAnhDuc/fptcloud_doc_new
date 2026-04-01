---
id: "add-waf-server"
title: "WAFサーバーの追加"
description: "FPT Cloud PortalでWAFサーバーを追加するクイックスタートガイドです。"
sidebar_label: "WAFサーバーの追加"
sidebar_position: 3
---

# WAFサーバーの追加

1. メニューから**Security** > **Cloud WAF**を選択し、**Create WAF**をクリックします。

   [![WAF作成 — ステップ1](/img/migrated/Userguide-FPT-WAF-2022-1-1024x538-66a0aec1.png)](/img/migrated/Userguide-FPT-WAF-2022-1-1024x538-66a0aec1.png)

2. WAFサーバーの情報を入力し、適切なサイズを選択します。

   [![WAFサーバー情報の入力](/img/migrated/Userguide-FPT-WAF-2022-2-1024x538-6f8b611d.png)](/img/migrated/Userguide-FPT-WAF-2022-2-1024x538-6f8b611d.png)

   | フィールド | 説明 | 値 |
   |---|---|---|
   | **Name** | WAFサーバー名 | 英字、数字、スペースのみ使用可 |
   | **Description** | WAFの詳細説明 | |
   | **Default configured rules** | 作成時に適用される事前設定ルール | |
   | **Size** | WAFサーバーのサイズ | Small、Medium、またはLarge |

   サイズ別の仕様:

   | Size | 基本構成 | ネットワーク帯域幅 | リクエスト数/秒 |
   |---|---|---|---|
   | **Small** | 2 vCPU – 4 GB RAM – 150 GB | 100 Mbps | 50 |
   | **Medium** | 4 vCPU – 8 GB RAM – 300 GB | 200 Mbps | 150 |
   | **Large** | 8 vCPU – 16 GB RAM – 500 GB | 500 Mbps | 500 |

3. **Create WAF**をクリックしてサーバーを作成します。処理の進捗は**Cloud Web Application Firewall Management**画面の**Status**フィールドで確認できます。
