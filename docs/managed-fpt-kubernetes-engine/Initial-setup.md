---
id: "Initial-setup"
title: "Initial Setup"
description: "Steps to complete before using FPT Kubernetes Engine for the first time."
sidebar_label: "Initial Setup"
sidebar_position: "2"
---

# Initial Setup

If this is your first time using **FPT Kubernetes Engine**, check and complete the following steps first:

### 1. Create an FPT Cloud account and log in to FPT Portal
To register for an FPT Cloud account, visit the homepage at <https://fptcloud.com/>.
Select **Sign Up** and enter the required information as instructed. Our support team will contact you to confirm your details and create your account.
To log in to FPT Portal, go to <https://console.fptcloud.com/>.
After logging in with the provided credentials, select the correct Tenant, Region, and VPC.
If you are unsure about this information or the system returns an error after 3 attempts, contact our Support team immediately.

### 2. Create Subnets with Static Pool
Kubernetes clusters only work with Subnets that have the Static Pool option enabled. Create a Subnet with Static Pool as follows:

**Step 1:** Under **Network**, select the **Subnets** tab.
[![Subnet K8s](/img/migrated/Screenshot-2025-01-10-at-10.35.34-7d3142bd.png)](/img/migrated/Screenshot-2025-01-10-at-10.35.34-7d3142bd.png)

**Step 2:** Click **Create Subnet** on the **Subnets Management** page.
[![Subnet K8s](/img/migrated/Screenshot-2025-01-10-at-10.39.58-b09ab0a1.png)](/img/migrated/Screenshot-2025-01-10-at-10.39.58-b09ab0a1.png)

**Step 3:** Enter the following information:
  * **Name:** Enter a memorable name for the Subnet.
  * **CIDR:** Enter a valid CIDR.
  * Check the **Advanced settings** option.
  * **Static IP Pool:** Enter a valid IP range taken from the CIDR.

Click **Save** to create the new Subnet. The system will process and display the result.
[![Userguide K8s 3](/img/migrated/Initial-setup-3-9bccff9a.png)](/img/migrated/Initial-setup-3-9bccff9a.png)

### 3. Request FKE service activation and resource quota
If this is your first time using FPT Cloud, some services may not yet be enabled for your account. Contact our support team and provide your desired configuration details. We will provision the necessary resources such as RAM, CPU, Storage, Public IP, etc. for you to use the FKE service.
