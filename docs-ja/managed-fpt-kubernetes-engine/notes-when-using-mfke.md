---
id: "cac-luu-y-khi-su-dung-m-fke"
title: "M-FKE 使用上の注意事項"
description: "Managed FPT Kubernetes Engine（M-FKE）を使用する際の重要な注意事項を説明します。"
sidebar_label: "M-FKE 使用上の注意事項"
sidebar_position: 36
---

# M-FKE 使用上の注意事項

## Namespace の使用

アプリケーションや環境を分割して管理しやすくするために namespace を作成します。システムがあらかじめ作成した namespace にアプリケーションをデプロイしないようにしてください。

## ワーカーグループの使用

K8s クラスターを作成する際、システムは coredns、cni-controller、metrics-server などのシステムコンポーネントを含む最低 1 つの worker group（base）を必要とします。高い HA が要求される本番環境では、base グループに最低 3 つの worker を設定し、アプリケーション用に別の worker group を使用することを推奨します。

## Readiness & Liveness Probes の使用

アプリケーションの可用性を確保するために役立ちます。

- **Readiness Probes** は、pod がリクエストを受け入れる準備ができている場合にのみリクエストが転送されることを保証します。Pod はアプリケーションの起動に時間がかかることが多いため、Readiness Probes を設定することで、起動中（アプリケーションがまだ ready でない状態）の Pod にリクエストが転送されるのを防ぎます。
- **Liveness Probes** は、アプリケーションを実行している Pod が Running 状態であることを確認します。Liveness Probes が失敗した場合、pod が再起動されます。

## Resource Requests & Limits の設定

コンテナが実行に必要なリソースを確保し、許可されたリソース量を超えて使用しないようにします。Limits を設定しない場合、pod が許可されたリソース以上を使用して Node がクラッシュする可能性があります。

## Autoscale の使用

Kubernetes HPA に基づく FKE の Autoscale 機能を使用すると、アクセス量が増加した際にアプリケーションが迅速に対応できます。使用量が少ない場合、システムは Pod/Node を自動的に最小限に削減します。

## 複数の Pod（2 つ以上）の使用

HA を確保するために、各サービスに 2 つ以上の Pod を使用することを推奨します。replica pod が異なる Node 上に配置されるように anti-affinity を使用します。

## Persistent Volume の使用

M-FKE は Block Storage をサポートしています。Block Storage はシステムのデフォルトの選択肢で、RWO をサポートし、Storage Policy に応じた優れたパフォーマンスを発揮します。

## バックアップ

ユーザーは PVC 上のデータのバックアップ（必要な場合）を自分で行う必要があります。VM にバックアップしてから、FCloud Backup & Recovery ソリューションを使用して VM のバックアップを実行できます。

## Monitoring & Logging

FMON を使用して、Kubernetes クラスターと monitor & log を連携します。システムのアラートを設定してください。
