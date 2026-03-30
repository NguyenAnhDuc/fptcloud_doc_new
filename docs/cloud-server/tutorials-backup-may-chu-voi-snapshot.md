---
id: "tutorials-backup-may-chu-voi-snapshot"
title: "Backup VM with Snapshot"
description: "Create, manage, and restore Snapshots for virtual machines and Storage Disks on FPT Cloud Server."
sidebar_label: "Backup VM with Snapshot"
sidebar_position: 18
---

# Backup VM with Snapshot

A Snapshot captures the state of a virtual machine at a specific point in time — helping you restore the system when encountering issues or data loss.

:::tip
For periodic backups at multiple points in time, consider the FPT Backup service.
:::

## Snapshot from VM

### Create a Snapshot

1. In **Instance Management**, select **Actions** → **Snapshot** → **Create snapshot**.

   [![Actions menu with Create snapshot option](/img/migrated/image-1712656669900-805aff75.png)](/img/migrated/image-1712656669900-805aff75.png)

2. The **Create instance snapshot** dialog appears. Click **Create snapshot**.

   [![Create instance snapshot dialog](/img/migrated/image-1734595203830-4982aec6.png)](/img/migrated/image-1734595203830-4982aec6.png)

The Snapshot appears on the **Snapshots** screen.

[![Snapshot created successfully](/img/migrated/image-1734595376651-974ca75e.png)](/img/migrated/image-1734595376651-974ca75e.png)

### Create a VM from Snapshot

1. In **Snapshot**, select **Actions** → **Launch as Instance**.

   [![Actions menu with Launch as Instance option](/img/migrated/image-1734595412087-f0bc6c13.png)](/img/migrated/image-1734595412087-f0bc6c13.png)

2. Configure and click **Create** in the **Create instance** dialog.

   [![Create instance from Snapshot dialog](/img/migrated/image-1712653436496-23f6c725.png)](/img/migrated/image-1712653436496-23f6c725.png)

The new VM appears in **Instance Management**.

[![VM created from Snapshot](/img/migrated/image-1734595491154-0444976f.png)](/img/migrated/image-1734595491154-0444976f.png)

### Delete a Snapshot

1. In **Snapshot**, select **Actions** → **Delete Image**.

   [![Actions menu with Delete Image option](/img/migrated/image-1734595518655-0f965a42.png)](/img/migrated/image-1734595518655-0f965a42.png)

2. Click **Delete snapshot** to confirm. Check **Delete all volume snapshots attached to this image** to also delete snapshots from attached storage disks.

   [![Delete Snapshot confirmation dialog](/img/migrated/image-1712653461557-c3a5551d.png)](/img/migrated/image-1712653461557-c3a5551d.png)

## Snapshot from Storage Disk

### Create a Snapshot

1. In **Storage Disk**, select **Actions** → **Snapshot** → **Create volume snapshot**.

   [![Actions menu with Create volume snapshot option](/img/migrated/image-1734595578696-e2a9d562.png)](/img/migrated/image-1734595578696-e2a9d562.png)

2. Click **Create volume snapshot**.

   [![Create volume snapshot dialog](/img/migrated/image-1744797304260-c56185cf.png)](/img/migrated/image-1744797304260-c56185cf.png)

The Snapshot appears in **Snapshots** under **Storage snapshot**.

[![Storage snapshot created](/img/migrated/image-1734595691770-9cda8337.png)](/img/migrated/image-1734595691770-9cda8337.png)

### Create Storage Disk from Snapshot

1. In **Snapshot**, select **Actions** → **Create storage disk**.

   [![Actions menu with Create storage disk option](/img/migrated/image-1734595729279-9bdc6a8e.png)](/img/migrated/image-1734595729279-9bdc6a8e.png)

2. Click **Create storage disk**.

   [![Create storage disk dialog](/img/migrated/image-1712653495975-03166cff.png)](/img/migrated/image-1712653495975-03166cff.png)

### Delete Storage Disk Snapshot

1. In **Snapshot**, select **Actions** → **Delete Snapshot**.

   [![Actions menu with Delete Snapshot option](/img/migrated/image-1734595780158-c6454938.png)](/img/migrated/image-1734595780158-c6454938.png)

2. Click **Delete snapshot**.

   [![Delete Storage snapshot confirmation](/img/migrated/image-1712653549274-050d524e.png)](/img/migrated/image-1712653549274-050d524e.png)

## Snapshot for Specific service

### Create a Snapshot

1. In **Instance Management**, select **Actions** → **Create snapshot**.

   [![Actions menu with Create snapshot (Specific)](/img/migrated/image-1734595898541-1f53740c.png)](/img/migrated/image-1734595898541-1f53740c.png)

2. Click **Create** to confirm.

   [![Create Snapshot confirmation dialog](/img/migrated/image-1712818258855-797847d8.png)](/img/migrated/image-1712818258855-797847d8.png)

:::note
Each Instance can store only 1 Snapshot. A new Snapshot overwrites the previous one. The process takes approximately 30 minutes depending on the machine type and data.
:::

### Restore VM from Snapshot

1. In **Instance Management**, select **Actions** → **Restore snapshot**.

   [![Actions menu with Restore snapshot option](/img/migrated/image-1734596025787-1725e2ff.png)](/img/migrated/image-1734596025787-1725e2ff.png)

2. Click **Restore instance** to confirm.

   [![Restore confirmation dialog](/img/migrated/image-1712818286728-db082ce3.png)](/img/migrated/image-1712818286728-db082ce3.png)

:::warning
During restoration (approximately 30 minutes), the VM may be shut down and you cannot operate it until the process completes.
:::

### Delete Snapshot (Specific)

1. In **Instance Management**, select **Actions** → **Delete snapshot**.

   [![Actions menu with Delete snapshot option](/img/migrated/image-1734596064066-5bcf4544.png)](/img/migrated/image-1734596064066-5bcf4544.png)

2. Click **Delete snapshot**.

   [![Delete Snapshot confirmation dialog](/img/migrated/image-1712818777331-c575dc0c.png)](/img/migrated/image-1712818777331-c575dc0c.png)

:::danger
Deleted Snapshots cannot be recovered.
:::

## Next steps

- [Delete a virtual machine](./tutorials-xoa-may-ao.md)
