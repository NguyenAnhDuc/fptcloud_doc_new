---
id: "Initial-Setup"
title: "Initial Setup"
description: "Initial setup steps before using the FPT Kubernetes Engine service."
sidebar_label: "Initial Setup"
sidebar_position: "2"
---

# Initial Setup

If you are using FPT Kubernetes Engine for the first time, review and complete the following steps before getting started.

## Create an FPT Cloud account and log in to FPT Portal

1. Go to https://fptcloud.com/ and select **Sign Up**.
2. Follow the system instructions to fill in the required information.
3. Contact the support team to verify your information and activate your account.
4. Log in to FPT Portal with the provided account and password.
5. Select the correct Tenant, Region, and VPC.

:::note
If you have any questions about the above information, or if an error occurs after 3 attempts, please contact the support team.
:::

## Create a subnet with a Static Pool

A Kubernetes cluster can only operate on a subnet with the Static Pool option enabled. Follow these steps to create a subnet.

1. In the **Networking** section, select the **Subnets** tab.
[![Userguide K8s 1](/img/migrated/Userguide-K8s-1-1024x520-cf033d8c.png)](/img/migrated/Userguide-K8s-1-1024x520-cf033d8c.png)
2. On the **Subnets Management** page, select **Create**.
[![Userguide K8s 2](/img/migrated/Userguide-K8s-2-1024x202-6de849e4.png)](/img/migrated/Userguide-K8s-2-1024x202-6de849e4.png)
3. Fill in the following information:
   - **Name:** Enter a descriptive name for the subnet.
   - **CIDR:** Enter a valid CIDR.
   - Check **Advanced settings**.
   - **Static IP Pool:** Enter a valid IP range derived from the CIDR.
4. Select **Save** to create the new subnet.
[![Userguide K8s 3](/img/migrated/Userguide-K8s-3-c5aca27b.png)](/img/migrated/Userguide-K8s-3-c5aca27b.png)

## Enable FKE service and request resource quota

If you are new to FPT Cloud, some services may not be enabled on your account. Contact the support team and provide your desired configuration details. FPT Cloud will allocate the necessary resources — RAM, CPU, Storage, Public IP, and others — required to use the FKE service.
