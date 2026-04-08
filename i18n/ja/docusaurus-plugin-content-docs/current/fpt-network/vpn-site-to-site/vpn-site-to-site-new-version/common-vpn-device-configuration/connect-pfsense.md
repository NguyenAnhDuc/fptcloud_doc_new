---
id: "connect-pfsense"
title: "Pfsenseデバイスの接続"
description: "FPT Smart CloudのVPN Site-to-SiteサービスにPfsenseデバイスを接続するガイドです。"
sidebar_label: "Pfsenseデバイスの接続"
sidebar_position: "16"
---

# Pfsenseデバイスの接続

**この記事では、FPT Smart CloudのVPN Site-to-SiteサービスにVPN_S2S接続するPfsenseデバイスの構築方法を説明します。**
  * [ステップ1: Cloud向けPfsenseの構築](/ja/docs/fpt-network/vpn-site-to-site/)/
  * [ステップ2: VPN Site-to-Siteの設定](/ja/docs/fpt-network/vpn-site-to-site/)/
  * [ステップ3: Pfsenseの設定](/ja/docs/fpt-network/vpn-site-to-site/)/

以下の条件を確認してください：
  * PortalページのVPNAAS
  * **Pfsense** という名前でクラウド上にダウンロード・ブートされたPfsenseイメージ
  * パブリックIP（簡略化のためFloating IPを使用せず、VMに直接アタッチ）
  * 対応するネットワーク範囲
  * デバッグ用のVPNサーバー×2台（2c4g）

## ステップ1: Cloud向けPfsenseの構築
  * HorizonでPfsenseイメージからVMを構築（2C4G、パブリックIP直結×1、VPN対象ローカルネットワークIP×1）
  * SSH経由でVMコンソールにアクセス可能

## ステップ2: VPN Site-to-Siteの設定
<https://console.fptcloud.com/> にアクセスしてVPN Site-to-Siteを作成します。

**Customer Gatewayの作成:**
  * Remote private network: PfsenseのLAN Subnetの範囲
  * Remote IP public: PfsenseのパブリックIP

[![](/img/migrated/photo_1_2025-07-09_17-34-31-98e1e24d.jpg)](/img/migrated/photo_1_2025-07-09_17-34-31-98e1e24d.jpg)

**VPN Connectionの作成:**
VPN Connectionのパラメーターには3つの主要セクションがあります：
  * General information（VPN接続の基本情報）
  * Remote VPN Information（暗号化情報およびお客様情報）
  * Dead Peer Detection（問題発生時の自動リトライ回数）

**セクション1: General information** [![](/img/migrated/photo_2_2025-07-09_17-34-31-bab62499.jpg)](/img/migrated/photo_2_2025-07-09_17-34-31-bab62499.jpg)
**注意**: Pre-shared-keyパラメーターはPalo Altoとの接続に必要なため保存しておいてください。

**セクション2: Remote VPN information** [![file](/img/migrated/image-1757089299476-d2ccb53e.png)](/img/migrated/image-1757089299476-d2ccb53e.png)
Providers = "others" を選択し、以下の手順に従ってください：
  * ステップ1: providers name = "pfsense" を入力
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

**セクション3: Remote VPN information** [![](/img/migrated/Screenshot-2025-08-18-110311-15-6bf84b44.png)](/img/migrated/Screenshot-2025-08-18-110311-15-6bf84b44.png)
DelayとMax failureのパラメーターを入力し、**Create VPN Connection** を選択します。

## ステップ3: Pfsenseの設定
**-** 作成したアカウントでCheckpoint VMのVNCコンソールにログインし、「Cpstart」コマンドを実行します。
**-** IPアドレス [https://{`IP`}](https://IP.) でウェブサイトにログインします。次のようなSSL警告が表示される場合があります：[![file](/img/migrated/image-1744194638397-e138f610.png)](/img/migrated/image-1744194638397-e138f610.png)
  * デフォルトのログイン情報：

User: _Admin_
Pass: _Pfsense_（初回ウェブログイン時にパスワードを変更できます）

- **Interfaces → LAN** タブでLANがない場合はLANを追加してください：
[![file](/img/migrated/image-1744194649644-c8a77911.png)](/img/migrated/image-1744194649644-c8a77911.png) - Pfsenseのトンネル設定を行います：[![file](/img/migrated/image-1744194658447-e3aaf020.png)](/img/migrated/image-1744194658447-e3aaf020.png) VPNタブで **IPsec → Tunnels** を選択し、Add P1をクリックします。
  * Phase 1を以下のように設定します：

**注意**: + Pre-Shared Key: 事前にポータルで作成したVPNAASのキーを入力
+ Remote Gateway: 事前にポータルで作成したVPNAASのパブリックIP [![file](/img/migrated/image-1744194669785-8c6ee265.png)](/img/migrated/image-1744194669785-8c6ee265.png)
  * Phase 2を以下のように設定します：[![file](/img/migrated/image-1744194677761-3fb897ed.png)](/img/migrated/image-1744194677761-3fb897ed.png)

以上でターミナルのコマンドラインからネットワークのPingテストを実行できます。
