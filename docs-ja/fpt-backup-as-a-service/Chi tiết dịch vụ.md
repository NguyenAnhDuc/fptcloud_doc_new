---
id: "Chi tiết dịch vụ"
title: "サービス詳細"
description: "FPT Cloud は、VMware または Hyper-V などの仮想化システムを使用するオンプレミス環境に設定・展開されたバックアップサーバーを提供します。"
sidebar_label: "サービス詳細"
sidebar_position: 2
---

# サービス詳細

## Client Backup Server
FPT Cloud は、VMware または Hyper-V などの仮想化システムを使用するオンプレミス環境に設定・展開されたバックアップサーバーを提供します。バックアップサーバーは、FPT Cloud の管理者によってリモートで管理・運営されます。

FPT Cloud が提供するサービス内容は以下のとおりです。
  * サーバーの監視 - 可用性・パフォーマンス・状態の確認
  * リモートデバイス管理
  * システム・OS・backup ツールのメンテナンス

## BaaS Portal
FPT Cloud は、BaaS サービスの Web ポータルへのアクセスを提供します。ポータルでは以下の機能を利用できます。
  * 保護済みサーバーおよびシステムの監視と確認
  * backup job の進行状況・履歴・状態の監視
  * バックアップサイズ・スケジュール・restore ポイントなどのサーバーシステム詳細の確認
  * データの主体的な restore
  * backup job の進行状況・リソースの接続状態をメールで通知

## 用語定義
  * **Agent:** 物理デバイスおよび仮想デバイスのデータ保護操作を実行するシステム内のソフトウェア
  * **VBR server:** システム内のすべてのサーバーと通信し、保護・restore・管理作業・backup job 管理・進行状況イベント管理などの活動を調整するサーバー
  * **Data Compression:** ストレージ容量を削減するデータ節約ソリューション
  * **Data Encryption:** データセキュリティのためのソリューション
  * **Data Replication:** ユーザーシステム内のサーバーのコピーとしてデータを複製すること。これらのコピーはすぐにアクセスして迅速に restore でき、サーバーのパフォーマンスに影響を与えることなく複数の restore ポイントを作成するために使用できます。
  * **Disaster Recovery:** インフラ全体の損失や重大な障害などのエラーに対応するための計画策定または戦略展開
  * **Backup copy:** 同じバックアップファイルの一バージョンで、長期保存のためにストレージ repository にコピーされたもの。repository はソースシステム内に配置することも、外部に展開することもできます。バックアップファイルはメインのバックアップファイルと同じ形式であるため、障害発生時に必要なデータを直接 restore できます。
  * **Retention Period:** 特定のバックアップデータセットが保存基準を超えない期間。保存期間が終了してデータが古くなると、そのデータは restore に使用できなくなります。
  * **Retention Points:** 連続して保存される成功した job の数
  * **RPO:** Restore point objective。バックアップスケジュールによって決定される restore ポイント
  * **RTO:** Restore time objective。restore 方法と restore されるデータ量によって決定される restore 時間
