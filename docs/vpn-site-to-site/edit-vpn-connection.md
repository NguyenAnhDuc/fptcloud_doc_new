---
id: "edit-vpn-connection"
title: "Edit Vpn Connection"
description: "To edit a VPN Connection, please follow the instructions below:"
sidebar_label: "Edit Vpn Connection"
sidebar_position: 20
---

# Edit Vpn Connection

To edit a VPN Connection, please follow the instructions below:   
**Step 1:** From the menu, select **Network** , then go to the VPN Site-to-Site tab. Here you can manage all existing VPN Connections. Select **Edit VPN Connection.** [![](/img/migrated/photo_7_2025-07-09_17-33-39-1b52f62f.jpg)](/img/migrated/photo_7_2025-07-09_17-33-39-1b52f62f.jpg)
**Step 2:** Edit the configuration details to update the VPN Connection. The VPN Connection parameters are divided into three main sections:
  * **General Information** (contains basic connection details)
  * **Remote VPN Information** (contains encryption and customer-side details)
  * **Dead Peer Detection** (defines retry settings when connection issues occur)

**Section 1: General Information** [![file](/img/migrated/image-1752120550850-12c6cfd0.png)](/img/migrated/image-1752120550850-12c6cfd0.png)  
| **Field**  | **Description**  |  
| --- | --- |  
| VPN name  | Name of the VPN Connection.  |  
| Description  | Description of the VPN Connection.  |  
| Pre-shared key  | The shared security key between the two devices.  
  
Users can generate a new key by clicking **Refresh Key** , and copy it by clicking **Copy**.  |  
| Local IP public  | Public IP address assigned by the FPT Cloud system.  |  
| Local private networks  | The private network range of your resources within FPT Cloud.  |  
**Section 2: Remote VPN Information** [![](/img/migrated/photo_5_2025-07-09_17-33-39-e3bbb047.jpg)](/img/migrated/photo_5_2025-07-09_17-33-39-e3bbb047.jpg)
**Customer gateway**  
| **Field**  | **Description**  |  
| --- | --- |  
| **Customer gateway**  |   |  
| Customer gateway  | Configuration information of the remote endpoint. At this step, select the correct Customer Gateway you want to connect to.   
  
If you don’t have a Customer Gateway yet, please click [here](../vpn-site-to-site/index.md) for setup instructions.  |  
| Providers  | List of VPN service providers supported by FCI.  |  
| **IKE Policy**  |   |  
| Authorization algorithm  | The algorithm used to authenticate data during VPN setup.  
  
Available values: sha1, sha256, sha384, sha512, aes-xcbc   
  
Recommended value: **sha256** for a balance between security and performance.  |  
| Encryption algorithm  | Algorithm used to encrypt the security key exchange process.  
  
Available values: aes-128, aes-192, aes-256, aes-128-gcm-8, aes-128-gcm-12, aes-128-gcm-16, aes-192-gcm-8, aes-192-gcm-12, aes-192-gcm-16, aes-256-gcm-8, aes-256-gcm-12, aes-256-gcm-16.   
  
FCI recommends using **aes-128-gcm-12** for an optimal balance between security and performance.  |  
| IKE version  | Supported IKE protocol versions.  
Values: ikev1, ikev2  |  
| Lifetime units  | The time unit for IKE connection lifetime.  
  
Default: second  |  
| Lifetime value  | The specific lifetime value for Phase 1.  |  
| DH Group  | Diffie-Hellman group used for generating initial key exchange.  
Values: group_1, group_2, group_5, group_14, group_15, group_16, group_17, group_18, group_19, group_20, group_21.  |  
| Phase 1 negotiation mode  | Defines how both devices establish the secure channel in IKE Phase 1.  
  
Values: main, aggressive (default: main).  |  
| **IPSec Policy**  |   |  
| Authorization algorithm  | Algorithm used to authenticate data during VPN operation.  
  
Values: sha1, sha256, sha384, sha512, aes-xcbc.  
  
_Recommended: sha256 for balance between security and performance._  |  
| Encapsulation mode  | The mode for encrypting and encapsulating transmitted data.  
  
Default: tunnel.  |  
| Encryption algorithm  | Algorithm used to encrypt the actual VPN traffic.  
  
Values: aes-128, aes-192, aes-256.  
  
_Recommended:**aes-256** for balance between security and performance._  |  
| Lifetime units  | Default: second  |  
| Lifetime value  | Duration of an IPSec session before re-establishment.  |  
| Perfect forward secrecy  | Option ensuring session key security (PFS, usually paired with DH Group).  
  
Values: off, group_1, group_2, group_5, group_14, group_15, group_16, group_17, group_18, group_19, group_20, group_21.  
_Recommended: group_14 for a balanced security level._  |  
| Transform protocol  | Protocol defining how encryption and authentication are applied in IPSec.  
  
Values: esp, ah  |  
**Provider**
  * FCI currently supports pre-configured settings for the following providers: **AWS, Fortigate, Palo Alto**. For optimal connectivity, FCI recommends using these configurations.
  * For other providers not listed above, please enter the IKE and IPSec parameters manually as instructed in the sections above.

Default configuration parameters for supported providers:  
| **Configuration Parameter**  | **AWS**  | **Fortigate**  | **Palo Alto**  |  
| --- | --- | --- | --- |  
| **IKE Info**  |   |   |   |  
| IKE version  | ikev2  | ikev2  | ikev2  |  
| Encryption algorithm  | aes-256  | aes-256  | aes-256  |  
| Authorization algorithm  | sha256  | sha256  | sha256  |  
| DH Group  | group14  | group14 - group19  | group14 – group20  |  
| Lifetime value  | 28800s  | 28800s  | 28800s  |  
| Phase 1 negotiation mode  | main  | main  | main  |  
| **IPSec Info**  |   |   |   |  
| Encryption algorithm  | aes-256  | aes-256  | aes-256  |  
| Authorization algorithm  | sha256  | sha256  | sha256  |  
| Perfect forward secrecy  | group14  | group14 (or group19)  | group19  |  
| Lifetime value  | 3600s  | 3600s  | 3600s  |  
| Encapsulation mode  | tunnel  | tunnel  | tunnel  |  
| Transform protocol  | esp  | esp  | esp  |  
**Section 3: Dead Peer Detection**
[![](/img/migrated/Screenshot-2025-08-18-135750-8b41586b.png)](/img/migrated/Screenshot-2025-08-18-135750-8b41586b.png)  
| **Field**  | **Description**  |  
| --- | --- |  
| Delay(s)  | The time interval (in seconds) between each DPD probe to check connectivity.  
Default: 30s  |  
| Max failures  | The maximum number of failed attempts before the peer is considered dead and the connection is reset.  
Default: 10  |  
After filling in all the information, click **Update VPN Connection** to save changes, or **Cancel** to discard.
