---
id: "disable-NIC-card"
title: "Disable Network Interface Card"
description: "Disable a NIC card to stop network connectivity through that interface."
sidebar_label: "Disable Network Interface Card"
sidebar_position: 58
---

# Disable Network Interface Card

You can disable a NIC card on a virtual machine to temporarily stop network connectivity through that interface without deleting it.

:::warning
Disabling a NIC card will interrupt all network traffic through that interface. Ensure this does not affect critical services before proceeding.
:::

## Disable a NIC card

1. Navigate to the **Instance Management** page and select your Instance.
2. Go to the **NIC** tab.
3. Locate the NIC card you want to disable, then select **Actions** → **Disable**.
4. Confirm the action in the dialog box.

The NIC card status changes to **Disabled**.

## Next steps

- [Enable NIC](./enable-NIC-card.md)
- [Delete NIC](./delete-card-NIC.md)
