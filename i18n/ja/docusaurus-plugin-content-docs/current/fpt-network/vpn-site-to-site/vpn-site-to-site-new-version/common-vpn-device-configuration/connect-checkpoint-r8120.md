---
id: "connect-checkpoint-r8120"
title: "CheckPoint R81.20デバイスの接続"
description: "FPT Smart CloudのVPN Site-to-SiteサービスにCheckPointルーターデバイスを接続するガイドです。"
sidebar_label: "CheckPoint R81.20デバイスの接続"
sidebar_position: "19"
---

# CheckPoint R81.20デバイスの接続

**この記事では、FPT Smart CloudのVPN Site-to-SiteサービスにVPN_S2S接続するルーターデバイスの構築方法を説明します。**
  * [ステップ1: Cloud向けCheckPointの構築](/ja/docs/fpt-network/vpn-site-to-site/)/
  * [ステップ2: VPN Site-to-Siteの設定](/ja/docs/fpt-network/vpn-site-to-site/)/
  * [ステップ3: CheckPointの設定](/ja/docs/fpt-network/vpn-site-to-site/)/
  * [ステップ4: デバッグ - Tracert](/ja/docs/fpt-network/vpn-site-to-site/)/

以下の条件を確認してください：
  * PortalページのVPN Site-to-Site
  * **Check_Point_R82.10_T462_Gaia** という名前でクラウド上にダウンロード・ブートされたCheckPoint R81.20イメージ
  * CheckPoint R81.20と統合されたSmartconsole R81.20バージョン
  * パブリックIP（簡略化のためFloating IPを使用せず、VMに直接アタッチ）
  * デバッグ用のVM×1台（オプション）

## ステップ1: Cloud向けCheckPointの構築
  * **Horizonで2C4G、パブリックIP直結×1、VPN対象ローカルネットワークIP×1の構成でイメージからVMを構築します。**

以下のコマンドを実行してイメージからVMをブートします：

> **Openstack command**
> 
```
Copyopenstack volume create --type Premium-SSD --image Check_Point_R82.10_T462_Gaia --size 20 --bootable DISK-CD  -- Output ID  {`DISK-CD`}
```

> **Openstack command**
> 
```
Copyopenstack volume create --type Premium-SSD --size 100 --bootable DISK-OS-- Output ID  {`DISK-OS`}
```

> **Openstack command**
> 
```
Copyopenstack network list
--output ID {'IP PUBLIC'}
```

> **Openstack command**
> 
```
Copynova boot --availability-zone nova --flavor 2C4G --nic net-id={`IP PUBLIC`} --block-device id=`DISK-OS`},source=volume,dest=volume,bus=virtio,device=/dev/vda,shutdown=preserve,bootindex=0 --block-device id= {`DISK-CD`},source=volume,dest=volume,bus=ide,device=/dev/hda,type=cdrom,bootindex=1 CheckpointServer
```

  * **NoVNCでVMをブートするには、以下の手順に従ってください：**

- **Install Gaia on this system** を選択します。
![file](/img/migrated/image-1744167760192-81a6a944.png)
- OKを選択します。![file](/img/migrated/image-1744167845702-dae767e0.png) - Keyboard Selection画面で **US→ OK** を選択します。![file](/img/migrated/image-1744167953227-ad1fc5f8.png) - OKを選択します。
_（適切な設定を入力するか、デフォルト設定を使用できます）_ ![file](/img/migrated/image-1744167975414-e8f1057c.png) - VMコンソール用のログインパスワードを入力します。![file](/img/migrated/image-1744167988315-c3b3ea8f.png)
- Smartconsole用のパスワードを入力します。![file](/img/migrated/image-1744167999412-e6160631.png) - この手順で取得したパブリックIPと「255.255.255.255」のNetmaskを入力し、OKを選択します。![file](/img/migrated/image-1744168009356-1d3960bd.png) - インストールを完了します。![file](/img/migrated/image-1744168018268-7b88383e.png)

## ステップ2: VPN Site-to-Siteの設定
<https://console.fptcloud.com/> にアクセスしてVPN Site To Siteを作成します。

Customer Gatewayの作成:
**- Remote private network:** CheckpointのLAN Subnetの範囲
**- Remote IP public:** CheckPointのパブリックIP

![](/img/migrated/photo_1_2025-07-09_17-35-39-4cb64a1a.jpg)

VPN Connectionの作成:
VPN Connectionのパラメーターには3つの主要セクションがあります：
  * General information（VPN接続の基本情報）
  * Remote VPN Information（暗号化情報およびお客様情報）
  * Dead Peer Detection（問題発生時の自動リトライ回数）

**セクション1: General information**
![](/img/migrated/photo_2_2025-07-09_17-35-39-d0b49f4e.jpg)
**「Pre-shared key」** はCheckPointへの入力に必要なため保存しておいてください。

**セクション2: Remote VPN information**
![](/img/migrated/photo_3_2025-07-09_17-35-39-5b3401dd.jpg)
Providers = "others" を選択し、以下の手順に従ってください：
  * ステップ1: providers name = "checkpoint" を入力
  * ステップ2: IKEおよびIPSecの情報を以下のとおり入力：

**IKEの設定:**
  * Authorization algorithm: sha256
  * Encryption algorithm: aes 256
  * IKE version: ikev2
  * DH group: group14
  * Lifetime: 3600 seconds
  * Phase1 negotiation mode: main

**IPsecの設定:**
  * Authorization algorithm: sha256
  * Encryption algorithm: aes 256
  * Encapsulation mode: tunnel
  * Transform protocol: esp
  * Perfect Forward Secrecy (PFS): group14
  * Lifetime: 3600 seconds

**セクション3: Remote VPN information**
![](/img/migrated/Screenshot-2025-08-18-110311-7-e1d4980a.png)
DelayとMax failureのパラメーターを入力し、**Create VPN Connection** を選択します。

## ステップ3: CheckPointの設定
- 作成したアカウントでCheckPoint VMのVNCコンソールにログインし、「Cpstart」コマンドを実行します。
- [https://{`IP`}](https://ip./) のIPアドレスでウェブサイトにアクセスし、推奨バージョンのSmartConsoleをダウンロードします。
- 提供された情報でSmartConsoleアプリをインストールしてログインします。
_注意: SmartConsoleにアクセスするにはアクティブ済みのライセンスが必要です。_

操作成功時の画面例: ![file](/img/migrated/image-1744168234439-4a5359ac.png)
- ネットワークLANを作成します。![file](/img/migrated/image-1744168343186-88e28778.png)
- VPN Site-to-SiteのパブリックIPでInteroperable Devicesを作成するには：
**New→ More → Network Object → More → Interoperable Device** ![file](/img/migrated/image-1744168357612-ce4eb460.png)
Name、IPv4 Addressを入力し、OKを選択します。![file](/img/migrated/image-1744168371868-13b38d47.png) ![file](/img/migrated/image-1744168384964-71312a97.png)
- VPN Communication **Star** を作成するには：
**New → More → VPN Community → Star Community** ![file](/img/migrated/image-1744168404637-63c48190.png)
- 以下の設定で：
  * **Center Gateway** にCheckPointを選択します（先ほど作成したもの）
  * **Satellite Gateway** はInteroperable Devicesを選択します
  * **VPN Domain** にLAN/localとRemote/peerの対応するネットワーク範囲を選択します。![file](/img/migrated/image-1744168435213-4c97287e.png) ![file](/img/migrated/image-1744168459774-ff41d81d.png)
  * FPT Smart CloudポータルでのEncryption設定と一致するように設定します：![file](/img/migrated/image-1744168470511-0c22a58e.png) ![file](/img/migrated/image-1744168494302-49000229.png)
- VPN Communityを作成したら、Interoperable Devicesに戻って更新します：![file](/img/migrated/image-1744168513930-fedde2ae.png)
- VPN Communication Meshedに戻り、VPN Site-to-SiteポータルのPre-Share Keyを使用します。![file](/img/migrated/image-1744168529624-ff1e394d.png)
  * **「Publish」** をクリックしてCheckpointにVPN Communityを作成します。![file](/img/migrated/image-1744168554131-7c16e7a4.png)
- 2つのSubnet間および2つのGateway IP間の双方向通信を許可するファイアウォールを設定し、**「Publish」** をクリックします。
![file](/img/migrated/image-1744168578028-40a006ae.png)
  * 最後にCheckpoint内部ネットワークのルートを設定します（VPN Site-to-Site側は設定済み）。

CheckPoint Gaia OSでは、set static-routeコマンドを使用してルートを追加できます。構文と例：

> **Openstack command**
> 
```
Copyset static-route <destination-network> nexthop gateway address <gateway-ip> on
```

例: `192.168.1.0/24` へのトラフィックをゲートウェイ `10.0.0.1` 経由でルーティングする場合：

> **Openstack command**
> 
```
Copyset static-route 192.168.1.0/24 nexthop gateway address 10.0.0.1 on
```

ルート追加後、以下のコマンドで設定を保存します：

> **Openstack command**
> 
```
Copysave config
```

## ステップ4: デバッグ - Tracert
  * ネットワーク内のマシンから互いにpingを実行し、疎通が確認できれば操作成功です。
