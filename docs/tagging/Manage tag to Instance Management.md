---
id: "tags-instance"
slug: /tagging/tags-instance
title: "Manage tags for Instance"
description: "Assign and manage tags for virtual machines — during creation or after the Instance has been provisioned."
sidebar_label: "Manage tags for Instance"
sidebar_position: 7
---

# Manage tags for Instance

Assigning tags to Instances helps you categorize virtual machines by environment, project, or owner — making search and cost tracking easier.

## Assign tags during Instance creation

1. Select **Instance Management** from the menu, then click **Create instance**.

   [![Instance Management screen with Create instance button](/img/migrated/image-1713112548052-b3294042.png)](/img/migrated/image-1713112548052-b3294042.png)

2. In the **Create instance** dialog, select tags in the **Add tag (optional)** field.

   [![Create instance dialog with Add tag field](/img/migrated/image-1713112563043-5f748c8d.png)](/img/migrated/image-1713112563043-5f748c8d.png)

3. Fill in the remaining information and click **Create**.

The assigned tags are displayed in the **Tags** field on the **Instance Management** screen.

[![Instance list with assigned tags](/img/migrated/image-1713112579862-79f3ce78.png)](/img/migrated/image-1713112579862-79f3ce78.png)

## Manage tags for an existing Instance

1. On the **Instance Management** screen, select a virtual machine, then click **Actions** → **Manage tags**.

   [![Actions menu with Manage tags option](/img/migrated/image-1713112615854-06a308da.png)](/img/migrated/image-1713112615854-06a308da.png)

2. A dialog appears. Select tags to assign to the virtual machine.

   [![Manage tags dialog for Instance](/img/migrated/image-1713112633880-63abac4e.png)](/img/migrated/image-1713112633880-63abac4e.png)

3. To remove a tag, click the **x** next to the tag name. Click the **x** at the end of the list box to remove all tags at once. Click **Save** to confirm.

   [![Manage tags dialog with remove option](/img/migrated/image-1713112743998-0feaeb65.png)](/img/migrated/image-1713112743998-0feaeb65.png)

:::warning
When a virtual machine is deleted, the system automatically removes all associated tags and updates the tag list on the Tagging screen.
:::

## Next steps

- [Manage tags for Storage Disk](./Manage%20tag%20to%20Storage%20disk.md)
