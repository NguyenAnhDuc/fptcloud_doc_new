---
id: "tao-queues"
title: "queue の作成"
description: "FPT Message Bus で新しい queue を作成します。"
sidebar_label: "queue の作成"
sidebar_position: 5
---

# queue の作成

queue は consumer が取得するまでメッセージを保持します。作成時に容量制限、メッセージの有効期限、オーバーフロー時の動作を設定できます。

1. **Application** メニューから **Queues** > **Create** に移動します。

   [![Create ボタンが表示された queue 一覧画面](/img/migrated/que_create-31f765f3.png)](/img/migrated/que_create-31f765f3.png)

2. 必要な情報を入力します。

   - **Name**（必須）: queue の名前。
   - **Max length**: queue が保持できるメッセージの最大数。
   - **Message TTL**: メッセージが publish されてから有効な期間。この時間を超えたメッセージは削除されます。
   - **Overflow**: queue が満杯のときの処理モード — `drop_head`、`reject_publish`、または `reject_publish_DLX`。
   - **Maximum priority**: 最大優先度。0 から 10 の値を入力します。

   [![Name、Max length、Message TTL、Overflow フィールドを含む queue 作成フォーム](/img/migrated/que_create_1-1df0d53b.png)](/img/migrated/que_create_1-1df0d53b.png)

3. **OK** をクリックして queue の作成を完了します。

:::note
queue 名は `q.QUEUE_NAME` の命名規則に従います。

**Is Quorum** と **Single active consumer** を同時に選択すると Receive 機能が動作しません。どちらか一方のみ選択してください。
:::
