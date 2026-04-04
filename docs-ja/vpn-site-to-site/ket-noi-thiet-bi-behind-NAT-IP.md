---
id: "ket-noi-thiet-bi-behind-NAT-IP"
title: "NAT背後のデバイス接続（詳細版）"
description: "VPN Site-to-SiteサービスでNAT背後のデバイスを接続する詳細ガイドです。"
sidebar_label: "NAT背後のデバイス接続（詳細版）"
sidebar_position: "31"
---

# NAT背後のデバイス接続（詳細版）

**NAT IP（Network Address Translation）とは？**
NAT（Network Address Translation）IPは、ルーターやファイアウォール上に存在するIPアドレス変換の仕組みです。内部ネットワークのプライベートIPアドレスをインターネット接続時のパブリックIPに変換し、その逆も行います。

**VPN Site-to-SiteサービスのBehind NAT IP接続機能について**
場合によっては、お客様のVPNデバイスにパブリックIPが直接割り当てられておらず、内部ネットワーク内のプライベートIPのみを使用していることがあります（例：ISPのモデムやルーターの背後に配置されているケース）。VPN Site-to-SiteサービスのBehind NAT IP機能により、NATの背後にあるデバイスでもインターネットへのVPNトンネル接続を開始・維持できます。

**NAT背後のデバイスを接続する方法**

**ステップ1:** メニューから **Network** を選択し、**VPN Site-to-Site** タブを選択します。
ここでVPN Connectionを管理できます。**Create VPN connection** を選択してください。
[![file](/img/migrated/image-1761623133375-dcad4485.png)](/img/migrated/image-1761623133375-dcad4485.png)
VPN Gatewayを作成し、VPN Gatewayが準備できたら選択します。
[![file](/img/migrated/image-1761623371500-e8802c4d.png)](/img/migrated/image-1761623371500-e8802c4d.png)

**ステップ2**: 設定情報を入力します：
[![file](/img/migrated/image-1761623466253-b14ecf97.png)](/img/migrated/image-1761623466253-b14ecf97.png)
VPN Connectionのパラメーターには4つの主要セクションがあります：
  * **General Information**（VPN接続の基本情報）
  * **Remote VPN Information**（暗号化情報およびお客様情報）
  * **Dead Peer Detection**（問題発生時の自動リトライ回数）
  * **Advanced Information**（NAT背後のデバイス接続用の詳細情報）

**セクション1: General information** [![file](/img/migrated/image-1761623466253-b14ecf97.png)](/img/migrated/image-1761623466253-b14ecf97.png)

| **フィールド** | **説明** |
| --- | --- |
| **VPN name** | VPN Connectionの名前 |
| **Description** | VPN Connectionの説明 |
| **Pre-shared key** | 両デバイス間のセキュリティキー。**Refresh Key** をクリックして新しいキーを生成し、**Copy** をクリックしてコピーできます。 |
| **Local IP public** | FPT Cloudシステムから割り当てられたパブリックIP |
| **Local private networks** | FPT Cloud上のリソースネットワーク範囲 |

**セクション2: Remote VPN Information** [![file](/img/migrated/image-1761623732743-9a4ca0c9.png)](/img/migrated/image-1761623732743-9a4ca0c9.png)
  * **Customer gateway nameは接続先端の設定情報です。このステップで接続したいCustomer Gatewayを正しく選択してください。**

| **フィールド** | **説明** |
| --- | --- |
| **Customer gateway** | |
| Customer gateway | 接続先のCustomer Gatewayを選択します。Customer Gatewayがない場合は[こちら](../vpn-site-to-site/index.md)を参照してください。 |
| Providers | FCIへのVPN接続プロバイダーのリスト |
| **IKE Policy** | |
| Authorization algorithm | データ認証アルゴリズム。値: sha1, sha256, sha384, sha512, aes-xcbc。「sha256」を推奨します。 |
| Encryption algorithm | キー交渉プロセスの暗号化。値: aes-128, aes-192, aes-256, aes-128-gcm-8〜aes-256-gcm-16。FCIは **aes-256** を推奨します。**ikev1** 使用時はgcmアルゴリズムを選択しないでください。 |
| IKE version | サポートするIKEバージョン。値: ikev1, ikev2。FCIはほとんどのファイアウォール機器に **ikev2** を推奨します。古いCisco機器でikev1のみサポートの場合はikev1を選択してください。 |
| Lifetime units | IKE接続の存続期間の単位。デフォルト: second |
| Lifetime value | Phase 1の具体的なライフタイム値 |
| DH Group | 初期鍵交換に使用するDiffie-Hellmanグループ。値: group_1, group_2, group_5, group_14〜group_21 |
| Phase 1 negotiation mode | IKEのPhase 1でセキュア接続を確立する方式。値: main, aggressive（デフォルト: main） |
| **IPSec Policy** | |
| Authorization algorithm | データ認証アルゴリズム。「sha256」を推奨します。 |
| Encapsulation mode | データの暗号化とカプセル化のモード。デフォルト: tunnel |
| Encryption algorithm | 転送データの暗号化。値: aes-128, aes-192, aes-256。**aes-256** を推奨します。 |
| Lifetime units | デフォルト: second |
| Lifetime value | IPSecセッションが再確立前に存続できる時間 |
| Perfect forward secrecy | セッションキーのセキュリティオプション（PFS）。「group_14」を推奨します。 |
| Transform protocol | IPSecの暗号化・認証方式を定義するプロトコル。値: esp, ah |

**Providersについて**
  * 現在FCIはAWS、Fortigate、Palo Altoのプリセット設定をサポートしています。最適な接続のためにこれらのパラメーターを使用することを推奨します。

| **設定パラメーター** | **AWS** | **Fortigate** | **Palo Alto** |
| --- | --- | --- | --- |
| **IKE Info** | | | |
| IKE version | ikev2 | ikev2 | ikev2 |
| Encryption algorithm | aes-256 | aes-256 | aes-256 |
| Authorization algorithm | sha256 | sha256 | sha256 |
| DH Group | group14 | group14 - group19 | group14 – group20 |
| Lifetime value | 28800s | 28800s | 28800s |
| Phase 1 negotiation mode | main | main | main |
| **IPSec Info** | | | |
| Encryption algorithm | aes-256 | aes-256 | aes-256 |
| Authorization algorithm | sha256 | sha256 | sha256 |
| Perfect forward secrecy | group14 | group14（またはgroup19） | group19 |
| Lifetime value | 3600s | 3600s | 3600s |
| Encapsulation mode | tunnel | tunnel | tunnel |
| Transform protocol | esp | esp | esp |
  * 上記リスト以外のプロバイダーの場合は、接続設定に合ったIKEとIPsecの情報を入力してください。

**セクション3: Dead Peer Detection** [![file](/img/migrated/image-1761623789897-f3b0b9ef.png)](/img/migrated/image-1761623789897-f3b0b9ef.png)

| フィールド | 説明 |
| --- | --- |
| **Delay (s)** | 接続確認の **DPD probe** を送信する間隔（秒）。**デフォルト:** 30s |
| **Max failures** | 接続失敗と判定するまでの最大失敗回数。**デフォルト:** 10 |

**セクション4: Advanced Information** [![file](/img/migrated/image-1761625699218-95fcf249.png)](/img/migrated/image-1761625699218-95fcf249.png)

| フィールド | 説明 |
| --- | --- |
| **Peer ID** | VPN確立時（IKEネゴシエーション）のお客様VPNデバイスの識別子（元のIPアドレス）。デフォルトではシステムが **Customer Gateway IP** を使用します。**NAT IP** を使用している場合は、**NATされる前の元のIPアドレス** を確認して **Peer ID** フィールドに入力してください。 |

VPN Connectionのすべての情報を入力したら、**Create VPN Connection** を選択するか、**Cancel** でキャンセルしてください。
