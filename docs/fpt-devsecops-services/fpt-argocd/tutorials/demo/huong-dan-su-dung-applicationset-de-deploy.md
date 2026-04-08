---
id: "huong-dan-su-dung-applicationset-de-deploy"
title: "Deploy applications using ApplicationSet"
description: "How to use ApplicationSet to deploy applications via ArgoCD CLI"
sidebar_label: "Deploy using ApplicationSet"
sidebar_position: "49"
---

# Deploy applications using ApplicationSet

To use ApplicationSet-related features, use commands to deploy and check applications. Log in to the ArgoCD server using the CLI:

```bash
argocd login dashboard.argocd.cd.fke.fptcloud.com --grpc-web-root-path yk3n2ph2
```

## 1. Create applications using Git Generators

**Step 1:** Prepare the manifest using Git Directory Generator.

[![](/img/migrated/Picture86-1-29f58a8f.png)](/img/migrated/Picture86-1-29f58a8f.png)

**Step 2:** Use the CLI to apply the ApplicationSet:

```bash
argocd appset create applicationset.yaml
```

Result after running the CLI:

```
ApplicationSet 'color-applicaitonset' created
```

**Step 3:** Result after creating applications with ApplicationSet.

[![](/img/migrated/Picture87-1-daafd74f.png)](/img/migrated/Picture87-1-daafd74f.png)

List ApplicationSets after using the CLI to get the list:

```bash
argocd appset list
```

[![](/img/migrated/Picture88-1-bead1fd9.png)](/img/migrated/Picture88-1-bead1fd9.png)

## 2. Create applications using List Generator

**Step 1:** Prepare the manifest to deploy.

[![](/img/migrated/Picture89-1-6e77044f.png)](/img/migrated/Picture89-1-6e77044f.png)

Including these files:

[![](/img/migrated/Picture90-1-ac3063df.png)](/img/migrated/Picture90-1-ac3063df.png)

**Step 2:** Create applications using ApplicationSet via the CLI:

```bash
argocd appset create applicationset.yaml
```

**Step 3:** Result after creating the ApplicationSet:

[![](/img/migrated/Picture91-1-6e2e43ce.png)](/img/migrated/Picture91-1-6e2e43ce.png)

[![](/img/migrated/Picture92-1-74948904.png)](/img/migrated/Picture92-1-74948904.png)
