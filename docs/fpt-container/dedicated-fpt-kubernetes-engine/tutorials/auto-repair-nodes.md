---
id: "auto-repair-nodes"
title: "Auto repair nodes"
description: "Overview and configuration of the node auto-repair feature in D-FKE."
sidebar_label: "Auto repair nodes"
sidebar_position: 11
---

# Auto repair nodes

## A. Overview

This article introduces and explains how the node auto-repair feature works in FPT Cloud's D-FKE product.

Node auto-repair helps keep nodes in the cluster in a Ready, running state. When this feature is enabled, node-related events are continuously monitored. If a node enters a NotReady state, node auto-repair monitors it and, after 3 minutes in that state, takes the necessary actions to return the node to Ready.

## B. Installation

1. For **newly created clusters** after the feature release: the feature is automatically enabled.
2. For **existing clusters**, run the following command:

```
kubectl apply -f https://raw.githubusercontent.com/fci-xplat/fke-config/main/node-autorepair
```

## C. Configuration

In the configmap `auto-repair-configmap` in the `kube-system` namespace, there are two fields you can edit:

```
enable_rebooting_node (default "true")
```

```
enable_replacing_node (default "true")
```

- **enable_rebooting_node**: grants node auto-repair permission to reboot faulty nodes.
- **enable_replacing_node**: grants node auto-repair permission to delete faulty nodes.

If you want nodes in your cluster to remain stable, set `enable_replacing_node` to `"false"`.

## D. Basic workflow explanation

1. A node detected as NotReady for more than 3 minutes is rebooted.
2. The node is rebooted up to 3 times.
3. If rebooting does not make the node ready, all pods on the node are drained.
4. If the cluster does not have enough resources to run the pods from the old node, a new node is added to the cluster (cluster-autoscaler action).
5. The drained node is automatically deleted after 15 minutes (cluster-autoscaler action).
6. If Cluster Autoscaler is not active, node auto-repair deletes the faulty node after 60 minutes.

## E. Notes

- The D-FKE backend system may add, modify, or delete nodes in the cluster (this commonly occurs with clusters that have a firewall configured).
- From within the cluster, it is possible to log in to the infrastructure where the cluster nodes run.
