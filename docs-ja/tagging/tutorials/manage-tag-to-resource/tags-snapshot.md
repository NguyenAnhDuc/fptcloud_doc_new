---
id: "tags-snapshot"
title: "Snapshotのタグ管理"
description: "Snapshotにtagを割り当てて管理します — InstanceまたはStorage Diskから作成時に設定できます。"
sidebar_label: "Snapshotのタグ管理"
sidebar_position: 4
---

# Snapshotのタグ管理

Snapshotにtagを割り当てると、バックアップをプロジェクトや目的別に分類でき、検索と管理が容易になります。

## InstanceからSnapshot作成時のタグ割り当て

1. メニューから **Instance Management** を選択し、**Actions** → **Create snapshot** をクリックします。

   [![Create snapshotオプションのあるActionsメニュー](/img/migrated/image-1721015609867-c4ddd33b.png)](/img/migrated/image-1721015609867-c4ddd33b.png)

2. **Create instance snapshot** ダイアログボックスで、**Add tag (optional)** フィールドからtagを選択します。

   [![Add tagフィールドのあるCreate instance snapshotダイアログ](/img/migrated/image-1721015621343-b9f22c97.png)](/img/migrated/image-1721015621343-b9f22c97.png)

## Storage DiskからSnapshot作成時のタグ割り当て

1. メニューから **Storage disk** を選択し、**Actions** → **Create volume snapshot** をクリックします。

   [![Create volume snapshotオプションのあるActionsメニュー](/img/migrated/image-1721015651110-79c2804c.png)](/img/migrated/image-1721015651110-79c2804c.png)

2. **Create volume snapshot** ダイアログボックスで、**Add tag (optional)** フィールドからtagを選択します。

   [![Add tagフィールドのあるCreate volume snapshotダイアログ](/img/migrated/image-1721015663094-733cc8b6.png)](/img/migrated/image-1721015663094-733cc8b6.png)

## 既存Snapshotのタグ管理

1. メニューから **Snapshot** を選択します。**Instance snapshot** タブで **Manage tags** をクリックします。

   [![Manage tagsオプションのあるInstance snapshotタブ](/img/migrated/image-1721015686871-371220cc.png)](/img/migrated/image-1721015686871-371220cc.png)

2. ダイアログボックスが表示されます。Snapshotに割り当てるtagを選択します。

   [![SnapshotのManage tagsダイアログ](/img/migrated/image-1721015699377-5c976a3c.png)](/img/migrated/image-1721015699377-5c976a3c.png)

3. tagを削除するには、tag名の横にある **x** をクリックします。リストボックス末尾の **x** をクリックすると、すべてのtagを一度に削除できます。**Save** をクリックして確定します。

   [![タグ削除オプションのあるManage tagsダイアログ](/img/migrated/image-1721015718376-1c3d39b9.png)](/img/migrated/image-1721015718376-1c3d39b9.png)

:::warning
Snapshotを削除すると、システムは関連するすべてのtagを自動的に削除し、Tagging画面のtagリストを更新します。
:::

## 次のステップ

- [Custom Imageのタグ管理](./tags-custom-image.md)
