---
id: "quick-starts"
title: "クイックスタート"
description: "FPT Message Bus を素早く使い始めるためのガイドです。"
sidebar_label: "クイックスタート"
sidebar_position: 3
---

# クイックスタート

サービスの登録が完了したら、数ステップですぐにメッセージの送受信を開始できます。このガイドでは、queue の作成から topic を通じたメッセージ送受信まで、全体のワークフローを説明します。

## queue の作成

サービス登録後、RabbitMQ の設定はすべて RabbitMQ Application 内で行います。

1. **Application** メニューから **Queues** > **Create** に移動します。

   [![Create ボタンが表示された queue 一覧画面](/img/migrated/quickstart_1-fc16447e.png)](/img/migrated/quickstart_1-fc16447e.png)

2. 必要な情報を入力します。

   - **Name**（必須）: queue の名前。
   - **Max length**: queue が保持できるメッセージの最大数。
   - **Message TTL**: メッセージが publish されてから有効な期間。この時間を超えたメッセージは破棄されます。
   - **Overflow**: queue が満杯のときの処理モード — `drop_head`、`reject_publish`、または `reject_publish_DLX`。

   [![Name、Max length、Message TTL、Overflow フィールドを含む queue 作成フォーム](/img/migrated/quickstart_2-8f5d775a.png)](/img/migrated/quickstart_2-8f5d775a.png)

3. **OK** をクリックして queue を作成します。

## queue でのメッセージ送受信

1. **Application** メニューから **Queues** > queue を選択 > **Preview** に移動します。

   [![queue を選択して Preview ボタンをクリックした queue 一覧画面](/img/migrated/quickstart_3-c37f4d7c.png)](/img/migrated/quickstart_3-c37f4d7c.png)

2. **Send** タブで **Payload** フィールドにメッセージを入力します。

   [![メッセージ内容を入力する Payload フィールドを含む Send タブ](/img/migrated/quickstart_4-27d461eb.png)](/img/migrated/quickstart_4-27d461eb.png)

3. **Send** をクリックしてメッセージを publish します。

メッセージを受信するには、**Receive** タブに移動して **Receive** をクリックします。

[![queue からメッセージを取得する Receive ボタンを含む Receive タブ](/img/migrated/quickstart_5-ec6f9c15.png)](/img/migrated/quickstart_5-ec6f9c15.png)

## topic の作成

1. **Application** メニューから **Topics** > **Create** に移動します。

   [![Create ボタンが表示された topic 一覧画面](/img/migrated/quickstart_6-69910650.png)](/img/migrated/quickstart_6-69910650.png)

2. topic の **Name**（必須）を入力します。

   [![必須の Name フィールドを含む topic 作成フォーム](/img/migrated/quickstart_7-9af9319c.png)](/img/migrated/quickstart_7-9af9319c.png)

3. **OK** をクリックして topic を作成します。

## subscription の作成

topic 内でメッセージを送受信するには、その topic のコンシューマーとして登録するための subscription を作成します。

1. topic を選択 > **Edit** > **Subscriptions** セクションの **Create** をクリックします。

   [![Subscriptions セクションに Create ボタンがある Edit topic 画面](/img/migrated/quickstart_8-06bd52bc.png)](/img/migrated/quickstart_8-06bd52bc.png)

2. 必要な情報を入力します。

   - **Name**（必須）: subscription の名前。
   - **Max length**: subscription が保持できるメッセージの最大数。
   - **Message TTL**: メッセージが publish されてから有効な期間。
   - **Overflow**: 満杯のときの処理モード。

   [![設定フィールドを含む subscription 作成フォーム](/img/migrated/quickstart_9-1d8c4adf.png)](/img/migrated/quickstart_9-1d8c4adf.png)

3. **OK** をクリックして subscription を作成します。

## topic でのメッセージ送受信

topic にメッセージが publish されると、その topic に登録されているすべての subscription がメッセージを受信します。

**topic へのメッセージ送信:**

1. **Application** メニューから **Topics** > topic を選択 > **Preview** に移動します。

   [![topic を選択して Preview ボタンをクリックした topic 一覧画面](/img/migrated/quickstart_10-25109fd0.png)](/img/migrated/quickstart_10-25109fd0.png)

2. **Payload** フィールドにメッセージを入力します。

   [![topic に publish するメッセージを入力する Payload フィールド](/img/migrated/quickstart_11-f03b482b.png)](/img/migrated/quickstart_11-f03b482b.png)

3. **Send** をクリックしてメッセージを publish します。

**subscription からのメッセージ受信:**

1. **Application** メニューから **Queues** > subscription を選択 > **Preview** に移動します。

   [![subscription を選択して Preview ボタンをクリックした queue 一覧画面](/img/migrated/quickstart_12-4852378f.png)](/img/migrated/quickstart_12-4852378f.png)

2. **Receive** タブを選択 > **Receive** をクリックしてメッセージを取得します。

   [![subscription からメッセージを取得する Receive ボタンを含む Receive タブ](/img/migrated/quickstart_13-639b1e62.png)](/img/migrated/quickstart_13-639b1e62.png)
