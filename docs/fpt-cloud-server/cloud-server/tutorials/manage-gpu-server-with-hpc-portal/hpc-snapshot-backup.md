---
id: "hpc-snapshot-backup"
title: "Snapshot Backup"
description: "Create a Snapshot backup of an image on HPC Portal to restore it in case of issues."
sidebar_label: "Snapshot Backup"
sidebar_position: 5
---

# Snapshot Backup

A Snapshot creates a backup of the disk, software, and applications on your machine — allowing you to restore at any time if something goes wrong.

:::warning
- You must shut down the machine before creating a Snapshot.
- Use this feature only after you have fully configured your environment.
- By default, each account can create 1 Snapshot. Contact your administrator to provision additional backup resources.
:::

## Create a Snapshot

1. Select **Action** → **Snapshot**.
2. In the **Snapshot image** dialog, click **Create snapshot**, enter the details, and click **Create**.

## Restore from Snapshot

Click **Restore** on the Snapshot you created.

:::note
To create a new Snapshot, select **Action** → **Remove** on the existing Snapshot first, then create a new one from scratch.
:::

## Next Steps

- [Hardware Fixation](/docs/fpt-cloud-server/cloud-server/tutorials/manage-gpu-server-with-hpc-portal/hpc-hardware-fixation)
