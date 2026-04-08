---
id: "edit-vpn-connection"
title: "VPN Connectionの編集"
description: "既存のVPN Connection設定を編集するガイドです。"
sidebar_label: "VPN Connectionの編集"
sidebar_position: "20"
---

# VPN Connectionの編集

1. メニューから **Network** を選択し、**VPN Site-to-Site** タブに移動します。**Edit VPN Connection** を選択します。

[![VPN Connectionの編集](/img/migrated/photo_7_2025-07-09_17-33-39-1b52f62f.jpg)](/img/migrated/photo_7_2025-07-09_17-33-39-1b52f62f.jpg)

2. 設定の詳細を編集します。パラメーターは3つのセクションに分かれています：

   - **General Information** — 基本的な接続情報
   - **Remote VPN Information** — 暗号化設定およびお客様側設定
   - **Dead Peer Detection** — 接続問題発生時のリトライ設定

**セクション1：General Information**

[![General Information](/img/migrated/image-1752120550850-12c6cfd0.png)](/img/migrated/image-1752120550850-12c6cfd0.png)

| **フィールド** | **説明** |
| --- | --- |
| VPN name | VPN Connectionの名前。 |
| Description | VPN Connectionの説明。 |
| Pre-shared key | 2つのデバイス間の共有セキュリティキー。**Refresh Key** をクリックして新しいキーを生成、**Copy** をクリックしてコピーできます。 |
| Local IP public | FPT Cloudから割り当てられたパブリックIPアドレス。 |
| Local private networks | FPT Cloud上のリソースのプライベートネットワーク範囲。 |

**セクション2：Remote VPN Information**

[![Remote VPN Information](/img/migrated/photo_5_2025-07-09_17-33-39-e3bbb047.jpg)](/img/migrated/photo_5_2025-07-09_17-33-39-e3bbb047.jpg)

**Customer gateway：**

| **フィールド** | **説明** |
| --- | --- |
| Customer gateway | リモートエンドポイントの設定。接続したい正しいCustomer Gatewayを選択します。 |
| Providers | FPT CloudがサポートするVPNプロバイダーのリスト。 |

**IKE Policy：**

| **フィールド** | **説明** |
| --- | --- |
| Authorization algorithm | VPN設定時のデータ認証アルゴリズム。値：sha1, sha256, sha384, sha512, aes-xcbc。推奨：**sha256**。 |
| Encryption algorithm | 鍵交換の暗号化アルゴリズム。値：aes-128, aes-192, aes-256および各種GCMバリアント。推奨：**aes-128-gcm-12**。 |
| IKE version | サポートバージョン：ikev1, ikev2。 |
| Lifetime units | IKEライフタイムの時間単位。デフォルト：second。 |
| Lifetime value | Phase 1セッションの持続時間。 |
| DH Group | 鍵交換用Diffie-Hellmanグループ。値：group_1〜group_21。 |
| Phase 1 negotiation mode | 値：main, aggressive。デフォルト：main。 |

**IPSec Policy：**

| **フィールド** | **説明** |
| --- | --- |
| Authorization algorithm | VPN動作時のデータ認証アルゴリズム。値：sha1, sha256, sha384, sha512, aes-xcbc。推奨：**sha256**。 |
| Encapsulation mode | データの暗号化とカプセル化のモード。デフォルト：tunnel。 |
| Encryption algorithm | VPNトラフィックの暗号化アルゴリズム。値：aes-128, aes-192, aes-256。推奨：**aes-256**。 |
| Lifetime units | デフォルト：second。 |
| Lifetime value | 再確立前のIPSecセッション持続時間。 |
| Perfect Forward Secrecy | DHグループとペアのPFSオプション。値：off, group_1〜group_21。推奨：**group_14**。 |
| Transform protocol | 暗号化と認証のプロトコル。値：esp, ah。 |

**プロバイダープリセット：**

FPT Cloudは **AWS**、**Fortigate**、**Palo Alto** のプリセット設定を提供しています。その他のプロバイダーの場合は、IKEおよびIPSecパラメーターを手動で入力してください。

| **パラメーター** | **AWS** | **Fortigate** | **Palo Alto** |
| --- | --- | --- | --- |
| IKE version | ikev2 | ikev2 | ikev2 |
| Encryption algorithm | aes-256 | aes-256 | aes-256 |
| Authorization algorithm | sha256 | sha256 | sha256 |
| DH Group | group14 | group14〜group19 | group14〜group20 |
| Lifetime value | 28800s | 28800s | 28800s |
| Phase 1 negotiation mode | main | main | main |
| IPSec Encryption algorithm | aes-256 | aes-256 | aes-256 |
| IPSec Authorization algorithm | sha256 | sha256 | sha256 |
| Perfect Forward Secrecy | group14 | group14（またはgroup19） | group19 |
| IPSec Lifetime value | 3600s | 3600s | 3600s |
| Encapsulation mode | tunnel | tunnel | tunnel |
| Transform protocol | esp | esp | esp |

**セクション3：Dead Peer Detection**

[![Dead Peer Detection](/img/migrated/Screenshot-2025-08-18-135750-8b41586b.png)](/img/migrated/Screenshot-2025-08-18-135750-8b41586b.png)

| **フィールド** | **説明** |
| --- | --- |
| Delay (s) | DPDプローブ間の時間間隔。デフォルト：30s。 |
| Max failures | ピアが切断とみなされ接続がリセットされるまでの最大失敗回数。デフォルト：10。 |

3. **Update VPN Connection** をクリックして変更を保存するか、**Cancel** をクリックして破棄します。
