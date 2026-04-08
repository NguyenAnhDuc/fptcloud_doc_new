---
id: "xem-thong-tin-logs"
title: "Logs 情報の確認"
description: "Loki data source を使用して Grafana で logs 情報を確認するガイド。"
sidebar_label: "Logs 情報の確認"
sidebar_position: 10
---

# Logs 情報の確認

**ステップ 1:** メニューで **Explore** を選択します。

[![Alt text](/img/migrated/Screenshot_22-f2b7b75d.png)](/img/migrated/Screenshot_22-f2b7b75d.png)

**ステップ 2:** data source として **loki** を選択します。

- 希望する label filter を選択します。

[![Alt text](/img/migrated/Screenshot_27-3b3a74e9.png)](/img/migrated/Screenshot_27-3b3a74e9.png)

- アイコン [![Alt text](/img/migrated/Screenshot_24-7ed16aa5.png)](/img/migrated/Screenshot_24-7ed16aa5.png) をクリックすることで、複数の label を追加できます。

- または、特定の時間範囲の log を確認するには、時間フィルターを選択します。

[![Alt text](/img/migrated/Screenshot_25-639736f9.png)](/img/migrated/Screenshot_25-639736f9.png)

**ステップ 3:** **Run query** をクリックすると、対応する log が表示されます。

*イメージ図*

[![Alt text](/img/migrated/Screenshot_28-4d1b494f.png)](/img/migrated/Screenshot_28-4d1b494f.png)
