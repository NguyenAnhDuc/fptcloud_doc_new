---
id: "manage-container-registry"
title: "Manage container registry"
description: "Guide to adding, updating, and deleting container registry configuration in Image Updater"
sidebar_label: "Manage container registry"
sidebar_position: 6
---

# Manage container registry

## A. Add a new container registry

1. On the **Image Updater** > **Container Registry** > **Add Container Registry** screen.

[![](/img/migrated/Picture27-5-327acd35.png)](/img/migrated/Picture27-5-327acd35.png)

2. Enter the container registry information:
   - **Name**: the container registry name, e.g. `My Custom Registry`
   - **Prefix**: the registry prefix, must match the DNS and be unique, e.g. `docker.io`
   - **API URL**: the docker registry API URL (http/https), e.g. `https://registry-1.docker.io`
   - **Default namespace**: the default namespace (especially for Docker Hub), e.g. `library`
   - **Credentials**: used to authenticate to the registry, e.g. `pullsecret:argocd-[argocd-id]/dockerhub-secret`
   - **Set Default**: if `true`, this registry is the default registry
   - **Set insecure**: used to disable TLS verification for the registry

[![](/img/migrated/Picture29-4-ff1fe795.png)](/img/migrated/Picture29-4-ff1fe795.png)

[![](/img/migrated/Picture1-6-f3ce82fa.png)](/img/migrated/Picture1-6-f3ce82fa.png)

3. The result after adding:

[![](/img/migrated/Picture30-4-214ebb11.png)](/img/migrated/Picture30-4-214ebb11.png)

## B. Update a container registry

1. On the **Image Updater** screen, select the **Container Registry** to update > **Edit**.

[![](/img/migrated/Picture31-4-35d409d0.png)](/img/migrated/Picture31-4-35d409d0.png)

2. Edit the configuration parameters such as Name, Prefix, Set Default, or Insecure.

:::note
Only one container registry can be set as default.
:::

[![](/img/migrated/Picture32-4-9f6e263c.png)](/img/migrated/Picture32-4-9f6e263c.png)

3. The result after updating:

[![](/img/migrated/Picture33-4-d0347843.png)](/img/migrated/Picture33-4-d0347843.png)

## C. Delete a container registry

:::danger
This action cannot be undone.
:::

1. On the **Image Updater** > **Container Registry** screen, select the registry to delete.

[![](/img/migrated/Picture34-4-b862bf01.png)](/img/migrated/Picture34-4-b862bf01.png)

2. Enter the confirm text to confirm.

[![](/img/migrated/Picture35-4-1e53ea64.png)](/img/migrated/Picture35-4-1e53ea64.png)

3. The result after deletion:

[![](/img/migrated/Picture36-4-b81d7d02.png)](/img/migrated/Picture36-4-b81d7d02.png)
