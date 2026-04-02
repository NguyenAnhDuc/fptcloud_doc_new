---
id: "single-gpu-example"
title: "シングルGPUの例：vLLMを使ったLLMの推論サービング"
description: "このガイドでは、vLLMフレームワークを使用してFPT Kubernetes Engine（FKE GPU）のシングルGPUでGemma 3大規模言語モデル（LLM）をデプロイしてサービングする方法を説明します。"
sidebar_label: "シングルGPUの例：vLLMを使ったLLMの推論サービング"
sidebar_position: 21
---

# シングルGPUの例：vLLMを使ったLLMの推論サービング

このガイドでは、**vLLMフレームワーク**を使用して**FPT Kubernetes Engine（FKE GPU）のGPU**上でGemma 3大規模言語モデル（LLM）を**デプロイしてサービング**する方法を説明します。

目的は、**マネージドKubernetes環境**での**LLMの推論デプロイを理解して実践する**ための基盤を提供することです。

このガイドでは、以下の操作を行います：

- **vLLM**を実行する**事前ビルド済みコンテナ**をFKEにデプロイする。
- **Hugging Face**から**Gemma 1B、4B**バージョンの**重み（weights）をロード**するようFKEを設定する。

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
            nvidia.com/gpu: "1"
          limits:
            cpu: "2"
            memory: "10Gi"
            ephemeral-storage: "10Gi"
            nvidia.com/gpu: "1"
        command: ["python3", "-m", "vllm.entrypoints.openai.api_server"]
        args:
        - --model=$(MODEL_ID)
        - --tensor-parallel-size=1
        - --host=0.0.0.0
        - --port=8000
        env:
        - name: LD_LIBRARY_PATH
          value: ${LD_LIBRARY_PATH}:/usr/local/nvidia/lib64
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

- `nvidia.com/gpu: "1"` — コンテナはノード上の1つのGPUを使用します。
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

Deploymentマニフェストを編集します：

```yaml
...
volumeMounts:
  - mountPath: ~/.cache/huggingface/
    name: model
...
volumes:
  - name: model
    persistentVolumeClaim:
      claimName: data-pvc
...
```

## モデルをサービングする

### クラスター外からモデルにアクセスするためのネットワーク設定

モデルを公開する際にLoadBalancerサービスタイプを使用した場合は、そのロードバランサーのパブリックIPを使用します。

ClusterIPを使用した場合は、サービスにポートフォワードします：

```bash
kubectl port-forward service/llm-service 8000:8000
```

### モデルをテストする

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

### 出力

```json
{
  "id": "chatcmpl-b8bb8754b6bb46dc9e7fd416c2fe0cd6",
  "object": "chat.completion",
  "model": "google/gemma-3-1b-it",
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "Hello there! I'm doing well, thank you "
      }
    }
  ]
}
```
