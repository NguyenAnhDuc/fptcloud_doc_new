---
id: "lay-thong-tin-truy-cap-cluster"
title: "Get cluster access information"
description: "How to retrieve access information for a Kubernetes cluster in Dedicated FPT Kubernetes Engine."
sidebar_label: "Get cluster access information"
sidebar_position: "7"
---

# Get cluster access information

1. From the menu, select **Kubernetes**. The **Kubernetes Management** page appears.
[![](/img/migrated/Picture16-21cbb44f.png)](/img/migrated/Picture16-21cbb44f.png)
2. Select the **Cluster** you want to view from the list.
[![](/img/migrated/Picture17-4140b996.png)](/img/migrated/Picture17-4140b996.png)
3. From the **Essential Properties** tab > **Cluster Information** > **Configuration**, you can download the kubeconfig file to log in to the cluster via kubectl.
[![](/img/migrated/Picture18-4fc4ea74.png)](/img/migrated/Picture18-4fc4ea74.png)
4. In the **API** section, the **FPT Portal** displays the full API URL information. Click the **copy icon** to copy it.
[![](/img/migrated/Picture19-4703b2d7.png)](/img/migrated/Picture19-4703b2d7.png)

Since FKE uses native Kubernetes, you can manage the cluster using standard tools such as kubectl, just like any regular Kubernetes cluster.
