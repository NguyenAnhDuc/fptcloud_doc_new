---
id: "quick-starts"
title: "クイックスタート"
description: "Kafkaワークスペースと基本リソースを素早く作成するためのガイド。"
sidebar_label: "クイックスタート"
sidebar_position: 3
---

# クイックスタート

このガイドでは、Kafkaサービスのセットアップ、topic・credential・ACL・consumer groupの作成を迅速に行い、メッセージの送受信を開始する方法を説明します。実行前にサービスクォータの割り当てが必要です。クォータがない場合はサポートチームにお問い合わせください。

## FPT Kafkaサービスへのサインイン

1. FPT Cloud Portalのメニューから**Integrations** > **Kafka Service**を選択します。

   [![IntegrationsメニューからKafka Serviceを選択する画面](/img/migrated/Picture1_HDNhanh_DN-ed49b5d0.png)](/img/migrated/Picture1_HDNhanh_DN-ed49b5d0.png)

2. **Create**をクリックし、**workspace name**を入力します。

   [![新しいKafkaインスタンスのワークスペース名入力画面](/img/migrated/Pic2-93777c70.png)](/img/migrated/Pic2-93777c70.png)

3. **Create**をクリックします。システムがサービスを初期化し、処理状況の通知を表示します。

作成が完了すると、**Kafka Service**管理ページに自動的にリダイレクトされます。**Kafka Service**ページに移動してアクセスしたいインスタンスの**Start**をクリックすることでも管理ページにアクセスできます。

## topicの作成

topicはKafka内のメッセージ保存単位です。並列処理能力を高めるため、各topicは複数のpartitionに分割されます。

1. メニューから**Application** > **Topic**に移動し、**Create**をクリックします。
2. 必要な情報を入力します：
   - **Name**（必須）：`[prefix].[topic name]`の形式でtopic名を入力
   - **Partitions**（必須）：partitionの数
   - **Replication Factor**（必須）
   - **Cleanup Policy**（必須）
   - **Advanced Configuration**（任意）

   [![必須フィールドを含む新規topic作成フォーム](/img/migrated/Pic2_Taotopic-67891311.png)](/img/migrated/Pic2_Taotopic-67891311.png)

3. **OK**をクリックして完了します。

:::note
topic名は**`[prefix].[topic name]`**の形式に従う必要があります。
:::

## credentialの作成

credentialは、SASL/SCRAM-SHA-256認証によるKafka接続に使用するusername/passwordのペアを提供します。

1. メニューから**Application** > **Credentials**に移動し、**Create**をクリックします。
2. 必要な情報を入力します：
   - **Username**（必須）
   - **Password**（必須）

   [![新規credential作成フォーム](/img/migrated/Pic1_Taocre-e9963007.png)](/img/migrated/Pic1_Taocre-e9963007.png)

3. **OK**をクリックしてcredentialを作成します。

:::note
システムが初期パスワードを自動生成します。必要に応じてパスワードをリセットできます。credential名は**`[prefix].[credential name]`**の形式に従う必要があります。
:::

## ACLの作成

ACLは各credentialのtopicまたはconsumer groupへのアクセスを制御し、Kafkaシステム内のデータフローを保護します。

1. メニューから**Application** > **ACLs**に移動し、**Create**をクリックします。
2. 必要な情報を入力します：
   - **Credential**（必須）：作成済みのcredentialを選択
   - **Resource Type**（必須）：TopicまたはGroup
   - **Pattern Type**（必須）：Literal（特定の1リソース）またはPrefixed（指定のprefixを持つすべてのリソース）
   - **Host**（任意）：IPアドレスによるアクセス制限（空白にするとすべてのIPを許可）
   - **Operation**（必須）：ReadまたはWrite
   - **Permission**（必須）：AllowまたはDeny

   [![権限オプションを含むACL作成フォーム](/img/migrated/Pic1_ACL-194aa4c5.png)](/img/migrated/Pic1_ACL-194aa4c5.png)

3. **OK**をクリックして完了します。

## consumer groupの作成

consumer groupは、1つまたは複数のtopicからメッセージを読み取る複数のconsumerをまとめたグループで、並列処理と自動負荷分散を実現します。

1. メニューから**Application** > **Consumer Groups**に移動し、**Create**をクリックします。
2. 必要な情報を入力します：
   - **Group Name**（必須）：consumer groupの名前
   - **Offset strategy**（必須）
   - **Topic**（必須）

   :::note
   consumer groupは複数のtopicをsubscribeできます。
   :::

   [![グループ名とtopicフィールドを含む新規consumer group作成フォーム](/img/migrated/Pic1_TaoGr-d95bddc4.png)](/img/migrated/Pic1_TaoGr-d95bddc4.png)

3. **OK**をクリックして完了します。
