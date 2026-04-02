---
id: "tao-event-gateway"
title: "Event Gatewayの作成"
description: "Event Gatewayを作成するには、以下の手順に従ってください。"
sidebar_label: "Event Gatewayの作成"
sidebar_position: 3
---

# Event Gatewayの作成

**Event Gateway** を作成するには、以下の手順に従ってください。

**ステップ1:** メニューバーで **Integration** > **Event Gateway** を選択します。

**ステップ2:** **Create a Event Gateway** をクリック > **Choose Event Gateway Mode** ポップアップが表示されます > **REST Events to Kafka** を選択 > **Continue** をクリックします。

**ステップ3:** **Event Gateway** 作成フォームで、**Basic Information** セクションに情報を入力します。

- **Name**（必須）：Event Gatewayの名前。

  注意：Event Gateway名には、小文字a～z、大文字A～Z、または数字0～9を使用できます。スペースは使用できません。スペースの代わりにハイフン「-」またはアンダースコア「_」を使用してください。

- **Description**（任意）：説明。
- **Version**（必須）：バージョンを選択します。
- **Type**（必須）：タイプを選択します（Public/Private）。

[![Event Gatewayの基本情報フォーム](/img/migrated/imagef-d52b4a53.png)](/img/migrated/imagef-d52b4a53.png)

**ステップ4:** **Next Step** をクリックして **Details** 画面に進みます。

以下の情報を入力します。

- **Launch Configuration**
  - **Subnet**（必須）：Subnetを選択します。
  - **Storage policy**（必須）：Storage Policyを選択します。
  - **Flavor**（必須）：Flavorを選択します。デフォルト値はMedium-4（2 CPU – 4 GB RAM）× 2ノードです。
  - **Load Balancer Size**（必須）：Load Balancerのサイズを選択します。

[![Launch設定フォーム](/img/migrated/image11-c4b59aa2.png)](/img/migrated/image11-c4b59aa2.png)

- **Kafka Cluster Information：** 2つのオプションがあります — **From FPT Database Engine** および **Manual configuration**。

**Manual configurationを選択した場合：**

以下を入力・選択してください。

- **Bootstrap server endpoint：** Bootstrap serverのエンドポイントアドレスを入力します。
- **Security protocol：** 以下のセキュリティプロトコルから1つを選択します。
  - **SASL_PLAINTEXT：** ユーザー名とパスワードによるシンプルな認証メカニズム。
    - SASL Mechanism
    - SASL Username
    - SASL Password
  - **SASL_SSL：** ユーザー名とパスワードによる認証とデータ暗号化のための包括的なセキュリティを提供します。
    - SASL Mechanism
    - SASL Username
    - SASL Password
  - **PLAINTEXT：** ネットワーク上で転送されるデータは暗号化されません。使用は推奨されません。
  - **SSL：** インターネット上でのデータ転送を保護するためのネットワークセキュリティプロトコル。
- **Username**（必須）：認証用のログイン名。
  - Security protocolがSASL_PLAINTEXTまたはSASL_SSLの場合に表示されます。
  - a～z、A～Z、0～9、アンダースコア（_）、ハイフン（-）、ドット（.）を使用できます。先頭・末尾・中間のスペースは不可。最大64文字。
- **Password**（必須）：認証用のパスワード。
  - Security protocolがSASL_PLAINTEXTまたはSASL_SSLの場合に表示されます。
  - 先頭・末尾・中間のスペースは不可。最大64文字。

[![Kafkaクラスター手動設定](/img/migrated/image12-76852251.png)](/img/migrated/image12-76852251.png)

**From FPT Database Engineを選択した場合：**

以下を入力・選択してください。

- **Database Name**（必須）：Databaseを選択します。
- **Bootstrap server endpoint：** Bootstrap serverのエンドポイントアドレスを入力します。
- **Security protocol：** 以下のセキュリティプロトコルから1つを選択します。
  - **SASL_PLAINTEXT：** ユーザー名とパスワードによるシンプルな認証メカニズム。
    - SASL Mechanism
    - SASL Username
    - SASL Password
  - **SASL_SSL：** ユーザー名とパスワードによる認証とデータ暗号化のための包括的なセキュリティを提供します。
    - SASL Mechanism
    - SASL Username
    - SASL Password
  - **PLAINTEXT：** ネットワーク上で転送されるデータは暗号化されません。使用は推奨されません。
  - **SSL：** インターネット上でのデータ転送を保護するためのネットワークセキュリティプロトコル。
- **Username**（必須）：認証用のログイン名。
  - Security protocolがSASL_PLAINTEXTまたはSASL_SSLの場合に表示されます。
  - a～z、A～Z、0～9、アンダースコア（_）、ハイフン（-）、ドット（.）を使用できます。先頭・末尾・中間のスペースは不可。最大64文字。
- **Password**（必須）：認証用のパスワード。
  - Security protocolがSASL_PLAINTEXTまたはSASL_SSLの場合に表示されます。
  - 先頭・末尾・中間のスペースは不可。最大64文字。

[![FPT Database Engineを使用したKafkaクラスター設定](/img/migrated/image13-a13cf585.png)](/img/migrated/image13-a13cf585.png)

- **Endpoint：**
  - **Domain**（必須）：サービス初期化後のEvent Gatewayサービスへの接続アドレス。
    - a～z、A～Z、0～9、ハイフン（-）、ドット（.）を使用できます。最大100文字。
    - ドメイン名の先頭・末尾にハイフン（-）またはドット（.）は使用できません。
    - トップレベルドメイン：最小2文字、最大6文字。
    - 例：domain-name.com
  - **CA bundle**（必須）：PEM形式のCA証明書チェーン。
    - `-----BEGIN CERTIFICATE-----` で始まり、PEM標準に準拠して終わる必要があります。
  - **Private key**（必須）：PEM形式の秘密鍵。
    - `-----BEGIN PRIVATE KEY-----` で始まり、PEM標準に準拠して終わる必要があります。

[![エンドポイント設定フォーム](/img/migrated/image14-3754b0d7.png)](/img/migrated/image14-3754b0d7.png)

**ステップ5:** **Next Step** をクリックして **Configure** 画面に進みます。

以下を入力します。

- **JWT auth：** JWT Token認証を有効/無効にします — デフォルトは無効。
  - **Name**（必須）：JWT auth名。
    - a～z、A～Z、ハイフン（-）、アンダースコア（_）、数字を使用できます。先頭は英字。最大30文字。
  - **Claim key：** claim keyのリスト：
    - Issuer
    - Issued At
    - Expiration
    - Audience
    - Subject
    - Scope
      - デフォルトのclaim keyは「Issuer」です。
      - JWT Authが有効な場合、インターフェースはデフォルトで1つのclaim key-valueペアを表示します。
      - デフォルトで2つの入力（IssuerとAudience）がレンダリングされ、両方必須です。
  - **Value：** 各claim keyに対応する値（ある場合）。
    - 最大100文字。
  - **Public key**（必須）：PEM形式の公開鍵文字列。
    - `-----BEGIN PUBLIC KEY-----` で始まり、PEM標準に準拠して終わる必要があります。

**Add claim** をクリックしてclaim key-valueペアを追加し、**Remove claim** で削除します。

[![JWT auth設定](/img/migrated/image15-ea59e130.png)](/img/migrated/image15-ea59e130.png)

- **Routers：**
  - **Name**（必須）：Router名。
    - a～z、A～Z、ハイフン（-）、アンダースコア（_）、数字を使用できます。先頭は英字。最大30文字。
  - **Mode**（必須）：Routerのタイプ。以下から選択します：
    - Oneway
    - Sync
    - Async
    - インターフェースは3つのモードに対応するデフォルトの3つのRouterテンプレートを表示します。
  - **Authentication**（必須）：Routerが認証を使用するかどうか。
    - デフォルト：None。
    - 以下から選択：
      - None：認証なし。
      - JWT auth（JWT auth設定が有効な場合）。
  - **Path**（必須）：データの送信（POST）または取得（FETCH）のパス。
    - `/` で始まる必要があります。
    - a～z、A～Z、0～9、ハイフン（-）、アンダースコア（_）、`/`、`{`、`}`、`=` を使用できます。
    - 最大100文字。
  - **Method**（必須）：Router内のAPIメソッド。
  - **Scope**（必須）：API requestの認証時にJWT token内の「scope」claimの値を定義します。
    - 最大50文字。
  - **Topic**（必須）：OnewayモードでデータをReceiveするKafka topic名。
  - **Request topic**（必須）：SyncまたはAsyncモードでデータをReceiveするKafka topic名。
    - a～z、A～Z、0～9、ハイフン（-）、アンダースコア（_）、ドット（.）を使用できます。
    - 先頭は英字。最大249文字。
  - **Response topic**（必須）：SyncまたはAsyncモードでデータを取得するKafka topic名。
    - a～z、A～Z、0～9、ハイフン（-）、アンダースコア（_）、ドット（.）を使用できます。
    - 先頭は英字。最大249文字。

**Add router** をクリックして各Routerモードタイプのテンプレートを追加します。
**Remove router** をクリックしてRouterを削除します。

[![Router設定フォーム](/img/migrated/image16-b9271d2a.png)](/img/migrated/image16-b9271d2a.png)

**ステップ7:** **Next Step** をクリックして **Review and Create** 画面に進みます。

[![レビューと作成画面](/img/migrated/image17-f42b2736.png)](/img/migrated/image17-f42b2736.png)

**ステップ8:** 入力した情報を確認してから **Create** をクリックし、**Event Gateway** の初期化を完了します。

**Event Gateway** の **Status** が **Healthy** になれば初期化完了です（約15分かかります）。
