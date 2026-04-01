---
id: "notes-when-using-dfke"
title: "FKE 使用時の注意事項"
description: "Dedicated FPT Kubernetes Engine（FKE）を使用する際のベストプラクティスと注意事項について説明します。"
sidebar_label: "FKE 使用時の注意事項"
sidebar_position: 29
---

# FKE 使用時の注意事項

### 1. HA Master Nodes の選択

可用性を確保するため、重要なシステムには HA Master Nodes を選択してください。Dev/Test 環境では non-HA を選択しても構いません。

### 2. Namespaces の使用

アプリケーションや環境を分離して管理しやすくするために Namespace を作成してください。システムが既定で作成した Namespace にアプリケーションをデプロイすることは避けてください。

### 3. Readiness & Liveness Probes の使用

アプリケーションの可用性を確保するために活用します。

- **Readiness Probes**: Pod がリクエストを受け付ける準備ができた状態のときのみ、リクエストがその Pod に転送されるようにします。Pod はアプリケーションの起動に時間がかかることが多く、Readiness Probes を設定することで、起動中（アプリケーションが ready でない状態）の Pod にリクエストが転送されることを防ぎます。
- **Liveness Probes**: アプリケーションを実行している Pod が Running 状態にあることを確認します。Liveness Probes が失敗した場合、Pod は再起動されます。

### 4. Resource Requests & Limits の設定

コンテナが実行に必要なリソースを確保し、許容量を超えた使用を防ぎます。Limits を設定しないと、Pod が許容量を超えたリソースを使用し、Node がクラッシュする可能性があります。

### 5. Autoscale の使用

Kubernetes HPA に基づく FKE の Autoscale 機能を使用することで、アクセス量が増加した際にアプリケーションが迅速に対応できます。使用量が少ない場合、システムは Pod/Node を自動的に最小限まで削減します。

### 6. 複数の Pod（≥2）の使用

HA を確保するため、各サービスに 2 つ以上の Pod を使用することをお勧めします。レプリカ Pod が異なる Node に配置されるように、anti-affinity を使用してください。

### 7. Persistent Volume の使用

FKE は Block Storage と File Storage をサポートしています。

- **Block Storage**: システムのデフォルト選択肢です。RWO をサポートし、Storage Policy に基づいた優れたパフォーマンスを提供します。
- **File Storage**: NFS を使用した RWX をサポートします。データベースには File Storage を使用しないでください。

### 8. バックアップ

ガイドラインに従ってクラスターのバックアップスケジュールを設定してください。PVC 上のデータバックアップ（必要な場合）はユーザーが自ら行う必要があります。VM にバックアップし、FCloud Backup & Recovery ソリューションを使用して VM バックアップを実行することができます。

### 9. モニタリング＆ロギング

FMON を使用して Kubernetes クラスターとのモニタリング＆ログ統合を行ってください。システムのアラートを設定してください。
