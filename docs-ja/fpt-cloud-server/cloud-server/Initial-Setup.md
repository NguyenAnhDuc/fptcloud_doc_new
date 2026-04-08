---
id: "Initial-Setup"
title: "初期設定"
description: "FPT Cloud Serverを利用する前に、SSH Keyペア、Subnet、Security Groupを設定して環境を準備します。"
sidebar_label: "初期設定"
sidebar_position: 2
---

# 初期設定

FPT Cloud Serverを利用する前に、以下の設定を完了して仮想マシン作成の準備を整えてください。

## 前提条件

- ✅ FPT Cloudアカウントを持っていること。
- ✅ Tenant、Region、VPCへのアクセス権限が付与されていること。

## FPT Cloud Portalへのログイン

1. [https://console.fptcloud.com](https://console.fptcloud.com/) にアクセスします。
2. 付与されたFPT Cloudのアカウントとパスワードでログインします。
3. 使用するサービスの **Tenant**、**Region**、**VPC** を正しく選択します。

:::tip
FPT Cloudアカウントをお持ちでない場合は、[https://fptcloud.com](https://fptcloud.com/) にアクセスし、**Sign Up** を選択して手順に従って情報を入力してください。サポート担当者がアカウントの確認・作成のためにご連絡します。
:::

## SSH Keyペアの作成

FPT Cloudは、Linuxサーバーのセキュリティ認証として **Password** と **SSH Key** の2つの方式をサポートしています。SSH KeyはPasswordより安全なため、推奨されています。

1. メニューから **Compute Engine** → **SSH Management** を選択し、**Import SSH key** をクリックします。

   [![Import SSH keyボタンがあるSSH Management画面](/img/migrated/Userguide-FPT-Cloud-Server-2022-1-1024x5-8b0e181c.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-1-1024x5-8b0e181c.png)

2. 以下の情報を入力します。
   - **Name**: SSH Keyの名前。
   - **Public Key**: 既存のPublic Keyを入力するか、**Generate new key pair** を選択してシステムに自動生成させます。

   [![Import SSH keyダイアログ](/img/migrated/Userguide-FPT-Cloud-Server-2022-2-f88ee771.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-2-f88ee771.png)

3. **Save** をクリックします。システムがSSH Keyペアを作成し、`.pem` 形式のPrivate Keyファイルを自動でダウンロードします。

   [![SSH Key作成完了画面](/img/migrated/Userguide-FPT-Cloud-Server-2022-3-1024x5-3df2476e.png)](/img/migrated/Userguide-FPT-Cloud-Server-2022-3-1024x5-3df2476e.png)

:::danger
`.pem` 形式のPrivate Keyファイルは一度しか提供されません。サーバーへのアクセスを失わないよう、安全な場所に保管してください。
:::

## Subnetの確認と作成

仮想マシンを作成するには、VPC内に稼働中のSubnetが必要です。システムはそのSubnetからPrivate IPを取得して仮想マシンに割り当てます。

1. メニューから **Networking** → **Subnets** を選択し、**Create subnet** をクリックします。

   [![Create subnetボタンがあるSubnets画面](/img/migrated/image-1744794276761-161dcee6.png)](/img/migrated/image-1744794276761-161dcee6.png)

2. 以下の情報を入力します。
   - **Name**: Subnetのわかりやすい名前。
   - **Type**: Routed（NATを通じてインターネットにルーティング）またはIsolated（インターネット接続なし）。
   - **Network Address（CIDR）**: 有効なCIDRを入力。
   - **Gateway IP**: 有効なGatewayアドレスを入力。
   - **Static IP Pool** *(省略可)*: 使用するIPアドレス範囲。
   - **Primary DNS**: IPv4 DNSアドレス（デフォルト: 8.8.8.8）。
   - **Secondary DNS** *(省略可)*: セカンダリDNS。
   - **Add tag** *(省略可)*: Subnetに付与するタグを選択。

   [![Create subnetダイアログ](/img/migrated/image-1744794289261-ead4183b.png)](/img/migrated/image-1744794289261-ead4183b.png)

3. **Create subnet** をクリックします。

新しいSubnetが **Subnets** テーブルに表示されます。

[![作成後のSubnetリスト](/img/migrated/image-1744794442277-c162eaf9.png)](/img/migrated/image-1744794442277-c162eaf9.png)

## Security Groupの作成

Security Groupは仮想ネットワークファイアウォールとして機能し、仮想マシンへの受信・送信トラフィックを制御することで、インターネットからの攻撃を防ぎます。

FPT Cloudは以下の2種類をサポートしています。
- **Security Group**: インターネットとの送受信トラフィックを制御。
- **Distributed Firewall**: 内部ネットワーク内のトラフィックを制御。

1. メニューから **Networking** → **Security group** を選択し、**New Security Group** をクリックします。

   [![New Security GroupボタンがあるSecurity Group画面](/img/migrated/image-1711095113934-f0d896b0.png)](/img/migrated/image-1711095113934-f0d896b0.png)

2. 以下の情報を入力します。
   - **Name**: Security Groupの名前。
   - **Type**: Security GroupまたはDistributed Firewall。
   - **Subnet**: リストからSubnetを選択。
   - **Applied CIDR / instances** *(省略可)*: 適用する仮想マシンまたはCIDR範囲を選択。
   - **Configure security rule**: 必要に応じてInbound ruleとOutbound ruleを設定。

   [![New Security Groupダイアログ](/img/migrated/image-1711095173572-26de46ab.png)](/img/migrated/image-1711095173572-26de46ab.png)

3. **Create security group** をクリックします。

新しいSecurity Groupが **Security Group** テーブルに表示されます。

[![作成後のSecurity Groupリスト](/img/migrated/image-1711095189056-ddaa6e99.png)](/img/migrated/image-1711095189056-ddaa6e99.png)

## 次のステップ

- [仮想マシンの作成](./quick-starts-tao-mot-may-ao.md)
