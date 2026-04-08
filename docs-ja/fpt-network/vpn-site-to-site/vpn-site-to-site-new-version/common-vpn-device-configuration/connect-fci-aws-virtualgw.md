---
id: "connect-fci-aws-virtualgw"
title: "FCI-AWS接続（Virtual Private Gateway）"
description: "UnifyポータルでAWSとOPSの2つのプラットフォームのVPNaaSを接続するガイドです。"
sidebar_label: "FCI-AWS接続（Virtual Private Gateway）"
sidebar_position: "21"
---

# FCI-AWS接続（Virtual Private Gateway）

この記事では、UnifyポータルでAWSとOPSの2つのプラットフォームのVPNaaSを接続する方法を説明します。
  * [I. AWSでのVPN Site-to-Site設定](/docs/ja/fpt-network/vpn-site-to-site/)/
  * [II. FCI CloudでのVPN Site-to-Site設定](/docs/ja/fpt-network/vpn-site-to-site/)/

この例では、以下のトポロジーのパラメーターでVPN Site-to-Site接続を作成します：[![file](/img/migrated/image-1744187648981-6cf9e3e4.png)](/img/migrated/image-1744187648981-6cf9e3e4.png)

## AWSでのVPN Site-to-Site設定

**ステップ1.** **Customer gateway** の作成
**Customer Gateway** は、オンプレミスネットワークの **gateway** デバイスを表すAWSのリソースです。
Customer gatewayを作成するには：
a. <https://console.aws.amazon.com/vpc/> にアクセスします。
b. **Customer gateways > Create customer gateway** を選択します。
各フィールドとIPアドレスにFCI VPN GatewayのLocal IP publicを入力します。
[![file](/img/migrated/image-1744187677872-0dcc0585.png)](/img/migrated/image-1744187677872-0dcc0585.png)
c. **Create customer gateway** を選択します。
作成されたCustomer gatewayの情報：
[![file](/img/migrated/image-1744187689933-55fef092.png)](/img/migrated/image-1744187689933-55fef092.png)

**ステップ2. Virtual Private Gatewayの作成**
Virtual Private Gatewayを作成するには：
a. ナビゲーションペインで **Virtual private gateways > Create virtual private gateway** を選択します。[![file](/img/migrated/image-1744187701228-c2839df5.png)](/img/migrated/image-1744187701228-c2839df5.png)
b. **Create virtual private gateway** を選択します。
作成後の結果：
[![file](/img/migrated/image-1744187719077-66613e9b.png)](/img/migrated/image-1744187719077-66613e9b.png)
c. **Virtual private gateway** を **VPC** にアタッチします。[![file](/img/migrated/image-1744187728890-441a90e2.png)](/img/migrated/image-1744187728890-441a90e2.png)

**ステップ3. ルーティングの設定**
**Virtual Private Gateway** 経由でVPC（AWS）からCustomer Gateway（FCI）へのトラフィックを誘導するルーティングを設定します。
ルートテーブルの **route propagation** を有効にして、VPN connectionのルートを自動追加します。
a. ナビゲーションペインで **Route tables** を選択します。
b. Subnetに関連付けられた **Route table** を選択します。
c. **Route propagation** タブで **Edit route propagation** を選択します。
d. 先ほど作成した **Virtual private gateway** を選択し、**Enable Propagation** を選択して保存します。
[![file](/img/migrated/image-1744187790410-351eed16.png)](/img/migrated/image-1744187790410-351eed16.png) [![file](/img/migrated/image-1744187804388-b442a51d.png)](/img/migrated/image-1744187804388-b442a51d.png)

**ステップ4. Security groupの更新**
**SSH**、**RDP**、**ICMP** アクセスを許可するよう **Security group** を更新します。
Security groupにルールを追加するには：
a. ナビゲーションペインで **Security groups** を選択します。
b. アクセスを許可するVPC内のインスタンスのSecurity groupを選択します。
c. **Inbound rules** タブで **Edit inbound rules** を選択します。
d. インバウンドSSH、RDP、ICMPを許可するルールを追加し、**Save rules** を選択します。
[![file](/img/migrated/image-1744187818170-08225615.png)](/img/migrated/image-1744187818170-08225615.png)

**ステップ5. VPN connectionの作成**
先ほど作成した **Customer gateway** と **Virtual private gateway** を組み合わせて **VPN connection** を作成します。
VPN connectionを作成するには：
a. ナビゲーションペインで **Site-to-Site VPN connections** を選択します。
b. **Create VPN connection** を選択します。
c. **Target gateway type** に **Virtual private gateway** を選択します。
d. 先ほど作成した **VGW** と **CGW** を選択します。
e. Routing optionに **Static** を選択し、static IP prefixesにFCI側のSubnetを入力します。
g. **Local IPv4 network**: FCI側のSubnetを入力します。
h. **Remote IPv4 network**: AWS側のSubnetを入力し、Tunnel 1のオプションを選択します。
[![](/img/migrated/6219884231644005855-b9c9d934.jpg)](/img/migrated/6219884231644005855-b9c9d934.jpg)
j. Edit tunnel optionsを選択してTunnelのパラメーターを調整します。
[![](/img/migrated/6219884231644005851-281ed669.jpg)](/img/migrated/6219884231644005851-281ed669.jpg)
k. **tunnel1** と **tunnel2** のパラメーターを調整します。
**注意:** この例ではAWSがデフォルト値（28800と3600）を自動選択するため入力不要です。これらの値は後続のステップでFCI側に設定して接続を最適化します。
[![](/img/migrated/6219884231644005852-16c34358.jpg)](/img/migrated/6219884231644005852-16c34358.jpg)
DPD timeout actionについては、restartモードに設定してください（このモードではDPDタイムアウト時にAWSが自動的に接続を再起動します）。
[![file](/img/migrated/image-1757057205670-270e8f32.png)](/img/migrated/image-1757057205670-270e8f32.png)
l. **Create VPN connection** を選択します。
[![file](/img/migrated/image-1744187835664-b446a286.png)](/img/migrated/image-1744187835664-b446a286.png)
VPN Connectionの作成に成功すると **'Available'** ステータスになります。[![file](/img/migrated/image-1744187854348-50a964f9.png)](/img/migrated/image-1744187854348-50a964f9.png)
次に、Route tableのルーティングが正しいか確認します。
[![file](/img/migrated/image-1744187883700-02a2bf0b.png)](/img/migrated/image-1744187883700-02a2bf0b.png)

**ステップ6. 設定ファイルのダウンロード**
VPN connectionを作成したら、FCI VPCの設定に使用する **configuration file** をダウンロードできます。
**configuration file** をダウンロードするには：
a. VPN connectionのページにアクセスします。
b. 作成したConnectionを選択し、**Download configuration** を選択します。
c. Vendor: **pfSense**、IKE version: **IKEv1** を選択し、**Download** をクリックします。
[![file](/img/migrated/image-1744187893211-6e8c1faf.png)](/img/migrated/image-1744187893211-6e8c1faf.png)
このconfiguration fileを基にFCI側のVPN Site-to-Siteを作成します。[![file](/img/migrated/image-1744187903307-dcef580b.png)](/img/migrated/image-1744187903307-dcef580b.png)

## FCI CloudでのVPN Site-to-Site設定

**ステップ1. Customer gatewaysの作成**
以下の情報でCustomer gatewayを作成します：
[![](/img/migrated/photo_1_2025-07-09_17-36-59-cc7cebe8.jpg)](/img/migrated/photo_1_2025-07-09_17-36-59-cc7cebe8.jpg)

**ステップ2. VPN connectionの作成**
VPN Connectionのパラメーターには3つの主要セクションがあります：
  * General information（VPN接続の基本情報）
  * Remote VPN Information（暗号化情報およびお客様情報）
  * Dead Peer Detection（問題発生時の自動リトライ回数）

**セクション1: General information**
[![](/img/migrated/photo_2_2025-07-09_17-36-59-3833c2bc.jpg)](/img/migrated/photo_2_2025-07-09_17-36-59-3833c2bc.jpg)

**セクション2: Remote VPN information**
[![](/img/migrated/photo_3_2025-07-09_17-36-59-ee648287.jpg)](/img/migrated/photo_3_2025-07-09_17-36-59-ee648287.jpg)
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

**セクション3: Remote VPN information**
[![](/img/migrated/Screenshot-2025-08-18-110311-2-ee1b7efc.png)](/img/migrated/Screenshot-2025-08-18-110311-2-ee1b7efc.png)
DelayとMax failureのパラメーターを入力し、**Create VPN Connection** を選択します。

接続が成功すると、FCI Cloud側のVPN connectionの `**Operation status**` が `**Online**` になります。
[![](/img/migrated/photo_5_2025-07-09_17-36-59-a6d918ea.jpg)](/img/migrated/photo_5_2025-07-09_17-36-59-a6d918ea.jpg)

  * **AWS側の接続状態の確認**
**VPN connections** → 作成した **VPN connection** を選択 → **Tunnel details** を選択します。
接続が成功するとTunnelの **status** が `**UP**` になります。[![file](/img/migrated/image-1744188021396-a2fcb953.png)](/img/migrated/image-1744188021396-a2fcb953.png)
  * **接続結果の確認**

各VPCのVPN Site-to-Siteで設定したSubnet範囲内にVMを起動し、互いにPINGを実行します。

**FCIからAWSへのPING結果**
[![file](/img/migrated/image-1744188035465-8bf2d7b0.png)](/img/migrated/image-1744188035465-8bf2d7b0.png)
**AWSからFCI CloudへのPING結果**
[![file](/img/migrated/image-1744188059608-16df2ffb.png)](/img/migrated/image-1744188059608-16df2ffb.png)
