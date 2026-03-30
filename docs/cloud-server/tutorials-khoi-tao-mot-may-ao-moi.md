---
id: "tutorials-khoi-tao-mot-may-ao-moi"
title: "Create a new virtual machine"
description: "Step-by-step guide to creating a new virtual machine on FPT Cloud Server with full configuration."
sidebar_label: "Create a new virtual machine"
sidebar_position: 11
---

# Create a new virtual machine

A detailed step-by-step guide to creating a new virtual machine on FPT Cloud Server — covering Instance Type, Image, Storage, Network, and Authentication configuration.

## Prerequisites

- ✅ Completed [Initial Setup](./Initial-Setup.md).
- ✅ An active Subnet exists within your VPC.

## Create a virtual machine

1. Select **Compute Engine** → **Instance Management** from the menu, then click **Create instance**.

   [![Instance Management screen](/img/migrated/Screenshot_19-1024x464-45a4bfd7.png)](/img/migrated/Screenshot_19-1024x464-45a4bfd7.png)

2. Configure the virtual machine:
   - **Instance Type**: Select **General** (standard workloads) or **GPU** (high performance, Machine Learning).
   - **Image**: Select the appropriate OS. You can upload an ISO file or create from an existing template.
   - **Resource type**: Select a CPU and RAM configuration, or create a custom configuration.
   - **Storage**: Select the **Storage Policy** (storage type) and **Size**.
   - **Instance group** *(optional)*: Configure the placement of the virtual machine on the physical host.
   - **Subnet** and **Private IP**: Select the network for the virtual machine. You can enter a Private IP or let the system assign one automatically.
   - **Security Group** *(optional)*: Select a Security Group to control traffic.
   - **Instance name**: Enter the virtual machine name — this also becomes the hostname.
   - **Authentication type**: Select **SSH Key** or **Standard** (Password).
   - **User data** *(optional)*: Contains a [cloud-init script](https://cloudinit.readthedocs.io/en/latest/reference/examples.html) for automatic configuration at boot.

   [![Create instance dialog](/img/migrated/Screenshot_20-1-1024x546-bf37ac18.png)](/img/migrated/Screenshot_20-1-1024x546-bf37ac18.png)

   [![Network and Authentication configuration](/img/migrated/Screenshot_21-1-1024x676-96e3971b.png)](/img/migrated/Screenshot_21-1-1024x676-96e3971b.png)

   [![Advanced configuration](/img/migrated/Screenshot_22-1-1024x537-9a27a8d4.png)](/img/migrated/Screenshot_22-1-1024x537-9a27a8d4.png)

**Sample cloud-init script for Linux:**

```yaml
#cloud-config
users:
- name: testcloudinit
  sudo: ALL=(ALL) NOPASSWD:ALL
  lock_passwd: false
  shell: /bin/bash
  passwd: $6$rounds=4096$V6anciWl30$xKbcljqks1gUkMiM80pyKzhvyhn7U1n.jXcGCUfkUlX.rnllUWKUrmDEzekhhhP8aERSylRuC7gfDhJ32Xv0A1
- name: testcloudinit2
  groups: sudo
  lock_passwd: false
  shell: /bin/bash
  plain_text_passwd: abc@123Abc123
- hostname: testcloudinit
```

**Sample cloud-init script for Windows:**

```yaml
#cloud-config
users:
- name: testcloudinit
  primary_group: Administrators
  groups: Administrators
  passwd: abc@123Abc123
```

:::note
If the virtual machine is initialized with Windows, you need to reboot it to run the cloud-init scripts.
:::

3. Click **Create Instance**.

   [![Confirm Instance creation](/img/migrated/Screenshot_24-1-1024x656-a594dc63.png)](/img/migrated/Screenshot_24-1-1024x656-a594dc63.png)

The new virtual machine appears on the dashboard with its name, configuration, IP address, and status.

[![Instance list after creation](/img/migrated/Screenshot_25-1024x522-c45b80c7.png)](/img/migrated/Screenshot_25-1024x522-c45b80c7.png)

## Next steps

- [Notes on creating a virtual machine from an ISO file](./create-vm-iso.md)
- [Connect to a Windows virtual machine](./tutorials-ket-noi-vao-may-ao-windows.md)
- [Connect to a Linux virtual machine](./tutorials-ket-noi-vao-may-ao-linux.md)
