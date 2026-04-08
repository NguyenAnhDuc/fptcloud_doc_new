---
id: "VPN-Site-to-Site-Configuration-with-Palo-Alto-guide"
title: "Palo AltoとのVPN Site-to-Site設定"
description: "FPT CloudとPalo Altoファイアウォール間のVPN Site-to-Site設定ガイドです。"
sidebar_label: "Palo Altoとの接続設定"
sidebar_position: "13"
---

# Palo AltoとのVPN Site-to-Site設定

## 前提条件

開始前に以下の条件を確認してください：

- FPT Cloud PortalでVPN Site-to-Siteサービスが設定済みであること。
- Palo Altoファイアウォールがお客様側にインストール・有効化済みであること。
- Palo Altoファイアウォールに3つのIPアドレスが設定済みであること：**Management（パブリックIP）**、**WAN（パブリックIP）**、**LAN**。

## ステップ1：FPT Cloud PortalでVPN Site-to-Siteを設定する

[https://console.fptcloud.com/](https://console.fptcloud.com/) にアクセスしてVPN Site-to-Siteを作成します。

**Customer Gatewayを作成する：**

- **Remote private network**：Palo AltoとピアリングするLANサブネット範囲
- **Remote IP public**：Palo AltoファイアウォールのパブリックIPアドレス

[![Customer Gateway](/img/migrated/photo_1_2025-07-09_17-34-04-eb79dd6d.jpg)](/img/migrated/photo_1_2025-07-09_17-34-04-eb79dd6d.jpg)

**VPN Connectionを作成する：**

VPN Connectionには3つの主要セクションがあります：

- **General Information** — 基本的な接続情報
- **Remote VPN Information** — 暗号化設定およびお客様側設定
- **Dead Peer Detection** — 自動リトライ設定

**セクション1：General Information**

[![General Information](/img/migrated/photo_2_2025-07-09_17-34-04-b9535872.jpg)](/img/migrated/photo_2_2025-07-09_17-34-04-b9535872.jpg)

:::note
**Pre-shared key** の値を保存してください — Palo Altoを設定する際に必要になります。
:::

**セクション2：Remote VPN Information**

[![Remote VPN Information](/img/migrated/photo_3_2025-07-09_17-34-04-8e9693a4.jpg)](/img/migrated/photo_3_2025-07-09_17-34-04-8e9693a4.jpg)

プロバイダーとして **Palo Alto** を選択すると、IKEおよびIPsec設定が自動入力されます：

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

[![Dead Peer Detection](/img/migrated/Screenshot-2025-08-18-110311-14-33d5df01.png)](/img/migrated/Screenshot-2025-08-18-110311-14-33d5df01.png)

**Delay** と **Max failure** の値を入力し、**Create VPN Connection** をクリックします。

## ステップ2：Palo AltoでIPsecを設定する

1. Management IPからPalo Altoにログインします。

[![ログイン](/img/migrated/image-1744194232470-9da590d2.png)](/img/migrated/image-1744194232470-9da590d2.png)

2. **Add** をクリックしてPalo Alto Zoneを有効化します。

[![Zone](/img/migrated/image-1744194240732-d4006205.png)](/img/migrated/image-1744194240732-d4006205.png)

3. Virtual Routerを作成して **OK** をクリックします。

[![Virtual Router](/img/migrated/image-1744194248910-06f7f0cd.png)](/img/migrated/image-1744194248910-06f7f0cd.png)

4. WANおよびLANインターフェースを作成します（例：ethernet1/1とethernet1/2）。

[![WANインターフェース](/img/migrated/image-1744194257003-e445a49a.png)](/img/migrated/image-1744194257003-e445a49a.png) [![LANインターフェース](/img/migrated/image-1744194266348-d59065a8.png)](/img/migrated/image-1744194266348-d59065a8.png) [![インターフェース設定](/img/migrated/image-1744194276204-d3083457.png)](/img/migrated/image-1744194276204-d3083457.png) [![インターフェース結果](/img/migrated/image-1744194290319-f4e7ca1b.png)](/img/migrated/image-1744194290319-f4e7ca1b.png)

5. IKE Cryptoプロファイルを作成します。

[![IKE Crypto](/img/migrated/image-1744194301359-e16f558f.png)](/img/migrated/image-1744194301359-e16f558f.png)

6. IPSec Cryptoプロファイルを作成します。

[![IPSec Crypto](/img/migrated/image-1744194310783-c9d4bb7e.png)](/img/migrated/image-1744194310783-c9d4bb7e.png)

7. **IPsec Tunnels** に移動します：

   - **General** タブで、ステップ1のFPT Cloud IP（例：`103.176.147.48`）をPeer Addressとして入力します。

[![Generalタブ](/img/migrated/image-1744194319286-af6f827c.png)](/img/migrated/image-1744194319286-af6f827c.png)

   - **Advanced Options** タブで必要な情報を入力します。

[![Advanced Options](/img/migrated/image-1744194330142-443aff9d.png)](/img/migrated/image-1744194330142-443aff9d.png)

   - GlobalProtect IPSecエントリを作成します。

[![GlobalProtect IPSec](/img/migrated/image-1744194338236-aff2c542.png)](/img/migrated/image-1744194338236-aff2c542.png)

8. IPSec Tunnelsを作成します。

[![IPSec Tunnel 1](/img/migrated/image-1744194345834-175f8eb5.png)](/img/migrated/image-1744194345834-175f8eb5.png) [![IPSec Tunnel 2](/img/migrated/image-1744194370901-6e262c62.png)](/img/migrated/image-1744194370901-6e262c62.png) [![IPSec Tunnel 3](/img/migrated/image-1744194404210-8d78429e.png)](/img/migrated/image-1744194404210-8d78429e.png)

## ステップ3：Palo Altoのファイアウォールとルーティングを設定する

1. ファイアウォールポリシーを開きます。

[![ファイアウォールポリシー](/img/migrated/image-1744194387472-7a2a5471.png)](/img/migrated/image-1744194387472-7a2a5471.png) [![ポリシー設定](/img/migrated/image-1744194396699-4fadaad6.png)](/img/migrated/image-1744194396699-4fadaad6.png) [![ポリシー結果](/img/migrated/image-1744194478669-09f9447b.png)](/img/migrated/image-1744194478669-09f9447b.png)

ご利用環境のルールに従って、ソースと宛先を設定してください。

2. 2つのサブネット間のルーティングを設定します（例：`30.30.30.0/24` と `80.80.80.0/24`）。実際のソースおよび宛先ネットワークに合わせて調整してください。

[![ルーティング設定](/img/migrated/image-1744194487401-0030c70b.png)](/img/migrated/image-1744194487401-0030c70b.png)

ターミナルを開いて `ping` でネットワーク接続をテストできます。
