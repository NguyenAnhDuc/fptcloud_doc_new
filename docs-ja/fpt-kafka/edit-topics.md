---
id: "edit-topics"
title: "topicの編集"
description: "FPT KafkaでpartitionをAddしたりrecordをEmptyする方法。"
sidebar_label: "topicの編集"
sidebar_position: 7
---

# topicの編集

partitionを追加してtopicの処理能力を拡張したり、特定のpartitionのrecordを削除してストレージを解放したりできます。どちらの操作もtopic detailビューの**Partition**タブから実行します。

## topicへのpartitionの追加

1. 変更したいtopicを選択し、**Detail**をクリックします。
2. **Partition**タブに切り替え、**Add**をクリックしてから**Yes, I understand**をクリックします。

   [![topicへのpartition追加前の確認ダイアログ](/img/migrated/Picture1_AddPartition-8e955e66.png)](/img/migrated/Picture1_AddPartition-8e955e66.png)

3. 追加するpartitionの数を入力します。

   [![追加するpartition数の入力フィールド](/img/migrated/Picture2_AddParrtition-81ff326d.png)](/img/migrated/Picture2_AddParrtition-81ff326d.png)

4. **OK**をクリックして完了します。

## partitionのrecordを削除（Empty）

**Empty**機能は、topic構造に影響を与えずに選択したpartitionのすべてのrecordを削除します。

1. 変更したいtopicを選択し、**Detail**をクリックします。
2. **Partition**タブに切り替え、削除するpartitionを選択してから**Empty**をクリックします。

   [![partitionが選択されEmptyボタンが表示されたPartitionタブ](/img/migrated/Pic1_Empty-2a9bbebb.png)](/img/migrated/Pic1_Empty-2a9bbebb.png)

3. 確認ダイアログで**Yes**をクリックします。

この操作後、選択したpartitionのrecord数は0になります。

## topicの全recordを削除

topic内のすべてのpartitionのrecordを一度に削除するには、topicを選択して直接**Empty**をクリックします。

[![すべてのrecordを削除するEmptyボタンが表示されたtopicリスト](/img/migrated/Pic2_Empty-33bdb6cb.png)](/img/migrated/Pic2_Empty-33bdb6cb.png)

:::warning
この操作はtopicのすべてのpartitionにわたるrecordを完全に削除します。取り消しはできません。
:::
