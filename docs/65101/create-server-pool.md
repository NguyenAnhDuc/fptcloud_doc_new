---
id: "create-server-pool"
title: "Create Server Pool"
description: "**Server pool** is a group of backend servers responsible for distributing traffic to improve performance, availability,"
sidebar_label: "Create Server Pool"
sidebar_position: 21
---

# Create Server Pool

**Server pool** is a group of backend servers responsible for distributing traffic to improve performance, availability, and reliability of the service.
**1. Create Server Pool**
**Server pool** is automatically created along with the **Load Balancer** when the **Load Balancer** is created.
To add an additional **Server pool** to a **Load Balancer** , follow the steps below:
**Step 1:** Go to the **Load Balancer Details** page, select the corresponding **Load Balancer** name from the **Load Balancer Management** dashboard.
**Step 2:** Select the **Server pool** tab, then click on **Create server pool.**
**Step 3:** Enter the following information for the **Server pool**.
  * **Server pool name:** Enter a name for the **Server pool.**
  * **Description:** Enter a description for the **Server pool.**
  * **Protocol:** Select the protocol used to connect to backend servers: **HTTP / HTTPS / PROXY / PROXYV2 / TCP / UDP.**
  * **Add server:** Choose a pre-created virtual machine from the list. You can configure:

+**Port:** The port on which the Member listens for incoming requests. This port usually corresponds to the specific service provided by the Member.
+**Weight:** The weight determines the priority of each Pool Member in handling requests. Members with higher weights will receive more requests than those with lower weights.
**Advanced setting:**
  * **Algorithm:** Select a load balancing algorithm, including:

**+Round Robin:** Selects Members (servers) in order. The Load Balancer starts with the first Member in the list and moves sequentially, looping back to the top after reaching the end.
**+Least Connection:** Requests are forwarded to the server with the fewest active connections at that moment. This is a dynamic algorithm that counts active connections per server.
**+Source IP:** Combines the client and server IP addresses to create a unique hash key. This key assigns a client to a specific server and ensures future requests go to the same server, unless the session times out or disconnects.
  * **Sticky session:** Ensures requests from the same user are always routed to the same server for a certain duration, maintaining session state.

Select from **App Cookie, HTTP Cookie, Source IP**. Choose **None** to disable. When **App Cookie** is selected, you must also enter a **Cookie name.**
**Health check**
  * **Protocol:** Choose the protocol compatible with the Server pool protocol based on the table below:

  
| **Health Monitor \ Pool**  | **HTTP**  | **HTTPS**  | **PING**  | **SCTP**  | **TCP**  | **TLS-HELLO**  | **UDP-CONNECT**  |  
| --- | --- | --- | --- | --- | --- | --- | --- |  
| HTTP  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| HTTPS  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| PROXY  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| PROXYV2  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| SCTP  | Y  | N  | N  | Y  | Y  | N  | Y  |  
| TCP  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| UDP  | Y  | N  | N  | Y  | Y  | N  | Y  |  
When selecting **HTTP/HTTPS** , the user must also provide the following:
  * **Path** : Path used for the health check. Make sure it starts with **/**.
  * **HTTP method:** Select the HTTP method that the **Load Balancer** uses to send the health check, such as **CONNECT / DELETE / GET / HEAD...**
  * **Expected Code:** Enter the HTTP status code(s) the backend must return for the check to be considered successful. This can be a single code (e.g., 200), a list (e.g., 200, 202), or a range (e.g., 200–204).

**Advanced selection**
  * **Max retries down:** Number of consecutive failed health checks before a server is marked as unhealthy. Range: 1–10, default is 3.
  * **Max retries:** Number of consecutive successful health checks for a server to be considered healthy. Range: 1–10, default is 3.
  * **Delay(s):** Interval between each health check sent to the server. Determines the frequency of checks.
  * **Timeout(s):** Maximum time to wait for a health check response. If no response within this time, the check is considered failed.

Click **Create server pool** to proceed, or **Cancel** to abort.