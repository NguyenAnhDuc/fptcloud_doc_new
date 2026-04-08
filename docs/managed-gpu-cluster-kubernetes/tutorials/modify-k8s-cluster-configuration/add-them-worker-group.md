---
id: "add-them-worker-group"
title: "Add a worker group"
description: "Managed GPU Cluster allows users to add worker groups to the cluster as needed."
sidebar_label: "Add a worker group"
sidebar_position: 2
---

# Add a worker group

Managed GPU Cluster allows users to add worker groups to the cluster as needed. To add a worker group, follow these steps on the portal:

**Step 1:** In the menu, select **AI Infrastructure** > **Managed GPU Cluster**. The system will display the **Managed GPU Management** page. Select the cluster you want to add a Worker Group to.

[![](/img/migrated/17-502dd1f3.png)](/img/migrated/17-502dd1f3.png)

**Step 2:** Select **Node Pools** > **Edit Workers**.

[![](/img/migrated/18-13f798d7.png)](/img/migrated/18-13f798d7.png)

**Step 3:** Select **Add Worker Group**.

[![](/img/migrated/19-437d9b85.png)](/img/migrated/19-437d9b85.png)

**Step 4:** Fill in the required fields and click **Save**.

[![](/img/migrated/20-d9c3a1fa.png)](/img/migrated/20-d9c3a1fa.png)

**• Group Name**: Enter a name to identify the Worker Group.

**• Container Runtime**: Select the container runtime. Currently only Containerd is supported.

**• Flavor**: The resource flavor for the GPU Worker.

**• Number of Server**: The number of Metal Cloud Servers to run as Workers in the cluster.

**• Label**: Assign labels to the Worker Group.

**• Taint**: Assign taints to the Worker Group.

**Note**: The process of adding a new Worker Group will take a few minutes. The cluster status will change to **Processing**. The cluster continues to operate normally while the new Worker Group is being added.
