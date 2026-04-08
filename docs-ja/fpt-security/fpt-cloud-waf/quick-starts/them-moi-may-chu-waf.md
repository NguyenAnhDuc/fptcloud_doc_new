---
id: "them-moi-may-chu-waf"
title: "WAFサーバーの追加"
sidebar_label: "WAFサーバーの追加"
sidebar_position: 1
---

新しい WAF サーバーの作成

**手順 1:** メニューで **Security > Cloud WAF** を選択し、**Create WAF** を選択します。

![Userguide FPT WAF 2022 1](/img/migrated/docs-ja-fpt-cloud-waf/them-moi-may-chu-waf/img-001.png)

**手順 2:** **WAF** の情報を入力し、適切なサイズを選択します。

![Userguide FPT WAF 2022 2](/img/migrated/docs-ja-fpt-cloud-waf/them-moi-may-chu-waf/img-002.png)

**フィールド** | **説明** | **値**
---|---|---
**Name** | WAF サーバー名を入力します | 英字、数字、スペースのみ使用可能
**Description** | WAF の詳細説明を入力します |
**Default configured rules** | WAF サーバー作成時に利用可能なデフォルトルールセットの一覧 |
**Size** | 要件に応じて WAF サーバーのサイズを選択します | 異なる構成の 3 つの WAF サイズ: Small、Medium、Large

各サイズの具体的な構成については、以下の表を参照してください。

|  |  |
---|---|---|---
**サイズ** | **基本構成** | **ネットワーク帯域幅** | **対応リクエスト数/秒**
**Small** | 2vCPU – 4GB RAM – 150GB ストレージ | 100 Mbps | 50
**Medium** | 4vCPU – 8GB RAM – 300GB ストレージ | 200 Mbps | 150
**Large** | 8vCPU – 16GB RAM – 500GB ストレージ | 500 Mbps | 500

**手順 3:** **Create WAF** を選択して、選択した情報と構成で WAF サーバーを作成します。処理の進捗は **Cloud Web Application Firewall Management** 画面の Status フィールドで確認できます。
