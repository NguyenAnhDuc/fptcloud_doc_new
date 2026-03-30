---
id: "change-network-config"
title: "Change Network Config"
description: "Reconfigure the network config file after making changes to a NIC card."
sidebar_label: "Change Network Config"
sidebar_position: 65
---

# Change Network Config

After modifying a NIC card — such as adding a new card, changing an IP address, or resetting a MAC address — you may need to update the network configuration file inside the virtual machine's operating system to apply the changes correctly.

## When to update network config

Update the network configuration file when you:

- Add a new NIC card to the virtual machine.
- Change a static IP address on a NIC card.
- Reset the MAC address of a NIC card.
- Convert a card to Primary.

## Update network config on Linux

1. Connect to your virtual machine via SSH.
2. Open the network configuration file for your distribution:
   - **Ubuntu/Debian**: `/etc/netplan/*.yaml`
   - **CentOS/RHEL**: `/etc/sysconfig/network-scripts/ifcfg-<interface>`
3. Update the IP address, subnet mask, gateway, and DNS settings to match the new NIC configuration.
4. Apply the changes:
   - **Ubuntu/Debian**: `sudo netplan apply`
   - **CentOS/RHEL**: `sudo systemctl restart network`

## Update network config on Windows

1. Connect to your virtual machine via RDP.
2. Open **Control Panel** → **Network and Sharing Center** → **Change adapter settings**.
3. Right-click the network adapter and select **Properties**.
4. Select **Internet Protocol Version 4 (TCP/IP)** and click **Properties**.
5. Update the IP address, subnet mask, gateway, and DNS server settings.
6. Click **OK** to apply.

:::tip
After updating the network configuration, verify connectivity by pinging the gateway or an external address.
:::

## Next steps

- [NIC Overview](./overview-nic.md)
- [Managing NIC](./NIC-overview-1.md)
