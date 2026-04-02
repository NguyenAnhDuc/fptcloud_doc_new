---
id: "tinh-nang-chuyen-worker-base-managed-gpu-cluster"
title: "Change the base worker group"
description: "When a user wants to change the base Worker Group, system components such as coredns, metrics servers, and CNI controller will be redeployed on the Worker nodes of the new base Worker Group."
sidebar_label: "Change the base worker group"
sidebar_position: 12
---

# Change the base worker group

When a user wants to change the base Worker Group, system components (coredns, metrics servers, CNI controller, etc.) will be redeployed on the Worker nodes of the new base Worker Group. This feature is useful when a user wants to increase or decrease the flavor configuration of the Worker nodes in the base Worker Group — in that case, the user creates a new Worker Group with the desired Worker node configuration, promotes it to base, and then deletes the old base Worker Group.

**Step 1:** In the menu, select **AI Infrastructure** > **Managed GPU Cluster**. The system will display the Managed GPU Cluster Management page. Select the cluster whose Worker Group configuration you want to change.

[![](/img/migrated/29-0520eb98.png)](/img/migrated/29-0520eb98.png)

**Step 2:** Select **Node Pools** > **Edit Workers**.

[![](/img/migrated/30-cc2c4a29.png)](/img/migrated/30-cc2c4a29.png)

**Step 3:** Select the Worker Group you want to promote to base, then click **Save**.

[![](/img/migrated/31-315883dd.png)](/img/migrated/31-315883dd.png)

**Note:**

- The process of changing the base Worker Group will run while users cannot edit the cluster until the process is complete.
- When changing the Worker Group parameters, the system first creates new Worker nodes with the desired configuration. Once the new Worker nodes are successfully created, the old Worker nodes are removed from the system. Pods will be migrated from the old Worker nodes to the new ones.
