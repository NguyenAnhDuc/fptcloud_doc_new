---
id: "Create-Auth-Method"
title: "Auth Methodを作成する"
description: "アプリケーションをVaultに認証させるAuth Methodを新規作成する方法"
sidebar_label: "Auth Methodを作成する"
sidebar_position: 15
---

# Auth Methodを作成する

Auth MethodはアプリケーションまたはユーザーがVaultで認証してSecretのアクセストークンを取得する方法を定義します。FPT Key VaultはAppRoleタイプをサポートしており、マシン間認証に適しています。

1. Key Vault Management画面でAuth Methodを追加するKey Vaultを選択します。

   [![Key Vault Management一覧画面](/img/migrated/acc1-815ef22e.png)](/img/migrated/acc1-815ef22e.png)

2. **Access** タブで **Create** をクリックします。

   [![Createボタンが表示されたAccessタブ](/img/migrated/acc2-92ea8af3.png)](/img/migrated/acc2-92ea8af3.png)

3. **Create New Auth Method** ポップアップで必要な情報を入力します:

   - **Mount Point**: 認証方式のSecret情報を保存するパーティション。
   - **Type**: **App Role** を選択します。

   [![Mount PointとTypeフィールドが表示されたCreate New Auth Methodフォーム](/img/migrated/acc3-81005be5.png)](/img/migrated/acc3-81005be5.png)

4. **Create** をクリックして続行します。システムが確認メッセージを送信し、入力した情報に基づいて新しい **Auth Method** を作成します。

:::note
システムは常にタイプ **Token** のデフォルトAuth Methodを作成します。このAuth Methodは削除できません。
:::
