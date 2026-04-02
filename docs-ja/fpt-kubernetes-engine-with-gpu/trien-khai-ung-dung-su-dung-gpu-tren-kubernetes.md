---
id: "trien-khai-ung-dung-su-dung-gpu-tren-kubernetes"
title: "KubernetesへのGPUアプリケーションのデプロイ"
sidebar_label: "KubernetesへのGPUアプリケーションのデプロイ"
sidebar_position: "5"
---

# KubernetesへのGPUアプリケーションのデプロイ

KubernetesはGPUリソースをCPUリソースと同様に管理・使用します。ワーカーグループに選択したGPU設定に基づいて、Kubernetes上のアプリケーション用GPUリソースを宣言します。

**注意事項:**
- Kubernetesはlimitsをデフォルトのリクエスト値として使用するため、requestsを指定せずにGPU limitsを指定できます。
- GPU limitsとrequestsの両方を指定できますが、2つの値は等しくなければなりません。
- limitsを指定せずにGPU requestsを指定することはできません。

以下のコマンドでGPU設定を確認します。

```bash
kubectl get node -o json | jq '.items[].metadata.labels'
```

**例:** 以下の画像は、NVIDIA A30カードを使用し、strategy: all-balanced、ステータス: successのワーカーを示しています。

[![Alt text](/img/migrated/Picture32-1-30173fb0.png)](/img/migrated/Picture32-1-30173fb0.png)

## デプロイ例

### 1. MIG共有モード（single戦略）

GPUリソースは以下のように宣言します。

```
# 構文:
nvidia.com/gpu: <数値>

# 例:
nvidia.com/gpu: 1

# （single戦略では、GPUカードは均等なサイズのインスタンスに分割されます）
```

GPU single戦略を使用したデプロイメントの例:

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

### 2. MIG共有モード（mixed戦略）

GPUリソースは以下のように宣言します。

```
# 構文:
nvidia.com/<migプロファイル>: <数値>

# 例:
nvidia.com/mig-1g.6gb: 2

# （mixed戦略では、GPUカードは2種類のインスタンスに分割されるため、
#  リソース宣言時にインスタンスタイプを明示する必要があります）
```

GPU mixed戦略を使用したデプロイメントの例:

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

              nvidia.com/mig-1g.6gb: 1

          image: nvidia/samples:dcgmproftester-2.0.10-cuda11.0-ubuntu18.04

          command: ["/bin/sh", "-c"]

          args:

            - while true; do /usr/bin/dcgmproftester11 --no-dcgm-validation -t 1004 -d 300; sleep 30; done
```

### 3. None戦略

GPUリソースは以下のように宣言します。

```
# 構文:
nvidia.com/gpu: 1

# （none戦略では、PodはGPUカード1枚のリソース全体を使用します）
```

GPU none戦略を使用したデプロイメントの例:

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

### 4. MPS共有モード

GPUリソースは以下のように宣言します。

```
# 構文:
nvidia.com/gpu: <数値>

# 例:
nvidia.com/gpu: 1
```

**注意:** Podがリクエストできる `nvidia.com/gpu` リソースの最大数は1です。
