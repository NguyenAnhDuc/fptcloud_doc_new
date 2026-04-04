---
id: "gui-nhan-message-trong-queues"
title: "Send and receive messages in queues"
description: "How to send and receive messages in a queue on FPT Message Bus for RabbitMQ."
sidebar_label: "Send and receive messages in queues"
sidebar_position: "7"
---

# Send and receive messages in queues

The Preview feature lets you test the message flow directly from the interface — useful for debugging and verifying queue behavior before integrating your application.

## Send a message

1. From the **Application** menu, select **Queues** > select the queue > **Preview**.

   [![Queue list screen, select queue and click Preview](/img/migrated/View-1-1-73852024.png)](/img/migrated/View-1-1-73852024.png)

2. In the **Send** tab, enter the message content in the **Payload** field.

   [![Send tab with Payload field for entering message content](/img/migrated/View-2-2-349ef695.png)](/img/migrated/View-2-2-349ef695.png)

   Select one of two data types:
   - **String**: A standard character string.
   - **Base64**: A character string encoded using the 6-bit replacement for 8-bit ASCII.

3. Click **Send** to publish the message to the queue.

## Receive a message

1. Switch to the **Receive** tab.

   [![Receive tab with Receive button](/img/migrated/Recei-1-cf01752c.png)](/img/migrated/Recei-1-cf01752c.png)

2. Click the **Receive** button to retrieve messages from the queue.
