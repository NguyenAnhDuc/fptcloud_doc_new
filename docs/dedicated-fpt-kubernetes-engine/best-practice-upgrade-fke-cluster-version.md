---
id: "best-practice-upgrade-fke-cluster-version"
title: "Best practices for upgrading FKE cluster version"
description: "Best practices and detailed process for upgrading the Kubernetes cluster version in D-FKE."
sidebar_label: "Best practices for upgrading FKE cluster version"
sidebar_position: 26
---

# Best practices for upgrading FKE cluster version

D-FKE supports upgrading the Kubernetes cluster version via the Portal Console.

**A. Product features:**
  * Both master and worker nodes are upgraded automatically — the process requires no manual intervention on the cluster.
  * **Zero-downtime master upgrade:** The system automatically upgrades the master to the next version (e.g. 1.21 → 1.22) with no downtime when the cluster runs in HA mode (3 masters). For clusters with a single master, a few minutes of master downtime may occur during the upgrade; application workloads continue running normally during this time.
  * **Zero-downtime worker upgrade:** The system performs a rolling update on each worker node. Each worker is drained of pod workloads and cordoned (scheduling disabled) until the node upgrade is complete.

**B. Upgrade process details:**

**1. Pre-upgrade**
  * The system prepares the environment for the cluster upgrade.
  * Environment checks: cluster status / network status.

**2. Upgrade**
(Nodes are upgraded in order: masters first, then workers)
  * Cordon node
  * Drain node
  * Check node is in ready state
  * Backup old certs and keys; backup old confs (master)
  * Update etcd-servers for apiserver (master)
  * Install new version software on node: kubelet, calico, container runtime, coredns, nodelocaldns, metrics server, etc.

**3. Post-upgrade**
  * Install new version addons on node: CSI, CCM, Autoscaler
  * Check upgrade state
  * Cleanup

**C. Recommendations for cluster upgrade:**
  * Perform the cluster upgrade during low-traffic periods — after business hours or on weekends.
  * Before upgrading the production environment, test application compatibility with the new Kubernetes version in a dev/uat environment, especially for new Kubernetes API versions.
  * Upgrade the cluster version one step at a time (e.g. 1.21 → 1.22 → 1.23).
  * Keep the cluster on the latest supported version (refer to the EOL chart below).
  * Back up cluster configuration before upgrading: use CD tools or back up manifests/helm charts.
  * Deploy clusters with HA masters (3 masters) to ensure zero downtime for the control plane.
  * Deploy clusters with at least 2 workers to ensure zero downtime for application workloads.
  * Deploy applications using Workload Controllers such as Deployment, ReplicaSet, DaemonSet with at least 2 replicas; avoid standalone Pods.
  * Avoid using local storage (emptyDir, hostPath); use CSI instead.
  * Apply Anti-Affinity rules to ensure applications run across multiple worker nodes.
  * Ensure Firewall ports are open for FPT systems to connect to the cluster during upgrade (FKE controller: from 103.160.90.33 to cluster, TCP ports 6443, 32085, 2022).
  * Size resources appropriately to allow rolling updates on worker nodes (consider adding 1 extra worker as a buffer before upgrading the cluster version).

**D. D-FKE EOL Chart**

| Kubernetes version | Upstream release | FKE GA | FKE End of standard support |
| --- | --- | --- | --- |
| 1.21 | Apr, 2021 | 2021 | Sep, 2024 |
| 1.22 | Aug, 2021 | 2022 | Nov, 2024 |
| 1.23 | Dec, 2021 | 2023 | Feb, 2025 |
| 1.24 | May, 2022 | | |
| 1.25 | Aug, 2022 | Oct, 2023 | Aug, 2025 |
| 1.26 | Dec, 2022 | Jan, 2024 | Nov, 2025 |
| 1.27 | Apr, 2023 | Feb, 2024 | Feb, 2026 |
| 1.28 | Aug, 2023 | Mar, 2024 | May, 2026 |
| 1.29 | Jan, 2024 | | |
