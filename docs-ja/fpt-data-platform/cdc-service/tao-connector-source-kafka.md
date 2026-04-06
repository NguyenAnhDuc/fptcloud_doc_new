---
id: "tao-connector-source-kafka"
title: "Create connector source Kafka"
sidebar_label: "Create connector source Kafka"
description: "Create connector source Kafka"
---

# Create connector source Kafka

別の Kafka クラスター（外部ソースまたは別システム）の 1 つ以上の Kafka トピックからデータを接続してインジェストします。

クラスター間のデータの**同期**および**転送**を可能にします。

**ユースケース: Type が source、Database が Kafka のコネクターを作成します。**

**前提条件:** CDC service のステータスが **Healthy** であること

コネクターを作成するには、以下の手順を実行してください:

**手順 1:** メニューバーから **Data Platform** > **Workspace Management** > Workspace name を選択します。

**手順 2:** **My services** セクションで **CDC service** を選択します。

**手順 3:** **CDC service** 詳細画面 > **Connectors** タブを選択 > **Create a connector** をクリックします。

![create-connector](images/tao-connector-source-kafka/img-001.png)

**手順 4:** コネクター情報を入力します:

  * **Name**（必須）: コネクター名

注意: コネクター名には小文字のアルファベット a〜z または数字 0〜9 を使用できます。スペースは使用できません。スペースの代わりに「-」を使用してください。

  * **Type**（必須）: source を選択

  * **Database**（必須）: Kafka を選択

![Hình ảnh](images/tao-connector-source-kafka/img-002.png)

**手順 5:** **Next** をクリックして **Properties** 画面に進みます。

2 つの選択肢があります: From FPT Database Engine、Manual configuration

  * **Manual configuration を選択した場合**

以下の情報を入力・選択します:

    * **Cluster alias name**: Kafka クラスターを表すエイリアス名。アルファベット、数字、「-」のみを含む形式で入力します。データをレプリケートする際のトピック名のプレフィックスとして使用されます。

    * **Bootstrap server endpoint:** Bootstrap サーバーエンドポイントのアドレスを入力

    * **Security protocol**: 以下のセキュリティプロトコルから 1 つ選択します:

    * **SASL_PLAINTEXT**: ユーザー名とパスワードによるシンプルな認証メカニズム

      * SASL Mechanism

      * SASL Username

      * SASL Password

    * **SASL_SSL:** ユーザー名とパスワードによる認証とデータ暗号化のための包括的なセキュリティを提供

      * SASL Mechanism1

      * SASL Username

      * SASL Password

    * **PLAINTEXT:** ネットワーク経由で送信されるデータは暗号化されません。使用は推奨しません。

    * **SSL:** インターネット経由でデータを送信する際にデータを保護するネットワークセキュリティプロトコル

![Hình ảnh](images/tao-connector-source-kafka/img-003.png)

  * **From FPT Database Engine を選択した場合**

以下の情報を入力・選択します:

  * **Database Name（必須）:** データベースを選択

    * **Cluster alias name**: Kafka クラスターを表すエイリアス名。アルファベット、数字、「-」のみを含む形式で入力します。データをレプリケートする際のトピック名のプレフィックスとして使用されます。

    * **Bootstrap server endpoint:** Bootstrap サーバーエンドポイントのアドレスを入力

    * **Security protocol**: 以下のセキュリティプロトコルから 1 つ選択します:

    * **SASL_PLAINTEXT**: ユーザー名とパスワードによるシンプルな認証メカニズム

      * SASL Mechanism

      * SASL Username

      * SASL Password

    * **SASL_SSL**: ユーザー名とパスワードによる認証とデータ暗号化のための包括的なセキュリティを提供

      * SASL Mechanism

      * SASL Username

      * SASL Password

    * **PLAINTEXT**: ネットワーク経由で送信されるデータは暗号化されません。使用は推奨しません。

    * **SSL**: インターネット経由でデータを送信する際にデータを保護するネットワークセキュリティプロトコル

![Hình ảnh](images/tao-connector-source-kafka/img-004.png)

  * **Kafka topic**

「+」ボタンをクリックしてトピック情報を取得します。

注意: 取得できるトピックは最大 100 件です。

**Test Connection** をクリックして、**Workspace** から **Kafka Cluster** への接続を確認します。

**手順 6:** **Next** をクリックして **Additional properties** 画面に進みます。

以下の情報を入力・選択します:

  * **Task:**

    * Number of tasks: コネクターのタスク数を入力します。_（この数は通常、Kafka トピックのパーティション数以下にしてください。）_
  * _**Replication**:_

  * Replication policy: トピックをレプリケートする際のポリシーを選択します。

    * _DefaultReplicationPolicy_: レプリケートされたトピック名にソースクラスターのエイリアスプレフィックスを追加します。

例: topic-name は alias-name.topic-name になります。

    * _IdentityReplicationPolicy_: 元のトピック名を保持します。

例: topic-name は topic-name のままになります。

  * Replication factor: 各 Kafka トピックパーティションのレプリカ数を入力します。

    * ブローカーのデフォルトのレプリケーションファクターを使用する場合は -1 を入力します。

![Hình ảnh](images/tao-connector-source-kafka/img-005.png)

**手順 7:** **Next** をクリックして **Review** 画面に進みます。

![Hình ảnh](images/tao-connector-source-kafka/img-006.png)

**手順 8:** 情報を確認し、**Create** をクリックしてコネクターの作成を完了します。
