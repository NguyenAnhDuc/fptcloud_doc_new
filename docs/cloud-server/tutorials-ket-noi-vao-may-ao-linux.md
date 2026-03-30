---
id: "tutorials-ket-noi-vao-may-ao-linux"
title: "Connect to a Linux virtual machine"
description: "Connect to a Linux virtual machine via Web Console, SSH Client, PuTTY, or Bitvise."
sidebar_label: "Connect to a Linux virtual machine"
sidebar_position: 13
---

# Connect to a Linux virtual machine

Once your Linux virtual machine (Ubuntu, CentOS, Debian) is successfully created, you can access it via **Web Console** (default) or an **SSH Client** / **PuTTY** / **Bitvise** (if the virtual machine has a Floating IP).

## Connect via Web Console

Web Console supports controlling all Linux virtual machines on FPT Cloud, including machines that do not yet have a Public IP.

1. In **Instance Management**, select the virtual machine you want to connect to, then click **Actions** → **Console**.

   [![Actions menu with Console option](/img/migrated/Userguide-FPT-Cloud-Server-2022-22-1024x-8e9a3fe1.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-22-1024x-8e9a3fe1.png)

Your browser opens a new window containing the server screen.

[![Linux Web Console screen](/img/migrated/Userguide-FPT-Cloud-Server-2022-28-6638a596.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-28-6638a596.png)

## Configure remote connection via SSH

To connect via an SSH Client, the virtual machine must have a **Floating IP** and the **SSH port** must be open via a Security Group.

1. Create the Linux virtual machine, attach a **Floating IP**, and start it.

   [![Linux virtual machine with Floating IP](/img/migrated/Userguide-FPT-Cloud-Server-2022-29-1024x-5490201f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-29-1024x-5490201f.png)

2. Attach a **Security Group** with the SSH port open to the virtual machine.

   [![Security Group with SSH port](/img/migrated/image-1744794012514-cdf8c2ce.png)](/img/migrated/image-1744794012514-cdf8c2ce.png)

3. Connect via SSH Client using the **Floating IP**, **SSH port**, and your **SSH Key** file or **Password**.

## Connect via SSH Client (CMD/PowerShell)

1. Open **CMD** or **PowerShell** on Windows.

2. Connect using Password:

   ```bash
   ssh <USERNAME>@<FLOATING_IP>
   ```

   [![SSH connection using Password](/img/migrated/Userguide-FPT-Cloud-Server-2022-32-88cbc1e0.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-32-88cbc1e0.png)

   Connect using SSH Key:

   ```bash
   cd <PATH_TO_FOLDER_CONTAINING_PEM_FILE>
   ssh -i "<KEY_FILE_NAME>" <USERNAME>@<FLOATING_IP>
   ```

   [![Navigate to the folder containing the SSH Key](/img/migrated/Userguide-FPT-Cloud-Server-2022-33-bf7c47a3.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-33-bf7c47a3.png)

3. If this is your first connection, type **yes** when prompted to verify the host fingerprint.

   [![Verify host fingerprint](/img/migrated/Userguide-FPT-Cloud-Server-2022-34-2185365d.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-34-2185365d.png)

Connection successful.

[![Successful SSH connection](/img/migrated/Userguide-FPT-Cloud-Server-2022-35-35e7f42a.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-35-35e7f42a.png)

:::tip
If you encounter the error **WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!**, remove the saved host fingerprint:

```bash
ssh-keygen -R "<FLOATING_IP>"
```
:::

## Next steps

- [Attach a network card (NIC) to the virtual machine](./attach-a-network-card-to-the-virtual-machine.md)
