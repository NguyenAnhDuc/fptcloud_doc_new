---
id: "create-subscriptions"
title: "subscription の作成"
description: "FPT Message Bus で topic 内に subscription を作成します。"
sidebar_label: "subscription の作成"
sidebar_position: 11
---

# subscription の作成

subscription は topic に紐付けられた queue です。topic にメッセージが publish されると、登録されているすべての subscription がそのメッセージのコピーを受け取ります。topic からメッセージを受信するには、事前に少なくとも 1 つの subscription を作成する必要があります。

1. 対象の topic を選択 > **Edit** > **Subscriptions** セクションの **Create** をクリックします。

   [![Subscriptions セクションに Create ボタンがある Edit topic 画面](/img/migrated/sub_create_1-fba37fcf.png)](/img/migrated/sub_create_1-fba37fcf.png)

2. 必要な情報を入力します。

   - **Name**（必須）: subscription の名前。
   - **Max length**: subscription が保持できるメッセージの最大数。
   - **Message TTL**: メッセージが publish されてから有効な期間。この時間を超えたメッセージは削除されます。
   - **Overflow**: 満杯のときの処理モード — `drop_head`、`reject_publish`、または `reject_publish_DLX`。

   [![Name、Max length、Message TTL、Overflow フィールドを含む subscription 作成フォーム](/img/migrated/sub_create_2-c2a8eb64.png)](/img/migrated/sub_create_2-c2a8eb64.png)

3. **OK** をクリックして subscription を作成します。

:::note
subscription 名は `t.TOPIC_NAME.s.q.SUBSCRIPTION_NAME` の命名規則に従います。

subscription を作成すると、topic に publish されたメッセージを登録済みのすべての subscription が受信できるようになります。
:::
