---
id: "cau-hinh-timeout"
title: "Configure Timeout"
description: "How timeout settings work for Load Balancer Listeners on FPT Cloud."
sidebar_label: "Configure Timeout"
sidebar_position: "13"
---

# Configure Timeout

The **Timeout** configuration for a Load Balancer defines the maximum time a connection or request can exist before it is closed. This is important for resource management and maintaining stable system performance.

**How it works:**

- When a connection or request is sent to the Load Balancer, the system starts counting the allowed lifetime for that connection.
- If the connection is not completed or the request is not responded to within this time, it is closed.
- Configuring timeout prevents connections or requests from hanging and consuming resources.

Timeout is configured when creating or updating a Listener. See [Create a Listener](/docs/en/fpt-network/load-balancer/load-balancer-tutorials/manage-listener/create-listener) for details.
