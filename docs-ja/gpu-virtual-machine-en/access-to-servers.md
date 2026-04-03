---
id: "access-to-servers"
title: "Access To Servers"
description: "Access To Servers trên GPU Virtual Machine."
sidebar_label: "Access To Servers"
sidebar_position: "11"
---

# Access To Servers

When a **GPU VM running Ubuntu** is successfully created on the **FPT Portal** , users can access it by default through the built-in **Web Console**. 
Additionally, users can connect externally using **SSH clients** or third-party software such as **PuTTY** or **Bitvise**. 

### Connect to a GPU VM via Web Console
The **Web Console** allows users to control all GPU VMs on FPT Cloud, even those **without a Public IP**. 
**Step 1:** On the **Side menu** , go to **Instance Management** , find the virtual machine you want to access, and under the **Actions** section, select **Console**. 
[![Alt text](/img/migrated/Access-to-GPU-VM-1-6478e3bb.png)](/img/migrated/Access-to-GPU-VM-1-6478e3bb.png)
**Step 2:** The browser will immediately open a new window displaying the server screen, allowing you full control and interaction with the connected server. 
[![Alt text](/img/migrated/Access-to-GPU-VM-2-6c85c68d.png)](/img/migrated/Access-to-GPU-VM-2-6c85c68d.png)

### SSH to Connect to a GPU VM
You can connect to a **GPU VM** using an **SSH client** , typically from a terminal. 
To do so, you need to have the following three pieces of information: 
  * **The public IP address:** After your GPU VM is created and allocated a public IP, it is displayed in the GPU VM list or the GPU VM details page. 
  * **The username:** The default username on the server during initial creation is **root**. 
  * **The authentication method** for that user. If you added **SSH keys** to your GPU VM, you can connect using those keys, which we strongly recommend for its additional security. Otherwise, if you use password authentication, use the password you chose.

Once you have your GPU VM’s **public IP address** , **username** , and **password or SSH key** , follow the instructions below for your SSH client. 

#### Step 1: Open Your Terminal
  * **On Linux/macOS:** Launch the **Terminal** app. 
  * **On Windows:** Use **CMD** , **PowerShell** , **Git Bash** , or **WSL**. 

#### Step 2: Connecting to Your VM
You can connect to your VM in two ways: using a **password** or an **SSH key (.pem file)**. 

##### Method 1: Connect Using a Password
  1. Open your terminal or command prompt. 
  2. Enter the following command to connect to your VM: 

```
Copyssh <username>@<VM_IP>
```

##### Method 2: Connect Using an SSH Key (.pem file)
  1. Navigate to the directory where your **.pem** file is located: 

```
Copycd <path_to_pem_file_directory>
```

  2. Use the SSH key to connect to your VM: 

```
Copyssh -i "<your_key_file.pem>" <username>@<VM_IP>
```

[![Alt text](/img/migrated/Access-to-GPU-VM-3-b474506d.png)](/img/migrated/Access-to-GPU-VM-3-b474506d.png)
  3. On your first connection, type **yes** to verify the host’s fingerprint and continue. 
  4. You have successfully connected to the server via SSH. Type **exit** to close the SSH session and return to your local shell. 

[![Alt text](/img/migrated/Access-to-GPU-VM-4-a942d841.png)](/img/migrated/Access-to-GPU-VM-4-a942d841.png)
Note:
If you see the error: **WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!** , it means the saved SSH fingerprint for the server has changed. To fix it, run the following command to remove the old fingerprint: 

```
Copyssh-keygen -R "<VM_IP>"
```
