---
id: "auto-scale"
title: "Auto Scale"
description: "The **Autoscale** feature is enabled by default when users create a Kubernetes Cluster with D-FKE."
sidebar_label: "Auto Scale"
sidebar_position: 19
---

# Auto Scale

The **Autoscale** feature is enabled by default when users create a Kubernetes Cluster with D-FKE.
D-FKE's **Autoscale** feature is built based on Kubernetes' cluster-autoscaler tool. The system will automatically adjust the number of worker nodes in the cluster when the following conditions are met:
  * Pods are in **pending** state due to lack of resources.
  * Node in the cluster uses less than 50% of resources (CPU & RAM) for a period of time (default is 15 minutes) and Pods on that node can be moved to other nodes 

Reference: <https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler>
To use the cluster-autoscaler feature, users can use it combine with HPA (HorizontalPodAutoscaler).
  * **Scale-up** : HPA automatically creates additional Pods when resource usage exceeds a predefined threshold. When new Pods are created, if Worker Nodes have insufficient resources for that Pod request, cluster-autoscaler will automatically create more Worker Nodes to meet the number of newly created Pods.
  * **Scale-down** : HPA automatically reduces the number of Pods when resource usage is less than a set threshold. At that time, Nodes will reduce resource usage and are automatically reduced by cluster-autoscaler. 

Reference: <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale>- walkthrough/
**Basic Use-cases** :
  * To have the number of worker nodes fixed: user can set the value of **Min nodes = Max nodes**
  * To block Cluster Autoscaler from scaling down fixed node: Cluster Autoscaler would not scale down node that has following annotation: `"cluster-autoscaler.kubernetes.io/scale-down-disabled": "true"`
Use this command to add annotation: 

```
Copy  kubectl annotate node cluster-autoscaler.kubernetes.io/scale-down-disabled=true
```