---
id: "setting-agert"
title: Set Up Agent Installation Package and Install Agent
description: "Create a Trellix agent installation package and deploy it on Windows, Linux, or macOS servers."
sidebar_label: Set Up Agent Installation Package and Install Agent
sidebar_position: 3
---

# Set Up Agent Installation Package and Install Agent

The agent is a software component installed on each server that needs protection, allowing the Trellix server to remotely monitor and deploy security policies. Windows, Linux, and macOS are supported.

## Install on Windows

1. In the administration console, select **System Tree** > **New System**.

   [![System Tree interface with the New System option](/img/migrated/image-1765765451271-e55af87a.png)](/img/migrated/image-1765765451271-e55af87a.png)

2. Copy the generated URL.

   [![Generated agent installation URL](/img/migrated/image-1765765488808-7e2edd82.png)](/img/migrated/image-1765765488808-7e2edd82.png)

   Example Windows agent URL:
   ```
   https://am.fptcloud.com:8443/ComputerMgmt/agentPackage.get?token=d0ace512f20025972b13c8554162e74fe3d6ecdc
   ```

3. On the server where you want to install the anti-virus, open a browser, navigate to the URL above, then click **Install**.

   [![Trellix agent installation page on Windows](/img/migrated/image-1765765515152-5c9a5e0a.png)](/img/migrated/image-1765765515152-5c9a5e0a.png)

4. Follow the installation wizard (Next / Install) and wait for the agent installation to complete.

   [![Trellix agent installation progress on Windows](/img/migrated/image-1765765529674-0b2d8afc.png)](/img/migrated/image-1765765529674-0b2d8afc.png)

5. Check the agent status. If the Trellix icon does not appear on the task bar, run the following command then click **Collect and send Props**, **Send Events**, and **Check New Policies**.

   [![Trellix agent icon on the Windows task bar](/img/migrated/image-1765765546061-9292647f.png)](/img/migrated/image-1765765546061-9292647f.png)

   ```
   "C:\Program Files\McAfee\Agent\cmdagent.exe" -s
   ```

   [![cmdagent interface for checking agent connection](/img/migrated/image-1765765560155-94d9fac1.png)](/img/migrated/image-1765765560155-94d9fac1.png)

## Install on Linux

1. Download the agent script from the installation URL:

   ```
   https://am.fptcloud.com:8443/ComputerMgmt/agentPackage.get?token=e50140e04eea0aa17f171feca9864bf06cedf0f4
   ```

2. Rename the downloaded file:

   ```bash
   mv <downloaded-file> trellix.sh
   ```

3. Grant execute permission and run the installer (root privilege required):

   ```bash
   sudo chmod +x ./trellix.sh
   sudo ./trellix.sh -i
   ```

   [![Trellix agent installation process on Linux](/img/migrated/image-1765771828456-7265ceeb.png)](/img/migrated/image-1765771828456-7265ceeb.png)

4. Check the connection to the server:

   ```bash
   sudo /opt/McAfee/cma/bin/cmdagent -f
   ```

:::note
After the agent connects successfully, the Trellix server automatically deploys Endpoint Security immediately and schedules ENS updates at 12 AM. These tasks are pre-configured before service provisioning. You can view and customize them in [Manage client tasks](./client-task).
:::
