---
id: "VPN-Site-to-Site-Configuration-with-Fortigate-guide"
title: "VPN Site-to-Site configuration with Fortigate"
description: "Guide to configuring VPN Site-to-Site between FPT Cloud and a Fortigate firewall"
sidebar_label: "Configuration with Fortigate"
sidebar_position: 9
---

# VPN Site-to-Site configuration with Fortigate

## Prerequisites

Ensure the following conditions are met before starting:

- VPN Site-to-Site has been created on FPT Cloud Portal.
- Fortigate is installed, enabled, and licensed on the customer side.
- Fortigate has been configured with LAN and WAN IP addresses.

## Step 1: Configure VPN Site-to-Site on FPT Cloud Portal

Access [https://console.fptcloud.com/](https://console.fptcloud.com/) and create the VPN Site-to-Site.

**Create a Customer Gateway:**

- **Remote private network**: LAN subnet range for peering with Fortigate
- **Remote IP public**: Public IP of the Fortigate firewall

![Customer Gateway](/img/migrated/photo_1_2025-07-09_17-37-35-3a5135c3.jpg)

**Create a VPN Connection:**

:::note
Save the **Pre-shared key** value — you will need it when configuring Fortigate.
:::

A VPN connection has three main sections:

- **General Information** — basic connection details
- **Remote VPN Information** — encryption and customer-side configuration
- **Dead Peer Detection** — automatic retry settings

**Section 1: General Information**

![General Information](/img/migrated/photo_2_2025-07-09_17-37-35-f1f6f494.jpg)

**Section 2: Remote VPN Information**

![Remote VPN Information](/img/migrated/image-1757055954440-3519ef8e.png)

When selecting the provider **Fortigate**, the system automatically fills in the IKE and IPsec settings:

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

![Dead Peer Detection](/img/migrated/Screenshot-2025-08-18-110311-2300da0e.png)

Enter the **Delay** and **Max failures** values, then click **Create VPN Connection**.

## Step 2: Configure IPsec on Fortigate

1. Log in to the Fortigate web interface.

![Fortigate login](/img/migrated/image-1744193935450-35f5c8ce.png)

2. Select **IPsec Wizard**.

![IPsec Wizard](/img/migrated/image-1744193947980-2791ca43.png)

3. Go to **IPsec Tunnels**:
   - Enter the FPT Cloud IP address from Step 1.
   - Select the WAN interface (if multiple WAN interfaces exist, specify the one to use).

![IPsec Tunnel config](/img/migrated/image-1744193964825-d0b0043d.png)

Check the connection status on FPT Smart Cloud Portal.

![Connection status](/img/migrated/image-1744193984133-1153c0da.png)

4. Enable **Local Gateway** and select **Primary IP**.

![Local Gateway](/img/migrated/image-1744193993723-b814a802.png)

5. Set the **Method** to **Pre-shared Key** and enter the same key as in Step 1.

![Pre-shared key](/img/migrated/image-1744194001749-b890d7b8.png)

:::note
If the customer setup is behind NAT, configure as shown below and contact L3-FPT Smart Cloud for support.
:::

![NAT config](/img/migrated/image-1744194012256-2ab35738.png)

6. Configure Phase 1.

![Phase 1](/img/migrated/image-1744194042329-41a8e0ca.png)

If NAT is not used, ensure that NAT mode is disabled.

7. Configure Phase 2. Set the **Local IP** to the customer network range.

![Phase 2](/img/migrated/image-1744194053329-8c1ac803.png)

## Step 3: Configure firewall and routing on Fortigate

Set the firewall to **Allow All** for both incoming and outgoing traffic.

**From FPT Cloud to Fortigate:**

![FPT to Fortigate](/img/migrated/image-1744194062973-cc3001df.png)

**From Fortigate to FPT Cloud:**

![Fortigate to FPT](/img/migrated/image-1744194072242-b7107945.png)

**Connection successfully established:**

![Connection established](/img/migrated/image-1744194081090-379a371e.png)

Configure routing with the **Destination** set to the FPT Cloud network (e.g., `172.30.205.0/255.255.255.0`) and **Interface** set to the IPsec tunnel created earlier.

![Routing config](/img/migrated/image-1744194099241-826d8df0.png)

You can now open a terminal to test network connectivity using `ping`.
