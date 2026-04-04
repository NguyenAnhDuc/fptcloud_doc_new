---
id: "connect-checkpoint-r8120"
title: "Connect CheckPoint R8120"
description: "**This guide explains how to build a Router device to connect VPN S2S with the FPT Smart Cloud VPN Site-to-Site service.**"
sidebar_label: "Connect CheckPoint R8120"
sidebar_position: "19"
---

# Connect CheckPoint R8120

**This guide explains how to build a Router device to connect VPN S2S with the FPT Smart Cloud VPN Site-to-Site service.**
  * [Step 1: Build CheckPoint for Cloud](../vpn-site-to-site/index.md)
  * [Step 2: Configure VPN Site-to-Site](../vpn-site-to-site/index.md)
  * [Step 3: Configure CheckPoint](../vpn-site-to-site/index.md)
  * [Step 4: Debug — Tracert](../vpn-site-to-site/index.md)

Ensure the following prerequisites are met:
  * VPN Site-to-Site on the portal
  * CheckPoint R81.20 downloaded and booted from the image named: **Check_Point_R82.10_T462_Gaia**
  * SmartConsole version R81.20 integrated with CheckPoint R81.20
  * A public IP — for simplicity, assign it directly to the VM rather than using a Floating IP
  * One PfSense VM for debugging (optional)

## Step 1: Build CheckPoint for Cloud
  * **Build the image on Horizon with 2C4G — one public IP assigned directly, one local network IP for the VPN**

Run the following commands to boot the VM from the image:
> **Openstack command**
>
```
Copyopenstack volume create --type Premium-SSD --image Check_Point_R82.10_T462_Gaia --size 20 --bootable DISK-CD  -- Output ID  {`DISK-CD`}
```

> **Openstack command**
>
```
Copyopenstack volume create --type Premium-SSD --size 100 --bootable DISK-OS-- Output ID  {`DISK-OS`}
```

> **Openstack command**
>
```
Copyopenstack network list
--output ID {'IP PUBLIC'}
```

> **Openstack command**
>
```
Copynova boot --availability-zone nova --flavor 2C4G --nic net-id={`IP PUBLIC`} --block-device id=`DISK-OS`},source=volume,dest=volume,bus=virtio,device=/dev/vda,shutdown=preserve,bootindex=0 --block-device id= {`DISK-CD`},source=volume,dest=volume,bus=ide,device=/dev/hda,type=cdrom,bootindex=1 CheckpointServer
```

  * **To boot the VM via NoVNC, follow these steps:**

- Select **Install Gaia on this system**.
![file](/img/migrated/image-1744167760192-81a6a944.png)
- Select **OK**. ![file](/img/migrated/image-1744167845702-dae767e0.png) — On the Keyboard Selection screen, select **US → OK**. ![file](/img/migrated/image-1744167953227-ad1fc5f8.png) — Select **OK**.
_(You can enter a custom configuration or keep the default values.)_ ![file](/img/migrated/image-1744167975414-e8f1057c.png) — Enter the login password for the VM console. ![file](/img/migrated/image-1744167988315-c3b3ea8f.png)
- Enter the password for SmartConsole. ![file](/img/migrated/image-1744167999412-e6160631.png) — Enter the public IP assigned directly at the start of this section with Netmask "255.255.255.255", then select **OK**. ![file](/img/migrated/image-1744168009356-1d3960bd.png) — Installation complete. ![file](/img/migrated/image-1744168018268-7b88383e.png)

## Step 2: Configure VPN Site-to-Site
Go to <https://console.fptcloud.com/> and create a VPN Site-to-Site connection.
- Create a Customer Gateway:
**- Remote private network:** the LAN Subnet range to peer with from CheckPoint.
**- Remote IP public:** the public IP of CheckPoint.

![](/img/migrated/photo_1_2025-07-09_17-35-39-4cb64a1a.jpg)
- Create a VPN Connection.
The VPN Connection parameters consist of three main sections:
  * General information (general connection details)
  * Remote VPN Information (encryption settings and customer-side information)
  * Dead Peer Detection (number of automatic retries when a connectivity issue occurs)

**Section 1: General information**
![](/img/migrated/photo_2_2025-07-09_17-35-39-d0b49f4e.jpg)
Note the **Pre-shared key** value — you will need it when configuring CheckPoint.

**Section 2: Remote VPN information**
![](/img/migrated/photo_3_2025-07-09_17-35-39-5b3401dd.jpg)
Select Providers = "others", then follow these steps:
  * Step 1: Enter providers name = "checkpoint".
  * Step 2: Enter the IKE and IPSec settings as follows:

**For IKE:**
  * Authorization algorithm: sha256
  * Encryption algorithm: aes 256
  * IKE version: ikev2
  * DH group: group14
  * Lifetime: 3600 seconds
  * Phase 1 negotiation mode: main

**For IPSec:**
  * Authorization algorithm: sha256
  * Encryption algorithm: aes 256
  * Encapsulation mode: tunnel
  * Transform protocol: esp
  * Perfect Forward Secrecy (PFS): group14
  * Lifetime: 3600 seconds

**Section 3: Dead Peer Detection**
![](/img/migrated/Screenshot-2025-08-18-110311-7-e1d4980a.png)
Enter the Delay and max failure values, then select **Create VPN Connection**.

## Step 3: Configure CheckPoint
- Sign in to the VNC console of the CheckPoint VM using the account created above and run the command: "Cpstart".
- Sign in to the web interface at [https://{`IP`}](https://ip./) and download SmartConsole using the link and version recommended by the page.
- Install and sign in to the SmartConsole app using the provided credentials.
_Note: an activated license is required to access SmartConsole._
A successful login looks like the image below: ![file](/img/migrated/image-1744168234439-4a5359ac.png) — Create a LAN network. ![file](/img/migrated/image-1744168343186-88e28778.png) — Create an Interoperable Device with the public IP of the VPN Site-to-Site as follows:
**Go to New → More → Network Object → More → Interoperable Device.** ![file](/img/migrated/image-1744168357612-ce4eb460.png) Fill in the Name, IPv4 Address, and select **OK**. ![file](/img/migrated/image-1744168371868-13b38d47.png) ![file](/img/migrated/image-1744168384964-71312a97.png) — Create a VPN **Star** Community as follows:
**Go to New → More → VPN Community → Star Community.** ![file](/img/migrated/image-1744168404637-63c48190.png) — Configure with the following settings:
  * Select **Center Gateway** named: CheckPoint (created above).
  * Select **Satellite Gateway** as the Interoperable Device.
  * Select **VPN Domain** with the corresponding LAN/local and Remote/peer network ranges. ![file](/img/migrated/image-1744168435213-4c97287e.png) ![file](/img/migrated/image-1744168459774-ff41d81d.png)
  * Select the Encryption configuration matching what was chosen on the FPT Smart Cloud portal, for example: ![file](/img/migrated/image-1744168470511-0c22a58e.png) ![file](/img/migrated/image-1744168494302-49000229.png) — After creating the VPN Community, go back to Interoperable Devices to update it. ![file](/img/migrated/image-1744168513930-fedde2ae.png) — Return to VPN Communication Meshed and use the **Pre-Shared Key** created on the VPN Site-to-Site portal. ![file](/img/migrated/image-1744168529624-ff1e394d.png)
  * Then select **"Publish"** to create the VPN Community on CheckPoint. ![file](/img/migrated/image-1744168554131-7c16e7a4.png) — Set up the firewall to allow bidirectional traffic between the two subnets and bidirectional traffic between the two gateway IPs as shown below, then select **"Publish"**.
![file](/img/migrated/image-1744168578028-40a006ae.png)
  * Finally, set the route for the internal network inside CheckPoint (the VPN Site-to-Site side is already pre-configured).

On CheckPoint Gaia OS, use the `set static-route` command to add a route. Syntax and example:
> **Openstack command**
>
```
Copyset static-route <destination-network> nexthop gateway address <gateway-ip> on
```

Example: To route traffic to the network `192.168.1.0/24` through gateway `10.0.0.1`:
> **Openstack command**
>
```
Copyset static-route 192.168.1.0/24 nexthop gateway address 10.0.0.1 on
```

After adding the route, run the following command to save the configuration:
> **Openstack command**
>
```
Copysave config
```

## Step 4: Debug — Tracert
  * From a machine inside the network, ping each side. If connectivity is established, the configuration is complete.
