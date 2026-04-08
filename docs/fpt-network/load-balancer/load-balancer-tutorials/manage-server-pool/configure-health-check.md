---
id: "configure-health-check"
title: "Configure health check"
description: "How health check works for Load Balancer Server Pool members and how to configure it on FPT Cloud."
sidebar_label: "Configure health check"
sidebar_position: 4
---

# Configure health check

**Health check** is an important Load Balancer feature that ensures the availability and performance of backend servers. It allows the Load Balancer to detect which servers are healthy and automatically removes unavailable servers from the pool.

**How it works:**

- **Periodic checks**: The Load Balancer periodically sends health checks (Ping, HTTP GET, or other checks) to each member.
- **Detect unavailability**: If a member does not respond or returns an error, it is marked as unavailable.
- **Remove unavailable members**: The Load Balancer stops routing traffic to the unavailable member until it recovers.

**Benefits:**

- **Increased availability**: Only available servers receive traffic.
- **Optimised performance**: The Load Balancer adjusts automatically by removing failed servers.
- **Automated management**: Reduces the need for manual intervention.
- **Security**: Prevents traffic from being sent to unhealthy or insecure servers.

**Supported health check types:**

- **HTTP/HTTPS health check**: For Server Pools using the TCP or Proxy protocol.
- **TCP health check**: For Server Pools using the TCP or Proxy protocol.
- **PING health check**: For Server Pools using the UDP protocol.

## Configure health check

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

Health check is configured when creating or updating a Server Pool. See [Create a Server Pool](/docs/fpt-network/load-balancer/load-balancer-tutorials/manage-server-pool/create-server-pool) for the full configuration reference.
