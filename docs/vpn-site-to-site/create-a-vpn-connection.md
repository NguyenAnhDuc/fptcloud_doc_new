---
id: "create-a-vpn-connection"
title: "Create a VPN connection"
description: "Guide to creating a new VPN connection on FPT Cloud Portal"
sidebar_label: "Create a VPN connection"
sidebar_position: 19
draft: true
---

# Create a VPN connection

1. On the **VPN Connection List** screen, click **Create VPN Connection**.

[![Create VPN Connection](/img/migrated/image-1744180675487-bc2332e2.png)](/img/migrated/image-1744180675487-bc2332e2.png)

2. Enter the VPN Gateway information:

| **Field** | **Description** |
| --- | --- |
| **VPN name** | Name of the VPN connection. Use an easy-to-remember name (e.g., `vpn_to_aws`). |
| **Description** | Short description (optional) to help distinguish between connections. |
| **Pre-shared key** | Shared security key between both sides (can be manually defined or system-generated). |
| **Local IP Public** | Public IP address on the FPT Cloud side. |
| **Local private networks** | Internal network ranges to connect (enter in CIDR format; multiple entries supported). |
| **IPSec policy** | Encryption policy for Phase 2. |
| **IKE policy** | Encryption policy for Phase 1. |
| **Customer gateway name** | Customer Gateway to use for this connection. |
| **Delay** | Waiting time between DPD retry attempts (in seconds). |
| **Max failures** | Maximum number of retry attempts before the connection is marked as failed. |

:::note
To ensure stable connectivity, configure the **DPD Delay** and **Max Failure** parameters on the FPT Cloud side to match those on your partner device.

Recommended values for common providers:

| Provider | Delay | Max failures |
| --- | --- | --- |
| AWS | 15 | 3 |
| Fortigate | 15 | 3 |

If you adjust parameters on the provider side, update the corresponding settings on FPT Cloud to maintain compatibility.
:::

3. Click **Create VPN Connection** to complete the setup.

[![VPN Connection created](/img/migrated/6219884231644005829-c20fbd72.jpg)](/img/migrated/6219884231644005829-c20fbd72.jpg)
