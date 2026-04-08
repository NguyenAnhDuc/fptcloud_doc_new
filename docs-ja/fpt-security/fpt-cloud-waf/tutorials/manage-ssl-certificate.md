---
id: "manage-ssl-certificate"
title: "SSL certificateの管理"
description: "WAF DashboardでLet's EncryptまたはCustom SSL certificateを作成・管理する方法。"
sidebar_label: "SSL certificateの管理"
sidebar_position: 10
---

# SSL certificateの管理

SSL certificate（TLS証明書）は、Webサイトとエンドユーザー間の通信を暗号化する鍵です。

## SSL certificateの作成

1. メニューから **SSL Certificates** を選択して管理画面を開きます。

   [![SSL certificate管理画面](/img/migrated/Userguide-FPT-WAF-2022-38-1024x578-810c62cf.png)](/img/migrated/Userguide-FPT-WAF-2022-38-1024x578-810c62cf.png)

2. **Create SSL Certificates** をクリックして新規作成画面を開きます。2つのモードがあります。

   **モード1: Let's Encrypt** — FPT Cloud WAFで利用可能な無料・自動更新のCA証明書。

   - **Domain Name**: SSL設定するドメイン名。
   - **Email Address for Let's Encrypt**: Let's Encrypt用メールアドレス。
   - **Use a DNS Challenge**（任意）: 必要に応じて有効化します。
   - **I Agree to the Let's Encrypt Terms of Service**: 利用規約に同意します。

   [![Let's Encrypt設定](/img/migrated/Userguide-FPT-WAF-2022-39-1024x578-92f29cbe.png)](/img/migrated/Userguide-FPT-WAF-2022-39-1024x578-92f29cbe.png)

   **モード2: Custom** — サードパーティ証明書を自己設定します。管理者が情報を自己管理します。

   - **Certificate Key**: Certificate Keyファイルをアップロードします。
   - **Certificate**: Certificateファイルをアップロードします。
   - **Intermediate Certificate**: Intermediate Certificateファイルをアップロードします。

   [![Custom certificate設定](/img/migrated/Userguide-FPT-WAF-2022-40-1024x578-650e0090.png)](/img/migrated/Userguide-FPT-WAF-2022-40-1024x578-650e0090.png)

3. **Create SSL Certificate** をクリックして保存します。

   [![SSL certificate一覧（作成後）](/img/migrated/Userguide-FPT-WAF-2022-41-1024x578-f0ea5431.png)](/img/migrated/Userguide-FPT-WAF-2022-41-1024x578-f0ea5431.png)
