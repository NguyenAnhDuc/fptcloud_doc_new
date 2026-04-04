---
id: "khoi-tao-listener"
title: "Create, Update, and Delete a Listener"
description: "How to create, update, and delete a Listener on FPT Cloud Load Balancer."
sidebar_label: "Create a Listener"
sidebar_position: "12"
---

# Create, Update, and Delete a Listener

A **Listener** is a key component that listens for incoming requests from clients and routes them to the appropriate backend servers. It defines the protocol, service port, and other parameters that control how the Load Balancer receives and routes traffic to specific applications or services on backend servers.

A default Listener is created automatically when you create a Load Balancer.

## 1. Create a Listener

**Step 1:** Go to the **Load Balancer Details** page by selecting the Load Balancer name in the **Load Balancer Management** dashboard.

**Step 2:** Select the **Listener** tab, then click **Create Listener**.

**Step 3:** Enter the Listener information:

- **Listener name**: Enter a name for the Listener.
- **Description**: Optional description.
- **Protocol**: Select the protocol — **HTTP**, **TERMINATED_HTTPS**, **TCP**, or **UDP** (default: HTTP on port 80).
- **Server pool**: The default pool to receive requests that do not match any configured policies.
- **Client data timeout (ms)**: Maximum time a client connection can remain idle without sending a request. Default: 50,000 ms.
- **Member connect timeout (ms)**: Maximum time the Load Balancer waits for a backend member to accept a connection. Default: 5,000 ms.
- **Member data timeout (ms)**: Maximum time a backend member connection can remain idle. Default: 5,000 ms.
- **TCP inspect timeout (ms)**: Maximum wait time for a response during TCP inspection. Default: 0.
- **Connection limit**: Maximum number of simultaneous connections the Load Balancer can handle. Default: -1 (unlimited).
- **HTTP Header insertions**: **X-Forwarded-For**, **X-Forwarded-Proto**, and **X-Forwarded-Port** are pre-filled. Uncheck any you do not need.
  - **X-Forwarded-For**: Inserts the client IP address into the backend request header.
  - **X-Forwarded-Port**: Inserts the listener port into the backend request header.
  - **X-Forwarded-Proto**: Inserts the listener protocol into the backend request header.

Click **Create Listener** to create, or **Cancel** to discard.

## 2. Update a Listener

**Step 1:** In the Listener list, select the Listener you want to update.

**Step 2:** Update the following information:

- **Listener name**, **Description**, **Server pool**
- **Client data timeout (ms)**, **Member connect timeout (ms)**, **Member data timeout (ms)**
- **TCP inspect timeout (ms)**, **Connection limit**

Click **Update Listener** to apply changes, or **Cancel** to discard.

## 3. Delete a Listener

**Step 1:** In the Listener list, select **Delete** from the **Action** menu of the Listener you want to delete.

**Step 2:** A confirmation dialog appears. Type `delete` and click **Delete Listener** to confirm.
