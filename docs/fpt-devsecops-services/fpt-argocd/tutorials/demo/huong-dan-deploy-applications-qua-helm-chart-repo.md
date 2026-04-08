---
id: "huong-dan-deploy-applications-qua-helm-chart-repo"
title: "Deploy applications via Helm chart repository"
description: "How to deploy applications in ArgoCD using a Helm chart repository"
sidebar_label: "Deploy via Helm chart repo"
sidebar_position: "47"
---

# Deploy applications via Helm chart repository

**Step 1:** Configure the Helm chart repository. For public Helm charts, repository configuration may not be needed. However, for private Helm charts, configure the Helm repo so ArgoCD can access the deployment repository.

Example: Add the xplat Helm repository to ArgoCD.

[![](/img/migrated/Picture17-3-cbd4241f.png)](/img/migrated/Picture17-3-cbd4241f.png)

Result after successfully configuring the repository:

[![](/img/migrated/Picture18-3-f2c9fb5e.png)](/img/migrated/Picture18-3-f2c9fb5e.png)

**Step 2:** Create an Application to deploy the cert-manager chart.

[![](/img/migrated/Picture19-3-47801cfa.png)](/img/migrated/Picture19-3-47801cfa.png)

[![](/img/migrated/Picture20-3-92fd4474.png)](/img/migrated/Picture20-3-92fd4474.png)

[![](/img/migrated/Picture21-3-59520a91.png)](/img/migrated/Picture21-3-59520a91.png)

Result after deploying the application:

[![](/img/migrated/Picture22-2-ef9ddebf.png)](/img/migrated/Picture22-2-ef9ddebf.png)

Verify the deployment result under the k8s cluster:

[![](/img/migrated/Picture23-2-b618fe2a.png)](/img/migrated/Picture23-2-b618fe2a.png)

:::note
When deploying applications using a Helm chart, ArgoCD retrieves the chart files and deploys them as manifests. Therefore, listing Helm charts under the k8s cluster will not show the deployed chart.
:::

[![](/img/migrated/Picture24-2-5310f476.png)](/img/migrated/Picture24-2-5310f476.png)
