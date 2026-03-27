---
id: "VPN-Site-to-Site-Configuration-with-Palo-Alto-guide"
title: "Vpn Site To Site Configuration With Palo Alto Guide"
description: "You must ensure the following conditions are met:"
sidebar_label: "Vpn Site To Site..."
sidebar_position: 13
---

# Vpn Site To Site Configuration With Palo Alto Guide

You must ensure the following conditions are met:
  * The VPN Site-to-Site service is set up on the FPT Cloud Portal.
  * A Palo Alto firewall is installed and enabled on the customer's side.
  * The Palo Alto firewall has been configured with three IP addresses: **Management (Public IP) - WAN (Public IP) - LAN.**

##  **Step 1:** Configure VPN Site-to-Site
Access and create the VPN Site-to-Site on <https://console.fptcloud.com/>
**-Create a Customer Gateway:**
  * Remote private network: LAN subnet range for peering with Palo Alto
  * Remote IP public: Public IP address of Palo Alto

[![](/img/migrated/photo_1_2025-07-09_17-34-04-eb79dd6d.jpg)](/img/migrated/photo_1_2025-07-09_17-34-04-eb79dd6d.jpg)
**-Create a VPN Connection:**
A VPN connection includes three main sections:
  * **General Information** (contains general connection details)
  * **Remote VPN Information** (contains encryption and customer-side information)
  * **Dead Peer Detection** (number of automatic retries if the connection encounters issues)

**Section 1: General Information**
[![](/img/migrated/photo_2_2025-07-09_17-34-04-b9535872.jpg)](/img/migrated/photo_2_2025-07-09_17-34-04-b9535872.jpg)
Note: The Pre-shared key value should be saved for configuration on Palo Alto.
**Section 2: Remote VPN Information**
[![](/img/migrated/photo_3_2025-07-09_17-34-04-8e9693a4.jpg)](/img/migrated/photo_3_2025-07-09_17-34-04-8e9693a4.jpg)
When selecting the provider “Palo Alto,” the system automatically fills in the IKE and IPsec information as follows: **For IKE:**
  * Encryption algorithm: aes-256
  * Authorization algorithm: sha256
  * IKE version: ikev2
  * Lifetime units: seconds
  * Lifetime value: 28800
  * DH Group: GROUP_14
  * Phase 1 negotiation mode: main

**For IPsec:**
  * Encapsulation mode: tunnel
  * Encryption algorithm: aes-256
  * Authorization algorithm: sha256
  * Lifetime units: seconds
  * Lifetime value: 3600
  * Perfect forward secrecy (PFS): GROUP_14
  * Transform protocol: esp

**Section 3: Dead Peer Detection** [![](/img/migrated/Screenshot-2025-08-18-110311-14-33d5df01.png)](/img/migrated/Screenshot-2025-08-18-110311-14-33d5df01.png)
Enter the **Delay** and **Max failure** values, then click **Create VPN Connection.**
## **Step 2: Configure IPsec on Palo Alto**
  * Log in to Palo Alto via the Management IP: [![file](/img/migrated/image-1744194232470-9da590d2.png)](/img/migrated/image-1744194232470-9da590d2.png)
  * Click **Add** and activate the Palo Alto Zone. [![file](/img/migrated/image-1744194240732-d4006205.png)](/img/migrated/image-1744194240732-d4006205.png)
  * Create a Virtual Router on Palo Alto and click **OK**. [![file](/img/migrated/image-1744194248910-06f7f0cd.png)](/img/migrated/image-1744194248910-06f7f0cd.png)
  * Create WAN and LAN interfaces (for example, ethernet1/1 and ethernet1/2). [![file](/img/migrated/image-1744194257003-e445a49a.png)](/img/migrated/image-1744194257003-e445a49a.png) [![file](/img/migrated/image-1744194266348-d59065a8.png)](/img/migrated/image-1744194266348-d59065a8.png) [![file](/img/migrated/image-1744194276204-d3083457.png)](/img/migrated/image-1744194276204-d3083457.png) [![file](/img/migrated/image-1744194290319-f4e7ca1b.png)](/img/migrated/image-1744194290319-f4e7ca1b.png)
  * Create an IKE Crypto profile. [![file](/img/migrated/image-1744194301359-e16f558f.png)](/img/migrated/image-1744194301359-e16f558f.png)
  * Create an IPSec Crypto profile. [![file](/img/migrated/image-1744194310783-c9d4bb7e.png)](/img/migrated/image-1744194310783-c9d4bb7e.png)
  * Go to IPsec Tunnels:

-In the General tab, enter Peer Address as the IP from FPT created in Step 1 (e.g., 103.176.147.48). [![file](/img/migrated/image-1744194319286-af6f827c.png)](/img/migrated/image-1744194319286-af6f827c.png) -In the Advanced Options tab, fill in the required details: [![file](/img/migrated/image-1744194330142-443aff9d.png)](/img/migrated/image-1744194330142-443aff9d.png) - Create GlobalProtect IPSec: [![file](/img/migrated/image-1744194338236-aff2c542.png)](/img/migrated/image-1744194338236-aff2c542.png)
  * Create IPSec Tunnels: [![file](/img/migrated/image-1744194345834-175f8eb5.png)](/img/migrated/image-1744194345834-175f8eb5.png) [![file](/img/migrated/image-1744194370901-6e262c62.png)](/img/migrated/image-1744194370901-6e262c62.png) [![file](/img/migrated/image-1744194404210-8d78429e.png)](/img/migrated/image-1744194404210-8d78429e.png)

## **Step 3: Configure Firewall and Routing on Palo Alto**
To configure the firewall and routing on Palo Alto, follow the example below:
  * Open any firewall policy.

[![file](/img/migrated/image-1744194387472-7a2a5471.png)](/img/migrated/image-1744194387472-7a2a5471.png) [![file](/img/migrated/image-1744194396699-4fadaad6.png)](/img/migrated/image-1744194396699-4fadaad6.png) [![file](/img/migrated/image-1744194478669-09f9447b.png)](/img/migrated/image-1744194478669-09f9447b.png)
Depending on your environment, configure the source and destination according to the rule.
  * Configure routing between the two subnets 30.30.30.0/24 and 80.80.80.0/24 (adjust according to your actual source and destination networks).

[![file](/img/migrated/image-1744194487401-0030c70b.png)](/img/migrated/image-1744194487401-0030c70b.png)
At this point, you can open the Terminal / Command Line to test network connectivity using ping.