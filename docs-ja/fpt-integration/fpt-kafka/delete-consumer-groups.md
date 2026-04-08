---
id: "delete-consumer-groups"
title: "consumer groupの削除"
description: "FPT Kafkaでconsumer groupを削除する方法。"
sidebar_label: "consumer groupの削除"
sidebar_position: 19
---

# consumer groupの削除

不要になったconsumer groupを削除して環境を整理します。削除を実行する前にconsumer groupが非アクティブな状態である必要があります。

:::danger
アクティブなconsumerが存在するconsumer groupは削除できません。削除前にグループ内のすべてのconsumerを停止してください。
:::

1. 削除するconsumer groupを選択し、**Remove**をクリックします。

   [![Removeボタンが表示されたconsumer groupリスト](/img/migrated/Pic1_xoaconsumer-d47fd17f.png)](/img/migrated/Pic1_xoaconsumer-d47fd17f.png)

2. 確認ダイアログで**Yes**をクリックして削除を確認します。
