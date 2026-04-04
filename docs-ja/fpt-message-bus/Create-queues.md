---
id: "Create-queues"
title: "queue の作成"
description: "FPT Message Bus for RabbitMQ で新しい queue を作成する方法。"
sidebar_label: "queue の作成"
sidebar_position: "5"
---

# queue の作成

**ステップ1:** **Application** メニューから **Queues** > **Create** を選択します。

[![](/img/migrated/queue_create_1-e6544b23.png)](/img/migrated/queue_create_1-e6544b23.png)

**ステップ2:** 必要な情報を入力します:
- **Name（必須）**: queue の名前。
- **Max length**: queue に保存できるメッセージの最大数。
- **Message TTL**: メッセージが publish されてから有効な時間。この時間を超えるとメッセージは削除されます。
- **Overflow**: **drop_head**、**reject_publish**、**reject_publish_DLX** から選択できます。

[![](/img/migrated/queue_create_2-554778e3.png)](/img/migrated/queue_create_2-554778e3.png)

_注意: queue 名は命名規則に従います: q.[QUEUE_NAME]_

**ステップ3:** **OK** をクリックして queue の作成を完了します。
