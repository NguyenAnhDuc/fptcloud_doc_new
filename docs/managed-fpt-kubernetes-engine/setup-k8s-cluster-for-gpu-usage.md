---
id: "setup-k8s-cluster-for-gpu-usage"
title: "Set up Kubernetes cluster for GPU usage"
description: "* **CPU, GPU, RAM, Storage, and Instances Quota** : enough for the desired Kubernetes Cluster. If you plan to use auto-s"
sidebar_label: "Set up Kubernetes cluster for GPU usage"
sidebar_position: 21
---

# Set up Kubernetes cluster for GPU usage

#### Prerequisites:
  * **CPU, GPU, RAM, Storage, and Instances Quota** : enough for the desired Kubernetes Cluster. If you plan to use auto-scale, you must have enough GPU quota for the **maximum amount of nodes** that you desire.
  * 01 **Network Subnet** : Network for the Kubernetes Nodes, with a static IP Pool.

#### Steps to setup the cluster:
**Step 1** : Login to the [FPT Cloud Portal](https://console.fptcloud.com). From the sidebar menu, choose **Kubernetes** > click **Create**
[![](/img/migrated/53-1-85e83144.png)](/img/migrated/53-1-85e83144.png)
**Step 2** : Enter the specification for the desired Kubernetes Cluster. Besides the normal information for the cluster, select **GPU specs** in the Worker Group:
[![](/img/migrated/54-1-f0592bf9.png)](/img/migrated/54-1-f0592bf9.png)
  * Choose **Instance type** : GPU
  * Choose **GPU type** : A30, A100, etc…
  * Choose **GPU Sharing configuration** : None, Single, Mixed, etc…
  * Choose **Specs type** : CPU – RAM – GPU

**Step 3** : Click **Create** and verify the initialization information.
**Step 4** : Wait until the cluster succeeds initialize (status: **Running**) > Ready to use.
