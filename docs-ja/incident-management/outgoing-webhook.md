---
id: "outgoing-webhook"
title: "Outgoing webhook"
description: "リアルタイムのインシデント通知を受信するための outgoing webhook を設定するガイド"
sidebar_label: "Outgoing webhook"
sidebar_position: 6
---

# Outgoing webhook

**Outgoing webhook** はリアルタイムの通知とアップデートを受信できます。Incident が作成、更新、またはクローズされると、システムはイベントをトリガーして、指定された URL に通知を送信します。

Outgoing webhook のインストールが完了したら、**Show details** をクリックして詳細情報を確認します。

[![Outgoing webhook の詳細](/img/migrated/Screenshot_4-498dd7c9.png)](/img/migrated/Screenshot_4-498dd7c9.png)

## トリガーを作成する

[![トリガーイベントを作成](/img/migrated/Picture8-b599aa7e.png)](/img/migrated/Picture8-b599aa7e.png)

1. **Run when an event fires** をクリックしてトリガーを作成します。
2. 以下の情報を入力します：
   - **Name**: トリガー名
   - **URL**: イベントを POST する URL
   - **Run this action when**:
     - **Incident is declared**: インシデントが宣言されたとき
     - **Incident changes**: インシデントの status が変更されたとき
3. **Add event action** をクリックして完了します。

:::note
**Run when an event fires** を続けてクリックすることで、複数のトリガーを作成できます。
:::

## トリガーを削除する

**Trash** アイコンをクリックしてトリガーを削除します。

[![トリガーを削除](/img/migrated/Picture10-2bd7c632.png)](/img/migrated/Picture10-2bd7c632.png)
