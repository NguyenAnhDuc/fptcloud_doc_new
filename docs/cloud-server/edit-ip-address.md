---
id: "edit-ip-address"
title: "Edit IP Address"
description: "Change the IP address of a NIC card."
sidebar_label: "Edit IP Address"
sidebar_position: 62
---

# Edit IP Address

You can change the IP address assigned to a NIC card on your virtual machine, either by assigning a specific static IP or switching to dynamic allocation.

:::warning
Changing the IP address of a NIC card will interrupt network connectivity on that interface. Plan for downtime before making this change in a production environment.
:::

## Edit the IP address of a NIC card

1. Navigate to the **Instance Management** page and select your Instance.
2. Go to the **NIC** tab.
3. Locate the NIC card whose IP address you want to change, then select **Actions** → **Edit IP Address**.
4. Enter the new IP address and subnet mask, or select dynamic (DHCP) allocation.
5. Click **Confirm** to apply the changes.

:::note
After changing the IP address, update the network configuration inside the virtual machine's operating system if you are using a static IP. See [Change Network Config](./change-network-config.md) for details.
:::

## Next steps

- [Change MAC address](./change-address-MAC.md)
- [Change Network Config](./change-network-config.md)
