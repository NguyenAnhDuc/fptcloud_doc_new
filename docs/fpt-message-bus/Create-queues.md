---
id: "Create-queues"
title: "Create Queues"
description: "**Step 1** : From the **Application** menu, navigate to **Queues** > Click **Create**"
sidebar_label: "Create Queues"
sidebar_position: 5
---

# Create Queues

**Step 1** : From the **Application** menu, navigate to **Queues** > Click **Create**
[![](/img/migrated/queue_create_1-e6544b23.png)](/img/migrated/queue_create_1-e6544b23.png)
**Step 2** : Enter the necessary information:
  * **Name (required)** : The name of the queue.
  * **Max length** : The maximum amount of messages that can be held in a queue.
  * **Message TTL** : The amount of time that messages remain valid from the moment they are published. If it exceeds this time, the message will be lost.
  * **Overflow** : You can select from **drop_head** , **reject_publish** , or **reject_publish_DLX** modes.

[![](/img/migrated/queue_create_2-554778e3.png)](/img/migrated/queue_create_2-554778e3.png)
_Note: Queue names follow the convention: q.[QUEUE_NAME]_
**Step 3** : Click **OK** to proceed with creating the queue.
