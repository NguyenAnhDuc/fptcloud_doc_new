---
id: "change-worker-groups-configuration"
title: "Change worker groups configuration"
description: "**Step 1** : In the menu, select **Kubernetes** , and the system will display the **Kubernetes Management** page. Choose"
sidebar_label: "Change worker groups configuration"
sidebar_position: 11
---

# Change worker groups configuration

**Step 1** : In the menu, select **Kubernetes** , and the system will display the **Kubernetes Management** page. Choose a Cluster that you want to modify the Worker Group configuration.
[![](/img/migrated/20-1-24780232.png)](/img/migrated/20-1-24780232.png)
**Step 2** : Click **Configure Worker Groups**.
[![](/img/migrated/21-1-daece880.png)](/img/migrated/21-1-daece880.png)
**Step 3** : Adjust the parameters according to your needs.
[![](/img/migrated/22-1-a6f5fed9.png)](/img/migrated/22-1-a6f5fed9.png)
**Step 4** : Verify the information and click **Save** to apply the Worker Group configuration.
[![](/img/migrated/23-1-48952793.png)](/img/migrated/23-1-48952793.png)
The Cluster update process will take place, and during this process, users cannot edit the Cluster until the update is complete.
When modifying the parameters of the worker group, the system will first create additional worker nodes with the desired configuration. Once the new worker nodes are successfully created, worker nodes with the old configuration will be removed from the system. Pods will be migrated from the old worker nodes to the new ones.
