---
id: "clone-instance"
title: "Clone a virtual machine"
description: "Create a copy of a virtual machine from the original Instance with the same configuration."
sidebar_label: "Clone a virtual machine"
sidebar_position: 2
---

# Clone a virtual machine

The Clone Instance feature lets you create a new virtual machine that is identical to the original — saving time when you need to deploy multiple virtual machines with the same configuration.

## Prerequisites

- ✅ The original Instance is in **Power on** or **Power off** state.
- ✅ The Instance does not have an external disk attached.

:::note
- This feature is not supported for Instances that have an external disk.
- For Instances with a Snapshot or GPU, the system clones the Instance but does not include the Snapshot or GPU.
:::

## Clone a virtual machine

1. Select the Instance you want to clone, then click **Actions** → **Clone instance**.

   [![Actions menu with Clone instance option](/img/migrated/image-1717475698353-5ed202f9.png)](/img/migrated/image-1717475698353-5ed202f9.png)

2. Enter the parameters:
   - **Instance name**: Name for the cloned virtual machine (accepts letters, numbers, `-`, `_`, spaces, and periods only).
   - **Storage policy**: Select the storage type.
   - **Subnet**: Select a subnet from the list.
   - **Private IP** *(optional)*: Enter an IP for the cloned instance. If left blank, the system assigns one automatically.

   [![Clone instance dialog](/img/migrated/image-1717475716702-fb6919a9.png)](/img/migrated/image-1717475716702-fb6919a9.png)

3. Click **Clone**.

The system returns to the Instance list. The cloned Instance appears with **Pending** status.

[![Clone Instance in Pending status](/img/migrated/image-1717475729573-36124bd2.png)](/img/migrated/image-1717475729573-36124bd2.png)

Once complete, the status changes to **Running**.

[![Clone Instance in Running status](/img/migrated/image-1717475743661-15f71aa3.png)](/img/migrated/image-1717475743661-15f71aa3.png)

## Next steps

- [Power on/off virtual machine](./quick-starts-tatbat-may-ao.md)
