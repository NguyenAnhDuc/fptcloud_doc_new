---
id: "tutorials-ket-noi-vao-may-ao-linux"
title: "Tutorials Ket Noi Vao May Ao Linux"
sidebar_label: "Linux仮想マシンへの接続"
sidebar_position: 4
---

Linux仮想マシンへの接続


FPT PortalでLinuxカーネルの仮想マシン（Ubuntu、CentOS、Debian）が正常に作成されると、ユーザーはデフォルトで提供されているWebコンソールを使用してアクセスできます。

また、PuTTYやBitviseなどのSSHクライアントやサードパーティソフトウェアを使って外部からログインすることも可能です。

## WebコンソールでLinux仮想マシンに接続する
**Webコンソール**は、**FPT Cloud**上のすべての**Linux**仮想マシンの操作をサポートしており、**Public IP**が割り当てられていない仮想マシンも含まれます。

メニューから**Instance Management**を選択し、接続したい仮想マシンの**Actions**セクションで**Console**を選択します。

![Userguide FPT Cloud Server 2022 22](/img/migrated/docs-ja-cloud-server/tutorials-ket-noi-vao-may-ao-linux/img-001.png)

ブラウザはすぐにサーバーの画面を含む新しいウィンドウを開きます。この画面から、ユーザーは接続中のサーバーを完全に制御・操作できます。

![Userguide FPT Cloud Server 2022 28](/img/migrated/docs-ja-cloud-server/tutorials-ket-noi-vao-may-ao-linux/img-002.png)

## Linux仮想マシンへのリモート接続の設定
**SSHクライアント**、**Bitvise**、**PuTTY**などを使って**Linux**仮想マシン（**Ubuntu**、**CentOS**など）に接続するには、仮想マシンに**Floating IP**を割り当て、**SSH接続**用に**SSH**ポートを開放する必要があります。**FPT Cloud**では、**Security Group**を割り当てることで仮想マシンのポートを開放できます。

**ステップ1**: **Linux** OSの仮想マシンを作成し、[**Floating IP管理**](<https://fptcloud.com/documents/cloud-server/?doc=quan-ly-floating-ip>)の手順に従って**Floating IP**を割り当て、起動します。

![Userguide FPT Cloud Server 2022 29](/img/migrated/docs-ja-cloud-server/tutorials-ket-noi-vao-may-ao-linux/img-003.png)

**ステップ2**: **SSH**ポートが開放された**Security Group**を仮想マシンに割り当てます。該当する**Security Group**がない場合は、[**Security Group管理**](<https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group>)の手順に従って新規作成できます。

![file](/img/migrated/docs-ja-cloud-server/tutorials-ket-noi-vao-may-ao-linux/img-004.png)

**ステップ3**: 設定が完了したら、**Floating IP**、**SSHポート**、**SSH Key**ファイル、または**パスワード**を使用してSSHクライアントから仮想マシンに接続できます。

それでも接続できない場合は、仮想マシンが起動しているか、Floating IPが正しいかを確認し、[**Security Group管理**](<https://fptcloud.com/documents/cloud-server/?doc=quan-ly-security-group>)の手順に従って**SSH**ポートを再度開放してください。

## SSHクライアントでLinux仮想マシンに接続する
ユーザーはWindowsで利用可能な**cmd.exe**や**PowerShell**などのSSHクライアントを使って仮想マシンにSSH接続できます。

**ステップ1:** Windowsで**CMD**または**PowerShell**を開きます。

**ステップ2:** **パスワード**で接続する場合は、次のコマンドを使用します：

`ssh <>@<>`

![Userguide FPT Cloud Server 2022 32](/img/migrated/docs-ja-cloud-server/tutorials-ket-noi-vao-may-ao-linux/img-005.png)

SSH Keyペアで接続する場合は、まずcdコマンドで**SSH key**ファイルが含まれるディレクトリに移動します：

`cd <<pemファイルが含まれるディレクトリへのパス>>`

![Userguide FPT Cloud Server 2022 33](/img/migrated/docs-ja-cloud-server/tutorials-ket-noi-vao-may-ao-linux/img-006.png)

次のコマンドで仮想マシンに接続します：

`ssh -i "<>" << Username >>@<>`

**ステップ3:** 仮想マシンへの初回接続時は、**Hostsフィンガープリント**の確認を求められます。接続を承認して続行するには**"yes"**と入力します。

![Userguide FPT Cloud Server 2022 34](/img/migrated/docs-ja-cloud-server/tutorials-ket-noi-vao-may-ao-linux/img-007.png)

SSHクライアントでサーバーへの接続が成功しました。

![Userguide FPT Cloud Server 2022 35](/img/migrated/docs-ja-cloud-server/tutorials-ket-noi-vao-may-ao-linux/img-008.png)

**注意:** **WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!** というエラーが発生した場合は、次のコマンドで以前に保存されたHostsフィンガープリントを削除し、最初からやり直してください：
`ssh-keygen -R "<>"`
