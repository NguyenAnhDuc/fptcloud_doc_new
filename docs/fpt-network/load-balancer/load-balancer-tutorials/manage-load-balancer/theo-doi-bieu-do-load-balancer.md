---
id: "theo-doi-bieu-do-load-balancer"
title: "Monitor Load Balancer Charts"
description: "How to view real-time monitoring charts for Listeners, Server Pools, and active servers on FPT Cloud Load Balancer."
sidebar_label: "Monitor Load Balancer Charts"
sidebar_position: "6"
---

# Monitor Load Balancer Charts

In the Load Balancer list, click the Load Balancer you want to monitor. Under the **Monitor** tab, you can view the Load Balancer status through real-time charts for each Listener and Server Pool.

**Listener metrics:**

- **[Listener] Request/s**: Number of requests received by the Listener per second.
- **[Listener] Response Code**: HTTP status codes returned by the Listener:
  - `2xx`: Successful responses (e.g. 200 OK)
  - `3xx`: Redirects (e.g. 301 Moved Permanently)
  - `4xx`: Client errors (e.g. 404 Not Found)
  - `5xx`: Server errors (e.g. 500 Internal Server Error)
- **[Listener] Data Transfer**: Real-time data transfer throughput through the Listener (bytes).

**Pool metrics:**

- **[Pool] Request/s**: Number of requests sent to the backend Server Pool per second. Indicates the total workload the Load Balancer is distributing.
- **[Pool] Response Code**: HTTP status codes returned by the backend.
- **[Pool] Data Transfer**: Real-time data transfer throughput through the backend (bytes).

**Active server:** The number of currently active (healthy) backend servers for this Load Balancer. This number changes over time based on traffic demand and Load Balancer configuration.
