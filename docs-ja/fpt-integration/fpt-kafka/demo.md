---
id: "demo"
title: "デモ"
description: "PythonでFPT Kafkaのメッセージ送受信を実演する実践例。"
sidebar_label: "デモ"
sidebar_position: 20
pagination_next: null
---

# デモ

この例では、PythonでFPT Kafkaに接続し、producerからメッセージを送信して、consumerでメッセージを読み取る方法を説明します。開始前に、topic・credential・適切なACLを作成しておく必要があります。その他の接続詳細はメニューの**Document**セクションを参照してください。

## Part 1：producerがtopicにメッセージを送信する

1. `producer.py`ファイルを作成します。

   [![producer.pyファイルを作成する画面](/img/migrated/demo1-ab8e9665.png)](/img/migrated/demo1-ab8e9665.png)

2. `producer.py`に以下の値を設定します：

   [![Kafka接続パラメータが記載されたproducer.py](/img/migrated/demo2-1b34840f.png)](/img/migrated/demo2-1b34840f.png)

   - **sasl_plain_username**と**sasl_plain_password**：作成したcredentialのusernameとpassword
   - **topic**：Write権限が付与された作成済みtopicの名前
   - **bootstrap.servers**：adminから割り当てられたクラスターアドレス

3. ターミナルを開き、以下を実行します：

   ```bash
   python .\producer.py
   ```

   期待される出力：

   [![producerがメッセージを正常に送信したことを確認するターミナル出力](/img/migrated/demo3-f019af0a.png)](/img/migrated/demo3-f019af0a.png)

   出力が正しければ、producerはtopicのpartitionにメッセージを正常に送信できています。

## Part 2：consumerがメッセージを読み取る

1. `consumer.py`ファイルを作成します。

   [![consumer.pyファイルを作成する画面](/img/migrated/demo4-bd2ed2a2.png)](/img/migrated/demo4-bd2ed2a2.png)

   [![consumer.pyファイルの構造](/img/migrated/demo5-7e413856.png)](/img/migrated/demo5-7e413856.png)

2. `consumer.py`に以下の値を設定します：

   [![Kafka接続パラメータとconsumer groupが記載されたconsumer.py](/img/migrated/demo6-6962ee80.png)](/img/migrated/demo6-6962ee80.png)

   - **group_name**：topicへのRead権限が付与されたconsumer groupの名前
   - **sasl_plain_username**と**sasl_plain_password**：作成したcredentialのusernameとpassword
   - **topic**：WriteとRead両方の権限が付与されたtopicの名前
   - **bootstrap.servers**：adminから割り当てられたクラスターアドレス

3. ターミナルを開き、以下を実行します：

   ```bash
   python .\consumer.py
   ```

   期待される出力：

   [![consumerがtopicからメッセージを正常に読み取ったことを確認するターミナル出力](/img/migrated/demo7-d43e6100.png)](/img/migrated/demo7-d43e6100.png)
