---
id: "Initial-setup"
title: "Initial Setup"
sidebar_label: "Initial Setup"
sidebar_position: 1
---

Initial Setup


If this is your first time using MANAGED GPU CLUSTER, please check and complete the following tasks:

### 1\. Create an FPT Cloud account and log in to FPT Portal

To register for an FPT Cloud account, visit the homepage [here](<https://fptcloud.com/>).

Then select **Sign Up** and enter the required information as instructed by the system. Our support team will contact you shortly to confirm the information and create your account.

To log in to FPT Portal, visit [console.fptcloud.com](<https://console.fptcloud.com/>).

After logging in with the provided username and password, select the correct Tenant, Region, and VPC.

If you are unsure about the above information or the system returns an error after 3 attempts, please contact our Support team immediately for assistance.


:::warning
The account must have two-factor authentication (MFA) enabled to use the AI Factory product.
:::


### 2\. Create Subnets for Bare Metal GPU Servers used in Managed GPU Cluster

To create a Managed GPU Cluster, you first need a subnet range on Bare Metal GPU Servers. These machines will serve as Worker nodes in the K8s Cluster. IPv4 addresses for the Worker Bare Metal GPUs will be dynamically allocated from this subnet.

**Step 1:** Navigate to [AI Infrastructure] > select [Subnets] > select [Create Subnet]

![](images/Initial-setup/img-001.png)

**Step 2**: Enter the desired name for the subnet

![](images/Initial-setup/img-002.png)

**Step 3:** Enter the name for the Network ACL corresponding to the subnet

**Step 4**: Click [Create Subnet] to complete the subnet creation process for Bare Metal GPU


:::warning
The Network ACL created by default for the subnet will block all inbound traffic and allow all outbound traffic. To use a Load Balancer for the Managed GPU Cluster, you need to open the appropriate rules for the Load Balancer subnet range to allow connections.
:::


### 3\. Create Subnets for Load Balancer

Managed GPU Cluster only works with Subnets that have the Static Pool option enabled, so you need to create a Subnet with a Static Pool as follows:

**Step 1:** In the **Network** section, select the **Subnets** tab

![Subnet K8s](images/Initial-setup/img-003.png)

**Step 2**: Select **Create Subnet** on the **Subnets Management** page

![Subnet K8s](images/Initial-setup/img-004.png) **Step 3:** Enter the following information:

  * **Name:** Enter a memorable name for the Subnet
  * **CIDR:** Enter a valid **CIDR**
  * Check the **Advanced settings** option
  * **Static IP Pool:** Enter a valid IP range taken from the CIDR.


Select **Save** to create the new Subnet. The system will process and notify you of the result.

![Userguide K8s 3](images/Initial-setup/img-005.png)

### 3\. Request activation of Managed GPU Cluster service and resource quota allocation

If this is your first time using FPT Cloud, some services may not yet be enabled for your account. Please contact our support team and provide information about the service and desired configuration. We will allocate the necessary resources such as RAM, CPU, Storage, Public IP, etc. so you can start using the Managed GPU Cluster service.

Contact our support team via:

**Hotline**: 1900638399

**Email**: support@fptcloud.com
