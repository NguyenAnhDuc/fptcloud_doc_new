---
id: "cloud-advisor-dashboard"
title: "ダッシュボード概要"
description: "Cloud Advisorダッシュボードを使用してセキュリティ、コスト、システム安定性の問題を監視・管理する方法。"
sidebar_label: "ダッシュボード概要"
sidebar_position: 3
---

# ダッシュボード概要

[![Cloud Advisorダッシュボード - アクション推奨、調査推奨、除外アイテムのあるルールを表示](/img/migrated/Dashboard-CA-1024x756-9afa85a9.png)](/img/migrated/Dashboard-CA-1024x756-9afa85a9.png)

ダッシュボードには以下が表示されます：

- **Action recommended**: 対処が必要な問題の数
- **Investigation recommended**: さらなる調査が必要な問題
- **Rules with excluded items**: 特定のリソースがチェックから除外されているルール

## カテゴリグループ

各問題はカテゴリ別に分類されます：

- **Security**: セキュリティリスクを低減し、システムの安全性を高めることを目的としています。
- **Cost Optimization**: システムパフォーマンスに影響を与えることなく、運用コストを最適化します。
- **Fault Tolerance**: システムの安定性を高め、可用性を確保します。

## 検出された問題の一覧

以下は検出された問題の例です：

**Security Groups - Specific Ports Unrestricted**: インターネット（0.0.0.0/0）に開放されたポートを持つSecurity Groupを検出します。セキュリティリスクがあります。

### 問題の詳細

各問題には以下が含まれます：

- 問題名
- データの最終更新日時
- 更新ボタン
- ダウンロードボタン: 内部報告用にルール情報と違反リソースのExcelファイルをエクスポートできます
- 問題の説明
- 現在違反中のリソース数

### ユーザー操作

以下の操作が可能です：

- 個々のアイテムを選択する
- 意図的に設定されている場合や特別な目的（テスト、ステージング）のためにアイテムを除外して、ルールが再度警告しないようにする
- 結果を更新する
