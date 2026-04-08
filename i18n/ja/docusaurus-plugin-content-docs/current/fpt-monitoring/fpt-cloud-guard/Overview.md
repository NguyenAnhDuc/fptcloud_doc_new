---
id: "Overview"
title: "概要"
sidebar_label: "概要"
sidebar_position: 1
---

# FPT Cloud Guard 概要

FPT Cloud Guard は、クラウドリソースに対する自動マルチチャネルアラートを提供する FPT Cloud のセキュリティ・監視サービスです。

## 主な機能

- **リソースアラート:** Virtual Machine、Load Balancer、Object Storage、VPN site-to-site などを監視します。CPU 使用率、RAM、ネットワーク帯域幅、ディスク IOPS などのメトリクスが設定したしきい値を超えた際にアラートを受信できます。
- **アクティビティアラート:** リソースに対して特定の操作（作成、削除、更新など）が実行された際に通知を受け取ります。
- **脅威アラート:** 高頻度スキャン、マルウェア感染、DDoS 攻撃の可能性などのセキュリティ脅威を検出します。
- **マルチチャネル通知:** Email、Telegram、Slack、Microsoft Teams、Webhook、SMS、通話でアラートを配信します。
- **受信者管理:** VPC または Tenant レベルでアラート受信者を作成・管理します。

## 仕組み

1. メトリクスタイプ、しきい値、条件、通知受信者を設定してアラートを作成します。
2. FPT Cloud Guard は設定した間隔でメトリクスをしきい値と比較し続けます。
3. しきい値を超えた場合（または正常に戻った場合）、設定されたすべての受信者に自動的に通知を送信します。

## はじめる

最初のアラートを作成する前に、[初期設定](/ja/docs/fpt-monitoring/fpt-cloud-guard/Initial-Setup) を参照して FPT Cloud アカウントを作成し、FPT Portal にログインしてください。
