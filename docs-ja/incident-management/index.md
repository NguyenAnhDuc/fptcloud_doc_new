---
id: "incident-management"
title: "Incident Management"
description: "FPT Cloud の Incident Management サービスの概要"
sidebar_label: "Incident Management"
sidebar_position: 1
---

# Incident Management

FPT Smart Cloud は **Incident Management** を提供しています。これは、予期しないイベントに迅速に対応するためのインテリジェントなインシデント管理ツールです。Jira、webhook、通知ツールとの連携により、インシデント対応プロセスを簡素化し、必要な時間と労力を削減します。

## ドキュメント目次

### 初期設定
- [初期設定](./initial-setup.md)

### Integration の設定
- [Integration 設定の概要](./configure-integrations.md)
  - [Incoming webhook](./incoming-webhook.md)
  - [Grafana webhook](./grafana-webhook.md)
  - [Outgoing webhook](./outgoing-webhook.md)
  - [Atlassian Jira](./atlassian-jira.md)
  - [Slack](./slack.md)
  - [Telegram](./telegram.md)
  - [Microsoft Teams](./microsoft-teams.md)

### Settings の設定
- [Settings 設定の概要](./configure-incident-settings.md)
  - [Incident label](./incident-label.md)
  - [Incident severity](./incident-severity.md)
  - [Incident status](./incident-status.md)

### Incident の作成
- [Incident 作成の概要](./create-incident-overview.md)
  - [Incident を直接宣言する](./declare-incident.md)
  - [Incoming webhook 経由で Incident を作成する](./create-incident-via-webhook.md)

### Incident の管理
- [Incident 管理の概要](./manage-incidents.md)
  - [Incident の検索とフィルタリング](./filter-incidents.md)
  - [Incident 詳細の表示](./view-incident-detail.md)
  - [Incident アクティビティの記録](./post-incident-activity.md)
  - [Incident status の変更](./change-incident-status.md)
  - [Incident severity の変更](./change-incident-severity.md)
  - [アクティビティを markdown でコピー](./copy-activities-as-markdown.md)

### データの可視化
- [Incident データの可視化](./incident-data-visualization.md)
