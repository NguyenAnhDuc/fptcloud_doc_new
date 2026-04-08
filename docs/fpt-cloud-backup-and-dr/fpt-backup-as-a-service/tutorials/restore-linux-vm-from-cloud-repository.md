---
id: "restore-linux-vm-from-cloud-repository"
title: "Restore a Linux VM from cloud repository"
description: "Steps to perform a bare metal restore of a Linux VM from the FPT Cloud BaaS repository."
sidebar_label: "Restore Linux VM from cloud repository"
sidebar_position: "8"
---

# Restore a Linux VM from cloud repository

1. Download the Veeam Recovery Media ISO from the Veeam website. Choose the ISO that matches the OS of the VM you are restoring.

   [![Download Veeam Recovery Media ISO](/img/migrated/image-1695294618113-7017717b.png)](/img/migrated/image-1695294618113-7017717b.png)

2. Reboot the VM and boot from the Veeam Recovery Media ISO. Accept the license terms and continue.

   [![Boot from ISO and accept terms](/img/migrated/image-1695294644895-2a9750be.png)](/img/migrated/image-1695294644895-2a9750be.png)

3. Configure the network if needed.

   If the restore VM uses DHCP, skip this step. Otherwise, click **Configure network** to set a static IP.

   :::note
   The VM IP must have internet access or connectivity to `baas-sgn-gw.fptcloud.com` (Ho Chi Minh City) or `baas-han-gw.fptcloud.com` (Hanoi) on port 6180.
   :::

   [![Configure network](/img/migrated/image-1695294671316-44391ccf.png)](/img/migrated/image-1695294671316-44391ccf.png)

   Select **Edit a connection** to set a manual IP:

   [![Edit connection](/img/migrated/image-1695294681820-3a5125db.png)](/img/migrated/image-1695294681820-3a5125db.png)

   Select **Edit** to set the IP:

   [![Edit IP settings](/img/migrated/image-1695294692535-3e2748f0.png)](/img/migrated/image-1695294692535-3e2748f0.png)

   Select **IPv4 Configuration**, set mode to **Manual**, then click **Show**:

   [![Set static IP](/img/migrated/image-1695294702919-9bc47e74.png)](/img/migrated/image-1695294702919-9bc47e74.png)

   After setting the IP, select **OK** and press **Esc** to return to the main screen:

   [![Return to main screen](/img/migrated/image-1695294720487-cfae6dc7.png)](/img/migrated/image-1695294720487-cfae6dc7.png)

4. Select **Add Cloud provider**.

   [![Add Cloud provider](/img/migrated/image-1695294739863-99ac30bf.png)](/img/migrated/image-1695294739863-99ac30bf.png)

5. Enter the BaaS gateway URL:
   - Ho Chi Minh City: `baas-sgn-gw.fptcloud.com`
   - Hanoi: `baas-han-gw.fptcloud.com`

   [![Enter gateway URL](/img/migrated/image-1695294750751-e258de28.png)](/img/migrated/image-1695294750751-e258de28.png)

6. Enter your username and password, then press **Enter** to continue.

   [![Enter credentials](/img/migrated/image-1695294761178-6db27dc0.png)](/img/migrated/image-1695294761178-6db27dc0.png)

7. Select the backup job name and the desired restore point.

   [![Select backup job and restore point](/img/migrated/image-1695294772745-817c2f15.png)](/img/migrated/image-1695294772745-817c2f15.png)

8. Map the corresponding disks and restore them.

   [![Map disks](/img/migrated/image-1695294786115-e28a2a8c.png)](/img/migrated/image-1695294786115-e28a2a8c.png)

   [![Restore disks](/img/migrated/image-1695294797487-07dc8c7b.png)](/img/migrated/image-1695294797487-07dc8c7b.png)

   [![Restore progress](/img/migrated/image-1695294806424-3d68dddb.png)](/img/migrated/image-1695294806424-3d68dddb.png)

   [![Restore complete](/img/migrated/image-1695294815857-68eb070f.png)](/img/migrated/image-1695294815857-68eb070f.png)

9. Press **S** to start the restore.

   [![Press S to start restore](/img/migrated/image-1695294824016-efac8f85.png)](/img/migrated/image-1695294824016-efac8f85.png)
