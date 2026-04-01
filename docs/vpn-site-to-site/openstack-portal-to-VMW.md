---
id: "openstack-portal-to-VMW"
title: "Step 1: Configure VPN_AAS on Openstack"
description: "In this example, we will create a VPN Site-to-Site connection with the parameters shown in the topology below."
sidebar_label: "Step 1: Configure VPN_AAS..."
sidebar_position: 17
pagination_next: null
---

# Step 1: Configure VPN_AAS on Openstack

In this example, we will create a VPN Site-to-Site connection with the parameters shown in the topology below. 
[![file](/img/migrated/image-1765791265680-2f6051f0.png)](/img/migrated/image-1765791265680-2f6051f0.png)
Access and create a VPN Site-to-Site on <https://console.fptcloud.com>
-Create Customer Gateway 
+Remote IP public: is the floating IP of the VPN gateway VMW 
+Remote private network: is the Lan Subnet sequence that needs to be peered by VMW [![file](/img/migrated/image-1765791539886-a1399dc6.png)](/img/migrated/image-1765791539886-a1399dc6.png)
  * Create a VPN Connection With the parameter **"Pre-shared key"** that needs to be saved to be filled in when initiating a VPN Connection on VMW. 

The specifications of VPN Connection will include 3 main sections: 
  * General information (contains general information of the VPN connection) 
  * Remote VPN Information (contains encryption information and customer information) 
  * Dead Peer Detection (the number of times the system automatically retries to connect when there is a problem) 

**Section 1: General information**
[![file](/img/migrated/image-1765791650959-d54cc64b.png)](/img/migrated/image-1765791650959-d54cc64b.png)
**Section 2: Remote VPN information**
[![file](/img/migrated/image-1765791876602-bfc3ce69.png)](/img/migrated/image-1765791876602-bfc3ce69.png)
If you select Providers = **"others"** , then follow these steps: 
  * Step 1: Fill up providers name = "VMWare" 
  * Step 2: Fill in the information for IKE and IPSec, specifically as follows: 

**For IKE:**
  * Encryption algorithm: aes-256 
  * Authorization algorithm: sha256 
  * IKE version: ikev2 
  * Lifetime units: seconds 
  * Lifetime value: 28800 
  * DH Group: GROUP_14 
  * Phase1 negotiation mode: main 

**For IPsec:**
  * Encapsulation mode: tunnel 
  * Encryption algorithm: aes-256 
  * Authorization algorithm: sha256 
  * Lifetime units: seconds 
  * Lifetime value: 3600 
  * Perfect forward secrecy (PFS): GROUP_14 
  * Transform protocol: esp 

**Section 3: Dead Peer Detection** [![file](/img/migrated/image-1765792370389-be62aa14.png)](/img/migrated/image-1765792370389-be62aa14.png)
After filling in all the information, please select "**Create VPN Connection** " 
# Step 2: Configure VPN_AAS on VMWare Cloud
-Go to the VMWare system to set up, then click 
  * Enter the **Endpoint Configuration fields** [![file](/img/migrated/image-1765792537442-cfd45c7d.png)](/img/migrated/image-1765792537442-cfd45c7d.png)
  * After creation, select **Customize Security Profile** to edit the IKE policy, IPSec policy to match the IKE policy, IPSec policy created in OSP. [![file](/img/migrated/image-1765792592112-2661f855.png)](/img/migrated/image-1765792592112-2661f855.png)
  * Select **View statistics** , to check the connection status. If the display status is **UP** , → have successfully connected between the 2 sites.file [![file](/img/migrated/image-1765792630730-24ebf3f1.png)](/img/migrated/image-1765792630730-24ebf3f1.png) [![file](/img/migrated/image-1765792651631-076d8ebc.png)](/img/migrated/image-1765792651631-076d8ebc.png) **Step 3: Check the connection** Ping from VM OPS -> VM VMWare [![file](/img/migrated/image-1765792700896-cc19d07e.png)](/img/migrated/image-1765792700896-cc19d07e.png) Ping from VM VM WMare-> VM OSP [![file](/img/migrated/image-1765792717595-c17872cc.png)](/img/migrated/image-1765792717595-c17872cc.png)
