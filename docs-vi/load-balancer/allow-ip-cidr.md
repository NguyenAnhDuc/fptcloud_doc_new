---
id: "allow-ip-cidr"
title: "Configure Allow IP/CIDR"
description: "How to restrict Load Balancer access to specific IP addresses or CIDR ranges on FPT Cloud."
sidebar_label: "Configure Allow IP/CIDR"
sidebar_position: "16"
---

# Configure Allow IP/CIDR

**How it works:**

- When a request reaches the Load Balancer, the system checks the source IP address.
- If the source IP is within an allowed CIDR range, the request is accepted and forwarded to the backend.
- If the source IP is not within any allowed CIDR range, the request is denied.

**When to configure Allow CIDRs:**

- **Enhance security**: Block unwanted connections and reduce the risk of external attacks.
- **Control access**: Manage which sources are allowed to reach the Load Balancer.
- **Optimise performance**: Reduce Load Balancer load by blocking unwanted traffic.

## Configuration steps

**Step 1:** Go to the Load Balancer home page on the FPT Cloud Portal.

**Step 2:** Click the Load Balancer you want to configure.

**Step 3:** On the Load Balancer detail page, select the **Listener** tab.

**Step 4:** Click the Listener you want to configure to open the update screen.

**Step 5:** On the update page, scroll to the **Allow CIDRs** section at the bottom. Enter one or more allowed IP ranges, one per line.

Example:

```
192.168.0.0/24
172.16.0.0/24
```

This means only IP addresses within these two ranges are allowed to access the Load Balancer.

**Step 6:** Click **Update Listener** at the bottom right to save.

:::note
- Only declare trusted CIDRs to prevent abuse.
- After changing the configuration, verify that the service is still accessible as expected.
- If another firewall (such as FPT Cloud NGFW) sits in front of the Load Balancer, configure corresponding rules on that firewall as well.
:::
