---
id: "add-card-NIC- new"
title: "Add a new Network Interface Card"
description: "Add a new NIC card to a virtual machine to connect to an additional Subnet."
sidebar_label: "Add a new Network Interface Card"
sidebar_position: 60
---

# Add a new Network Interface Card

You can add additional NIC cards to a virtual machine to connect it to multiple Subnets, enabling more flexible network topologies.

## Prerequisites

- The target Subnet must already exist in your cloud network configuration.
- You must have sufficient permissions to modify the Instance.

## Add a NIC card

1. Navigate to the **Instance Management** page and select your Instance.
2. Go to the **NIC** tab.
3. Click **Add NIC**.
4. Select the **Subnet** to attach the new NIC card to.
5. Configure the IP address (static or dynamic) as required.
6. Click **Confirm** to create the NIC card.

:::note
After adding a new NIC card, you may need to update the network configuration inside the virtual machine's operating system. See [Change Network Config](./change-network-config.md) for details.
:::

## Next steps

- [Convert a card to Primary](./convert-card.md)
- [Change Network Config](./change-network-config.md)
