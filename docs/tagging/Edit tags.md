---
id: "edit-tag"
slug: /tagging/edit-tag
title: "Edit tags"
description: "Edit the Key, Value, or Color of a tag — or change the resource scope for Project/VPC level."
sidebar_label: "Edit tags"
sidebar_position: 4
---

# Edit tags

When you need to update an existing tag, you can edit its Key, Value, Color, or resource scope without deleting and recreating it.

## Edit a tag

1. Select **Tagging** from the menu, then at the tag you want to edit, select **Actions** → **Edit**.

   [![Actions menu with Edit option](/img/migrated/image-1721013046460-396040bf.png)](/img/migrated/image-1721013046460-396040bf.png)

2. Update the information and click **Save change** to apply.
   - **For users with tag permissions on Tenant**: tags currently applied across the Tenant (all VPCs) can be changed to specific VPCs by checking **Enable customize VPCs**.

   [![Edit tag dialog with Key, Value, and Color fields](/img/migrated/image-1721013074723-6ee1b3ee.png)](/img/migrated/image-1721013074723-6ee1b3ee.png)

:::note
- You cannot change the **Tag Level** after creation.
- The system does not yet support switching from specific VPCs back to Tenant-wide (all VPCs).
- When removing a VPC from the resource scope, the system automatically removes tags from resources in the removed VPCs.
:::

## Next steps

- [Delete a tag](./Delete%20Tag.md)
- [Manage tags for resources](./Manage%20tag%20to%20Resource.md)
