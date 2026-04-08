---
id: "create-floating-ip"
title: "Create floating IP"
description: "Steps to create and allocate a floating IP for Database Engine."
sidebar_label: "Create floating IP"
sidebar_position: 4
draft: true
---

# Create floating IP

A **Floating IP** is used to retain a **Public IP** and route internet traffic to a virtual machine. To make a virtual machine accessible from the internet, you need to attach a floating IP to it. If you no longer need it or want to change the endpoint, you can redirect the floating IP to another virtual machine in the same VPC with a few simple steps.

## Case 1: Create a floating IP from the Database cluster

1. Menu > Database Platform > **Relational Database / Non-Relational Database / Search Engines / Data Streaming / Time Series Db** > select a Cluster ID with **Running** status.
[![](/img/migrated/b1-cua-6.2-6e953999.png)](/img/migrated/b1-cua-6.2-6e953999.png)
2. The Database Detail screen appears. Under the **Overview** tab, select Instances List and click on the **Name** with role **True**.
[![](/img/migrated/b2-cua-6.2-ecd9ba9c.png)](/img/migrated/b2-cua-6.2-ecd9ba9c.png)
3. A screen linking from **Node Database** to **Instance Management** appears. Under **Floating IP**, select **Allocate**.
[![](/img/migrated/b3cua-6.2-0c5d58f3.png)](/img/migrated/b3cua-6.2-0c5d58f3.png)
4. The **Allocate Floating IP** popup appears. Enter the required information:
   - **IP Address:** Select an appropriate address from the available list. If no pool is available, contact support.
   - **Instance:** Pre-filled with the DB cluster name + Cluster ID + node name.
   - **IP Port:** Enter the DB cluster port assigned in Security.
   - **Instance Port:** Enter the same port as IP Port or a more memorable alternative.

[![](/img/migrated/b4-cua-6.2-0745ca34.png)](/img/migrated/b4-cua-6.2-0745ca34.png)
5. After allocating the floating IP, the **Floating IP** address information is displayed.
[![](/img/migrated/B5-cua-6.2-92407761.png)](/img/migrated/B5-cua-6.2-92407761.png)
6. Verify the newly allocated IP address: **Menu** > **Networking** > **Floating IPs** > check that the public IP has **Active** status.
[![](/img/migrated/b6_1-cua-6.2-d37cc8dc.png)](/img/migrated/b6_1-cua-6.2-d37cc8dc.png)

   If you no longer need the Public IP, you can disconnect it.

[![](/img/migrated/b6_2-cua-6.2-72332857.png)](/img/migrated/b6_2-cua-6.2-72332857.png)

The **Disconnect floating IP** popup appears. Confirm the information and click **Disconnect floating IP**.
[![](/img/migrated/b6_3-cua-6.2-f1272475.png)](/img/migrated/b6_3-cua-6.2-f1272475.png)

## Case 2: Create a floating IP from Networking (without the Database cluster)

Use this method to create a new floating IP when you have disconnected a previously created Public IP, or when the Allocate option does not appear in the Floating IP section after clicking the instance from the Database cluster.

1. Menu > **Networking** > **Floating IPs** > click **Allocate IP address**.
[![](/img/migrated/TH2_B1-_6.2-23686fb5.png)](/img/migrated/TH2_B1-_6.2-23686fb5.png)
2. The **Allocate Floating IP** popup appears. Enter the required information:
   - **IP Address:** Select an appropriate address from the available list.
   - **Instance:** Select the appropriate Database cluster name from the list.
   - **IP Port:** Enter the DB cluster port assigned in Security.
   - **Instance Port:** Enter the same port as IP Port or a more memorable alternative.

[![](/img/migrated/TH2_B2_6.2-f5b99a21.png)](/img/migrated/TH2_B2_6.2-f5b99a21.png)
3. Verify the newly allocated IP address: **Menu** > **Networking** > **Floating IPs** > check that the public IP has **Active** status.
[![](/img/migrated/Th2_b3_6.2-3a398f5d.png)](/img/migrated/Th2_b3_6.2-3a398f5d.png)
4. After allocation, the floating IP address information is displayed on the Database cluster.
[![](/img/migrated/TH2_B4_6.2-87022800.png)](/img/migrated/TH2_B4_6.2-87022800.png)

Once you have the floating IP address, use it to connect to the Database.
