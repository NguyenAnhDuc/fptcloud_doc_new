---
id: "convert-card"
title: "Convert a card to Primary"
description: "Change a standard NIC card to a Primary card."
sidebar_label: "Convert a card to Primary"
sidebar_position: 61
---

# Convert a card to Primary

You can promote a standard NIC card to Primary status, making it the main network interface for the virtual machine.

:::warning
Changing the Primary NIC card may affect network routing and connectivity. Test thoroughly after making this change.
:::

## Convert a NIC card to Primary

1. Navigate to the **Instance Management** page and select your Instance.
2. Go to the **NIC** tab.
3. Locate the standard NIC card you want to promote, then select **Actions** → **Set as Primary**.
4. Confirm the action in the dialog box.

The selected NIC card is now designated as Primary. The previous Primary card becomes a standard NIC card.

## Next steps

- [Edit IP Address](./edit-ip-address.md)
- [Change Network Config](./change-network-config.md)
