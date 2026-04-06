---
id: "tags-floating-ip"
title: "Floating IPのタグ管理"
description: "Floating IPにtagを割り当てて管理します — 割り当て時または作成後に設定できます。"
sidebar_label: "Floating IPのタグ管理"
sidebar_position: 11
slug: /タグ-付け/tags-floating-ip
---

# Floating IPのタグ管理

Floating IPにtagを割り当てると、IPアドレスをプロジェクトや環境別に分類でき、ネットワーク管理とコスト管理が容易になります。

## Floating IP割り当て時のタグ割り当て

1. メニューから **Floating IP** を選択し、**Allocate floating IP** をクリックします。

   [![Allocate floating IPボタンのあるFloating IP画面](/img/migrated/image-1721033013519-4b52f8a3.png)](/img/migrated/image-1721033013519-4b52f8a3.png)

2. **Allocate floating IP** ダイアログボックスで、**Add tag (optional)** フィールドからtagを選択します。

   [![Add tagフィールドのあるAllocate floating IPダイアログ](/img/migrated/image-1721033024980-d3da2516.png)](/img/migrated/image-1721033024980-d3da2516.png)

3. その他の情報を入力し、**Allocate floating IP** をクリックします。

割り当てられたtagは **Floating IP** 画面の **Tags** フィールドに表示されます。

[![tagが割り当てられたFloating IPリスト](/img/migrated/image-1721033045955-e90a291a.png)](/img/migrated/image-1721033045955-e90a291a.png)

## 既存Floating IPのタグ管理

1. メニューから **Floating IP** を選択し、**Actions** → **Manage tags** をクリックします。

   [![Floating IPのManage tagsオプションのあるActionsメニュー](/img/migrated/image-1721033062003-848e2fa0.png)](/img/migrated/image-1721033062003-848e2fa0.png)

2. ダイアログボックスが表示されます。Floating IPに割り当てるtagを選択します。

   [![Floating IPのManage tagsダイアログ](/img/migrated/image-1721033073805-c26dcd82.png)](/img/migrated/image-1721033073805-c26dcd82.png)

3. tagを削除するには、tag名の横にある **x** をクリックします。リストボックス末尾の **x** をクリックすると、すべてのtagを一度に削除できます。**Save** をクリックして確定します。

   [![タグ削除オプションのあるManage tagsダイアログ](/img/migrated/image-1721033085127-782fa93d.png)](/img/migrated/image-1721033085127-782fa93d.png)

:::warning
Floating IPを削除すると、システムは関連するすべてのtagを自動的に削除し、Tagging画面のtagリストを更新します。
:::

## 次のステップ

- [Subnetのタグ管理](./サブネット_6.md)
