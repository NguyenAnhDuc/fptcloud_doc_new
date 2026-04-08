---
id: "thay-doi-cluster-endponit-access"
title: "Change Cluster Endpoint Access"
description: "How to change the cluster endpoint access mode in Managed FPT Kubernetes Engine."
sidebar_label: "Change Cluster Endpoint Access"
sidebar_position: "11"
---

# Change Cluster Endpoint Access

**To change the Access Mode of a Kubernetes cluster on FPT Cloud, follow the steps below:**

**Notes:**
  * M-FKE only supports switching Access Mode from Public & Private to Private and vice versa.
  * M-FKE does not support switching Access Mode if the Kubernetes cluster is currently in Public mode.

**Step 1:** Select the cluster you want to change the Access Mode for and click the cluster name.
[![](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)

**Step 2:** Under Cluster Endpoint Access, click the **Edit** button.
[![](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)

**Step 3:** Select the desired Access Mode, enter a valid Allow CIDR, and click **Confirm**.
[![](/img/migrated/Screenshot-2025-03-20-152635-8d2271bf.png)](/img/migrated/Screenshot-2025-03-20-152635-8d2271bf.png)

## To update the Allow CIDR:

**Step 1:** Select the cluster you want to update and click the cluster name.
[![](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)

**Step 2:** Under Cluster Endpoint Access, click the **Edit** button.
[![](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)

**Step 3:** Add additional valid CIDR ranges and click **Confirm**.
[![](/img/migrated/Screenshot-2025-03-20-153324-cab3a4aa.png)](/img/migrated/Screenshot-2025-03-20-153324-cab3a4aa.png)

## To remove Allow CIDR:

**Step 1:** Select the cluster you want to update and click the cluster name.
[![](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)](/img/migrated/Screenshot-2025-03-20-151549-d5cf37cb.png)

**Step 2:** Under Cluster Endpoint Access, click the **Edit** button.
[![](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)](/img/migrated/Screenshot-2025-03-20-151934-2-7e9b842b.png)

**Step 3:** Remove all existing CIDRs and click **Confirm**.
[![](/img/migrated/Screenshot-2025-03-20-153755-e5b8d33b.png)](/img/migrated/Screenshot-2025-03-20-153755-e5b8d33b.png)
[![](/img/migrated/Screenshot-2025-03-20-153912-95e50f54.png)](/img/migrated/Screenshot-2025-03-20-153912-95e50f54.png)

The Access Mode update process takes a few minutes. The cluster status changes to **Processing** during this time. The cluster continues to operate normally while the new Access Mode is being applied.
