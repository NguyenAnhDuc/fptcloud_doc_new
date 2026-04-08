---
id: "floating-ip"
title: "Floating Ip"
description: "A **Floating IP** (also known as a **Public IP**) is a publicly accessible static IPv4 address."
sidebar_label: "Floating Ip"
sidebar_position: 16
---

# Floating Ip

### Overview
A **Floating IP** (also known as a **Public IP**) is a publicly accessible static IPv4 address. 
You can **assign or reassign** a reserved Floating IP to a **GPU Virtual machine** to make it reachable from the internet. 
The Floating IP can be **removed at any time** when external access is no longer required. 

### Attach Floating IPs
After successfully creating a GPU VM, you can assign a **Floating IP** (a Public IP that can be flexibly attached or detached) to make the instance accessible from the internet. 

#### Step 1: Access the Allocate IP Address Feature
You can allocate a Floating IP using one of the following methods: 
**Method 1:**
  * In the left-side menu, go to **Networking → Floating IPs**. 

[![Alt text](/img/migrated/Floating-IP-1-568fdf5c.png)](/img/migrated/Floating-IP-1-568fdf5c.png)
  * Click **Allocate IP Address** to create a new Floating IP. 

**Method 2:**
  * In the left-side menu, go to **Instance Management**. 
  * Select the VM you want to assign a Floating IP to. 

[![Alt text](/img/migrated/Floating-IP-2-85d76e05.png)](/img/migrated/Floating-IP-2-85d76e05.png)
  * Click the **Floating IP** button to allocate a new address. 

#### Step 2: Fill in IP Address Information
After opening the **Allocate IP Address** feature, a pop-up window will appear prompting you to enter the necessary details for the IP address allocation. 
[![Alt text](/img/migrated/Floating-IP-3-381e49df.png)](/img/migrated/Floating-IP-3-381e49df.png)  
| **Fields**  | **Description**  |  
| --- | --- |  
| **Add Tag**  | Optional, to help with resource categorization and management.  |  
| **Instance Port**  | • The internal port on the instance that receives forwarded traffic.   
  
• You can also configure separate **NAT rules** for specific instance ports.   
  
• Each port on an instance must be **unique** and cannot overlap with other rules.   
  
• If this field is left blank, the system will forward traffic on **all ports by default**.  |  
| **IP Address**  | • Select an available (reserved) IP, or   
  
• Choose **Allocate new from pool** to request a new IP (if your quota allows).  |  
| **IP Port**  | • The external port on the Floating IP is used to forward incoming traffic to the instance.   
  
• You can configure separate **NAT rules** for specific ports.   
  
• Each port on a single IP must be **unique** and cannot overlap with other rules.   
  
• If this field is left blank, the system will forward traffic on **all ports by default**.  |  
| **Resource**  | • Select **Instance** , then   
  
• Choose the **GPU VM name** from the drop-down list to associate it with the Floating IP.   
  
_If you opened this pop-up from**Instance Management** , the VM field will be pre-filled automatically._   
  
• If you don’t need to attach the Floating IP to a virtual machine yet (for example, you plan to use it later), select **Not assign IP to instance**.  |  
Note:
If your **GPU VM uses an Ephemeral (NVMe) disk** , the following port settings are required: 
  * **IP Port:** Recommended to match the **Instance Port (22)** for SSH access. 
  * **Instance Port:** Set to **22** for SSH access. 

_You may repeat this step to add additional ports as needed._
If your **GPU VM uses a Block Storage - Persistent disk** , these port configurations are **optional**. 

#### Step 3: Confirm Allocation
After completing the required fields, click **Allocate Floating IP** to confirm. 
The newly created Floating IP will then appear in the list and can be attached to your VM. 

### Detach Floating IPs
If you no longer need to use a Floating IP or want to detach it to assign to another virtual machine, follow these steps: 
**Step 1:**
In the **Floating IP Management** page, locate the IP address you want to detach. 
Under the **Actions** column, select **Disconnect Instance**. 
[![Alt text](/img/migrated/Floating-IP-4-ed2f4d96.png)](/img/migrated/Floating-IP-4-ed2f4d96.png)
**Step 2:**
A confirmation pop-up will appear. 
To confirm the detachment, click **Disconnect**. 
[![Alt text](/img/migrated/Floating-IP-5-cc51b9fd.png)](/img/migrated/Floating-IP-5-cc51b9fd.png)

### Release Floating IPs from the VPC
If a Floating IP is no longer needed, you can release it from the VPC as follows: 
**Step 1:**
In the **Floating IP Management** page, locate the IP address you want to remove. 
Under the **Actions** column, select **Release IP**. 
[![Alt text](/img/migrated/Floating-IP-6-49da5f96.png)](/img/migrated/Floating-IP-6-49da5f96.png)
**Step 2:**
A confirmation pop-up will appear. 
To confirm the release, click **Release**. 
[![Alt text](/img/migrated/Floating-IP-7-fc5fc5ad.png)](/img/migrated/Floating-IP-7-fc5fc5ad.png)
