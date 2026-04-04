---
id: "gpu-fpt-cloud-k8s"
title: "FPT Kubernetes Engine 上の GPU サービス"
description: "FPT Cloud は NVIDIA GPU サポートを備えた Kubernetes を提供し、柔軟な GPU 設定と自動管理機能を特徴としています。"
sidebar_label: "FPT Kubernetes Engine 上の GPU サービス"
sidebar_position: "35"
---

# FPT Kubernetes Engine 上の GPU サービス

FPT Cloud は NVIDIA GPU サポートを備えた Kubernetes を提供し、以下の主要機能を備えています：
  * 各 Worker Group に GPU タイプと GPU メモリを選択できる柔軟な GPU 設定。
  * NVIDIA Operator による Kubernetes での GPU リソースの自動管理と割り当て。
  * NVIDIA DCGM（Data Center GPU Manager）を通じた GPU の可視化と監視。
  * アプリケーションの GPU リソース需要の増減に基づいた Autoscaler による Container/Node の自動スケーリング。
  * Multi-Instance メカニズムによる GPU sharing のサポートで、リソース利用率と GPU 使用コストを最適化。

FPT Cloud は NVIDIA GPU Operator を使用して、Kubernetes（K8s）上で GPU を使用するために必要なすべてのソフトウェアコンポーネントを管理する自動化ツールを提供します。GPU Operator により、ユーザーは K8s クラスターで CPU を使用するように GPU リソースを活用できます。
ソフトウェアコンポーネントには以下が含まれます：
  * NVIDIA Drivers（CUDA、MIG、...）
  * NVIDIA Device Plugin
  * NVIDIA Container Toolkit
  * NVIDIA GPU Feature Discovery
  * NVIDIA Data Center GPU Manager（Monitoring）

K8s Operator は worker の Multi-Instance GPU（MIG）を自動設定します。MIG 設定を実現するには、worker を Nvidia がサポートするプロファイルに従ってラベル付けする必要があります。MIG 設定は K8s の 'gpu-operator' namespace 内の Configmap default-mig-parted-config に一覧表示されています。
[![](/img/migrated/67-efeaa017.png)](/img/migrated/67-efeaa017.png)
FPT Cloud は現在 Nvidia A30 GPU カードをサポートし、以下の MIG プロファイルとラベルをサポートしています：

| **No.** | **GPU A30 Profile** | **Strategy** | **インスタンス数** | **インスタンスリソース** |
| --- | --- | --- | --- | --- |
| 1 | all-1g.6gb | single | 4 | 1g.6gb |
| 2 | all-2g.12gb | single | 2 | 2g.12gb |
| 3 | all-balanced | mixed | 2 | 1g.6gb |
| 4 | all-balanced | mixed | 1 | 2g.12gb |
| 5 | none（ラベルなし） | none | 0 | 0（全体） |

例：
A30 GPU カードで、ラベル 'all-1g.6gb' の single strategy を設定できます。このラベルは、Operator が worker 上の A30 GPU を 4x MIG デバイス（1 論理 GPU リソース＝物理 GPU の ¼ に相当）と 6GB GPU RAM に分割することを意味します。この MIG 設定は worker 上のラベル付きカードすべてに適用されます。
FPT Cloud は Nvidia GPU Telemetry と kube-prometheus-stack を統合して K8s 上の GPU 使用を監視・管理するツールとして使用しています。監視ツールには collector、メトリクス保存用の time-series database、Prometheus や Grafana などの一般的なオープンソースアプリケーションによる可視化が含まれます。
Nvidia DCGM GPU Dashboard：
[![](/img/migrated/69-7bd2daa5.png)](/img/migrated/69-7bd2daa5.png)
