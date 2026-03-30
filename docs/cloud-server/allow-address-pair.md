---
id: "allow-address-pair"
title: "Allow Address Pair"
description: "Add IP-MAC pairs to a NIC to support HA and advanced network configurations."
sidebar_label: "Allow Address Pair"
sidebar_position: 71
pagination_next: null
---

# Allow Address Pair

By default, an instance enforces MAC-IP address pairing to prevent spoofing. Allow Address Pair lets you add additional IP (or CIDR) and MAC pairs to a NIC — useful for High Availability (HA) configurations.

:::note
A single NIC can have multiple Address Pairs configured. A single Address Pair can be configured on multiple NICs belonging to different Instances.
:::

## Adding an Address Pair

1. On the **Instance Detail** page, open the **Network Interface** tab.
2. Select the NIC you want to configure and click **Allow Address Pair**.
3. Enter the IP/CIDR and MAC address, then click **Save**.

