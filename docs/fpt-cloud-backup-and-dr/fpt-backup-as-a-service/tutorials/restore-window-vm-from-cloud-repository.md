---
id: "restore-window-vm-from-cloud-repository"
title: "Restore a Windows VM from cloud repository"
description: "Steps to perform a bare metal restore of a Windows VM from the FPT Cloud BaaS repository."
sidebar_label: "Restore Windows VM from cloud repository"
sidebar_position: "7"
---

# Restore a Windows VM from cloud repository

:::note
The restore VM must have the same number of disks and disk capacity as the original.
:::

1. Attach the Veeam Recovery Media ISO file and boot the VM from it. After the VM boots successfully, select **Bare Metal Recovery**.

2. Select **Network storage**, then click **Next**. Select **Veeam Cloud Connect repository**.

3. Enter the BaaS gateway URL:
   - Ho Chi Minh City: `baas-sgn-gw.fptcloud.com`
   - Hanoi: `baas-han-gw.fptcloud.com`

4. Enter your username and password, then press **Enter** to continue.

5. Select the VM to restore and the desired restore point.

6. Select **Manual restore** to map the disks, then restore the corresponding disks.

7. Review the configuration and click **Restore** to begin restoring your VM.
