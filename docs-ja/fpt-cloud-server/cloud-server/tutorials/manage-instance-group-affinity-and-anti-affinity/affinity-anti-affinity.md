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

- [初期設定](./initial-setup.md)
- [Instance Groupの作成](./create-instance-group.md)
- [InstanceをInstance Groupに追加](./add-instance-instance-group.md)
- [Instance Groupの削除](./delete-instance-group.md)
