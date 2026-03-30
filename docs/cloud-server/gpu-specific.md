---
id: "gpu-specific"
title: "Managing GPU for Specific Service"
description: "Add GPU, create new GPU Servers, and remove GPU for the Specific service type on FPT Cloud."
sidebar_label: "Managing GPU for Specific Service"
sidebar_position: 22
pagination_next: null
---

# Managing GPU for Specific Service

This guide covers GPU management for the Specific service type — including adding GPU to existing instances, creating new GPU Servers, and removing GPU.

## Add GPU to an Existing Instance

:::note
You must **Power off** the instance before adding GPU. Minimum configuration: 8 vCPU – 24 GB RAM.
:::

1. In **Instance Management**, select **Actions** → **Add GPU**.

   [![Actions menu with Add GPU option](/img/migrated/image-1705028237983-e4b7aeed.png)](/img/migrated/image-1705028237983-e4b7aeed.png)

2. Select the **GPU** configuration from the list, then click **Update**.

## Create a New GPU Server

:::note
- GPU quota must be provisioned for your account. If the VPC has no remaining quota, the system returns an error when creating a new GPU Server.
- Minimum configuration: 8 vCPU – 24 GB RAM.
:::

1. Select **Compute Engine** → **Instance Management**, then click **Create instance**.

   [![Instance Management screen](/img/migrated/image-1712739862804-d5b7552c.png)](/img/migrated/image-1712739862804-d5b7552c.png)

2. Configure the instance:
   - **Instance Type**: Select **GPU**.
   - **GPU type**: Choose the appropriate GPU type.
   - **Image**: Choose the appropriate OS.
   - **Resource type**: Select a configuration from the list.
   - **Local Storage**: Adjust disk size (minimum 40 GB).
   - **Subnet** and **Private IP**: Auto-assign or customize.
   - **Instance name**: Enter the instance name.
   - **Authentication type**: Standard (Password) or SSH Key.

3. Click **Create Instance**.

After creation, the system immediately attaches GPU to the instance. You can open the console to verify the GPU information.

## Remove GPU from an Instance

1. In **Instance Management**, select **Actions** → **Remove GPU**.
2. Verify the details and click **Update**.

## Next Steps

- [Managing GPU Server with HPC Portal](./quan-ly-gpu-voi-hpc-portal.md)
