---
id: "auto-scale"
title: "Autoscale"
description: "D-FKE の Autoscale 機能の概要と使用方法。"
sidebar_label: "Autoscale"
sidebar_position: 19
---

# Autoscale

Autoscale 機能は D-FKE で Kubernetes Cluster を作成する際にデフォルトで有効になっています。

D-FKE の Autoscale 機能は Kubernetes の cluster-autoscaler ツールをベースに開発されています。以下の条件が満たされた場合に、システムが cluster の worker node 数を自動的に調整します。

- リソース不足により Pod が pending 状態になっている場合。
- cluster 内の node のリソース使用率（CPU と RAM）が一定時間（デフォルト 15 分）50% 未満で、その node 上の Pod が他の node に移動可能な場合。

参照: <https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler>

cluster-autoscaler 機能を使用するには、HPA（HorizontalPodAutoscaler）と組み合わせて使用します。

- **Scale-up:** HPA はリソース使用率が設定したしきい値を超えると Pod を自動的に追加します。新しい Pod が作成されたとき、Worker Nodes のリソースが Pod の request に足りない場合、cluster-autoscaler が自動的に Worker Nodes を追加して新規 Pod に対応します。
- **Scale-down:** HPA はリソース使用率が設定したしきい値を下回ると Pod 数を自動的に減らします。その結果 node のリソース使用量が減少し、cluster-autoscaler によって node が自動的に削除されます。

参照: <https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/>

**基本的な使用シナリオ:**

- worker node 数を固定にする: Min = Max に同じ数を設定します。
- 特定の node でのスケールダウンを防ぐ: 以下のアノテーションを追加した node は Cluster Autoscaler がスケールダウンしません。

```
"cluster-autoscaler.kubernetes.io/scale-down-disabled": "true"
```

アノテーションを追加するコマンド:

```
kubectl annotate node <node-name> cluster-autoscaler.kubernetes.io/scale-down-disabled=true
```
