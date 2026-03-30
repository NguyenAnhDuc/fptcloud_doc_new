---
id: "quick-starts-tao-mot-may-ao"
title: "Create a virtual machine"
description: "Create a new virtual machine on FPT Cloud Server with your choice of CPU, RAM, Storage, and Network configuration."
sidebar_label: "Create a virtual machine"
sidebar_position: 3
---

# Create a virtual machine

Creating a virtual machine (Instance) lets you deploy workloads on the cloud quickly — choose the configuration that fits your needs, from web applications to machine learning.

## Prerequisites

- ✅ You have completed [Initial setup](./Initial-Setup.md).
- ✅ You have an active Subnet in your VPC.

## Create a virtual machine

1. Select **Compute Engine** → **Instance Management** from the menu, then click **Create instance**.

   [![Instance Management screen with Create instance button](/img/migrated/image-1712739862804-d5b7552c.png)](/img/migrated/image-1712739862804-d5b7552c.png)

   The create instance dialog appears.

   [![Create instance dialog](/img/migrated/Userguide-FPT-Cloud-Server-2022-18-1024x-f0c8f0c9.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-18-1024x-f0c8f0c9.png)

2. Configure the virtual machine using the sections below:

### Configuration

- **Instance Type**: Select the machine family — **General** for standard needs, **GPU** for high-performance workloads.

  [![Select Instance Type](/img/migrated/image-1724657781979-ab2ee565.png)](/img/migrated/image-1724657781979-ab2ee565.png)

- **Image**: Select the OS you need. Each OS group has multiple versions. You can also create a virtual machine from a Custom Image, ISO, or Snapshot.

  [![Select Image for General](/img/migrated/image-1724661980458-423745c9.png)](/img/migrated/image-1724661980458-423745c9.png)

- **Resource type**: Select a CPU and RAM configuration, or create a custom configuration.

  [![Select Resource type](/img/migrated/image-1724662047559-1be6927b.png)](/img/migrated/image-1724662047559-1be6927b.png)

### Storage Disk

- **Storage Policy**: Select the storage type.
- **Size**: Select the disk size.

  [![Configure Storage](/img/migrated/image-1724662063044-c293e47c.png)](/img/migrated/image-1724662063044-c293e47c.png)

### Network

- **Subnet** and **Private IP**: Select the network for the virtual machine. You can enter a Private IP manually or let the system assign one automatically.
- **Security Group** *(optional)*: Select a Security Group to control traffic.

  [![Configure Network](/img/migrated/image-1724662077573-14ea2c24.png)](/img/migrated/image-1724662077573-14ea2c24.png)

### Authentication

- **SSH Key**: The system selects the most recent SSH Key by default (you can change this).

  [![Select SSH Key](/img/migrated/image-1724662090638-f8be1084.png)](/img/migrated/image-1724662090638-f8be1084.png)

- **Password**: If you choose the Standard method, remember to keep your password secure.

  [![Enter Password](/img/migrated/image-1724662104611-d3e63623.png)](/img/migrated/image-1724662104611-d3e63623.png)

### Advanced

  [![Configure Advanced settings](/img/migrated/image-1724662116137-16450e30.png)](/img/migrated/image-1724662116137-16450e30.png)

- **Instance group** *(optional)*: Select to configure the placement of the virtual machine on the physical host.
- **Instance name**: Enter the name for the virtual machine — this also becomes the hostname.
- **User data** *(optional)*: Contains a cloud-init script to automatically configure the instance on boot.

3. Click **Create Instance**.

   [![Confirm Create Instance](/img/migrated/image-1724664453215-c36b4dde.png)](/img/migrated/image-1724664453215-c36b4dde.png)

The new virtual machine appears in the management dashboard showing its name, configuration (RAM, CPU, Storage), IP address, and status.

[![Instance list after creation](/img/migrated/Userguide-FPT-Cloud-Server-2022-21-1024x-e04e8c2e.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-21-1024x-e04e8c2e.png)

## Next steps

- [Notes for creating VM from ISO file](./create-vm-iso.md)
- [Connect to a Windows virtual machine](./tutorials-ket-noi-vao-may-ao-windows.md)
- [Connect to a Linux virtual machine](./tutorials-ket-noi-vao-may-ao-linux.md)
