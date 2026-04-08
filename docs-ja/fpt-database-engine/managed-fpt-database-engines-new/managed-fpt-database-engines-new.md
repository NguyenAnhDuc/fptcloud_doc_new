---
id: "managed-fpt-database-engines-new"
title: "FPT Database Engineの概要"
description: "FPT Database Engineの概要"
sidebar_label: "FPT Database Engineの概要"
sidebar_position: 1
---

# FPT Database Engineの概要

## FPT Database Engineの概要

FPT Database Engineは、FPT Cloudプラットフォーム上で提供されるManaged Database（DBaaS）サービスです。ユーザーは物理インフラを直接管理したり、複雑な運用タスクを行ったりすることなく、データベースを展開・運用・管理できます。このサービスは、テスト環境から本番環境まで、高可用性（High Availability）、柔軟なスケーラビリティ（Scalability）、データセキュリティ（Data Security）、安定した運用を確保するよう設計されています。

## サポートされているデータベース管理システム

FPT Database Engineは、企業のさまざまなアプリケーションニーズとシステムアーキテクチャに対応するため、多くの一般的なデータベース管理システムをサポートしています。

- **リレーショナルデータベース**: PostgreSQL、MySQL、MariaDB、Microsoft SQL Server
- **非リレーショナルデータベース**: MongoDB、Cassandra、Redis
- **検索エンジン**: OpenSearch
- **データストリーミング**: RabbitMQ、Kafka
- **時系列データベース**: TimescaleDB
- **OLAP**: ClickHouse

サポートされるシステムと具体的なバージョンの一覧は変更される場合があり、Console Portalで公開されています。

## サービスアーキテクチャの概要

FPT Database EngineはFPT Cloudのクラウドネイティブインフラ上に展開されており、運用およびシステム保護コンポーネントが組み込まれています。

- コンピュート、ストレージ、ネットワークリソースの自動割り当て。
- 高可用性（HA）とフェイルオーバーの仕組み。
- バックアップ＆リストアシステム。
- リアルタイムのパフォーマンスおよびシステム状態監視。

ユーザーはUnified Service PortalまたはOpenAPIを通じてサービスを利用でき、基盤インフラへの直接アクセスは不要です。

## 主な機能

- **自動デプロイ**: ユーザーはポータル上で数ステップの設定を行うだけで、エンジン、バージョン、リソース構成、バックアップポリシーを含む新しいDatabase InstanceまたはDatabase Clusterを素早く作成できます。
- **データのバックアップとリストア**: FPT Database Engineは自動および手動バックアップをサポートし、データ損失リスクを最小化するためのデータ復元が可能です。
- **リソースのスケーリングと管理**: システムは増加する負荷に対応するため、垂直スケーリング（Vertical Scaling）またはフレキシブルな設定変更をサポートします。
- **監視とログ**: ユーザーはFPT CloudのFMONサービスとの連携を通じて、CPU、メモリ、ストレージなどの重要なメトリクスを監視できます。
- **セキュリティとコンプライアンス**: FPT Database Engineは複数のレイヤーでセキュリティ機構を適用しています。
  - テナント単位のリソース分離。
  - ロールベースアクセス制御（RBAC）。
  - FPT Cloudプラットフォームのセキュリティ標準への準拠。
- **サービス範囲と責任分担**: FPT Cloudはインフラ、プラットフォーム、データベースシステムのコア運用タスクの管理を担います。ユーザーはデータ、スキーマ、アプリケーションアクセス、ビジネスロジックの管理を担います。
