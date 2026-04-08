---
id: "monitoring-service-through-logging-feature-guide"
title: "Monitor service through the Logging feature"
description: "Guide to monitoring VPN Site-to-Site activity using the Logging feature"
sidebar_label: "Monitor via Logging"
sidebar_position: 13
pagination_next: null
---

# Monitor service through the Logging feature

1. On the VPN detail screen, select the **Logging** tab from the horizontal menu.

[![Logging tab](/img/migrated/Screenshot-2025-09-12-103802-1-088dfdf7.png)](/img/migrated/Screenshot-2025-09-12-103802-1-088dfdf7.png)

2. Review the service activity history.

[![Activity history](/img/migrated/Screenshot-2025-09-12-103908-b231479b.png)](/img/migrated/Screenshot-2025-09-12-103908-b231479b.png)

FPT Smart Cloud provides the following system log types:

| **Type** | **Description** |
| --- | --- |
| **IKE (Internet Key Exchange)** | Phase 1 setup — key exchange information. |
| **CFG (Configuration)** | Phase 2 setup — tunnel configuration information. |
| **NET (Network)** | Communication between peers via UDP 500/4500. |
| **KNL (Kernel)** | Route or route policy configuration. |
| **ENC (Encryption)** | Encryption/decryption during handshake. |
| **DPD (Dead Peer Detection)** | Peer health check information. |
| **LIB (Library)** | Internal library calls within the Charon engine. |
| **ESP (Encapsulating Security Payload)** | Security Association (SA) setup using IPsec. |
| **TRC (Traffic)** | Encrypted traffic packet transmission. |
| **System** | Other system logs. |

**Common log messages:**

| **Content** | **Log message** | **Meaning / Troubleshooting** |
| --- | --- | --- |
| **IKE Phase 1 successful** | `[IKE] IKE_SA <name> established between 192.0.2.90[192.0.2.90]...192.0.2.74[192.0.2.74]` | The IKE SA connection was successfully established between the local and remote IPs. |
| **IPSec Phase 2 successful** | `[IKE] CHILD_SA <name> established with SPIs cf4973bf_i c1cbfdf2_o and TS 192.168.48.0/24/0 === 10.42.42.0/24/0` | The data tunnel has been successfully established between the subnet ranges. |
| **Traffic successful** | `[NET] sending packet: from x.x.x.x[4500] to x.x.x.x[4500] (80 bytes)` | Data packets were successfully transmitted through the tunnel. Port 4500 indicates NAT-T is in use. |
| **Rekey successful** | `CHILD_SA con4{97} state change: REKEYING => REKEYED` | The system automatically regenerated a new security key without disrupting the connection. |
| **PSK authentication successful** | `authentication of 'IP' with pre-shared key successful` | The device authenticated successfully using the pre-shared key. |
| **Incorrect Phase 1 negotiation mode** | `[IKE] initiating Aggressive Mode IKE_SA` / `Aggressive Mode PSK disabled for security reasons` | Phase 1 negotiation mode mismatch between peers. Recheck the **Phase 1 negotiation mode** setting. |
| **Incorrect IKE Policy Phase 1** | `[IKE] no peer config found` | Phase 1 authentication failed. Verify the **IKE Policy** on both sides. |
| **Mismatched Pre-shared Key** | `[ENC] invalid HASH_V1/ID_V1 payload length, decryption failed?` | Authentication failed. Verify both peers use the same pre-shared key. |
| **Incorrect IKE Policy** | `[IKE] no proposal found` | Incorrect encryption or algorithm settings in Phase 1. Recheck the **IKE Policy** configuration. |
| **Incorrect IPsec Policy** | `[IKE] no matching CHILD_SA config found` | Phase 2 authentication failed. Review the **IPsec Policy** and verify the remote subnet in the Customer Gateway. |
| **Peer ID mismatch** | `[IKE] IDir '192.0.2.10' does not match to '203.0.113.245'` | Peer ID mismatch. Verify **Local/Remote ID** configuration if NAT IP is used. |
