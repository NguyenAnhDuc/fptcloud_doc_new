---
id: "them-worker-group"
title: "Add a worker group"
description: "How to add a new worker group to a Managed FPT Kubernetes Engine cluster."
sidebar_label: "Add a worker group"
sidebar_position: "12"
---

# Add a worker group

**Step 1:** From the menu, select **Kubernetes**. The **Kubernetes Management** page appears. Select the **Cluster** you want to add a Worker Group to.
[![](/img/migrated/Picture21-59a1a031.png)](/img/migrated/Picture21-59a1a031.png)

**Step 2:** Select **Node Pools** > **Edit Workers**.
[![](/img/migrated/Picture22-21285b05.png)](/img/migrated/Picture22-21285b05.png)

**Step 3:** Click **ADD WORKER GROUP**.
[![](/img/migrated/Picture23-51511b2e.png)](/img/migrated/Picture23-51511b2e.png)

**Step 4:** Fill in the required fields.
[![](/img/migrated/Picture24-753cbc70.png)](/img/migrated/Picture24-753cbc70.png)

  * **Instance Type:** Select the Instance type (CPU or GPU) for **Worker nodes**.
  * **Type:** Select the configuration (CPU & Memory) for **Worker nodes**.
  * **Container Runtime:** Select **Containerd**.
  * **Storage Policy:** Select the **Storage Policy** type (corresponding to IOPS) for the Worker node disk.
  * **Disk (GB):** Select the root disk size for **Worker nodes**.
  * **Network:** The Subnet used to deploy VMs for the Kubernetes cluster.
  * **Scale min:** Minimum number of Worker node VM instances in the cluster. Recommended minimum is 3 nodes for production environments.
  * **Scale max:** Maximum number of Worker node VM instances per worker group in the cluster.
  * **Label:** Assign Labels to the **Worker Group**.
  * **Taint:** Assign Taints to the **Worker Group**.

**Step 5:** Review the information, then click **Save** to add the new Worker.
[![](/img/migrated/Picture25-131290d6.png)](/img/migrated/Picture25-131290d6.png)

The cluster scaling process takes a few minutes. The cluster status changes to **Processing** during this time. The cluster continues to operate normally while the new Worker Group is being added.
