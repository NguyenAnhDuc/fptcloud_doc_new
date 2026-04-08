---
id: "gpu-sharing"
title: "GPU Sharing"
description: "FPT Cloud Managed Kubernetes における GPU Sharing 機能の概要と使用方法を説明します。"
sidebar_label: "GPU Sharing"
sidebar_position: 4
---

# GPU Sharing

GPU Sharing は、1 つの物理 GPU を複数の Pod やコンテナで共有する機能です。FPT Cloud の Managed Kubernetes Engine（M-FKE）では、GPU リソースを効率的に活用するための GPU Sharing メカニズムを提供しています。

## GPU Sharing の概要

通常の Kubernetes では、GPU は整数単位で割り当てられます。GPU Sharing を使用することで、1 つの GPU を複数のワークロードで共有し、GPU リソースの使用効率を向上させることができます。

以下のユースケースで GPU Sharing が有効です。
- 推論（inference）ワークロードのように、1 つの GPU 全体を必要としない場合
- 開発・テスト環境で複数のユーザーが GPU を共有する場合
- コスト最適化のために GPU 利用率を最大化したい場合

## GPU Sharing の設定

GPU Sharing を利用するには、適切な device plugin と設定が必要です。FPT Cloud が管理する M-FKE クラスターでは、GPU Sharing のサポートが組み込まれています。

GPU のフラクショナルな割り当て例：

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: gpu-sharing-pod
spec:
  containers:
    - name: gpu-container
      image: nvidia/cuda:11.0-base
      resources:
        limits:
          nvidia.com/gpu: "0.5"
```

## 注意事項

- GPU Sharing を使用する場合、各 Pod が使用するメモリ量を適切に設定してください。
- GPU Sharing と通常の GPU 割り当てを混在させる場合は注意が必要です。
- GPU Sharing の詳細設定については、FPT Cloud サポートにお問い合わせください。

詳細については、[Kubernetes 上の GPU サービス](./gpu-service-on-k8s.md) のドキュメントも参照してください。
