---
id: "model-testing-test-jobs"
title: "Model Testing – Test Jobs"
description: "Model Testing – Test Jobs — Model Testing上の機能。"
sidebar_label: "Model Testing – Test Jobs"
sidebar_position: "1"
---

# Model Testing – Test Jobs

Model Testing – Test Jobs は、FPT AI Factory 上でAIモデルの品質評価と性能検証を体系的に行うためのサービスです。テストジョブを通じて、モデルの精度・信頼性・ロバスト性を本番デプロイ前に確認できます。

## 概要

AIモデルの開発において、トレーニング後の評価は非常に重要なステップです。Model Testing – Test Jobs では、カスタムデータセットを使ったバッチ評価、複数モデルの比較テスト、自動化された回帰テストなど、さまざまな評価ワークフローをサポートします。

## 主な機能

- **バッチ評価**: 大量のテストデータに対してモデルの推論精度を一括評価
- **モデル比較**: 複数のモデルバージョンを同一条件でテストして性能を比較
- **評価指標の設定**: 精度（Accuracy）、適合率・再現率（Precision/Recall）、F1スコア、AUCなど多様な指標に対応
- **自動化テスト**: スケジュール実行や CI/CD パイプラインへの統合
- **結果レポート**: テスト結果の可視化とエクスポート機能

## テストジョブの種類

| ジョブ種別 | 説明 |
|-----------|------|
| 分類テスト | 分類モデルの精度・F1スコアを評価 |
| 回帰テスト | 回帰モデルのMAE・RMSEを評価 |
| カスタムテスト | 独自の評価スクリプトを使用した柔軟なテスト |

## 始め方

FPT Cloud ポータルから「AI Factory」→「Model Testing」→「Test Jobs」に移動し、最初のテストジョブを作成してください。
