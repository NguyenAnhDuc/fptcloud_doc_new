---
id: "tutorials-tao-role"
title: "Roleを作成する"
description: "Secretアクセス権限を付与するAuth Method内のRoleを新規作成する方法"
sidebar_label: "Roleを作成する"
sidebar_position: "12"
---

# Roleを作成する

RoleはAuth MethodとPolicyを紐付け、認証成功時にアプリケーションが受け取る権限セットを定義します。Role作成後、システムは認証に使用する **Role ID** と **Secret ID** を生成します。

1. **Access Detail** で **Role** を追加する **Auth Method** を選択します。

   [![Auth Method一覧画面](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)

2. **Create** をクリックします。

   [![Createボタンが表示されたAccess Detail画面](/img/migrated/Userguide-FPT-KeyVault-2022-26-1024x538-35ec4a72.png)](/img/migrated/Userguide-FPT-KeyVault-2022-26-1024x538-35ec4a72.png)

3. **Create New Role** 画面で必要な情報を入力します:

   - **Role Name**: Roleの名前。
   - **Assigned Groups**: Policy管理で作成したPolicyを追加します。

   [![Role NameとAssigned Groupsフィールドが表示されたCreate New Roleフォーム](/img/migrated/Userguide-FPT-KeyVault-2022-27-edacd088.png)](/img/migrated/Userguide-FPT-KeyVault-2022-27-edacd088.png)

4. **Create** をクリックします。作成に成功すると、**Role ID** と **Secret ID** を含むポップアップが表示されます。

   [![作成成功後にRole IDとSecret IDが表示されたポップアップ](/img/migrated/Userguide-FPT-KeyVault-2022-28-1043058f.png)](/img/migrated/Userguide-FPT-KeyVault-2022-28-1043058f.png)

:::warning
**Role ID** と **Secret ID** は一度だけ表示されます。作成直後に安全な場所に保存してください。
:::
