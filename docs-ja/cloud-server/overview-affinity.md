---
id: "overview-affinity"
title: "AffinityとAnti-Affinityの概要"
description: "Affinity、Anti-Affinity、Soft Affinity、Soft Anti-Affinityポリシーについて学びます。"
sidebar_label: "概要"
sidebar_position: 77
---

# AffinityとAnti-Affinityの概要

FPT Cloudは、物理ホスト上のインスタンス配置に関して4つのポリシーをサポートしています：

- **Affinity**：同じグループ内のインスタンスを同じホストに配置します。インスタンス間のレイテンシを削減します。
- **Anti-Affinity**：同じグループ内のインスタンスを異なるホストに配置します。高可用性を向上させます。
- **Soft Affinity**：同じホストへの配置を優先しますが、強制はしません。
- **Soft Anti-Affinity**：異なるホストへの配置を優先しますが、強制はしません。

## 次のステップ

- [新しいInstance Groupの作成](./create-instance-group.md)
