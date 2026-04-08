---
id: "create-veeam-recovery-media"
title: "Create Veeam Recovery Media"
description: "Steps to create a Veeam Recovery Media ISO for use in bare metal restores."
sidebar_label: "Create Veeam Recovery Media"
sidebar_position: "9"
---

# Create Veeam Recovery Media

## Windows

1. Launch the **Create Recovery Media** application.

   [![Launch Create Recovery Media](/img/migrated/image-1695292809658-75c1dd96.png)](/img/migrated/image-1695292809658-75c1dd96.png)

2. In the window that appears, select the network connections and drivers you want to include in the Veeam Recovery Media file, then click **Next**.

   [![Select network connections and drivers](/img/migrated/image-1695292817914-6d9e55d8.png)](/img/migrated/image-1695292817914-6d9e55d8.png)

3. Enter a name and choose a location to save the ISO file, then click **Next**.

   :::warning
   Do not save the Veeam Recovery Media file on the server you are backing up. If the server is deleted or fails to start, you will not be able to access the file.
   :::

   [![Name and save location for ISO](/img/migrated/image-1695292826165-585e6c60.png)](/img/migrated/image-1695292826165-585e6c60.png)

4. Review the configuration, then click **Create**.

   [![Review and click Create](/img/migrated/image-1695292833515-81e26e7e.png)](/img/migrated/image-1695292833515-81e26e7e.png)

5. After the process completes, click **Finish**.

   [![Click Finish](/img/migrated/image-1695292841371-d35664ce.png)](/img/migrated/image-1695292841371-d35664ce.png)

## Linux

For Linux, download the recovery media ISO directly from the link below:

[https://download2.veeam.com/VAL/v5/veeam-recovery-media-5.0.0.4318_x86_64.iso](https://download2.veeam.com/VAL/v5/veeam-recovery-media-5.0.0.4318_x86_64.iso)
