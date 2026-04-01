---
id: "create-topics"
title: "topicの作成"
description: "FPT Kafkaで新しいtopicを作成する方法。"
sidebar_label: "topicの作成"
sidebar_position: 5
---

# topicの作成

topicはKafkaにおけるproducerとconsumer間のメッセージチャネルを定義します。データの送受信を開始する前にtopicを作成する必要があります。

1. メニューから**Application** > **Topic**に移動し、**Create**をクリックします。
2. 必要な情報を入力します：
   - **Name**（必須）：topic名
   - **Partitions**（必須）：topicのpartition数
   - **Replication Factor**（必須）
   - **Cleanup Policy**（必須）
   - **Advanced Configuration**（任意）

   [![名前・partition数・レプリケーション係数などの必須フィールドを含むtopic作成フォーム](/img/migrated/Pic2_Taotopic-67891311.png)](/img/migrated/Pic2_Taotopic-67891311.png)

3. **OK**をクリックしてtopicを作成します。

:::note
topic名は**`[prefix].[topic name]`**の形式に従う必要があります。
:::
