---
id: "affinity-anti-affinity"
title: "Affinity & Anti-Affinity 概要"
description: "FPT CloudでAffinity & Anti-Affinityポリシーを使用してInstance Groupを管理します。"
sidebar_label: "概要"
sidebar_position: 1
---

# Affinity & Anti-Affinity 概要

Affinity と Anti-Affinity は、仮想マシンを物理ホストに配置する方法を制御します。パフォーマンスや高可用性を確保する必要がある場合に有効です。

Soft Affinity または Soft Anti-Affinity ポリシーを持つ Instance Group を作成できます。仮想マシンの起動時、システムは Instance Group のポリシーに基づいて配置先を決定します。

## サポートされるポリシー

| ポリシー | 説明 |
|---|---|
| **Soft Affinity** | 同じ Instance Group 内の仮想マシンを同じ物理ホストに配置することを優先します。 |
| **Soft Anti-Affinity** | 同じ Instance Group 内の仮想マシンを異なる物理ホストに配置することを優先します。 |

## 制限事項

- テナントあたり最大10個の Instance Group。
- 各 Instance Group には最大10個の Instance を含めることができます。

## ガイド

- [初期設定](/docs/ja/fpt-cloud-server/cloud-server/tutorials/manage-instance-group-affinity-and-anti-affinity/initial-setup)
- [Instance Groupの作成](/docs/ja/fpt-cloud-server/cloud-server/tutorials/manage-instance-group-affinity-and-anti-affinity/create-instance-group)
- [InstanceをInstance Groupに追加](/docs/ja/fpt-cloud-server/cloud-server/tutorials/manage-instance-group-affinity-and-anti-affinity/add-instance-instance-group)
- [Instance Groupの削除](/docs/ja/fpt-cloud-server/cloud-server/tutorials/manage-instance-group-affinity-and-anti-affinity/delete-instance-group)
