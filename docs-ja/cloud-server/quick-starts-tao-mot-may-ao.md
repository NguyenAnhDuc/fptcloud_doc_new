---
id: "quick-starts-tao-mot-may-ao"
title: "仮想マシンの作成"
description: "FPT Cloud Server上でCPU、RAM、Storage、Networkを設定して新しい仮想マシンを作成します。"
sidebar_label: "仮想マシンの作成"
sidebar_position: 3
---

# 仮想マシンの作成

仮想マシン（Instance）を作成することで、WebアプリケーションのデプロイメントBから機械学習まで、さまざまなワークロードをクラウド上で迅速に実行できます。

## 前提条件

- ✅ [初期設定](./Initial-Setup.md) が完了していること。
- ✅ VPC内に稼働中のSubnetが存在すること。

## 仮想マシンの作成

1. メニューから **Compute Engine** → **Instance Management** を選択し、**Create instance** をクリックします。

   [![Create instanceボタンがあるInstance Management画面](/img/migrated/image-1712739862804-d5b7552c.png)](/img/migrated/image-1712739862804-d5b7552c.png)

   仮想マシン作成ダイアログが表示されます。

   [![Create instanceダイアログ](/img/migrated/Userguide-FPT-Cloud-Server-2022-18-1024x-f0c8f0c9.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-18-1024x-f0c8f0c9.png)

2. 以下の項目に従って仮想マシンを設定します。

### Configuration

- **Instance Type**: 用途に合ったシリーズを選択します。基本的な用途には **General**、高性能用途には **GPU** を選択します。

  [![Instance Typeの選択](/img/migrated/image-1724657781979-ab2ee565.png)](/img/migrated/image-1724657781979-ab2ee565.png)

- **Image**: 適切なOSを選択します。各OSグループには複数のバージョンがあります。Custom Image、ISO、またはSnapshotから仮想マシンを作成することもできます。

  [![GeneralのImage選択](/img/migrated/image-1724661980458-423745c9.png)](/img/migrated/image-1724661980458-423745c9.png)

- **Resource type**: CPU・RAMの構成を選択するか、カスタム構成を作成します。

  [![Resource typeの選択](/img/migrated/image-1724662047559-1be6927b.png)](/img/migrated/image-1724662047559-1be6927b.png)

### Storage Disk

- **Storage Policy**: Storageの種類を選択します。
- **Size**: ディスクサイズを選択します。

  [![Storageの設定](/img/migrated/image-1724662063044-c293e47c.png)](/img/migrated/image-1724662063044-c293e47c.png)

### Network

- **Subnet** および **Private IP**: 仮想マシンのネットワークを選択します。Private IPを手動入力するか、システムに自動生成させることができます。
- **Security Group** *(省略可)*: トラフィックを制御するSecurity Groupを選択します。

  [![Networkの設定](/img/migrated/image-1724662077573-14ea2c24.png)](/img/migrated/image-1724662077573-14ea2c24.png)

### Authentication

- **SSH Key**: システムが最新のSSH Keyを自動選択します（変更可能）。

  [![SSH Keyの選択](/img/migrated/image-1724662090638-f8be1084.png)](/img/migrated/image-1724662090638-f8be1084.png)

- **Password**: Standard方式を選択した場合は、パスワードを記録して安全に保管してください。

  [![Passwordの入力](/img/migrated/image-1724662104611-d3e63623.png)](/img/migrated/image-1724662104611-d3e63623.png)

### Advanced

  [![Advancedの設定](/img/migrated/image-1724662116137-16450e30.png)](/img/migrated/image-1724662116137-16450e30.png)

- **Instance group** *(省略可)*: 物理ホスト上での仮想マシンの配置を設定するために選択します。
- **Instanceの名前**: 仮想マシンの名前を入力します。これが仮想マシンのホスト名になります。
- **User data** *(省略可)*: 起動時に自動設定を行うcloud-initスクリプトを含めます。

3. **Create Instance** をクリックします。

   [![Instance作成の確認](/img/migrated/image-1724664453215-c36b4dde.png)](/img/migrated/image-1724664453215-c36b4dde.png)

新しい仮想マシンが管理画面に表示され、名前、構成（RAM、CPU、Storage）、IPアドレス、稼働状態が確認できます。

[![作成後のInstanceリスト](/img/migrated/Userguide-FPT-Cloud-Server-2022-21-1024x-e04e8c2e.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-21-1024x-e04e8c2e.png)

## 次のステップ

- [ISOファイルからのVM作成時の注意事項](./create-vm-iso.md)
- [Windows仮想マシンへの接続](./tutorials-ket-noi-vao-may-ao-windows.md)
- [Linux仮想マシンへの接続](./tutorials-ket-noi-vao-may-ao-linux.md)
