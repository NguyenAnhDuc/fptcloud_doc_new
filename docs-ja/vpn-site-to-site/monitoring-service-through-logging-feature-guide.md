---
id: "monitoring-service-through-logging-feature-guide"
title: "Logging機能によるサービス監視"
description: "Logging機能を使用してVPN Site-to-Siteのアクティビティを監視するガイドです。"
sidebar_label: "Loggingによる監視"
sidebar_position: "29"
---

# Logging機能によるサービス監視

1. VPN詳細画面で、水平メニューから **Logging** タブを選択します。

[![Loggingタブ](/img/migrated/Screenshot-2025-09-12-103802-1-088dfdf7.png)](/img/migrated/Screenshot-2025-09-12-103802-1-088dfdf7.png)

2. サービスのアクティビティ履歴を確認します。

[![アクティビティ履歴](/img/migrated/Screenshot-2025-09-12-103908-b231479b.png)](/img/migrated/Screenshot-2025-09-12-103908-b231479b.png)

FPT Smart Cloudは以下のシステムログタイプを提供しています：

| **タイプ** | **説明** |
| --- | --- |
| **IKE (Internet Key Exchange)** | Phase 1セットアップ — 鍵交換情報。 |
| **CFG (Configuration)** | Phase 2セットアップ — トンネル設定情報。 |
| **NET (Network)** | UDP 500/4500経由のピア間通信。 |
| **KNL (Kernel)** | ルートまたはルートポリシーの設定。 |
| **ENC (Encryption)** | ハンドシェイク時の暗号化/復号化。 |
| **DPD (Dead Peer Detection)** | ピアヘルスチェック情報。 |
| **LIB (Library)** | Charonエンジン内部ライブラリの呼び出し。 |
| **ESP (Encapsulating Security Payload)** | IPsecを使用したSecurity Association（SA）のセットアップ。 |
| **TRC (Traffic)** | 暗号化されたトラフィックパケットの送信。 |
| **System** | その他のシステムログ。 |

**よくあるログメッセージ：**

| **内容** | **ログメッセージ** | **意味 / トラブルシューティング** |
| --- | --- | --- |
| **IKE Phase 1成功** | `[IKE] IKE_SA <name> established between 192.0.2.90[192.0.2.90]...192.0.2.74[192.0.2.74]` | ローカルとリモートIP間でIKE SA接続が正常に確立されました。 |
| **IPSec Phase 2成功** | `[IKE] CHILD_SA <name> established with SPIs cf4973bf_i c1cbfdf2_o and TS 192.168.48.0/24/0 === 10.42.42.0/24/0` | サブネット範囲間のデータトンネルが正常に確立されました。 |
| **トラフィック送信成功** | `[NET] sending packet: from x.x.x.x[4500] to x.x.x.x[4500] (80 bytes)` | データパケットがトンネルを通じて正常に送信されました。ポート4500はNAT-Tが使用中であることを示します。 |
| **Rekey成功** | `CHILD_SA con4{97} state change: REKEYING => REKEYED` | システムが接続を中断せずに新しいセキュリティキーを自動再生成しました。 |
| **PSK認証成功** | `authentication of 'IP' with pre-shared key successful` | デバイスがpre-shared keyで認証に成功しました。 |
| **Phase 1ネゴシエーションモードの不一致** | `[IKE] initiating Aggressive Mode IKE_SA` / `Aggressive Mode PSK disabled for security reasons` | ピア間でPhase 1ネゴシエーションモードが一致していません。**Phase 1 negotiation mode** 設定を確認してください。 |
| **Phase 1 IKEポリシーの誤り** | `[IKE] no peer config found` | Phase 1認証に失敗しました。両側の **IKE Policy** を確認してください。 |
| **Pre-shared Keyの不一致** | `[ENC] invalid HASH_V1/ID_V1 payload length, decryption failed?` | 認証に失敗しました。両ピアが同じpre-shared keyを使用していることを確認してください。 |
| **IKEポリシーの誤り** | `[IKE] no proposal found` | Phase 1の暗号化またはアルゴリズム設定が誤っています。**IKE Policy** の設定を確認してください。 |
| **IPsecポリシーの誤り** | `[IKE] no matching CHILD_SA config found` | Phase 2認証に失敗しました。**IPsec Policy** を確認し、Customer GatewayのリモートサブネットのIPを確認してください。 |
| **ピアIDの不一致** | `[IKE] IDir '192.0.2.10' does not match to '203.0.113.245'` | ピアIDが一致していません。NAT IPを使用している場合は **Local/Remote ID** の設定を確認してください。 |
