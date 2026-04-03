---
id: "monitor-load-balancer"
title: "ロードバランサーの監視グラフ"
description: "FPT Cloud ロードバランサーのリスナー、サーバープール、アクティブサーバーのリアルタイム監視グラフを表示する方法を説明します。"
sidebar_label: "ロードバランサーの監視グラフ"
sidebar_position: "5"
---

# Monitor Load Balancer charts

In the Load Balancer list, click the Load Balancer you want to monitor. On the **Monitor** tab, you can track the status of the Load Balancer in real time with charts for each Listener and Server Pool.

**Listener metrics:**

- **[Listener] Request/s**: Number of requests received by the Listener per second.
- **[Listener] Response Code**: HTTP status codes returned by the Listener:
  - `2xx`: Successful responses (e.g. 200 OK)
  - `3xx`: Redirects (e.g. 301 Moved Permanently)
  - `4xx`: Client errors (e.g. 404 Not Found)
  - `5xx`: Server errors (e.g. 500 Internal Server Error)
- **[Listener] Data Transfer**: Real-time data transfer throughput through the Listener (bytes).

**Pool metrics:**

- **[Pool] Request/s**: Requests sent to the backend server pool per second — indicates the total workload distributed by the Load Balancer.
- **[Pool] Response Code**: HTTP status codes returned by the backend.
- **[Pool] Data Transfer**: Real-time data transfer throughput through the backend (bytes).

**Active servers**: The number of backend servers currently active (healthy) for this Load Balancer. This count changes over time based on traffic demand and Load Balancer configuration.
