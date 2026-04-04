---
id: "mfke-faqs"
title: "FAQs"
description: "Frequently asked questions about the Managed FPT Kubernetes Engine service."
sidebar_label: "FAQs"
sidebar_position: "37"
---

# Frequently Asked Questions (FAQs)

**1. Which regions does M-FKE support?**
FPT Cloud currently supports 4 regions:
  * HAN (Hanoi)
  * SGN (Saigon/HCM)
  * HAN2 (HoaLac)
  * JPN01 (Japan)

M-FKE is available in all 4 regions.

**2. Can an M-FKE cluster span multiple regions?**
M-FKE does not support running a single cluster across multiple regions. You can create a cluster in each region for the same application to implement BC&DR.

**3. Does M-FKE support multiple VM configurations within a cluster?**
M-FKE supports multiple VM configurations within a cluster by using worker groups. Each worker group can have a different configuration. Worker nodes within the same worker group share the same configuration (CPU, RAM, Disk).

**4. How many Worker nodes does M-FKE support per cluster?**
M-FKE defaults to a maximum limit of 100 Worker nodes per Worker Group and 100 Worker Groups per Cluster. Contact FPT Cloud to increase the Worker node limit if needed.

**5. Is M-FKE compatible with my existing Kubernetes applications?**
M-FKE uses native Kubernetes, so it is fully compatible with Kubernetes platforms on other clouds such as AWS, Azure, GCP, and DigitalOcean, as well as Kubernetes clusters installed on your own infrastructure. This makes it easy to migrate applications between FPT Cloud, your data center, and other clouds.

**6. How can I expose my application outside the cluster?**
Use Service type Load Balancer or Ingress to expose your application outside the cluster.

**7. How can I monitor performance and configure alerts for the cluster?**
FPT Cloud provides the FMON product to help you monitor performance and configure alerts for the Kubernetes cluster. FMON also provides logging and tracing that integrates easily with FKE.

**8. What is the base worker group? Can it be deleted?**
An M-FKE cluster always has one base worker group that contains system components in the kube-system namespace, such as coredns, cni-controller, and metrics-server. The base worker group cannot be deleted from the cluster.

**9. How can I change the flavor and disk configuration of existing worker groups?**
M-FKE does not support directly changing the flavor or disk size of existing worker groups. To change the configuration, create a new worker group with the desired configuration, migrate applications from the old worker group to the new one, then delete the old worker group.

**10. CPU and memory resources on nodes in a worker group are nearly exhausted, but the cluster is not scaling new nodes. Why?**
Cluster Autoscaler (CA) does not scale in/out based on actual resource usage of nodes, but based on the resource requests of pods (including CPU and Memory) scheduled on nodes. CA scales out new nodes when there are pending pods because no node has sufficient requested resources to accommodate them. CA then creates a new node and the previously pending pod is scheduled on that new node.

**11. CPU and memory resources on nodes are very low, but the cluster is not scaling in worker nodes. Why?**
Cluster Autoscaler (CA) does not scale in/out based on actual resource usage of nodes, but based on the resource requests of pods (including CPU and Memory) scheduled on nodes. CA scales in nodes that have not met 50% utilization (requested resources / allocated resources) for 30 consecutive minutes.

**12. Is the cluster upgrade process fully automated and guaranteed to succeed 100%? Can it cause service downtime?**
M-FKE upgrades clusters using a worker node rollout mechanism. Worker nodes with the newer Kubernetes version are created and join the cluster. Pods on old-version worker nodes are then migrated to the new-version worker nodes. Most cluster upgrades are automated and successful. However, users should watch for cases where M-FKE cannot automatically evict pods from old-version worker nodes, such as when a pod violates a PodDisruptionBudget (PDB). The upgrade process can cause service downtime from when pods on old-version worker nodes are deleted until new pods are deployed on new-version worker nodes. The wait time for old pods to be evicted and new pods to become running can be extended when pods use Persistent Volumes. Users should actively monitor the upgrade process to ensure system stability.

**13. Can taints be applied to the base worker group?**
The base worker group only supports labels, not taints. Applying taints to the base worker group while system pods lack the appropriate tolerations would cause cluster operational issues. MFKE recommends deploying applications to other worker groups to avoid affecting system operations.
