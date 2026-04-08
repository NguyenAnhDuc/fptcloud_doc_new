---
id: "multi-gpus-example"
title: "マルチGPUの例：vLLMを使ったLLMの推論サービング"
description: "このガイドでは、vLLMフレームワークを使用してFPT Kubernetes Engine（FKE GPU）の複数のGPUでGemma 3大規模言語モデル（LLM）をデプロイしてサービングする方法を説明します。"
sidebar_label: "マルチGPUの例：vLLMを使ったLLMの推論サービング"
sidebar_position: 3
---

# マルチGPUの例：vLLMを使ったLLMの推論サービング

このガイドでは、**vLLMフレームワーク**を使用して**FPT Kubernetes Engine（FKE GPU）の複数のGPU**でGemma 3大規模言語モデル（LLM）を**デプロイしてサービング**する方法を説明します。

このガイドでは、以下の操作を行います：

- **Hugging Face**からGemmaの重みをロードするよう**FKEを設定**する。
- 複数のGPU上にLLMモデルをデプロイする。

このガイドは、大規模言語モデル（LLM）のサービングにKubernetesのコンテナオーケストレーション機能を活用することに関心を持つ、Machine Learning（ML）エンジニア、プラットフォーム管理者・オペレーター、DataおよびAIの専門家を対象としています。

## 環境を準備する

### FKE GPUクラスターを準備する

- GPUを搭載したKubernetesクラスター。
- GPU Operatorがインストールされていること。
- NVIDIAドライバーとcontainer toolkit。
- 十分なストレージクォータ。

GPUノードを確認します：

```bash
kubectl describe node
```

GPUリソースが利用可能であれば、ノードは使用可能な状態です：

```
Capacity:
  ...
  nvidia.com/gpu: 8
  ...
Allocatable:
  ...
  nvidia.com/gpu: 8
  ...
```

### Hugging Faceトークンを準備する（オプション）

Hugging Faceのウェブサイトでトークンを作成し、そのトークンを含むKubernetes Secretを作成します：

```bash
kubectl create secret generic hf-secret \
  --from-literal=hf_api_token=${HF_TOKEN} \
  --dry-run=client -o yaml | kubectl apply -f -
```

## vLLMをデプロイする

このセクションでは、GemmaモデルをサービングするためにvLLMコンテナをデプロイします。このガイドではKubernetes Deploymentを使用します。Deploymentにより、クラスター内のノードに分散した複数のPodレプリカを実行できます。

### DeploymentでvLLMをデプロイする

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: vllm-gemma-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: gemma-server
  template:
    metadata:
      labels:
        app: gemma-server
    spec:
      containers:
      - name: inference-server
        image: docker.io/vllm/vllm-openai:v0.10.0
        resources:
          requests:
            cpu: "2"
            memory: "10Gi"
            ephemeral-storage: "10Gi"
            nvidia.com/gpu: "2"
          limits:
            cpu: "2"
            memory: "10Gi"
            ephemeral-storage: "10Gi"
            nvidia.com/gpu: "2"
        command: ["python3", "-m", "vllm.entrypoints.openai.api_server"]
        args:
          - --model=$(MODEL_ID)
          - --tensor-parallel-size=2
          - --host=0.0.0.0
          - --port=8000
        env:
          - name: MODEL_ID
            value: google/gemma-3-1b-it
          - name: HUGGING_FACE_HUB_TOKEN
            valueFrom:
              secretKeyRef:
                name: hf-secret
                key: hf_api_token
        volumeMounts:
          - mountPath: /dev/shm
            name: dshm
      volumes:
        - name: dshm
          emptyDir:
            medium: Memory
```

各パラメーター：

- `nvidia.com/gpu: "2"` — コンテナはノード上の2つのGPUを使用します。
- `--tensor-parallel-size=2` — テンソル並列処理を使用して2つのGPU上でモデルを実行します。
- `MODEL_ID` — Hugging Face上のモデル名。
- `HUGGING_FACE_HUB_TOKEN` — 作成したHugging Faceトークン。
- `dshm` ボリューム — 分散推論/学習のユースケースで重要な共有メモリボリューム。

### モデルを公開する

モデルを公開するには、Kubernetes Serviceを作成します。サービスタイプがClusterIPではなくLoadBalancerの場合、モデルはインターネットからアクセスできます：

```yaml
apiVersion: v1
kind: Service
metadata:
  name: llm-service
spec:
  selector:
    app: gemma-server
  type: ClusterIP
  ports:
    - protocol: TCP
      port: 8000
      targetPort: 8000
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

## モデルをサービングする

### クラスター外からモデルにアクセスするためのネットワーク設定

モデルを公開する際にLoadBalancerサービスタイプを使用した場合は、そのロードバランサーのパブリックIPを使用します。

ClusterIPを使用した場合は、サービスにポートフォワードします：

```bash
kubectl port-forward service/llm-service 8000:8000
```

### モデルと対話する

このセクションでは、**Gemma 3モデル**を検証するための**基本テスト**の実施方法を説明します。他のモデルの場合は、`gemma-3-1b-it` を対応するモデル名に置き換えてください。

この例では、**テキストのみの入力**で**Gemma 3 1Bモデル**をテストする方法を示します。

新しいターミナルセッションで、curlを使用してモデルとチャットします：

```bash
curl http://127.0.0.1:8000/v1/chat/completions \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "model": "google/gemma-3-1b-it",
    "messages": [
      {
        "role": "user",
        "content": "Hello, how are you?"
      }
    ]
  }'
```
