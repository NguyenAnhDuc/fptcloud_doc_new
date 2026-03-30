---
id: "tutorials-ket-noi-vao-may-ao-linux"
title: "Linux仮想マシンへの接続"
description: "Web Console、SSHクライアント、またはPuTTY/BitviseでLinux仮想マシンに接続する方法。"
sidebar_label: "Linux仮想マシンへの接続"
sidebar_position: 13
---

# Linux仮想マシンへの接続

Linux仮想マシン（Ubuntu、CentOS、Debian）が正常に作成されたら、**Web Console**（デフォルト）または **SSHクライアント** / **PuTTY** / **Bitvise**（仮想マシンにFloating IPがある場合）でアクセスできます。

## Web Consoleによる接続

Web ConsoleはFPT Cloud上のすべてのLinux仮想マシンの操作をサポートしており、Public IPがない仮想マシンも利用できます。

1. **Instance Management** で接続する仮想マシンを選択し、**Actions** → **Console** をクリックします。

   [![ConsoleオプションのあるActionsメニュー](/img/migrated/Userguide-FPT-Cloud-Server-2022-22-1024x-8e9a3fe1.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-22-1024x-8e9a3fe1.png)

ブラウザが新しいウィンドウを開き、サーバー画面が表示されます。

[![Web Console Linux画面](/img/migrated/Userguide-FPT-Cloud-Server-2022-28-6638a596.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-28-6638a596.png)

## SSH経由のリモート接続設定

SSHクライアントで接続するには、仮想マシンに **Floating IP** があり、Security Groupで **SSHポート** が開放されている必要があります。

1. Linux仮想マシンを作成し、**Floating IP** を割り当てて起動します。

   [![Floating IPのあるLinux仮想マシン](/img/migrated/Userguide-FPT-Cloud-Server-2022-29-1024x-5490201f.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-29-1024x-5490201f.png)

2. SSHポートを開放した **Security Group** を仮想マシンに割り当てます。

   [![SSHポートのSecurity Group](/img/migrated/image-1744794012514-cdf8c2ce.png)](/img/migrated/image-1744794012514-cdf8c2ce.png)

3. **Floating IP**、**SSHポート**、**SSH Key** ファイルまたは **パスワード** を使ってSSHクライアントで接続します。

## SSHクライアント（CMD/PowerShell）による接続

1. WindowsでCMDまたはPowerShellを開きます。

2. パスワードで接続：

   ```bash
   ssh <USERNAME>@<FLOATING_IP>
   ```

   [![パスワードでのSSH接続](/img/migrated/Userguide-FPT-Cloud-Server-2022-32-88cbc1e0.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-32-88cbc1e0.png)

   SSH Keyで接続：

   ```bash
   cd <PEMファイルが格納されているディレクトリのパス>
   ssh -i "<キーファイル名>" <USERNAME>@<FLOATING_IP>
   ```

   [![SSH Keyが格納されているディレクトリへ移動](/img/migrated/Userguide-FPT-Cloud-Server-2022-33-bf7c47a3.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-33-bf7c47a3.png)

3. 初回接続時は、Hostフィンガープリントの確認を求められたら **yes** と入力します。

   [![Hostフィンガープリントの確認](/img/migrated/Userguide-FPT-Cloud-Server-2022-34-2185365d.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-34-2185365d.png)

接続が成功しました。

[![SSH接続成功](/img/migrated/Userguide-FPT-Cloud-Server-2022-35-35e7f42a.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-35-35e7f42a.png)

:::tip
**WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!** エラーが発生した場合は、保存されているHostフィンガープリントを削除してください：

```bash
ssh-keygen -R "<FLOATING_IP>"
```
:::

## 次のステップ

- [仮想マシンへのNIC（ネットワークカード）の追加](./attach-a-network-card-to-the-virtual-machine.md)
