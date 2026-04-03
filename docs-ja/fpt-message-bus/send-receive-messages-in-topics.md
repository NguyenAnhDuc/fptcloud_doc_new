---
id: "Send-Receive-messages-in-topics"
title: "topic でのメッセージ送受信"
description: "FPT Message Bus で topic のメッセージを送受信します。"
sidebar_label: "topic でのメッセージ送受信"
sidebar_position: 13
---

# topic でのメッセージ送受信

topic/subscription モデルでは、topic に publish されたメッセージが登録されているすべての subscription に同時に配信されます。Preview 機能を使うと、インターフェースから直接メッセージフローをテストできます。

## topic へのメッセージ送信

1. **Application** メニューから **Topics** > 対象の topic を選択 > **Preview** に移動します。

   [![topic を選択して Preview ボタンをクリックした topic 一覧画面](/img/migrated/topic_send_1-5f6f9078.png)](/img/migrated/topic_send_1-5f6f9078.png)

2. **Payload** フィールドにメッセージを入力します。

   [![publish するメッセージを入力する Payload フィールドを含む Send タブ](/img/migrated/topic_send_2-d4eb39b9.png)](/img/migrated/topic_send_2-d4eb39b9.png)

   2 種類のデータ型から選択します。
   - **String**: 通常の文字列。
   - **Base64**: 8 ビット ASCII 文字を 6 ビット ASCII コードで置き換えてエンコードした文字列。

3. **Send** をクリックして topic にメッセージを publish します。

## subscription からのメッセージ受信

1. **Application** メニューから **Queues** > 対象の subscription を選択 > **Preview** に移動します。

   [![subscription を選択して Preview ボタンをクリックした queue 一覧画面](/img/migrated/topic_send_3-2d2eb56d.png)](/img/migrated/topic_send_3-2d2eb56d.png)

2. **Receive** タブを選択 > **Receive** をクリックして topic に publish されたメッセージを取得します。

   [![subscription からメッセージを取得する Receive ボタンを含む Receive タブ](/img/migrated/topic_send_4-285c2013.png)](/img/migrated/topic_send_4-285c2013.png)
