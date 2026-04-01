---
id: "setting-up-gpu-telemetry"
title: "GPU テレメトリーの設定"
description: "FPT CloudのNVIDIA GPU TelemetryとPrometheus/Grafanaを使用したGPUメトリクスの監視設定について説明します。"
sidebar_label: "GPU テレメトリーの設定"
sidebar_position: 24
---

# GPU テレメトリーの設定

FPT Cloud は、GPU を搭載した Kubernetes クラスター向けの監視ツールキットとして、**kube-prometheus-stack** を使用した **NVIDIA GPU Telemetry** を活用しています。このツールキットはコレクター、メトリクスを保存する時系列データベース、データを可視化するビジュアライザーで構成されています。Prometheus や Grafana などのよく知られたオープンソースツールを使用しています。Prometheus には、アラートの作成と管理のための Alertmanager も含まれています。Prometheus は **kube-state-metrics** および **node_exporter** とともにデプロイされ、Kubernetes API リソースなどのクラスターレベルのメトリクスや GPU 使用率などのノードレベルのメトリクスを収集します。

**GPU カスタムメトリクスの確認**

次のコマンドを実行して GPU カスタムメトリクスを確認します。

```bash
kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1 | jq -r . | grep DCGM
```

**Prometheus で GPU DCGM メトリクスを確認**

Prometheus サービスをフォワードするには次のコマンドを実行します。

```bash
kubectl port-forward service/kube-prometheus-stack-1679-prometheus 9090:63090
```

9090 は Prometheus のサービスポート、63090 はクライアントのローカルポートです。Prometheus にはローカルで `http://localhost:63090/` からアクセスできます。

Prometheus インターフェースで **Metrics Explorer** に移動して GPU DCGM のメトリクスを確認します。

[![](/img/migrated/60-1-ff845f40.png)](/img/migrated/60-1-ff845f40.png)

[![](/img/migrated/61-1-1d992b1d.png)](/img/migrated/61-1-1d992b1d.png)

**Grafana ダッシュボードへのアクセス**

Grafana サービスをフォワードするには次のコマンドを実行します。

```bash
kubectl port-forward service/kube-prometheus-stack-1679050354-grafana 80:63080
```

80 は Grafana のサービスポート、63080 はクライアントのローカルポートです。Grafana にはローカルで `http://localhost:63080/` からアクセスできます。

Grafana へのログインのデフォルトユーザー名とパスワード:

```
User: admin
Password: prom-operator
```

**GPU メトリクス用 Grafana ダッシュボードのインポート**

ダッシュボードをインポートするには、Grafana > **Dashboards** > **Manage** > **Import** に移動します。

FPT Cloud の GPU ダッシュボードを使用するには、[FPT Cloud GPU Dashboard JSON](https://raw.githubusercontent.com/fci-xplat/fke-config/main/fptcloud-gpu-dashboard.json) をテキストとしてコピーするか、JSON ファイルをインポートして **Load** をクリックします。

FPT Cloud の GPU ダッシュボード:

[![](/img/migrated/62-1-1442fef9.png)](/img/migrated/62-1-1442fef9.png)
