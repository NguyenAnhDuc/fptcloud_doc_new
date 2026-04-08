---
id: "shut-down-kernel"
title: "Kernelのシャットダウン"
description: "リソースを節約するために実行中のKernelをシャットダウンする方法。"
sidebar_label: "Kernelのシャットダウン"
sidebar_position: "7"
---

# Kernelのシャットダウン

**ステップ1:** ナビゲーションバーから「**Running Kernels/Notebooks**」オプション（上から2番目のアイコン）を選択します。

[![実行中のカーネル/ノートブックナビゲーション画面](/img/migrated/Screenshot-2025-11-04-at-13.33.53-8b5ebeba.png)](/img/migrated/Screenshot-2025-11-04-at-13.33.53-8b5ebeba.png)

## 実行中のGPUカーネル一覧表

ラボ内で現在**実行中のすべてのGPUカーネル**の情報を表示します。

| フィールド | 説明 |
| --- | --- |
| **Name** | GPUカーネルの一意の識別子 |
| **Created At** | GPUカーネルが開始された日時 |
| **Action** | 利用可能なアクション: **Shut Down All** — ラボ内のすべての実行中のカーネルを終了します。終了後、カーネルは**Kernel History**セクションに表示されます。**Shut Down** — 選択したカーネルのみを終了します。終了したカーネルは**Kernel History**セクションに表示されます。 |

## カーネル履歴テーブル

**終了したすべてのGPUカーネル**の情報を表示します。

このテーブルは、使用時間の確認や**AI Factory Portal**の課金データとの照合に役立ちます。

| フィールド | 説明 |
| --- | --- |
| **Name** | GPUカーネルの一意の識別子 |
| **Created At** | GPUカーネルが開始された日時 |
| **Duration** | GPUカーネルの総実行時間 |

## 請求照合

:::note
AI Factoryの請求情報に表示されるGPU実行時間と、AIノートブックのカーネル履歴テーブルの「Duration」列との間に、わずかな差異（1〜10秒）が生じる場合があります。この小さな差異は、内部サービス間の通常の同期遅延によるものであり、想定内のものです。
:::

[![課金照合画面](/img/migrated/Screenshot-2025-11-04-at-14.12.39-862af5d2.png)](/img/migrated/Screenshot-2025-11-04-at-14.12.39-862af5d2.png)
