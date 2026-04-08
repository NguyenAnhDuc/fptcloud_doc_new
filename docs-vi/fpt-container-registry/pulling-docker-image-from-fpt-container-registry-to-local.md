---
id: "pulling-docker-image-from-fpt-container-registry-to-local"
title: "Pulling Docker Image From Fpt Container Registry To Local"
description: "**Step 1** : Click **Detail Repository** to view details of the image > Click on the **Copy Icon** to copy the pull imag"
sidebar_label: "Pulling Docker Image From Fpt Container Registry To Local"
sidebar_position: "7"
draft: true
---

# Pulling Docker Image From Fpt Container Registry To Local

**Step 1** : Click **Detail Repository** to view details of the image > Click on the **Copy Icon** to copy the pull image command:
[![](/img/migrated/image07-1-c1ad3acd.png)](/img/migrated/image07-1-c1ad3acd.png)
**Step 2** : On the CLI interface of Docker, use the command that you have copied to pull the image to local:
_Example:_

```
Copydocker pull registry.fke.fptcloud.com/77cbe8cc-16f4-471c-8755-a9482ca01baf/hello-world:latest
```
