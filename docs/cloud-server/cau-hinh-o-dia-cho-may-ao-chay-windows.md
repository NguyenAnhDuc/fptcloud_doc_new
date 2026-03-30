---
id: "cau-hinh-o-dia-cho-may-ao-chay-windows"
title: "Configure a Disk on a Windows Instance"
description: "Configure a Storage Disk after attaching it to a Windows Instance."
sidebar_label: "Configure a Disk on a Windows Instance"
sidebar_position: 37
---

# Configure a Disk on a Windows Instance

After attaching a Storage Disk through FPT Cloud Portal, Linux Instances automatically detect the new disk. For Windows Instances, you need to configure it manually in Disk Management.

## Configure the Disk

1. Connect to your Windows Instance.

2. Open **Disk Management**: press **Windows + R**, type `diskmgmt.msc`, and press **Enter**.

   [![Opening Disk Management](/img/migrated/Userguide-FPT-Cloud-Server-2022-62-12b5cc80.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-62-12b5cc80.png)

3. Disk Management shows the new disk with an **Offline** status.

   [![New disk in Offline status](/img/migrated/Userguide-FPT-Cloud-Server-2022-63-8bb2c4a2.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-63-8bb2c4a2.png)

4. Right-click the disk icon and select **Online**.

   [![Selecting Online for the disk](/img/migrated/Userguide-FPT-Cloud-Server-2022-64-9b1d70d8.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-64-9b1d70d8.png)

5. The disk changes to **Online** and **Not Initialized**. Right-click it and select **Initialize Disk**.

   [![Selecting Initialize Disk](/img/migrated/Userguide-FPT-Cloud-Server-2022-65-e709db22.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-65-e709db22.png)

6. Choose the appropriate **Partition style**, then click **OK**.

   [![Choosing a Partition style](/img/migrated/Userguide-FPT-Cloud-Server-2022-66-9e4f3cf7.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-66-9e4f3cf7.png)

7. Right-click the unallocated space on the disk and select **New Simple Volume**.

   [![Selecting New Simple Volume](/img/migrated/Userguide-FPT-Cloud-Server-2022-67-b8dd64a9.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-67-b8dd64a9.png)

8. Follow the wizard and click **Next**.

   [![New Simple Volume Wizard](/img/migrated/Userguide-FPT-Cloud-Server-2022-68-4a3afeda.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-68-4a3afeda.png)

9. Enter the disk size in the **Simple volume size in MB** field, click **Next**, and complete the wizard.

The new disk is now ready to use on your Windows Instance.

## Next Steps

- [Detach a Storage Disk from an Instance](./go-storage-disk-khoi-may-ao.md)
