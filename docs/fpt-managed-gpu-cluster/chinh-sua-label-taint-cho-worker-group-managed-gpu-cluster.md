---
id: "chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster"
title: "Edit labels and taints for a worker group"
description: "Labels and taints are two important mechanisms for managing and distributing workloads efficiently across multiple Worker Groups."
sidebar_label: "Edit labels and taints for a worker group"
sidebar_position: 11
---

# Edit labels and taints for a worker group

Labels and taints are two important mechanisms for managing and distributing workloads efficiently in a system with multiple Worker Groups. They make it easy to group workers by purpose, performance, or geographic region. Managed GPU Cluster allows users to add, edit, and delete labels/taints directly on the Unify Portal.

**Step 1:** In the menu, select **AI Infrastructure** > **Managed GPU Cluster**. The system will display the Managed GPU Cluster Management page. Select the cluster you want to edit labels/taints for.

[![](/img/migrated/24-2bafdf17.png)](/img/migrated/24-2bafdf17.png)

**Step 2:** Select **Node Pools** > **Edit Workers**.

[![](/img/migrated/25-62db8512.png)](/img/migrated/25-62db8512.png)

**Step 3:** Enter the labels and taints you want to add to the Worker Group, then click **Save**.

[![](/img/migrated/26-888e5fac.png)](/img/migrated/26-888e5fac.png)

[![](/img/migrated/27-1e045ce9.png)](/img/migrated/27-1e045ce9.png)

[![](/img/migrated/28-8da95fc4.png)](/img/migrated/28-8da95fc4.png)

**Note:**

The process of editing labels and taints will take a few minutes. The cluster status will change to **Processing**. While this is in progress, users cannot edit the cluster until the process is complete.
