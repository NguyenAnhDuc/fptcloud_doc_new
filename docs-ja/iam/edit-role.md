---
id: "edit-role"
title: "RoleとPermissionの編集"
description: "FPT IAMでCustom Roleの情報とPermissionを変更する方法。"
sidebar_label: "RoleとPermissionの編集"
sidebar_position: 8
---

# RoleとPermissionの編集

Custom Roleの情報とPermissionを以下の手順で変更できます。

1. **IAM** > **Roles** を選択します。**Role Management** ページが表示されます。

[![](/img/migrated/image-1734344271940-4a804c14.png)](/img/migrated/image-1734344271940-4a804c14.png)

2. 一覧から更新するCustom Roleの末尾にある **Action** を選択します。
3. **Edit Basic Information** または **Edit Permissions** を選択します。

   - **Edit Basic Information**: Roleの名前と説明を編集します。

[![](/img/migrated/image-1734344299974-74ad3c1a.png)](/img/migrated/image-1734344299974-74ad3c1a.png)

   - **Edit Permissions**: Roleの権限リストを編集します。

[![](/img/migrated/image-1734344312048-ce9f5aea.png)](/img/migrated/image-1734344312048-ce9f5aea.png)

:::warning
Roleを変更すると、そのRoleが割り当てられている全User Group内の全ユーザーのアクセス権に影響します。
:::
