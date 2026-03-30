---
id: "tags-snapshot"
slug: /tagging/tags-snapshot
title: "Manage tags for Snapshot"
description: "Assign and manage tags for Snapshot — during creation from an Instance or Storage Disk."
sidebar_label: "Manage tags for Snapshot"
sidebar_position: 9
---

# Manage tags for Snapshot

Assigning tags to Snapshots helps you categorize backups by project or purpose — making search and management easier.

## Assign tags when creating a Snapshot from an Instance

1. Select **Instance Management** from the menu, then click **Actions** → **Create snapshot**.

   [![Actions menu with Create snapshot option](/img/migrated/image-1721015609867-c4ddd33b.png)](/img/migrated/image-1721015609867-c4ddd33b.png)

2. In the **Create instance snapshot** dialog, select tags in the **Add tag (optional)** field.

   [![Create instance snapshot dialog with Add tag field](/img/migrated/image-1721015621343-b9f22c97.png)](/img/migrated/image-1721015621343-b9f22c97.png)

## Assign tags when creating a Snapshot from a Storage Disk

1. Select **Storage disk** from the menu, then click **Actions** → **Create volume snapshot**.

   [![Actions menu with Create volume snapshot option](/img/migrated/image-1721015651110-79c2804c.png)](/img/migrated/image-1721015651110-79c2804c.png)

2. In the **Create volume snapshot** dialog, select tags in the **Add tag (optional)** field.

   [![Create volume snapshot dialog with Add tag field](/img/migrated/image-1721015663094-733cc8b6.png)](/img/migrated/image-1721015663094-733cc8b6.png)

## Manage tags for an existing Snapshot

1. Select **Snapshot** from the menu. In the **Instance snapshot** tab, click **Manage tags**.

   [![Instance snapshot tab with Manage tags option](/img/migrated/image-1721015686871-371220cc.png)](/img/migrated/image-1721015686871-371220cc.png)

2. A dialog appears. Select tags to assign to the Snapshot.

   [![Manage tags dialog for Snapshot](/img/migrated/image-1721015699377-5c976a3c.png)](/img/migrated/image-1721015699377-5c976a3c.png)

3. To remove a tag, click the **x** next to the tag name. Click the **x** at the end of the list box to remove all tags at once. Click **Save** to confirm.

   [![Manage tags dialog with remove option](/img/migrated/image-1721015718376-1c3d39b9.png)](/img/migrated/image-1721015718376-1c3d39b9.png)

:::warning
When a Snapshot is deleted, the system automatically removes all associated tags and updates the tag list on the Tagging screen.
:::

## Next steps

- [Manage tags for Custom Image](./Manage%20tag%20to%20Custom%20image.md)
