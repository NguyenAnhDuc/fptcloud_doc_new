---
id: "consumer-api-usage-guide"
title: "API Consumer 向け利用ガイド"
description: "API Consumer が API Management から API を利用するための手順です。"
sidebar_label: "API Consumer 向け利用ガイド"
sidebar_position: 11
pagination_next: null
---

# API Consumer 向け利用ガイド

## API Provider からの情報受け取り

利用を開始するには、クライアントは以下の情報が必要です。

- **API の endpoint:** Product の endpoint 情報取得ガイドに従って提供されます。
- **Authorization:** **Consumer** の認証方式。現在 **Basic** または **API Key** をサポートしています。
  - **Authorization** が **Basic** の場合：
    - **Username:** 以下の構造：`UsernameProvider.サイト名.usernameConsumer`（例: `demo123.sitedemo.demoacc`）。または Consumer の認証情報取得ガイドに従って取得できます。
    - **Password:** Consumer 作成時に設定したパスワード。
  - **Authorization** が **API Key** の場合：
    - **Key:** `api-key`
    - **Value:** Consumer の認証情報取得ガイドに従って取得します。
    - **Add to:** Header
- **認可されたサイト。**

## Postman の使用

必要な情報が揃ったら、クライアントは Postman を使って API Management から提供された API を呼び出せます。

1. endpoint を入力し、API を呼び出す method を選択します。

[![Userguide FPT API Management 33](/img/migrated/Userguide-FPT-API-Management-33-1024x640-6851d77f.png)](/img/migrated/Userguide-FPT-API-Management-33-1024x640-6851d77f.png)

2. **Authorization** 情報を入力します。
   - **Authorization** が **Basic** の場合は **Basic Auth** を選択し、**Username** と **Password** を入力します。
   - **Authorization** が **API Key** の場合は **API Key** を選択し、key を入力します。

[![Userguide FPT API Management 34](/img/migrated/Userguide-FPT-API-Management-34-1024x640-c6cc1291.png)](/img/migrated/Userguide-FPT-API-Management-34-1024x640-c6cc1291.png)

3. request body やその他のパラメーターを入力して **Send** を選択します。

[![Userguide FPT API Management 35](/img/migrated/Userguide-FPT-API-Management-35-1024x640-fc9f24a1.png)](/img/migrated/Userguide-FPT-API-Management-35-1024x640-fc9f24a1.png)

4. レスポンスを確認します。
   - **Status 2xx:** API 呼び出し成功。
   - **Status 4xx–5xx:** エラー — FCI にサポートを依頼してください。

[![Userguide FPT API Management 36](/img/migrated/Userguide-FPT-API-Management-36-1024x640-9e719493.png)](/img/migrated/Userguide-FPT-API-Management-36-1024x640-9e719493.png)

:::note
エラー確認のチェックリスト（順序に従ってください）：
1. ユーザー名とパスワードを確認します。
2. API Provider に、API に対するクライアントの権限を確認するよう依頼します。
3. API の設定が正しいか、パラメーターやヘッダーに不足がないかを確認します。
4. API 自体にエラーがないかを確認します。
5. FCI にゲートウェイの確認を依頼します。
:::
