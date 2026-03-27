---
id: "monitor-metrics"
title: "Monitor Metrics"
description: "To monitor the **Load Balancer** charts, on the **Load Balancer** list screen, click on the specific **Load Balancer** y"
sidebar_label: "Monitor Metrics"
sidebar_position: 7
---

# Monitor Metrics

### Monitor Load Balancer
To monitor the **Load Balancer** charts, on the **Load Balancer** list screen, click on the specific **Load Balancer** you want to view.
#### List of Metrics:
**Load Balancer** :
  * **CPU Load** : Percentage of CPU usage of the Load Balancer.
  * **Memory Usage** : Percentage of memory (RAM) usage of the Load Balancer.
  * **Listener Throughput** : Total throughput of all Listeners attached to the Load Balancer.
  * **Network Packet/s** : Total number of network packets transmitted through the Load Balancer per second.
  * **Network Drop Packet/s** : Total number of dropped network packets through the Load Balancer per second.

**Listener** :
  * **[Listener] Request/s** : Number of requests sent to the Frontend per second.
  * **[Listener] Response Code** : Displays HTTP status codes returned by the Frontend. The tracked codes include:
    * **2xx** : Successful responses (e.g., 200 OK)
    * **3xx** : Redirection (e.g., 301 Moved Permanently)
    * **4xx** : Client errors (e.g., 404 Not Found)
    * **5xx** : Server errors (e.g., 500 Internal Server Error)
By monitoring these response codes, you can identify potential issues with backend servers, such as a high error rate.
  * **[Listener] Data Transfer** : Real-time data transfer through the Frontend. Unit: Bytes.

**Pool** :
  * **[Pool] Request/s** : Number of requests sent to the backend server group per second. Indicates the total workload being distributed by the Load Balancer.
  * **[Pool] Response Code** : Displays the HTTP status codes returned by the Backend.
  * **[Pool] Data Transfer** : Real-time data transfer through the Backend.

**Server** :
  * **Active Server** : Number of currently active (Healthy) backend servers for the **Load Balancer**. This number may change over time depending on traffic demand and load balancing configuration.
  * **Request/s** : Number of requests sent to each backend server per second.