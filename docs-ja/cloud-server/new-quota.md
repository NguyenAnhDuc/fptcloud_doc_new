---
id: "new-quota"
title: "PAYGによるサービスの利用"
description: "プリペイドクォータが不足した場合に、Pay As You Goでリソースの作成を継続します。"
sidebar_label: "PAYGサービス"
sidebar_position: 87
---

# PAYGによるサービスの利用

プリペイドリソースが不足した場合、PAYG（Pay As You Go）課金でリソースの作成を継続できます。

## PAYGをサポートするサービス

1. **インスタンス**：作成、クローン、リサイズ、Snapshot/テンプレートの作成。
2. **ストレージ**：作成、リサイズ、ストレージからのSnapshot作成。
3. **IP**：IPの割り当て。
4. **Load Balancer v1**（Generalのみ）。
5. **Auto Scaling**。

## 使い方

新しいリソースを作成する際にクォータが不足している場合、システムはどのリソースタイプが不足しているかを通知し、自動的にPAYG課金に切り替えます。
