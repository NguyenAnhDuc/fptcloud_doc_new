---
id: "Migration-cho-SQLServer"
title: "SQL Serverのマイグレーション"
description: "このガイドでは、SSMSを使用したBACPACエクスポート/インポート方法によるSQL Serverデータベースのマイグレーション手順を説明します。"
sidebar_label: "SQL Serverのマイグレーション"
sidebar_position: 46
---

# SQL Serverのマイグレーション

**1. SSMSツールを使用したData Tier Applicationのエクスポート**

SQLインスタンスに接続し、オブジェクトエクスプローラーでデータベースを展開します。SSMS内のデータベースを右クリックすると、以下のようにdata-tier applicationのオプションが表示されます。

[![](/img/migrated/1_Export_1-d4365f71.jpg)](/img/migrated/1_Export_1-d4365f71.jpg)

移行元のSQL Databaseを右クリックし、**Export Data-tier application**をクリックします。ウィザードの概要ページが表示され、このウィザードの概要と手順が説明されます。

[![](/img/migrated/1_Export_2-d3f52e18.jpg)](/img/migrated/1_Export_2-d3f52e18.jpg)

**Next**をクリックします。

[![](/img/migrated/1_Export_3-7490f5a7.jpg)](/img/migrated/1_Export_3-7490f5a7.jpg)

以下のように、ローカルディスクのディレクトリを使用します。

[![](/img/migrated/1_Export_4-8c6e3dca.jpg)](/img/migrated/1_Export_4-8c6e3dca.jpg)

デフォルトでは、データベース内のすべてのスキーマとテーブル（データ含む）が抽出されます。詳細ページでオブジェクトをフィルタリングすることも可能です — このページの詳細タブでデータベースのスキーマやテーブルをすべて選択します。詳細タブをクリックしてオブジェクトを確認します。オブジェクトはdboなどのスキーマ別にグループ化されています。

[![](/img/migrated/1_Export_5-63599b2c.jpg)](/img/migrated/1_Export_5-63599b2c.jpg)

BACPACエクスポートではオブジェクトフィルタリングを使用しません。データベース内のすべてのテーブルのエクスポートが作成されます。**Next**をクリックして設定を確認します。

[![](/img/migrated/1_Export_6-836722b9.jpg)](/img/migrated/1_Export_6-836722b9.jpg)

**Finish**をクリックすると、データベースのエクスポートが開始されます。各ステップの成功メッセージが表示されます。

[![](/img/migrated/1_Export_7-3d69fcc1.jpg)](/img/migrated/1_Export_7-3d69fcc1.jpg)

ディレクトリを参照して、BACPAC拡張子のファイルが存在することを確認できます。

[![](/img/migrated/1_Export_8-64c67507.jpg)](/img/migrated/1_Export_8-64c67507.jpg)

**2. SSMS Import Data-tier Applicationウィザードを使用したBACPACファイルのインポート**

このBACPACファイルを、オンプレミスまたはAzure SQL Databaseの移行先SQLインスタンスにコピーできます。接続済みの移行先インスタンスを右クリックし、**Import Data-tier applications**ウィザードを起動します。

[![](/img/migrated/2_Import_1-9edba262.jpg)](/img/migrated/2_Import_1-9edba262.jpg)

**Next**をクリックします。

[![](/img/migrated/2_Import_2-83efdecd.jpg)](/img/migrated/2_Import_2-83efdecd.jpg)

次のページでは、新しいデータベースの設定を指定します。BACPACパッケージのインポートには既存のSQL Databaseを使用できません。

また、新しいデータベースのデータファイルとログファイルの入力が必要です。デフォルトでは、接続されているSQLインスタンスのデフォルトのデータファイルとログファイルの場所が表示されます。要件に応じて変更できます。

[![](/img/migrated/2_Import_3-e974b6e3.jpg)](/img/migrated/2_Import_3-e974b6e3.jpg)

新しいデータベース名を変更します。この例では、SQL Database名としてAdventureWorksDW_BACPACを指定します。**Next**をクリックします。

[![](/img/migrated/2_Import_4-737faea7.jpg)](/img/migrated/2_Import_4-737faea7.jpg)

次のページは設定内容の概要ページです。続行前に必ず確認することをお勧めします。戻って必要な変更を加えることも可能です。

[![](/img/migrated/2_Import_5-1775aa97.jpg)](/img/migrated/2_Import_5-1775aa97.jpg)

**Finish**をクリックすると、以下の手順が実行されます。

- 新しいデータベースを作成する
- スキーマとデータを新しいデータベースにインポートする
- インデックスを無効にする
- テーブルにデータを挿入する
- インデックスを有効にする

[![](/img/migrated/2_Import_6-044eccdb.jpg)](/img/migrated/2_Import_6-044eccdb.jpg)

[![](/img/migrated/2_Import_7-7ba3e502.jpg)](/img/migrated/2_Import_7-7ba3e502.jpg)

オブジェクトエクスプローラーを更新すると、新しく復元されたデータベースが表示されます。
