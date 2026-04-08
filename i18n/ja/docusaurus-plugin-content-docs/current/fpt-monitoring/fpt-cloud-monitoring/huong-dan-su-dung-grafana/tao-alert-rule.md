---
id: "tao-alert-rule"
title: "Alert Rule の作成"
description: "Grafana でデータを監視してアラートを出すための alert rule を作成するステップバイステップのガイド。"
sidebar_label: "Alert Rule の作成"
sidebar_position: 17
---

# Alert Rule の作成

以下は alert rule を作成するための基本的なガイドです。詳細については、Grafana の公式ドキュメント **[こちら](https://grafana.com/docs/grafana/latest/alerting/alerting-rules/create-grafana-managed-rule)** もご参照ください。

## ステップ 1: Alerting へのアクセス

- Grafana にアクセスします。
- 左メニュー → Alerting → Alert rules

[![Alt text](/img/migrated/Screenshot_36-f903362f.png)](/img/migrated/Screenshot_36-f903362f.png)

- New alert rule をクリック >> alert rule 名を入力します。

[![Alt text](/img/migrated/Screenshot_37-9b5a342e.png)](/img/migrated/Screenshot_37-9b5a342e.png)

[![Alt text](/img/migrated/Screenshot_38-4ebfed07.png)](/img/migrated/Screenshot_38-4ebfed07.png)

この名前は:
- alert rule 一覧に表示されます。
- このルールから作成されたすべての alert インスタンスに対する alertname ラベルの値としても使用されます。

## ステップ 2: query と条件の定義

監視するデータを取得するための query と、alert rule が発火する前に満たす必要がある条件を定義します。

- Data source を選択します（例: Prometheus）。
- metric query を入力します。この query が alert condition の入力となります。

例: `cpu_usage_percent > 80`

[![Alt text](/img/migrated/Screenshot_40-6a7312e7.png)](/img/migrated/Screenshot_40-6a7312e7.png)

次に Condition を定義します。

## ステップ 3: alert 評価動作の設定（Alert evaluation behavior）

alert の評価頻度と alert の状態遷移方法を設定します。

- フォルダーを選択するか + New folder をクリック: alert rule を保存するフォルダーを選択します。
- evaluation group を選択するか新規作成: 同じグループ内のルールは同じ時間間隔で同時に評価されます。

新規作成の場合は、interval を指定します。

- pending period を入力: alert が発火する前に条件に違反し続ける必要がある時間です。

[![Alt text](/img/migrated/Screenshot_41-c8ff1356.png)](/img/migrated/Screenshot_41-c8ff1356.png)

## ステップ 4: Annotations の追加

Annotations を使用して、alert メッセージに追加情報を付与します。

[![Alt text](/img/migrated/Screenshot_42-e2a05998.png)](/img/migrated/Screenshot_42-e2a05998.png)

選択可能な annotation:
- Summary: インシデントの簡潔なまとめ
- Description: alert rule の説明
- Runbook URL: 対応 runbook へのリンク
- Custom annotation: 追加情報
- Link dashboard & panel: 関連する dashboard/panel へのリンク

**例:**

```
summary = High CPU usage
description = CPU usage is above 80% for more than 5 minutes
```

## ステップ 5: Labels and notifications

## ステップ 6: Alert Rule の保存

- 画面右上の Save をクリックします。

Alert rule が正常に作成されました。

作成後に alert を確認するには:
- Alerting → Alert rules にアクセスします。
- 状態を確認: Normal / Pending / Firing
