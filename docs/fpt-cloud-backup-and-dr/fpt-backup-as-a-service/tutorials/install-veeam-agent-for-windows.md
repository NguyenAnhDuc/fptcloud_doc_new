---
id: "install-veeam-agent-for-windows"
title: "Install Veeam Agent for Windows"
description: "Steps to install Veeam Agent on a Windows server and connect it to the BaaS portal."
sidebar_label: "Install Veeam Agent for Windows"
sidebar_position: "4"
---

# Install Veeam Agent for Windows

1. On the server you want to back up, log in to the BaaS portal at [https://baas.fptcloud.com](https://baas.fptcloud.com).

   [![BaaS portal login screen](/img/migrated/image-1695292106378-41580e19.png)](/img/migrated/image-1695292106378-41580e19.png)

   After logging in successfully:

   [![BaaS management interface](/img/migrated/image-1695292115345-71164f38.png)](/img/migrated/image-1695292115345-71164f38.png)

2. Go to **Managed Computers**, select **Download Agent**, then select **Windows**. Adjust the token expiration time if needed (default is 12 months).

   [![Download Agent for Windows](/img/migrated/image-1695292124121-91d52bda.png)](/img/migrated/image-1695292124121-91d52bda.png)

   [![Set token expiration](/img/migrated/image-1695292132688-e41cc91e.png)](/img/migrated/image-1695292132688-e41cc91e.png)

3. After downloading, run the Management Agent installer on the server:

   [![Start the installer](/img/migrated/image-1695292142746-c8534ab5.png)](/img/migrated/image-1695292142746-c8534ab5.png)

   Select **Next** to continue:

   [![Click Next](/img/migrated/image-1695292150003-ee0a607d.png)](/img/migrated/image-1695292150003-ee0a607d.png)

   Accept the license terms and continue.

4. Enter the Cloud Gateway connection details:

   - **Cloud Gateway**: `baas-sgn-gw.fptcloud.com` (Ho Chi Minh City) or `baas-han-gw.fptcloud.com` (Hanoi)
   - **Port**: `6180`

   [![Cloud Gateway configuration](/img/migrated/image-1695292180601-c17bd7f4.png)](/img/migrated/image-1695292180601-c17bd7f4.png)

5. Verify the VM appears in the portal and the Veeam Agent installation completed successfully.

   [![VM visible in portal](/img/migrated/image-1695292191409-db0a966c.png)](/img/migrated/image-1695292191409-db0a966c.png)

6. Confirm the backup job appears in the portal and Veeam Agent for Windows is installed on the server.

   [![Backup job visible in portal](/img/migrated/image-1695292197657-f521f8f1.png)](/img/migrated/image-1695292197657-f521f8f1.png)

   [![Veeam Agent installed on server](/img/migrated/image-1695292206361-fd9d30b7.png)](/img/migrated/image-1695292206361-fd9d30b7.png)
