---
id: "Allow-IP-CIDR"
title: "Configure Allow IP/CIDR"
description: "How to restrict Load Balancer access to specific IP addresses or CIDR ranges."
sidebar_label: "Configure Allow IP/CIDR"
sidebar_position: "18"
---

# Configure Allow IP/CIDR

**How it works:**

- When a request reaches the Load Balancer, the system checks the source IP address of the request.
- If the source IP is within an allowed CIDR range, the request is accepted and forwarded to the backend server.
- If the source IP is not within an allowed CIDR range, the request is rejected and not forwarded.

**When to configure Allow CIDRs:**

- **Enhance security**: Block unwanted connections to reduce the risk of external attacks.
- **Access control**: Manage access to the Load Balancer by declaring a list of allowed CIDRs.
- **Performance optimisation**: Reduce Load Balancer load by blocking unwanted traffic.

## Configuration steps

**Step 1:** Go to the Load Balancer home page on FPT Cloud Portal.

**Step 2:** Click the Load Balancer you want to configure.

**Step 3:** In the Load Balancer detail view, select the **Listener** tab.

**Step 4:** Click the Listener name you want to configure to open the Update screen.

**Step 5:** On the Update Listener page, scroll to the **Allow CIDRs** section at the bottom. Enter one or more allowed IP ranges, one per line.

Example:

```
192.168.0.0/24
172.16.0.0/24
```

Only IP addresses belonging to these two IP ranges will have access.

**Step 6:** Click **Update Listener** in the bottom right corner to save.

:::note
- Only declare trusted CIDRs to avoid abuse.
- After changing the configuration, verify that the service is still accessible.
- If another firewall such as FPT Cloud NGFW is placed in front of the Load Balancer, configure the corresponding rules on that firewall as well.
:::
