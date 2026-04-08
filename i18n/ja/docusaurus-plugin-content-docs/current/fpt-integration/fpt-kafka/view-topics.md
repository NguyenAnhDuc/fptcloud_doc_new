---
id: "view-topics"
title: "topicの表示"
description: "FPT Kafkaでtopicの詳細情報を表示する方法。"
sidebar_label: "topicの表示"
sidebar_position: 6
---

# topicの表示

topicを作成すると、管理リストに表示されます。topic detailを確認することで、設定・クラスターの状態・partitionのoffset情報をチェックできます。

1. 表示したいtopicを選択し、**Detail**をクリックします。

   [![Detailボタンが強調表示されたtopicリスト画面](/img/migrated/Pic1_Viewtopic-95ccea45.png)](/img/migrated/Pic1_Viewtopic-95ccea45.png)

2. topic情報は3つのタブに表示されます：
   - **Detail**：topic作成時に入力した設定値。

     [![topicの設定フィールドを表示するDetailタブ](/img/migrated/DetailTab_Viewtopic-3897ed89.png)](/img/migrated/DetailTab_Viewtopic-3897ed89.png)

   - **Configuration**：クラスターレベルの設定情報。

     [![クラスター設定を表示するConfigurationタブ](/img/migrated/ConfigTab_View-994cff66.png)](/img/migrated/ConfigTab_View-994cff66.png)

   - **Partition**：レコード数・start offset・end offsetを含むpartitionの詳細。

     [![各partitionのoffsetとレコード数を表示するPartitionタブ](/img/migrated/PartitionTab_View-36158995.png)](/img/migrated/PartitionTab_View-36158995.png)
