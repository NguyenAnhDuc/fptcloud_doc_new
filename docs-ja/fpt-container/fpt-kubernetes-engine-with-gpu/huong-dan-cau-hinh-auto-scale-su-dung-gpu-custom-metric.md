---
id: "huong-dan-cau-hinh-auto-scale-su-dung-gpu-custom-metric"
title: "GPUカスタムメトリクスを使用したオートスケールの設定"
sidebar_label: "GPUカスタムメトリクスを使用したオートスケールの設定"
sidebar_position: "11"
---

# GPUカスタムメトリクスを使用したオートスケールの設定

KubernetesはPrometheusと連携することで、GPUメトリクスなどのカスタムメトリクスに基づく自動スケーリングをサポートしています。このガイドでは、FPT Kubernetes Engineプラットフォーム上で動作するGPUアプリケーションのオートスケールを設定する方法を説明します。

[![](/img/migrated/Picture5-1-b79630d5.png)](/img/migrated/Picture5-1-b79630d5.png)

## 前提条件

- GPUが接続されたKubernetesクラスター
- Running状態のGPUアプリケーション

## 設定手順

### ステップ1: kube-prometheus-stackとprometheus-adapterのインストール

**FPT App Catalogを使用する場合:**
- FPT App Catalogサービスを使用してApp Catalogを作成し、「Connect Cluster」を選択してGPUクラスターに接続します。
- App CatalogsメニューでRepositoriesとして **fptcloud-catalogs** を選択し、**prometheus** を検索して **kube-prometheus-stack** パッケージをインストールします。リリース名とNamespaceを入力します。

[![](/img/migrated/anh2-8f185491.png)](/img/migrated/anh2-8f185491.png)

**Helmチャートを使用する場合:**

```bash
helm repo add xplat-fke https://registry.fke.fptcloud.com/chartrepo/xplat-fke && helm repo update
helm install --wait --generate-name \
    -n prometheus --create-namespace \
    xplat-fke/kube-prometheus-stack
prometheus_service=$(kubectl get svc -n prometheus -lapp=kube-prometheus-stack-prometheus -ojsonpath='{range .items[*]}{.metadata.name}{"\n"}{end}')
helm install --wait --generate-name \
    -n prometheus --create-namespace \
    xplat-fke/prometheus-adapter \
    --set prometheus.url=http://${prometheus_service}.prometheus.svc.cluster.local
```

kube-prometheus-stackをデプロイした後、prometheus-adapterをデプロイします。kube-prometheus-stackの正しいPrometheusサービスを指すようにvaluesを更新する必要があります。例えば、kube-prometheus-stackのNamespaceを `prometheus` に設定した場合、入力するvalueは以下の通りです。

```
prometheus-kube-prometheus-prometheus.prometheus.svc.cluster.local
```

[![](/img/migrated/anh3-5de9f5ca.png)](/img/migrated/anh3-5de9f5ca.png)

その後、両パッケージのステータスを確認します。

[![](/img/migrated/anh4-28b01e4f.png)](/img/migrated/anh4-28b01e4f.png)

### ステップ2: GPUアプリケーションのHorizontal Pod Autoscalerを設定する

Horizontal Pod Autoscaler（HPA）は、設定で指定された条件を満たすようにPodを自動スケールします。prometheus-adapterの設定が完了すると、DCGMカスタムメトリクスをエクスポートしてGPUワークロードを監視します。

HPAマニフェストの例:

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
 name: my-gpu-app
spec:
 maxReplicas: 3  # 適宜更新してください
 minReplicas: 1
 scaleTargetRef:
   apiVersion: apps/v1beta1
   kind: Deployment
   name: my-gpu-app # オートスケール対象のDeploymentのラベルを追加
 metrics:
 - type: Pods  # GPUに基づいてPodをスケール
   pods:
     metric:
       name: DCGM_FI_PROF_GR_ENGINE_ACTIVE # 適切なDCGMメトリクスを追加
     target:
       type: AverageValue
       averageValue: 0.8
```

DCGMメトリクスの詳細については、[NVIDIAドキュメント](https://docs.nvidia.com/datacenter/dcgm/1.6/dcgm-api/group__dcgmFieldIdentifiers.html)を参照してください。

HPAを作成した後、以下のコマンドで確認します。

```bash
kubectl get hpa -A
```
