---
id: "tao-superset"
title: "Apache Supersetの作成"
sidebar_label: "Apache Supersetの作成"
description: "Apache Supersetの作成"
sidebar_position: 2
---

# Apache Supersetの作成

**Apache Superset** は、データの可視化、ダッシュボードの作成、データ分析を容易に行えるオープンソースの Business Intelligence（BI）プラットフォームです。Druid、Presto、Trino、BigQuery、ClickHouse、MySQL、PostgreSQL などの大規模データプラットフォームを使用するシステムにおいて、Tableau や Power BI の強力な代替ソリューションです。

**Apache Superset** を作成するには、以下の手順に従ってください。

**ステップ 1：** メニューバーで **Data Platform** > **Workspace Management** を選択し、**Workspace name** を選択します。

**ステップ 2：** **My services** セクションで **Create** をクリック > **New Service** ポップアップが表示されたら **Apache Superset** を選択し、**Create** をクリックします。 ![画像](images/tao-superset/img-001.jpg)

**ステップ 3：** **Apache Superset** 作成フォームで **Basic Information** を入力します。

 * **Name**（必須）：サービス名

注意：サービス名は 1〜30 文字である必要があります。英小文字 a-z、英大文字 A-Z、数字 0-9 を使用できます。

 * **Description**（任意）：説明
 * **Version**（必須）：バージョンを選択します。

![画像](images/tao-superset/img-002.png)

**ステップ 4.** **Next** をクリックして **Node configuration** 画面に進みます。

以下の情報を入力します。

 * **Storage policy**（必須）：**Storage Policy** を選択します。

 * **Type**（必須）：リソース設定を選択します。

 * **Number of nodes**（必須）：**Superset** の **HA** を有効にするためのノード数を入力します。

![画像](images/tao-superset/img-003.png)

**ステップ 5.** **Next** をクリックして **Advanced** 画面に進みます。

 * **Database**（**Apache Superset** のデータ保存用 Database 情報。**FPT Database Engine** サービスで作成した Database または他のユーザー管理 Database を使用できます。）

   * **Type**：デフォルトは PostgreSQL

   * **Host name（必須）**：Postgres サーバーのホスト名または IP

   * **Port（必須）**：接続ポート（デフォルトは 5432）

   * **Database name（必須）**：データベース名

   * **Username（必須）**：**Postgres** アクセス用のユーザー名

   * **Password（必須）**：**Postgres** アクセス用のパスワード

![画像](images/tao-superset/img-004.png)

**Database** 情報を入力した後、**Test connection** をクリックして **Workspace** から入力した **Database** への接続を確認します。

 * **Redis**（**Apache Superset** のデータ保存用 Redis 情報。**FPT Database Engine** サービスで作成した Database または他のユーザー管理 Database を使用できます。）

   * **Host（必須）**：Redis サーバーのホスト名または IP

   * **Port（必須）**：接続ポート

   * **Username（必須）**：ユーザー名

   * **Password（必須）**：パスワード

**Test connection** をクリックして **Workspace** から **Redis** への接続を確認します。

 * **Cache（必須）**：キャッシュ保存用のインデックスを選択します。

 * **Celery（必須）**：タスク処理用のインデックスを選択します。

![画像](images/tao-superset/img-005.png)

 * **Single Sign On**

   * Single Sign On を選択しない場合、Superset は **Basic 認証** で初期化されます。

   * **Single Sign On** を選択した場合：

   * **Provider：FPT ID**

以下の情報を入力します。

     * **Username**：ユーザー名

     * **Email**：FPT メールアドレス

   * **Provider：Google**

以下の情報を入力します。

     * **Client ID**：Google でクライアントを認証するための ID コード

     * **Client Secret**：Google でクライアントを認証するためのパスワード

     * **Email**：メールアドレス

   * **Provider：Keycloak**

以下の情報を入力します。

     * **Auth Provider name**：プロバイダー名

     * **Realm**：すべてのユーザー、グループ、ロール、クライアント、その他のオブジェクトが独立して管理・保護される管理スペース

     * **Auth server url**：クライアントが認証を行うための Keycloak サーバーのベース URL

     * **Client ID**：Keycloak でクライアントを認証するための ID コード

     * **Client Secret**：Keycloak でクライアントを認証するためのパスワード

     * **Username**：Keycloak 内のユーザー名

     * **Email**：Keycloak 内のメールアドレス

 * **Custom Domain**

   * **目的：** サービスへのアクセスにカスタムドメインを設定できます。

   * **Public Workspace の場合：** TLS の有効/無効を切り替えることなく、ドメインと証明書を割り当てるために使用します（HTTPS は常に利用可能）。

   * **Private Workspace の場合：** ドメインと証明書に加え、TLS/SSL を有効または無効にして HTTPS か HTTP かを選択できます。

   * **Public Workspace**

     * **Custom domain**：カスタムドメインを有効にするにはチェックを入れます。

     * **Domain**：ドメイン名を入力します（例：abc.local、jupyter.example.com）。

     * **Certificate name**：**Certificate Manager** でインポートした証明書リストから選択します。

     * **ボタン**：

     * **Manage certificate**：証明書管理画面を開きます。

     * **Validate**：ドメインに対して証明書が有効かどうかを確認します。

:::note
Public Workspace では **TLS/SSL certificate** オプションは**表示されません** — システムはデフォルトで HTTPS をサポートします。
:::

![画像](images/tao-superset/img-006.jpg)

   * **Private Workspace**

     * **Custom domain**：カスタムドメインを有効にするにはチェックを入れます。

     * **Domain**：ドメイン名を入力します。

     * **TLS/SSL certificate**：サービスの HTTPS を有効にするにはチェックを入れます。

     * **Certificate name**：証明書リストから選択します。

     * **ボタン**：

     * **Manage certificate**：証明書管理を開きます。

     * **Validate**：証明書を確認します。

:::note
**TLS/SSL certificate** のチェックを外すと、サービスは HTTP で動作し、証明書は不要です。
:::

![画像](images/tao-superset/img-007.jpg)

**ステップ 6：** **Next** をクリックして **Review & Create** 画面に進みます。

**ステップ 7.** 情報を確認し、**Create** をクリックして **Apache Superset** の初期化を完了します。

**Worker Status** が **Succeeded** かつ **Apache Superset** の **Status** が **Healthy** になれば、**Superset** の初期化は完了です（約 10 分）。
