---
id: "tutorials-ket-noi-vao-may-ao-windows"
title: "Connect to a Windows virtual machine"
description: "Connect to a Windows virtual machine via Web Console or Remote Desktop Connection (RDC)."
sidebar_label: "Connect to a Windows virtual machine"
sidebar_position: 12
---

# Connect to a Windows virtual machine

Once your Windows virtual machine is successfully created, you can access it via **Web Console** (default) or **Remote Desktop Connection** (if the virtual machine has a Floating IP).

## Connect via Web Console

Web Console supports controlling all Windows virtual machines on FPT Cloud, including machines that do not yet have a Public IP.

1. In **Instance Management**, select the virtual machine you want to connect to, then click **Actions** → **Console**.

   [![Actions menu with Console option](/img/migrated/Userguide-FPT-Cloud-Server-2022-22-1024x-8e9a3fe1.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-22-1024x-8e9a3fe1.png)

Your browser opens a new window containing the server screen, giving you full control from there.

[![Windows Web Console screen](/img/migrated/Userguide-FPT-Cloud-Server-2022-23-297x3-27ea7392.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-23-297x3-27ea7392.png)

## Connect via Remote Desktop Connection

To use RDC, the virtual machine must have a **Floating IP** and **port 3389** must be open for RDP connections via a Security Group.

1. Create the Windows virtual machine, attach a **Floating IP**, and start it.

   [![Windows virtual machine with Floating IP](/img/migrated/Userguide-FPT-Cloud-Server-2022-24-1024x-d7f8ec18.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-24-1024x-d7f8ec18.png)

2. Attach a **Security Group** with RDP port 3389 open to the virtual machine.

   [![Security Group with RDP port 3389](/img/migrated/Userguide-FPT-Cloud-Server-2022-26-1024x-d2598fa0.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-26-1024x-d2598fa0.png)

3. Connect using Remote Desktop Connection with the Floating IP and port 3389.

   [![Remote Desktop Connection](/img/migrated/Userguide-FPT-Cloud-Server-2022-27-258x3-461bd875.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-27-258x3-461bd875.png)

:::tip
If you cannot connect, verify that: the virtual machine is running, the Floating IP is correct, and port 3389 is open in the Security Group.
:::

## Next steps

- [Connect to a Linux virtual machine](./tutorials-ket-noi-vao-may-ao-linux.md)
