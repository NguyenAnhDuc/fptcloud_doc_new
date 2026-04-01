---
id: "node-level-auto-scaling"
title: "ノードレベルの自動スケーリング"
description: "M-FKEのCluster Autoscaleによるノードレベルの自動スケーリングについて説明します。"
sidebar_label: "ノードレベルの自動スケーリング"
sidebar_position: 26
---

# ノードレベルの自動スケーリング

M-FKE の Cluster Autoscale と同様に、Kubernetes クラスターは GPU 使用率に応じて Worker Group 内の Worker Node 数を自動的に増減させます。Worker Group 上で実行されているアプリケーションが、そのプール内のノードから十分なリソース（GPU）を受け取れない場合、その Worker Group に新しい Worker Node が追加されます。スケーリング後、ペンディング状態の Pod は新しく作成された Worker Node に割り当てられます。Cluster Autoscale は、そのノードの使用率要件（デフォルトは 50% 使用率）を満たさないノードも削除します。

詳細については [FPT Cloud Managed Kubernetes Autoscaler](../managed-fpt-kubernetes-engine/index.md) をご参照ください。

Worker Group 内のノード数は FPT Cloud Portal で定義されます（下図参照）。

[![](/img/migrated/63-1-477eea30.png)](/img/migrated/63-1-477eea30.png)
