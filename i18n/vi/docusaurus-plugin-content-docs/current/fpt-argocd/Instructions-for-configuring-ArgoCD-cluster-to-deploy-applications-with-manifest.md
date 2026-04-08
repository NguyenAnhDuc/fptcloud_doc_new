---
id: "Instructions-for-configuring-ArgoCD-cluster-to-deploy-applications-with-manifest"
title: "Instructions For Configuring Argocd Cluster To Deploy Applications With Manifest"
description: "**Step 1** : [Add Cluster to ArgoCD](./add-cluster-toi-argocd.md)"
sidebar_label: "Instructions For Configuring Argocd..."
sidebar_position: "20"
draft: true
---

# Instructions For Configuring Argocd Cluster To Deploy Applications With Manifest

**Step 1** : [Add Cluster to ArgoCD](./add-cluster-toi-argocd.md)
**Step 2** : Prepare the **Repository** containing the manifest to deploy the application 
_For example: Use a manifest to deploy an application with deployment and service files as follows_ :
[![](/img/migrated/Picture94-b75f85dd.png)](/img/migrated/Picture94-b75f85dd.png)
[![](/img/migrated/Picture95-8987ae9b.png)](/img/migrated/Picture95-8987ae9b.png)
**Step 3** : Configure **Repository**
  * Navigate to **Settings** > **Repository** :

[![](/img/migrated/Picture96-58356792.png)](/img/migrated/Picture96-58356792.png)
  * Create a new **Repository**

[![](/img/migrated/Picture97-20eb5978.png)](/img/migrated/Picture97-20eb5978.png)
Check the status of the added **Repository** in ArgoCD:
[![](/img/migrated/Picture98-a13b1d17.png)](/img/migrated/Picture98-a13b1d17.png)
**Step 4** : Create an **Applications** to deploy the application 
  * Navigate to **Applications** > **NEW APP**

[![](/img/migrated/Picture99-6b06ad5f.png)](/img/migrated/Picture99-6b06ad5f.png)
  * Fill out the information to create the **Applications**

[![](/img/migrated/Picture100-32e6b3b7.png)](/img/migrated/Picture100-32e6b3b7.png)
[![](/img/migrated/Picture101-c93bae8a.png)](/img/migrated/Picture101-c93bae8a.png)
  * Click **Create** to create the **Applications**

Result after creating the **Applications**
[![](/img/migrated/Picture102-a48cd3cf.png)](/img/migrated/Picture102-a48cd3cf.png)
