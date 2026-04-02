---
id: "clone-vm-tu-cac-restore-point"
title: "Create a New VM from Restore Points"
description: "How to create a new VM using data from an existing Restore Point on FPT Backup."
sidebar_label: "Create a New VM from Restore Points"
sidebar_position: "5"
---
# Create a New VM from Restore Points

FPT Backup supports not only restoring a VM from a Restore Point but also creating a new VM with data taken from a Restore Point. The newly created VM will have disk data identical to the original VM at the time the Restore Point was created, while allowing customization of RAM, CPU, and Network configuration. This makes it easy to quickly and simply create multiple secondary VMs from a primary VM.

## Detailed Instructions

### Step 1: Open Backup & Recovery Management
  1. Access the **FPT Backup** administration interface.
  2. Select **Backup & Recovery** > **Backup & Recovery Management** from the menu.
  3. Open the **Restore** tab to view the list of VMs currently protected and the number of successfully created Restore Points.

### Step 2: Select the VM to clone
  1. Identify the VM to clone from the displayed list.
  2. In the **Action** column for that VM, click **Restore Keep**.

### Step 3: Create a new VM from a Restore Point
  1. A popup named **New instance from restore point** will appear.
  2. Perform the following steps:
     * Select the **Restore Point** you want to use.
     * Enter a name for the new VM in the **New instance Name** field.
     * Click **Restore New Instance** to create the new VM.

### Step 4: Confirm and proceed with cloning
  1. A confirmation dialog will appear, asking you to review the information.
  2. Select **Restore Instance** to confirm and start the VM creation process.

## Important Notes
  * **New VM configuration:** After creation, you can customize the RAM, CPU, and Network of the new VM as needed.
  * **Completion time:** The process of creating a VM from a Restore Point typically takes a few minutes to a few hours, depending on the data volume.
