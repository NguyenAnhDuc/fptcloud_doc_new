---
id: "create-listener"
title: "リスナーの作成・更新・削除"
description: "FPT Cloud ロードバランサーでリスナーを作成・更新・削除する方法を説明します。"
sidebar_label: "リスナーの作成"
sidebar_position: "10"
---

# Create, update, and delete a Listener

A **Listener** is the component that listens for incoming client requests and routes them to the appropriate backend servers. It defines the protocol, port, and other parameters for how the Load Balancer receives and distributes traffic.

A default Listener is created automatically when you create a Load Balancer.

## Create a Listener

**Step 1:** Open the Load Balancer detail page by clicking the Load Balancer name.

**Step 2:** Select the **Listener** tab, then click **Create Listener**.

**Step 3:** Enter the Listener configuration:

- **Listener name**: Enter a name for the Listener.
- **Description**: Optional description.
- **Protocol**: Select the protocol — **HTTP**, **TERMINATED_HTTPS**, **TCP**, or **UDP** (default: HTTP on port 80).
- **Server pool**: The default pool for requests that do not match any configured L7 policy.
- **Client data timeout (ms)**: Maximum time the Load Balancer allows a client connection to remain idle without sending a request. Default: 50,000 ms.
- **Member connect timeout (ms)**: Maximum time the Load Balancer waits for a backend member to accept a connection. Default: 5,000 ms.
- **Member data timeout (ms)**: Maximum time the Load Balancer allows a backend member connection to remain idle. Default: 5,000 ms.
- **TCP inspect timeout (ms)**: Maximum wait time for a TCP inspection response. Default: 0.
- **Connection limit**: Maximum number of simultaneous connections the Load Balancer can handle. Default: -1 (unlimited).
- **HTTP Header insertions**: Pre-filled with **X-Forwarded-For**, **X-Forwarded-Proto**, and **X-Forwarded-Port**. Deselect any that are not needed.
  - **X-Forwarded-For**: Inserts the client IP address into the backend request header.
  - **X-Forwarded-Port**: Inserts the Listener port into the backend request header.
  - **X-Forwarded-Proto**: Inserts the Listener protocol into the backend request header.

Click **Create Listener** to create, or **Cancel** to discard.

## Update a Listener

**Step 1:** In the Listener list, click the Listener you want to update.

**Step 2:** Update any of the following fields:

- **Listener name**, **Description**, **Server pool**
- **Client data timeout (ms)**, **Member connect timeout (ms)**, **Member data timeout (ms)**
- **TCP inspect timeout (ms)**, **Connection limit**

Click **Update Listener** to apply, or **Cancel** to discard.

## Delete a Listener

**Step 1:** In the Listener list, click **Delete** in the Listener's **Action** menu.

**Step 2:** A confirmation dialog appears showing the Listener name. Type `delete` and click **Delete Listener** to confirm.
