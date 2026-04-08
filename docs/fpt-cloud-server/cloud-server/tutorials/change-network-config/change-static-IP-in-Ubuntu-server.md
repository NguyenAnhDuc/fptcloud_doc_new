---
id: "change-static-IP-in-Ubuntu-server"
title: "Set static IP on Ubuntu Server"
description: "How to change the static IP address on Ubuntu Server after editing NIC configuration on FPT Cloud."
sidebar_label: "Set static IP on Ubuntu Server"
sidebar_position: 3
---

# Set static IP on Ubuntu Server

## Step 1: Check the current state

After editing the NIC, the NIC IP is `132.0.0.190`.

[![NIC information for an Ubuntu VM on FPT Cloud Portal](/img/migrated/NIC-VM-ubuntu-1024x372-84e18337.png)](/img/migrated/NIC-VM-ubuntu-1024x372-84e18337.png)

1. Open **Console** and sign in to the instance.
2. Run `ifconfig` to view the current IP address.

[![Output of ifconfig command in the Ubuntu VM Console](/img/migrated/NIC-VM-ubuntu-console-949ea6c3.png)](/img/migrated/NIC-VM-ubuntu-console-949ea6c3.png)

## Step 2: Open the network configuration file

Open the file `00-installer-config.yaml` with:

```bash
vi /etc/netplan/00-installer-config.yaml
```

[![File 00-installer-config.yaml open in the vi editor](/img/migrated/Screenshot-2023-07-11-at-1.06.36-PM-c1e702aa.png)](/img/migrated/Screenshot-2023-07-11-at-1.06.36-PM-c1e702aa.png)

Press `i` to enter Insert mode.

## Step 3: Update the configuration values

Edit the IP address, gateway, and DNS to match the new configuration.

[![Editing IP parameters in the netplan configuration file](/img/migrated/Screenshot-2023-07-11-at-1.06.53-PM-68a5c578.png)](/img/migrated/Screenshot-2023-07-11-at-1.06.53-PM-68a5c578.png)

Press `Esc`, type `:wq`, then press `Enter` to save and exit.

[![Saving the configuration file with :wq in vi](/img/migrated/Screenshot-2023-07-11-at-1.07.26-PM-46cc3684.png)](/img/migrated/Screenshot-2023-07-11-at-1.07.26-PM-46cc3684.png)

## Step 4: Apply the changes

Run the following command to apply the new network configuration:

```bash
sudo netplan apply
```

[![Output of sudo netplan apply command](/img/migrated/Screenshot-2023-07-11-at-1.10.56-PM-0a072ee4.png)](/img/migrated/Screenshot-2023-07-11-at-1.10.56-PM-0a072ee4.png)

## Step 5: Verify the new IP address

Run `ifconfig` again to confirm the IP address has been updated.

[![ifconfig output showing the new static IP after applying configuration](/img/migrated/Screenshot-2023-07-11-at-1.12.57-PM-223067ab.png)](/img/migrated/Screenshot-2023-07-11-at-1.12.57-PM-223067ab.png)

[![Confirming connectivity with the new static IP address](/img/migrated/Screenshot-2023-07-11-at-1.13.18-PM-87f0f02a.png)](/img/migrated/Screenshot-2023-07-11-at-1.13.18-PM-87f0f02a.png)
