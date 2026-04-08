---
id: "best-practice-manual-scaling"
title: "Manual Scaling ベストプラクティス"
description: "D-FKE の手動スケールイン/スケールアウトのベストプラクティスと処理フローの詳細。"
sidebar_label: "Manual Scaling ベストプラクティス"
sidebar_position: 5
---

# Manual Scaling ベストプラクティス

D-FKE は worker node の手動スケールイン/スケールアウトをサポートしており、ユーザーが必要に応じて worker の数を手動で増減できます。

Portal コンソールでの手動スケールイン/スケールアウト手順: [こちら](../dedicated-fpt-kubernetes-engine/index.md) のユーザーガイドを参照してください。

## 手動スケールインの処理フロー詳細

**1. Pre-scale**
- cluster をスケールするための環境をセットアップします。
- 環境を確認します: cluster ステータス/ネットワークステータス。

**2. Scale in**
- すべての node を cordon します（スケジュール無効化 - 新しいアプリケーション Pod が node に入るのを防ぐ）。
- 各 node を順番に drain します（現在の node からアプリケーション Pod を削除し、他の node に移動させます。ローカルディスク、単一 Pod、disruption budget などを持つ node は削除できません。[参照](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-types-of-pods-can-prevent-ca-from-removing-a-node)）。
- すべての node が drain された後、各 node を Kubernetes cluster から削除します。

**3. Post-scale**
- すべての node が cluster から削除された後、システムが VM を回収・削除します。
- クリーンアップを行います。

## 手動スケールアウトの処理フロー詳細

**1. Pre-scale**
- cluster をスケールするための環境をセットアップします。
- 環境を確認します: cluster ステータス/ネットワークステータス。
- Kubernetes cluster に追加する node に対応する VM を作成します。
- 各 VM 上で Kubernetes を実行するための環境をセットアップします。

**2. Scale out**
- 各 node を順番に cluster に追加します。
- 新しく参加した node に対してアプリケーション Pod のスケジューリングを許可します。

**3. Post-scale**
- クリーンアップを行います。

## 手動スケール使用時の推奨事項

**スケールイン操作の場合:**
- 多数の node をスケールインする場合は、残りの node が十分なリソースを持っているか事前に調査・サイジングを行ってください。業務時間外や週末など、システムの負荷が低い時間帯に実行することを推奨します。
- 削除する node のリストが特定できる場合は、事前に cordon して新しいワークロードが削除予定の node に入らないようにしてください（node のリソース使用量のモニタリングに基づく）。
- node に大きなワークロードがまだある場合は、事前に drain しておくと、スケールインが速くなりタイムアウトを防げます。
- 1 回の手動スケールインで削除する node 数を少なくし、1 回あたり 10 node 以下にすることを推奨します。

**スケールアウト操作の場合:**
- 1 回の手動スケールアウトで追加する node 数を少なくし、1 回あたり 10 node 以下にすることを推奨します。

**処理がタイムアウトした場合:**
- retry アクションを押して処理を再実行できます。詳細は[こちら](../dedicated-fpt-kubernetes-engine/index.md)を参照してください。
