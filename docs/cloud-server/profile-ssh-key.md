---
id: "profile-ssh-key"
title: "SSH Key Management"
description: "Create, import, and manage SSH Keys on FPT Cloud Portal."
sidebar_label: "SSH Key"
sidebar_position: 41
---

# SSH Key Management

SSH Keys are the recommended authentication method for Linux servers — more secure than passwords.

## Create / Import an SSH Key

1. Go to **Compute Engine** → **SSH Management** and click **Import SSH key**.

   [![SSH Management screen](/img/migrated/image-1698634601692-83a32b71.png)](/img/migrated/image-1698634601692-83a32b71.png)

2. Enter the required information:
   - **Name**: SSH Key name.
   - **Public Key**: Enter an existing public key or select **Generate new key pair**.

   Supported formats: `ssh-rsa`, `ecdsa-sha2-nistp256`, `ecdsa-sha2-nistp384`, `ecdsa-sha2-nistp521`, `ssh-ed25519`.

3. Click **Save**. The system creates the SSH Key and automatically downloads the `.pem` file.

:::danger
The private key `.pem` file is provided only once. Store it in a secure location.
:::

## Delete an SSH Key

1. In **SSH Management**, click **Actions** → **Delete**.
2. Confirm the deletion.
