---
id: "microservices-architecture-on-fke"
title: "FKE 上のマイクロサービスアーキテクチャ"
description: "FPT Cloud Managed Kubernetes Engine（FKE）上でマイクロサービスアーキテクチャを構築・運用するためのガイドを説明します。"
sidebar_label: "FKE 上のマイクロサービスアーキテクチャ"
sidebar_position: 38
---

# FKE 上のマイクロサービスアーキテクチャ

FPT Cloud Managed Kubernetes Engine（FKE）は、マイクロサービスアーキテクチャを構築・運用するための理想的なプラットフォームです。このドキュメントでは、FKE 上でマイクロサービスを効果的に設計・デプロイするためのベストプラクティスを説明します。

## マイクロサービスアーキテクチャの概要

マイクロサービスアーキテクチャは、大規模なアプリケーションを小さく独立したサービス群に分割するアプローチです。各サービスは独立してデプロイ・スケールすることができ、異なるプログラミング言語や技術スタックを使用できます。

FKE でマイクロサービスを構築する主なメリット：
- **独立したデプロイ**: 各サービスを独立してデプロイ・更新できます。
- **スケーラビリティ**: 需要に応じて個々のサービスをスケールアウト/インできます。
- **耐障害性**: 1 つのサービスの障害が他のサービスに影響を与えにくくなります。
- **技術的柔軟性**: サービスごとに最適な技術スタックを選択できます。

## FKE でのマイクロサービス構築のベストプラクティス

### サービスメッシュの活用

Istio などのサービスメッシュを使用することで、サービス間通信のトラフィック管理、セキュリティ、可観測性を向上させることができます。

### Ingress の設定

外部からのアクセスを管理するために、nginx-ingress などの Ingress Controller を使用します。[Service Type Load-Balancer](./service-type-load-balancer.md) を参照してください。

### ヘルスチェックの設定

すべてのサービスに Readiness Probe と Liveness Probe を設定して、サービスの可用性を確保します。

### 設定管理

ConfigMap と Secret を使用して設定情報を管理し、環境ごとの設定変更を容易にします。

### 監視とログ

FMON を使用して各マイクロサービスのメトリクス収集とログ集約を行い、システムの可観測性を確保します。

## 関連ドキュメント

- [ワーカープールへのアプリケーションのデプロイ](./deploy-application-in-worker-pool.md)
- [Service Type Load-Balancer](./service-type-load-balancer.md)
- [Persistent Storage](./persistent-storage.md)
- [CoreDNS 設定の調整](./configure-coredns.md)
