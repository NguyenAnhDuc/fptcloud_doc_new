---
id: "khoi-tao-kubernetes-cluster-moi"
title: "Create a new Kubernetes cluster"
description: "How to create a new Kubernetes cluster in Dedicated FPT Kubernetes Engine."
sidebar_label: "Create a new Kubernetes cluster"
sidebar_position: "4"
---

# Create a new Kubernetes cluster

:::note
Prerequisites before proceeding:
- CPU, RAM, Storage, and Instance quotas are sufficient for the desired cluster configuration.
- At least one available Public IP (for Kubernetes API and Ingress).
- One VM Network for Kubernetes Nodes (requires a subnet with a Static IP Pool).
:::

1. From the menu, select **Kubernetes**, then click **Create**.
[![](/img/migrated/Picture1-f7c686bf.png)](/img/migrated/Picture1-f7c686bf.png)
2. Enter the cluster name and version, then click **Next**.
[![](/img/migrated/Picture2-ea3a672d.png)](/img/migrated/Picture2-ea3a672d.png)
   - **Name:** Enter the cluster name.
   - **Version:** Select the cluster version.
3. Configure Node Pools as needed, then click **Next**.
[![](/img/migrated/Picture3-f4c4f789.png)](/img/migrated/Picture3-f4c4f789.png)

   **Storage Policy & Load Balancer:**
   - **Policy:** Select the Storage Policy to use for VM disks in the cluster.
   - **LB Size:** Configure the Load Balancer (Standard / Advanced / Premium).

   **Master Node configuration:**
   - **Type:** Select the CPU and memory configuration for Master Nodes.
   - **Disk (GB):** Select the root disk size for Master Nodes.
   - **High Availability:** Disable (1 master node) or Enable (3 master nodes).

   **Worker Node configuration:**
   - **Type:** Select the CPU and memory configuration for Worker Nodes.
   - **Disk (GB):** Select the root disk size for Worker Nodes.
   - **Quantity:** Enter the number of Worker Nodes in the cluster.
   - **Autoscale:** Toggle autoscale on or off. If enabled, enter Scale Min and Scale Max values.

   **Nodes Credentials:**
   - **SSH Key:** Key used to log in to VM Nodes (root user).

4. Configure advanced cluster settings, then click **Next**.
[![](/img/migrated/Screenshot_52-aef22d51.png)](/img/migrated/Screenshot_52-aef22d51.png)

   **NFS Storage:**
   - Check **Enable NFS Persistent Storage** to deploy NFS Persistent Storage alongside the cluster.
   - **Disk (GB):** Enter the NFS Storage capacity.

   **Firewall configuration:**
   - Check **Enable Firewall** to configure Edge IP, Public IP, and Private IP alongside the cluster.

   **Advanced settings:**
   - **Pod Network:** The network used for Pods in the cluster.
   - **Service Network:** The network used for Services in the cluster.
   - **Network Node Prefix:** The subnet prefix for Pods within a Node.
   - **Max Pod per Node:** Maximum number of Pods per Kubernetes Node.
   - **Nodes DNS:** DNS used by Nodes and the Kubernetes cluster.

5. Review the configuration summary.
[![](/img/migrated/Picture4-db8dfc98.png)](/img/migrated/Picture4-db8dfc98.png)
6. Click **Create a Kubernetes**. The system verifies, checks resources, and begins creating the cluster.
[![](/img/migrated/Picture5-6a395f6a.png)](/img/migrated/Picture5-6a395f6a.png)
