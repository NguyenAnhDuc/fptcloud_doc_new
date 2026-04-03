---
id: "pfsense-network-gateway"
title: "Pfsense Network Gateway"
description: "This article will introduce how to build a **highly available (HA) network gateway** using **pfSense**. This FreeBSD-bas"
sidebar_label: "Pfsense Network Gateway"
sidebar_position: 15
---

# Pfsense Network Gateway

This article will introduce how to build a **highly available (HA) network gateway** using **pfSense**. This FreeBSD-based open-source software helps you achieve a **stable and reliable network environment**. 

### What is pfSense?
**pfSense** is an **open source router/firewall software** based on **FreeBSD** that can implement various network functions such as **router** , **firewall** , **VPN** , and **proxy**. 
The configuration of the virtual network gateway when building **ExpressRoute / Site-to-Site VPN** is also described in the official documentation, making it safe and suitable for many **corporate environments**. 

### File Preparation
**Step 1:** **Download pfSense ISO file**
Go to the official pfSense website: <https://www.pfsense.org/download/>  
Download the latest **ISO image**. 
**Step 2:** **Login to FPT Cloud Console**
Visit <https://console.fptcloud.jp/> and log in using your provided credentials. 
**Step 3:** **Upload the ISO file**
Select the downloaded **pfSense ISO file** and upload it to the portal. You will receive a confirmation message once the upload is complete. 
[![Alt text](/img/migrated/Gateway-1-b47c3b2f.png)](/img/migrated/Gateway-1-b47c3b2f.png) [![Alt text](/img/migrated/Gateway-2-4be6ba54.png)](/img/migrated/Gateway-2-4be6ba54.png) [![Alt text](/img/migrated/Gateway-3-8fdf7850.png)](/img/migrated/Gateway-3-8fdf7850.png) [![Alt text](/img/migrated/Gateway-4-7cdc3ec5.png)](/img/migrated/Gateway-4-7cdc3ec5.png) [![Alt text](/img/migrated/Gateway-5-aa96ffd0.png)](/img/migrated/Gateway-5-aa96ffd0.png)

### Network Environment Preparation
**Step 1:** **Create a New Subnet**
In the **FPT Cloud Console** , create a new **subnet** according to your network requirements, which will allow you to assign the necessary **IP addresses** to the network interfaces of pfSense. 
[![Alt text](/img/migrated/Gateway-6-cf98cf61.png)](/img/migrated/Gateway-6-cf98cf61.png) [![Alt text](/img/migrated/Gateway-7-d413d86c.png)](/img/migrated/Gateway-7-d413d86c.png)
**Step 2:** **Create a Security Group**
Define **security rules** for your environment and create appropriate **security groups** to control communication and network traffic between pfSense virtual machines. 
[![Alt text](/img/migrated/Gateway-8-2c508ffb.png)](/img/migrated/Gateway-8-2c508ffb.png) [![Alt text](/img/migrated/Gateway-9-17ab1b36.png)](/img/migrated/Gateway-9-17ab1b36.png)

### Creating a pfSense Virtual Machine
**Step 1:** **Compute Engine**
Go to the **Compute** menu in the FPT Cloud console and click **"Create Instance"**. 
[![Alt text](/img/migrated/Gateway-10-cf1a7517.png)](/img/migrated/Gateway-10-cf1a7517.png)
**Step 2:** **Basic Information Settings**
Set up an instance name (e.g., `pfsense-master` or `pfsense-slave`) and select the **pfSense ISO** you uploaded earlier under the **ISO image** option. 
[![Alt text](/img/migrated/Gateway-11-0e9c7479.png)](/img/migrated/Gateway-11-0e9c7479.png) [![Alt text](/img/migrated/Gateway-12-cf0e56bf.png)](/img/migrated/Gateway-12-cf0e56bf.png) [![Alt text](/img/migrated/Gateway-13-e79938e2.png)](/img/migrated/Gateway-13-e79938e2.png)
**Step 3:** **Resource and Network Configuration**
Select the appropriate **resource size (CPU/RAM)** for your environment and connect the necessary networks. 
[![Alt text](/img/migrated/Gateway-14-b72cf14a.png)](/img/migrated/Gateway-14-b72cf14a.png) [![Alt text](/img/migrated/Gateway-15-97f134de.png)](/img/migrated/Gateway-15-97f134de.png)
**Step 4:** **Attach a Security Group**
Attach the previously created **security group** and **create the virtual machine**. 
[![Alt text](/img/migrated/Gateway-16-e6cfe33e.png)](/img/migrated/Gateway-16-e6cfe33e.png) [![Alt text](/img/migrated/Gateway-17-2ff59be5.png)](/img/migrated/Gateway-17-2ff59be5.png)

### HA (High Availability) Requirements
**Minimum Requirements for High Availability (HA) Implementation:**
  * At least **three IPs per subnet** on the pfSense network interface 
    * One for the **master**
    * One for the **slave**
    * One **virtual IP** for external communication 
  * **Layer 2 devices** must support **multicast**
  * The **upstream / ISP / router** must have access to the **virtual IP** used by **CARP**

### Configuring the pfSense Interface
[![Alt text](/img/migrated/Gateway-18-f3d63a40.png)](/img/migrated/Gateway-18-f3d63a40.png)

#### New Network: Adding a Card
  1. Select **"Assignment"** from the **Interface** menu and click **"Add"** to add a new interface. 
  2. Double-click the **OPT1** interface and enter the required information. 
  3. After setting, click **"Save"** , then **"Apply Changes"**. 

#### Firewall: Creating Rules
  1. Select **"Rules"** from the **Firewall** menu and switch to the **"Sync"** tab. 
  2. Click **"Add"** to create a new rule and enter the required information. 
  3. Once the configuration is complete, click **"Save and Apply Changes"**. 
  4. Repeat the same configuration on both **pfSense servers**. 

### Configuring CARP (High Availability Protocol)
#### Configuring CARP on the Master
  * Select **"High Availability Synchronization"** from the **System** menu and enter the required information.
  * The username and password for the remote system specify the credentials of a high-privileged user on the pfSense slave virtual machine

[![Alt text](/img/migrated/Gateway-19-9a29037e.png)](/img/migrated/Gateway-19-9a29037e.png)

#### Configuring CARP on the Slave
  * Similarly, select **"High Availability Synchronization"** from the **System** menu and enter the required information.
  * The settings will be different from those of the master, so please follow the instructions to set them appropriately.

[![Alt text](/img/migrated/Gateway-20-db71fe38.png)](/img/migrated/Gateway-20-db71fe38.png)
