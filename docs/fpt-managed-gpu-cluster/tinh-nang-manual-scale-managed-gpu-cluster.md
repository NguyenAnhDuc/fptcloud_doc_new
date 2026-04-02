---
id: "tinh-nang-manual-scale-managed-gpu-cluster"
title: "Manual scale for Managed GPU Cluster"
description: "Manual Scale allows users to proactively adjust the system resource scale as needed."
sidebar_label: "Manual scale for Managed GPU Cluster"
sidebar_position: 10
---

# Manual scale for Managed GPU Cluster

Manual Scale allows users to proactively adjust the system resource scale as needed. Users can increase or decrease the number of Metal Cloud Servers directly on the portal by following these steps:

**Step 1:** In the menu, select **AI Infrastructure** > **Managed GPU Cluster**. The system will display the **Managed GPU Management** page. Select the cluster you want to scale.

[![](/img/migrated/17-502dd1f3.png)](/img/migrated/17-502dd1f3.png)

**Step 2:** Click on the cluster you want to scale, then select **Node Pools** > **Edit Workers**.

[![](/img/migrated/21-de403ab8.png)](/img/migrated/21-de403ab8.png)

[![](/img/migrated/22-ba5ffbfa.png)](/img/migrated/22-ba5ffbfa.png)

**Step 3:** Update the **Number of Server** to the desired value, then click **Save**.

[![](/img/migrated/23-82548293.png)](/img/migrated/23-82548293.png)

**Note:**

The manual scale process will take a few minutes. The cluster status will change to **Processing** until the new worker successfully joins the cluster. The cluster continues to operate normally while scaling up with new servers.
