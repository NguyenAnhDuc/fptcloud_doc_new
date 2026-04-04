---
id: "サイト間VPNの作成 -1"
title: "Create VPN Site-to-Site"
description: "Guide to creating a new VPN Site-to-Site connection on FPT Cloud Portal."
sidebar_label: "Create VPN Site-to-Site"
sidebar_position: "2"
draft: true
---

# Create VPN Site-to-Site

Creating a VPN Site-to-Site connection establishes a secure tunnel between your on-premises network and FPT Cloud resources.

1. Select **Networking** → **VPN** tab.

   ![VPN management page](/img/migrated/image-1742899330143-080379db.png)

2. Click **Create**.

   ![Create VPN button](/img/migrated/image-1742899367880-bb010d83.png)

3. On the **Config** page, enter the required information:

   | Field | Description | Constraints |
   |---|---|---|
   | **Name** | Name of the VPN Site-to-Site | Up to 32 characters. Letters, numbers, underscores, dashes, spaces, and dots only. |
   | **Description** | Description of the VPN connection | Up to 100 characters |
   | **Security Profile** | Connection security type | |
   | **Authentication mode** | Authentication method | Certificate authentication is not currently supported. |
   | **Pre-shared key** | Shared secret key for both peers | 8–32 characters: A–Z, a–z, 0–9, `_`, `.` |
   | **Edge gateway** | Edge gateway handling network connectivity | Select from list |
   | **Local endpoint IP Address** | Public IP of the FPT Cloud system | IP not assigned to any other VPC or service |
   | **Local endpoint Networks** | Networks on the cloud side | Must not overlap with other VPN connections or Remote endpoint Networks |
   | **Remote endpoint IP Address** | Public IP of the on-premises device | IPv4 address |
   | **Remote endpoint Networks** | Networks on the on-premises side | Must not overlap with Local endpoint Networks |

   ![VPN configuration form](/img/migrated/image-1742899430155-89b24257.png)
