---
id: "Connect-Kubernetes-Cluster-to-ArgoCD-Instance"
title: "Connect Kubernetes Cluster To Argocd Instance"
description: "In order to deploy an application via the provisioned **ArgoCD** instance, it is necessary to connect a K8s cluster wher"
sidebar_label: "Connect Kubernetes Cluster To..."
sidebar_position: "5"
---

# Connect Kubernetes Cluster To Argocd Instance

In order to deploy an application via the provisioned **ArgoCD** instance, it is necessary to connect a K8s cluster where the application would be deployed. FPT Cloud supports users to connect a new cluster via the interface instead of the ArgoCD CLI command.
**Step 1** : From the sidebar menu select **Cluster Management** > Select **Connect a Cluster**.
[![](/img/migrated/Picture62-af17013a.png)](/img/migrated/Picture62-af17013a.png)
**Step 2** : Fill in the information to connect to the Kubernetes cluster. This information will be taken in the _.kubeconfig_ file.
**Note: Information used to connect to the Kubernetes cluster requires administrator privileges.**
  * **Cluster Name (required)** : Enter a name for the cluster (can be named according to the usage environment, for example: dev env, prod env, staging env, qa env,...)
  * **Server (required)** : Information is taken from _.kubeconfig_ file (Kubernetes' API Server URL)

**_For example:<https://api.xxxxx.fke.fptcloud.com:6443>_**
**CA Data (required)** : **certificate-authority-data** field information in the _.kubeconfig_ file
**Bearer Token (required)** : Token field information in _.kubeconfig_ file
[![](/img/migrated/Picture63-5914837a.png)](/img/migrated/Picture63-5914837a.png)
**Step 3** : Click **Connect** to finalize.
**Step 4** : Verify the connected Kubernetes Cluster Status
  * K8s cluster information is managed through the FPT Cloud Portal:

[![](/img/migrated/Picture65-44537eba.png)](/img/migrated/Picture65-44537eba.png)
  * Verify the Kubernetes cluster information on the **ArgoCD** instance: Go to **ArgoCD** > **Settings** > **Clusters** :

[![](/img/migrated/Picture66-40c67a44.png)](/img/migrated/Picture66-40c67a44.png)
Cluster information has been configured to the **ArgoCD** instance:
[![](/img/migrated/Picture67-00694a7c.png)](/img/migrated/Picture67-00694a7c.png)
