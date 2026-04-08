---
id: "cloud-guard"
title: "FPT Cloud Guard"
sidebar_label: "FPT Cloud Guard"
sidebar_position: 3
---

# FPT Cloud Guard

FPT Cloud Guard – Alert は、FPT Cloud 上のリソース（Cloud Server、Load Balancer、Autoscaling、Object Storage、Kubernetes、Database など）の稼働状況を完全自動で監視するサービスです。リソース使用量が設定したしきい値を超えた際にアラートを送信し、Email、Webhook、Telegram、Slack、SMS、通話、Microsoft Teams など複数のチャネルに対応しています。

FPT Cloud Guard を使用することで、専任スタッフを配置せずに最小限のコストで FPT Cloud 上のリソースを能動的に監視できます。

## アラート作成前の確認事項

- **監視メトリクスとしきい値:** リソースタイプごとに異なる技術的なパラメーターがあります。監視するメトリクスと異常を示すしきい値を事前に決めておきましょう。
- **通知方法:** 担当者が迅速に通知を受け取り対応できるよう、組織に適した通知方法を選択してください。
- **アラートシナリオ:** 具体的なケースごとに異なるアラートシナリオを設定することを推奨します（例：しきい値超過後の通知間隔、通知先の人数など）。

## リリースノート

### FPT Cloud Guard (Alert 2.0) — FPT Cloud Portal でのリソースアラート管理

FPT Cloud が Portal インターフェース上で FPT Cloud Guard を正式リリースしました。ユーザーはアラートシナリオを簡単に設定し、Email で受信者を設定できます。Cloud Guard はリソースを継続的に監視し、使用量が設定したしきい値を超えた際に通知を送信します。

**主な機能:**
- VM の RAM/CPU がしきい値を超えた際のアラート作成・カスタマイズ
- Autoscale Group への RAM/CPU アラートと Scale In/Out の自動実行
- リアルタイムのステータス確認
- アラート送信の有効化/無効化と通知方法の管理
- アラート履歴と詳細の確認

### FPT Cloud Guard (Alert 2.1) — ネットワークおよびディスクアラートの追加

新しいアラートが追加されました:
- **ネットワーク帯域幅 In/Out (Mbps):** すべての NIC の受信/送信帯域幅がしきい値を超えた際に通知
- **総ネットワーク帯域幅 (Mbps):** すべての NIC の合計帯域幅がしきい値を超えた際に通知
- **ディスク IOPS:** サーバーごとのディスク読み書き IOPS がしきい値を超えた際に通知
- **ディスク読み書き帯域幅 (MBps):** サーバーごとのディスク読み書き帯域幅がしきい値を超えた際に通知

バージョン 2.1 では、既存アラートの編集、受信者の編集・削除、アラート送信履歴の詳細確認、OpenStack および VMware 両プラットフォームへの対応も追加されました。

### FPT Cloud Guard (Alert 2.2) — マルチチャネルアラート

新しい通知チャネルが追加されました:
- **Slack**
- **Telegram**

バージョン 2.2 では、「複数の仮想マシンに一括適用」機能により、複数のサーバーに対してまとめてアラートを作成できます。
