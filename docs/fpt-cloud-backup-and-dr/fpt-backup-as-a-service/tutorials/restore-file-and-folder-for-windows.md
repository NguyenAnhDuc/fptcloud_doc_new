---
id: "restore-file-and-folder-for-windows"
title: "Restore files and folders for Windows"
description: "Steps to restore individual files and folders on a Windows server using Veeam Agent."
sidebar_label: "Restore files and folders for Windows"
sidebar_position: "6"
---

# Restore files and folders for Windows

1. Launch Veeam Agent for Windows.

   [![Launch Veeam Agent for Windows](/img/migrated/image-1695292398449-9e91c3cb.png)](/img/migrated/image-1695292398449-9e91c3cb.png)

   :::note
   If the restore point you need is older than what is available in the quick restore view, use the **File Level Restore** feature described in step 5.
   :::

2. Click on the backup job that contains the file you want to restore, then select **Restore Files**.

   [![Select Restore Files from backup job](/img/migrated/image-1695292405251-6f9dec6f.png)](/img/migrated/image-1695292405251-6f9dec6f.png)

3. In the window that opens, select the file or folder to restore. Choose **Restore Overwrite** to overwrite the current file, or **Keep** to keep the current file and rename the restored copy.

   [![Select files and restore option](/img/migrated/image-1695292409737-ad7d5f87.png)](/img/migrated/image-1695292409737-ad7d5f87.png)

4. Alternatively, select **Copy To** to restore to a different location. Choose the destination folder and click **OK**.

   [![Copy To a different location](/img/migrated/image-1695292415057-bac4c7be.png)](/img/migrated/image-1695292415057-bac4c7be.png)

5. To restore from an older point, launch the **File Level Restore** tool included with Veeam Agent for Windows.

   [![Launch File Level Restore](/img/migrated/image-1695292421939-897334d8.png)](/img/migrated/image-1695292421939-897334d8.png)

6. In the **Restore Point** section, select the point in time you want to restore from, then click **Next**.

   [![Select restore point](/img/migrated/image-1695292427514-2d131ec1.png)](/img/migrated/image-1695292427514-2d131ec1.png)

7. Click **Open** to continue. When the restore window appears, return to step 3 to select files and complete the restore.

   [![Click Open to continue](/img/migrated/image-1695292434984-0161da63.png)](/img/migrated/image-1695292434984-0161da63.png)
