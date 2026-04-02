---
id: "get-cluster-access-information"
title: "Get cluster access information"
description: "Download the kubeconfig file and get the API URL for a Dedicated FPT Kubernetes Engine cluster."
sidebar_label: "Get cluster access information"
sidebar_position: 7
---

# Get cluster access information

**Step 1:** In the menu, select **Kubernetes** to open the **Kubernetes Management** page.

[![](/img/migrated/18-37f7fe3d.png)](/img/migrated/18-37f7fe3d.png)

**Step 2:** Select the cluster for which you want access information.

[![](/img/migrated/19-583eb55b.png)](/img/migrated/19-583eb55b.png)

**Step 3:** In **Essential Properties** > **Cluster Information** > **Configuration**, download the `.kubeconfig` file to access the cluster using kubectl or other tools.

[![](/img/migrated/20-ce28c757.png)](/img/migrated/20-ce28c757.png)

**Step 4:** In the **API** section, copy the API URL using the copy icon.

[![](/img/migrated/21-65accbad.png)](/img/migrated/21-65accbad.png)

FKE uses native Kubernetes, so you can interact with the cluster using kubectl, dashboard tools, and other standard Kubernetes tools.
