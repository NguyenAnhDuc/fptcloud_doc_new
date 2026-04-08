---
id: "block-storage"
title: "Block Storage"
description: "Block Storage trên GPU Virtual Machine."
sidebar_label: "Block Storage"
sidebar_position: "6"
---

# Block Storage

### Overview
**Block Storage** is a service that provides block-based storage volumes for **GPU Virtual Machines (VMs)**. Each storage disk behaves like a physical hard drive when attached to a VM, supporting fast, consistent, and high-throughput data access. 
Compared to local NVMe storage, Block storage offers greater durability, scalability, and persistence, ensuring that data remains available even when a VM is deleted or stopped. 
There are two types of Block Storage disks: 
  * **Root disk:** serves as the primary system disk of a VM, containing the OS and essential system files required for boot and runtime. It is automatically created along with the VM during provisioning. 
  * **External disk:** is an independent data disk used to expand a VM's storage capacity. External disks can be detached from one VM and reattached to another, allowing flexible data reuse across workloads. 

To access this service, go to **Main Menu > Compute Engine > Storage disks**. 
From this page, users can view a list of all Storage Disks created within the VPC, along with key details such as **Name** , **Tags** , **Storage type** , **Storage policy** , **Size** , **Created At** (creation date), and **Attached** (associated virtual machine). 

### Create Storage Disks
To create a Storage disk in FPT Cloud, first identify the type of disk you need: 
  * **Root disk** is automatically created along with the virtual machine. References: [Create a GPU VM](/ja/docs/gpu-virtual-machine-en/)/
  * **External disk** can be created independently and attached to a virtual machine later. 

You can create an External disk using either of the following methods: 

#### Option 1: Create an External disk from a Virtual machine detail page
**1. Access the Storage section:**
  * From the main menu, go to **Compute Engine > Instance management**. 
  * Select the virtual machine you want to add external storage to from the list, then click **Storage tab**. 
  * Click **Create disk**. 

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-1.png)](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-1.png)
**2. Enter the required configuration:**
  * **Storage policy:** Select the storage type or performance tier. 
  * **Size:** Define the storage capacity. 

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-2.png)](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-2.png)
**3. Create the disk:**
  * Click **Create disk**. 
  * The system will initialize the new disk and notify you upon completion. 
  * Once successful, the new External disk will appear in the **Storage** tab. 

#### Option 2: Create an External disk from the Storage disks page
**1. Access the Storage disks page:**
  * From the main menu, go to **Compute Engine > Storage disks**. 
  * Click **Create storage**. 

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-2.png)](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-2.png)
**2. Enter the required configuration:**
  * **Name:** Specify the storage disk name. 
  * **Type:** Choose _General_ to create a new empty disk or _Snapshot_ to restore from an existing snapshot. 
  * **Storage policy:** Select the storage type or performance tier. 
  * **Size:** Define the storage capacity. 
  * **Applied instance (optional):** Choose a VM to attach the disk to (can be done later). 

[![Alt text](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-4.png)](https://fptcloud.com/wp-content/uploads/2025/03/Block-Storage-4.png)
**3. Create the disk:**
  * Click **Create storage disk**. 
  * The system will initialize the new disk and notify you upon completion. 
  * Once successful, the new External disk will appear in the **Storage disks** page. 

### Attach External Disks to GPU VMs
After creation, if an External disk is not yet attached to any virtual machine, you can manually attach it to enable usage. 
Storage disks are compatible with all OSs supported on FPT Cloud. 
**1.** Select the External disk you want to attach. Then click **Actions > Attach**. 
[![Alt text](/img/migrated/Block-Storage-5-4183e31d.png)](/img/migrated/Block-Storage-5-4183e31d.png)
**2.** Choose the target virtual machine from the popup window and click **Attach storage disk**. 
[![Alt text](/img/migrated/Block-Storage-6-216f440e.png)](/img/migrated/Block-Storage-6-216f440e.png)
Note:
  * Each Storage disk can only be attached to **one virtual machine** at a time. 
  * For **Windows virtual machines** , additional configuration steps are required before the new disk becomes usable. 

### Detach External Disks from GPU VMs
You can detach an External disk from a virtual machine when it is no longer needed. 
After detachment, all data on the disk remains intact, and the disk can be reattached to another virtual machine at any time. 
**1.** Select the External disk you want to detach from the list, then click **Actions > Detach**. 
[![Alt text](/img/migrated/Block-Storage-7-408bd268.png)](/img/migrated/Block-Storage-7-408bd268.png)
**2.** Review the confirmation popup, then click **Detach** to confirm. 
[![Alt text](/img/migrated/Block-Storage-8-02444235.png)](/img/migrated/Block-Storage-8-02444235.png)

### Edit Storage Disks
You can edit the details of a Storage disk when it is **not attached** to any virtual machine. 
**1.** Select the Storage disk you want to modify from the list, then click **Actions > Edit**. 
[![Alt text](/img/migrated/Block-Storage-9-1c3dd2e2.png)](/img/migrated/Block-Storage-9-1c3dd2e2.png)
**2.** In the **Edit** popup, update the necessary information, then click **Edit root disk / Edit storage disk** to save changes. 
  * **Name:** the name of the storage disk. 
  * **Storage policy:** the storage type or performance tier. 
  * **Size:** the capacity of the storage disk. 

Note: The new size must be greater than the current size — reducing disk size is not supported. 
[![Alt text](/img/migrated/Block-Storage-10-7f0b7d59.png)](/img/migrated/Block-Storage-10-7f0b7d59.png)

### Create Volume Snapshots
**1.** Select the Storage disk you want to back up from the list, then click **Actions > Create volume snapshots**. 
[![Alt text](/img/migrated/Block-Storage-11-577334e5.png)](/img/migrated/Block-Storage-11-577334e5.png)
**2.** In the **Create volume snapshot** pop-up, update the necessary information, then click **Create volume snapshot**. 
  * **Snapshot name:** the name for the snapshot. 
  * **Add tag (optional):** tags for the snapshot. 

Note:
  * The snapshot will contain data from the selected storage disk. 
  * Creating a snapshot from an attached volume may cause data inconsistency in some cases. It’s recommended to **detach the disk or stop the VM** before taking a snapshot for critical workloads. 
  * Snapshots are stored in the **Snapshot section** and can be used to create new disks or restore data later. 

[![Alt text](/img/migrated/Block-Storage-12-bdf7bb4f.png)](/img/migrated/Block-Storage-12-bdf7bb4f.png)

### Delete Storage Disk
A Storage disk can be automatically or manually deleted depending on its type and attachment status. 
  * **Root disk:** is automatically deleted together with the virtual machine it is attached to. No manual action is required. 
  * **External disk:** is not deleted when the virtual machine it is attached to is removed. The disk remains available in **Storage disks** and can be reattached to another VM as needed. 

You can also manually delete an External disk at any time to avoid additional storage costs by following these steps: 
Note:
  * Only **detached External disks** (not attached to any instance) can be deleted. 
  * Once deleted, all data on the disk **cannot be recovered**. Please proceed with caution. 

**1.** Select the External disk you want to delete from the list, then click **Actions > Delete**. 
[![Alt text](/img/migrated/Block-Storage-13-212316cb.png)](/img/migrated/Block-Storage-13-212316cb.png)
**2.** Review the warning message in the confirmation pop-up and click **Delete storage disk** to confirm. 
[![Alt text](/img/migrated/Block-Storage-14-07b3784a.png)](/img/migrated/Block-Storage-14-07b3784a.png)
The External disk will be permanently removed from your VPC.
