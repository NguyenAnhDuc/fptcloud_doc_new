---
id: "guide-dashboard-overview"
title: "ダッシュボードの指標の読み方 - Organization overview"
description: "Organization overviewセクションは組織の各種指標（全チームの合計データ）を表示します。"
sidebar_label: "ダッシュボードの指標の読み方 - Organization overview"
sidebar_position: 6
---

# ダッシュボードの指標の読み方 - Organization overview

Organization overviewセクションは組織の各種指標（全チームの合計データ）を表示します。
_注意_ :
  * _グラフは直近の成功したスキャンのデータを使用します。_
  * _「Refresh」を押してデータを更新してください。_

[![anhfsec](/img/migrated/nhan-refet-85599f8b.png)](/img/migrated/nhan-refet-85599f8b.png)
データがない場合は、デフォルトで「-」が表示されます。

## Total Teams（チーム総数）
説明: 現在の組織に属するチームの総数です。
[![anhfsec](/img/migrated/total-team-b5b57fe3.png)](/img/migrated/total-team-b5b57fe3.png)

## Total Issues（Issue総数）
説明: 組織内の全asset（チームおよびサブチームを含む）の直近の成功スキャンで記録されたIssue総数です。
表示形式:
  * 0〜9,999: 完全表示（例: 5、1200）
  * 10,000〜999,999: 千単位（k）で小数点1桁、切り捨て

[![anhfsec](/img/migrated/total-issue-ef7d093c.png)](/img/migrated/total-issue-ef7d093c.png)

## Total Assets（Asset総数）
説明: 組織に属する全assetの総数。以下を含みます。
  * ソースコントロールAsset（GitHub、GitLab）
  * コンテナレジストリAsset（FCR、Harbor）

表示形式: Total Issuesと同様
[![anhfsec](/img/migrated/total-asset-e730cbf3.png)](/img/migrated/total-asset-e730cbf3.png)

## Total Scan Requests（スキャンリクエスト総数）
説明: セキュリティスキャン（Code + Secret + IaC + Image）の総回数
分類:
  * UI Scan Request
  * CICD Scan Request

表示形式: Total Issuesと同様
[![anhfsec](/img/migrated/total-scan-7f7d7250.png)](/img/migrated/total-scan-7f7d7250.png)

## Total Issues by Severity（深刻度別Issue総数）
説明: 直近の成功スキャンから、Critical、High、Medium、Lowの4段階別のIssue数を集計します。
表示形式: Total Issuesと同様
[![anhfsec](/img/migrated/total-severy-b0caeec2.png)](/img/migrated/total-severy-b0caeec2.png)

## Total Issues by Scan Type（スキャン種別Issue総数）
説明: スキャン種別ごとのIssue数を集計します。
  * Code Analysis
  * Secret Scanning
  * IaC Scanning
  * Image Scanning

表示形式: Total Issuesと同様
[![anhfsec](/img/migrated/total-scan-type-dd22f5d9.png)](/img/migrated/total-scan-type-dd22f5d9.png)
