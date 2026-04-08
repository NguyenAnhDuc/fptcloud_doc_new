---
id: "why-you-should-use-gpu-in-k8s"
title: "Kubernetes で GPU を使用する理由"
description: "Kubernetes は GPU をサポートしており、データサイエンスや machine learning などの workload 高速化に GPU リソースを活用できます。"
sidebar_label: "Kubernetes で GPU を使用する理由"
sidebar_position: "33"
draft: true
---

# Kubernetes で GPU を使用する理由

Kubernetes は現在 GPU をサポートしており、データサイエンス、machine learning、特に deep learning などの workload を高速化するための GPU リソースの設定と活用が容易になっています。Kubernetes は GPU をリソースタイプとして提供し、デバイスプラグインにより Pod が GPU などの特殊ハードウェア機能にアクセスし、スケジュール可能なリソースとして利用できます。GPU は K8s のすべての利点を継承します：
  * **コンテナ化:** コンテナは軽量で、完全な OS を必要とせず、共有 OS カーネルで動作するため、従来の仮想マシンよりも小さく、高速で、ポータブルです。
  * **マイクロサービス:** マイクロサービスアーキテクチャを使用するアプリケーションに適しており、Kubernetes は workload リソースの運用を調整・自動化します。ほとんどの ML プロジェクトは Python や R などで記述されており、アプリケーションは異なるプログラミング言語で記述できます。この場合、コンテナベースのモデルが重要な役割を果たし、開発者が異なる言語の独立したテストを実行できます。
  * **オートスケーリング:** 柔軟な自動スケーリングは Kubernetes の重要かつ頻繁に言及される機能です。Kubernetes 上のアプリケーションには 3 つの自動スケーリング機能があります：Horizontal Pod Autoscaler（HPA）はリソース使用量に応じて利用可能な pod 数を自動増減し、Vertical Pod Autoscaler（VPA）は既存の pod の CPU とメモリを自動調整し、Cluster Autoscaler は pod がリソース不足で起動できない場合に worker node 数を自動拡張します。
  * **自動デプロイ:** Kubernetes は CI/CD と組み合わせた自動デプロイソリューションを提供します。環境へのアプリケーションモデルのデプロイが非常に簡単になります。

AI アプリケーションやサービスの増加に伴い、Kubernetes 上での GPU 使用需要が高まっています。NVIDIA はコンテナ環境での GPU 使用を最適化するための独自ライブラリとソフトウェアを構築しています。NVIDIA GPU と Kubernetes を組み合わせることで、GPU コンテナの自動デプロイ、メンテナンス、スケジューリング、および worker node 上での運用による seamless なスケーリングが可能になります。
