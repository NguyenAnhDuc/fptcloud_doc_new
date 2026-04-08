---
id: "Initial-Setup"
title: "Initial setup"
description: "Create an account, configure SSH Key, Subnet, and Security Group before using FPT Cloud Server."
sidebar_label: "Initial setup"
sidebar_position: 2
---

# Initial setup

Before using FPT Cloud Server, complete the following setup steps to ensure your environment is ready for creating virtual machines.

## Prerequisites

- ✅ You have an FPT Cloud account.
- ✅ You have been granted access to a Tenant, Region, and VPC.

## Log in to FPT Cloud Portal

1. Go to [https://console.fptcloud.com](https://console.fptcloud.com/).
2. Log in with your FPT Cloud account credentials.
3. Select the correct **Tenant**, **Region**, and **VPC** for the service you want to use.

:::tip
If you do not have an FPT Cloud account, go to [https://fptcloud.com](https://fptcloud.com/), click **Sign Up**, and fill in your details as instructed. The support team will contact you to confirm and create your account.
:::

## Create an SSH Key pair

FPT Cloud supports two authentication methods for Linux servers: **Password** and **SSH Key**. SSH Key is recommended because it is more secure than a password.

1. Select **Compute Engine** → **SSH Management** from the menu, then click **Import SSH key**.

   [![SSH Management screen with Import SSH key button](/img/migrated/Userguide-FPT-Cloud-Server-2022-1-1024x5-8b0e181c.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-1-1024x5-8b0e181c.png)

2. Enter the details:
   - **Name**: Name for the SSH Key.
   - **Public Key**: Paste an existing Public Key, or click **Generate new key pair** to let the system generate one automatically.

   [![Import SSH key dialog](/img/migrated/Userguide-FPT-Cloud-Server-2022-2-f88ee771.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-2-f88ee771.png)

3. Click **Save**. The system creates the SSH Key pair and automatically downloads the Private Key file in `.pem` format.

   [![SSH Key created successfully](/img/migrated/Userguide-FPT-Cloud-Server-2022-3-1024x5-3df2476e.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-3-1024x5-3df2476e.png)

:::danger
The Private Key `.pem` file is provided only once. Store it in a safe location to avoid losing access to your server.
:::

## Check and create a Subnet

To create a virtual machine, you need an active Subnet in your VPC — the system assigns a Private IP from this Subnet to the virtual machine.

1. Select **Networking** → **Subnets** from the menu, then click **Create subnet**.

   [![Subnets screen with Create subnet button](/img/migrated/image-1744794276761-161dcee6.png)](/img/migrated/image-1744794276761-161dcee6.png)

2. Enter the details:
   - **Name**: A descriptive name for the Subnet.
   - **Type**: Routed (routes internet traffic via NAT) or Isolated (no internet connection).
   - **Network Address (CIDR)**: Enter a valid CIDR.
   - **Gateway IP**: Enter a valid Gateway address.
   - **Static IP Pool** *(optional)*: The IP range you want to use.
   - **Primary DNS**: IPv4 DNS address (default 8.8.8.8).
   - **Secondary DNS** *(optional)*: Secondary DNS.
   - **Add tag** *(optional)*: Select tags to attach to the Subnet.

   [![Create subnet dialog](/img/migrated/image-1744794289261-ead4183b.png)](/img/migrated/image-1744794289261-ead4183b.png)

3. Click **Create subnet**.

The new Subnet appears in the **Subnets** table.

[![Subnet list after creation](/img/migrated/image-1744794442277-c162eaf9.png)](/img/migrated/image-1744794442277-c162eaf9.png)

## Create a Security Group

A Security Group acts as a virtual network firewall, controlling inbound and outbound traffic for your virtual machine — protecting it from internet-based attacks.

FPT Cloud supports two types:
- **Security Group**: Controls traffic to and from the internet.
- **Distributed Firewall**: Controls traffic within the internal network.

1. Select **Networking** → **Security group** from the menu, then click **New Security Group**.

   [![Security Group screen with New Security Group button](/img/migrated/image-1711095113934-f0d896b0.png)](/img/migrated/image-1711095113934-f0d896b0.png)

2. Enter the details:
   - **Name**: Name for the Security Group.
   - **Type**: Security Group or Distributed Firewall.
   - **Subnet**: Select a Subnet from the list.
   - **Applied CIDR / instances** *(optional)*: Select the virtual machines or CIDR range to apply.
   - **Configure security rule**: Configure Inbound and Outbound rules as needed.

   [![New Security Group dialog](/img/migrated/image-1711095173572-26de46ab.png)](/img/migrated/image-1711095173572-26de46ab.png)

3. Click **Create security group**.

The new Security Group appears in the **Security Group** table.

[![Security Group list after creation](/img/migrated/image-1711095189056-ddaa6e99.png)](/img/migrated/image-1711095189056-ddaa6e99.png)

## Next steps

- [Create a virtual machine](/docs/fpt-cloud-server/cloud-server/quick-starts/create-a-virtual-machine/quick-starts-tao-mot-may-ao)
