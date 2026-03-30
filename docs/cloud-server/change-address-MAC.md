---
id: "change-address-MAC"
title: "Change MAC address"
description: "Reset the MAC address for a NIC card."
sidebar_label: "Change MAC address"
sidebar_position: 63
---

# Change MAC address

You can reset the MAC address assigned to a NIC card. This is useful when resolving network conflicts or when re-provisioning a virtual machine that requires a fresh MAC address.

:::warning
Changing the MAC address will cause a brief network interruption on that interface. Software or services that use MAC-based licensing or filtering may need to be reconfigured after this change.
:::

## Reset the MAC address of a NIC card

1. Navigate to the **Instance Management** page and select your Instance.
2. Go to the **NIC** tab.
3. Locate the NIC card whose MAC address you want to reset, then select **Actions** → **Change MAC Address**.
4. Confirm the action in the dialog box.

The system assigns a new MAC address to the NIC card automatically.

## Next steps

- [Delete NIC](./delete-card-NIC.md)
- [Change Network Config](./change-network-config.md)
