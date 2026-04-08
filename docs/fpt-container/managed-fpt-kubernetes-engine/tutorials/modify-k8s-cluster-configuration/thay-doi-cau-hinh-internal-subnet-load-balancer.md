---
id: "thay-doi-cau-hinh-internal-subnet-load-balancer"
title: "Change Internal Subnet Load Balancer Configuration"
description: "How to change the internal subnet load balancer CIDR range directly from the Unify portal."
sidebar_label: "Change Internal Subnet Load Balancer Configuration"
sidebar_position: "13"
---

# Change Internal Subnet Load Balancer Configuration

FPT Cloud lets you change the internal subnet load balancer (CIDR) range directly from the Unify portal. Follow the steps below:

**Step 1:** Select the cluster you want to change the Internal Subnet Load Balancer for and click on the cluster name.
[![](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)

**Step 2:** Select the **Advanced** tab and click the **Config Internal Subnet Load Balancer** button.
[![](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)

**Step 3:** Enter a valid CIDR range and click **Confirm**.
[![](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)](/img/migrated/Screenshot-2025-04-08-140012-9692da06.png)

The Internal Subnet Load Balancer update process takes a few minutes. The cluster status changes to **Processing** during this time. The cluster continues to operate normally while the new Internal Subnet Load Balancer (CIDR) is being applied.
