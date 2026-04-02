---
id: "change-static-IP-in-window-server"
title: "Set static IP on Windows Server"
description: "How to change the static IP address on Windows Server after editing NIC configuration on FPT Cloud."
sidebar_label: "Set static IP on Windows Server"
sidebar_position: 4
---

# Set static IP on Windows Server

## Step 1: Check the current state

After editing the NIC, the NIC IP is `132.0.0.182`.

[![NIC information for a Windows 2012 VM on FPT Cloud Portal](/img/migrated/NIC-VM-window-2012-1024x372-cdd0fc49.png)](/img/migrated/NIC-VM-window-2012-1024x372-cdd0fc49.png)

1. Open **Console** and sign in to the instance.
2. Open **PowerShell** or **Command Prompt**, type `ipconfig`, and press **Enter** to view the current IP address.

[![Output of ipconfig command in PowerShell on the Windows VM](/img/migrated/NIC-VM-window-power-shell-1b543bec.png)](/img/migrated/NIC-VM-window-power-shell-1b543bec.png)

## Step 2: Open Network Connections

Press **Win + R**, type `ncpa.cpl`, and press **Enter**.

[![Run dialog with ncpa.cpl command to open Network Connections](/img/migrated/NIC-VM-window-run-ncpa.cpl_-4147bd62.png)](/img/migrated/NIC-VM-window-run-ncpa.cpl_-4147bd62.png)

## Step 3: Open the network adapter properties

Right-click the network adapter you want to change and select **Properties**.

[![Network adapter list with right-click context menu showing Properties option](/img/migrated/NIC-VM-window-network-setting-ee7e82cd.png)](/img/migrated/NIC-VM-window-network-setting-ee7e82cd.png)

## Step 4: Update the IP settings

Select **Internet Protocol Version 4 (TCP/IPv4)** → **Properties**. Enter the new IP address, subnet mask, default gateway, and DNS server. Click **OK** to save.

[![IPv4 configuration form with new static IP settings](/img/migrated/NIC-VM-window-network-setting-config-IPv-ab0305c9.png)](/img/migrated/NIC-VM-window-network-setting-config-IPv-ab0305c9.png)

## Step 5: Verify and test connectivity

Open **PowerShell** or **Command Prompt** again to verify the new IP configuration and ping a network address to confirm connectivity.

[![Verification of new IP settings and ping test in PowerShell](/img/migrated/NIC-VM-window-network-setting-config-IPv-9b70a68d.png)](/img/migrated/NIC-VM-window-network-setting-config-IPv-9b70a68d.png)
