---
id: "connect-fci-aws-transitgw"
title: "Connect FCI to AWS via Transit Gateway"
description: "**This guide explains how to connect VPNaaS between the AWS and OPS platforms on the Unify portal.**"
sidebar_label: "Connect FCI to AWS via Transit Gateway"
sidebar_position: "20"
---

# Connect FCI to AWS via Transit Gateway

**This guide explains how to connect VPNaaS between the AWS and OPS platforms on the Unify portal.**
  * [I. Configure VPN Site-to-Site on FCI Cloud](../vpn-site-to-site/index.md)
  * [II. Configure VPN Site-to-Site on AWS](../vpn-site-to-site/index.md)
  * [III. Update VPN Site-to-Site configuration on FCI Cloud with the new AWS VPN IP](../vpn-site-to-site/index.md)

In this example, we will create a VPN Site-to-Site connection using the parameters shown in the topology below:
[![file](/img/migrated/image-1744187555434-7059bf1d.png)](/img/migrated/image-1744187555434-7059bf1d.png)

## Configure VPN Site-to-Site on FCI Cloud
**Step 1. Create Customer Gateways**

1.1 Create a Customer Gateway as follows:
[![](/img/migrated/photo_1_2025-07-09_17-36-42-336a5990.jpg)](/img/migrated/photo_1_2025-07-09_17-36-42-336a5990.jpg)

1.2 Enter the following information:
[![](/img/migrated/photo_2_2025-07-09_17-36-42-7a7fc088.jpg)](/img/migrated/photo_2_2025-07-09_17-36-42-7a7fc088.jpg)

1.3 Result:
[![](/img/migrated/photo_3_2025-07-09_17-36-42-cc4e0bfd.jpg)](/img/migrated/photo_3_2025-07-09_17-36-42-cc4e0bfd.jpg)
Note: because the AWS VPN has not been created yet, a placeholder IP is used here. At the end of this guide, you will update this IP in Section 1.1.

**Step 2. Create a VPN connection**
The VPN Connection parameters consist of three main sections:
  * General information (general connection details)
  * Remote VPN Information (encryption settings and customer-side information)
  * Dead Peer Detection (number of automatic retries when a connectivity issue occurs)

**Section 1: General information**
[![](/img/migrated/photo_4_2025-07-09_17-36-42-7456c972.jpg)](/img/migrated/photo_4_2025-07-09_17-36-42-7456c972.jpg)

**Section 2: Remote VPN information** [![](/img/migrated/photo_5_2025-07-09_17-36-42-e0dc4e56.jpg)](/img/migrated/photo_5_2025-07-09_17-36-42-e0dc4e56.jpg)
When you select Providers "AWS", the system automatically fills in the IKE and IPSec settings as follows:

**For IKE:**
  * Encryption algorithm: aes-256
  * Authorization algorithm: sha256
  * IKE version: ikev2
  * Lifetime units: seconds
  * Lifetime value: 28800
  * DH Group: GROUP_14
  * Phase 1 negotiation mode: main

**For IPSec:**
  * Encapsulation mode: tunnel
  * Encryption algorithm: aes-256
  * Authorization algorithm: sha256
  * Lifetime units: seconds
  * Lifetime value: 3600
  * Perfect forward secrecy (PFS): GROUP_14
  * Transform protocol: esp

**Section 3: Remote VPN information** [![](/img/migrated/Screenshot-2025-08-18-110311-4-6969ef54.png)](/img/migrated/Screenshot-2025-08-18-110311-4-6969ef54.png)
Enter the Delay and max failure values, then select **Create VPN Connection**.
After the HAN VPN is initialized, the VPN Connection linking the two LAN network ranges will be ONLINE and the VMs will be able to communicate with each other using their LAN IPs.

## Configure VPN Site-to-Site on AWS
**Step 1.** Create a **Customer Gateway**.
A **Customer Gateway** is a resource in AWS that represents the **gateway** device at the on-premises network.
To create a Customer Gateway:
  1. Go to: <https://console.aws.amazon.com/vpc/>
  2. Select **Customer gateways > Create customer gateway**.

Enter the required fields. For IP address, use the **Local IP public** of the FCI VPN Gateway.
[![file](/img/migrated/image-1744188410276-6a0f1b1a.png)](/img/migrated/image-1744188410276-6a0f1b1a.png)
  3. Select **Create Customer gateway**.

Details of the created **Customer gateway**:
[![file](/img/migrated/image-1744188423009-f32f6ae2.png)](/img/migrated/image-1744188423009-f32f6ae2.png)

**Step 2. Create a Transit Gateway.**
To create a Transit Gateway:
  1. On the navigation pane, select **Transit gateway > Create transit gateway**. [![file](/img/migrated/image-1744188442634-cdb7a1f9.png)](/img/migrated/image-1744188442634-cdb7a1f9.png)
  2. Result after creation. [![file](/img/migrated/image-1744188583244-7114d4b9.png)](/img/migrated/image-1744188583244-7114d4b9.png)
  3. Attach the **Transit Gateway** just created to the **VPC**. [![file](/img/migrated/image-1744188600627-a65a4744.png)](/img/migrated/image-1744188600627-a65a4744.png)

**Step 3. Create a VPN connection.**

3.1 Create a **VPN connection** using the **Customer Gateway (Section I.4.3)** and the **Transit Gateway** created above.
To create a VPN connection:
  1. On the navigation pane, select **Site-to-Site VPN connections**.
  2. Select **Create VPN connection**.
  3. Set **Target gateway type** to **Transit Gateway**.
  4. Select the **Transit Gateway** and the Customer Gateway created earlier.
  5. For Routing option, select **Static**. For static IP prefixes, enter the FCI subnet range (172.16.8.0/24).
  6. Enter **Local IPv4 network**: enter the FCI subnet range.
  7. Enter **Remote IPv4 network**: enter the AWS subnet range.
  8. Edit the parameters for **tunnel1** and **tunnel2**.
  9. Select **Create VPN connection**.

[![file](/img/migrated/image-1744188630355-2f54788d.png)](/img/migrated/image-1744188630355-2f54788d.png)
[![file](/img/migrated/image-1744188646389-8d296d6c.png)](/img/migrated/image-1744188646389-8d296d6c.png)

3.2 Attach the **Transit Gateway** to the **VPN connection**. [![file](/img/migrated/image-1744188658544-061bd822.png)](/img/migrated/image-1744188658544-061bd822.png)
**Result:** [![file](/img/migrated/image-1744188666706-b3f50841.png)](/img/migrated/image-1744188666706-b3f50841.png)

**Step 4. Configure routing.**
Configure routing to direct traffic from the VPC (AWS) to the Customer Gateway (FCI) through the **Transit Gateway**.
Add routes from the VPN connection to the route table (FCI subnet: 172.16.8.0/16). [![file](/img/migrated/image-1744188682034-612ad31a.png)](/img/migrated/image-1744188682034-612ad31a.png)

**Step 5. Update Security groups.**
Update **Security groups** to allow **SSH**, **RDP**, and **ICMP** access.
To add a rule to a **Security group**:
  1. On the navigation pane, select **Security groups**.
  2. Select the security group for instances in the VPC you want to allow access to.
  3. On the **Inbound rules** tab, select **Edit inbound rules**. Allow the FCI subnet range with All Traffic.
  4. Add rules to allow inbound SSH, RDP, and ICMP, then select **Save rules**. [![file](/img/migrated/image-1744188698660-3295619c.png)](/img/migrated/image-1744188698660-3295619c.png) The VPN Connection is successfully initialized with status **'Available'**. Next, verify that the **Route table** is correctly configured.

**Step 6. Download the configuration file.**
After creating the VPN connection, you can download a **configuration file** to use for configuration on the FCI VPC.
To download the **configuration file**:
  1. Go to the VPN connection page.
  2. Select the connection just created > select **Download configuration**.
  3. Select Vendor: **pfSense**, IKE version: **IKEv1 (or IKEv2)** > select **Download**. [![file](/img/migrated/image-1744188724857-b4bdaa67.png)](/img/migrated/image-1744188724857-b4bdaa67.png) Use this configuration file to create the VPN Site-to-Site on the FCI side.

## Update VPN Site-to-Site configuration on FCI Cloud with the new AWS VPN IP
  1. Use the Tunnel 1 IP to update the configuration on the FCI side: [![file](/img/migrated/image-1744188753554-65ec6a49.png)](/img/migrated/image-1744188753554-65ec6a49.png)
  2. Edit the Customer Gateway with the new AWS IP just created. [![file](/img/migrated/image-1744188812981-69678af0.png)](/img/migrated/image-1744188812981-69678af0.png)
Enter the AWS tunnel IP in the remote IP public field.
[![file](/img/migrated/image-1744188828118-52186cfb.png)](/img/migrated/image-1744188828118-52186cfb.png)

  * You have now completed the VPN Site-to-Site configuration between AWS and FCI Cloud.
  * After a successful connection, the **Operation status** of the VPN connections on the FCI Cloud side will be **Online** and on the AWS side, tunnel 1 will show **UP**.
  * **Check the connection status on AWS:** Go to **VPN connections** > select the **VPN connection** > select **Tunnel details**. If the connection is successful, the tunnel **status** will be **UP**.
  * **Verify the result:**

Start VMs in each VPC using the network ranges configured in the VPN Site-to-Site, then ping the VMs from each side.

**Ping result from FCI to AWS**

**Ping result from AWS to FCI Cloud**
