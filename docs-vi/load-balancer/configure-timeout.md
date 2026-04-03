---
id: "configure-timeout"
title: "タイムアウトの設定"
description: "FPT Cloud ロードバランサーのリスナーにおけるタイムアウト設定の仕組みを説明します。"
sidebar_label: "タイムアウトの設定"
sidebar_position: "11"
---

# Configure timeout

The **Timeout** configuration for a Load Balancer defines the maximum time a connection or request can exist before it is closed. This is important for resource management and maintaining stable system performance.

**How it works:**

- When a connection or request is sent to the Load Balancer, the system starts counting the allowed lifetime for that connection.
- If the connection is not completed or the request is not responded to within this time, it is closed.
- Configuring timeout prevents connections or requests from hanging and consuming resources.

Timeout is configured when creating or updating a Listener. See [Create a Listener](./create-listener.md) for details.
