---
id: "install-veeam-agent-for-linux"
title: "Install Veeam Agent for Linux"
description: "Steps to install Veeam Agent on a Linux server and connect it to the BaaS portal."
sidebar_label: "Install Veeam Agent for Linux"
sidebar_position: "3"
---

# Install Veeam Agent for Linux

1. On the server you want to back up, log in to the BaaS portal at [https://baas.fptcloud.com](https://baas.fptcloud.com).

   [![BaaS portal login screen](/img/migrated/image-1695290664395-24434403.png)](/img/migrated/image-1695290664395-24434403.png)

   After logging in successfully:

   [![BaaS management interface](/img/migrated/image-1695290688881-d34bc29d.png)](/img/migrated/image-1695290688881-d34bc29d.png)

2. Go to **Managed Computers**, select **Download Agent**, then select **Linux**. Adjust the token expiration time if needed (default is 12 months).

   [![Download Agent for Linux](/img/migrated/image-1695290710281-8dee543b.png)](/img/migrated/image-1695290710281-8dee543b.png)

   [![Set token expiration](/img/migrated/image-1695290727809-1b6f23f5.png)](/img/migrated/image-1695290727809-1b6f23f5.png)

3. After downloading `LinuxAgentPackages.sh`, copy it to the server and run the installation:

   ```bash
   sudo chmod +x LinuxAgentPackages.sh
   sudo ./LinuxAgentPackages.sh
   ```

   [![Running the installation script](/img/migrated/image-1695290745234-3e4654e1.png)](/img/migrated/image-1695290745234-3e4654e1.png)

4. Veeam automatically installs the agent after the script runs. Verify the connection status:

   ```bash
   veeamconsoleconfig -s
   ```

   [![Checking connection status](/img/migrated/image-1695290759883-5ebe5284.png)](/img/migrated/image-1695290759883-5ebe5284.png)

5. Verify the installation was successful.

   [![Successful installation](/img/migrated/image-1695290772560-933364fa.png)](/img/migrated/image-1695290772560-933364fa.png)

   Confirm the backup job appears in the Backup Job section.

   [![Backup job visible in portal](/img/migrated/image-1695290783350-f99963d4.png)](/img/migrated/image-1695290783350-f99963d4.png)
