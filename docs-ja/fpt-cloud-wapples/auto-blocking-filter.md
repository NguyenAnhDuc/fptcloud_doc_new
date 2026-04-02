---
id: "auto-blocking-filter"
title: "Auto Blocking Filter"
description: "設定された「HTTP DoS / Risk Level by Rule」の条件を満たす IP をブロッキングリストに追加します"
sidebar_label: "Auto Blocking Filter"
sidebar_position: 21
---

# Auto Blocking Filter

設定された「HTTP DoS / Risk Level by Rule」の条件を満たす IP をブロッキングリストに追加します。
[![file](/img/migrated/image-1714116699139-ec997656.png)](/img/migrated/image-1714116699139-ec997656.png)

**Risk Level by Rule**: IP をブロックリストに追加するための条件フィールドを設定します。設定項目は以下のとおりです。
  * **Duration**: リスクレベルを蓄積する時間範囲
  * **Cumulative Risk Level**: Policy Settings の各リスクルールに対応する累積リスクレベル。閾値に達すると、IP を自動的にブロックして「Blocking list」に追加します
  * **Blocking Duration**: ブロックを実行する時間。時間が経過すると IP Filter およびブロックリストから自動的に削除されます

**HTTP DoS**: DoS 攻撃を防ぎ、攻撃元 IP をブラックリストに追加するための条件フィールドを設定します。設定項目は以下のとおりです。

  1. **Slow HTTP Header DoS、Slow HTTP Read DoS**:
     * **Duration**: 攻撃を記録する時間
     * **Traffic Latency**: 同一ソース IP からの遅延・引き延ばし時間
     * **No. of Attempts**: 制限内に記録された遅延・引き延ばし回数。この回数を超えると IP をブロックリストに追加します
     * **Blocking Duration**: ブロックを実行する時間
  2. **Slow HTTP POST DoS**（追加機能）:
     * **Duration(s)**: 攻撃を記録する時間
     * **Traffic Volume(bytes)**: トラフィックが設定値を下回る場合、攻撃とみなします
     * **Exclude from Auto Blocking**: 除外設定
