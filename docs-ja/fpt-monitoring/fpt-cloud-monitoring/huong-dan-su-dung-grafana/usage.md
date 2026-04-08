---
id: "usage"
title: "Grafana の使用量確認"
description: "Grafana ワークスペースで使用済みの timeseries、logs、trace の量を確認するガイド。"
sidebar_label: "使用量の確認"
sidebar_position: 19
---

# Grafana の使用量確認

使用済みの timeseries/logs/trace の量を確認するには、以下の手順を実行します。

**ステップ 1:** コンソールポータルにアクセスし、メニューから Monitoring サービスを選択します。

**ステップ 2:** 対象ワークスペースの詳細ページに移動し、Quota and Package タブを選択します。

**ステップ 3:** time series/log/trace の使用量情報を確認します。

_表示インターフェース_

[![Alt text](/img/migrated/Screenshot_46-3d3c58d2.png)](/img/migrated/Screenshot_46-3d3c58d2.png)

- **ケース 1:** ワークスペースが現在のプランで許可されているクォータを使い切っている場合、metric/logs は Grafana Dashboard に引き続き送信されなくなります。
  サービスプランをアップグレードして Monitoring の使用を継続してください。

- **ケース 2:** ワークスペースがクォータを使い切っていないにもかかわらず、metric/logs が dashboard に表示されない場合。
  サポートチームにご連絡いただければ、確認および対応いたします。
