---
id: "create-vpn"
title: "Create VPN Site-to-Site"
description: "Guide to creating a new VPN Site-to-Site connection on FPT Cloud Portal"
sidebar_label: "Create VPN"
sidebar_position: 2
---

# Create VPN Site-to-Site

1. In the **Networking** menu, select the **VPN** tab.

[![VPN page](/img/migrated/Truy-ca%CC%A3%CC%82p-trang-VPN-1024x479-ce85af29.png)](/img/migrated/Truy-ca%CC%A3%CC%82p-trang-VPN-1024x479-ce85af29.png)

2. Select **Create**.

[![Create](/img/migrated/Create-1024x479-bd78020f.png)](/img/migrated/Create-1024x479-bd78020f.png)

3. On the Config page, enter the required fields.

[![Config VPN](/img/migrated/Config-VPN-1024x918-ecc5a6dd.png)](/img/migrated/Config-VPN-1024x918-ecc5a6dd.png)

| **Field** | **Description** | **Constraints** |
| --- | --- | --- |
| **Name** | Name of the VPN Site-to-Site | Up to 32 characters. Only letters, numbers, underscores, dashes, spaces, and dots are allowed. |
| **Description** | Description of the VPN connection | 100-character limit |
| **Security Profile** | Connection security type | |
| **Authentication mode** | Authentication method | Certificate authentication is not currently supported. |
| **Pre-shared key** | Shared secret key used by both peers | 8–32 characters. Valid characters: A–Z, a–z, 0–9, `_` and `.` |
| **Edge gateway** | Edge gateway handling enterprise application workloads | Select from list |
| **Local endpoint IP address** | Public IP issued by the FPT Cloud system | This IP cannot be attached to any VPC or other service. One IP can be used for multiple VPN connections. |
| **Local endpoint networks** | Networks on the FPT Cloud side | Networks must not overlap with each other or with remote endpoint networks. |
| **Remote endpoint IP address** | Public IP of the on-premises device | IPv4 address |
| **Remote endpoint networks** | Networks on the on-premises side | Networks must not overlap with each other or with local endpoint networks. |
