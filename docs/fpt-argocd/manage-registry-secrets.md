---
id: "manage-registry-secrets"
title: "Manage registry secrets"
description: "Guide to creating, updating, and deleting registry secrets for internal container registry authentication"
sidebar_label: "Manage registry secrets"
sidebar_position: 11
---

# Manage registry secrets

When using an internal container registry, ArgoCD Image Updater needs to authenticate with the registry. FPT ArgoCD supports creating registry secrets for this authentication.

## A. Create a new registry secret

1. On the **Image Updater** > **Add Secret Registry** screen, add a new secret.

[![](/img/migrated/Picture18-6-47f6f7db.png)](/img/migrated/Picture18-6-47f6f7db.png)

2. Enter the information to create the secret:
   - **Secret Name**: the name of the secret created under Kubernetes
   - **Registry**: the container registry URL, e.g. `registry.fke.fptcloud.com`
   - **Username**: username for registry authentication
   - **Password**: password for registry authentication

[![](/img/migrated/Picture19-6-0c5be7e2.png)](/img/migrated/Picture19-6-0c5be7e2.png)

3. The result after creation:

[![](/img/migrated/Picture20-5-2601ddf1.png)](/img/migrated/Picture20-5-2601ddf1.png)

## B. Update a registry secret

1. On the **Image Updater** screen, select the secret to update > **Edit**.

[![](/img/migrated/Picture21-5-7cc5090e.png)](/img/migrated/Picture21-5-7cc5090e.png)

2. Edit the Registry URL, username, or password.

[![](/img/migrated/Picture22-5-37658d1f.png)](/img/migrated/Picture22-5-37658d1f.png)

3. The result after updating:

[![](/img/migrated/Picture23-5-b0f811a6.png)](/img/migrated/Picture23-5-b0f811a6.png)

## C. Delete a registry secret

:::danger
This action cannot be undone.
:::

1. On the **Image Updater** screen, select the secret to delete > **Delete**.

[![](/img/migrated/Picture24-5-2aa73178.png)](/img/migrated/Picture24-5-2aa73178.png)

2. Enter the confirm text to confirm deletion.

[![](/img/migrated/Picture25-5-ac36cf52.png)](/img/migrated/Picture25-5-ac36cf52.png)

3. The result after deletion:

[![](/img/migrated/Picture26-5-29fe7ee5.png)](/img/migrated/Picture26-5-29fe7ee5.png)
