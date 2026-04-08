---
id: "tutorials-ket-noi-vao-may-ao-windows"
title: "Tutorials Ket Noi Vao May Ao Windows"
sidebar_label: "Connect to a Windows virtual machine"
sidebar_position: 3
---

Connect to a Windows virtual machine


When a **Windows** virtual machine is successfully created on the **FPT Portal**, users can by default use the built-in **Web Console** to access it. Users can also log in from outside using **Remote Desktop Connection** if the server has a Public IP attached.

## Connect to a Windows virtual machine using Web Console
**Web Console** supports control of all **Windows** virtual machines on **FPT Cloud**, including virtual machines that do not have a **Public IP** attached.

In the menu, select **Instance Management**. In the **Actions** section of the virtual machine you want to connect to, select **Console.**

![Userguide FPT Cloud Server 2022 22](images/tutorials-ket-noi-vao-may-ao-windows/img-001.png)

The browser will immediately open a new window displaying the server's screen. From this screen, users have full control to operate and interact with the connected server.

![Userguide FPT Cloud Server 2022 23](images/tutorials-ket-noi-vao-may-ao-windows/img-002.png)

## Connect to a Windows server using Remote Desktop Connection
To connect via **RDC** (**Remote Desktop Connection**), the virtual machine must have a **Floating IP** attached and port 3389 must be open for RDP Connection. **FPT Cloud** supports opening ports for virtual machines by attaching a **Security Group**.

**Follow the steps below to configure the connection:**

**Step 1**: Create a **Windows** OS virtual machine, attach a **Floating IP** as instructed in [**Attach Floating IP to Instance**](<https://fptcloud.com/documents/cloud-server/?doc=quan-ly-floating-ip>), and start it.

![Userguide FPT Cloud Server 2022 24](images/tutorials-ket-noi-vao-may-ao-windows/img-003.png)

**Step 2**: Attach a **Security Group** with RDP port 3389 open to the virtual machine. If no such **Security Group** exists, you can create one as instructed in [**Manage Security Groups**](<https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group>).

![Userguide FPT Cloud Server 2022 26](images/tutorials-ket-noi-vao-may-ao-windows/img-004.png)

**Step 3**: After successful configuration, users can connect to the virtual machine using Remote Desktop Connection with the following parameters:

![Userguide FPT Cloud Server 2022 27](images/tutorials-ket-noi-vao-may-ao-windows/img-005.png)

If **Remote Desktop Connection** reports that it cannot connect, users should verify that the virtual machine is running, confirm the **Floating IP** is correct, and re-open port 3389 as instructed in [**Manage Security Groups**](<https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group>).
