---
id: "roles"
title: "ロールの管理"
description: "FPT Smart Cloud Database Engine の IAM ロールを作成・管理する手順。"
sidebar_label: "ロールの管理"
sidebar_position: 7
---

# ロールの管理

## ロールの作成

1. Portal の **IAM** タブ > **Roles** を選択し、**Create Role** をクリックします。
[![](/img/migrated/Roles_b1-8117f050.jpg)](/img/migrated/Roles_b1-8117f050.jpg)
2. **Create role** 画面が表示されます。必要に応じて **Name** と **Description** を入力します。
[![](/img/migrated/Roles_b2-602cef2c.jpg)](/img/migrated/Roles_b2-602cef2c.jpg)
3. **Filter** を選択すると **Permission filter** ポップアップが表示されます。**Permission** の値（manageDatabase タイプの値、例: manageDatabase:List）を入力し、**Type ManageDatabase** をリストから選択して **Show** をクリックします。
[![](/img/migrated/Roles_b3-329193e1.jpg)](/img/migrated/Roles_b3-329193e1.jpg)

   :::note
   Filter ステップでは Permission を入力せずに Type のみを選択すると、ManageDatabase のすべての権限値が表示されます。
   :::

4. **ManageDatabase** に属する権限をチェック/非チェックして必要な権限を設定し、**Create role** をクリックします。
[![](/img/migrated/Roles_b4-76491f25.jpg)](/img/migrated/Roles_b4-76491f25.jpg)

ロールが **Active** 状態で正常に作成されます。
[![](/img/migrated/Roles_b5-05b90a70.jpg)](/img/migrated/Roles_b5-05b90a70.jpg)
