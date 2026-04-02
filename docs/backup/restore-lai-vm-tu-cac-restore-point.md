---
id: "restore-lai-vm-tu-cac-restore-point"
title: "Restore a VM from Restore Points"
description: "How to restore a VM to a previous stable state using FPT Backup Restore Points."
sidebar_label: "Restore a VM from Restore Points"
sidebar_position: "4"
---
# Restore a VM from Restore Points

VMs protected by a **Backup Job** have restore points created periodically at times when the system is running stably. If the system encounters a problem, you only need to restore the VM to the most recent stable point.

To restore a VM from Restore Points, follow these steps:

**Step 1:** In the menu, select **Backup & Recovery** > **Backup & Recovery Management**. Open the **Restore** tab. This displays the VMs currently being protected and the number of Restore Points successfully created previously.

**Step 2:** In the **Action** section of the VM to restore, select **Restore**.

**Step 3:** The **Instance restore** popup will display important information such as the **Instance name** and the list of **Restore Points** for that VM. Select the **Restore Point** to restore to and click **Restore Instance**.

**Step 4:** A warning dialog will appear, asking the user to confirm. Select **Restore Instance** to proceed with restoring the VM.
