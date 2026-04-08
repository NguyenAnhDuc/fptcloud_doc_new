---
id: "tong-quan-dich-vu-GPU"
title: "Kubernetes FPT Cloud上のGPUサービス概要"
description: "FPT CloudはNVIDIA GPUを使用したKubernetesを提供しており、以下の主要機能を備えています："
sidebar_label: "Kubernetes FPT Cloud上のGPUサービス概要"
sidebar_position: 1
---

# Kubernetes FPT Cloud上のGPUサービス概要

FPT CloudはNVIDIA GPUを使用したKubernetesを提供しており、以下の主要機能を備えています：
  * Worker Groupごとに適用できる、複数のGPUタイプとオプションのGPUメモリによる柔軟なGPU設定。
  * NVIDIA OperatorによるKubernetes内のGPUリソースの自動管理と割り当て。
  * NVIDIA DCGMによるGPUの可視化と監視。
  * アプリケーションのGPUリソース使用量が増減した際に、AutoscalerによってContainer/Nodeを自動でスケールアップ/ダウン。
  * Multi-Instanceメカニズムによるシェアリングをサポートし、GPUリソースの利用効率とコストを最適化。

FPT CloudはNVIDIA GPU Operatorを使用しており、KubernetesでGPUを使用するために必要なすべてのソフトウェアコンポーネントを自動管理するツールを提供します。GPU Operatorにより、ユーザーはKubernetesクラスター内でGPUリソースをCPUリソースと同様に使用できます。
Operatorのコンポーネントは以下のとおりです：
  * NVIDIA Drivers（CUDA、MIG など）
  * NVIDIA Device Plugin
  * NVIDIA Container Toolkit
  * NVIDIA GPU Feature Discovery
  * NVIDIA Data Center GPU Manager（Monitoring）

**Hanoi**および**Saigon**リージョンでは、FPT CloudはNvidia A30 GPUを使用したKubernetesを以下のMIGプロファイルでサポートしています：
| **No.** | **GPU A30 Profile** | **Strategy** | **Number instance** | **Instance resource** |
| --- | --- | --- | --- | --- |
| 1 | all-1g.6gb | single | 4 | 1g.6gb |
| 2 | all-2g.12gb | single | 2 | 2g.12gb |
| 3 | all-balanced | mixed | 2 | 1g.6gb |
| 4 |  |  | 1 | 2g.12gb |
| 5 | none（ラベルなし） | none | 0 | 0（全体） |

Hanoi 2およびJapanリージョンでは、FPT CloudはNvidia H100およびNvidia H200 GPUを使用したKubernetesをサポートしています：
| **No.** | **GPU H100 SXM5** | **Strategy** | **Number instance** | **Instance resource** |
| --- | --- | --- | --- | --- |
| 1 | all-1g.10gb | single | 7 | 1g.10gb |
| 2 | all-1g.20gb | single | 4 | 1g.20gb |
| 3 | all-2g.20gb | single | 3 | 2g.20gb |
| 4 | all-3g.40gb | single | 2 | 3g.40gb |
| 5 | all-4g.40gb | single | 1 | 4g.40gb |
| 6 | all-7g.80gb | single | 1 | 7g.80gb |
| 7 | all-balanced | mixed | 2 / 1 / 1 | 1g.10gb / 2g.20gb / 3g.40gb |
| 8 | none（ラベルなし） | none | 0 | 0（全体） |

| **No.** | **GPU H200 SXM5** | **Strategy** | **Number instance** | **Instance resource** |
| --- | --- | --- | --- | --- |
| 1 | all-1g.18gb | single | 7 | 1g.18gb |
| 2 | all-1g.35gb | single | 4 | 1g.35gb |
| 3 | all-2g.25gb | single | 3 | 2g.25gb |
| 4 | all-3g.71gb | single | 2 | 3g.71gb |
| 5 | all-4g.71gb | single | 1 | 4g.71gb |
| 6 | all-7g.141gb | single | 1 | 7g.141gb |
| 7 | all-balanced | mixed | 2 / 1 / 1 | 1g.18gb / 2g.35gb / 3g.71gb |
| 8 | none（ラベルなし） | none | 0 | 0（全体） |

**_例：_**
strategyにsingle: all-1g.6gbを選択した場合、worker上のA30 GPUカードは4つのMIGデバイスに分割され、各デバイスは物理GPUの1/4に相当する論理GPUリソースと6GB GPU RAMを持ちます。
strategyにsingle: all-1g.10gbを選択した場合、worker上のH100 GPUカードは7つのMIGデバイスに分割され、各デバイスは物理GPUの1/7に相当する論理GPUリソースと10GB GPU RAMを持ちます。

**_注意：_**
MIG設定はworkerに搭載されたすべてのGPUカードに適用されます。同一クラスター内のすべてのworker groupのMIG strategyは同じ種類（single/mixed/none）である必要があります。

このガイドでは、Kubernetes FPT Cloud上のGPUサービスの主要機能について説明します：
  1. GPUを使用するKubernetesクラスターのインストールと初期化
  2. GPUを使用するworker groupの追加
  3. GPUを使用するworker groupの変更
  4. GPUを使用するアプリケーションのデプロイ
  5. GPU Telemetryの使用方法
  6. ドライバーのインストールと使用方法
  7. GPU Custom Metricを使用したAuto Scaleの設定
  8. KEDAとPrometheusを使用したAuto Scaleの設定
  9. GPUシェアリングモードの使用方法
