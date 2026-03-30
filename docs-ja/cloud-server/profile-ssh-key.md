---
id: "profile-ssh-key"
title: "SSH Key管理"
description: "FPT Cloud PortalでSSH Keyの作成、インポート、管理を行います。"
sidebar_label: "SSH Key"
sidebar_position: 41
---

# SSH Key管理

SSH KeyはLinuxサーバーに推奨される認証方式で、パスワードよりも安全です。

## SSH Keyの作成・インポート

1. **Compute Engine** → **SSH Management** に移動し、**Import SSH key** をクリックします。

   [![SSH Management画面](/img/migrated/image-1698634601692-83a32b71.png)](/img/migrated/image-1698634601692-83a32b71.png)

2. 必要な情報を入力します：
   - **Name**：SSH Key名。
   - **Public Key**：既存の公開鍵を入力するか、**Generate new key pair** を選択します。

   サポートされる形式：`ssh-rsa`、`ecdsa-sha2-nistp256`、`ecdsa-sha2-nistp384`、`ecdsa-sha2-nistp521`、`ssh-ed25519`。

3. **Save** をクリックします。システムがSSH Keyを作成し、`.pem` ファイルを自動的にダウンロードします。

:::danger
秘密鍵 `.pem` ファイルは一度しか提供されません。安全な場所に保管してください。
:::

## SSH Keyの削除

1. **SSH Management** で **Actions** → **Delete** をクリックします。
2. 削除を確認します。
