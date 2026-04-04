---
id: "add-cluster-to-argocd"
title: "Connect a Kubernetes cluster to ArgoCD"
description: "How to add a Kubernetes cluster to an ArgoCD instance to deploy applications"
sidebar_label: "Connect a Kubernetes cluster"
sidebar_position: "6"
---

# Connect a Kubernetes cluster to ArgoCD

To deploy applications via ArgoCD, connect the Kubernetes cluster where the application will run. FPT Cloud supports adding clusters through the Portal interface instead of using the ArgoCD CLI.

1. In the **Cluster Managements** menu, click **Connect a Cluster**.

[![](/img/migrated/Picture62-af17013a.png)](/img/migrated/Picture62-af17013a.png)

2. Enter the connection information for the Kubernetes cluster. This information is obtained from the kubeconfig file.

:::note
The information used to connect the Kubernetes cluster must have admin permissions.
:::

   - **Cluster Name** (required): Cluster name, e.g.: `dev-env`, `prod-env`, `staging-env`
   - **Server** (required): API server URL, obtained from the kubeconfig file. E.g.: `https://api.xxxxx.fke.fptcloud.com:6443`
   - **CA Data** (required): Value of the `certificate-authority-data` field in the kubeconfig file
   - **Bearer Token** (required): Value of the `token` field in the kubeconfig file

[![](/img/migrated/Picture63-5914837a.png)](/img/migrated/Picture63-5914837a.png)

3. Click **Connector** to complete the connection.

4. Verify the connected cluster information:
   - Information on the Portal:

[![](/img/migrated/Picture64-4e9e2808.png)](/img/migrated/Picture64-4e9e2808.png)

   - Check on the ArgoCD instance: go to **Settings** > **Clusters**:

[![](/img/migrated/Picture65-44537eba.png)](/img/migrated/Picture65-44537eba.png)

[![](/img/migrated/Picture66-40c67a44.png)](/img/migrated/Picture66-40c67a44.png)

   - Cluster information has been configured in the ArgoCD instance:

[![](/img/migrated/Picture67-00694a7c.png)](/img/migrated/Picture67-00694a7c.png)
