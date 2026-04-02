---
id: "change-removable-drive-capacity"
title: "Change Storage Disk Capacity"
description: "How to change the policy and capacity of an existing storage disk on FPT Cloud Portal."
sidebar_label: "Change Storage Disk Capacity"
sidebar_position: 13
---

# Change Storage Disk Capacity

You can change the policy and capacity of an existing storage disk.

:::note
- You must have at least 50,000 VND plus the cost of one hour of storage usage to make changes.
- The system will immediately deduct one hour of storage usage cost based on the new configuration when the change is applied.
- Storage disks not attached to a virtual machine cannot change storage policy.
:::

1. Go to the **Compute Engine – Storage Disks** page.

2. On the disk you want to change, click **Action** and select **Edit**.

[![Select Edit on the storage disk](/img/migrated/image-1694073979781-7ec29458.png)](/img/migrated/image-1694073979781-7ec29458.png)

3. Select the new policy and capacity. The system estimates the hourly usage cost for your reference.

[![Select new disk configuration](/img/migrated/image-1694073989051-4fa42062.png)](/img/migrated/image-1694073989051-4fa42062.png)

4. Click **Edit storage disk**.
   - If the information is valid, the system updates the storage and redirects you to the Storage Disks page.
   - If you have reached your resource limit, the system displays an error message and prevents the change.

[![Storage disk capacity change result](/img/migrated/image-1694073998971-887af5ca.png)](/img/migrated/image-1694073998971-887af5ca.png)

[![Cost deducted after the change](/img/migrated/image-1694074005987-1a09c503.png)](/img/migrated/image-1694074005987-1a09c503.png)
