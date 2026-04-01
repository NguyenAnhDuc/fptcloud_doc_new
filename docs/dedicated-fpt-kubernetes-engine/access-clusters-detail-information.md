---
id: "access-clusters-detail-information"
title: "Access cluster detail information"
description: "**Step 1** : In the menu, select **Kubernetes** , and the system will display the **Kubernetes Management** page."
sidebar_label: "Access cluster detail information"
sidebar_position: 6
---

# Access cluster detail information

**Step 1** : In the menu, select **Kubernetes** , and the system will display the **Kubernetes Management** page.
[![](/img/migrated/11.MainPage-5770726a.png)](/img/migrated/11.MainPage-5770726a.png)
**Step 2** : Select the Cluster you want to view detailed information about.
[![](/img/migrated/12.ClusterInfo-a9f73460.png)](/img/migrated/12.ClusterInfo-a9f73460.png)
**Step 3** : Switching between tabs to view corresponding information
**_3.1. Essential Properties Tab_** : Display information of Cluster Information, Load Balancer VIP, API.
  * **Cluster Information** : Basic information about the Cluster, including Cluster ID, Version, Kubernetes Config, Status, Public IP, and SSH Key.
  * **Load Balancer VIP** : Virtual IPs of LB which is used for the K8s API and Ingress.
  * **Dashboard & API**: API URL

[![](/img/migrated/13.EssentialProperties-7d321a92.png)](/img/migrated/13.EssentialProperties-7d321a92.png)
**_3.2. Node Pools Tab_** : Configuration information of **Master Nodes** and **Worker Nodes**.
  * **Master Configuration** : Master Node configuration: Node Count, CPU, Memory, Disk
  * **Worker Configuration** : Worker Node configuration: Node Count, CPU, Memory, Disk, Storage Policy, Auto Scale

[![](/img/migrated/14.NodePoolsInfo-f19542e6.png)](/img/migrated/14.NodePoolsInfo-f19542e6.png)
**_3.3. Advanced Tab_** : Advanced parameters of the Kubernetes Cluster
  * **Advanced Configuration** : Advanced parameters of Kubernetes Cluster (Node DNS, Pod Network, Service Network, Network Node Prefix, Max Pod Per Node, Enable Custom Script)
  * **NFS Storage** : NFS status (Enable/Disable), and disk capacity of NFS Storage.

[![](/img/migrated/15.AdvancedInfo-9c98f1ac.png)](/img/migrated/15.AdvancedInfo-9c98f1ac.png)
**_3.4. Instances Tab_** : List virtual machines that belong to this Kubernetes Cluster, both **Master Nodes** and **Worker Nodes**
[![](/img/migrated/16.Instances-0b1d5db6.png)](/img/migrated/16.Instances-0b1d5db6.png)
**_3.5. Activity Logs Tab_** : Action Logs of this Kubernetes Cluster.
[![](/img/migrated/17.ActivityLogs-624016a0.png)](/img/migrated/17.ActivityLogs-624016a0.png)