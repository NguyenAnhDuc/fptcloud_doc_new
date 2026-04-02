---
id: "khoi-tao-canh-bao-load-balancer"
title: "Create an alert for Load Balancer"
sidebar_label: "Create an alert for Load Balancer"
sidebar_position: 6
---

# Create an alert for Load Balancer

**Step 1:** In the menu, go to **Security** > **Cloud Guard**, open the **Resource Alerts** tab, and click **Create Alert**.

To create an alert for a Load Balancer, select **Type** = **Load Balancer**.

[![file](/img/migrated/image-1722327850097-b58a81be.png)](/img/migrated/image-1722327850097-b58a81be.png)

Select **Metric Type**, **Apply to**, **Severity**, configure the alert condition under **Configure Condition**, and select recipients under **Notify to**.

FPT Cloud Guard supports the following Load Balancer metrics:

| No. | Metric | Unit | Description |
|---|---|---|---|
| 1 | HTTP request | request/s | Number of requests per second reaching the Load Balancer |
| 2 | HTTP code 1xx | request/s | Number of 1xx HTTP response codes per second |
| 3 | HTTP code 2xx | request/s | Number of 2xx HTTP response codes per second |
| 4 | HTTP code 3xx | request/s | Number of 3xx HTTP response codes per second |
| 5 | HTTP code 4xx | request/s | Number of 4xx HTTP response codes per second |
| 6 | HTTP code 5xx | request/s | Number of 5xx HTTP response codes per second |
| 7 | Active connection | connection | Number of active connections to the Load Balancer (a single connection may have multiple requests) |
| 8 | Percentage of backend down | % | Percentage of unhealthy backends |
| 9 | Number of backends down | number | Count of unhealthy backends |
| 10 | Total packet In/Out per second | packet/s | Total packets processed by the Load Balancer in each direction |
| 11 | Drop packet In/Out per second | packet/s | Total dropped packets per second; alerts when In or Out direction exceeds threshold |
| 12 | Provisioning status Pending | N/A | Alerts when the Load Balancer provisioning status is Pending |
| 13 | Operating status Unhealthy | N/A | Alerts when the Load Balancer operating status is Unhealthy |

Configure the alert condition as follows:

| No. | Field | Description |
|---|---|---|
| 1 | Metric type | Select the Load Balancer metric to alert on |
| 2 | Operator | Select the comparison condition |
| 3 | Threshold | Set the threshold value; the system sends an alert when exceeded |
| 4 | Alert interval | Set the evaluation interval (minimum 3 minutes) |
| 5 | Repeat time | Set how often to repeat the alert while the condition persists |

**Step 2:** If no recipient exists for Load Balancer alerts, click **Create recipient here** to create a new VPC-level recipient.

[![file](/img/migrated/image-1722328406388-fa58b299.png)](/img/migrated/image-1722328406388-fa58b299.png)

**Step 3:** Return to the alert creation screen, select the newly created recipient, and click **Create**.

[![file](/img/migrated/image-1722329874375-73b8678d.png)](/img/migrated/image-1722329874375-73b8678d.png)

The alert is created and appears in the list. When the condition is breached or returns to normal, the system automatically sends a notification.
