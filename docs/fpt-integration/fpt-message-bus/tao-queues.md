---
id: "tao-queues"
title: "Create a queue"
description: "How to create a new queue in FPT Message Bus for RabbitMQ."
sidebar_label: "Create a queue"
sidebar_position: "5"
---

# Create a queue

A queue stores messages until a consumer retrieves them. You can configure capacity limits, message TTL, and overflow policy at creation time.

1. From the **Application** menu, select **Queues** > **Create**.

   [![Queue list screen with Create button](/img/migrated/que_create-31f765f3.png)](/img/migrated/que_create-31f765f3.png)

2. Enter the required information:

   - **Name** (required): The name of the queue.
   - **Max length**: The maximum number of messages the queue can hold.
   - **Message TTL**: The time a message remains valid after being published. If this time is exceeded, the message is deleted.
   - **Overflow**: The behavior when the queue is full — `drop_head`, `reject_publish`, or `reject_publish_DLX`.
   - **Maximum priority**: The maximum priority level, enter a value from 0 to 10.

   [![Create queue form with Name, Max length, Message TTL, Overflow fields](/img/migrated/que_create_1-1df0d53b.png)](/img/migrated/que_create_1-1df0d53b.png)

3. Click **OK** to finish creating the queue.

:::note
Queue names follow the naming convention: `q.QUEUE_NAME`.

If you select both **Is Quorum** and **Single active consumer**, the Receive feature will not work — select only one of these two attributes.
:::
