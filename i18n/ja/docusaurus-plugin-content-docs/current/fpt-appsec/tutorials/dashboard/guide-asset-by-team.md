---
id: "guide-asset-by-team"
title: "Asset by teamグラフの読み方"
description: "システム内の各チームが管理しているasset（リポジトリ、イメージ）の数を分析するグラフです。"
sidebar_label: "Asset by teamグラフの読み方"
sidebar_position: 4
pagination_next: null
---

# Asset by teamグラフの読み方

システム内の各チームが管理しているasset（リポジトリ、イメージ）の数を分析するグラフです。
_注意_ :
  * _グラフは直近の成功したスキャンのデータを使用します。_
  * _「Refresh」を押してデータを更新してください。_

[![anhfsec](/img/migrated/map-asset-d0bb4e87.png)](/img/migrated/map-asset-d0bb4e87.png)

## グラフ構成
| 要素 | 説明 |
| --- | --- |
| グラフ種類 | グループ棒グラフ（Grouped Bar Chart） |
| X軸 | チーム／サブチーム名（asset総数の降順で左から右に並ぶ） |
| Y軸 | 連携ツール別のasset数 |
| 凡例（Legend） | 連携ツールの一覧（右下に表示） |
| グループ列 | 各チームに最大5本のサブ列を持つグループがあり、各列は1つの連携ツールに対応 |

## ニーズに応じたデータフィルタリング
**凡例オプション（右下）:**
  * クリックして各assetタイプ（GitHub、GitLab、GitLab server、FPT Container Registry、Harbor）のデータの表示／非表示を切り替えます。

ダッシュボード上部のチームフィルターを適用すると、特定の部門に絞り込んでデータを表示できます。
