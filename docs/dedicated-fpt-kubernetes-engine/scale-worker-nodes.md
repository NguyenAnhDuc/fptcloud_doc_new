---
id: "scale-worker-nodes"
title: "Scale worker nodes"
description: "**Step 1** : In the FPT Cloud Portal menu, select **Kubernetes** , and the system will display the **Kubernetes Manageme"
sidebar_label: "Scale worker nodes"
sidebar_position: 12
---

# Scale worker nodes

**Step 1** : In the FPT Cloud Portal menu, select **Kubernetes** , and the system will display the **Kubernetes Management** page.
[![](/img/migrated/30-c073da78.png)](/img/migrated/30-c073da78.png)
**Step 2** : Choose a Cluster that you want to adjust number of worker nodes from the list.
[![](/img/migrated/31-0027f0f8.png)](/img/migrated/31-0027f0f8.png)
**Step 3** : In the **Node Pools** tab > **Auto Scale** select the **Setting** icon
[![](/img/migrated/32-97ff3240.png)](/img/migrated/32-97ff3240.png)
**Step 4** : Enter the required information into the **Auto Scale Nodes Of Cluster** popup:
  * **Min node/Max node** : Enter the number of worker nodes that user want to add/remove

[![](/img/migrated/33-89d0a4d3.png)](/img/migrated/33-89d0a4d3.png)
After clicking **Update** , Cluster Scaling will be executed, and the user cannot interact with the Cluster until the process is completed.
