---
id: "create-a-vpn-connection"
title: "VPN Connectionの作成"
description: "FPT Cloud PortalでVPN Connectionを新規作成するガイドです。"
sidebar_label: "VPN Connectionの作成"
sidebar_position: "19"
draft: true
---

# VPN Connectionの作成

1. **VPN Connection List** 画面で **Create VPN Connection** をクリックします。

[![VPN Connectionの作成](/img/migrated/image-1744180675487-bc2332e2.png)](/img/migrated/image-1744180675487-bc2332e2.png)

2. VPN Gateway情報を入力します：

| **フィールド** | **説明** |
| --- | --- |
| **VPN name** | VPN Connectionの名前。覚えやすい名前を使用してください（例：`vpn_to_aws`）。 |
| **Description** | 接続を区別するための短い説明（任意）。 |
| **Pre-shared key** | 両側で共有するセキュリティキー（手動で設定またはシステムで自動生成）。 |
| **Local IP Public** | FPT Cloud側のパブリックIPアドレス。 |
| **Local private networks** | 接続する内部ネットワーク範囲（CIDR形式で入力；複数登録可）。 |
| **IPSec policy** | Phase 2の暗号化ポリシー。 |
| **IKE policy** | Phase 1の暗号化ポリシー。 |
| **Customer gateway name** | この接続に使用するCustomer Gateway。 |
| **Delay** | DPDリトライ間の待機時間（秒単位）。 |
| **Max failures** | 接続が失敗とみなされるまでの最大リトライ回数。 |

:::note
安定した接続を確保するため、FPT Cloud側の **DPD Delay** と **Max Failure** パラメーターをパートナーデバイスの設定と一致させてください。

一般的なプロバイダーの推奨値：

| Provider | Delay | Max failures |
| --- | --- | --- |
| AWS | 15 | 3 |
| Fortigate | 15 | 3 |

プロバイダー側でパラメーターを変更した場合は、FPT Cloud側の設定も更新して互換性を維持してください。
:::

3. **Create VPN Connection** をクリックしてセットアップを完了します。

[![VPN Connection作成完了](/img/migrated/6219884231644005829-c20fbd72.jpg)](/img/migrated/6219884231644005829-c20fbd72.jpg)
