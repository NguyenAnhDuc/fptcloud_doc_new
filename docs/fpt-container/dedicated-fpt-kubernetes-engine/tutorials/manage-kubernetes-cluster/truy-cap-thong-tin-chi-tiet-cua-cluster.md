---
id: "truy-cap-thong-tin-chi-tiet-cua-cluster"
title: "Access cluster detail information"
description: "How to view detailed Kubernetes cluster information including cluster info, node pools, advanced settings, instances, and activity logs."
sidebar_label: "Access cluster detail information"
sidebar_position: "6"
---

# Access cluster detail information

**Step 1:** From the menu, select **Kubernetes**. The **Kubernetes Management** page appears.

[![](/img/migrated/Picture7-b69d141d.png)](/img/migrated/Picture7-b69d141d.png)

**Step 2:** Select the **Cluster** you want to view details for from the list.

[![](/img/migrated/Picture7-b69d141d.png)](/img/migrated/Picture7-b69d141d.png)

**Step 3:** Select a tab to view the corresponding information.

**3.1** **Essential Properties** tab: Displays Cluster Information, Load Balancer VIP, and API information.
- **Cluster Information**: Displays basic cluster information including Cluster ID, Version, Kubernetes config, Status, Public IP, and SSH Key.
- **Load Balancer VIP**: Displays the virtual IP of the LB used for K8s API and Ingress.
- **Dashboard & API**: Displays the API URL.

[![](/img/migrated/Picture9-8b474369.png)](/img/migrated/Picture9-8b474369.png)

**3.2** **Node Pools** tab: Displays node configuration information including **Master nodes** and **Worker nodes**.
- **Master Configuration**: Displays the quantity, CPU, Memory, and Disk configuration of Master Nodes.
- **Worker Configuration**: Displays the quantity, CPU, Memory, Disk, Storage Policy, and Auto Scale configuration of Worker Nodes.

[![](/img/migrated/Picture10-46417cf4.png)](/img/migrated/Picture10-46417cf4.png)

**3.3** **Advanced** tab: Displays advanced parameters of the Kubernetes cluster.
- **Advanced Configuration**: Displays advanced parameters (Nodes DNS, Pod Network, Service Network, Network Node Prefix, Max Pod Per Node, Enable Custom Script).
- **NFS Storage**: Displays the Enable/Disable status and disk capacity of NFS Storage.

[![](/img/migrated/Picture11-9d760e59.png)](/img/migrated/Picture11-9d760e59.png)

**3.4** **Instances** tab: Displays virtual machines belonging to the Kubernetes cluster, including **Master nodes** and **Worker nodes**.

[![](/img/migrated/Picture12-d65d4424.png)](/img/migrated/Picture12-d65d4424.png)

**3.5** **Activity Logs** tab: Records logs of **Actions** performed on the Kubernetes cluster.

[![](/img/migrated/Picture13-33e4e3ab.png)](/img/migrated/Picture13-33e4e3ab.png)
