---
id: "retry-timeout-rule"
title: "リトライタイムアウトルール"
description: "Kubernetes Engineのプロビジョニングおよびスケーリングプロセスにおけるタイムアウトとリトライのルール。"
sidebar_label: "リトライタイムアウトルール"
sidebar_position: "28"
---

# リトライタイムアウトルール

**Kubernetes Engine**の使用中に、以下の2つのプロセスでタイムアウトが発生する可能性があります：
- Provision
- Scaling

## 1. Provisionタイムアウト

Kubernetes Engineのclusterプロビジョニング中に問題が発生し、タイムアウトになる場合があります。タイムアウトは以下の表に従って計算されます：

| ステータス変化 | 条件 |
| --- | --- |
| Provisioning => Slowing | 20分 |
| Slowing => Pending | 20分 |
| Pending => Error（タイムアウト） | 40分 |

プロビジョニングでは、以下の2つの結果のいずれかが発生します：
- Provision成功
- Provision失敗

Provisionが失敗した場合、2つの状況が考えられます：

- **Provisionは成功したがステータスの同期が失われた場合：**
  - Kubernetes clusterは実際には正常に作成されています。
  - Retryを選択すると、システムはデータを再同期し、provisionプロセスを再実行しません。

- **処理エラーによりProvisionが失敗した場合：**
  - status = failedの場合、ユーザーが再試行できるようRetryオプションが表示されます。
  - status = provisioningの場合、システムはリクエスト送信時から時間のカウントを開始します。
    - 20分経過してもステータスが変化しない場合、システムはstatusを**slowing**に移行します。
    - slowing状態で20分経過してもステータスが変化しない場合、システムはstatusを**pending**に移行します。
    - pending状態で40分経過してもステータスが変化しない場合、システムはstatusを**error**に移行します。
    - status = errorになると、ユーザーはRetryができます。システムはカウンターをリセットし、provisionプロセスを最初から再開します。
  - プロビジョニング開始から完全タイムアウトまでの総時間：**1時間20分**。
  - status = errorになると、ユーザーはretryができます。

[![](/img/migrated/Picture6-2-22819bd9.png)](/img/migrated/Picture6-2-22819bd9.png)

## 2. Scalingタイムアウト

Kubernetes clusterが正常に作成された後、オートスケールまたは手動スケール中に、コアプロセッサがnodeをスケールアップ/ダウンします：

| ステータス変化 | 1 <= 追加worker数 < 5 | 追加worker数 > 5 |
| --- | --- | --- |
| Running => Slowing | 10分 | 10分 + (追加worker数 - 5) × 3分 |
| Slowing => Pending | 20分 | 20分 + (追加worker数 - 5) × 3分 |
| Pending => Error（タイムアウト） | 30分 | 30分 + (追加worker数 - 5) × 3分 |

スケーリングでは、以下の2つの結果のいずれかが発生します：
- Scaling成功
- Scaling失敗

Scalingが失敗した場合、2つの状況が考えられます：

- **Scalingは成功したがステータスの同期が失われた場合：**
  - Kubernetes clusterには実際にスケール条件で指定した数のworkerが追加されています。
  - Retryを選択すると、システムはデータを再同期し、scalingプロセスを再実行しません。

- **処理エラーによりScalingが失敗した場合：**
  - status = failedの場合、ユーザーが再試行できるようRetryオプションが表示されます。
  - status = processingの場合、システムはリクエスト送信時から時間のカウントを開始します。
    - 10分（追加worker数に応じて増加）経過してもステータスが変化しない場合（failed/success）、システムはstatusを**slowing**に移行します。
    - slowing状態で20分経過してもステータスが変化しない場合、システムはstatusを**pending**に移行します。
    - pending状態で30分経過してもステータスが変化しない場合、システムはstatusを**error**に移行します。
    - status = errorになると、ユーザーはRetryができます。システムはカウンターをリセットし、スケーリングプロセスを最初から再開します。
  - スケーリング開始から完全タイムアウトまでの総時間：**1時間**（5台以上の新規worker追加では増加します）。

clusterがerrorステータスになると、ユーザーは**Retry**を選択できます。

[![](/img/migrated/Picture5-2-3cb10329.png)](/img/migrated/Picture5-2-3cb10329.png)
