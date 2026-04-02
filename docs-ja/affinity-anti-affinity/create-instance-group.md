---
id: "create-instance-group"
title: "Instance Groupの作成"
description: "AffinityまたはAnti-Affinityポリシーで新しいInstance Groupを作成するガイド。"
sidebar_label: "Instance Groupの作成"
sidebar_position: 3
---

# Instance Groupの作成

Soft Affinity または Soft Anti-Affinity ポリシーで新しい Instance Group を作成できます。

:::warning
Instance Group は作成後に編集できません。変更が必要な場合は、現在のグループを削除して新しいグループを作成してください。
:::

1. **Compute Engine** → **Instance Group** → **Create Instance Group** を選択します。

   ![Instance Group管理画面](/img/migrated/image-1705024581953-a55d4346.png)

2. 必要な情報を入力します:
   - **Name**: Instance Group 名。
   - **Policy**: **Soft Affinity** または **Soft Anti-Affinity** を選択。

   ![Instance Group作成フォーム](/img/migrated/image-1705024842925-f64a0e6f.png)

3. **Create Instance Group** をクリックします。

新しい Instance Group が **Instance Group Management** リストに表示されます。

![Instance Groupの作成完了](/img/migrated/image-1705024897223-9b650495.png)
