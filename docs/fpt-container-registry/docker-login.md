---
id: "docker-login"
title: "Docker Login"
description: "**Step 1:** On the sidebar menu, choose **Container Registry** > click **Get Token** to get the authorization details: *"
sidebar_label: "Docker Login"
sidebar_position: 5
---

# Docker Login

**Step 1:** On the sidebar menu, choose **Container Registry** > click **Get Token** to get the authorization details: **Username** and **Secret Key**.
[![](/img/migrated/Userguide-Container-registry-2022-21-102-8462e0c1.png)](/img/migrated/Userguide-Container-registry-2022-21-102-8462e0c1.png)
**Step 2** : Hover on the **Help Icon** to get Docker Login, Tag, and Push image commands:
[![](/img/migrated/Userguide-Container-registry-2022-22-102-93753104.png)](/img/migrated/Userguide-Container-registry-2022-22-102-93753104.png)
**Step 3** : On the Docker CLI, use the _docker login_ command to sign in with the authorization details above.
_Example:_

```
Copydocker login registry.fke.fptcloud.com
```

[![](/img/migrated/Userguide-Container-registry-2022-10-df956b6d.png)](/img/migrated/Userguide-Container-registry-2022-10-df956b6d.png)
