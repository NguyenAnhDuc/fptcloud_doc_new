---
id: "tinh-nang-hibernate-wakeup"
title: "Hibernate & Wake-up feature"
description: "How to use the Hibernate and Wake-up feature to reduce costs for non-production Kubernetes clusters."
sidebar_label: "Hibernate & Wake-up feature"
sidebar_position: "23"
---

# Hibernate & Wake-up feature

Clusters are typically used 24/7 when running in a production environment. For clusters used in dev, test, staging, or demo environments, scaling down resources when not in use can save costs. However, manual scale-down can be time-consuming, so the Hibernate feature automates this process.

**When you use the Hibernate feature**, the cluster resources change as follows:
  1. Worker nodes (instances) are deleted.
  2. Pods move to Pending status.
  3. Services are preserved.
  4. Stateful storage components (PVCs, etc.) and states in etcd are also preserved.

**Wake-up** is the reverse of Hibernate — it restores the cluster to its state before it was hibernated.

You can use the Hibernate and Wake-up features on the **Portal** as follows:

## Hibernate

**Step 1:** From the menu, select **Kubernetes**. The **Kubernetes Management** page appears.
[![](/img/migrated/Picture1-2-60a2b2ae.png)](/img/migrated/Picture1-2-60a2b2ae.png)

**Step 2:** Click the **Hibernate** button to start the process.
[![](/img/migrated/Picture2-1-dfd066c0.png)](/img/migrated/Picture2-1-dfd066c0.png)

**Step 3:** Enter the cluster name to confirm and start the process.
[![](/img/migrated/Picture3-1-82ec1b38.png)](/img/migrated/Picture3-1-82ec1b38.png)

After the confirmation, the Hibernate process starts and the Portal status changes to _Hibernating (Running)_.
[![](/img/migrated/Picture4-1-951d4b79.png)](/img/migrated/Picture4-1-951d4b79.png)

When the process completes, the cluster status changes to _Succeeded (Hibernated)_, indicating a successful Hibernate.
[![](/img/migrated/Picture5-1-85b21a7a.png)](/img/migrated/Picture5-1-85b21a7a.png)

## Wake-up

For clusters showing _Succeeded (Hibernated)_ status, use the Wake-up feature to restore the cluster to its previous state.

**Step 1:** From the menu, select **Kubernetes**. The **Kubernetes Management** page appears.
[![](/img/migrated/Picture6-1-5cf5a6d0.png)](/img/migrated/Picture6-1-5cf5a6d0.png)

**Step 2:** Click the **Wakeup** button to start the process.
[![](/img/migrated/Picture7-1-3df9d5b9.png)](/img/migrated/Picture7-1-3df9d5b9.png)

**Step 3:** Enter the cluster name to confirm.
[![](/img/migrated/Picture8-1-03f0209f.png)](/img/migrated/Picture8-1-03f0209f.png)

After the confirmation, the Wake-up process starts and the Portal status changes to _Processing (Running)_.
[![](/img/migrated/Picture9-1-a91ef8d9.png)](/img/migrated/Picture9-1-a91ef8d9.png)

When the process completes, the cluster status changes to _Succeeded (Running)_, indicating a successful Wake-up.
[![](/img/migrated/Picture10-1-9430756e.png)](/img/migrated/Picture10-1-9430756e.png)

**Notes:**
- Before starting the Hibernate process, ensure all pods in the cluster are in _Running_ status and other resources are working normally (LoadBalancer services, ingress, Persistent Volumes, secrets, configmaps, etc.).
- While the cluster is hibernated, if you deploy additional deployments, the new resources will remain in _Pending_ status until you select Wake-up for the cluster.
