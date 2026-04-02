---
id: "mysql-troubleshooting"
title: "エラーカタログ"
description: "MySQLトラブルシューティングページは、FPT CloudのMySQLサービス使用時によく発生するエラーを特定・解決するためのクイックリファレンスガイドです。"
sidebar_label: "エラーカタログ"
sidebar_position: 45
---

# エラーカタログ

## はじめに

**MySQLトラブルシューティング**ページは、FPT CloudのMySQLサービス使用時によく発生するエラーを特定・解決するためのクイックリファレンスガイドです。接続エラー、設定エラー、パフォーマンス問題、バックアップ/リストアエラー、MySQL固有の状況など、よく見られる問題に焦点を当てています。

各セクションでは症状、原因、解決手順を明確に示しており、独立してトラブルシューティングを行う場合や、テクニカルサポートチームと連携する場合に役立ちます。

このドキュメントの目的は、MySQLをより安定・安全・効率的に運用し、インシデント発生時のダウンタイムを短縮することです。

## エラーカタログ

[1. バックアップエラー：「Please run OPTIMIZE TABLE on all listed tables…」](#1-バックアップエラーplease-run-optimize-table-on-all-listed-tables)

[2. サーバークラッシュ：JSONカラムのコンボインデックス使用時にMySQLがクラッシュする](#2-サーバークラッシュjsonカラムのコンボインデックス使用時にmysqlがクラッシュする)

[3. Metadata Lock Stormエラー](#3-metadata-lock-stormエラー)

### 1. バックアップエラー：「Please run OPTIMIZE TABLE on all listed tables…」

#### 1.1. 症状

FPT Database Engineサービス上でMySQLバックアップを実行中に、バックアップタスクが失敗し、以下のようなエラー通知がメールで届く場合があります。

```
cluster_id : abcxyz11
cluster_name : clustername
vdc_name : ABCXYZ_VCD
org_name : ABCXYZ-ORG
start_time : 10/23/2055 00:30:02
backup_type : diff
backup_size : NoneG
backup_log : ERROR: Please run OPTIMIZE TABLE on all listed tables to fix this issue. Tables found: db/transactions...
backup_state : failed
created_at : 10/23/2055 00:31:01
```

このエラーは、**FDEサービスのバックアップに使用されているPercona XtraBackupのバグ**が原因です。

#### 1.2. 原因

MySQL 8.0.29以降、InnoDBはカラムの追加・削除に**INSTANT ADD/DROP COLUMN**をサポートしています。

INSTANTコマンドの特徴：

- InnoDBはテーブル全体をコピーしません。
- テーブルの再構築は不要です。
- InnoDBディクショナリに特別なメタデータを書き込むだけです。このメタデータは**TOTAL_ROW_VERSIONS > 0**として現れます。

ただし、**XtraBackupはTOTAL_ROW_VERSIONS > 0のメタデータを持つテーブルと完全な互換性がありません**。その結果、INSTANT ADD/DROP COLUMNを使用したテーブルをXtraBackupが処理できず、バックアップタスクが停止してOPTIMIZE TABLEの実行を求めるエラーが返されます。

#### 1.3. 影響

このエラーにより以下の影響が生じます。

- クエリパフォーマンスの低下：最適に整理されていないデータによって処理が遅くなります。
- システム負荷の増大：システムリソースとメモリを消費します。
- データ挿入・更新の遅延：INSERT、UPDATE操作に時間がかかる場合があります。
- メンテナンスとバックアップの困難：断片化したテーブルはバックアップや復旧プロセスを遅くする可能性があります。

#### 1.4. 解決策と推奨事項

以下のコマンドを使用して**テーブルを再構築**し、INSTANTメタデータを削除する必要があります。

```sql
OPTIMIZE TABLE db.transactions;
```

実行後：

- テーブルが完全に再構築されます。
- 「INSTANT COLUMN VERSION」メタデータが完全に削除されます。
- TOTAL_ROW_VERSIONSが0に戻ります。
- バックアップが正常に実行されるようになります。

**注意事項：**

- **OPTIMIZE TABLEはテーブル全体を再構築します** → WRITEロックが発生する場合があります。
- **大きなテーブル**の場合、再構築時間が長くなる可能性があります → オフピーク時間帯に実行してください。
- 再構築のための**十分な一時ストレージ容量**を確保してください。

### 2. サーバークラッシュ：JSONカラムのコンボインデックス使用時にMySQLがクラッシュする

#### 2.1. 症状

JSONカラムにコンボインデックスを使用すると、MySQLノードが以下のようにクラッシュする場合があります。

```
22:20:45 UTC - mysqld got signal 11 ;
Most likely, you have hit a bug, but this error can also be caused by malfunctioning hardware.
...
Query (407ad76b1830): SELECT `fort_knox_funds_flows`.* FROM `fort_knox_funds_flows`
WHERE (25830440 MEMBER OF(`fort_knox_funds_flows`.`money_movements` ->> "$[*].to_user_id")
OR 25830440 MEMBER OF(`fort_knox_funds_flows`.`money_movements` ->> "$[*].from_user_id"))
ORDER BY `fort_knox_funds_flows`.`created_at` DESC LIMIT 20
```

これはJSONカラムのコンボインデックス使用に関連するMySQLのバグであり、MySQLノードがクラッシュします。このバグの詳細は[こちら](https://bugs.mysql.com/bug.php?id=109542)をご参照ください。

#### 2.2. 原因

MySQL 8.0.2x以降、JSONカラムのフィールドを使用したINDEX定義を持つテーブルで、上記のようなクラッシュが発生する場合があります。根本原因は、MySQLがコンボインデックス内のJSONカラムを処理しようとする際に問題が発生することです。具体的には：

- JSONカラムとのインデックス非互換性：MySQLはコンボインデックス内のJSONオブジェクトを適切に処理できず、メモリエラーや非同期処理の問題が発生します。
- JSONデータの保存と取得に関する問題：MySQLはコンボインデックス内のJSONデータの保存と取得を最適化できず、クラッシュが発生します。
- Full Disk Encryptionなどの特殊なストレージ機能との相互作用により、エラーの深刻度が増す場合があります。

#### 2.3. 影響

このエラーが発生すると、MySQLが予期せずクラッシュまたは再起動する場合があり、場合によってはクラッシュ後にデータベースがデータを復元できなくなる可能性があります。これはサービスの可用性と信頼性に深刻な影響を与えます（特に本番環境）。

#### 2.4. 解決策と推奨事項

- JSONカラムを使用する場合はコンボインデックスの代わりに単一インデックスを使用してください。
- JSONカラムに直接インデックスを作成することを避けてください。必要な場合は、JSON内の特定の値をインデックス化するために生成カラム（JSONデータから派生したカラム）を使用してください。
- MySQLをより新しいバージョン（例：8.0.42）にアップデートしてください。このバグは報告後に一部のMySQLバージョンで修正が確認されています。

### 3. Metadata Lock Stormエラー

#### 3.1. 症状

HAモードでMySQLを使用していると、以下のような状況が発生する場合があります：MySQLデータベースクラスターは正常に機能している（Masterノードは読み書きに問題なし）が、2つのSlaveノードではデータラグが大幅に増加する場合があります（約2時間程度）。同時に、Slaveノードで「**Waiting for table metadata lock**」状態のスレッドが多数出現します。

```
1073  admin  10.225.65.36:25680  fpt  Query  178  Waiting for table metadata lock  SELECT COUNT(1) AS `cnt` FROM `user_notifications` ...
1075  admin  10.225.65.36:25694  fpt  Query  178  Waiting for table metadata lock  SELECT COUNT(1) AS `cnt` FROM `user_notifications` ...
...
```

このエラーは、user_notificationsテーブルにDDLコマンドを実行した後に発生し、データベース（2つのSlaveノード）がMetadata Lock Storm状態に陥ります。

#### 3.2. 原因

MySQLは、DDL（データ定義言語）およびDML（データ操作言語）コマンドを実行する際に、テーブル構造情報（スキーマレベルおよびテーブルレベル）を保護するためにMetadata Lock（MDL）メカニズムを使用します。

MySQL InnoDB Cluster環境では、レプリケートされたDDLトランザクション（ALTER TABLE、CREATE INDEX、DROP TABLEなど）は、applierスレッドによってSlaveノード上で順番に実行されます。一方、長時間実行されるクエリやコミットされていないDMLなど何らかの理由で、ユーザーセッションがMDLロックを保持している場合があります。これにより、applierスレッドがロックの取得を待ちすぎる状況が生じます。

applierスレッドが時間内にロックを取得できない場合、GRキュー（Global Replication Queue）内の他のトランザクションが連鎖的にブロックされます。その結果、Slaveノードのapplierスレッドが詰まり、テーブルにアクセスするスレッドも詰まって、Slaveノードへのアクセスが困難になりアプリケーションでエラーが発生します。

#### 3.3. 影響

このエラーが発生すると、ユーザーのクエリとトランザクションがブロックされ、データアクセスの中断とシステムレイテンシの増大をもたらします。MySQLクラスター環境では、レプリケーショントランザクションがブロックされ、データラグが発生してシステム全体のパフォーマンスが低下する可能性があります。

#### 3.4. 解決策と推奨事項

このMetadata Lock Storm状態を解消するには、以下の手順を実行してください。

- ステップ1：DDLタスクに関連するテーブルにアクセスしているアプリケーションやサービスを一時的に停止します → 目的：新しいクエリがメタデータロックを取得または待機するのを防ぎます。
- ステップ2：Slaveノードを再起動してロックを保持しているスレッドを解放します → 再起動により「詰まった」セッションやスレッドが終了し、DDLプロセスが正常に適用されます。

**推奨事項**：高QPS（1秒あたりのクエリ数）のテーブルでDDLコマンドを使用してデータベースクラスターをアップグレードする場合は、DDL文の影響を受けるオブジェクト（テーブル、インデックスなど）からアプリケーションを切り離してください。これにより、Metadata Lock Stormを回避し、アップグレードをスムーズに進め、システムの中断を防ぐことができます。
