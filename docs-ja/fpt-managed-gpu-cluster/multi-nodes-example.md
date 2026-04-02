---
id: "multi-nodes-example"
title: "マルチノードの例：vLLMとマルチホストサービング"
description: "このガイドでは、vLLMフレームワークを使用してFPT Kubernetes Engine（FKE GPU）の複数のノードでGemma 3大規模言語モデル（LLM）をデプロイしてサービングする方法を説明します。"
sidebar_label: "マルチノードの例：vLLMとマルチホストサービング"
sidebar_position: 23
---

# マルチノードの例：vLLMとマルチホストサービング

このガイドでは、推論サービングに**vLLMフレームワーク**を使用して**FPT Kubernetes Engine（FKE GPU）の複数のノード**でGemma 3大規模言語モデル（LLM）を**デプロイしてサービング**する方法を説明します。

目的は、**マネージドKubernetes環境**での**LLMの推論デプロイを理解して実践する**ための基盤を提供することです。

このガイドでは、以下の操作を行います：

- **Hugging Face**から**Gemma 1B、4B**バージョンの**重み（weights）をロード**するようFKEを設定する。
- 複数のノードにLLMモデルをデプロイする。

このガイドは、大規模言語モデル（LLM）のサービングにKubernetesのコンテナオーケストレーション機能を活用することに関心を持つ、Machine Learning（ML）エンジニア、プラットフォーム管理者・オペレーター、DataおよびAIの専門家を対象としています。

## 背景

### GPU

グラフィックスプロセッシングユニット（GPU）は、機械学習やデータ処理などの特定のワークロードを加速させます。FKEはこれらの強力なGPUを搭載したノードを提供し、機械学習やデータ処理タスクで最適なパフォーマンスが得られるようクラスターを設定できます。FKEはノード設定に複数のマシンタイプオプションを提供しており、NVIDIA H100、A30、A100 GPUを使用するマシンタイプが含まれます。

### LeaderWorkerSet（LWS）

LeaderWorkerSet（LWS）は、複数のノードにまたがるAI/MLデプロイメントパターンを解決するためのKubernetesオープンソースプロジェクトです。複数のノードにまたがるAIワークロードのデプロイでは複数のPodを使用し、各Podは異なるノードで実行されて分散推論ワークロードを処理します。LWSにより複数のPodをグループとして表示・管理でき、分散モデルサービングの運用と管理が簡素化されます。

### vLLMとマルチホストサービング

計算集約的なLLMモデルをデプロイする場合、vLLMを使用して複数のGPUで実行することをお勧めします。

vLLMは高度に最適化されたオープンソースのLLMサービングフレームワークで、以下の機能によりGPUサービングスループットを向上させます：

- PagedAttentionによる最適化されたトランスフォーマー実装。
- 全体的なサービングスループットを改善する継続的バッチングメカニズム。
- 複数のGPUにまたがる分散サービング。

単一のGPUノードに収まらない特に高い計算要件を持つLLMモデルには、複数のGPUノードを使用してモデルをサービングできます。vLLMは2つの戦略で複数のGPUにまたがる実行をサポートしています：

- **テンソル並列処理**は、トランスフォーマーレイヤーの行列乗算を複数のGPUに分散します。ただし、この戦略はGPU間の頻繁な通信のために高速ネットワークが必要であり、マルチノードでの実行には適していません。
- **パイプライン並列処理**は、モデルをレイヤーごと（垂直方向）に分割します。この戦略はGPU間の継続的な通信を必要としないため、複数のノードにまたがるモデル実行に適しています。

マルチノードサービングで両方の戦略を組み合わせることができます。例えば、それぞれ8つのA30 GPUを持つ2つのノードを使用する場合：

- 2つのノードにモデルを分散するための2方向パイプライン並列処理。
- 各ノード内の8つのGPUにモデルを分散するための8方向テンソル並列処理。

## 環境を準備する

### FKE GPUクラスターを準備する

以下を確認してください：

- 少なくとも2つのGPUノードを持つKubernetesクラスター。
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

### LeaderWorkerSetをインストールする

以下のコマンドでLeaderWorkerSetをインストールします：

```bash
kubectl apply --server-side -f https://github.com/kubernetes-sigs/lws/releases/latest/download/manifests.yaml
```

LeaderWorkerSetのインストールを確認します：

```bash
kubectl get pod -n lws-system
```

## マルチノードサービング用vLLMサーバーをデプロイする

このセクションでは、GemmaモデルをサービングするためにvLLMコンテナをデプロイします。ここではLeaderWorkerSetを使用します。LeaderWorkerSetとvLLMを使用しても、vLLMのみでモデルをデプロイする場合と比較してvLLMの設定は変わりません。

### LeaderWorkerSetでvLLMをデプロイする

```yaml
apiVersion: leaderworkerset.x-k8s.io/v1
kind: LeaderWorkerSet
metadata:
  name: vllm
spec:
  replicas: 1
  leaderWorkerTemplate:
    size: 2
    restartPolicy: RecreateGroupOnPodRestart
    leaderTemplate:
      metadata:
        labels:
          role: leader
      spec:
        containers:
          - name: vllm-leader
            image: vllm/vllm-openai:v0.8.5
            env:
              - name: HUGGING_FACE_HUB_TOKEN
                valueFrom:
                  secretKeyRef:
                    name: hf-secret
                    key: hf_api_token
            command:
              - sh
              - -c
              - |
                bash /vllm-workspace/examples/online_serving/multi-node-serving.sh leader --ray_cluster_size=$(LWS_GROUP_SIZE);
                python3 -m vllm.entrypoints.openai.api_server \
                  --port 8080 \
                  --model google/gemma-3-1b-it \
                  --tensor-parallel-size 1 \
                  --pipeline-parallel-size 2 \
                  --trust-remote-code \
                  --max-model-len 4096
            resources:
              limits:
                nvidia.com/gpu: "1"
            ports:
              - containerPort: 8080
            readinessProbe:
              tcpSocket:
                port: 8080
              initialDelaySeconds: 15
              periodSeconds: 10
            volumeMounts:
              - mountPath: /dev/shm
                name: dshm
        volumes:
          - name: dshm
            emptyDir:
              medium: Memory
              sizeLimit: 5Gi
    workerTemplate:
      spec:
        containers:
          - name: vllm-worker
            image: vllm/vllm-openai:v0.8.5
            command:
              - sh
              - -c
              - |
                bash /vllm-workspace/examples/online_serving/multi-node-serving.sh worker --ray_address=$(LWS_LEADER_ADDRESS)
            resources:
              limits:
                nvidia.com/gpu: "1"
            env:
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
              sizeLimit: 5Gi
```

各パラメーター：

- `nvidia.com/gpu: "1"` — 各コンテナはそのノード上の1つのGPUを使用します。
- `--pipeline-parallel-size=2` — パイプライン並列処理を使用して2つのノードでモデルを実行します。
- `HUGGING_FACE_HUB_TOKEN` — 作成したHugging Faceトークン。
- `dshm` ボリューム — 分散推論/学習のユースケースで重要な共有メモリボリューム。

### モデルを公開する

モデルを公開するには、Kubernetes Serviceを作成します。サービスタイプがClusterIPではなくLoadBalancerの場合、モデルはインターネットからアクセスできます：

```yaml
apiVersion: v1
kind: Service
metadata:
  name: vllm-leader
spec:
  ports:
    - name: http
      port: 8080
      protocol: TCP
      targetPort: 8080
  selector:
    leaderworkerset.sigs.k8s.io/name: vllm
    role: leader
  type: ClusterIP
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
   spec:
     containers:
       ...
       volumeMounts:
       ...
         - mountPath: ~/.cache/huggingface/
           name: model
     volumes:
       ...
       - name: model
         persistentVolumeClaim:
           claimName: data-pvc
```

## モデルをサービングする

### クラスター外からモデルにアクセスするためのネットワーク設定

モデルを公開する際にLoadBalancerサービスタイプを使用した場合は、そのロードバランサーのパブリックIPを使用します。

ClusterIPを使用した場合は、サービスにポートフォワードします：

```bash
kubectl port-forward svc/vllm-leader 8080:8080
```

### モデルと対話する

このセクションでは、**Gemma 3モデル**を検証するための**基本テスト**の実施方法を説明します。他のモデルの場合は、`gemma-3-1b-it` を対応するモデル名に置き換えてください。

この例では、**テキストのみの入力**で**Gemma 3 1Bモデル**をテストする方法を示します。

新しいターミナルセッションで、curlを使用してモデルとチャットします：

```bash
curl http://127.0.0.1:8080/v1/chat/completions \
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
