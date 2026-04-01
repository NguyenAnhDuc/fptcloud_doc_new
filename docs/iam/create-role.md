---
id: create-role
title: Create a role and assign permissions
description: Create a new custom role and assign permissions in FPT IAM.
sidebar_label: Create a role and assign permissions
sidebar_position: 6
---

# Create a role and assign permissions

1. From the menu, select **IAM** > **Roles**, then click **Create Role**.

   [![](/img/migrated/image-1734344082428-bbf19de4.png)](/img/migrated/image-1734344082428-bbf19de4.png)

2. On the **Create Role** page, enter the required information:

   [![](/img/migrated/image-1734344107230-7ca36cf8.png)](/img/migrated/image-1734344107230-7ca36cf8.png)

   - **Name**: Enter a role name (required, up to 100 characters; letters, numbers, underscores, hyphens, spaces, and dots; must be unique).
   - **Description**: Optional description of the role.
   - **Permissions**: Configured through three components:
     - **Service Type**: A list of system services (e.g., compute, storage, networking).
     - **Action**: Actions available for the selected service (e.g., Create Instance, Edit Instance, Delete Instance).
     - **Resource**: The resources the user is authorized to interact with.

3. Select a **Service Type** from the dropdown list.

   [![](/img/migrated/image-1734344121975-fab6d10b.png)](/img/migrated/image-1734344121975-fab6d10b.png)

4. Select **Actions** for that service type.

   [![](/img/migrated/image-1734344178335-9d6630c8.png)](/img/migrated/image-1734344178335-9d6630c8.png)

5. Select the resource scope for the chosen actions:

   - **All**: Assign permissions to all resources within the tenant (all Projects and VPCs).

     [![](/img/migrated/image-1734344193185-d4cff5ca.png)](/img/migrated/image-1734344193185-d4cff5ca.png)

   - **Specific**: Assign permissions to specific resources.
     - For virtual machine services: assign to individual VMs.
     - For other services: assign at the Project or VPC level.

     [![](/img/migrated/image-1734344207802-f7293df7.png)](/img/migrated/image-1734344207802-f7293df7.png)
     [![](/img/migrated/image-1734344228919-7517e5bf.png)](/img/migrated/image-1734344228919-7517e5bf.png)

6. Click **Create**. The system processes the request and displays the result.
