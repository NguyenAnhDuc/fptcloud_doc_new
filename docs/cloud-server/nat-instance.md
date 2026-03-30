---
id: "nat-instance"
title: "NAT Instance"
description: "Configure a NAT Instance to allow instances in an isolated network to access the internet."
sidebar_label: "NAT Instance"
sidebar_position: 54
---

# NAT Instance

A NAT Instance enables instances in an isolated network to access the internet — for software installation or on-premise connectivity.

## Setting Up a NAT Instance

1. Create a NAT Instance from the image provided by FCI.

   [![Select NAT Instance image](/img/migrated/image-1719483610635-8c2b0ddb.png)](/img/migrated/image-1719483610635-8c2b0ddb.png)

   [![Configure NAT Instance](/img/migrated/image-1744796146357-3f0ad3a4.png)](/img/migrated/image-1744796146357-3f0ad3a4.png)

:::warning
The Subnet field must be set to a subnet that has internet access.
:::

   [![Select Subnet](/img/migrated/image-1744796019571-e2a7f4b2.png)](/img/migrated/image-1744796019571-e2a7f4b2.png)

2. Attach a **Floating IP** to the NAT Instance (skip this step if already attached during creation).

   [![Attach Floating IP](/img/migrated/image-1719483638728-722a763b.png)](/img/migrated/image-1719483638728-722a763b.png)

3. Configure the instances in the isolated network to redirect their default gateway to the NIC of the NAT Instance.

:::note
A single NAT Instance can support up to 9 isolated networks (in addition to the primary NIC used for the routed network).
:::
