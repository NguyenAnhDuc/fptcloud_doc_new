---
id: "configure-waf-server-connection"
title: "WAFサーバー接続の設定"
description: "WAFサーバーをWebサーバーに接続し、proxy hostを追加してSSL certificateを設定するガイドです。"
sidebar_label: "WAFサーバー接続の設定"
sidebar_position: 5
---

# WAFサーバー接続の設定

## 1. WAFサーバーをWebサーバーに接続する

- WebサーバーがFPT Cloud上のWAFサーバーと同じVPCにある場合は、WebサーバーがWAFサーバーのサブネットに属していることを確認します。
- WebサーバーがFPT CloudのVPC外にある場合、WAFサーバーはWebサーバーのパブリックIPを通じて接続する必要があります。

## 2. リクエストを転送するproxy hostを追加する

1. **WAF Dashboard**で**Hosts** > **Proxy**を選択し、**Create Proxy**をクリックします。

   [![Proxy host画面 — 新規作成](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)](/img/migrated/Userguide-FPT-WAF-2022-5-1024x538-0fdd5518.png)

2. 必要な情報を入力します。

   [![proxy host詳細の入力](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)](/img/migrated/Userguide-FPT-WAF-2022-6-1024x538-144ab6ab.png)

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

   - **Security**: FPT Cloud WAFの最適化されたルールセットを適用するため、Default Rule（**CyWAF Rule**）を選択します。

## 3. SSL certificateを追加する

1. **WAF Dashboard**で**SSL Certificates**を選択し、**Create SSL Certificates**をクリックします。

   [![SSL certificate作成 — ステップ1](/img/migrated/Userguide-FPT-WAF-2022-7-1024x538-743bb54d.png)](/img/migrated/Userguide-FPT-WAF-2022-7-1024x538-743bb54d.png)

2. [SSL certificateの管理](manage-ssl-certificates.md)の説明に従って証明書の詳細を入力します。

   [![SSL certificate詳細の入力](/img/migrated/Userguide-FPT-WAF-2022-8-1024x538-dac448e9.png)](/img/migrated/Userguide-FPT-WAF-2022-8-1024x538-dac448e9.png)

## 4. Dashboard Overviewで監視する

ドメイン/WebサイトをWAFサーバーに正常に接続したら、**Overview**ページに移動してWAFサーバーのステータスを監視します。

[![Dashboard Overview](/img/migrated/Userguide-FPT-WAF-2022-9-1024x538-d28bf827.png)](/img/migrated/Userguide-FPT-WAF-2022-9-1024x538-d28bf827.png)
