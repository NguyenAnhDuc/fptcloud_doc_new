---
id: "khoi-tao-kubernetes-cluster-moi"
title: "Create a new Kubernetes cluster"
description: "Steps to create a new Managed FPT Kubernetes Engine (M-FKE) cluster from the FPT Cloud Portal."
sidebar_label: "Create a new Kubernetes cluster"
sidebar_position: "4"
---

# Create a new Kubernetes cluster

The following steps explain how to create a new Managed Kubernetes cluster from the FPT Cloud Portal.

## Prerequisites

Before creating a cluster, ensure that the [Initial Setup](./initial-setup.md) is complete. A Subnet and Static IP Pool must be correctly configured.

## Steps to create a cluster

**Step 1:** From the menu, select **Kubernetes**. The **Kubernetes Management** page appears. Click **Create a Kubernetes Engine**.

**Step 2:** Enter basic cluster information:

- **Cluster Name**: Enter a name for the cluster.
- **Kubernetes Version**: Select the Kubernetes version to use. See the [Release Calendar](./release-calendar.md) for available versions.
- **VPC / Subnet**: Select the VPC and Subnet where the cluster will be created.

**Step 3:** Configure the cluster endpoint access mode:

- **Public**: The cluster API server is directly accessible from the internet.
- **Public & Private**: The cluster API server is accessible from both the internet and the private network.
- **Private**: The cluster API server is accessible from the private network only.

**Step 4:** Configure **Auto Upgrade Version**. If enabled, set the upgrade schedule. See [Auto Upgrade Version feature](./auto-upgrade-version.md) for details.

**Step 5:** Configure the **Nodes Pool**:

- **Worker Group name**: Enter a name for the worker group.
- **Flavor**: Select the worker node sizing (CPU, RAM, Disk).
- **Min/Max Nodes**: Set the minimum and maximum node count for the worker group. If min and max differ, Cluster Autoscale is automatically enabled.
- **Node Auto-repair**: Enable or disable the Node Auto-repair feature.
- **Labels/Taints**: Configure worker node labels and taints as needed.

**Step 6:** Review the configuration and click **Create a Kubernetes**.

The cluster creation process starts and the status changes to **Processing**. Once creation is complete, the status changes to **Succeeded (Running)**.

## Notes

- Cluster creation takes a few minutes.
- Cluster settings cannot be changed during creation.
- After the cluster is created, [retrieve the kubeconfig](./get-cluster-access-information.md) to access the cluster.
