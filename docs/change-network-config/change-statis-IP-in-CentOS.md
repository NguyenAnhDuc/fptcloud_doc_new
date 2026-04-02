---
id: "change-statis-IP-in-CentOS"
title: "Set static IP on CentOS"
description: "How to change the static IP address on CentOS after editing NIC configuration on FPT Cloud."
sidebar_label: "Set static IP on CentOS"
sidebar_position: 5
---

# Set static IP on CentOS

## Step 1: Check the current state

After editing the NIC, the NIC IP is `132.0.0.70`.

[![NIC information for a CentOS VM on FPT Cloud Portal](/img/migrated/NIC-VM-Centos-1024x372-9c72aa69.png)](/img/migrated/NIC-VM-Centos-1024x372-9c72aa69.png)

Open **Console** and check the current IP address with:

```bash
ip a
```

[![Output of ip a command in the CentOS VM Console](/img/migrated/NIC-VM-CentOS-console-1024x311-3cb187fe.png)](/img/migrated/NIC-VM-CentOS-console-1024x311-3cb187fe.png)

## Step 2: Open the network interface configuration file

Open the file `ifcfg-eth0` with:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

[![File ifcfg-eth0 open in the vi editor](/img/migrated/Screenshot-2023-07-11-at-1.25.01-PM-ca5cfd61.png)](/img/migrated/Screenshot-2023-07-11-at-1.25.01-PM-ca5cfd61.png)

## Step 3: Edit the configuration values

1. Press `i` to enter Insert mode.
2. Update the IP address, gateway, and DNS to match the new configuration.

[![Editing IP parameters in ifcfg-eth0](/img/migrated/NIC-VM-CentOS-console-insert-4b7c2644.png)](/img/migrated/NIC-VM-CentOS-console-insert-4b7c2644.png)

3. Press `Esc`, type `:wq`, and press `Enter` to save and exit.

[![Saving the configuration file with :wq in vi](/img/migrated/NIC-VM-CentOS-console-insert-wq-baea240e.png)](/img/migrated/NIC-VM-CentOS-console-insert-wq-baea240e.png)

## Step 4: Restart the network service

Run the following command to apply the changes:

```bash
service network restart
```

[![Output of network service restart on CentOS](/img/migrated/Screenshot-2023-07-11-at-1.28.27-PM-418b264e.png)](/img/migrated/Screenshot-2023-07-11-at-1.28.27-PM-418b264e.png)

## Step 5: Verify and test connectivity

Run `ip a` again to confirm the IP address has been updated, then run a ping test to verify connectivity.

[![Verification of new IP settings and ping test on CentOS](/img/migrated/Screenshot-2023-07-11-at-1.28.45-PM-b786390c.png)](/img/migrated/Screenshot-2023-07-11-at-1.28.45-PM-b786390c.png)
