---
id: "container-level-auto-scaling"
title: "コンテナレベルの自動スケーリング"
description: "Horizontal Pod Autoscaler（HPA）を使用したGPUワークロードのコンテナレベル自動スケーリングについて説明します。"
sidebar_label: "コンテナレベルの自動スケーリング"
sidebar_position: 25
---

# コンテナレベルの自動スケーリング

**Horizontal Pod Autoscaler（HPA）** は、Deployment や StatefulSet などのワークロードリソースのリソース割り当てを自動的に調整し、アプリケーションのリソース需要に応じて動的にスケールします。基本的に、Kubernetes 上で実行されるアプリケーションのワークロードが増加すると、HPA はリソース要件を満たすために追加の Pod をデプロイします。ワークロードが減少し、Pod 数が設定された最小値より多い場合、HPA はワークロードリソースを削減（Pod 数を減少）します。GPU 用の HPA は、DCGM のカスタムメトリクスを使用してアプリケーションの GPU 使用率に基づいて Pod を監視・スケールします。

GPU HPA を使用したデプロイメントの例:

```yaml
apiVersion: autoscaling/v2beta2
kind: HorizontalPodAutoscaler
metadata:
  name: my-gpu-app
spec:
  maxReplicas: 3  # 適宜更新してください
  minReplicas: 1
  scaleTargetRef:
    apiVersion: apps/v1beta1
    kind: Deployment
    name: my-gpu-app  # 自動スケールが必要な Deployment のラベルを追加
  metrics:
  - type: Pods  # GPU に基づいて Pod をスケール
    pods:
      metric:
        name: DCGM_FI_PROF_GR_ENGINE_ACTIVE  # 適宜 DCGM メトリクスを追加
      target:
        type: AverageValue
        averageValue: 0.8  # 要件に応じてしきい値を設定
```

詳細については [NVIDIA の DCGM Metrics ドキュメント](https://docs.nvidia.com/datacenter/dcgm/1.6/dcgm-api/group__dcgmFieldIdentifiers.html#group__dcgmFieldIdentifiers_1ga12c2f22beff3cf71f7ecf9ad905b8ca) をご参照ください。

HPA を表示するには次のコマンドを実行します。

```bash
kubectl get hpa -A
```

[![](/img/migrated/73-9f2c36c7.png)](/img/migrated/73-9f2c36c7.png)
