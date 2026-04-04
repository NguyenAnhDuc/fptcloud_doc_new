---
id: "khoi-tao-server-pool"
title: "Create a Server Pool"
description: "How to create a Server Pool with load balancing algorithm, sticky session, and health check configuration on FPT Cloud Load Balancer."
sidebar_label: "Create a Server Pool"
sidebar_position: "21"
---

# Create a Server Pool

A **Server Pool** is a group of backend servers responsible for distributing traffic to improve performance, availability, and reliability of the service.

A default Server Pool is created automatically when you create a Load Balancer.

## 1. Create a Server Pool

**Step 1:** Go to the **Load Balancer Details** page by selecting the Load Balancer name in the **Load Balancer Management** dashboard.

**Step 2:** Select the **Server pool** tab, then click **Create server pool**.

**Step 3:** Enter the Server Pool information:

- **Server pool name**: Enter a name for the Server Pool.
- **Description**: Optional description.
- **Protocol**: Select the protocol for connecting to backend servers — **HTTP**, **HTTPS**, **PROXY**, **PROXYV2**, **TCP**, or **UDP**.
- **Add server**: Select virtual machines from the list. For each member:
  - **Port**: The port on which the member listens for requests.
  - **Weight**: Priority weight for request distribution. Members with higher weight receive more requests.

**Advanced settings:**

- **Algorithm**: Select the load balancing algorithm:
  - **Round Robin**: Distributes requests to members in sequence, cycling back to the first after the last.
  - **Least Connection**: Forwards requests to the member with the fewest active connections.
  - **Source IP**: Uses a hash of the client and server IP addresses to consistently route requests to the same server.
- **Sticky session**: Ensures requests from the same user always go to the same server for a period of time, maintaining session state. Select **App Cookie**, **HTTP Cookie**, or **Source IP**. Select **None** to disable. For **App Cookie**, also enter a **Cookie name**.

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
- **HTTP method**: The HTTP method used for health check requests (GET, HEAD, CONNECT, DELETE, etc.).
- **Expected Code**: The HTTP status code the backend must return to be considered healthy. Can be a single value (e.g. `200`), a list (e.g. `200, 202`), or a range (e.g. `200-204`).

**Advanced selection:**

- **Max retries down**: Number of consecutive failed health checks before a member is marked unhealthy. Range: 1–10. Default: 3.
- **Max retries**: Number of consecutive successful health checks required to mark a member healthy. Range: 1–10. Default: 3.
- **Delay (s)**: Time interval between health check requests.
- **Timeout (s)**: Maximum wait time before a health check is considered failed.

Click **Create server pool** to create, or **Cancel** to discard.
