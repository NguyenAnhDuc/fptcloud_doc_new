---
id: "access-clusters-detail-information"
title: "Access cluster detail information"
description: "View detailed information about a Managed FPT Kubernetes Engine cluster."
sidebar_label: "Access cluster detail information"
sidebar_position: "6"
---

# Access cluster detail information

**Step 1:** In the menu, select **Kubernetes** to open the **Kubernetes Management** page. Choose the **Managed** tab and select the cluster you want to view.

[![](/img/migrated/8-c8cfd8da.png)](/img/migrated/8-c8cfd8da.png)

**Step 2:** The Overview tab shows the following cluster details:

[![](/img/migrated/9-316e6773.png)](/img/migrated/9-316e6773.png)

- **General information:** Basic cluster information including name, Kubernetes version, network, and status.
- **Worker groups config:** List of worker groups and their configuration (min/max nodes, CPU, memory, disk).
- **Advanced config:** Advanced Kubernetes cluster parameters (pod network, service network, etc.).
- **API:** API server URL.
- **Kubernetes config:** Download the `.kubeconfig` file for cluster access.
- **SSH key:** Download the SSH key file for accessing worker nodes.
