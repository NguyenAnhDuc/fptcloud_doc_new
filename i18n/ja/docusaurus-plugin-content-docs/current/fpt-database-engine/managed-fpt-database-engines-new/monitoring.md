---
id: "monitoring"
title: "モニタリング"
description: "モニタリング機能はFPT Cloud上のデータベースの稼働状況、パフォーマンス、リソース使用量についてリアルタイムの可観測性を提供します。"
sidebar_label: "モニタリング"
sidebar_position: 39
---

# モニタリング

モニタリング機能はFPT Cloud上のデータベースの稼働状況、パフォーマンス、リソース使用量についてリアルタイムの可観測性を提供します。モニタリングは重要なメトリクスとログを収集・可視化し、以下を支援します。

- 異常の早期検出。
- クエリ負荷の評価。
- パフォーマンスと可用性を最適化するための積極的な意思決定。

FPT Database Engineのモニタリングは、メトリクスとログを収集するFPT Monitoringシステムと統合されており、必要に応じてダッシュボードとアラートを提供します。

このガイドでは、FPT Cloud Portal上でデータベースクラスターのヘルスとパフォーマンスを追跡するためのモニタリングへのアクセス、設定、使用方法について説明します。

### ステップ1：機能へのアクセス

FPT Cloud Portalにログインします。メインメニューから「**Database Platform**」→「**All Database**」を選択します。Database listページで、監視するデータベースクラスターを選択 > 「**Monitor**」タブを選択して機能にアクセスします。モニタリングの有効化状態によって、画面は次のように表示されます。

- モニタリング未有効化：システムはFPTサポートへの連絡を求める画面を表示します。お客様はモニタリングを有効化するためにサポートチームに連絡する必要があります。

[![](/img/migrated/monitor-not-available-scaled-665c70e9.png)](/img/migrated/monitor-not-available-scaled-665c70e9.png)

- モニタリング有効化済み：システムはデータベースタイプ別のメトリクスとログの一覧を表示します。FPT Monitoringとまだ統合されていないメトリクスまたはログは、Integrated Status = "**Disabled**"と表示されます。

[![](/img/migrated/monitor-enable-ba8960c7.png)](/img/migrated/monitor-enable-ba8960c7.png)

### ステップ2：モニタリングの統合/統合解除

- **モニタリングの統合（Integrate）**：データベースクラスターのメトリクス/ログ収集を有効化します。実行するには、**Workspace List**で監視するワークスペースに対応する「**Integrate**」アクションを選択します。警告ダイアログで操作を確認して完了します。統合が成功すると、**Integrated Status**が「**Enabled**」に変わり、FPT Monitoringシステムが対応するメトリクスの収集を開始します。
- **モニタリングの統合解除（Disintegrate）**：データベースクラスターのメトリクス/ログ収集を無効化します。実行するには、**Workspace List**で監視を停止するワークスペースに対応する「**Disintegrate**」アクションを選択します。警告ダイアログで操作を確認して完了します。統合解除が成功すると、**Integrated Status**が「**Disabled**」に変わり、FPT Monitoringシステムが対応するメトリクスの収集を停止します。

### ステップ3：ワークスペース情報の表示

モニタリング統合が成功した後（Integrated Status = "**Enabled**"）、ワークスペース名をクリックしてワークスペース詳細ページを開きます。ここでモニタリングダッシュボード、コンタクトポイント、データソースなどの関連情報を確認できます。

[![](/img/migrated/view-workspace-detail-4d7a2af8.png)](/img/migrated/view-workspace-detail-4d7a2af8.png)

### ステップ4：モニタリング情報の表示

Dashboard URLをクリックしてログインページに移動することで、Grafana上のリアルタイムメトリクスと履歴データを表示するダッシュボードを確認できます。

[![](/img/migrated/login-grafana-ee39a38d.png)](/img/migrated/login-grafana-ee39a38d.png)

ワークスペース詳細ページに提供されている**Basic Authentication – Username**と**Basic Authentication – Password**を入力し、**Login**をクリックしてGrafanaホームページにアクセスします。

[![](/img/migrated/grafana-home-ff1e4760.png)](/img/migrated/grafana-home-ff1e4760.png)

#### メトリクスの表示

「**Toggle Menu**」をクリック > 「**Dashboards**」を選択します。Dashboards画面が表示されます。データベースエンジンタイプに対応するTemplateを選択して利用可能なフォルダーを確認します。

[![](/img/migrated/metric-dashboard-19d10d37.png)](/img/migrated/metric-dashboard-19d10d37.png)

表示するフォルダーを選択してメトリクスを表示します。

[![](/img/migrated/metric-dashboard1-81a75568.png)](/img/migrated/metric-dashboard1-81a75568.png)

#### ログの表示

「**Toggle Menu**」をクリック > 「**Explore**」を選択します。

[![](/img/migrated/dashboard-log1-1-64999825.png)](/img/migrated/dashboard-log1-1-64999825.png)

「Loki」を選択します。

[![](/img/migrated/dashboard-log2-8404b97b.png)](/img/migrated/dashboard-log2-8404b97b.png)

ラベルフィルターフィールドで、ログを表示するラベルを選択します。

[![](/img/migrated/dashboard-log-filter-51eae0b5.png)](/img/migrated/dashboard-log-filter-51eae0b5.png)

値フィールドで、ログを表示するオブジェクトを選択します。

[![](/img/migrated/dashboard-log-runquery-1becce67.png)](/img/migrated/dashboard-log-runquery-1becce67.png)

ログ情報は次のように表示されます。

[![](/img/migrated/dashboard-log-view-9c882ffa.png)](/img/migrated/dashboard-log-view-9c882ffa.png)
