---
id: "tutorials-thay-doi-thong-tin-cau-hinh-may-chu"
title: "仮想マシン構成の変更"
description: "FPT Cloud Serverで仮想マシンのRAM/CPUリサイズ、名前変更、パスワードリセットを行う方法。"
sidebar_label: "仮想マシン構成の変更"
sidebar_position: 17
---

# 仮想マシン構成の変更

FPT Cloud Serverでは仮想マシンの構成を柔軟に変更できます — RAM/CPUのリサイズ、名前変更、パスワードリセットに対応しています。

## 構成のリサイズ

リサイズにより、作成済み仮想マシンのRAM/CPU構成を変更できます。リサイズ中は仮想マシンが一時停止し、完了後に自動的に再起動します。

:::tip
**Hot-add** 機能を有効にすると、将来的に仮想マシンをシャットダウンせずにリサイズできます。
:::

1. **Instance Management** で **Actions** → **Resize VM** を選択します。

   [![Resize VMオプションのあるActionsメニュー](/img/migrated/Userguide-FPT-Cloud-Server-2022-41-1024x-3163067f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-41-1024x-3163067f.png)

2. 既存テンプレートから新しい構成を選択するか、**Custom** でカスタム構成を作成します。**Resize** をクリックして確認します。

   [![Resize VMダイアログ](/img/migrated/Userguide-FPT-Cloud-Server-2022-42-6016416a.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-42-6016416a.png)

## 仮想マシンの名前変更（Rename）

1. **Instance Management** で **Actions** → **Rename** を選択します。

   [![RenameオプションのあるActionsメニュー](/img/migrated/Userguide-FPT-Cloud-Server-2022-43-1024x-f181b90f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-43-1024x-f181b90f.png)

2. 新しい名前を入力し、**Rename** をクリックします。

   [![Renameダイアログ](/img/migrated/Userguide-FPT-Cloud-Server-2022-44-517e8929.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-44-517e8929.png)

## パスワードのリセット（Reset Password）

パスワード認証方式を使用している仮想マシンでは、rootアカウントのパスワードをリセットできます。

1. **Instance Management** で **Actions** → **Reset Password** を選択します。

   [![Reset PasswordオプションのあるActionsメニュー](/img/migrated/Userguide-FPT-Cloud-Server-2022-45-1024x-17f8c10f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-45-1024x-17f8c10f.png)

2. **Reset Password** をクリックします。システムが新しいパスワードをメールで送信します。

## 次のステップ

- [Snapshotによるバックアップ](./tutorials-backup-may-chu-voi-snapshot.md)
