---
id: "access-clusters-detail-information"
title: "Access cluster detail information"
description: "**Step 1** : In the menu, select **Kubernetes** , and the system will display the **Kubernetes Management** page. Choose"
sidebar_label: "Access cluster detail information"
sidebar_position: 6
---

# Access cluster detail information

**Step 1** : In the menu, select **Kubernetes** , and the system will display the **Kubernetes Management** page. Choose the **Managed** tab. Select the Cluster you want to view detailed information about.
[![](/img/migrated/8-c8cfd8da.png)](/img/migrated/8-c8cfd8da.png)
**Step 2** : The Overview tab will show various details about the Cluster.
[![](/img/migrated/9-316e6773.png)](/img/migrated/9-316e6773.png)
  * **GENERAL INFORMATION** : Basic information about the cluster, including Cluster Name, Kubernetes Version, Network, and Status.
  * **Worker Groups Config** : A list of Worker Groups and the configuration of Worker Nodes, including Min/Max quantity, CPU, Memory, and Disk.
  * **Advance Config** : Advanced parameters of the Kubernetes Cluster (Pod-network, Service-network, etc.).
  * **API** : API URL.
  * **Kubernetes Config** : Download the _.kubeconfig_ file for accessing the cluster.
  * **SSH Key** : Download the _ssh-key_ file for accessing worker nodes.