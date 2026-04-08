---
id: "change-worker-groups-configuration"
title: "Change worker group configuration"
description: "Modify the configuration of a worker group in a Managed FPT Kubernetes Engine cluster."
sidebar_label: "Change worker group configuration"
sidebar_position: 11
draft: true
---

# Change worker group configuration

**Step 1:** In the menu, select **Kubernetes** to open the **Kubernetes Management** page. Select the cluster whose worker group configuration you want to modify.

[![](/img/migrated/20-1-24780232.png)](/img/migrated/20-1-24780232.png)

**Step 2:** Click **Configure Worker Groups**.

[![](/img/migrated/21-1-daece880.png)](/img/migrated/21-1-daece880.png)

**Step 3:** Adjust the parameters as needed.

[![](/img/migrated/22-1-a6f5fed9.png)](/img/migrated/22-1-a6f5fed9.png)

**Step 4:** Verify the information and click **Save** to apply the worker group configuration.

[![](/img/migrated/23-1-48952793.png)](/img/migrated/23-1-48952793.png)

The cluster update process begins. You cannot edit the cluster during this time.

When modifying worker group parameters, the system first creates new worker nodes with the desired configuration. Once the new nodes are ready, the old nodes are removed and pods are migrated to the new worker nodes.
