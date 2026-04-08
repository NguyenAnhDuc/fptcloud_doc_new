---
id: "kiem-tra-thong-tin-backup-va-restore-cua-vm"
title: "Check VM Backup and Restore Information"
description: "How to check the backup and restore status of a VM from the VM administration interface on FPT Portal."
sidebar_label: "Check VM Backup and Restore Information"
sidebar_position: "7"
---

# Check VM Backup and Restore Information

## Check VM Backup and Restore Status
In addition to the general statistics in **Backup & Recovery Management**, **FPT Portal** also supports viewing the backup and restore status of each VM in that VM's administration interface.

### Step 1: Access the VM administration interface
  1. In the menu, select **Compute Engine** > **Instance Management**.
  2. Select the VM to check.

### Step 2: Check the Backups tab
  1. If the VM is protected by a **Backup Job**, a **Backups** option will be available.
  2. Select the **Backups** tab to view the status of the **Backup Job** and the list of Restore Points.

### Notes:
  * The Backups tab is only displayed when the VM is protected by a Backup Job.
  * If you delete a Backup Job, the list of Restore Points and other information will also be removed from the system.
