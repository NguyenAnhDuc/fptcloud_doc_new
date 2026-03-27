---
id: "create-listener"
title: "Create Listener"
description: "The **Listener** is a crucial component that listens for requests from clients and routes them to the appropriate destin"
sidebar_label: "Create Listener"
sidebar_position: 12
---

# Create Listener

## Listener
The **Listener** is a crucial component that listens for requests from clients and routes them to the appropriate destination servers. It includes protocol, service port, and other detailed configurations. The listener defines how the **Load Balancer** listens and routes traffic to specific applications or backend services.
* * *
### 1. Create a Listener
A **Listener** is created by default when a **Load Balancer** is provisioned.
To add an additional **Listener** to a Load Balancer, follow the steps below:
**Step 1:** Go to the **Load Balancer Details** page by selecting the corresponding **Load Balancer** from the **Load Balancer Management** dashboard.
**Step 2:** Navigate to the **Listener** tab and click **Create Listener**.
**Step 3:** Fill in the following fields:
  * **Listener name:** Enter a name for the listener.
  * **Description:** Optional description for the listener.
  * **Protocol:** Choose protocol: **HTTP / TERMINATED_HTTPS / TCP / UDP** (default is HTTP with port 80).
  * **Server pool:** If incoming requests do not match any configured **Policies** , they will be routed to this default pool.
  * **Client data timeout (ms):** Maximum time a client connection is kept open without sending any request. Default is `50000` ms.
  * **Member connect timeout (ms):** Maximum time a backend server connection is kept open without receiving any data. Default is `5000` ms.
  * **Member data timeout (ms):** Maximum time a backend server can keep a connection open without sending a request. Default is `5000` ms.
  * **TCP inspect timeout (ms):** Maximum wait time for a router/security device to get a response during TCP inspection. Default is `0`.
  * **Connection limit:** Maximum number of concurrent connections the Load Balancer can handle. Default is `-1` (unlimited).
  * **HTTP Header insertions:** Default headers: `X-Forwarded-For, X-Forwarded-Proto, X-Forwarded-Port`. You can uncheck them if not needed. 
    * **X-Forwarded-For:** When true, inserts the client IP into the header sent to the backend.
    * **X-Forwarded-Port:** When true, inserts the listener port into the header.
    * **X-Forwarded-Proto:** When true, inserts the request protocol into the header.

Click **Create Listener** to confirm or **Cancel** to abort.
* * *
### 2. Update a Listener
**Step 1:** From the **Listener** list screen, select the **Listener** you want to update.
**Step 2:** You can update the following fields:
  * **Listener name:** Enter a name for the listener.
  * **Description:** Optional description for the listener.
  * **Server pool:** Default pool for requests that do not match any configured **Policies**.
  * **Client data timeout (ms):** Maximum time a client connection is kept open without sending any request. Default is `50000` ms.
  * **Member connect timeout (ms):** Maximum time a backend server connection is kept open without receiving data. Default is `5000` ms.
  * **Member data timeout (ms):** Maximum time a backend server can keep a connection open without sending a request. Default is `5000` ms.
  * **TCP inspect timeout (ms):** Max wait time during TCP inspection for a response from the destination server. Default is `0`.
  * **Connection limit:** Maximum number of concurrent connections the Load Balancer can handle. Default is `-1` (unlimited).

Click **Update Listener** to confirm or **Cancel** to abort.
* * *
### 3. Delete a Listener
**Step 1:** From the **Listener** list screen, go to the **Action** section of the listener you wish to delete and click **Delete**.
**Step 2:** A confirmation dialog will appear showing the **Listener** name. Type `delete` and click **Delete Listener** to proceed.