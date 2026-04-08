---
id: "create-subnets"
title: "Create subnets"
description: "Steps to create a subnet for use with Database Engine."
sidebar_label: "Create subnets"
sidebar_position: 5
draft: true
---

# Create subnets

A **Subnet** is a sub-network created within your VPC, equivalent to a LAN in a physical system. You can attach one or more subnets to a virtual machine as needed.

1. From the Menu bar, select **Networking** > **Subnets**.
[![](/img/migrated/Sub1-1e1f2f32.png)](/img/migrated/Sub1-1e1f2f32.png)
2. Click **Create**. The **Create Subnets** screen appears.
[![](/img/migrated/Sub2-a3119de5.png)](/img/migrated/Sub2-a3119de5.png)

Enter the following information:
- **Name:** The subnet name. You can use the suggested name or change it to something more memorable.
- **Type:**
  - Routed to the internet via a NAT gateway: connects to the internet via NAT gateway.
  - Isolated subnet won't route to the internet: uses an internal network only.
- **CIDR:** Enter the gateway IP. Use the system-suggested value or edit within the allowed range.
- **Static IP Pool:** Enter a static range within the suggested CIDR range.

3. After entering all required information, click **Create subnet**.
[![](/img/migrated/Sub3-273cbe12.png)](/img/migrated/Sub3-273cbe12.png)

:::note
After creating a subnet, it is recommended not to rename it.
:::
