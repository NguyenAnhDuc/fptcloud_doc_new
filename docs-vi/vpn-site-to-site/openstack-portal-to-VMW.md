---
id: "openstack-portal-to-VMW"
title: "VPN Site-to-Site configuration between OpenStack and VMware"
description: "Guide to configuring a VPN Site-to-Site connection between FPT Cloud OpenStack and VMware Cloud"
sidebar_label: "Configuration with VMware"
sidebar_position: "17"
---

# VPN Site-to-Site configuration between OpenStack and VMware

This guide uses the topology below as an example.

[![Topology](/img/migrated/image-1765791265680-2f6051f0.png)](/img/migrated/image-1765791265680-2f6051f0.png)

## Step 1: Configure VPN Site-to-Site on FPT Cloud Portal

Access [https://console.fptcloud.com](https://console.fptcloud.com) and create the VPN Site-to-Site.

**Create a Customer Gateway:**

- **Remote IP public**: Floating IP of the VMware VPN gateway
- **Remote private network**: LAN subnet range for peering with VMware

[![Customer Gateway](/img/migrated/image-1765791539886-a1399dc6.png)](/img/migrated/image-1765791539886-a1399dc6.png)

**Create a VPN Connection:**

:::note
Save the **Pre-shared key** value — you will need it when configuring the VPN connection on VMware.
:::

A VPN connection has three main sections:

- **General information** — general connection details
- **Remote VPN Information** — encryption and customer-side configuration
- **Dead Peer Detection** — automatic retry settings

**Section 1: General information**

[![General information](/img/migrated/image-1765791650959-d54cc64b.png)](/img/migrated/image-1765791650959-d54cc64b.png)

**Section 2: Remote VPN information**

[![Remote VPN information](/img/migrated/image-1765791876602-bfc3ce69.png)](/img/migrated/image-1765791876602-bfc3ce69.png)

If you select **Providers = "others"**, follow these steps:

1. Set the provider name to `VMWare`.
2. Fill in the IKE and IPSec parameters as follows:

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

[![Dead Peer Detection](/img/migrated/image-1765792370389-be62aa14.png)](/img/migrated/image-1765792370389-be62aa14.png)

After filling in all information, click **Create VPN Connection**.

## Step 2: Configure VPN on VMware Cloud

1. Go to the VMware system and fill in the **Endpoint Configuration** fields.

[![Endpoint Configuration](/img/migrated/image-1765792537442-cfd45c7d.png)](/img/migrated/image-1765792537442-cfd45c7d.png)

2. After creation, select **Customize Security Profile** to edit the IKE and IPSec policies to match the configuration from Step 1.

[![Customize Security Profile](/img/migrated/image-1765792592112-2661f855.png)](/img/migrated/image-1765792592112-2661f855.png)

3. Select **View statistics** to check the connection status. A status of **UP** indicates the two sites are connected successfully.

[![View statistics](/img/migrated/image-1765792630730-24ebf3f1.png)](/img/migrated/image-1765792630730-24ebf3f1.png) [![Connection UP](/img/migrated/image-1765792651631-076d8ebc.png)](/img/migrated/image-1765792651631-076d8ebc.png)

## Step 3: Verify the connection

Ping from OpenStack VM to VMware VM:

[![Ping OSP to VMW](/img/migrated/image-1765792700896-cc19d07e.png)](/img/migrated/image-1765792700896-cc19d07e.png)

Ping from VMware VM to OpenStack VM:

[![Ping VMW to OSP](/img/migrated/image-1765792717595-c17872cc.png)](/img/migrated/image-1765792717595-c17872cc.png)
