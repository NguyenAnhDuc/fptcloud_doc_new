---
id: "delete-card-NIC"
title: "Delete Network Interface Card"
description: "Remove a NIC card from a virtual machine when it is no longer needed."
sidebar_label: "Delete Network Interface Card"
sidebar_position: 64
---

# Delete Network Interface Card

You can remove a NIC card from a virtual machine when it is no longer needed to simplify network configuration.

:::danger
Deleting a NIC card permanently removes it and all associated network configuration. This action cannot be undone.
:::

:::note
The Primary NIC card cannot be deleted. To remove the Primary NIC card, first convert another card to Primary using [Convert a card to Primary](./convert-card.md).
:::

## Delete a NIC card

1. Navigate to the **Instance Management** page and select your Instance.
2. Go to the **NIC** tab.
3. Locate the NIC card you want to delete, then select **Actions** → **Delete**.
4. Confirm the deletion in the dialog box.

The NIC card is removed from the virtual machine and network connectivity through that interface stops immediately.

## Next steps

- [NIC Overview](./overview-nic.md)
- [Managing NIC](./NIC-overview-1.md)
