---
id: "tags-floating-ip"
slug: /tagging/tags-floating-ip
title: "Manage tags for Floating IP"
description: "Assign and manage tags for Floating IP — during allocation or after the IP has been created."
sidebar_label: "Manage tags for Floating IP"
sidebar_position: 11
---

# Manage tags for Floating IP

Assigning tags to Floating IPs helps you categorize IP addresses by project or environment — making network management and cost tracking easier.

## Assign tags when allocating a Floating IP

1. Select **Floating IP** from the menu, then click **Allocate floating IP**.

   [![Floating IP screen with Allocate floating IP button](/img/migrated/image-1721033013519-4b52f8a3.png)](/img/migrated/image-1721033013519-4b52f8a3.png)

2. In the **Allocate floating IP** dialog, select tags in the **Add tag (optional)** field.

   [![Allocate floating IP dialog with Add tag field](/img/migrated/image-1721033024980-d3da2516.png)](/img/migrated/image-1721033024980-d3da2516.png)

3. Fill in the remaining information and click **Allocate floating IP**.

The assigned tags are displayed in the **Tags** field on the **Floating IP** screen.

[![Floating IP list with assigned tags](/img/migrated/image-1721033045955-e90a291a.png)](/img/migrated/image-1721033045955-e90a291a.png)

## Manage tags for an existing Floating IP

1. Select **Floating IP** from the menu, then click **Actions** → **Manage tags**.

   [![Actions menu with Manage tags option for Floating IP](/img/migrated/image-1721033062003-848e2fa0.png)](/img/migrated/image-1721033062003-848e2fa0.png)

2. A dialog appears. Select tags to assign to the Floating IP.

   [![Manage tags dialog for Floating IP](/img/migrated/image-1721033073805-c26dcd82.png)](/img/migrated/image-1721033073805-c26dcd82.png)

3. To remove a tag, click the **x** next to the tag name. Click the **x** at the end of the list box to remove all tags at once. Click **Save** to confirm.

   [![Manage tags dialog with remove option](/img/migrated/image-1721033085127-782fa93d.png)](/img/migrated/image-1721033085127-782fa93d.png)

:::warning
When a Floating IP is deleted, the system automatically removes all associated tags and updates the tag list on the Tagging screen.
:::

## Next steps

- [Manage tags for Subnet](./Manage%20tag%20to%20Subnet.md)
