---
id: "huong-dan-su-dung-gpu-telemetry"
title: "GPUテレメトリの使用方法"
sidebar_label: "GPUテレメトリの使用方法"
sidebar_position: "6"
---

# GPUテレメトリの使用方法

FPT CloudはNVIDIA GPU TelemetryをKubernetes上のGPUシステムの監視・オブザーバビリティツールセットとして、kube-prometheus-stackと統合して使用しています。監視スタックはコレクター、メトリクス保存用の時系列データベース、ビジュアライゼーション層で構成されています。人気のオープンソースアプリケーションであるPrometheusとGrafanaを使用しています。Prometheusにはアラートの作成と管理のためのAlertmanagerも含まれています。PrometheusはKubernetes APIオブジェクトのクラスターレベルメトリクスとGPU利用率などのノードレベルメトリクスを表示するために、kube-state-metricsおよびnode_exporterと共にデプロイされます。

**以下のコマンドでGPUカスタムメトリクスを確認します:**

```bash
kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1 | jq -r . | grep DCGM
```

**PrometheusにアクセスしてGPU DCGMメトリクスを確認します:**

```bash
# Webブラウザでアクセスするためにprometheusサービスをポートフォワード
kubectl port-forward service/kube-prometheus-stack-1679-prometheus 9090:63090

# 9090はPrometheus Podのポート、63090はローカルマシン（クライアント）のポート

# Webブラウザで以下のURLからPrometheusにアクセス:
http://localhost:63090/
```

Prometheusインターフェイスで以下の手順に従ってGPU DCGMメトリクスを確認します。

[![](/img/migrated/t3-7557c0f4.png)](/img/migrated/t3-7557c0f4.png)

[![](/img/migrated/t4-810a513e.png)](/img/migrated/t4-810a513e.png)

**Grafana Dashboardにアクセスします:**

```bash
# WebブラウザでアクセスするためにGrafanaサービスをポートフォワード
kubectl port-forward service/kube-prometheus-stack-1679050354-grafana 80:63080

# 80はGrafana Podのポート、63080はローカルマシン（クライアント）のポート

# Webブラウザで以下のURLからGrafanaにアクセス:
http://localhost:63080/
```

Grafanaへのログインデフォルト認証情報:
- **ユーザー:** admin
- **パスワード:** prom-operator

**GPU用Grafana Dashboardのインポート:**

ダッシュボードをインポートするには、GrafanaインターフェイスでDashboards > Manage > Importに移動します。FPT Cloudのダッシュボードを使用する場合は、FPT Cloud GPU Dashboard JSONのコンテンツを貼り付けてLoadをクリックします。

FPT Cloud GPU Dashboard:

[![](/img/migrated/image12-7a17a1d0.png)](/img/migrated/image12-7a17a1d0.png)
