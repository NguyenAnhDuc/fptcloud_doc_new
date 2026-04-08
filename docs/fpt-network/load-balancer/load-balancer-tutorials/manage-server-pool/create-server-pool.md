---
id: "create-server-pool"
title: "Create a Server Pool"
description: "How to create a Server Pool with load balancing algorithm, sticky session, and health check configuration on FPT Cloud Load Balancer."
sidebar_label: "Create a Server Pool"
sidebar_position: 1
---

# Create a Server Pool

A **Server Pool** is a collection of backend servers responsible for distributing traffic to improve performance, availability, and reliability.

A default Server Pool is created automatically when you create a Load Balancer.

## Create a Server Pool

**Step 1:** Open the Load Balancer detail page by clicking the Load Balancer name.

**Step 2:** Select the **Server pool** tab, then click **Create server pool**.

**Step 3:** Enter the Server Pool configuration:

- **Server pool name**: Enter a name.
- **Description**: Optional description.
- **Protocol**: Select the connection protocol for backend servers — **HTTP**, **HTTPS**, **PROXY**, **PROXYV2**, **TCP**, or **UDP**.
- **Add server**: Select virtual machines from the list (within the VPC). For each member:
  - **Port**: The port the member listens on to handle requests.
  - **Weight**: Priority weight for request distribution. Members with higher weights receive more requests.

**Advanced settings:**

- **Algorithm**: Select the load balancing algorithm:
  - **Round Robin**: Distributes requests to members in sequence, cycling back to the first when the last is reached.
  - **Least Connection**: Routes requests to the member with the fewest active connections.
  - **Source IP**: Uses a hash of the client and server IP addresses to route requests consistently to the same server. If a session times out or disconnects, the client is still routed to the same server.
- **Sticky session**: Ensures requests from the same user are always routed to the same server for a period of time, preserving session state. Select **App Cookie**, **HTTP Cookie**, or **Source IP**. Select **None** to disable. For **App Cookie**, also enter the **Cookie name**.

**Health check:**

Select the health check protocol based on the Server Pool protocol:

| Health Monitor \ Pool | HTTP | HTTPS | PING | SCTP | TCP | TLS-HELLO | UDP-CONNECT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HTTP | Y | Y | Y | N | Y | Y | N |
| HTTPS | Y | Y | Y | N | Y | Y | N |
| PROXY | Y | Y | Y | N | Y | Y | N |
| PROXYV2 | Y | Y | Y | N | Y | Y | N |
| SCTP | Y | N | N | Y | Y | N | Y |
| TCP | Y | Y | Y | N | Y | Y | N |
| UDP | Y | N | N | Y | Y | N | Y |

For **HTTP/HTTPS** health checks, also configure:

- **Path**: The path to check. Must start with `/`.
- **HTTP method**: The method used for health check requests (GET, HEAD, CONNECT, DELETE, etc.).
- **Expected Code**: The HTTP status code(s) the backend must return to be considered healthy. Can be a single value (e.g. `200`), a list (e.g. `200, 202`), or a range (e.g. `200-204`).

**Advanced selection:**

- **Max retries down**: Consecutive failed health checks before a member is marked unhealthy. Range: 1–10. Default: 3.
- **Max retries**: Consecutive successful health checks required for a member to be considered healthy. Range: 1–10. Default: 3.
- **Delay (s)**: Time interval between health check requests.
- **Timeout (s)**: Maximum time to wait for a health check response before marking it as failed.

Click **Create server pool** to create, or **Cancel** to discard.
