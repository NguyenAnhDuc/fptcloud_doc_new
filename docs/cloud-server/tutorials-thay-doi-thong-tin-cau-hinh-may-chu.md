---
id: "tutorials-thay-doi-thong-tin-cau-hinh-may-chu"
title: "Change VM configuration"
description: "Resize RAM/CPU, rename, and reset password for virtual machines on FPT Cloud Server."
sidebar_label: "Change VM configuration"
sidebar_position: 17
---

# Change VM configuration

FPT Cloud Server allows you to flexibly change your VM configuration — including resizing RAM/CPU, renaming, and resetting the password.

## Resize configuration

Resize lets you change the RAM-CPU configuration of an existing VM. During resize, the VM will temporarily shut down and restart automatically after completion.

:::tip
Enable the **Hot-add** feature to resize without shutting down the VM in the future.
:::

1. In **Instance Management**, select **Actions** → **Resize VM**.

   [![Actions menu with Resize VM option](/img/migrated/Userguide-FPT-Cloud-Server-2022-41-1024x-3163067f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-41-1024x-3163067f.png)

2. Select a new configuration from an existing template or create a custom configuration under **Custom**. Click **Resize** to confirm.

   [![Resize VM dialog](/img/migrated/Userguide-FPT-Cloud-Server-2022-42-6016416a.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-42-6016416a.png)

## Rename VM

1. In **Instance Management**, select **Actions** → **Rename**.

   [![Actions menu with Rename option](/img/migrated/Userguide-FPT-Cloud-Server-2022-43-1024x-f181b90f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-43-1024x-f181b90f.png)

2. Enter the new name and click **Rename**.

   [![Rename dialog](/img/migrated/Userguide-FPT-Cloud-Server-2022-44-517e8929.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-44-517e8929.png)

## Reset Password

For VMs using password authentication, you can reset the root account password.

1. In **Instance Management**, select **Actions** → **Reset Password**.

   [![Actions menu with Reset Password option](/img/migrated/Userguide-FPT-Cloud-Server-2022-45-1024x-17f8c10f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-45-1024x-17f8c10f.png)

2. Click **Reset Password**. The system sends a new password to your email.

## Next steps

- [Backup VM with Snapshot](./tutorials-backup-may-chu-voi-snapshot.md)
