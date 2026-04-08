---
id: "best-practice-upgrade-version"
title: "Best practices for upgrading FKE cluster version"
description: "Best practices and detailed process flow for upgrading a Kubernetes cluster version in D-FKE."
sidebar_label: "Best practices: version upgrade"
sidebar_position: 26
draft: true
---

# Best practices for upgrading FKE cluster version

The D-FKE service supports upgrading the Kubernetes cluster version from the Portal Console.

## A. Product features

- **Both master and worker nodes are upgraded:** The process is fully automated; users can perform it easily from the portal without needing to intervene in the cluster directly.
- **Zero-downtime master upgrade:** The system automatically upgrades the master to the next version (e.g. 1.21 → 1.22) with no downtime if the cluster uses HA mode (3 masters). For clusters with a single master, there will be a few minutes of master downtime during which the Kubernetes API is unavailable, but application workloads continue to run normally.
- **Zero-downtime worker upgrade:** The system performs a rolling update of each worker node in sequence. Each worker is drained of pod workloads and cordoned (schedule disabled) until the node update completes.

## B. Upgrade process detail

**1. Pre-upgrade**
- The system sets up the environment for cluster upgrade.
- Checks environment: cluster status / network status.

**2. Upgrade**
(Upgrades nodes in sequence: masters first, then workers)
- Cordon node.
- Drain node.
- Check node is in ready state.
- Back up old certs and keys; back up old configs (master).
- Update etcd-servers for apiserver (master).
- Install new version software on node: kubelet, calico, container runtime, coredns, nodelocaldns, metrics server, etc.

**3. Post-upgrade**
- Install new version add-ons on node: CSI, CCM, Autoscaler.
- Check upgrade state.
- Cleanup.

## C. Recommendations for upgrading clusters

- Perform cluster upgrades during low-load periods such as after business hours or on weekends.
- Before upgrading the production environment, test application compatibility with the new Kubernetes version in dev/uat environments first, especially for new Kubernetes API versions.
- Upgrade cluster versions sequentially (e.g. 1.21 → 1.22 → 1.23).
- Keep the cluster on the latest supported version (refer to the EOL version table).
- Back up cluster configuration before upgrading: use CD tools or back up manifests/helm charts.
- Deploy clusters with HA masters (3 masters) to ensure zero control plane downtime.
- Deploy clusters with 2 or more HA workers to ensure zero application workload downtime.
- Deploy applications as Workload Controllers (Deployment, Replicaset, DaemonSet, etc.) with 2 or more replicas; avoid deploying single pods.
- Do not use local storage (empty dir, hostpath, etc.); use CSI instead.
- Deploy Anti-Affinity rules for applications to ensure they run across multiple worker nodes.
- Ensure the firewall allows FPT systems to connect to the cluster during upgrade (FKE controller: from 103.160.90.33 to cluster port tcp 6443, 32085, 2022; FPT Cloud Portal: from 103.160.90.36, 103.160.90.37, 103.160.90.39 to Public IP port tcp 6443).
- Design application resource sizing to ensure sufficient resources for rolling worker node updates (consider scaling out 1 worker as a buffer before upgrading the cluster version).

## D. D-FKE EOL chart

| Kubernetes version | Upstream release | FKE GA | FKE end of standard support |
| --- | --- | --- | --- |
| 1.21 | Apr 2021 | 2021 | Sep 2024 |
| 1.22 | Aug 2021 | 2022 | Nov 2024 |
| 1.23 | Dec 2021 | 2023 | Feb 2025 |
| 1.24 | May 2022 | | |
| 1.25 | Aug 2022 | Oct 2023 | Aug 2025 |
| 1.26 | Dec 2022 | Jan 2024 | Nov 2025 |
| 1.27 | Apr 2023 | Feb 2024 | Feb 2026 |
| 1.28 | Aug 2023 | Mar 2024 | May 2026 |
| 1.29 | Jan 2024 | | |
