---
id: "manual-scale"
title: "Manual scale"
description: "Manually scale worker nodes in and out on a D-FKE cluster."
sidebar_label: "Manual scale"
sidebar_position: 20
---

# Manual scale

D-FKE supports manual scale-in and scale-out of worker nodes, allowing you to increase or decrease the number of workers on demand without waiting for the autoscaler. This is well-suited to situations that require rapid adjustment of worker node count based on actual workload.

**To configure manual scale:**

1. From the menu select **Kubernetes**. The **Kubernetes Management** page appears. Select the desired cluster, then select the node pool section.
[![](/img/migrated/anh1-212b9e0c.png)](/img/migrated/anh1-212b9e0c.png)
2. Under **Worker Config** > **Auto Scale**, select the **Enable Auto Scale Node** icon.
[![](/img/migrated/anh2-027ebf13.png)](/img/migrated/anh2-027ebf13.png)
3. The **Scale Worker Nodes** screen appears. Enter the required fields.
   - **Scale Type:** Select Scale Out (increase) or Scale In (decrease).
   - **Scale In:**
     - List of node name: Select nodes to remove. If none are selected, the system removes nodes at random.
     - Quantity: Enter the number of worker nodes to add or remove.
   - **Scale Out:**
     - Quantity: Enter the number of worker nodes to add.

   After entering the values, the resulting worker node count is shown on the **"Quantity worker after scale-up/scale-down equals"** line.

4. Review the information, then select **Scale Cluster** to execute the worker scale operation.
[![](/img/migrated/anh3-e979a990.png)](/img/migrated/anh3-e979a990.png)
[![](/img/migrated/anh44-88f304e7.png)](/img/migrated/anh44-88f304e7.png)

The cluster scaling process will run. While in progress, you cannot edit the cluster until the process completes.
