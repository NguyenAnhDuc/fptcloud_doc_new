---
id: "connect-vyos-1.5"
title: "Vyos 1.5デバイスの接続"
description: "FPT Smart CloudのVPN Site-to-SiteサービスにVyosルーターデバイスを接続するガイドです。"
sidebar_label: "Vyos 1.5デバイスの接続"
sidebar_position: "18"
---

# Vyos 1.5デバイスの接続

この記事では、FPT Smart CloudのVPN Site-to-SiteサービスにVPN_S2S接続するルーターデバイスの構築方法を説明します。
  * [ステップ1: Cloud向けVyos1.5の構築](/docs/ja/fpt-network/vpn-site-to-site/)/
  * [ステップ2: VPN Site-to-Siteの設定](/docs/ja/fpt-network/vpn-site-to-site/)/
  * [ステップ3: Vyosの設定](/docs/ja/fpt-network/vpn-site-to-site/)/

以下の条件を確認してください：
  * PortalページのVPNAAS
  * **Vyos 1.5** という名前でクラウド上にダウンロード・ブートされたVyos 1.5イメージ
  * パブリックIP（簡略化のためFloating IPを使用せず、VMに直接アタッチ）
  * デバッグ用のVM×1台（オプション）

## ステップ1: Cloud向けVyos1.5の構築
  * Horizonでユーザーのkeypairと任意のネットワークprovider {`IP PUBLIC`} を使用してイメージからVMを作成します。

## ステップ2: VPN Site-to-Siteの設定
<https://console.fptcloud.com/> にアクセスしてVPN Site To Siteを作成します。Customer Gatewayを作成します：
  * Remote private network: VyosのLAN Subnetの範囲
  * Remote IP public: VyosのパブリックIP

Customer Gatewayの作成: [![](/img/migrated/photo_1_2025-07-09_17-35-17-0d6c8739.jpg)](/img/migrated/photo_1_2025-07-09_17-35-17-0d6c8739.jpg)

VPN Connectionの作成:
VPN Connectionのパラメーターには3つの主要セクションがあります：
  * General information（VPN接続の基本情報）
  * Remote VPN Information（暗号化情報およびお客様情報）
  * Dead Peer Detection（問題発生時の自動リトライ回数）

**セクション1: General information**
注意: Pre-shared-keyパラメーターはVyosとの接続に必要なため保存しておいてください。
[![](/img/migrated/photo_2_2025-07-09_17-35-17-4270f2cf.jpg)](/img/migrated/photo_2_2025-07-09_17-35-17-4270f2cf.jpg)

**セクション2: Remote VPN information**
[![](/img/migrated/photo_3_2025-07-09_17-35-17-5faf2dd4.jpg)](/img/migrated/photo_3_2025-07-09_17-35-17-5faf2dd4.jpg)
Providers = "others" を選択し、以下の手順に従ってください：
  * ステップ1: providers name = "Vyos" を入力
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
[![](/img/migrated/Screenshot-2025-08-18-110311-8-f0fc7b81.png)](/img/migrated/Screenshot-2025-08-18-110311-8-f0fc7b81.png)
DelayとMax failureのパラメーターを入力し、VPN Connectionを作成します。

## ステップ3: Vyosの設定
- 作成したキーでVyosにSSHログインします。
- {`IP PUBLIC`} のIPアドレスにuser「vyos」でSSHログインします。例: ssh vyos@{`IP PUBLIC`}
以下のコマンドを実行します（パラメーターを置き換えてください）：

```
Copyconfigure
```

```
Copyset interfaces ethernet eth0 address '{`IP Public Vyos`}'
set interfaces ethernet eth1 vif 111 address '{`IP LAN Vyos`}/24'
set protocols static route 0.0.0.0/0 next-hop {`IP-Remote`}
set vpn ipsec authentication psk RIGHT id '{`IP Public Vyos`}'
set vpn ipsec authentication psk RIGHT id {`IP-Remote`}
set vpn ipsec authentication psk RIGHT secret ' {`Pre-Share-Key`}'
set vpn ipsec esp-group ESP-GROUP mode 'tunnel'
set vpn ipsec esp-group ESP-GROUP proposal 1 encryption 'aes256'
set vpn ipsec esp-group ESP-GROUP proposal 1 hash 'sha256'
set vpn ipsec ike-group IKE-GROUP key-exchange 'ikev2'
set vpn ipsec ike-group IKE-GROUP proposal 1 dh-group '14'
set vpn ipsec ike-group IKE-GROUP proposal 1 encryption 'aes256'
set vpn ipsec ike-group IKE-GROUP proposal 1 hash 'sha256'
set vpn ipsec interface 'eth0'
set vpn ipsec site-to-site peer RIGHT authentication mode 'pre-shared-secret'
set vpn ipsec site-to-site peer RIGHT connection-type 'initiate'
set vpn ipsec site-to-site peer RIGHT default-esp-group 'ESP-GROUP'
set vpn ipsec site-to-site peer RIGHT ike-group 'IKE-GROUP'
set vpn ipsec site-to-site peer RIGHT local-address '{`IP Public Vyos`}'
set vpn ipsec site-to-site peer RIGHT remote-address {`IP-Remote`}
set vpn ipsec site-to-site peer RIGHT tunnel 0 local prefix '{`Sunet LAN Vyos`}/24'
set vpn ipsec site-to-site peer RIGHT tunnel 0 remote prefix '{`Sunet LAN Remote`}/24'
```

設定を保存してコミットします。

```
Copycommit
save
```
