---
id: "chuyen-worker-group-base"
title: "Change Base Worker Group"
description: "How to change the base worker group in Managed FPT Kubernetes Engine."
sidebar_label: "Change Base Worker Group"
sidebar_position: "16"
---

# Change Base Worker Group

When you want to change the base worker group, system components (coredns, metrics-server, CNI controller, etc.) will be redeployed on the worker nodes in the new base worker group. This is useful when you want to scale up or down the flavor configuration of worker nodes in the base worker group — create a new worker group with the desired worker node configuration, set it as the base, then delete the old base worker group.

**Step 1:** From the menu, select **Kubernetes**. The **Kubernetes Management** page appears. Select the **Cluster** you want to change the Worker Group configuration for.
[![](/img/migrated/Picture36-569deb38.png)](/img/migrated/Picture36-569deb38.png)

**Step 2:** Select **Node Pools** > **Edit Workers**.
[![](/img/migrated/Picture5-3-59491c55.png)](/img/migrated/Picture5-3-59491c55.png)

**Step 3:** Select the worker group you want to change.
[![](/img/migrated/Picture6-3-2ddc619d.png)](/img/migrated/Picture6-3-2ddc619d.png)

**Step 4:** Review the information, then click **Save** to apply the changes.
[![](/img/migrated/Picture39-31886a4d.png)](/img/migrated/Picture39-31886a4d.png)
[![](/img/migrated/Picture40-6f5a3087.png)](/img/migrated/Picture40-6f5a3087.png)

The process of changing the Base Worker Group takes a few minutes. You cannot make other changes to the cluster until the process completes.

_Tip: When changing worker group configuration, the system first creates new worker nodes with the desired configuration. Once the new worker nodes are successfully created, the old worker nodes are removed from the system. Pods are migrated from the old worker nodes to the new ones._
