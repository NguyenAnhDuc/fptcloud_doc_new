---
id: "finetune-llm-models"
title: "KubernetesでUnslothを使ってLLMモデルをファインチューニングする"
description: "このガイドでは、UnslothとGPUを使用してKubernetes上でLLMモデルをファインチューニングする方法を説明します。"
sidebar_label: "KubernetesでUnslothを使ってLLMモデルをファインチューニングする"
sidebar_position: 5
pagination_next: null
---

# KubernetesでUnslothを使ってLLMモデルをファインチューニングする

このガイドでは、UnslothとGPUを使用してKubernetes上でLLMモデルをファインチューニングする方法を説明します。

目的は、**マネージドKubernetes環境**での**LLMモデルのファインチューニングを理解して実践する**ための基盤を提供することです。

このガイドでは、以下の操作を行います：

- Kubernetes上にコンテナをデプロイする。
- Unslothを使用してLLMモデルをファインチューニングする。

このガイドは、大規模言語モデル（LLM）のサービングにKubernetesのコンテナオーケストレーション機能を活用することに関心を持つ、Machine Learning（ML）エンジニア、プラットフォーム管理者・オペレーター、DataおよびAIの専門家を対象としています。

## 環境を準備する

### FKE GPUクラスターを準備する

以下を確認してください：

- GPUを搭載したKubernetesクラスター。
- GPU Operatorがインストールされていること。
- NVIDIAドライバーとcontainer toolkit。
- Persistent Volumeを作成するための十分なストレージクォータ。

以下のコマンドでK8s上のGPUノードが使用可能かどうかを確認します：

```bash
kubectl describe node
```

capacityとallocatableセクションで `nvidia.com/gpu` リソースの値が1より大きければ、ノードは使用可能な状態です：

```
Capacity:
  ...
  nvidia.com/gpu:     8
  ...
Allocatable:
  ...
  nvidia.com/gpu:     8
  ...
```

### Hugging Faceトークンを準備する（オプション）

Hugging Faceのウェブサイトでトークンを作成し、そのトークンを含むKubernetes Secretを作成します：

```bash
kubectl create secret generic hf-secret --from-literal=hf_api_token=${HF_TOKEN} --dry-run=client -o yaml | kubectl apply -f -
```

## Unslothをデプロイする

このセクションでは、モデルをトレーニングするためにUnslothコンテナをデプロイします。このガイドではKubernetes Deploymentを使用します。Deploymentにより、トレーニングプロセス用に1つ以上のPodを実行できます。KubernetesはエラーPodの再起動を保証し、クラスター内のGPUノードにスケジュールします。

各PodはUnslothコンテナを実行し、GPUリソースを使用して大規模言語モデルのファインチューニングを実行します。Deploymentを使用すると、トレーニングジョブのライフサイクル管理、設定の更新（画像、環境変数、GPU数など）、複数のGPUまたはノードでの並列トレーニングが必要な場合のスケールアップが容易になります。

### DeploymentでUnslothをデプロイする

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: unsloth-gpu
spec:
  replicas: 1
  selector:
    matchLabels:
      app: unsloth
  template:
    metadata:
      labels:
        app: unsloth
    spec:
      containers:
        - name: unsloth
          image: unsloth/unsloth
          imagePullPolicy: IfNotPresent
          env:
            - name: JUPYTER_PASSWORD
              value: "mypassword"
          ports:
            - containerPort: 8888
              name: jupyter
            - containerPort: 22
              name: ssh
          resources:
            limits:
              nvidia.com/gpu: 1
```

各パラメーター：

- `nvidia.com/gpu: 1` — コンテナはノード上の1つのGPUを使用します。
- `JUPYTER_PASSWORD` — Jupyter Notebookにアクセスするためのパスワード。

### Unslothコンテナを公開する

サービスを公開するには、Kubernetes Serviceを作成します。サービスタイプがClusterIPではなくLoadBalancerの場合、インターネットからアクセスできます：

```yaml
apiVersion: v1
kind: Service
metadata:
  name: unsloth-service
spec:
  type: ClusterIP
  selector:
    app: unsloth
  ports:
    - name: jupyter
      protocol: TCP
      port: 8888
      targetPort: 8888
    - name: ssh
      protocol: TCP
      port: 22
      targetPort: 22
```

### 永続ストレージを設定する（オプション）

上記の設定では、モデルの重みはコンテナのファイルシステムに保存されます。コンテナが再起動すると、重みを最初から再ダウンロードする必要があります。

これを避けるために、モデルをボリュームに事前保存しておくことで、コンテナの再起動後もモデルの重みが残ります。

PersistentVolumeClaimを作成します：

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: data-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
```

Deploymentマニフェストを編集します：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: unsloth-gpu
spec:
  ...
  template:
    ...
    spec:
      containers:
        ...
        volumeMounts:
        ...
        - mountPath: /workspace/work
          name: workdir
      volumes:
      ...
        - name: workdir
          persistentVolumeClaim:
            claimName: data-pvc
```

## Unslothサービスにアクセスする

### クラスター外からUnslothにアクセスするためのネットワーク設定

サービスを公開する際にLoadBalancerサービスタイプを使用した場合は、そのロードバランサーのパブリックIPを使用します。

ClusterIPを使用した場合は、サービスにポートフォワードします：

```bash
kubectl port-forward service/unsloth-service 8888:8888
```

Jupyter NotebookではなくSSHを使用する場合（まだSSHキーペアがない場合はUnslothコンテナ内で作成してください）：

```bash
kubectl port-forward service/unsloth-service 2222:22
```

http://localhost:8888 でJupyter Notebookにアクセスし、`unsloth-notebooks` セクションに移動してUnslothの利用可能なNotebookを確認します。

### サンプルトレーニングタスクを実行する

`Granite4.0_350M.ipynb` を検索し、そのNotebookを実行します。

出力：

```
154.2162 seconds used for training.
2.57 minutes used for training.
Peak reserved memory = 4.004 GB.
Peak reserved memory for training = 3.281 GB.
Peak reserved memory % of max memory = 17.04 %.
Peak reserved memory for training % of max memory = 13.963 %.
```
