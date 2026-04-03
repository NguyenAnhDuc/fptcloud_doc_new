---
id: "create-vpc-en"
title: "Khởi tạo VPC"
description: "Hướng dẫn khởi tạo VPC mới trên FPT Cloud Portal."
sidebar_label: "Khởi tạo VPC"
sidebar_position: "3"
---

# Create a VPC

To create a new VPC, you need to sign in with the Tenant Owner role.

1. Select **VPCs** → **Create VPC**.

   ![VPC list page with Create VPC button](/img/migrated/image-1714811267317-66868093.png)

2. Enter the following information:
   - **VPC Name**: VPC name, minimum 10 characters, maximum 50 characters, including uppercase letters, numbers, dashes, and underscores. The system automatically converts lowercase to uppercase.
   - **VPC owner**: select the account to be assigned VPC Owner permissions. The system pre-selects the current account as VPC Owner.
   - **Network setting** (optional): configure Subnet information. This can be set up after VPC creation.
     - **Name**: a descriptive Subnet name.
     - **Type**: currently supports 2 types — Routed and Isolated.
     - **Network Address (CIDR)**: enter a valid CIDR.
     - **Gateway IP**: enter a valid Gateway IP address.
     - **Static IP Pool** (optional): enter the IP range to use. If not specified, the system uses all IPs from the CIDR.

   ![Create VPC form](/img/migrated/image-1714811289727-41fbb01b.png)

3. Click **Create VPC**. The system processes the request and notifies you of the result.

   ![VPC created successfully](/img/migrated/image-1714811309818-c434eb33.png)

The new VPC appears on the **VPCs** page.
