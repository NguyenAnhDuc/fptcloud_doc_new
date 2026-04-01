---
id: "classic-create-load-balancer"
title: "Create a Classic Load Balancer"
description: "How to create a Classic Load Balancer on FPT Cloud."
sidebar_label: "Create a Classic Load Balancer"
sidebar_position: 23
---

# Create a Classic Load Balancer

**Step 1:** Go to the **Load Balancer Management** page and click **Create**.

[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-1-1024x-f04d52f1.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-1-1024x-f04d52f1.png)

A dialog appears to guide you through the next steps.

**Step 2:** Configure the Load Balancer:

| Field | Description |
| --- | --- |
| **Name** | Enter a name for the Load Balancer. |
| **Size** | Select a size that fits your needs. FPT Cloud offers four sizes from Basic to Premium. |
| **Public IP** | Assign a Public IP from the VPC. Leave blank for an internal Load Balancer (no internet access). To obtain additional Public IPs, see the Floating IP Management section. |
| **Instances** | Select the virtual machines to load balance. Only instances within the same VPC can be selected. |
| **Rules** | Define how traffic is routed from the Load Balancer to the virtual machines. Currently one rule per Load Balancer is supported. |
| **Certificate** | If **HTTPS** is selected, a certificate is required. Select an existing certificate or add a new one. |
| **Settings** | Additional Load Balancer settings (FPT Cloud provides recommended defaults). Click **Edit Setting** to change: **Algorithm** (Round Robin or Least Connections), **Sticky Session** (on/off), **Health check** (HTTP, TCP, or PING). |

[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-2-7408982a.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-2-7408982a.png)

**Step 3:** Click **Create** to create the Load Balancer. The system validates resources, starts the creation process, and reports the status.

After successful creation, the new Load Balancer and its operating status appear in the management dashboard.

[![](/img/migrated/Userguide-FPT-Load-Balancer-2022-3-1024x-5bd1ea96.png)](/img/migrated/Userguide-FPT-Load-Balancer-2022-3-1024x-5bd1ea96.png)
