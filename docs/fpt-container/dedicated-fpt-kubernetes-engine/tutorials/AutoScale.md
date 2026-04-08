---
id: "AutoScale"
title: "AutoScale"
description: "Overview and usage of the Autoscale feature in D-FKE."
sidebar_label: "AutoScale"
sidebar_position: "19"
---

# Autoscale

The Autoscale feature is enabled by default when creating a Kubernetes Cluster in D-FKE.

D-FKE's Autoscale feature is built on top of Kubernetes' cluster-autoscaler tool. The system automatically adjusts the number of worker nodes in a cluster when the following conditions are met:

- Pods are in a pending state due to insufficient resources.
- Resource utilization (CPU and RAM) of nodes in the cluster has been below 50% for a certain period (default 15 minutes), and the pods on those nodes can be moved to other nodes.

Reference: <https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler>

The cluster-autoscaler feature is used in combination with HPA (HorizontalPodAutoscaler).

- **Scale-up:** HPA automatically adds pods when resource utilization exceeds the configured threshold. When new pods are created and Worker Nodes do not have enough resources to satisfy the pod's request, cluster-autoscaler automatically adds Worker Nodes to accommodate the new pods.
- **Scale-down:** HPA automatically reduces the number of pods when resource utilization falls below the configured threshold. As a result, node resource usage decreases and nodes are automatically removed by cluster-autoscaler.

Reference: <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/>

**Common usage scenarios:**

- Fix the number of worker nodes: Set Min = Max to the same value.
- Prevent scale-down on specific nodes: Nodes with the following annotation will not be scaled down by Cluster Autoscaler.

```
"cluster-autoscaler.kubernetes.io/scale-down-disabled": "true"
```

Command to add the annotation:

```
kubectl annotate node <node-name> cluster-autoscaler.kubernetes.io/scale-down-disabled=true
```
