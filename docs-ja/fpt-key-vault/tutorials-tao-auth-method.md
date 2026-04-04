---
id: "tutorials-tao-auth-method"
title: "Auth Methodを作成する"
description: "アプリケーションをVaultに認証させるAuth Methodを新規作成する方法"
sidebar_label: "Auth Methodを作成する"
sidebar_position: "11"
---

# Auth Methodを作成する

Auth MethodはアプリケーションまたはユーザーがVaultで認証してSecretのアクセストークンを取得する方法を定義します。FPT Key VaultはAppRoleタイプをサポートしており、マシン間認証に適しています。

1. **Key Vault Management** で **Auth Method** を追加する **Key Vault** を選択します。

   [![Key Vault Management一覧画面](/img/migrated/Userguide-FPT-KeyVault-2022-4-1024x538-3dcfc356.png)](/img/migrated/Userguide-FPT-KeyVault-2022-4-1024x538-3dcfc356.png)

2. **Access** タブを開き、**Create** をクリックします。

   [![Createボタンが表示されたAccessタブ](/img/migrated/Userguide-FPT-KeyVault-2022-23-1024x538-203d8c88.png)](/img/migrated/Userguide-FPT-KeyVault-2022-23-1024x538-203d8c88.png)

3. **Create New Auth Method** 画面で必要な情報を入力します:

   - **Mount Point**: 認証方式のSecret情報を保存するパーティション。
   - **Type**: **App Role** を選択します。

   [![Mount PointとTypeフィールドが表示されたCreate New Auth Methodフォーム](/img/migrated/Userguide-FPT-KeyVault-2022-24-de0b25f2.png)](/img/migrated/Userguide-FPT-KeyVault-2022-24-de0b25f2.png)

4. **Create** をクリックして完了します。システムが確認メッセージを送信し、新しい **Auth Method** を作成します。

   [![作成成功後のAuth Method一覧](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)

:::note
システムは常にタイプ **Token** のデフォルトAuth Methodを作成します。このAuth Methodは削除できません。
:::
