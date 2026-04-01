---
id: "create-proxy-host"
title: "Proxy hostの作成"
description: "WAF DashboardでWAFを通じてトラフィックを転送する新しいproxy hostを作成するガイドです。"
sidebar_label: "Proxy hostの作成"
sidebar_position: 12
---

# Proxy hostの作成

1. **WAF Dashboard**で**Hosts** > **Proxy**を選択し、**Create Proxy**をクリックします。

   [![Proxy host画面 — 新規作成](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)

2. 必要な情報を入力します。

   - **Source:**
     - **Hostname**: ドメイン名を入力します。
     - **Port**: デフォルトは80です。SSL certificateを使用する場合はポート443を選択します。
   - **Destination:**
     - **Forward Scheme**: httpまたはhttpsを選択します。
     - **Forward Hostname/IP**: WebサーバーのパブリックIPまたはドメインを入力します。WAFとWebサーバーが同じサブネットにある場合はプライベートIPを使用できます。
     - **Forward Port**: Webサーバーが使用しているポートを入力します。

   :::note
   Forward PortはWebサーバー上で接続のために開放されているポートである必要があります。
   :::

   オプション機能:
   - **Cache Assets**
   - **Block Common Exploits**
   - **Websockets Support**

   追加フィールド:
   - **Rule Set**: FPT Cloud WAFのデフォルトルールセットが適用されます。カスタムルールセットが作成済みの場合は選択できます。
   - **Access List**: このproxy hostに適用する既存のaccess listを選択します。
   - **SSL Certificate**: ドメイン/WebサイトのSSL certificateを選択します。未作成の場合は**None**を選択します。

   [![proxy host詳細の入力](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)

3. **Create Proxy**をクリックして作成するか、**Create & Add Another**をクリックして作成後に別のproxy hostを追加します。
