---
id: "connect-fci-vmware"
title: FCI-VMware VPN接続の設定
description: "UnifyポータルでVMWとOPSの2つのプラットフォームのVPNaaSを接続するガイドです。"
sidebar_label: FCI-VMware VPN接続の設定
sidebar_position: "22"
---

# FCI-VMware VPN接続の設定

この記事では、UnifyポータルでVMWとOPSの2つのプラットフォームのVPNaaSを接続する方法を説明します。
  * [ステップ1: OpenstackでのVPN_AASの設定](/ja/docs/fpt-network/vpn-site-to-site/)/
  * [ステップ2: VMWare CloudでのVPN_AASの設定](/ja/docs/fpt-network/vpn-site-to-site/)/
  * [ステップ3: 接続の確認](/ja/docs/fpt-network/vpn-site-to-site/)/

以下の条件を確認してください：
  * UnifyポータルのVPNAAS OPS
  * VMWare Cloud

この例では、以下のトポロジーのパラメーターでVPN Site-to-Site接続を作成します。[![file](/img/migrated/image-1744186989019-ef1c7215.png)](/img/migrated/image-1744186989019-ef1c7215.png)

## ステップ1: OpenstackでのVPN_AASの設定
[**https://console.fptcloud.com**](https://console.fptcloud.com/) にアクセスしてVPN Site To Siteを作成します。

Customer Gatewayの作成：
+ Remote IP public: VMWのVPN GatewayのFloating IP
+ Remote private network: VMWのLAN Subnetの範囲
[![](/img/migrated/photo_1_2025-07-09_17-37-17-46c848d8.jpg)](/img/migrated/photo_1_2025-07-09_17-37-17-46c848d8.jpg)

VPN Connectionの作成
**「Pre-shared key」はVMW側でVPN Connectionを作成する際に必要なため保存しておいてください。**
VPN Connectionのパラメーターには3つの主要セクションがあります：
  * General information（VPN接続の基本情報）
  * Remote VPN Information（暗号化情報およびお客様情報）
  * Dead Peer Detection（問題発生時の自動リトライ回数）

**セクション1: General information** [![](/img/migrated/photo_2_2025-07-09_17-37-17-85fbfff3.jpg)](/img/migrated/photo_2_2025-07-09_17-37-17-85fbfff3.jpg)

**セクション2: Remote VPN information**
[![](/img/migrated/photo_3_2025-07-09_17-37-17-fc829da9.jpg)](/img/migrated/photo_3_2025-07-09_17-37-17-fc829da9.jpg)
Providers = "others" を選択し、以下の手順に従ってください：
  * ステップ1: providers name = "VMWare" を入力
  * ステップ2: IKEおよびIPSecの情報を以下のとおり入力：

**IKEの設定:**
  * Encryption algorithm: aes-256
  * Authorization algorithm: sha256
  * IKE version: ikev2
  * Lifetime units: seconds
  * Lifetime value: 28800
  * DH Group: GROUP_14
  * Phase1 negotiation mode: main

**IPsecの設定:**
  * Encapsulation mode: tunnel
  * Encryption algorithm: aes-256
  * Authorization algorithm: sha256
  * Lifetime units: seconds
  * Lifetime value: 3600
  * Perfect forward secrecy (PFS): GROUP_14
  * Transform protocol: esp

**セクション3: Remote VPN information** [![](/img/migrated/Screenshot-2025-08-18-110311-1-d443cc15.png)](/img/migrated/Screenshot-2025-08-18-110311-1-d443cc15.png)
DelayとMax failureのパラメーターを入力し、**Create VPN Connection** を選択します。

## ステップ2: VMWare CloudでのVPN_AASの設定
- VMwareシステムにアクセスしてVPN Site to Siteの接続情報を設定します。[![file](/img/migrated/image-1744187357567-a443e457.png)](/img/migrated/image-1744187357567-a443e457.png)
**-** **Peer Authentication** タブで、**Pre-shared key** にOSPで作成したキーを入力し、Nextをクリックします。[![file](/img/migrated/image-1744187368445-21260a99.png)](/img/migrated/image-1744187368445-21260a99.png)
  * **Endpoint Configuration** の各フィールドを入力します。[![file](/img/migrated/image-1744187391395-c3f680db.png)](/img/migrated/image-1744187391395-c3f680db.png)
  * 作成後、**Customize Security Profile** を選択してIKE policy、IPSec policyをOSPで作成した設定と**一致するように**修正します。[![file](/img/migrated/image-1744187411562-947bda1b.png)](/img/migrated/image-1744187411562-947bda1b.png)
**-** **View statistics** を選択して接続状態を確認します。
ステータスが **UP** と表示されれば、2つのサイト間の接続が成功しています。[![file](/img/migrated/image-1744187423506-91d113ce.png)](/img/migrated/image-1744187423506-91d113ce.png) [![file](/img/migrated/image-1744187435352-3206ec31.png)](/img/migrated/image-1744187435352-3206ec31.png)

## ステップ3: 接続の確認
  * VM OPS → VM VMWareへのPing [![file](/img/migrated/image-1744187482688-2d623cf1.png)](/img/migrated/image-1744187482688-2d623cf1.png)
  * VM VMWare → VM OSPへのPing [![file](/img/migrated/image-1744187497120-5bc3e118.png)](/img/migrated/image-1744187497120-5bc3e118.png)
