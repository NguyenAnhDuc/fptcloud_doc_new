---
id: "create-card-NIC- Primary"
title: "Create a Primary NIC card"
description: "The system automatically creates a default Primary NIC card when an Instance is created."
sidebar_label: "Create a Primary NIC card"
sidebar_position: 57
---

# Create a Primary NIC card

When you create an Instance on FPT Cloud, the system automatically provisions a Primary NIC card by default. This card serves as the main network interface for the virtual machine.

## How it works

- The Primary NIC card is created automatically during Instance provisioning — no manual action is required.
- It is attached to the Subnet selected at Instance creation time.
- The Primary NIC card cannot be deleted while the Instance exists.

:::note
To add additional NIC cards to an existing Instance, see [Add a new NIC card](./add-card-NIC-%20new.md).
:::

## Next steps

- [Disable NIC](./disable-NIC-card.md)
- [Add a new NIC card](./add-card-NIC-%20new.md)
