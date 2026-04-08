---
id: "gui-nhan-message-trong-queues"
title: "queue でのメッセージ送受信"
description: "FPT Message Bus で queue のメッセージを送受信します。"
sidebar_label: "queue でのメッセージ送受信"
sidebar_position: 12
---

# queue でのメッセージ送受信

Preview 機能を使うと、インターフェースから直接メッセージフローをテストできます。アプリケーションを統合する前に queue の動作をデバッグ・検証するのに役立ちます。

## メッセージの送信

1. **Application** メニューから **Queues** > 対象の queue を選択 > **Preview** に移動します。

   [![queue を選択して Preview ボタンをクリックした queue 一覧画面](/img/migrated/View-1-1-73852024.png)](/img/migrated/View-1-1-73852024.png)

2. **Send** タブで **Payload** フィールドにメッセージを入力します。

   [![Payload フィールドとデータ型セレクターを含む Send タブ](/img/migrated/View-2-2-349ef695.png)](/img/migrated/View-2-2-349ef695.png)

   2 種類のデータ型から選択します。
   - **String**: 通常の文字列。
   - **Base64**: 8 ビット ASCII 文字を 6 ビット ASCII コードで置き換えてエンコードした文字列。

3. **Send** をクリックして queue にメッセージを publish します。

## メッセージの受信

1. **Receive** タブに切り替えます。

   [![メッセージを取得する Receive ボタンを含む Receive タブ](/img/migrated/Recei-1-cf01752c.png)](/img/migrated/Recei-1-cf01752c.png)

2. **Receive** ボタンをクリックして queue からメッセージを取得します。
