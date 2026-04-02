---
id: "add-worker-group"
title: "Add a worker group"
description: "Add a new worker group to an existing Managed FPT Kubernetes Engine cluster."
sidebar_label: "Add a worker group"
sidebar_position: 10
---

# Add a worker group

**Step 1:** In the menu, select **Kubernetes** to open the **Kubernetes Management** page. Select the cluster you want to add a worker group to.

[![](/img/migrated/15-3314db3f.png)](/img/migrated/15-3314db3f.png)

**Step 2:** Click **Configure Worker Groups**.

[![](/img/migrated/16-1d7abe11.png)](/img/migrated/16-1d7abe11.png)

**Step 3:** Click **Add Worker Group**.

[![](/img/migrated/17-bfaff80b.png)](/img/migrated/17-bfaff80b.png)

**Step 4:** Enter the required information:

[![](/img/migrated/18-1-76d3b20a.png)](/img/migrated/18-1-76d3b20a.png)

- **Type:** Choose the CPU and memory configuration for the worker node.
- **Container runtime:** Containerd.
- **Storage policy:** Choose the storage policy type (corresponding to IOPS) for the worker node disk.
- **Disk (GB):** Select the root disk capacity for the worker node.
- **Scale min:** Minimum number of VM instances for the worker node. At least 3 nodes are recommended for production.
- **Scale max:** Maximum number of VM instances for the worker group.

**Step 5:** Verify the information and click **Save** to add the worker group.

[![](/img/migrated/19-1-5e45dec7.png)](/img/migrated/19-1-5e45dec7.png)

The cluster scaling process takes a few minutes and the cluster status changes to **Processing**. The cluster continues to operate normally while the new worker group is being added.
