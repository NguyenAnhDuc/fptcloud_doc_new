---
id: "clickhouse-logs-sink-connector"
title: "ClickHouse (Logs) Sink Connector"
sidebar_label: "ClickHouse (Logs) Sink Connector"
description: "ClickHouse (Logs) Sink Connector"
---

# ClickHouse (Logs) Sink Connector

**Type が sink、Database が ClickHouse の connector を作成します**

**前提条件:** CDC service のステータスが healthy であること

## connector 作成手順:

**ステップ 1:** メニューバーから **Data Platform** を選択 > **Workspace Management** を選択 > Workspace name を選択

**ステップ 2:** **My services** セクションで **CDC service** を選択

  * 注意: CDC service には直接アクセスすることもできます。メニューバーから Data Platform を選択 > CDC service を選択 > CDC service name をクリック

**ステップ 3:** **CDC service** の詳細画面 > **Connectors** タブを選択 > **Create a connector** をクリック ![image-1](images/clickhouse-logs-sink-connector/img-001.png)

**ステップ 4:** connector 作成フォームの **Connector Information** 画面に情報を入力します:

  * **Name** (必須): connector 名

注意: connector 名には半角英小文字 a-z または数字 0-9 を使用できます。スペースは使用できません。スペースの代わりに「-」を使用してください。

  * **Type** (必須): sink を選択

  * **Database** (必須): ClickHouse(log) を選択 ![image-2](images/clickhouse-logs-sink-connector/img-002.png)

**ステップ 5:** **Next** をクリックして **Properties** 画面に進みます

以下の情報を入力します:

  * **Manual configuration** を選択した場合 — 以下を入力:

    * **Host Name** (必須): ClickHouse のホスト名または IP アドレス

    * **Port** (必須): ClickHouse サーバーポート、デフォルト: `8123`

    * **Database name** (必須): Connector がデータを sink するターゲット database

    * **Username** (必須): Connector が使用する Username

    * **Password** (必須): Connector が使用する Password

    * **Topics** (必須): Connector が consume して ClickHouse にデータを sink する topic のリスト。「,」で区切ります ![image-3](images/clickhouse-logs-sink-connector/img-003.png)

  * *_From FPT Database Engine_ を選択した場合 — 以下を入力:

    * **Database** (必須): Database を選択

    * **Host Name** (必須): ClickHouse のホスト名または IP アドレス

    * **Port** (必須): ClickHouse サーバーポート、デフォルト: `8123`

    * **Database name** (必須): Connector がデータを sink するターゲット database

    * **Username** (必須): Connector が使用する Username

    * **Password** (必須): Connector が使用する Password

    * **Topics** (必須): Connector が consume して ClickHouse にデータを sink する topic のリスト。「,」で区切ります

**Test Connection** をクリックして、Workspace から入力した Database への接続を確認します

  * **Converter**

    * **Converter key**: converter の key 値を選択

    * **Converter key schema enable**: Converter key で schema を使用するかどうかを選択

    * **Converter value**: converter の value を選択

    * **Converter value schema enable**: Converter value で schema を使用するかどうかを選択

**ステップ 6:** 画面右上の **Next** をクリックして **Additional Properties** 画面に進みます

以下の情報を入力します:

  * **Tasks max** (必須): 接続の最大タスク数

  * **Topic 1:** Connector が consume して ClickHouse にデータを sink する topic 名

  * **Table 1:** PostgreSQL からのデータ変更を監視するテーブル名

  * **Mode** (必須): メッセージを処理できない場合の Connector の動作

    * **None**: Connector は database に sink できないメッセージをスキップします

    * **All**: エラーメッセージは指定した topic に送信されます ![image-4](images/clickhouse-logs-sink-connector/img-004.png)

**ステップ 7**: **Next** をクリックして **Review** 画面に進みます ![image-5](images/clickhouse-logs-sink-connector/img-005.png)

**ステップ 8:** 情報を確認し、**Create** ボタンをクリックして connector の作成を完了します。 ![image-6](images/clickhouse-logs-sink-connector/img-006.png)
