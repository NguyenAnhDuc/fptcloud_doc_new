---
id: "hanh-dong-voi-snapshot"
title: "Snapshot に対するアクション"
sidebar_label: "Snapshot に対するアクション"
description: "Snapshot に対するアクション"
sidebar_position: 31
---

# Snapshot に対するアクション

ユースケース:

アクション | 説明
---|---
**Execute** | snapshot プロセスを開始します。このプロセスは snapshot 対象のテーブルをブロックせず、データストリームは引き続き動作します。

**影響:**
\- Snapshot ステータスが In-progress に変わります
\- Kafka topic が snapshot からのデータ受信を開始します
\- Connector とタスクは引き続き正常に動作します

**使用するタイミング:**
\- database の現在のデータすべてを Kafka topic に snapshot したい場合
\- システムの初期データを読み込む必要がある場合
\- Completed または Failed の後に snapshot を再実行したい場合
**Pause** | incremental snapshot を一時停止します。このシグナルを受信すると、connector は実行中の snapshot 操作を一時停止します。停止シグナルを受信した時点ですべてのデータ収集が停止されます。

**影響:**
\- Snapshot ステータスが Paused に変わります
\- Kafka topic が snapshot からのデータ受信を停止します
\- snapshot の進行状況が保存され、Resume で続行できます
\- Connector とタスクは引き続き正常に動作します

**使用するタイミング:**
\- パフォーマンスへの影響を避けるためにピーク時間中に snapshot を一時停止する必要がある場合
\- システムメンテナンスや一時的なトラブルシューティングが必要な場合
**Resume** | 一時停止中の incremental snapshot を再開します。このシグナルを受信すると、connector は以前に一時停止した snapshot 操作を続行します。

**影響:**
\- Snapshot ステータスが In-progress に変わります
\- Kafka topic が一時停止した位置からデータ受信を再開します
\- snapshot は完了するまで実行を続けます

**使用するタイミング:**
\- Pause 後に snapshot を続行したい場合
\- システムが安定し、snapshot 処理を再開できる場合
**Stop** | 現在実行中のアドホック snapshot を停止・キャンセルします。現在の snapshot プロセス全体がキャンセルされます。

**影響:**
\- Snapshot ステータスが Completed に変わります
\- Kafka topic が snapshot からのデータ受信を直ちに停止します
\- snapshot プロセスがキャンセルされます。再度 snapshot を行うには最初から Execute を実行する必要があります

**使用するタイミング:**
\- snapshot が不要になった場合
\- snapshot 中にエラーが検出され、直ちに停止したい場合
\- システムリソースを解放する必要がある場合
