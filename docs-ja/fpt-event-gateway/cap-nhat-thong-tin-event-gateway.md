---
id: "cap-nhat-thong-tin-event-gateway"
title: "Event Gateway情報の更新"
description: "Event Gatewayの情報を更新するには、以下の手順に従ってください。"
sidebar_label: "Event Gateway情報の更新"
sidebar_position: 5
---

# Event Gateway情報の更新

**Event Gateway** の情報を更新するには、以下の手順に従ってください。

**ステップ1:** メニューバーで **Integration** > **Event Gateway** を選択します。

**ステップ2:** 更新したい **Event Gateway** を選択します。

**ステップ3:** **Event Gateway** 画面で、編集したいセクションのEditアイコンをクリックします。

- **Update Basic Information**

  Instance Information編集画面が表示され、以下の情報を変更できます。

  - **Name**（必須）：サービス名。

    注意：サービス名は1～30文字である必要があります。小文字a～z、大文字A～Z、または数字0～9を使用できます。

  - **Description**（任意）：サービスの説明。

[![基本情報編集フォーム](/img/migrated/image2a-d2f456a8.png)](/img/migrated/image2a-d2f456a8.png)

- **Update Node Configuration**

  Node Configuration編集画面が表示され、以下の情報を変更できます。

  - **Type：** サービスの設定タイプを選択します。
  - **Number of node：** 適切なノード数を選択します。

    注意：ノード数は1以上10以下である必要があります。

  - **Storage policy：** ストレージポリシーを選択します。

[![ノード設定編集フォーム](/img/migrated/image2b-a3921152.png)](/img/migrated/image2b-a3921152.png)

- **Update Kafka cluster：** Kafka Cluster編集画面が表示され、以下の情報を変更できます。

  - **Bootstrap server endpoint：** Bootstrap serverのエンドポイントアドレスを入力します。
  - **Username**（必須）：認証用のログイン名。
    - Security protocolがSASL_PLAINTEXTまたはSASL_SSLの場合に表示されます。
    - a～z、A～Z、0～9、アンダースコア（_）、ハイフン（-）、ドット（.）を使用できます。先頭・末尾・中間のスペースは不可。最大64文字。
  - **Password**（必須）：認証用のパスワード。
    - Security protocolがSASL_PLAINTEXTまたはSASL_SSLの場合に表示されます。
    - 先頭・末尾・中間のスペースは不可。最大64文字。

[![Kafkaクラスター編集フォーム](/img/migrated/image2c-34119d0d.png)](/img/migrated/image2c-34119d0d.png)

- **Update Endpoint：** Endpoint編集画面が表示され、以下の情報を変更できます。

  - **CA bundle**（必須）：PEM形式のCA証明書チェーン。
    - `-----BEGIN CERTIFICATE-----` で始まり、PEM標準に準拠して終わる必要があります。
  - **Private key**（必須）：PEM形式の秘密鍵。
    - `-----BEGIN PRIVATE KEY-----` で始まり、PEM標準に準拠して終わる必要があります。

[![エンドポイント編集フォーム](/img/migrated/image2d-ee4860cd.png)](/img/migrated/image2d-ee4860cd.png)
