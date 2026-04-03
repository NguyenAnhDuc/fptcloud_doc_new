---
id: "guide-issue-by-team"
title: "Issue by teamグラフの読み方"
description: "チームごとのIssue数を、深刻度（Severity）またはスキャン種別（Scan Type）で分類して分析するグラフです。"
sidebar_label: "Issue by teamグラフの読み方"
sidebar_position: 7
---

# Issue by teamグラフの読み方

チームごとのIssue数を、深刻度（Severity）またはスキャン種別（Scan Type）で分類して分析するグラフです。
_注意_ :
  * _グラフは直近の成功したスキャンのデータを使用します。_
  * _「Refresh」を押してデータを更新してください。_

## 表示モードの選択
デフォルトで2つのグラフが表示されます。
  * Issues by Severity
  * Issues by Scan Type

各グラフは積み上げ棒グラフ形式で、チームごとのIssue数を表示します。
[![anhfsec](/img/migrated/map-issue-f80ed4ef.png)](/img/migrated/map-issue-f80ed4ef.png)

## グラフ構成
| 要素 | 説明 |
| --- | --- |
| Y軸 | チーム／サブチームの一覧（Teamフィルターに基づく） |
| X軸 | Issue総数 |
| 凡例（Legend） | - Severity: Critical、High、Medium、Low<br/>- Scan Type: Code Analysis、Secret Scanning、IaC Scanning、Image Scanning |
| データ | 深刻度またはスキャン種別で階層化 |

## ニーズに応じたデータフィルタリング
凡例オプション（右下）:
  * クリックして各深刻度またはスキャン種別のデータの表示／非表示を切り替えます。
  * 例: 「Low」の選択を外すと、Medium以上のIssueのみが表示されます。

ダッシュボード上部のチームフィルターを適用すると、特定の部門に絞り込んでデータを表示できます。
