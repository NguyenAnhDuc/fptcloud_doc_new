---
id: "telegram"
title: "Telegram"
description: "Incident の自動通知を受信するための Telegram 連携ガイド"
sidebar_label: "Telegram"
sidebar_position: 13
---

# Telegram

**Telegram** との連携により、Incident が宣言されたときに Telegram アプリで自動メッセージを受信できます。

## 設定

1. Incident Management のメニューで **Integration** をクリックし、**Telegram** セクションを見つけて **Integration** をクリックします。

   [![Telegram の Integration を選択](/img/migrated/Screenshot_5-1-3ee11c8f.png)](/img/migrated/Screenshot_5-1-3ee11c8f.png)

2. **Show details** をクリックし、次に **Run when an event fires** をクリックします。
3. **Name**、**Chat ID**、**Bot API Token** を入力します：

   [![Telegram トリガー情報を入力](/img/migrated/Screenshot_6-1-d525e397.png)](/img/migrated/Screenshot_6-1-d525e397.png)

   - **Name**: 任意の名前
   - **Chat ID**: 通知を受信する Telegram グループの ID
   - **Bot API Token**: Telegram で **BotFather** を検索し、**Start** をクリックして **/newbot** をクリックして新しいボットを作成します。システムがトークンを生成します

4. **Add event action** をクリックして完了します。

:::note
**Run when an event fires** を続けてクリックすることで、複数のトリガーを作成できます。
:::

設定後、新しい Incident が発生するたびに、システムは Incident リンク付きで Telegram にメッセージを自動送信します。

[![Telegram での通知例](/img/migrated/Screenshot_7-1-163bac3e.png)](/img/migrated/Screenshot_7-1-163bac3e.png)

## トリガーを削除する

1. **Integration** > **Show details** をクリックします。
2. 削除したいトリガーの **Trash** アイコンをクリックします。

   [![Telegram トリガーを削除](/img/migrated/Screenshot_8-1-c75df4c5.png)](/img/migrated/Screenshot_8-1-c75df4c5.png)

3. 確認ダイアログで **Yes** をクリックします。
