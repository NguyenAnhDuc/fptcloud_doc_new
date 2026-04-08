---
id: "connect-fci-vmware"
title: "Connect FCI to VMware"
description: "This guide explains how to connect VPNaaS between the VMware and OPS platforms on the Unify portal."
sidebar_label: "Connect FCI to VMware"
sidebar_position: "22"
---

# Connect FCI to VMware

This guide explains how to connect VPNaaS between the VMware and OPS platforms on the Unify portal.
  * [Step 1: Configure VPN on OpenStack](/docs/en/fpt-network/vpn-site-to-site/)/
  * [Step 2: Configure VPN on VMware Cloud](/docs/en/fpt-network/vpn-site-to-site/)/
  * [Step 3: Verify the connection](/docs/en/fpt-network/vpn-site-to-site/)/

Ensure the following prerequisites are met:
  * VPNaaS on OPS configured on the Unify Portal
  * VMware Cloud

In this example, we will create a VPN Site-to-Site connection using the parameters shown in the topology below. [![file](/img/migrated/image-1744186989019-ef1c7215.png)](/img/migrated/image-1744186989019-ef1c7215.png)

## Step 1: Configure VPN on OpenStack
Go to [**https://console.fptcloud.com**](https://console.fptcloud.com/) and create a VPN Site-to-Site connection.
- Create a Customer Gateway:
  + Remote IP public: the Floating IP of the VMware VPN gateway.
  + Remote private network: the LAN Subnet range to peer with from VMware.
[![](/img/migrated/photo_1_2025-07-09_17-37-17-46c848d8.jpg)](/img/migrated/photo_1_2025-07-09_17-37-17-46c848d8.jpg)

- Create a VPN Connection.
Note the **Pre-shared key** value — you will need it when creating the VPN Connection on the VMware side.
The VPN Connection parameters consist of three main sections:
  * General information (general connection details)
  * Remote VPN Information (encryption settings and customer-side information)
  * Dead Peer Detection (number of automatic retries when a connectivity issue occurs)

**Section 1: General information** [![](/img/migrated/photo_2_2025-07-09_17-37-17-85fbfff3.jpg)](/img/migrated/photo_2_2025-07-09_17-37-17-85fbfff3.jpg)

**Section 2: Remote VPN information**
[![](/img/migrated/photo_3_2025-07-09_17-37-17-fc829da9.jpg)](/img/migrated/photo_3_2025-07-09_17-37-17-fc829da9.jpg)
Select Providers = "others", then follow these steps:
  * Step 1: Enter providers name = "VMWare".
  * Step 2: Enter the IKE and IPSec settings as follows:

**For IKE:**
  * Encryption algorithm: aes-256
  * Authorization algorithm: sha256
  * IKE version: ikev2
  * Lifetime units: seconds
  * Lifetime value: 28800
  * DH Group: GROUP_14
  * Phase 1 negotiation mode: main

**For IPSec:**
  * Encapsulation mode: tunnel
  * Encryption algorithm: aes-256
  * Authorization algorithm: sha256
  * Lifetime units: seconds
  * Lifetime value: 3600
  * Perfect forward secrecy (PFS): GROUP_14
  * Transform protocol: esp

**Section 3: Dead Peer Detection** [![](/img/migrated/Screenshot-2025-08-18-110311-1-d443cc15.png)](/img/migrated/Screenshot-2025-08-18-110311-1-d443cc15.png)
Enter the Delay and max failure values, then select **Create VPN Connection**.

## Step 2: Configure VPN on VMware Cloud
- Sign in to the VMware system to set up the VPN Site-to-Site connection information. [![file](/img/migrated/image-1744187357567-a443e457.png)](/img/migrated/image-1744187357567-a443e457.png)
- On the **Peer Authentication** tab, enter the **Pre-shared key** created on the OPS side, then select Next. [![file](/img/migrated/image-1744187368445-21260a99.png)](/img/migrated/image-1744187368445-21260a99.png)
  * Enter the **Endpoint Configuration** fields. [![file](/img/migrated/image-1744187391395-c3f680db.png)](/img/migrated/image-1744187391395-c3f680db.png)
  * After creation, select **Customize Security Profile** to update the IKE policy and IPSec policy to **match the IKE policy and IPSec policy created on OPS**. [![file](/img/migrated/image-1744187411562-947bda1b.png)](/img/migrated/image-1744187411562-947bda1b.png)
- Select **View statistics** to check the connection status.
If the status shows **UP**, the connection between the two sites is established successfully. [![file](/img/migrated/image-1744187423506-91d113ce.png)](/img/migrated/image-1744187423506-91d113ce.png) [![file](/img/migrated/image-1744187435352-3206ec31.png)](/img/migrated/image-1744187435352-3206ec31.png)

## Step 3: Verify the connection
  * Ping from OPS VM to VMware VM. [![file](/img/migrated/image-1744187482688-2d623cf1.png)](/img/migrated/image-1744187482688-2d623cf1.png)
  * Ping from VMware VM to OPS VM. [![file](/img/migrated/image-1744187497120-5bc3e118.png)](/img/migrated/image-1744187497120-5bc3e118.png)
