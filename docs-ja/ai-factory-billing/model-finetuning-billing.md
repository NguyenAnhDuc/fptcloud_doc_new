---
id: "model-finetuning-billing"
title: "Model Fine-Tuning 課金"
description: "パイプラインの使用時間に基づいて課金されます。"
sidebar_label: "Model Fine-Tuning 課金"
sidebar_position: 12
---

# Model Fine-Tuning 課金

| **課金ロジック** | **最小課金単位** | **課金タイミング** |
| --- | --- | --- |
| - パイプラインの使用時間に基づく<br/>- 未課金の残余使用量は15分単位に切り上げられます | 15分 | 使用量 ≥ 1/4 GPU時間 |

**課金計算式：**
  * **使用時間** : GPU時間（GPU-hours）で計算（15分単位に切り上げ）
  * **GPU** : 使用した GPU 数
  * **コスト** : `使用時間（時間）× GPU 数 × 料金表の単価`

**計算例：**

> **1 GPU NVIDIA H100 SXM5**（**$5.5/GPU時間**）を使用してモデル Qwen/Qwen3-32B を **8分間** トレーニングした場合
  * 使用時間：8分 → 15分に切り上げ（0.25 GPU時間）
  * GPU：1
  * コスト：`$5.5 × 1 GPU × 0.25 GPU時間 = $1.375`
