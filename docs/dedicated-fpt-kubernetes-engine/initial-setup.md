---
id: "initial-setup"
title: "Initial Setup"
description: "If this is the first time you use the **FPT Kubernetes Engine** service, first, double-check that you have completed the"
sidebar_label: "Initial Setup"
sidebar_position: 2
---

# Initial Setup

If this is the first time you use the **FPT Kubernetes Engine** service, first, double-check that you have completed the following steps:
### 1. Create a FPT Cloud account and log in to the FPT Cloud Portal.
After that is finished, you can proceed to use the **FPT Kubernetes Engine** service on FPT Cloud.
To register for an FPT Cloud account, navigate to the [FPT Cloud Portal](https://console.fptcloud.com).
Then, click on the **Sign Up** button at the bottom of the page and follow the instructions to create an account. Customer support will contact you shortly to verify your information to create your account.
To log in to the FPT Cloud Portal, navigate to the [FPT Cloud Portal](https://console.fptcloud.com).
Then, enter your email and password and click on the **Sign In** button. After that, choose the correct Tenant, Region, and VPC.
If you encounter any errors during the process, please do not hesitate to contact our Support department for immediate assistance.
### 2. Create Subnets with a Static Pool
The Kubernetes Cluster only operates with **Subnets** that have the **Static Pool** option enabled, so you need to create a Subnet with a Static Pool following these instructions:
**Step 1** : In the **Networking** section, select the **Subnets** tab.
[![](/img/migrated/1-d9b2ba73.png)](/img/migrated/1-d9b2ba73.png)
**Step 2** : Choose **Create** on the **Subnets Management** page.
[![](/img/migrated/2-3cc44b36.png)](/img/migrated/2-3cc44b36.png)
**Step 3** : Enter the following information:
  * **Name** : Enter a memorable name for the Subnet.
  * **CIDR** : Enter a valid CIDR.
  * Check the **Advanced settings** option.
  * **Static IP Pool** : Enter a valid IP range derived from the CIDR.

Click **Save** to create a new Subnet. The system will process the request and notify you of the results.
[![](/img/migrated/3-4d84255a.png)](/img/migrated/3-4d84255a.png)
### 3. Request activation of the FKE service and allocate resource quotas
If this is your first time using FPT Cloud, some services may not be enabled for your account. Contact our support team and provide information about your desired configuration. We will allocate the necessary resources, such as RAM + CPU, Storage, Public IP, etc., for you to use the FKE service.