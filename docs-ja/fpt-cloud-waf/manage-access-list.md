---
id: "manage-access-list"
title: "Access listの管理"
description: "WAF DashboardでアクセスリストのWhitelist/BlacklistとHTTP Basic認証を設定する方法。"
sidebar_label: "Access listの管理"
sidebar_position: 20
---

# Access listの管理

**Access list** は、特定のIPアドレスに対するWhitelist/Blacklist機能とHTTP Basic認証をProxy hostに組み合わせる機能です。管理者は複数のルールを設定し、user/passwordをaccess listに割り当てて各proxy hostに適用できます。

この機能は、認証機能を持たないWebサービスの保護や、不明なIPからのアクセスを制限する場合に有効です。

## Access listの作成

1. メニューから **Access List** を選択して管理画面を開きます。

   [![Access list管理画面](/img/migrated/Userguide-FPT-WAF-2022-34-1024x499-a6882854.png)](/img/migrated/Userguide-FPT-WAF-2022-34-1024x499-a6882854.png)

2. **Create Access List** をクリックして新規作成画面を開き、情報を入力します。

   - **Name**: Access listの名前。
   - **Satisfy Any**
   - **Pass Auth to Host**

3. **Create Access List** をクリックして作成し、詳細画面を開きます。

## 詳細設定

### HTTP Basic認証の追加

1. **Create Basic Auth** をクリックして認証アカウントを追加します。

   - **Username**: 認証ユーザー名。
   - **Password**: 認証パスワード。

   **Create Basic Auth** または **Create & Add Another** をクリックして複数アカウントを追加します。

   [![Basic Auth設定](/img/migrated/Userguide-FPT-WAF-2022-35-1024x517-4d36978c.png)](/img/migrated/Userguide-FPT-WAF-2022-35-1024x517-4d36978c.png)

### Whitelist/Blacklist IPの追加

2. **Create Whitelist/Blacklist** をクリックしてIPアドレスまたはサブネットを追加します。

   - **Allow**: アクセスを許可するIPまたはサブネット。
   - **Deny**: アクセスを拒否するIPまたはサブネット。
   - **IP / Subnet**: IPアドレスまたはサブネットを入力します。

   :::note
   Allow/denyルールは定義された順序で適用されます。
   :::

   [![Whitelist/Blacklist設定](/img/migrated/Userguide-FPT-WAF-2022-36-1024x519-0778cdff.png)](/img/migrated/Userguide-FPT-WAF-2022-36-1024x519-0778cdff.png)

### Proxy hostへの割り当て

3. **Create Proxy** をクリックして作成したaccess listをproxy hostに適用します。

   [![Proxy hostへの割り当て](/img/migrated/Userguide-FPT-WAF-2022-37-1024x516-993c3cc6.png)](/img/migrated/Userguide-FPT-WAF-2022-37-1024x516-993c3cc6.png)

## その他の操作

| 操作 | 説明 |
|---|---|
| **Edit** | Access listの情報を編集します |
| **View** | Access listの詳細を表示します |
| **Delete** | Access listを削除します |
