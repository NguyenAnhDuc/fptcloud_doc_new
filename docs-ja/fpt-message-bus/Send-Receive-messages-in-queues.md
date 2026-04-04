---
id: "Send-Receive-messages-in-queues"
title: "queue でのメッセージ送受信"
description: "FPT Message Bus の queue でメッセージを送受信する方法。"
sidebar_label: "queue でのメッセージ送受信"
sidebar_position: "7"
---

# queue でのメッセージ送受信

**ステップ1:** **Application** メニュー > **Queues** > 対象の queue を選択 > **Preview** をクリックします。

[![](/img/migrated/queue_send_1-1aa7e8a2.png)](/img/migrated/queue_send_1-1aa7e8a2.png)

**ステップ2:** **Send** タブの **Payload** フィールドに、publish したいメッセージを入力します。

[![](/img/migrated/queue_send_2-06244ef1.png)](/img/migrated/queue_send_2-06244ef1.png)

2 種類のデータ形式から選択できます:
- **String**: 文字列。
- **Base64**: 8 ビット ASCII コードを 6 ビット ASCII コードに変換してエンコードした文字列。

**ステップ3:** **Send** をクリックします。

queue へのメッセージの publish が完了しました。

メッセージを受信するには、**Receive** タブに移動し、**Receive** をクリックします。

[![](/img/migrated/queue_send_3-44c78fe5.png)](/img/migrated/queue_send_3-44c78fe5.png)
