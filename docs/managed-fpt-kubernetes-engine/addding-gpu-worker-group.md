---
id: "addding-gpu-worker-group"
title: "Add a GPU worker group"
description: "* **CPU, GPU, RAM, Storage, and Instances Quota** : enough for the extra Worker Group specifications. If you plan to use"
sidebar_label: "Add a GPU worker group"
sidebar_position: 22
---

# Add a GPU worker group

#### Prerequisites:
  * **CPU, GPU, RAM, Storage, and Instances Quota** : enough for the extra Worker Group specifications. If you plan to use auto-scale, you must have enough GPU quota for the **maximum amount of nodes** that you desire.
  * 01 **Network Subnet** : Network for the Kubernetes Nodes, with a static IP Pool.

#### Steps to configure
**Step 1** : Login to the [FPT Cloud Portal](https://console.fptcloud.com). From the sidebar menu, choose **Kubernetes** > Choose the cluster to config. In **Detail Cluster** > **Worker Group** > click the **Config Icon**
[![](/img/migrated/55-1-7d362c94.png)](/img/migrated/55-1-7d362c94.png)
**Step 2** : Click **Add Worker Group** to add a new Worker Group.
[![](/img/migrated/56-1-93a8803a.png)](/img/migrated/56-1-93a8803a.png)
**Step 3** : Select **GPU specs** in the Worker Group.
[![](/img/migrated/57-1-dec56678.png)](/img/migrated/57-1-dec56678.png)
  * Choose **Instance type** : GPU
  * Choose **GPU type** : A30, A100, etc…
  * Choose **GPU Sharing configuration** : None, Single, Mixed, etc…
  * Choose **Specs type** : CPU – RAM – GPU

**Step 4** : Click **Save** and verify the initialization information.
**Step 5** : Wait until the cluster succeeds initialize (status: **Running**) > Ready to use.