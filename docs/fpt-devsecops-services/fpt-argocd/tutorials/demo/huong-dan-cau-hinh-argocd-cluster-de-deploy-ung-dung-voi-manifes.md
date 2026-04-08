---
id: "huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes"
title: "Deploy applications with manifest"
description: "How to configure an ArgoCD cluster to deploy applications using manifest files"
sidebar_label: "Deploy applications with manifest"
sidebar_position: "44"
---

# Deploy applications with manifest

**Step 1:** Add the cluster (this step is covered in the documentation).

**Step 2:** Prepare the repository containing the manifest to deploy the application.

**Example:** Use a manifest to deploy an application with a deployment and service file as follows:

[![](/img/migrated/Picture75-2-31e0e130.png)](/img/migrated/Picture75-2-31e0e130.png)

[![](/img/migrated/Picture76-2-2d55c192.png)](/img/migrated/Picture76-2-2d55c192.png)

**Step 3:** Configure the repository.

  * Go to **Settings** > **Repository**:

[![](/img/migrated/Picture77-2-25744da2.png)](/img/migrated/Picture77-2-25744da2.png)

  * Add a new repository:

[![](/img/migrated/Picture78-2-548ab240.png)](/img/migrated/Picture78-2-548ab240.png)

  * Verify the repository status added to ArgoCD:

[![](/img/migrated/Picture79-2-5cfd1e45.png)](/img/migrated/Picture79-2-5cfd1e45.png)

**Step 4:** Create an Application to deploy the application.

  * Go to **Application** > **NEW APP**:

[![](/img/migrated/Picture80-2-9e02e9e0.png)](/img/migrated/Picture80-2-9e02e9e0.png)

  * Enter information to create the Application:

[![](/img/migrated/Picture81-2-9a2e22b5.png)](/img/migrated/Picture81-2-9a2e22b5.png)

[![](/img/migrated/Picture82-2-426ba565.png)](/img/migrated/Picture82-2-426ba565.png)

  * Click **Create** to create the **Application**.

Result after creating the Application:

[![](/img/migrated/Picture83-2-d51b08f7.png)](/img/migrated/Picture83-2-d51b08f7.png)
