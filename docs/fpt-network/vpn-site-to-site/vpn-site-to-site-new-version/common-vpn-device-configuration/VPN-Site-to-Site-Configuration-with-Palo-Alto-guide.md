---
id: "VPN-Site-to-Site-Configuration-with-Palo-Alto-guide"
title: "VPN Site-to-Site configuration with Palo Alto"
description: "Guide to configuring VPN Site-to-Site between FPT Cloud and a Palo Alto firewall"
sidebar_label: "Configuration with Palo Alto"
sidebar_position: 1
---

# VPN Site-to-Site configuration with Palo Alto

## Prerequisites

Ensure the following conditions are met before starting:

- The VPN Site-to-Site service is set up on FPT Cloud Portal.
- A Palo Alto firewall is installed and enabled on the customer side.
- The Palo Alto firewall has three IP addresses configured: **Management (Public IP)**, **WAN (Public IP)**, and **LAN**.

## Step 1: Configure VPN Site-to-Site on FPT Cloud Portal

Access [https://console.fptcloud.com/](https://console.fptcloud.com/) and create the VPN Site-to-Site.

**Create a Customer Gateway:**

- **Remote private network**: LAN subnet range for peering with Palo Alto
- **Remote IP public**: Public IP address of the Palo Alto firewall

[![Customer Gateway](/img/migrated/photo_1_2025-07-09_17-34-04-eb79dd6d.jpg)](/img/migrated/photo_1_2025-07-09_17-34-04-eb79dd6d.jpg)

**Create a VPN Connection:**

A VPN connection has three main sections:

- **General Information** — basic connection details
- **Remote VPN Information** — encryption and customer-side configuration
- **Dead Peer Detection** — automatic retry settings

**Section 1: General Information**

[![General Information](/img/migrated/photo_2_2025-07-09_17-34-04-b9535872.jpg)](/img/migrated/photo_2_2025-07-09_17-34-04-b9535872.jpg)

:::note
Save the **Pre-shared key** value — you will need it when configuring Palo Alto.
:::

**Section 2: Remote VPN Information**

[![Remote VPN Information](/img/migrated/photo_3_2025-07-09_17-34-04-8e9693a4.jpg)](/img/migrated/photo_3_2025-07-09_17-34-04-8e9693a4.jpg)

When selecting the provider **Palo Alto**, the system automatically fills in the IKE and IPsec settings:

**IKE:**

| Parameter | Value |
| --- | --- |
| Encryption algorithm | aes-256 |
| Authorization algorithm | sha256 |
| IKE version | ikev2 |
| Lifetime units | seconds |
| Lifetime value | 28800 |
| DH Group | GROUP_14 |
| Phase 1 negotiation mode | main |

**IPsec:**

| Parameter | Value |
| --- | --- |
| Encapsulation mode | tunnel |
| Encryption algorithm | aes-256 |
| Authorization algorithm | sha256 |
| Lifetime units | seconds |
| Lifetime value | 3600 |
| Perfect Forward Secrecy (PFS) | GROUP_14 |
| Transform protocol | esp |

**Section 3: Dead Peer Detection**

[![Dead Peer Detection](/img/migrated/Screenshot-2025-08-18-110311-14-33d5df01.png)](/img/migrated/Screenshot-2025-08-18-110311-14-33d5df01.png)

Enter the **Delay** and **Max failure** values, then click **Create VPN Connection**.

## Step 2: Configure IPsec on Palo Alto

1. Log in to Palo Alto via the Management IP.

[![Login](/img/migrated/image-1744194232470-9da590d2.png)](/img/migrated/image-1744194232470-9da590d2.png)

2. Click **Add** and activate the Palo Alto Zone.

[![Zone](/img/migrated/image-1744194240732-d4006205.png)](/img/migrated/image-1744194240732-d4006205.png)

3. Create a Virtual Router and click **OK**.

[![Virtual Router](/img/migrated/image-1744194248910-06f7f0cd.png)](/img/migrated/image-1744194248910-06f7f0cd.png)

4. Create WAN and LAN interfaces (for example, ethernet1/1 and ethernet1/2).

[![WAN interface](/img/migrated/image-1744194257003-e445a49a.png)](/img/migrated/image-1744194257003-e445a49a.png) [![LAN interface](/img/migrated/image-1744194266348-d59065a8.png)](/img/migrated/image-1744194266348-d59065a8.png) [![Interface config](/img/migrated/image-1744194276204-d3083457.png)](/img/migrated/image-1744194276204-d3083457.png) [![Interface result](/img/migrated/image-1744194290319-f4e7ca1b.png)](/img/migrated/image-1744194290319-f4e7ca1b.png)

5. Create an IKE Crypto profile.

[![IKE Crypto](/img/migrated/image-1744194301359-e16f558f.png)](/img/migrated/image-1744194301359-e16f558f.png)

6. Create an IPSec Crypto profile.

[![IPSec Crypto](/img/migrated/image-1744194310783-c9d4bb7e.png)](/img/migrated/image-1744194310783-c9d4bb7e.png)

7. Go to **IPsec Tunnels**:

   - In the **General** tab, enter the Peer Address as the FPT Cloud IP from Step 1 (e.g., `103.176.147.48`).

[![General tab](/img/migrated/image-1744194319286-af6f827c.png)](/img/migrated/image-1744194319286-af6f827c.png)

   - In the **Advanced Options** tab, fill in the required details.

[![Advanced Options](/img/migrated/image-1744194330142-443aff9d.png)](/img/migrated/image-1744194330142-443aff9d.png)

   - Create a GlobalProtect IPSec entry.

[![GlobalProtect IPSec](/img/migrated/image-1744194338236-aff2c542.png)](/img/migrated/image-1744194338236-aff2c542.png)

8. Create the IPSec Tunnels.

[![IPSec Tunnel 1](/img/migrated/image-1744194345834-175f8eb5.png)](/img/migrated/image-1744194345834-175f8eb5.png) [![IPSec Tunnel 2](/img/migrated/image-1744194370901-6e262c62.png)](/img/migrated/image-1744194370901-6e262c62.png) [![IPSec Tunnel 3](/img/migrated/image-1744194404210-8d78429e.png)](/img/migrated/image-1744194404210-8d78429e.png)

## Step 3: Configure firewall and routing on Palo Alto

1. Open a firewall policy.

[![Firewall policy](/img/migrated/image-1744194387472-7a2a5471.png)](/img/migrated/image-1744194387472-7a2a5471.png) [![Policy config](/img/migrated/image-1744194396699-4fadaad6.png)](/img/migrated/image-1744194396699-4fadaad6.png) [![Policy result](/img/migrated/image-1744194478669-09f9447b.png)](/img/migrated/image-1744194478669-09f9447b.png)

Configure the source and destination according to your environment rules.

2. Configure routing between the two subnets (e.g., `30.30.30.0/24` and `80.80.80.0/24`). Adjust to match your actual source and destination networks.

[![Routing config](/img/migrated/image-1744194487401-0030c70b.png)](/img/migrated/image-1744194487401-0030c70b.png)

You can now open a terminal to test network connectivity using `ping`.
