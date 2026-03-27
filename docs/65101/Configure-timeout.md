---
id: "Configure-timeout"
title: "Configure Timeout"
description: "The **Timeout** configuration feature for **Load Balancer** allows you to define the maximum duration a connection or re"
sidebar_label: "Configure Timeout"
sidebar_position: 13
---

# Configure Timeout

## Timeout Configuration
The **Timeout** configuration feature for **Load Balancer** allows you to define the maximum duration a connection or request can exist before being terminated. This is essential for resource management and ensuring stable system performance.
### How It Works
  * When a connection or request is sent to the **Load Balancer** , the system starts tracking the allowed time for that connection.
  * If the connection is not completed or the request is not responded to within the specified time, it will be closed.
  * Configuring **Timeout** helps prevent hanging connections or requests that consume unnecessary resources.

The **Timeout** settings are configured during **Listener** creation. Users can refer to the guide **[here.](https://fptcloud.com/en/documents/65101/?doc=create-listener "here.")**