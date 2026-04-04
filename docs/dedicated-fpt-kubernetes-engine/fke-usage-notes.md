---
id: "fke-usage-notes"
title: "Fke Usage Notes"
description: "FKE サービスを使用する際の推奨事項と注意事項。"
sidebar_label: "Fke Usage Notes"
sidebar_position: "29"
---

# FKE 使用上の注意事項

### 1. HA Master Nodes の選択
可用性を確保するため、重要なシステムには HA Master Nodes を選択してください。Dev/Test 環境では non-HA を選択することもできます。

### 2. Namespace の使用
アプリケーションや環境を分離して管理しやすくするために namespace を作成してください。システムが事前に作成した namespace にはアプリケーションをデプロイしないようにしてください。

### 3. Readiness & Liveness Probe の使用
アプリケーションの可用性を確保するために使用します。

Readiness Probe は Pod がリクエストを受け入れる準備ができている場合にのみリクエストが転送されることを保証します。Pod の起動には時間がかかることが多いため、Readiness Probe を設定することで起動中の Pod（アプリケーションが未準備）にリクエストが転送されるのを防ぎます。

Liveness Probe はアプリケーションを実行している Pod が Running 状態であることを保証します。Liveness Probe が失敗した場合、Pod は再起動されます。

### 4. Resource Requests & Limits の設定
コンテナが実行に十分なリソースを確保し、許容量を超えないようにします。limits を設定しない場合、Pod が許容量を超えてリソースを使用し、Node がクラッシュする可能性があります。

### 5. Autoscale の使用
Kubernetes HPA ベースの FKE Autoscale 機能を使用すると、トラフィックが増加した際にアプリケーションが迅速に対応できます。使用量が少ない場合は、システムが自動的に Pod と Node を最小限に削減します。

### 6. 複数 Pod（2 台以上）の使用
HA を確保するために、各サービスで 2 台以上の Pod を使用することを推奨します。replica Pod が異なる Node に配置されるよう anti-affinity を使用してください。

### 7. Persistent Volume の使用
FKE は Block と File Storage をサポートしています。
- Block Storage はシステムのデフォルト選択肢で、RWO をサポートし、Storage Policy に応じた優れたパフォーマンスを提供します。
- File Storage は NFS を使用した RWX をサポートします。データベースには File Storage を使用しないでください。

### 8. バックアップ
ガイドに従って cluster のバックアップスケジュールを設定してください。PVC 上のデータのバックアップはユーザーが自ら行う必要があります。VM にバックアップしてから FCloud Backup & Recovery ソリューションで VM をバックアップすることができます。

### 9. Monitoring & Logging
FMON を使用して Kubernetes cluster の監視とログを統合してください。システムのアラートを設定してください。
