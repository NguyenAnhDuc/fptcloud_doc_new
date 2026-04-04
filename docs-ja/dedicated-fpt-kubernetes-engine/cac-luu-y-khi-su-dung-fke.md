---
id: "cac-luu-y-khi-su-dung-fke"
title: "DFKEご利用時の注意事項"
description: "Dedicated FPT Kubernetes Engineサービスご利用時の推奨事項と注意事項。"
sidebar_label: "DFKEご利用時の注意事項"
sidebar_position: "29"
---

# DFKEご利用時の注意事項

### 1. HA Master Nodesの選択
可用性を確保するため、重要なシステムにはHA Master Nodesを選択してください。Dev/Test環境ではnon-HAを選択することもできます。

### 2. Namespaceの使用
アプリケーションや環境を分離して管理しやすくするためにnamespaceを作成してください。システムが事前に作成したnamespaceにはアプリケーションをデプロイしないようにしてください。

### 3. Readiness & Liveness Probeの使用
アプリケーションの可用性を確保するために使用します。
Readiness ProbeはPodがリクエストを受け入れる準備ができている場合にのみリクエストが転送されることを保証します。Podの起動には時間がかかることが多いため、Readiness Probeを設定することで起動中のPod（アプリケーションが未準備）にリクエストが転送されるのを防ぎます。
Liveness ProbeはアプリケーションのPodがRunning状態であることを保証します。Liveness Probeが失敗した場合、Podは再起動されます。

### 4. Resource Requests & Limitsの設定
コンテナが実行に十分なリソースを確保し、許容量を超えないようにします。limitsを設定しない場合、Podが許容量を超えてリソースを使用し、Nodeがクラッシュする可能性があります。

### 5. Autoscaleの使用
Kubernetes HPAベースのFKE Autoscale機能を使用すると、トラフィックが増加した際にアプリケーションが迅速に対応できます。使用量が少ない場合は、システムが自動的にPodとNodeを最小限に削減します。

### 6. 複数Pod（2台以上）の使用
HAを確保するために、各サービスで2台以上のPodを使用することを推奨します。replica Podが異なるNodeに配置されるようanti-affinityを使用してください。

### 7. Persistent Volumeの使用
FKEはBlockとFile Storageをサポートしています。
  * Block Storageはシステムのデフォルト選択肢で、RWOをサポートし、Storage Policyに応じた優れたパフォーマンスを提供します。
  * File StorageはNFSを使用したRWXをサポートします。データベースにはFile Storageを使用しないでください。

### 8. バックアップ
ガイドに従ってclusterのバックアップスケジュールを設定してください。PVC上のデータのバックアップはユーザーが自ら行う必要があります。VMにバックアップしてからFCloud Backup & RecoveryソリューションでVMをバックアップすることができます。

### 9. Monitoring & Logging
FMONを使用してKubernetes clusterの監視とログを統合してください。システムのアラートを設定してください。
