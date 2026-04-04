---
id: "huong-dan-deploy-mot-appliations-voi-kustomize-su-dung-build-options"
title: "Deploy an application with Kustomize using build options"
description: "How to deploy an application using Kustomize with build options in ArgoCD"
sidebar_label: "Deploy with Kustomize build options"
sidebar_position: "46"
---

# Deploy an application with Kustomize using build options

Similar to deploying an application with a manifest, deploying an application using Kustomize requires the same steps as the manifest deployment section in the Documentation.

**Step 1:** Prepare a repository to deploy the application. In this demo, several applications are deployed to Kubernetes, including: ingress controller components, argocd-rollout, and applications.

Specifically, the source code directory structure is as follows:

[![](/img/migrated/Picture93-2-e233954f.png)](/img/migrated/Picture93-2-e233954f.png)

Where:
  * Argo-rollout is deployed using Kustomize with Helm chart build options:

[![](/img/migrated/Picture94-2-2b0c49f1.png)](/img/migrated/Picture94-2-2b0c49f1.png)

  * Ingress-nginx and other components are deployed using Kustomize with manifest:

[![](/img/migrated/Picture95-2-0046a221.png)](/img/migrated/Picture95-2-0046a221.png)

**Step 2:** Configure Kustomize build options via the Portal interface as described in the Documentation.

:::warning
If build options have not been configured, creating applications will result in an error.
:::

[![](/img/migrated/Picture96-2-b42ada9b.png)](/img/migrated/Picture96-2-b42ada9b.png)

**Step 3:** Deploy applications via ArgoCD. Create Applications the same way as described in the manifest deployment section of the Documentation. However, for applications deployed with Kustomize and Helm chart, additional information must be configured as follows:

[![](/img/migrated/Picture97-2-9d3a59cd.png)](/img/migrated/Picture97-2-9d3a59cd.png)

[![](/img/migrated/Picture98-2-ff0c9a53.png)](/img/migrated/Picture98-2-ff0c9a53.png)

Applications after successful deployment:

[![](/img/migrated/Picture99-2-1f7a4254.png)](/img/migrated/Picture99-2-1f7a4254.png)
