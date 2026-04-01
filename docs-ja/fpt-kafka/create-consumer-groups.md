---
id: "create-consumer-groups"
title: "consumer groupの作成"
description: "FPT Kafkaでconsumer groupを作成する方法。"
sidebar_label: "consumer groupの作成"
sidebar_position: 17
---

# consumer groupの作成

consumer groupは、1つまたは複数のtopicからメッセージをsubscribeして処理するconsumerのコレクションです。consumerをグループ化することで負荷分散が実現し、グループ内で各メッセージが1回だけ処理されることが保証されます。

1. メニューから**Application** > **Consumer Groups**に移動し、**Create**をクリックします。
2. 必要な情報を入力します：
   - **Group Name**（必須）：consumer groupの名前
   - **Offset strategy**（必須）
   - **Topic**（必須）

   :::note
   consumer groupは複数のtopicをsubscribeできます。
   :::

   [![グループ名とtopicフィールドを含む新規consumer group作成フォーム](/img/migrated/Pic1_TaoGr-d95bddc4.png)](/img/migrated/Pic1_TaoGr-d95bddc4.png)

3. **OK**をクリックしてconsumer groupを作成します。
