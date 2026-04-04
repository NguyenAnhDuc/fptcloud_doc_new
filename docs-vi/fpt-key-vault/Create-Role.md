---
id: "Create-Role"
title: "Create Role"
description: "**Step 1** : Select the Auth Method to create **Role** on the Access Management screen:"
sidebar_label: "Create Role"
sidebar_position: "16"
---

# Roleを作成する

RoleはAuth MethodとPolicyを紐付け、認証成功時にアプリケーションが受け取る権限セットを定義します。Role作成後、システムは認証に使用する **Role ID** と **Secret ID** を生成します。

1. Access Management画面でRoleを追加するAuth Methodを選択します。

   [![Auth Method一覧画面](/img/migrated/me1-e75dabad.png)](/img/migrated/me1-e75dabad.png)

2. **Create** をクリックします。

   [![Createボタンが表示されたAccess詳細画面](/img/migrated/me2-989c0f02.png)](/img/migrated/me2-989c0f02.png)

3. **Create New Role** ポップアップで必要な情報を入力します:

   - **Role Name**: Roleの名前。
   - **Assigned Groups**: Policy管理で作成したPolicyを追加します。

   [![Role NameとAssigned Groupsフィールドが表示されたCreate New Roleフォーム](/img/migrated/me3-5e8158cb.png)](/img/migrated/me3-5e8158cb.png)

4. **Create** をクリックして続行します。作成に成功すると、**Role ID** と **Secret ID** を含むポップアップが表示されます。

   [![作成成功後にRole IDとSecret IDが表示されたポップアップ](/img/migrated/me4-82631400.png)](/img/migrated/me4-82631400.png)

:::warning
**Role ID** と **Secret ID** は一度だけ表示されます。作成直後に安全な場所に保存してください。
:::
