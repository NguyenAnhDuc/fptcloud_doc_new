---
id: "xem-thong-tin-metric"
title: "Metric 情報の確認"
description: "Grafana Dashboard でクラスターのパフォーマンス、リソース、および状態の指標を監視するガイド。"
sidebar_label: "Metric 情報の確認"
sidebar_position: 9
---

# Metric 情報の確認

ユーザーは Grafana Dashboard でクラスターのパフォーマンス、リソース、および状態の指標を直接確認できます。

## 手順

**ステップ 1:** メニューで Explore を選択します。

[![Alt text](/img/migrated/Screenshot_22-f2b7b75d.png)](/img/migrated/Screenshot_22-f2b7b75d.png)

**ステップ 2:** data source として mimir を選択します。

- metric の種類を選択します。
- 希望する label filter を選択します。

[![Alt text](/img/migrated/Screenshot_23-b0dab0df.png)](/img/migrated/Screenshot_23-b0dab0df.png)

- アイコン [![Alt text](/img/migrated/Screenshot_24-7ed16aa5.png)](/img/migrated/Screenshot_24-7ed16aa5.png) をクリックすることで、複数の label を追加できます。
- または、特定の時間範囲の metric を確認するには、時間フィルターを選択します。

[![Alt text](/img/migrated/Screenshot_25-639736f9.png)](/img/migrated/Screenshot_25-639736f9.png)

**ステップ 3:** **Run query** をクリックすると、対応する結果が表示されます。

*イメージ図*

[![Alt text](/img/migrated/Screenshot_26-0072eac5.png)](/img/migrated/Screenshot_26-0072eac5.png)
