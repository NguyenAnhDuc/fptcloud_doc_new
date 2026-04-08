---
id: "connect-fci-aws-virtualgw"
title: "Connect FCI to AWS via Virtual Private Gateway"
description: "This guide explains how to connect VPNaaS between the AWS and OPS platforms on the Unify portal."
sidebar_label: "Connect FCI to AWS via Virtual Private Gateway"
sidebar_position: "21"
---

# Connect FCI to AWS via Virtual Private Gateway

This guide explains how to connect VPNaaS between the AWS and OPS platforms on the Unify portal.
  * [I. Configure VPN Site-to-Site on AWS](/docs/en/fpt-network/vpn-site-to-site/)/
  * [II. Configure VPN Site-to-Site on FCI Cloud](/docs/en/fpt-network/vpn-site-to-site/)/

In this example, we will create a VPN Site-to-Site connection using the parameters shown in the topology below: [![file](/img/migrated/image-1744187648981-6cf9e3e4.png)](/img/migrated/image-1744187648981-6cf9e3e4.png)

## Configure VPN Site-to-Site on AWS
**Step 1.** Create a **Customer Gateway**.
A **Customer Gateway** is a resource in AWS that represents the **gateway** device at the on-premises network.
To create a Customer Gateway:

a. Go to: <https://console.aws.amazon.com/vpc/>
b. Select **Customer gateways > Create customer gateway**.
Enter the required fields. For IP address, use the **Local IP public** of the FCI VPN Gateway.
[![file](/img/migrated/image-1744187677872-0dcc0585.png)](/img/migrated/image-1744187677872-0dcc0585.png)

c. Select **Create customer gateway**.
Details of the created **Customer gateway**:
[![file](/img/migrated/image-1744187689933-55fef092.png)](/img/migrated/image-1744187689933-55fef092.png)

**Step 2. Create a Virtual Private Gateway.**
To create a **Virtual Private Gateway**:

a. On the navigation pane, select **Virtual private gateways > Create virtual private gateway**. [![file](/img/migrated/image-1744187701228-c2839df5.png)](/img/migrated/image-1744187701228-c2839df5.png)

b. Select **Create virtual private gateway**.
Result after creation:
[![file](/img/migrated/image-1744187719077-66613e9b.png)](/img/migrated/image-1744187719077-66613e9b.png)

c. Attach the **Virtual private gateway** to the **VPC**. [![file](/img/migrated/image-1744187728890-441a90e2.png)](/img/migrated/image-1744187728890-441a90e2.png)

**Step 3. Configure routing.**
Configure routing to direct traffic from the VPC (AWS) to the Customer Gateway (FCI) through the **Virtual Private Gateway**.
Enable the **route propagation** feature on the route table to automatically add routes from the VPN connection to the route table.

a. On the navigation pane, select **Route tables**.
b. Select the **Route table** associated with the subnet.
c. On the **Route propagation** tab, select **Edit route propagation**.
d. Select the **Virtual private gateway** created in the previous step > **Enable Propagation**, then select Save.
[![file](/img/migrated/image-1744187790410-351eed16.png)](/img/migrated/image-1744187790410-351eed16.png) [![file](/img/migrated/image-1744187804388-b442a51d.png)](/img/migrated/image-1744187804388-b442a51d.png)

**Step 4. Update Security groups.**
Update **Security groups** to allow **SSH**, **RDP**, and **ICMP** access.
To add a rule to a **Security group**:

a. On the navigation pane, select **Security groups**.
b. Select the security group for instances in the VPC you want to allow access to.
c. On the **Inbound rules** tab, select **Edit inbound rules**.
d. Add rules to allow inbound SSH, RDP, and ICMP, then select **Save rules**.
[![file](/img/migrated/image-1744187818170-08225615.png)](/img/migrated/image-1744187818170-08225615.png)

**Step 5. Create a VPN connection.**
Create a **VPN connection** using the **Customer Gateway** combined with the **Virtual Private Gateway** created earlier.
To create a VPN connection:

a. On the navigation pane, select **Site-to-Site VPN connections**.
b. Select **Create VPN connection**.
c. Set **Target gateway type** to **Virtual private gateway**.
d. Select the **VGW** and **CGW** created earlier.
e. For Routing option, select **Static**. For static IP prefixes, enter the FCI subnet range.
g. Enter **Local IPv4 network**: enter the FCI subnet range.
h. Enter **Remote IPv4 network**: enter the AWS subnet range, then select tunnel 1 options.
[![](/img/migrated/6219884231644005855-b9c9d934.jpg)](/img/migrated/6219884231644005855-b9c9d934.jpg)

j. Select **edit tunnel options** to modify the tunnel parameters.
[![](/img/migrated/6219884231644005851-281ed669.jpg)](/img/migrated/6219884231644005851-281ed669.jpg)

k. Edit the parameters for **tunnel1** and **tunnel2**.
**Note:** In this example, you do not need to enter values — AWS will automatically use the defaults of 28800 and 3600. (These values will be set on the FCI side to optimize the connection in later steps.)
[![](/img/migrated/6219884231644005852-16c34358.jpg)](/img/migrated/6219884231644005852-16c34358.jpg)

For the DPD timeout action, set it to **restart** mode (in this mode, when DPD times out, AWS will automatically restart the connection).
[![file](/img/migrated/image-1757057205670-270e8f32.png)](/img/migrated/image-1757057205670-270e8f32.png)

l. Select **Create VPN connection**.
[![file](/img/migrated/image-1744187835664-b446a286.png)](/img/migrated/image-1744187835664-b446a286.png)
The VPN Connection is successfully initialized with status **'Available'**. [![file](/img/migrated/image-1744187854348-50a964f9.png)](/img/migrated/image-1744187854348-50a964f9.png)
Next, verify that the **Route table** is correctly configured.
[![file](/img/migrated/image-1744187883700-02a2bf0b.png)](/img/migrated/image-1744187883700-02a2bf0b.png)

**Step 6. Download the configuration file.**
After creating the VPN connection, you can download a **configuration file** to use for configuration on the FCI VPC.
To download the **configuration file**:

a. Go to the VPN connection page.
b. Select the connection just created > select **Download configuration**.
c. Select Vendor: **pfSense**, IKE version: **IKEv1** > select **Download**.
[![file](/img/migrated/image-1744187893211-6e8c1faf.png)](/img/migrated/image-1744187893211-6e8c1faf.png)
Use this configuration file to create the VPN Site-to-Site on the FCI side. [![file](/img/migrated/image-1744187903307-dcef580b.png)](/img/migrated/image-1744187903307-dcef580b.png)

## Configure VPN Site-to-Site on FCI Cloud
**Step 1. Create Customer Gateways.**
Create a Customer Gateway with the following information:
[![](/img/migrated/photo_1_2025-07-09_17-36-59-cc7cebe8.jpg)](/img/migrated/photo_1_2025-07-09_17-36-59-cc7cebe8.jpg)

**Step 2. Create a VPN connection.**
The VPN Connection parameters consist of three main sections:
  * General information (general connection details)
  * Remote VPN Information (encryption settings and customer-side information)
  * Dead Peer Detection (number of automatic retries when a connectivity issue occurs)

**Section 1: General information**
[![](/img/migrated/photo_2_2025-07-09_17-36-59-3833c2bc.jpg)](/img/migrated/photo_2_2025-07-09_17-36-59-3833c2bc.jpg)

**Section 2: Remote VPN information**
[![](/img/migrated/photo_3_2025-07-09_17-36-59-ee648287.jpg)](/img/migrated/photo_3_2025-07-09_17-36-59-ee648287.jpg)
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

**Section 3: Remote VPN information**
[![](/img/migrated/Screenshot-2025-08-18-110311-2-ee1b7efc.png)](/img/migrated/Screenshot-2025-08-18-110311-2-ee1b7efc.png)
Enter the Delay and max failure values, then select **Create VPN Connection**.
After a successful connection, the **Operation status** of the VPN connections on the FCI Cloud side will be **Online**.
[![](/img/migrated/photo_5_2025-07-09_17-36-59-a6d918ea.jpg)](/img/migrated/photo_5_2025-07-09_17-36-59-a6d918ea.jpg)

  * **Check the connection status on AWS:** Go to **VPN connections** > select the **VPN connection** > select **Tunnel details**. If the connection is successful, the tunnel **status** will be **UP**. [![file](/img/migrated/image-1744188021396-a2fcb953.png)](/img/migrated/image-1744188021396-a2fcb953.png)
  * **Verify the result.**

Start VMs in each VPC using the network ranges configured in the VPN Site-to-Site, then ping the VMs from each side.

**Ping result from FCI to AWS**
[![file](/img/migrated/image-1744188035465-8bf2d7b0.png)](/img/migrated/image-1744188035465-8bf2d7b0.png)

**Ping result from AWS to FCI Cloud**
[![file](/img/migrated/image-1744188059608-16df2ffb.png)](/img/migrated/image-1744188059608-16df2ffb.png)
