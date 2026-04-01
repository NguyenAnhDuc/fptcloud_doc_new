---
id: "how-to-use-gpu-in-kubernetes"
title: "Kubernetes での GPU の使用方法"
description: "FPT Cloud のManaged FKEでNVIDIA GPUを使用する方法と、主要機能について説明します。"
sidebar_label: "Kubernetes での GPU の使用"
sidebar_position: 20
---

# Kubernetes での GPU の使用方法

FPT Cloud は **NVIDIA GPU を使用した Kubernetes** を提供しており、以下の主要機能を備えています。

- **柔軟な GPU 構成**: 複数の GPU タイプ、オプションの GPU メモリ設定を各 Worker Group に適用可能。
- **NVIDIA Operator** による Kubernetes での GPU **リソース管理と割り当ての自動化**。
- **NVIDIA DCGM（Data Center GPU Manager）** を使用した GPU の**可視化とモニタリング**。
- アプリケーションの GPU リソース需要の増減に応じた **Autoscaler** によるコンテナ・ノードの自動スケーリング。
- Multi-Instance メカニズムによる **GPU シェアリング**サポート（GPU リソースの使用効率とコストを最適化）。

FPT Cloud は **NVIDIA GPU Operator** を活用し、Kubernetes 上で GPU を使用するために必要なすべてのソフトウェアコンポーネントを管理する自動化ツールを提供します。GPU Operator により、ユーザーは Kubernetes クラスター内で CPU と同様の感覚で GPU リソースを利用できます。

Operator のコンポーネントは以下の通りです。

- NVIDIA Drivers（CUDA、MIG など）
- NVIDIA Device Plugin
- NVIDIA Container Toolkit
- NVIDIA GPU Feature Discovery
- NVIDIA Data Center GPU Manager（モニタリング）

現在、FPT Cloud は以下の MIG プロファイルで NVIDIA A30 GPU を使用した Kubernetes をサポートしています。

| **No.** | **GPU A30 プロファイル** | **ストラテジー** | **インスタンス数** | **インスタンスリソース** |
| --- | --- | --- | --- | --- |
| 1 | all-1g.6gb | single | 4 | 1g.6gb |
| 2 | all-2g.12gb | single | 2 | 2g.12gb |
| 3 | all-balanced | mixed | 2 | 1g.6gb |
|  | all-balanced | mixed | 1 | 2g.12gb |
| 4 | none（ラベルなし） | none | 0 | 0（全体） |

例: 構成ストラテジー **single: all-1g.6gb** を選択した場合、Worker ノード上の A30 GPU は、それぞれ物理 GPU の ¼ に相当する論理 GPU リソースと 6GB の GPU RAM を持つ 4 つの MIG デバイスに分割されます。

:::note
- MIG 構成は、Worker に接続されているすべてのカードに適用されます。
- 同じクラスター内の Worker Group 間での MIG ストラテジーは同じタイプ（single/mixed/none）である必要があります。
:::
