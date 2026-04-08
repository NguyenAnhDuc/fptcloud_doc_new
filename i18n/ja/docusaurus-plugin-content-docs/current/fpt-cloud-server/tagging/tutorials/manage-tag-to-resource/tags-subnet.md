---
id: "tags-subnet"
title: "Subnetのタグ管理"
description: "Subnetにtagを割り当てて管理します — 作成時または作成後に設定できます。"
sidebar_label: "Subnetのタグ管理"
sidebar_position: 7
---

# Subnetのタグ管理

Subnetにtagを割り当てると、サブネットをプロジェクトや環境別に分類でき、ネットワークインフラの管理が容易になります。

## Subnet作成時のタグ割り当て

1. メニューから **Subnet** を選択し、**Create subnet** をクリックします。

   [![Create subnetボタンのあるSubnet画面](/img/migrated/image-1721034781650-31f7f246.png)](/img/migrated/image-1721034781650-31f7f246.png)

2. **Create subnet** ページで、**Add tag (optional)** フィールドからtagを選択します。

   [![Add tagフィールドのあるCreate subnetページ](/img/migrated/image-1721034795338-032c129b.png)](/img/migrated/image-1721034795338-032c129b.png)

3. その他の情報を入力し、**Create subnet** をクリックします。

割り当てられたtagは **Subnet** 画面の **Tags** フィールドに表示されます。

[![tagが割り当てられたSubnetリスト](/img/migrated/image-1721034807246-4eb48b05.png)](/img/migrated/image-1721034807246-4eb48b05.png)

## 既存Subnetのタグ管理

1. メニューから **Subnet** を選択し、対象のsubnetを選んで **Actions** → **Manage tags** をクリックします。

   [![SubnetのManage tagsオプションのあるActionsメニュー](/img/migrated/image-1721034830614-0a44d416.png)](/img/migrated/image-1721034830614-0a44d416.png)

2. ダイアログボックスが表示されます。Subnetに割り当てるtagを選択します。

   [![SubnetのManage tagsダイアログ](/img/migrated/image-1721034842841-94a4bdb4.png)](/img/migrated/image-1721034842841-94a4bdb4.png)

3. tagを削除するには、tag名の横にある **x** をクリックします。リストボックス末尾の **x** をクリックすると、すべてのtagを一度に削除できます。**Save** をクリックして確定します。

   [![タグ削除オプションのあるManage tagsダイアログ](/img/migrated/image-1721034855299-a138f9c7.png)](/img/migrated/image-1721034855299-a138f9c7.png)

:::warning
Subnetを削除すると、システムは関連するすべてのtagを自動的に削除し、Tagging画面のtagリストを更新します。
:::

## 次のステップ

- [Security Groupのタグ管理](./tags-security-group.md)
