---
id: "migrate-bucket-data"
title: "bucket データの移行"
description: "他の Object Storage プロバイダーから FPT Object Storage へデータを移行する手順です。"
sidebar_label: "bucket データの移行"
sidebar_position: 14
---

# bucket データの移行

FPT Object Storage は **AWS S3 互換**標準で開発されており、ユーザーは任意の Object Storage プロバイダーから FPT のシステムへデータをそのまま**移行**できます。

**Migrate Bucket Data** 機能はデータ移行プロセスを簡素化するために設計されています。ユーザーは必要な情報を入力するだけで、システムが残りの作業を自動実行します。

データ移行を開始する前に、以下の注意事項をよくお読みください。

**1. S3 プロバイダーからの認証情報の収集:** 開始前に、ソース bucket を含む S3 プロバイダーから endpoint と access key を含む認証情報を十分に収集してください。

**2. S3 プロバイダーへの帯域幅と QoS の最適化依頼:** データ移行はインターネット経由で行われるため、転送速度はソース bucket を含む S3 プロバイダーの帯域幅に依存します。そのプロバイダーに連絡して、プロセスをより速くするための帯域幅と QoS の増加を依頼してください。

**3. 移行中の bucket および object への影響を最小限に:** Migrate bucket data 機能はジョブ作成時に bucket 内の object リストをキャプチャし、このリストに従ってのみ移行します。そのため、移行中は bucket 内の object への影響を最小限にしてください。
- ジョブ作成後に object を追加すると、その object は移行されません。
- ジョブ作成後に object を削除すると、ジョブは引き続き実行され削除された object をスキップしますが、ジョブはエラー状態になります。

**4. Access Key 情報の安全な管理:** Access Key 情報はジョブ実行中に FPT Cloud のサーバーに保存され、ジョブ完了後すぐにシステムから削除されます。ただしセキュリティ確保のため、権限を制限した access key のみ作成し、ジョブ完了後すぐに無効化することをお勧めします。

**手順:**

1. **Object Storage Management** にアクセスし、**Migrate Bucket** タブを開いて **Add Migrate Job** を選択します。

2. **Source Config** を設定します。
   - **Provider:** Object Storage プロバイダーを選択します。S3 Compatible オプションは現在市場のほとんどのプロバイダーで動作します。
   - **endpoint:** ソース bucket の endpoint アドレス。
   - **Region:** ソース bucket のリージョン。
   - **access key/Secret Key:** access key のペア。

3. **Source Bucket** を選択します。

4. **Destination Bucket** を選択します。FPT Object Storage のリージョンとデータを格納する bucket を選択します。

5. 情報を確認して **Create** を選択します。

システムが自動的にデータ移行プロセスを開始します。このプロセス中は、**宣言した access key を削除しないでください**。ジョブの中断やエラーの原因となります。
