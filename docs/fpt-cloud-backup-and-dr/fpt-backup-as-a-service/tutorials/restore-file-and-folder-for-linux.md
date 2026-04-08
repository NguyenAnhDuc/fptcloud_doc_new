---
id: "restore-file-and-folder-for-linux"
title: "Restore files and folders for Linux"
description: "Steps to restore individual files and folders on a Linux server using Veeam Agent."
sidebar_label: "Restore files and folders for Linux"
sidebar_position: "5"
---

# Restore files and folders for Linux

1. On the Linux server, run the `veeam` command to open the backup management interface.

   [![Veeam backup management interface](/img/migrated/image-1695293630461-653a169c.png)](/img/migrated/image-1695293630461-653a169c.png)

2. Press **R** to start restore. Use the Tab key to navigate and select the restore point you want.

   [![Select restore point](/img/migrated/image-1695293640386-6b890987.png)](/img/migrated/image-1695293640386-6b890987.png)

3. Configure the network if needed.

   If the restore VM uses DHCP, skip this step. Otherwise, click **Configure network** to set a static IP for the restore VM.

   :::note
   The VM IP must have internet access or connectivity to `baas-sgn-gw.fptcloud.com` (Ho Chi Minh City) or `baas-han-gw.fptcloud.com` (Hanoi) on port 6180 to perform the restore.
   :::

   [![Configure network](/img/migrated/image-1695293652239-c8d98b0c.png)](/img/migrated/image-1695293652239-c8d98b0c.png)

   Select **Edit a connection** to set a manual IP:

   [![Edit connection](/img/migrated/image-1695294368455-b227ce55.png)](/img/migrated/image-1695294368455-b227ce55.png)

   Select **Edit** to set the IP:

   [![Edit IP settings](/img/migrated/image-1695294377573-3f399b0e.png)](/img/migrated/image-1695294377573-3f399b0e.png)

   Select **IPv4 Configuration**, set mode to **Manual**, then click **Show** to enter the IP:

   [![Set static IP](/img/migrated/image-1695294387294-1b721428.png)](/img/migrated/image-1695294387294-1b721428.png)

   After setting the IP, select **OK** and press **Esc** to return to the main screen.

4. Press **I** to mount the partition containing the data to restore. Data is mounted at `/mnt/backup`.

   [![Mount partition](/img/migrated/image-1695293662668-59e66199.png)](/img/migrated/image-1695293662668-59e66199.png)

5. Navigate to `/mnt/backup` and copy the files or folders to the restore destination.

   [![Copy restored files](/img/migrated/image-1695293675138-d1e922a0.png)](/img/migrated/image-1695293675138-d1e922a0.png)

6. After completing the restore, return to the Veeam interface and press **U** to end the restore session.

   [![End restore session](/img/migrated/image-1695293683941-a9d86933.png)](/img/migrated/image-1695293683941-a9d86933.png)
