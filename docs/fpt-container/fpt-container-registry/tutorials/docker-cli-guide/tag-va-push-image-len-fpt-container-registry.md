---
id: "tag-va-push-image-len-fpt-container-registry"
title: "Tag and push an image to FPT Container Registry"
description: "Guide to tagging and pushing a Docker image from local to FPT Container Registry."
sidebar_label: "Tag and push an image to FPT Container Registry"
sidebar_position: "8"
---

# Tag and push an image to FPT Container Registry

After logging in successfully, you need to tag your local image with the FPT Container Registry URI before pushing. This tells Docker the destination when performing the push.

1. Tag the local image with the FPT Container Registry URI:

   ```bash
   docker tag SOURCE_IMAGE[:TAG] registry.fke.fptcloud.com/<registry-id>/REPOSITORY[:TAG]
   ```

   The `<registry-id>` will be auto-filled if you copy the command from the FPT Portal.

   Example:

   ```bash
   docker tag docker:20.10.12-dind registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind
   ```

2. Push the image to FPT Container Registry:

   ```bash
   docker push registry.fke.fptcloud.com/<registry-id>/REPOSITORY[:TAG]
   ```

   Example:

   ```bash
   docker push registry.fke.fptcloud.com/088b6c2e-7fb9-4fd7-b906-779e99c63e32/docker:20.10.12-dind
   ```

3. Verify the image push result on the Portal.

   [![Successful image push result](/img/migrated/Picture11-1-9de7f6f9.png)](/img/migrated/Picture11-1-9de7f6f9.png)

   [![Image list after push](/img/migrated/Picture12-2-6e60be56.png)](/img/migrated/Picture12-2-6e60be56.png)
