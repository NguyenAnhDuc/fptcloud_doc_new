---
id: "tags-security-group"
title: "Security Groupのタグ管理"
description: "Security Groupにtagを割り当てて管理します — 作成時または作成後に設定できます。"
sidebar_label: "Security Groupのタグ管理"
sidebar_position: 8
---

# Security Groupのタグ管理

Security Groupにtagを割り当てると、セキュリティポリシーをプロジェクトや環境別に分類でき、アクセス管理が容易になります。

## Security Group作成時のタグ割り当て

1. メニューから **Security group** を選択し、**Create security group** をクリックします。

   [![Create security groupボタンのあるSecurity group画面](/img/migrated/image-1721034868364-9582cb2e.png)](/img/migrated/image-1721034868364-9582cb2e.png)

2. **Create security group** ページで、**Add tag (optional)** フィールドからtagを選択します。

   [![Add tagフィールドのあるCreate security groupページ](/img/migrated/image-1721034882491-a8d79b00.png)](/img/migrated/image-1721034882491-a8d79b00.png)

3. その他の情報を入力し、**Create security group** をクリックします。

割り当てられたtagは **Security group** 画面の **Tags** フィールドに表示されます。

[![tagが割り当てられたSecurity Groupリスト](/img/migrated/image-1721034894848-efbc40e0.png)](/img/migrated/image-1721034894848-efbc40e0.png)

## 既存Security Groupのタグ管理

1. メニューから **Security group** を選択し、対象のsecurity groupを選んで **Actions** → **Manage tags** をクリックします。

   [![Security GroupのManage tagsオプションのあるActionsメニュー](/img/migrated/image-1721034908522-a8960341.png)](/img/migrated/image-1721034908522-a8960341.png)

2. ダイアログボックスが表示されます。Security Groupに割り当てるtagを選択します。

   [![Security GroupのManage tagsダイアログ](/img/migrated/image-1721034922176-ded21a16.png)](/img/migrated/image-1721034922176-ded21a16.png)

3. tagを削除するには、tag名の横にある **x** をクリックします。リストボックス末尾の **x** をクリックすると、すべてのtagを一度に削除できます。**Save** をクリックして確定します。

   [![タグ削除オプションのあるManage tagsダイアログ](/img/migrated/image-1721034933906-b25bc9ee.png)](/img/migrated/image-1721034933906-b25bc9ee.png)

:::warning
Security Groupを削除すると、システムは関連するすべてのtagを自動的に削除し、Tagging画面のtagリストを更新します。
:::

## 次のステップ

- [Load Balancerのタグ管理](./tagg-lb.md)
