---
id: "kafka-user"
title: "Apache Kafka - Kafka ACLの管理"
description: "Kafka userはアプリケーションとサービスがSASLメカニズムを通じてKafkaクラスターに認証できるようにします。"
sidebar_label: "Apache Kafka - Kafka ACLの管理"
sidebar_position: 34
---

# Apache Kafka - Kafka ACLの管理

Kafka userはアプリケーションとサービスがSASLメカニズムを通じてKafkaクラスターに認証できるようにします。Kafka userはFPT Database Engineでクラスターレベルで管理され、通常はプロデューサー、コンシューマー、Kafka Connectによって使用されます。

**Kafka user管理**機能は**Kafkaエンジンのみに適用**され、管理者がKafka userを表示、作成、更新できます。この機能は通常、以下の目的で使用されます。

- アプリケーションのKafkaクラスターへのアクセスを制御する。
- クラウドプラットフォーム上で認証情報を安全に管理する。
- システムログを通じてユーザー操作を監視・監査する。

### 1. 新しいKafka userの作成

新しいKafka userを作成するには、以下の手順に従ってください。

#### ステップ1：Kafka user管理ページへのアクセス

FPT Cloud Consoleにログインします。「**Database Platform**」>「**Data Streaming**」を選択し > KafkaクラスターのCluster IDをクリックして詳細ページを開きます。「**Configure Params**」タブを選択 > 「**Kafka ACL**」サブタブを選択します。Kafka user管理ページが次のように表示されます。

[![](/img/migrated/view-kafka-acl-scaled-514e908e.png)](/img/migrated/view-kafka-acl-scaled-514e908e.png)

「**User List**」セクションには、クラスターで設定されたすべてのKafka userが表示されます。表示される情報：

- **Username**：Kafka principalの名前。
- **Password**：認証パスワード。セキュリティ上の理由で非表示。
- **SASL mechanism**：認証メカニズム（例：PLAIN）。

#### ステップ2：新しいKafka userの作成

Kafka user管理ページの「**User List**」セクションで、**Add user**アイコン（プラス記号）をクリックします。**Create new user**ダイアログが表示されます。

[![](/img/migrated/create-kafka-user-scaled-15c4e64f.png)](/img/migrated/create-kafka-user-scaled-15c4e64f.png)

設定情報を入力します。

- **Username**：認証目的でKafka principalとして使用されるユーザー名。最大50文字で、禁止された特殊文字（/ \ : * ? " < > | [ ]）を含めることはできません。
- **Password**：以下の要件を満たす強力なパスワードを作成します。
  - 少なくとも1つの小文字。
  - 少なくとも1つの大文字。
  - 最小12文字、最大20文字。
  - 以下を除く少なくとも1つの特殊文字：$ \ / [ ] ' " : ; + - ^ < > ( ) |`
  - 少なくとも1つの数字。
  - スペースなし。
- **SASL mechanism**：サポートされている認証メカニズムを選択します。オプション：「_PLAIN_」、「_SCRAM-SHA256_」、「_SCRAM-SHA512_」。**警告**：**SASL/PLAIN**を使用してユーザーを作成または更新すると、**Kafkaクラスターの再起動がトリガーされます**。これにより、プロデューサーとコンシューマーに**一時的なサービス中断**が発生する場合があります。

完了したら、「_Create_」をクリックしてKafka userを作成します。作成に成功したKafka userはUser listに表示され、以下に使用できます。

- Kafkaクライアントの設定。
- Kafka Connect。
- ACLポリシー（サポートされている場合）。

**ベストプラクティス：**

- アプリケーションまたはサービスごとにKafka userを作成します。
- 定期的にパスワードをローテーションします。
- ピーク時間帯のユーザー作成を避けます。
- 可能であればプロデューサーとコンシューマーのユーザーを分離します。

必要に応じて、作成したKafka userに対して以下の操作を実行できます。

- **パスワードの更新**：この機能によりKafka userのパスワードを変更できます。User Listで変更するユーザーの「**Update Password**」をクリックします。新しいパスワードを入力し「**Update**」をクリックして保存します。
- **ユーザーの削除**：この機能によりシステム管理をすっきりさせるために不要なKafka userを削除できます。User Listページで削除するユーザーの「_Delete_」をクリックします。警告ダイアログで操作を確認して完了します。
- **ACLの付与**：Kafka userにACL権限を付与できます。詳細な手順は「**2. Kafka userへの権限割り当て**」を参照してください。

### 2. Kafka userへの権限割り当て

Kafka ACL機能により、管理者はDBaaSが管理するKafkaクラスター内のトピックとコンシューマーグループへのアクセスに関してKafka userに詳細な権限を割り当てられます。

ACLは以下を確保するのに役立ちます。

- 安全なアクセス制御。
- 最小権限の原則の適用。
- アプリケーションとワークロード間の分離。

ACLはクラスターレベルで適用され、保存後すぐに有効になります。

**注意**：Kafka userにACLが割り当てられていない場合、そのユーザーはいかなるリソースへのアクセス権も持ちません。

Kafka userに権限を割り当てるには、以下の手順に従ってください。

Kafka user管理ページの「**User List**」セクションで、権限を割り当てるユーザーの「**Grant ACL**」アクションを選択します。Grant ACLダイアログが表示されます。

[![](/img/migrated/grant-acl-scaled-ee68daae.png)](/img/migrated/grant-acl-scaled-ee68daae.png)

設定情報を入力します。

- **Username**：選択されたKafka userを表示します。このフィールドは編集できません。
- **Resource Type**：権限を割り当てるKafkaリソースタイプを選択します。
  - Topic – Kafkaトピックへのアクセス権限を割り当てます。
  - Consumer group – コンシューマーグループへの権限を割り当てます。
- **Topic prefix / Group prefix**：リソースのプレフィックスを入力します。プレフィックスに一致するすべてのリソースに権限を適用します。「All」と入力すると、すべてのトピックまたはすべてのコンシューマーグループに権限を割り当てます。
- **Operations**：リソースタイプに応じて、許可する1つ以上のKafka操作を選択します。
  - リソースタイプが「**Topic**」の場合：
    - **All**：すべての操作の実行を許可します。
    - **Alter**：Kafka UIでトピックのDANGERパラメーターの編集を許可します。
    - **AlterConfigs**：Kafka UIでトピックの非DANGERパラメーターの編集を許可します。
    - **Read**：トピックのコンテンツの読み取りを許可します。
    - **Write**：トピックへのデータ書き込みを許可します。
  - リソースタイプが「**Consumer group**」の場合：
    - **Delete**：グループの削除を許可します。
    - **Describe**：グループの詳細情報の表示を許可します。
    - **Read**：グループコンテンツの読み取りを許可します。

完了したら、「**Save**」をクリックしてKafka userにACLを適用します。ACLはKafkaクラスターを再起動することなくすぐに有効になります。1人のKafka userに複数のACLを割り当てることができます。

#### ベストプラクティス

- プレフィックスによるACL権限の割り当てを優先します。プレフィックスベースのACLはシステムが拡張した際に権限を効率的に管理するのに役立ちます。
- プロデューサーとコンシューマーのACLを分離します。
- 必要でない限り全権限の付与を避けます。
- 定期的にACLリストを見直します。
