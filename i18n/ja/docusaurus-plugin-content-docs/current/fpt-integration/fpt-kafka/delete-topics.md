---
id: "delete-topics"
title: "topicの削除"
description: "FPT Kafkaで不要なtopicを削除する方法。"
sidebar_label: "topicの削除"
sidebar_position: 8
---

# topicの削除

不要になったtopicを削除してリソースを解放します。削除後、topic内のすべてのデータは完全に失われます。

:::danger
topicを削除すると、関連するすべてのメッセージと設定が完全に削除されます。削除前に、このtopicを使用しているproducerやconsumerがいないことを確認してください。
:::

1. メニューから**Application** > **Topics**に移動します。
2. 削除するtopicを選択し、**Remove**をクリックします。

   [![Removeボタンが表示されたtopicリスト](/img/migrated/Pic1_Remove-a0d961bc.png)](/img/migrated/Pic1_Remove-a0d961bc.png)

3. **Yes**をクリックして削除を確認します。

   [![topic削除の確認ダイアログ](/img/migrated/Pic2_remove-354c9e9d.png)](/img/migrated/Pic2_remove-354c9e9d.png)
