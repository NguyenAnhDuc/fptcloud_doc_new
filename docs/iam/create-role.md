---
id: "create-role"
title: "Create a role and assign permissions"
description: "How to create a new Custom Role and assign permissions in FPT IAM."
sidebar_label: "Create a role and assign permissions"
sidebar_position: "6"
---

# Create a role and assign permissions

To create a new Custom Role, follow these steps.

1. Select **IAM** > **Roles**, then click **Create Role**.

[![](/img/migrated/image-1734344082428-bbf19de4.png)](/img/migrated/image-1734344082428-bbf19de4.png)

2. On the **Create role** page, enter the required information.

[![](/img/migrated/image-1734344107230-7ca36cf8.png)](/img/migrated/image-1734344107230-7ca36cf8.png)

   - **Name**: Role name (required, max 100 characters, only letters, numbers, underscores, hyphens, spaces, dots; must be unique).
   - **Description**: Role description (optional).
   - **Permissions**: Consists of 3 components — **Service type**, **Action**, **Resource**.

3. Select a **Service type** from the dropdown list.

[![](/img/migrated/image-1734344121975-fab6d10b.png)](/img/migrated/image-1734344121975-fab6d10b.png)

4. Select an **Action** from the list of actions for that service.

[![](/img/migrated/image-1734344178335-9d6630c8.png)](/img/migrated/image-1734344178335-9d6630c8.png)

5. Select the **Resource** that the user is allowed to perform the action on. Two options are available:
   - **All**: Grant permission for all resources on the tenant (all Projects and VPCs).

[![](/img/migrated/image-1734344193185-d4cff5ca.png)](/img/migrated/image-1734344193185-d4cff5ca.png)

   - **Specific**: Grant permission for specific resources. For virtual machines, permissions can be granted down to individual instances; for other services, permissions can be granted at the Project or VPC level.

[![](/img/migrated/image-1734344207802-f7293df7.png)](/img/migrated/image-1734344207802-f7293df7.png)

[![](/img/migrated/image-1734344228919-7517e5bf.png)](/img/migrated/image-1734344228919-7517e5bf.png)

6. Click **Create**. The system creates the role and displays the result.
