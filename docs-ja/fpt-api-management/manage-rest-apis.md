---
id: "manage-rest-apis"
title: "REST API の管理"
description: "ApiManager Application で REST API を作成・編集・削除する手順です。"
sidebar_label: "REST API の管理"
sidebar_position: 6
---

# REST API の管理

## REST API の作成

1. メニューの **Application** > **API Manager** > **Rest Apis** で **Create** を選択します。

[![Userguide FPT API Management 6](/img/migrated/Userguide-FPT-API-Management-6-1024x538-b760ac40.png)](/img/migrated/Userguide-FPT-API-Management-6-1024x538-b760ac40.png)

2. 必要な情報を入力します。
   - **Name:** API 名。
   - **Title:** API のタイトル。
   - **Base path:** API を公開した後にクライアントが呼び出すパス。
   - **Use host group:** HA モードを有効にするかどうか。
   - **Target endpoint:** Consumer に提供する既存 API の endpoint。
   - **Target Security:** API の認証情報。
   - **Security method:** クライアントが API を使用する際の認証方式。**Basic Authentication**、**OAuth**、**Api Key** をサポートしています。
   - **Enable doc:** API のドキュメントを生成します。
   - **Enable validation schema:** リクエスト body のバリデーションを追加します。

:::warning
**Security method** は作成後に変更できません。この情報を設定する際は注意してください。
:::

[![Userguide FPT API Management 7](/img/migrated/472080589_951032306478361_13273467091314-3c62edec.png)](/img/migrated/472080589_951032306478361_13273467091314-3c62edec.png)

3. **OK** を選択して **REST API** を作成します。

[![Userguide FPT API Management 8](/img/migrated/Userguide-FPT-API-Management-8-1024x538-c2bb67f9.png)](/img/migrated/Userguide-FPT-API-Management-8-1024x538-c2bb67f9.png)

**Create** ボタンが無効な場合は、API Management のサービスプランを確認してください。**Pilot** プランでは、最大 2 つの API のみ作成できます。

複数の API をまとめて登録する場合は、**API Manager** メニューの **Utility** > **Import API** を使用してください。
