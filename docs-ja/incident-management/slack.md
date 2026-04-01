---
id: "slack"
title: "Slack"
description: "Incident の自動通知を受信するための Slack 連携ガイド"
sidebar_label: "Slack"
sidebar_position: 8
---

# Slack

**Slack** との連携により、Incident が宣言されたときに自動通知を受信できます。

Slack を連携するには **Webhook URL** が必要です。Webhook URL の取得方法は[こちら](https://medium.com/fortum-tech/step-by-step-guide-to-create-a-slack-app-for-incoming-webhooks-3d9b799e8ae1)を参照してください。

## 設定

1. Incident Management のメニューで **Integration** をクリックし、**Slack** セクションを見つけて **Integration** をクリックします。

   [![Slack の Integration を選択](/img/migrated/Screenshot_1-1-00d7a0b4.png)](/img/migrated/Screenshot_1-1-00d7a0b4.png)

2. **Show details** をクリックし、次に **Run when an event fires** をクリックします。
3. **Name** と **URL** を入力します：

   [![Slack トリガー情報を入力](/img/migrated/Screenshot_2-1-0e317a42.png)](/img/migrated/Screenshot_2-1-0e317a42.png)

   - **Name**: 任意の名前
   - **URL**: 上記で作成した Webhook URL

4. **Add event action** をクリックして完了します。

:::note
**Run when an event fires** を続けてクリックすることで、複数のトリガーを作成できます。
:::

設定後、新しい Incident が発生するたびに、システムは連携した Slack チャンネルに Incident リンク付きで自動通知を送信します。

[![Slack での通知例](/img/migrated/Screenshot_3-1-b266990c.png)](/img/migrated/Screenshot_3-1-b266990c.png)

## トリガーを削除する

1. **Integration** > **Show details** をクリックします。
2. 削除したいトリガーの **Trash** アイコンをクリックします。

   [![Slack トリガーを削除](/img/migrated/Screenshot_4-1-8286678a.png)](/img/migrated/Screenshot_4-1-8286678a.png)

3. 確認ダイアログで **Yes** をクリックします。
