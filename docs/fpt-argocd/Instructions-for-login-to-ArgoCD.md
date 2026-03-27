---
id: "Instructions-for-login-to-ArgoCD"
title: "Instructions For Login To Argocd"
description: "**Method 1** : Log in to **ArgoCD** with username/password:"
sidebar_label: "Instructions For Login To..."
sidebar_position: 19
---

# Instructions For Login To Argocd

**Method 1** : Log in to **ArgoCD** with username/password: 
[![](/img/migrated/Picture91-18eaa9cf.png)](/img/migrated/Picture91-18eaa9cf.png)
**Method 2** : Log in to **ArgoCD** with **ArgoCD CLI**
  * From **Documentations** > Download **CLI Tool**

[![](/img/migrated/Picture92-00a1a43b.png)](/img/migrated/Picture92-00a1a43b.png)
  * Setup **CLI Tool** : Login to created ArgoCD cluster: 

_For example: With url:<https://dashboard.argocd.cd.fke.fptcloud.com/fnl2dws3>_

```
Copyargocd login dashboard.argocd.cd.fke.fptcloud.com --grpc-web-root-path fnl2dws3 
```

Use the user/password on the FPT Cloud portal to log in
_For example:_
[![](/img/migrated/Picture93-4cb0c7c1.png)](/img/migrated/Picture93-4cb0c7c1.png)