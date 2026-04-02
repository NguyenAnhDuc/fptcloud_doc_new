---
id: "gpu-time-sharing"
title: "FPT Kubernetes EngineのGPU time sharing/time slicing"
description: "FPT Kubernetes EngineのGPU time sharing/time slicing機能の紹介。"
sidebar_label: "FPT Kubernetes EngineのGPU time sharing/time slicing"
sidebar_position: 18
---

# FPT Kubernetes EngineのGPU time sharing/time slicing

**FPT Managed GPU Cluster** はオープンソースのK8sプラットフォームをベースに構築され、コンテナアプリケーションのデプロイ、スケーリング、管理を自動化します。FPT Managed GPU ClusterはContainer Orchestration、Storage、Networking、Security、PaaSコンポーネントを統合し、クラウド上でアプリケーションを開発・デプロイするための最適な環境をお客様に提供します。

**FPT Managed GPU Cluster** は1つのNVIDIA GPU上で複数のコンテナ/プロセスのためにtime-slicing/time-sharingを提供します。time-sharingを使用することで、GPUの使用コストを最適化できます。

詳細に入る前に、time-sharingのメカニズム、その制限、および適切なユースケースを理解してください。

**1. 前提条件**

FPT managed GPU clusterを初期化するために、managed GPU clusterサービスをアクティベートし、ストレージ、パブリックIPなどのクォータが十分にあること。

GPU OperatorがClusterにインストールされていること。

Worker groupがPre-installed driverを使用しているか、手動でdriverがインストールされていること。

Worker groupがGPU worker groupタイプであること。

当社が提供するすべてのGPUでtime-sharing機能を有効にできます。

**2. インストールガイド**

**手順1:** GPU softwareインストールセクションでGPU Operatorをインストールし、GPU Operatorのステータスがreadyになるまで待ちます。

[![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png)

**手順3:** time slicingのインストールを確認します。

```bash
kubectl describe nodes
```

**出力：**

[![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png)

**説明：**

ノードには合計8つのGPUがあります。各GPUは最大10のコンテナが接続できるようにtime slicingが設定されているため、`nvidia.com/gpu` のAllocatable値は8 × 10 = 80になります。

**手順4:** time slicing機能を使用してKubernetes上にサンプルワークロードをデプロイします。

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: vllm-gpt2
spec:
  replicas: 1
  selector:
    matchLabels:
      app: vllm-gpt2
  template:
    metadata:
      labels:
        app: vllm-gpt2
    spec:
      containers:
      - name: vllm
        image: vllm/vllm:latest
        args:
          - --model=gpt2
          - --tensor-parallel-size=1
          - --port=8000
        ports:
          - containerPort: 8000
        resources:
          limits:
            nvidia.com/gpu: 1  # 1 GPUを要求
      restartPolicy: Always
```

**vllm-gpt2ポッドのログを確認する：**

```bash
kubectl logs <pod_name>
```

**結果：**

[![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png)

[![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png)

**3. MIGとTime Slicingの組み合わせ**

管理者として、FKEの複数のGPU共有機能を組み合わせたい場合があります。GPU time-sharing機能はMIG（Multi-Instance GPU）と組み合わせて動作でき、1つの物理GPUを最大7つのパーティションに分割できます。これらのパーティションは互いに分離されています。各MIGインスタンスにGPU time sharing を設定できます。

例えば、MIGプロファイル値を `1g.10gb` に設定すると、基盤となるGPUは7つのパーティションに分割されます。さらにmax-shared-clientsを3に設定すると、各パーティションは最大3つのコンテナをサポートするため、その物理GPU上で最大合計21の共有GPUデバイスが割り当て可能になります。gpu-partition-sizeが実際のパーティションにどのように変換されるかを理解するには、MIGドキュメントを参照してください。

MIGインスタンスでGPU time sharingを有効にするには、worker group sharingの画面でMIGとtime slicingの両方を選択します。

[![](/img/migrated/Picture1.3-7829b757.png)](/img/migrated/Picture1.3-7829b757.png)

**4. Time slicingの制限事項**

GPU time-sharingでは、GPU上でのメモリ制限は適用されません。OOM（メモリ不足）エラーを避けるために、ワークロードにGPUメモリ制限を設定することをお勧めします。セキュリティ上の問題を避けるために、GPU time sharingを使用する際は同じ信頼境界内のワークロードのみをデプロイしてください。

1つの物理GPU上でtime sharingを使用できるコンテナの最大数は48です。GPU time sharing設定を行う際は、ワークロードのリソース要件と基盤となる物理GPUの性能を考慮して、システムのパフォーマンスと応答性を最適化してください。
