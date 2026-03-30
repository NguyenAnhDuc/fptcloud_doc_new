---
id: "gpu-general"
title: "Managing GPU with Console Portal"
description: "Create GPU-enabled instances, add/remove GPU, and resize GPU configuration on FPT Cloud Portal."
sidebar_label: "Managing GPU with Console Portal"
sidebar_position: 21
---

# Managing GPU with Console Portal

You can create GPU-enabled instances, add GPU to existing instances, remove GPU, or resize GPU configuration directly on FPT Cloud Portal.

## Create a GPU-Enabled Instance

1. In **Instance Management**, click **Create instance**.

   [![Instance Management screen](/img/migrated/image-1744799866857-2ea8b0f3.png)](/img/migrated/image-1744799866857-2ea8b0f3.png)

2. Select **GPU** and choose the GPU card type you need.

   [![Select GPU type](/img/migrated/image-1744799912482-215598f9.png)](/img/migrated/image-1744799912482-215598f9.png)

3. Fill in the remaining details and click **Create Instance**.

   [![Confirm GPU Instance creation](/img/migrated/image-1744799934410-03d823e6.png)](/img/migrated/image-1744799934410-03d823e6.png)

GPU information is updated on the Instance Detail screen.

[![Instance Detail with GPU information](/img/migrated/image-1744799982286-e3f4b4f1.png)](/img/migrated/image-1744799982286-e3f4b4f1.png)

## Add GPU to an Instance

:::note
You must **Power off** the instance before adding GPU (status must be "Stopped"). This feature is disabled when the instance is in "Running" or "Pending" status.
:::

1. In **Instance Management**, select the instance you want to add GPU to.

   [![Select instance](/img/migrated/image-1744799997207-f8405b2c.png)](/img/migrated/image-1744799997207-f8405b2c.png)

2. Select **Actions** → **Add GPU**.

   [![Actions menu with Add GPU option](/img/migrated/image-1744800019053-f556d42e.png)](/img/migrated/image-1744800019053-f556d42e.png)

3. Choose the appropriate **GPU type** from the list, then click **Add GPU**.

4. Verify the information on the Instance Detail screen.

   [![Instance Detail after adding GPU](/img/migrated/image-1744800059691-eba5d618.png)](/img/migrated/image-1744800059691-eba5d618.png)

## Remove GPU from an Instance

:::note
You must **Power off** the instance before removing GPU.
:::

1. In **Instance Management**, select the instance, then click **Remove GPU**.
2. Select a standard **resource type** (without GPU) from the list.
3. Click **Remove GPU**. The system removes the GPU and moves the Instance to the selected resource type.

## Resize GPU

:::note
You must **Power off** the instance before resizing.
:::

1. In **Instance Management**, select the instance, then click **Resize**.
2. Choose the **template** and **resource type**:
   - An Instance with GPU can only be resized to a GPU type.
   - An Instance without GPU can only be resized to a non-GPU type. Use **Add GPU** to switch to a GPU type.
3. Click **Resize Instance**.

## Next Steps

- [Managing GPU for Specific Service](./gpu-specific.md)
