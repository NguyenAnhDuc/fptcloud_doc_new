---
id: "microsoft-teams"
title: "Microsoft Teams"
description: "Incident Management と Microsoft Teams を連携するガイド"
sidebar_label: "Microsoft Teams"
sidebar_position: 15
---

# Microsoft Teams

**Microsoft Teams** と Incident Management を連携することで、迅速なインシデント検知と通知が可能になります。

開始するには、Microsoft Teams の **Webhook URL** が必要です。Webhook URL の作成方法は[こちら](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet)を参照してください。

## 設定

1. Incident Management のメニューで **Integration** をクリックし、**Microsoft Teams** セクションを見つけて **Integration** をクリックします。
2. **Show details** をクリックし、次に **Run when an event fires** をクリックします。
3. **Name** と **URL** を入力します：

   [![Microsoft Teams トリガー情報を入力](/img/migrated/Screenshot_9-1-4bed69c6.png)](/img/migrated/Screenshot_9-1-4bed69c6.png)

   - **Name**: 任意の名前
   - **URL**: 上記で作成した Webhook URL

4. **Add event action** をクリックして完了します。

:::note
**Run when an event fires** を続けてクリックすることで、複数のトリガーを作成できます。
:::

設定後、新しい Incident が発生するたびに、システムは Incident リンク付きで Microsoft Teams にメッセージを自動送信します。

[![Microsoft Teams での通知例](/img/migrated/Screenshot_10-1-0b2b9825.png)](/img/migrated/Screenshot_10-1-0b2b9825.png)
