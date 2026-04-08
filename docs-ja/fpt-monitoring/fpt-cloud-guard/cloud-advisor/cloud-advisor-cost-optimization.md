---
id: "cloud-advisor-cost-optimization"
title: "コスト最適化の問題"
description: "Cloud Advisorのコスト最適化に関する問題のガイド。"
sidebar_label: "コスト最適化の問題"
sidebar_position: 4
---

# コスト最適化の問題

Cloud Advisorは以下のコスト最適化に関する問題を検出します：

## 低稼働率インスタンス

**説明**: 稼働率が低いインスタンスの一覧を表示します。

| フィールド | 説明 |
|-----------|------|
| Project | インスタンスを含むProject |
| Region | インスタンスのRegion |
| VPC | インスタンスのVPC |
| Instance name | インスタンス名 |
| Instance status | 現在のインスタンスステータス |
| Stop duration | インスタンスが停止している期間 |
| CPU utilization 14-day average | 14日間の平均CPU使用率 |
| Number of days low utilization | 低稼働率の日数 |
| Estimated monthly savings | 月間推定節約額 |

## 低稼働率ストレージディスク

**説明**: 稼働率が低いストレージディスクの一覧を表示します。

| フィールド | 説明 |
|-----------|------|
| Project | ストレージディスクを含むProject |
| Region | ストレージディスクのRegion |
| VPC | ストレージディスクのVPC |
| Storage disk name | ストレージディスク名 |
| Storage disk type | ストレージディスクの種類 |
| Storage policy | 適用されているストレージポリシー |
| Storage size | ストレージのサイズ |
| Attached | アタッチ状態 |
| Average IOPS per day | 1日あたりの平均IOPS |
| Estimated monthly savings | 月間推定節約額 |

## 停止済みインスタンス

**説明**: 30日以上停止しているインスタンスの一覧を表示します。

| フィールド | 説明 |
|-----------|------|
| Project | インスタンスを含むProject |
| Region | インスタンスのRegion |
| VPC | インスタンスのVPC |
| Instance name | インスタンス名 |
| Instance status | 現在のインスタンスステータス |
| Stop duration | インスタンスが停止している期間 |
| Size | インスタンスのサイズ |
| Estimated monthly savings | 月間推定節約額 |

## 未関連付けIPアドレス

**説明**: 稼働中のインスタンスに関連付けられていないIPアドレスの一覧を表示します。

| フィールド | 説明 |
|-----------|------|
| Project | IPを含むProject |
| Region | IPのRegion |
| VPC | IPのVPC |
| Public IP | パブリックIPアドレス |
| Estimated monthly savings | 月間推定節約額 |
