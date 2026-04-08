---
id: "chinh-sua-cau-hinh-health-check"
title: "Configure Health Check"
description: "How the Load Balancer Health Check works and how to configure it on FPT Cloud."
sidebar_label: "Configure Health Check"
sidebar_position: "23"
---

# Configure Health Check

**Health check** is an important Load Balancer feature used to ensure the availability and performance of backend servers. It allows the Load Balancer to detect which servers or services are operational and automatically remove unavailable ones.

**How it works:**

- **Periodic checks**: The Load Balancer performs periodic health checks on servers or members in the pool. These checks can be Ping, HTTP GET requests, or other custom checks.
- **Detect unavailable servers**: If a server or member does not respond to a health check or returns an error, the Load Balancer marks it as unavailable.
- **Remove unavailable servers**: After identifying an unavailable server, the Load Balancer stops routing traffic to it. This prevents traffic from being sent to non-functioning servers, ensuring service availability.

**Benefits:**

- **Increased availability**: Health check ensures only available servers or services receive traffic, preventing non-functioning servers from receiving requests.
- **Performance optimisation**: The Load Balancer automatically adjusts load balancing by removing non-functioning servers, optimising system performance and preventing server overload.
- **Automatic management**: Health check automatically manages server and service availability, minimising manual intervention.
- **Security**: The Load Balancer can remove non-functioning servers to ensure traffic is not sent to unsafe or inactive servers.

**Health check types:**

- **HTTP/HTTPS Health check**: For Server Pools using TCP/Proxy protocol.
- **TCP Health check**: For Server Pools using TCP/Proxy protocol.
- **PING Health check**: For Server Pools using UDP protocol.

To configure health checks, select the protocol based on the Server Pool protocol:

| Health Monitor \ Pool | HTTP | HTTPS | PING | SCTP | TCP | TLS-HELLO | UDP-CONNECT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HTTP | Y | Y | Y | N | Y | Y | N |
| HTTPS | Y | Y | Y | N | Y | Y | N |
| PROXY | Y | Y | Y | N | Y | Y | N |
| PROXYV2 | Y | Y | Y | N | Y | Y | N |
| SCTP | Y | N | N | Y | Y | N | Y |
| TCP | Y | Y | Y | N | Y | Y | N |
| UDP | Y | N | N | Y | Y | N | Y |
