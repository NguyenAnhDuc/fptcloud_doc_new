---
id: "hpc-fixed-rental"
title: "固定レンタル期間の設定"
description: "HPC PortalでGPU Serverの固定レンタル期間（Fixed Rental）を設定してコストを削減します。"
sidebar_label: "固定レンタル期間の設定"
sidebar_position: 26
---

# 固定レンタル期間の設定

Fixed Rentalは、長期プロジェクトでGPU Serverを継続して使用する場合に、通常の時間課金と比較して大幅なコスト削減を実現します。

## 割引率

| 期間 | 節約額 |
|------|--------|
| **6 hours** | 時間課金比6%割引 |
| **Day**（1日） | 時間課金比8%割引 |
| **Week**（1週間） | 時間課金比10%割引 |
| **Month**（1ヶ月） | 時間課金比20%割引 |

:::note
Fixed Rentalはマシンの稼働時間を積算しません。システムは選択した期間中、マシンが継続して稼働していることを前提に課金します。
:::

:::tip
例：プロジェクトに8時間必要な場合。6時間のFixed Rentalを選択し、**Keep machine running** を設定して残り2時間を継続稼働させると、最もコスト効率が高くなります。
:::

## Fixed Rentalの設定

1. **Hosts** → **Fixed rental** に移動してセットアップダイアログを開きます。
2. 少なくとも1つのイメージを選択し、**Rental period** と **Number of machines** を設定して、割引額を確認の上 **Confirm** をクリックします。

## 期限切れ後のアクション（Action after expired）

**Image** → **Setting** を選択し、以下から選択します：

- **Keep the machine running**：期限切れ後もマシンが継続稼働し、時間課金で請求されます。
- **Shutdown machine**：期限が切れるとシステムが自動的にマシンをシャットダウンします。

## 更新と終了

- **更新**：**Image** → **Renewal** を選択し、初回設定と同様に設定します。
- **終了**：**Image** → **Deactivate** を選択します。

## 次のステップ

- [Snapshotバックアップ](./hpc-snapshot-backup.md)
