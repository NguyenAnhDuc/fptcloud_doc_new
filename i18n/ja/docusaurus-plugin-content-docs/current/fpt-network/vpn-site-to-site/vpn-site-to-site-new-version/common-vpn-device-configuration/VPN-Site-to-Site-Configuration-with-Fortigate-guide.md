---
id: "VPN-Site-to-Site-Configuration-with-Fortigate-guide"
title: "FortigateとのVPN Site-to-Site設定"
description: "FPT CloudとFortigateファイアウォール間のVPN Site-to-Site設定ガイドです。"
sidebar_label: "Fortigateとの接続設定"
sidebar_position: "14"
---

# FortigateとのVPN Site-to-Site設定

## 前提条件

開始前に以下の条件を確認してください：

- FPT Cloud PortalでVPN Site-to-Siteが作成済みであること。
- Fortigateがお客様側にインストール・有効化・ライセンス認証済みであること。
- FortigateにLANおよびWAN IPアドレスが設定済みであること。

## ステップ1：FPT Cloud PortalでVPN Site-to-Siteを設定する

[https://console.fptcloud.com/](https://console.fptcloud.com/) にアクセスしてVPN Site-to-Siteを作成します。

**Customer Gatewayを作成する：**

- **Remote private network**：FortigateとピアリングするLANサブネット範囲
- **Remote IP public**：FortigateファイアウォールのパブリックIP

![Customer Gateway](/img/migrated/photo_1_2025-07-09_17-37-35-3a5135c3.jpg)

**VPN Connectionを作成する：**

:::note
**Pre-shared key** の値を保存してください — Fortigateを設定する際に必要になります。
:::

VPN Connectionには3つの主要セクションがあります：

- **General Information** — 基本的な接続情報
- **Remote VPN Information** — 暗号化設定およびお客様側設定
- **Dead Peer Detection** — 自動リトライ設定

**セクション1：General Information**

![General Information](/img/migrated/photo_2_2025-07-09_17-37-35-f1f6f494.jpg)

**セクション2：Remote VPN Information**

![Remote VPN Information](/img/migrated/image-1757055954440-3519ef8e.png)

プロバイダーとして **Fortigate** を選択すると、IKEおよびIPsec設定が自動入力されます：

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

![Dead Peer Detection](/img/migrated/Screenshot-2025-08-18-110311-2300da0e.png)

**Delay** と **Max failures** の値を入力し、**Create VPN Connection** をクリックします。

## ステップ2：FortigateでIPsecを設定する

1. FortigateのWebインターフェースにログインします。

![Fortigateログイン](/img/migrated/image-1744193935450-35f5c8ce.png)

2. **IPsec Wizard** を選択します。

![IPsec Wizard](/img/migrated/image-1744193947980-2791ca43.png)

3. **IPsec Tunnels** に移動します：
   - ステップ1で取得したFPT CloudのIPアドレスを入力します。
   - WANインターフェースを選択します（複数のWANインターフェースがある場合は使用するものを指定）。

![IPsecトンネル設定](/img/migrated/image-1744193964825-d0b0043d.png)

FPT Smart Cloud Portalで接続ステータスを確認します。

![接続ステータス](/img/migrated/image-1744193984133-1153c0da.png)

4. **Local Gateway** を有効にして **Primary IP** を選択します。

![Local Gateway](/img/migrated/image-1744193993723-b814a802.png)

5. **Method** を **Pre-shared Key** に設定し、ステップ1と同じキーを入力します。

![Pre-shared key](/img/migrated/image-1744194001749-b890d7b8.png)

:::note
お客様側がNATの背後にある場合は、以下のように設定してFPT Smart Cloudサポートにお問い合わせください。
:::

![NAT設定](/img/migrated/image-1744194012256-2ab35738.png)

6. Phase 1を設定します。

![Phase 1](/img/migrated/image-1744194042329-41a8e0ca.png)

NATを使用しない場合は、NATモードが無効になっていることを確認してください。

7. Phase 2を設定します。**Local IP** をお客様のネットワーク範囲に設定します。

![Phase 2](/img/migrated/image-1744194053329-8c1ac803.png)

## ステップ3：Fortigateのファイアウォールとルーティングを設定する

受信・送信トラフィックの両方について、ファイアウォールを **Allow All** に設定します。

**FPT CloudからFortigateへ：**

![FPTからFortigate](/img/migrated/image-1744194062973-cc3001df.png)

**FortigateからFPT Cloudへ：**

![FortigateからFPT](/img/migrated/image-1744194072242-b7107945.png)

**接続確立成功：**

![接続確立](/img/migrated/image-1744194081090-379a371e.png)

ルーティングを設定します。**Destination** にFPT Cloudネットワーク（例：`172.30.205.0/255.255.255.0`）を、**Interface** に先ほど作成したIPsecトンネルを設定します。

![ルーティング設定](/img/migrated/image-1744194099241-826d8df0.png)

ターミナルを開いて `ping` でネットワーク接続をテストできます。
