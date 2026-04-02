---
id: "alert"
title: "Alert"
description: "アラートを作成するには、以下の手順に従ってください。"
sidebar_label: "Alert"
sidebar_position: 12
---

# Alert

アラートを作成するには、以下の手順に従ってください。

**ステップ 1**: Home >> Alerting >> Alert rules >> **New alert rule** をクリックします。

[![Alt text](/img/migrated/Picture37-ffd11132.png)](/img/migrated/Picture37-ffd11132.png)

**ステップ 2**: アラート情報を設定します。

**例：FMON-DEMO タグ内の k8s ノードが not ready 状態のときにアラートを作成する。**

- まず、セクション 1 にアラート名を入力します。**Enter alert rule name**

[![Alt text](/img/migrated/Picture39-97d2242c.png)](/img/migrated/Picture39-97d2242c.png)

- 次に、セクション 2 の情報を設定します。**Define query and alert condition**

上記の例では、ready 状態のノード一覧を取得するクエリを入力します（テーブル A と呼びます）>> Preview

[![Alt text](/img/migrated/Picture40-2b9cb85f.png)](/img/migrated/Picture40-2b9cb85f.png)

- 次に **Add query** をクリックし、データソースとして **fci-relation-datasource** を選択 >> タグ、コンポーネントを選択してレスポンスキーを入力します。これにより、FMON-DEMO タグ内のクラスターと対応するコンポーネントが返されます（テーブル C と呼びます）。

[![Alt text](/img/migrated/Picture41-7c9af83b.png)](/img/migrated/Picture41-7c9af83b.png)

- 次に、タイプ **Reduce**、function = **Last** の式を追加して、時系列の最新値を取得します（テーブル D と呼びます）。

[![Alt text](/img/migrated/Picture42-c225abfe.png)](/img/migrated/Picture42-c225abfe.png)

- タイプ **Math** の式を追加し、テーブル D とテーブル C をマージして、テーブル C のコンポーネントにクラスター名があるメトリクスをフィルタリングします（テーブル E と呼びます）。

[![Alt text](/img/migrated/Picture43-67131a9c.png)](/img/migrated/Picture43-67131a9c.png)

- 最後に、入力を E とし、条件を **IS_BELOW 1** としたタイプ **Threshold** の式を追加します。つまり、値が 1 未満の条件を満たした場合にアラートが発報され、1 以上の場合は Normal となります。

[![Alt text](/img/migrated/Picture44-c63498f2.png)](/img/migrated/Picture44-c63498f2.png)

上記の例では、テーブル E の全メトリクスの値が 1 なので、ステータスは Normal です。

**ステップ 3**: 設定が完了したら、**Save rule** をクリックして情報を保存します。
