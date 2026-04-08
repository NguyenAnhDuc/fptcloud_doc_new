---
id: "connect-fci-aws-transitgw"
title: "FCI-AWS接続（Transit Gateway）"
description: "UnifyポータルでAWSとOPSの2つのプラットフォームのVPNaaSを接続するガイドです。"
sidebar_label: "FCI-AWS接続（Transit Gateway）"
sidebar_position: "20"
---

# FCI-AWS接続（Transit Gateway）

**この記事では、UnifyポータルでAWSとOPSの2つのプラットフォームのVPNaaSを接続する方法を説明します。**
  * [I. FCI CloudでのVPN Site-to-Site設定](/docs/ja/fpt-network/vpn-site-to-site/)/
  * [II. AWSでのVPN Site-to-Site設定](/docs/ja/fpt-network/vpn-site-to-site/)/
  * [III. AWS VPNの新しいIPでFCI CloudのVPN Site-to-Site設定を更新](/docs/ja/fpt-network/vpn-site-to-site/)/

この例では、以下のトポロジーのパラメーターでVPN Site-to-Site接続を作成します：
[![file](/img/migrated/image-1744187555434-7059bf1d.png)](/img/migrated/image-1744187555434-7059bf1d.png)

## FCI CloudでのVPN Site-to-Site設定

**ステップ1. Customer gatewaysの作成**

1.1 以下の手順でCustomer gatewayを作成します：
[![](/img/migrated/photo_1_2025-07-09_17-36-42-336a5990.jpg)](/img/migrated/photo_1_2025-07-09_17-36-42-336a5990.jpg)

1.2 以下の情報でCustomer gatewayを作成します：
[![](/img/migrated/photo_2_2025-07-09_17-36-42-7a7fc088.jpg)](/img/migrated/photo_2_2025-07-09_17-36-42-7a7fc088.jpg)

1.3 結果：
[![](/img/migrated/photo_3_2025-07-09_17-36-42-cc4e0bfd.jpg)](/img/migrated/photo_3_2025-07-09_17-36-42-cc4e0bfd.jpg)
注意: AWS側のVPNをまだ作成していないため、このステップのIPはランダムです。記事の最後でPart I.1.1のIPを修正します。

**ステップ2. VPN connectionの作成**
VPN Connectionのパラメーターには3つの主要セクションがあります：
  * General information（VPN接続の基本情報）
  * Remote VPN Information（暗号化情報およびお客様情報）
  * Dead Peer Detection（問題発生時の自動リトライ回数）

**セクション1: General information**
[![](/img/migrated/photo_4_2025-07-09_17-36-42-7456c972.jpg)](/img/migrated/photo_4_2025-07-09_17-36-42-7456c972.jpg)

**セクション2: Remote VPN information** [![](/img/migrated/photo_5_2025-07-09_17-36-42-e0dc4e56.jpg)](/img/migrated/photo_5_2025-07-09_17-36-42-e0dc4e56.jpg)
Providers「AWS」を選択すると、IKEおよびIPSecの情報が自動入力されます：

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

**セクション3: Remote VPN information** [![](/img/migrated/Screenshot-2025-08-18-110311-4-6969ef54.png)](/img/migrated/Screenshot-2025-08-18-110311-4-6969ef54.png)
DelayとMax failureのパラメーターを入力し、**Create VPN Connection** を選択します。
VPN HANの作成完了後、2つのLANネットワークを接続するVPN ConnectionがONLINEになり、VMはLAN IPで相互通信できるようになります。

## AWSでのVPN Site-to-Site設定

**ステップ1.** **Customer gateway** の作成
**Customer Gateway** は、オンプレミスネットワークの **gateway** デバイスを表すAWSのリソースです。
Customer gatewayを作成するには：
  1. <https://console.aws.amazon.com/vpc/> にアクセスします。
  2. **Customer gateways > Create customer gateway** を選択します。

各フィールドとIPアドレスにFCI VPN GatewayのLocal IP publicを入力します。
[![file](/img/migrated/image-1744188410276-6a0f1b1a.png)](/img/migrated/image-1744188410276-6a0f1b1a.png)
  3. **Create Customer gateway** を選択します。

作成されたCustomer gatewayの情報：
[![file](/img/migrated/image-1744188423009-f32f6ae2.png)](/img/migrated/image-1744188423009-f32f6ae2.png)

**ステップ2. Transit gatewayの作成**
Transit gatewayを作成するには：
  1. ナビゲーションペインで Transit gateway **> Create transit gateway** を選択します。[![file](/img/migrated/image-1744188442634-cdb7a1f9.png)](/img/migrated/image-1744188442634-cdb7a1f9.png)
  2. 作成後の結果 [![file](/img/migrated/image-1744188583244-7114d4b9.png)](/img/migrated/image-1744188583244-7114d4b9.png)
  3. 作成した **transit gateway** を **VPC** にアタッチします。[![file](/img/migrated/image-1744188600627-a65a4744.png)](/img/migrated/image-1744188600627-a65a4744.png)

**ステップ3. VPN connectionの作成**

3.1. **VPN connection** の作成: 先ほど作成した **Customer gateway（Part I.4.3）** と **Transit Gateway** を組み合わせて **VPN connection** を作成します。
VPN connectionを作成するには：
  1. ナビゲーションペインで **Site-to-Site VPN connections** を選択します。
  2. **Create VPN connection** を選択します。
  3. **Target gateway type** に **Transit Gateway** を選択します。
  4. 先ほど作成した **Transit Gateway** とCustomer gatewayを選択します。
  5. Routing optionに **Static** を選択し、static IP prefixesにFCI側のSubnet（172.16.8.0/24）を入力します。
  6. **Local IPv4 network**: FCI側のSubnetを入力します。
  7. **Remote IPv4 network**: AWS側のSubnetを入力します。
  8. **tunnel1** と **tunnel2** のパラメーターを調整します。
  9. **Create VPN connection** を選択します。

[![file](/img/migrated/image-1744188630355-2f54788d.png)](/img/migrated/image-1744188630355-2f54788d.png)
[![file](/img/migrated/image-1744188646389-8d296d6c.png)](/img/migrated/image-1744188646389-8d296d6c.png)

3.2 **transit gateway** を **VPN connection** にアタッチします。[![file](/img/migrated/image-1744188658544-061bd822.png)](/img/migrated/image-1744188658544-061bd822.png)
**結果：** [![file](/img/migrated/image-1744188666706-b3f50841.png)](/img/migrated/image-1744188666706-b3f50841.png)

**ステップ4. ルーティングの設定**
**Transit Gateway** 経由でVPC（AWS）からCustomer Gateway（FCI）へのトラフィックを誘導するルーティングを設定します。
VPN connectionのルートをルートテーブルに追加します（FCIのSubnet: 172.16.8.0/16）。[![file](/img/migrated/image-1744188682034-612ad31a.png)](/img/migrated/image-1744188682034-612ad31a.png)

**ステップ5. Security groupの更新**
**SSH**、**RDP**、**ICMP** アクセスを許可するよう **Security group** を更新します。
Security groupにルールを追加するには：
  1. ナビゲーションペインで **Security groups** を選択します。
  2. アクセスを許可するVPC内のインスタンスのSecurity groupを選択します。
  3. **Inbound rules** タブで **Edit inbound rules** を選択します。FCI側のSubnet範囲をAll Trafficで許可します。
  4. インバウンドSSH、RDP、ICMPを許可するルールを追加し、**Save rules** を選択します。[![file](/img/migrated/image-1744188698660-3295619c.png)](/img/migrated/image-1744188698660-3295619c.png) VPN Connectionの作成に成功すると **'Available'** ステータスになります。次に、Route tableのルーティングが正しいか確認します。

**ステップ6. 設定ファイルのダウンロード**
VPN connectionを作成したら、FCI VPCの設定に使用する **configuration file** をダウンロードできます。
**configuration file** をダウンロードするには：
  1. VPN connectionのページにアクセスします。
  2. 作成したConnectionを選択し、**Download configuration** を選択します。
  3. Vendor: **pfSense**、IKE version: **IKEv1（またはIKEv2）** を選択し、**Download** をクリックします。[![file](/img/migrated/image-1744188724857-b4bdaa67.png)](/img/migrated/image-1744188724857-b4bdaa67.png) このconfiguration fileを基にFCI側のVPN Site-to-Siteを作成します。

## AWS VPNの新しいIPでFCI CloudのVPN Site-to-Site設定を更新

  1. Tunnel 1のIPを使用してFCI側の設定を修正します：[![file](/img/migrated/image-1744188753554-65ec6a49.png)](/img/migrated/image-1744188753554-65ec6a49.png)
  2. 作成したAWSの新しいIPに合わせてCustomer Gatewaysを編集します。[![file](/img/migrated/image-1744188812981-69678af0.png)](/img/migrated/image-1744188812981-69678af0.png)
Remote IP publicフィールドにAWS TunnelのIPを入力します。
[![file](/img/migrated/image-1744188828118-52186cfb.png)](/img/migrated/image-1744188828118-52186cfb.png)

  * これでAWSとFCI Cloud間のVPN Site-to-Site設定が完了しました。
  * 接続成功後、FCI Cloud側のVPN connectionの `**Operation status**` は `**Online**`、AWSのTunnel 1は `UP` になります。
  * **AWS側の接続状態の確認**
**VPN connections** → 作成した **VPN connection** を選択 → **Tunnel details** を選択します。
接続が成功するとTunnelの **status** が `**UP**` になります。
  * **接続結果の確認：**

各VPCのVPN Site-to-Siteで設定したSubnet範囲内にVMを起動し、互いにPINGを実行します。

**FCIからAWSへのPING結果**
**AWSからFCI CloudへのPING結果**
