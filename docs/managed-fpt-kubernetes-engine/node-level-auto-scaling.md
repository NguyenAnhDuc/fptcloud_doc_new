---
id: "node-level-auto-scaling"
title: "Node-level auto scaling"
description: "Similar to how Cluster Autoscale with M-FKE works, the Kubernetes cluster will automatically increase/decrease the amoun"
sidebar_label: "Node-level auto scaling"
sidebar_position: 26
pagination_next: null
---

# Node-level auto scaling

Similar to how Cluster Autoscale with M-FKE works, the Kubernetes cluster will automatically increase/decrease the amount of Worker Node in a Worker Group depending on the GPU usage: adding new Worker Node in a Worker Group if the application running on that worker group doesn't receive sufficient resources (GPU) from the nodes in that pool. The pending Pods will be allocated to the newly created Worker Nodes after scaling. Cluster Autoscale will also remove nodes that do not meet the utilization requirements (defaults to 50% utilization) for that node.
More details can be found at [FPT Cloud Manged Kubernetes Autoscaler](../managed-fpt-kubernetes-engine/index.md)
The number of nodes in a Worker Group is defined on the FPT Cloud Portal, as shown in the image below:
[![](/img/migrated/63-1-477eea30.png)](/img/migrated/63-1-477eea30.png)
