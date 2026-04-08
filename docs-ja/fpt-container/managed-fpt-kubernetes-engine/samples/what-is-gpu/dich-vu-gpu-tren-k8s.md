---
id: "dich-vu-gpu-tren-k8s"
title: "Kubernetes 上の GPU サービス"
description: "FPT Cloud Managed Kubernetes における GPU サービスの設定と使用方法を説明します。"
sidebar_label: "Kubernetes 上の GPU サービス"
sidebar_position: 5
---

# Kubernetes 上の GPU サービス

FPT Cloud の Managed Kubernetes Engine（M-FKE）は、GPU ワークロードをサポートします。GPU ノードを含むワーカーグループを設定することで、機械学習、ディープラーニング、データサイエンスなどのワークロードを GPU で実行できます。

## GPU ワーカーグループの設定

GPU を使用するには、GPU フレーバーを持つワーカーグループを作成する必要があります。クラスター作成時またはワーカーグループ追加時に GPU フレーバーを選択します。

## GPU リソースの要求

Kubernetes での GPU リソースの要求は、通常のリソース要求と同様に行います。Pod の spec に `nvidia.com/gpu` リソースを指定します。

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: gpu-pod
spec:
  containers:
    - name: gpu-container
      image: nvidia/cuda:11.0-base
      resources:
        limits:
          nvidia.com/gpu: 1
```

## GPU の確認

クラスター内の GPU ノードを確認するには、以下のコマンドを使用します。

```
kubectl get nodes -o json | jq '.items[].status.capacity'
```

GPU が正しく認識されている場合、`nvidia.com/gpu` フィールドが表示されます。

## 注意事項

- GPU リソースは整数値のみ指定できます（分数指定は GPU Sharing 機能を使用してください）。
- GPU ノードには適切な NVIDIA ドライバーが事前にインストールされています。
- GPU ワークロードに適した namespace を使用することを推奨します。

詳細については、[GPU Sharing](/docs/ja/fpt-container/managed-fpt-kubernetes-engine/samples/what-is-gpu/gpu-sharing) のドキュメントも参照してください。
