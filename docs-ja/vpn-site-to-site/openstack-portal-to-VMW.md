---
id: "openstack-portal-to-VMW"
title: "OpenStackとVMware間のVPN Site-to-Site設定"
description: "FPT Cloud OpenStackとVMware Cloud間のVPN Site-to-Site接続を設定するガイドです。"
sidebar_label: "VMwareとの接続設定"
sidebar_position: "17"
---

# OpenStackとVMware間のVPN Site-to-Site設定

このガイドでは、以下のトポロジーを例として使用します。

[![トポロジー](/img/migrated/image-1765791265680-2f6051f0.png)](/img/migrated/image-1765791265680-2f6051f0.png)

## ステップ1：FPT Cloud PortalでVPN Site-to-Siteを設定する

[https://console.fptcloud.com](https://console.fptcloud.com) にアクセスしてVPN Site-to-Siteを作成します。

**Customer Gatewayを作成する：**

- **Remote IP public**：VMware VPNゲートウェイのFloating IP
- **Remote private network**：VMwareとピアリングするLANサブネット範囲

[![Customer Gateway](/img/migrated/image-1765791539886-a1399dc6.png)](/img/migrated/image-1765791539886-a1399dc6.png)

**VPN Connectionを作成する：**

:::note
**Pre-shared key** の値を保存してください — VMware側でVPN接続を設定する際に必要になります。
:::

VPN Connectionには3つの主要セクションがあります：

- **General information** — 基本的な接続情報
- **Remote VPN Information** — 暗号化設定およびお客様側設定
- **Dead Peer Detection** — 自動リトライ設定

**セクション1：General information**

[![General information](/img/migrated/image-1765791650959-d54cc64b.png)](/img/migrated/image-1765791650959-d54cc64b.png)

**セクション2：Remote VPN information**

[![Remote VPN information](/img/migrated/image-1765791876602-bfc3ce69.png)](/img/migrated/image-1765791876602-bfc3ce69.png)

**Providers = "others"** を選択する場合は、以下の手順に従います：

1. プロバイダー名を `VMWare` に設定します。
2. IKEおよびIPSecパラメーターを以下のとおり入力します：

**IKE：**

| パラメーター | 値 |
| --- | --- |
| Encryption algorithm | aes-256 |
| Authorization algorithm | sha256 |
| IKE version | ikev2 |
| Lifetime units | seconds |
| Lifetime value | 28800 |
| DH Group | GROUP_14 |
| Phase 1 negotiation mode | main |

**IPsec：**

| パラメーター | 値 |
| --- | --- |
| Encapsulation mode | tunnel |
| Encryption algorithm | aes-256 |
| Authorization algorithm | sha256 |
| Lifetime units | seconds |
| Lifetime value | 3600 |
| Perfect Forward Secrecy (PFS) | GROUP_14 |
| Transform protocol | esp |

**セクション3：Dead Peer Detection**

[![Dead Peer Detection](/img/migrated/image-1765792370389-be62aa14.png)](/img/migrated/image-1765792370389-be62aa14.png)

すべての情報を入力したら、**Create VPN Connection** をクリックします。

## ステップ2：VMware CloudでVPNを設定する

1. VMwareシステムにアクセスして **Endpoint Configuration** フィールドに入力します。

[![Endpoint Configuration](/img/migrated/image-1765792537442-cfd45c7d.png)](/img/migrated/image-1765792537442-cfd45c7d.png)

2. 作成後、**Customize Security Profile** を選択して、ステップ1の設定に合わせたIKEおよびIPSecポリシーを編集します。

[![Customize Security Profile](/img/migrated/image-1765792592112-2661f855.png)](/img/migrated/image-1765792592112-2661f855.png)

3. **View statistics** を選択して接続ステータスを確認します。ステータスが **UP** の場合、2サイト間の接続が成功しています。

[![View statistics](/img/migrated/image-1765792630730-24ebf3f1.png)](/img/migrated/image-1765792630730-24ebf3f1.png) [![接続UP](/img/migrated/image-1765792651631-076d8ebc.png)](/img/migrated/image-1765792651631-076d8ebc.png)

## ステップ3：接続を確認する

OpenStack VMからVMware VMへのPing：

[![OSPからVMWへのPing](/img/migrated/image-1765792700896-cc19d07e.png)](/img/migrated/image-1765792700896-cc19d07e.png)

VMware VMからOpenStack VMへのPing：

[![VMWからOSPへのPing](/img/migrated/image-1765792717595-c17872cc.png)](/img/migrated/image-1765792717595-c17872cc.png)
