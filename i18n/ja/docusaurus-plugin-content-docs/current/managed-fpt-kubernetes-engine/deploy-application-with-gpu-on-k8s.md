---
id: "deploy-application-with-gpu-on-k8s"
title: "K8s 上での GPU アプリケーションのデプロイ"
description: "Managed FKE上でGPUリソースを使用するアプリケーションをKubernetesにデプロイする方法を説明します。"
sidebar_label: "GPU アプリのデプロイ"
sidebar_position: 23
draft: true
---

# K8s 上での GPU アプリケーションのデプロイ

Kubernetes は GPU リソースを CPU リソースの管理と同様の方法で管理・利用します。Worker Group の GPU 仕様に応じて、Kubernetes 上で実行されるアプリケーションに対して GPU リソースを適切に設定する必要があります。

:::note
- GPU の requests を定義せずに GPU limits のみを定義できます（Kubernetes はデフォルトで limits 値を requests として使用します）。
- GPU limits と requests の両方を定義できますが、これらの値は同じにする必要があります。
- GPU limits を定義せずに GPU requests のみを定義することはできません。
:::

以下のコマンドを実行して Kubernetes の GPU スペックを確認できます。

```bash
kubectl get node <worker-node> -o json | jq '.items[].metadata.labels'
```

[![](/img/migrated/58-1-2657a252.png)](/img/migrated/58-1-2657a252.png)

上記の画像は、NVIDIA A30 GPU を使用し、構成ストラテジーが **all-balanced** に設定され、ステータスが **success** の Worker を示しています。

Worker ノードに SSH して次のコマンドを実行すると、GPU インスタンス仕様を確認できます。

```bash
nvidia-smi mig -lgi
```

[![](/img/migrated/59-1-bb3d5068.png)](/img/migrated/59-1-bb3d5068.png)

### GPU ワークロードを使用したアプリケーションのデプロイ例

**strategy: single** の場合、GPU リソースは次のように宣言します。

```yaml
nvidia.com/gpu: <gpu-count>
```

例: `nvidia.com/gpu: 1`

:::note
**strategy: single** では、GPU は均等にインスタンスに分割されます。
:::

**strategy: single** GPU を使用したデプロイメント例:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-gpu-app
spec:
  replicas: 1
  selector:
    matchLabels:
      component: gpu-app
  template:
    metadata:
      labels:
        component: gpu-app
    spec:
      containers:
        - name: gpu-container
          securityContext:
            capabilities:
              add:
                - SYS_ADMIN
          resources:
            limits:
              nvidia.com/gpu: 1
          image: nvidia/samples:dcgmproftester-2.0.10-cuda11.0-ubuntu18.04
          command: ["/bin/sh", "-c"]
          args:
            - while true; do /usr/bin/dcgmproftester11 --no-dcgm-validation -t 1004 -d 300; sleep 30; done
```

**strategy: mixed** の場合、GPU リソースは次のように宣言します。

```yaml
nvidia.com/<mig-profile>: <gpu-count>
```

例: `nvidia.com/mig-1g.6gb: 2`

:::note
**strategy: mixed** では、GPU は 2 つのインスタンスタイプに分割されるため、リソース宣言時にインスタンスタイプを明示的に定義する必要があります。
:::

**strategy: none** の場合、GPU リソースは次のように宣言します。

```yaml
nvidia.com/gpu: 1
```

:::note
**strategy: none** では、GPU はアプリケーション Pod に完全に割り当てられます。
:::
