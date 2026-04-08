---
id: "connect-strongswan"
title: "StrongSwanデバイスの接続"
description: "FPT Smart CloudのVPN Site-to-SiteサービスにStrongSwanルーターデバイスを接続するガイドです。"
sidebar_label: "StrongSwanデバイスの接続"
sidebar_position: "17"
---

# StrongSwanデバイスの接続

この記事では、FPT Smart CloudのVPN Site-to-SiteサービスにVPN_S2S接続するルーターデバイスの構築方法を説明します。
  * [ステップ1: strongSwanの構築](/ja/docs/fpt-network/vpn-site-to-site/)/
  * [ステップ2: VPN_AASの設定](/ja/docs/fpt-network/vpn-site-to-site/)/
  * [ステップ3: StrongSwanの設定](/ja/docs/fpt-network/vpn-site-to-site/)/

以下の条件を確認してください：
  * PortalページのVPNAAS
  * **strongSwan 5.9.14** がインストールされたUbuntu 20.04
  * パブリックIP（簡略化のためFloating IPを使用せず、VMに直接アタッチ）
  * デバッグ用のVMサーバー×1台（オプション）

## ステップ1: strongSwanの構築
*** 注意: strongSwanの構築には、方法1.1または方法1.2のいずれかのみを実施してください**

**1.1: ソースからstrongSwan 5.9.14を構築する（技術の習得を目指す場合）**
  * Horizonでユーザーのkeypairとネットワークproviderを使用してイメージからVMを作成します。
  * 以下のパッケージをインストールします：

```
Copyapt-get update
apt-get install vim git wget traceroute ngrep net-tool gcc g++ libgmp-dev build-essential devscripts debhelper dh-make autoconf automake libtool checkinstall nmap curl
```

  * **以下のリンクからstrongSwanのソースをダウンロードします：**

```
Copywget https://github.com/strongswan/strongswan/releases/download/5.9.14/strongswan-5.9.14.tar.gz
tar -xzvf strongswan-5.9.14.tar.gz
cd strongswan-5.9.14/
```

  * **ソースコードのconfigureとmakeを実施します：**

```
Copy./configure --prefix=/usr --sysconfdir=/etc
make
checkinstall
```

* * *

### 1.2: **リポジトリからstrongSwanをインストールする**
```
Copyapt-get update
apt install strongswan strongswan-pki
```

**1.2: リポジトリからstrongSwanをインストールする**
apt-get update
apt install strongswan strongswan-pki

## ステップ2: VPN Site-to-Siteの設定
<https://console.fptcloud.com/> にアクセスしてVPN Site To Siteを作成します。

**Customer Gatewayの作成:**
+Remote private network: VyosのLAN Subnetの範囲
+Remote IP public: VyosのパブリックIP
[![](/img/migrated/photo_1_2025-07-09_17-34-57-32383825.jpg)](/img/migrated/photo_1_2025-07-09_17-34-57-32383825.jpg)

**VPN Connectionの作成:**
VPN Connectionのパラメーターには3つの主要セクションがあります：
  * General information（VPN接続の基本情報）
  * Remote VPN Information（暗号化情報およびお客様情報）
  * Dead Peer Detection（問題発生時の自動リトライ回数）

**セクション1: General information** [![](/img/migrated/photo_2_2025-07-09_17-34-57-7b88464a.jpg)](/img/migrated/photo_2_2025-07-09_17-34-57-7b88464a.jpg)

**セクション2: Remote VPN information**
[![](/img/migrated/photo_3_2025-07-09_17-34-57-c1861664.jpg)](/img/migrated/photo_3_2025-07-09_17-34-57-c1861664.jpg)
Providers = "others" を選択し、以下の手順に従ってください：
  * ステップ1: providers name = "StrongSwan" を入力
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

**セクション3: Dead peer detection**
[![](/img/migrated/photo_4_2025-07-09_17-34-57-abef93ff.jpg)](/img/migrated/photo_4_2025-07-09_17-34-57-abef93ff.jpg)
すべての情報を入力したら、「Create VPN Connection」を選択してください。

## ステップ3: StrongSwanの設定
- 作成したキーでUbuntuにSSHログインします。
- VMのIPアドレスにuser「ubuntu」でSSHログインします。

## StrongSwan VPNの設定
以下のコマンドを実行します（パラメーターを置き換えてください）：

```
CopystrongSwanのバージョン確認
swanctl -v
```

/etc/ipsec.conf を以下のテンプレートで編集します：

```
Copyconfig setup
        charondebug="all"
        uniqueids=yes

conn myvpn
    type=tunnel
    auto=start
    keyexchange=ikev2
    ike=aes256-sha256-modp2048
    keyingtries=%forever
    lifetime=3600s
    dpddelay=30s
    dpdtimeout=120s
    dpdaction=restart
    esp=aes256-sha256-modp2048
    left=x.x.x.x    //StrongSwanのIP
    leftsubnet=x.x.x.x/24 //StrongSwanのSubnet
    leftauth=psk
    right=x.x.x.x    // 接続先のIP
    rightsubnet=x.x.x.x/24 //接続先のSubnet
    rightauth=psk
    authby=secret
    auto=start
```

/etc/ipsec.secret を以下のテンプレートで編集します：

```
Copy# This file holds shared secrets or RSA private keys for authentication.
x.x.x.x x.x.x.x : PSK "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"   // Pre-shared key
# which knows the public part.
```

  * 注意：

- StrongSwanはUbuntu上で動作するバックグラウンドプログラムです。最高のパフォーマンスを得るためにCPUでマルチネットワークを有効にする必要があります。
- StrongSwanはUbuntu上で動作するバックグラウンドプログラムです。接続するためにファイアウォールとルーティングを有効にする必要があります。
- FCIのOpenstackでのラボ環境では、**Destination** を接続先IPに、nexthopをStrongSwanのLAN IPに設定したRouterの **Static route** を追加する必要があります。
