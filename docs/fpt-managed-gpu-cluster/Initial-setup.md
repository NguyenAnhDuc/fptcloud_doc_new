---
id: "Initial-setup"
title: "Initial setup"
description: "If this is your first time using Managed GPU Cluster, please check and complete the following steps first."
sidebar_label: "Initial setup"
sidebar_position: 2
---

# Initial setup

If this is your first time using Managed GPU Cluster, please check and complete the following steps first.

### 1. Create an FPT Cloud account and log in to the FPT Portal

To register for an FPT Cloud account, visit the homepage [here](https://fptcloud.com/).

Then select **Sign Up** and fill in the information as instructed by the system. Our support team will contact you shortly to confirm the details and create your account.

To log in to the FPT Portal, go to [console.fptcloud.com](https://console.fptcloud.com/).

After logging in with the provided credentials, select the correct Tenant, Region, and VPC.

If you are unsure about any of this information, or the system returns an error after 3 attempts, please contact our Support team immediately for assistance.

**Note**: Your account must have two-factor authentication (MFA) enabled to use the AI Factory product.

### 2. Create subnets for Bare Metal GPU Servers used in Managed GPU Cluster

To create a Managed GPU Cluster, you first need a subnet range on the Bare Metal GPU Servers — these machines will act as Worker nodes in the K8s cluster. IPv4 addresses for the Bare Metal GPU Workers will be dynamically assigned from this subnet.

**Step 1:** Navigate to [AI Infrastructure] > select [Subnets] > select [Create Subnet].

[![](/img/migrated/1-1-4f1767cc.png)](/img/migrated/1-1-4f1767cc.png)

**Step 2:** Enter the desired name for the subnet.

[![](/img/migrated/2-1-e7e458f5.png)](/img/migrated/2-1-e7e458f5.png)

**Step 3:** Enter a name for the Network ACL associated with the subnet.

**Step 4:** Click [Create Subnet] to complete the subnet creation for the Bare Metal GPU.

**Note**: The Network ACL created by default for the subnet will block all inbound traffic and allow all outbound traffic. To use a Load Balancer for the Managed GPU Cluster, you need to add appropriate rules to the Load Balancer subnet range to allow connections.

### 3. Create subnets for the Load Balancer

Managed GPU Cluster only works with subnets that have the Static Pool option enabled, so you need to create a subnet with a Static Pool as follows:

**Step 1:** In the **Network** section, select the **Subnets** tab.

[![Subnet K8s](/img/migrated/Screenshot-2025-01-10-at-10.35.34-7d3142bd.png)](/img/migrated/Screenshot-2025-01-10-at-10.35.34-7d3142bd.png)

**Step 2:** Select **Create Subnet** on the **Subnets Management** page.

[![Subnet K8s](/img/migrated/Screenshot-2025-01-10-at-10.39.58-b09ab0a1.png)](/img/migrated/Screenshot-2025-01-10-at-10.39.58-b09ab0a1.png)

**Step 3:** Enter the following information:

- **Name:** Enter a memorable name for the subnet.
- **CIDR:** Enter a valid CIDR.
- Check the **Advanced settings** option.
- **Static IP Pool:** Enter a valid IP range taken from the CIDR.

Click **Save** to create the new subnet. The system will process the request and display the result.

[![Userguide K8s 3](/img/migrated/Initial-setup-3-9bccff9a.png)](/img/migrated/Initial-setup-3-9bccff9a.png)

### 4. Request activation of the Managed GPU Cluster service and resource quota allocation

If this is your first time using FPT Cloud, some services may not yet be enabled for your account. Please contact our support team and provide the service and configuration details you need. We will allocate the necessary resources such as RAM, CPU, Storage, and Public IP to get you started with the Managed GPU Cluster service.

Contact our support team via:

**Hotline**: 1900638399

**Email**: support@fptcloud.com
