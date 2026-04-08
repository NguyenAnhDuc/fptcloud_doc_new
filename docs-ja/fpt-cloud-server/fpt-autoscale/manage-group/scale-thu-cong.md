---
id: "scale-thu-cong"
title: "手動スケール"
description: "FPT AutoscaleでAutoscale Groupの手動Scale in、Scale out、Resizeを実行するガイドです。"
sidebar_label: "手動スケール"
sidebar_position: 5
---

# 手動スケール

## ステップ1: Autoscaling > Autoscale Groupページに移動します。調整したいGroupの行で**Action menu**アイコンをクリックします。

[![open group action menu](/img/migrated/Screenshot-2024-10-02-023008-8d0f1521.png)](/img/migrated/Screenshot-2024-10-02-023008-8d0f1521.png)

## ケース1: Scale in

### ステップ2: **Scale in**を選択します。

[![scale in](/img/migrated/scalein-1-d604a3de.png)](/img/migrated/scalein-1-d604a3de.png)

### ステップ3: ダイアログが表示されます。パラメータを設定して**Scale in**をクリックします。

[![scale in dialog](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

- **Count**: 削除するNodeの数。

## ケース2: Scale out

### ステップ2: **Scale out**を選択します。

[![scale out](/img/migrated/scalein-cd3d34b8.png)](/img/migrated/scalein-cd3d34b8.png)

### ステップ3: ダイアログが表示されます。パラメータを設定して**Scale out**をクリックします。

[![scale out dialog](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

- **Count**: 追加するNodeの数。

## ケース3: Resize

### ステップ2: **Resize**を選択します。

[![resize](/img/migrated/scaleout-6be7c5a6.png)](/img/migrated/scaleout-6be7c5a6.png)

### ステップ3: ダイアログが表示されます。パラメータを設定して**Resize**をクリックします。

[![resize dialog](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

- **Change type**: Groupの調整方法。
- **Number**: 選択した**Change type**によって意味が異なります：
  - _Exact capacity_: 新しい容量（正の整数）を入力します。調整後、Group内のNode数がこの値になります。
  - _Change in capacity_: 追加するNode数（正の整数）または削除するNode数（負の整数）を入力します。調整後のNode数は現在の容量に**Number**の絶対値を加減した値になります。
  - _Change in percentage_: 現在の容量に基づいて追加（正の小数）または削除（負の小数）するパーセント（%）を入力します。例：現在の容量が4 Nodeで**Number**が50%の場合、2つの新しいNodeが追加され、合計6になります。
- **Min size**と**Max size**: ResizeではGroupの下限と上限を同時に調整できます。

システムは入力を検証し、有効であればResizeを実行します。成功すると、GroupのステータスはResizingからActiveに変わります。
