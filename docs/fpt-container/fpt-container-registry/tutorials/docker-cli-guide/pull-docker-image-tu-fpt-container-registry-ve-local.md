---
id: "pull-docker-image-tu-fpt-container-registry-ve-local"
title: "Pull a Docker image from FPT Container Registry to local"
description: "Guide to pulling a Docker image from FPT Container Registry to your local machine."
sidebar_label: "Pull a Docker image from FPT Container Registry to local"
sidebar_position: "9"
---

# Pull a Docker image from FPT Container Registry to local

After pushing an image to the registry, you can pull it to any machine with access. Each pull counts against the **Pull-limit** of your current service plan.

1. On the **Repository** screen, click the image you want to pull to view its details.

   [![Image list in repository](/img/migrated/Picture13-2-f77f73c3.png)](/img/migrated/Picture13-2-f77f73c3.png)

2. Select **Detail Repository** to view image details. Click the **copy** icon to copy the pull command.

   FPT Cloud supports pulling by tag or by SHA:

   - Pull by SHA:

     [![Pull image by SHA](/img/migrated/Picture14-1-8f23c8c0.png)](/img/migrated/Picture14-1-8f23c8c0.png)

   - Pull by tag:

     [![Pull image by tag](/img/migrated/Picture15-1-783da3a0.png)](/img/migrated/Picture15-1-783da3a0.png)

   Example:

   ```bash
   docker pull registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind
   ```

3. Use the Docker CLI to pull the image to your local machine.

   [![Successful image pull result](/img/migrated/Picture16-1-000c1df3.png)](/img/migrated/Picture16-1-000c1df3.png)

   After each pull, the **Pull-limit** is updated:

   [![Pull-limit updated after pull](/img/migrated/Picture17-1-bc8321ee.png)](/img/migrated/Picture17-1-bc8321ee.png)
