---
id: "deploy-application-in-worker-pool"
title: "Deploy application in worker pool"
description: "The M-FKE product manages workers based on worker pools, providing convenient support for customers to deploy applicatio"
sidebar_label: "Deploy application in worker pool"
sidebar_position: 17
draft: true
---

# Deploy application in worker pool

The M-FKE product manages workers based on worker pools, providing convenient support for customers to deploy applications without worrying about resource scaling issues.

### The manifest file configuration for application deployment
For example, deploying an application on a cluster with 02 worker pools:
[![](/img/migrated/38-1-6efb9b88.png)](/img/migrated/38-1-6efb9b88.png)
Each worker pool has a worker node:
[![](/img/migrated/39-1-b46c56f7.png)](/img/migrated/39-1-b46c56f7.png)
Worker nodes are labeled to differentiate nodes and facilitate application deployment on nodes with common labels:
[![](/img/migrated/40-1-bd0237e9.png)](/img/migrated/40-1-bd0237e9.png)
Worker nodes belonging to the worker pool **worker-1zx5wqdu** are labeled **worker.fptcloud/pool=worker-1zx5wqdu**.
Users can copy the worker pool name when clicking on the details of the worker pool configuration.
[![](/img/migrated/41-1-c6efbda0.png)](/img/migrated/41-1-c6efbda0.png)
When using resources to deploy applications in Kubernetes (Pod, Deployment, StatefulSet, DaemonSet, Replicaset), users can add a **Node Affinity Rule** or **Node Selector** in the Specification section of the configuration file:
[![](/img/migrated/42-1-57d47fd0.png)](/img/migrated/42-1-57d47fd0.png)
[![](/img/migrated/43-1-21ff93a1.png)](/img/migrated/43-1-21ff93a1.png)
In this case, the value entered in the first image's **values** section (using **Node Affinity Rule**) and the value in the **nodeSelector** section is the name of the worker pool that the user wants to deploy the application to.

### Application Deployment:
When deploying the NGINX application using the manifest file:
[![](/img/migrated/44-1-ee17e782.png)](/img/migrated/44-1-ee17e782.png)
One pod is in **Pending** state due to a lack of resources on the worker nodes in the pool to run the pod:
[![](/img/migrated/45-1-29ab2f37.png)](/img/migrated/45-1-29ab2f37.png)
The **Cluster Autoscaler** component from FPT Cloud will scale up by adding more worker nodes to that pool to serve the pending NGINX pod.
[![](/img/migrated/46-1-1acc0d3d.png)](/img/migrated/46-1-1acc0d3d.png)
After adding a worker node to the worker pool, the NGINX pod that was previously **Pending** is now in the **Running** state.
When scaling the application using fewer pods, the available resources on the worker nodes will increase until the resource usage for CPU and Memory compared to the node's maximum resources decreases below 50% over a 10-minute period. At that point, the node will be automatically removed from the worker pool, saving costs for the user.
