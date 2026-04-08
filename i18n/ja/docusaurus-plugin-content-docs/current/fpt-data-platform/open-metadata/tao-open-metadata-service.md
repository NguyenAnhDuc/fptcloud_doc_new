---
id: "tao-open-metadata-service"
title: "Open Metadata service の作成"
sidebar_label: "Open Metadata service の作成"
description: "Open Metadata service の作成"
sidebar_position: 2
---

# Open Metadata service の作成

**Open Metadata** サービスを作成するには、以下の手順に従ってください。

**ステップ 1:** メニューバーで **Data Platform** > **Workspace Management** > **Workspace name** を選択します。

**ステップ 2:** **My services** セクションで **Create** をクリックし、**New service** ポップアップが表示されたら **Open Metadata** を選択し、**Create** をクリックします。

![Image](images/tao-open-metadata-service/img-001.png)

**ステップ 3:** **Open Metadata** 作成フォームで **基本情報**（Basic Information）を入力します。

  * **Orchestration service name**（必須）: Spark Job の操作をオーケストレートする Orchestration サービスを選択します。

  * **Name**（必須）: サービス名

注意: サービス名には小文字 a-z、大文字 A-Z、数字 0-9 を使用できます。スペースは使用できません — 代わりに「-」または「_」を使用してください。

  * **Description**（任意）: サービスの説明

  * **Version**（必須）: サービスのバージョン

![Image](images/tao-open-metadata-service/img-002.png)

**ステップ 4:** **Next Step** をクリックして **Nodes Configuration** 画面に進みます。

以下の情報を入力します。

  * **Storage policy**: Storage policy を選択します。

  * **Disk size**: ディスク設定サイズを選択します。

  * **Type**: フレーバーを選択します。

  * **Number of nodes**: ノード数を入力します。

:::warning
ノード数は 1 以上である必要があります。
:::

オートスケーリングを有効にするには **Enable auto scaling** にチェックを入れ、スケール後のノード数を入力します。

:::warning
スケール後のノード数は **Number of nodes** より大きくなければなりません。
:::

![Image](images/tao-open-metadata-service/img-003.png)

**ステップ 5:** **Next** をクリックして **Advanced** 画面に進みます。

  * **Database**（Data governance データを保存するためのデータベース情報 — **FPT Database Engine** サービスで作成した Database または他の **Database** を使用できます）

**type** が **PostgreSQL** の場合:

    * **Select Database**（必須）: データベースを選択します。

    * **Host name**（必須）: Postgres サーバーのホスト名または IP アドレス

    * **Port**（必須）: Postgres サーバーのポート（デフォルト: 5432）

    * **Database**（必須）: データベース名

    * **Username**（必須）: データベースにアクセスするアカウント名

    * **Password**（必須）: データベースにアクセスするパスワード

**Manual configuration** を選択した場合:

    * **Host name**（必須）: Postgres サーバーのホスト名または IP アドレス

    * **Port**（必須）: Postgres サーバーのポート（デフォルト: 5432）

    * **Database**（必須）: データベース名

    * **Username**（必須）: データベースにアクセスするユーザー名

    * **Password**（必須）: データベースにアクセスするパスワード

すべての **Database** 情報を入力したら、**Test connection** をクリックして **Workspace** から設定した **Database** への接続を確認します。

  * **Search Engine Database**

    * **Type（必須）**: Opensearch または Elasticsearch

    * **Database（必須）**: データベース名

    * **Protocol（必須）**: http または https を選択

    * **Host name（必須）**: アクセスアドレス

    * **Port（必須）**: 接続ポート

    * **Username（必須）**: アカウント名

    * **Password（必須）**: パスワード

    * **Index（必須）**: インデックス

**Test connection** をクリックして、**Workspace** から **Search Engine Database** への接続を確認します。

![Alt text](images/tao-open-metadata-service/img-004.png)

  * **Single Sign On**

    * Single Sign On が無効の場合、サービスは **Basic 認証**で初期化されます。

    * **Single Sign On** が有効の場合:

    * **Provider: FPT ID** — 以下の情報を入力します。

      * **Email**: FPT メールアドレス
    * **Provider: Google** — 以下の情報を入力します。

      * **Client ID**: Google でクライアントを認証するための ID コード

      * **Client Secret**: Google でクライアントを認証するためのパスワード

      * **Email**: メールアドレス

    * **Provider: Keycloak** — 以下の情報を入力します。

      * **Auth Provider name**: プロバイダー名

      * **Realm**: すべてのユーザー、グループ、ロール、クライアント、その他のオブジェクトが独立して管理・保護される管理スペース

      * **Auth server url**: クライアントが認証を行うために使用する Keycloak サーバーのベース URL

      * **Client ID**: Keycloak でクライアントを認証するための ID コード

      * **Client Secret**: Keycloak でクライアントを認証するためのパスワード

      * **Username**: Keycloak のユーザー名

      * **Email**: Keycloak のメールアドレス

  * **Custom Domain:**

    * **Domain（必須）:** 初期化後の Event Gateway サービスへの接続アドレス

      * a-z、A-Z、0-9、ハイフン（-）、ドット（.）を含む；最大 100 文字

      * ドメイン名はハイフン（-）またはドット（.）で開始・終了してはいけません。

      * トップレベルは最小 2 文字、最大 6 文字

      * 例: domain-name.com

    * **CA bundle（必須）:** PEM 形式の CA 証明書チェーン

      * -----BEGIN CERTIFICATE----- で始まり、PEM 標準に従って終わります。
    * **Private key（必須）:** PEM 形式の秘密鍵

      * -----BEGIN PRIVATE KEY----- で始まり、PEM 標準に従って終わります。

![Alt text](images/tao-open-metadata-service/img-005.png)

  * **Custom Domain**

    * **目的:** サービスにアクセスするためのカスタムドメインを設定できます。

      * **Public Workspace の場合:** TLS の有効化/無効化を必要とせず、ドメインと証明書を割り当てるために使用します（HTTPS は常に利用可能）。

      * **Private Workspace の場合:** ドメインと証明書に加えて、TLS/SSL を有効化または無効化して HTTPS または HTTP を選択できます。

    * **Public Workspace**

      * **Custom domain**: カスタムドメインを有効にするにはチェックを入れます。

      * **Domain**: ドメイン名を入力します（例: abc.local、jupyter.example.com）。

      * **Certificate name**: **Certificate Manager** でインポートされた証明書の一覧から選択します。

      * **ボタン**:

      * **Manage certificate**: 証明書管理画面を開きます。

      * **Validate**: ドメインに対して証明書が有効かどうかを確認します。

      * 
:::note
Public Workspace では、**TLS/SSL certificate** オプションは**表示されません** — システムはデフォルトで HTTPS をサポートしています。
:::

![Image](images/tao-open-metadata-service/img-006.jpg)

    * **Private Workspace**

      * **Custom domain**: カスタムドメインを有効にするにはチェックを入れます。

      * **Domain**: ドメイン名を入力します。

      * **TLS/SSL certificate**: サービスで HTTPS を有効にするにはチェックを入れます。

      * **Certificate name**: 証明書一覧から選択します。

      * **ボタン**:

      * **Manage certificate**: 証明書管理画面を開きます。

      * **Validate**: 証明書を確認します。

      * 
:::note
**TLS/SSL certificate** のチェックを外した場合、サービスは HTTP で動作し、証明書は不要です。
:::

![Image](images/tao-open-metadata-service/img-007.jpg)

**ステップ 6:** **Next** をクリックして **Review & create** 画面に進みます。

![Alt text](images/tao-open-metadata-service/img-008.png)

**ステップ 7.** 入力したすべての情報を確認し、**Create** をクリックして **Open Metadata** の初期化を完了します。

**Worker Status** が **Succeeded** になり、**Open Metadata** の **Status** が **Healthy** になったら初期化完了です（約 10 分）。
