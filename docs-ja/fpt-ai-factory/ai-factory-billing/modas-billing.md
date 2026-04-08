---
id: "modas-billing"
title: "MoDaS 課金"
description: "使用量（Token数/文字数）に基づいて課金されます。"
sidebar_label: "MoDaS 課金"
sidebar_position: 14
---

# MoDaS 課金

| **課金ロジック** | **最小課金単位** | **課金タイミング** |
| --- | --- | --- |
| 使用量（Token数/文字数）に基づく | 1 Token | 5分ごと |

**課金計算式：**
  * **使用 Token 数** : 入力 Token 数 + 出力 Token 数
  * **コスト** : `入力 Token 数 × 入力単価 / 1M` + `出力 Token 数 × 出力単価 / 1M`

**計算例：**

> **$0.165/1M 入力 Token**、**$0.187/1M 出力 Token** で提供される **Qwen3-32B** モデルを使用し、**13,394 入力 Token** および **127 出力 Token** を使用した場合
  * 使用 Token 数：入力 13,394 Token、出力 127 Token
  * コスト = `(13,394 × 0.165 + 127 × 0.187) / 1,000,000 = $0.0022`
