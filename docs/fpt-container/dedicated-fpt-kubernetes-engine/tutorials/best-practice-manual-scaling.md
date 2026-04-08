---
id: "best-practice-manual-scaling"
title: "Best practices for manual scaling"
description: "Best practices and detailed process flow for manual scale-in and scale-out in D-FKE."
sidebar_label: "Best practices: manual scaling"
sidebar_position: 5
---

# Best practices for manual scaling

D-FKE supports manual scale-in and scale-out of worker nodes. For portal console instructions, see the [user guide](/docs/en/fpt-container/dedicated-fpt-kubernetes-engine/)/.

## Manual scale-in process detail

**1. Pre-scale**
- The system sets up the environment for cluster scaling.
- Checks environment: cluster status / network status.

**2. Scale in**
- Cordons all nodes (schedule disabled — prevents new application pods from entering the node).
- Drains each node in sequence (removes application pods from the current node and moves them to other nodes; nodes with local disks, single pods, disruption budgets, etc. cannot be removed — [reference](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-types-of-pods-can-prevent-ca-from-removing-a-node)).
- After all nodes are drained, removes each node from the Kubernetes cluster.

**3. Post-scale**
- After all nodes are removed from the cluster, the system reclaims and deletes the VMs.
- Cleanup.

## Manual scale-out process detail

**1. Pre-scale**
- The system sets up the environment for cluster scaling.
- Checks environment: cluster status / network status.
- The system creates VMs corresponding to the nodes to be added to the Kubernetes cluster.
- Sets up the environment to run Kubernetes on each VM.

**2. Scale out**
- Adds each node to the cluster in sequence.
- Allows application pod scheduling onto the newly joined nodes.

**3. Post-scale**
- Cleanup.

## Recommendations when using manual scale

**For scale-in operations:**
- If scaling in many nodes, survey and size the remaining nodes to ensure they have sufficient resources for the application. Perform during low-load periods such as after business hours or on weekends.
- If you can identify the list of nodes to delete, cordon them in advance to prevent new workloads from entering nodes that will be deleted (based on monitoring node resource usage).
- If there is still a large workload on the node, pre-drain the node to be deleted to speed up the scale-in process and avoid timeouts.
- Split scale-in operations into smaller batches — perform no more than 10 nodes per manual scale-in.

**For scale-out operations:**
- Split scale-out operations into smaller batches — perform no more than 10 nodes per manual scale-out.

**If the process times out:**
- Press the retry action to re-run the process. See [here](/docs/en/fpt-container/dedicated-fpt-kubernetes-engine/)/ for details.
