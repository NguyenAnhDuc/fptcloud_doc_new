---
id: "xoa-queues"
title: "Delete a queue"
description: "How to delete a queue in FPT Message Bus for RabbitMQ."
sidebar_label: "Delete a queue"
sidebar_position: "8"
---

# Delete a queue

Deleting a queue permanently removes it along with all unprocessed messages. Make sure no application is still using the queue before proceeding.

:::danger
Deleting a queue cannot be undone. All messages in the queue will be permanently lost.
:::

1. From the **Application** menu, select **Queues** > select the queue to delete > **Remove**.

   [![Queue list screen, select queue and click Remove](/img/migrated/delete1-aa8577cc.png)](/img/migrated/delete1-aa8577cc.png)

2. The **Confirmation** dialog appears. Click **Yes** to confirm deletion, or **Cancel** to cancel.

   [![Confirmation dialog for queue deletion with Yes and Cancel buttons](/img/migrated/delete2-3d5e084f.png)](/img/migrated/delete2-3d5e084f.png)
