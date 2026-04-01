---
id: "quick-starts"
title: "クイックスタート"
description: "API Provider 向け、API Management サービスの登録から基本設定までのエンドツーエンドフローです。"
sidebar_label: "クイックスタート"
sidebar_position: 3
---

# クイックスタート

:::note
**対象ユーザー:** API Provider
:::

## API Management サービスの登録

**API Provider** アカウントを登録するにはサービスクォータの付与が必要です。ご利用をご希望の場合はお問い合わせください。

1. **FPT Portal** のメニューで **Api Management** > **Create** を選択します。

[![Userguide FPT API Management 1](/img/migrated/Userguide-FPT-API-Management-1-1024x538-e900f9a0.png)](/img/migrated/Userguide-FPT-API-Management-1-1024x538-e900f9a0.png)

2. **Username** を入力し、**Plan** と **Pricing** を選択します。

[![Alt text](/img/migrated/Thiet-ke-chua-co-ten-1-af7277d5.png)](/img/migrated/Thiet-ke-chua-co-ten-1-af7277d5.png)

各プランの設定は以下の表を参照してください。

| **Plan** | **説明** | **サイト数** | **API 数** | **Product 数** |
| --- | --- | --- | --- | --- |
| **Pilot** | デフォルトのサイトと Product を使用します。サイトや Product の追加作成機能はありません。 | 1 | 2 | 1 |
| **Normal** | デフォルトのサイトと Product を使用します。サイトの追加作成機能はありません。 | 1 | 無制限 | 1 |
| **Enterprise** | サイトと Product を自由に作成できます。 | 無制限 | 無制限 | 無制限 |

| **機能** | **Standard** | **Advanced** | **Premium** |
| --- | --- | --- | --- |
| **Transactions** | 最大: 250/s | 最大: 1000/s | 最大: 5000/s |
| **Developer Portal** | No | Yes | Yes |
| **Custom Domain** | Yes | Yes | Yes |
| **Self-hosted Gateway** | No | Yes | Yes |
| **Message size** | 15KB | 25KB | 50KB |
| **Logging retention** | 1ヶ月 | 2ヶ月 | 3ヶ月 |
| **SLA** | 99.95% | 99.99% | 99.99% |

3. **Create** を選択します。システムがサービスを初期化し、処理状況を通知します。

[![Userguide FPT API Management 3](/img/migrated/Userguide-FPT-API-Management-3-1024x258-824a2884.png)](/img/migrated/Userguide-FPT-API-Management-3-1024x258-824a2884.png)

初期化が完了すると、自動的に **ApiManager Application** 管理画面にリダイレクトされます。

[![Userguide FPT API Management 4](/img/migrated/Userguide-FPT-API-Management-4-1024x538-56046d89.png)](/img/migrated/Userguide-FPT-API-Management-4-1024x538-56046d89.png)

または **FPT Portal** にアクセスし、**API Management** の **Start** を選択して管理画面に入ることもできます。

[![Userguide FPT API Management 5](/img/migrated/Userguide-FPT-API-Management-5-1024x258-06e7b130.png)](/img/migrated/Userguide-FPT-API-Management-5-1024x258-06e7b130.png)

## REST API の登録

サービス登録後、管理対象の API を **API Management** に登録して一元管理します。

1. メニューの **Application** > **API Manager** > **Rest Apis** で **Create** を選択します。

[![Userguide FPT API Management 6](/img/migrated/Userguide-FPT-API-Management-6-1024x538-b760ac40.png)](/img/migrated/Userguide-FPT-API-Management-6-1024x538-b760ac40.png)

2. 必要な情報を入力します。
   - **Name:** API 名。
   - **Title:** API のタイトル。
   - **Base path:** API 公開後にクライアントが呼び出すパス。
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

## Product の作成

**Product** は API を共通目的・共通クライアント等でグループ化するエンティティです。個々の API を設定するかわりに、1 つの Product を設定するだけで済みます。

1. メニューの **Application** > **API Manager** > **Products** で **Create** を選択します。

[![Userguide FPT API Management 9](/img/migrated/Userguide-FPT-API-Management-9-1024x538-a464f0e4.png)](/img/migrated/Userguide-FPT-API-Management-9-1024x538-a464f0e4.png)

2. 必要な情報を入力します。
   - **Name:** Product 名。
   - **Title:** タイトル。
   - **Visibility type:** Product の表示モード。**Public** または **Closed**。

[![Userguide FPT API Management 10](/img/migrated/Userguide-FPT-API-Management-10-1024x538-5c96395a.png)](/img/migrated/Userguide-FPT-API-Management-10-1024x538-5c96395a.png)

3. **OK** を選択して **Product** を作成します。

[![Userguide FPT API Management 11](/img/migrated/Userguide-FPT-API-Management-11-1024x538-93a6a17c.png)](/img/migrated/Userguide-FPT-API-Management-11-1024x538-93a6a17c.png)

## Product への API の割り当て

1. **Product Management** で API を割り当てる **Product** を選択し、**Register API** を選択します。

[![Userguide FPT API Management 12](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)

2. **Register** を選択します。

[![Userguide FPT API Management 13](/img/migrated/Userguide-FPT-API-Management-13-1024x538-40e6fd9c.png)](/img/migrated/Userguide-FPT-API-Management-13-1024x538-40e6fd9c.png)

3. **Product** に割り当てる API を選択し、**Select** を選択します。

[![Userguide FPT API Management 14](/img/migrated/Userguide-FPT-API-Management-14-1024x538-86d8a0d0.png)](/img/migrated/Userguide-FPT-API-Management-14-1024x538-86d8a0d0.png)

4. **OK** を選択して保存します。

[![Userguide FPT API Management 15](/img/migrated/Userguide-FPT-API-Management-15-1024x538-26910f97.png)](/img/migrated/Userguide-FPT-API-Management-15-1024x538-26910f97.png)

:::note
- Product と API は多対多の関係です。1 つの Product には複数の API を割り当てられ、1 つの API は複数の Product に同時に含めることができます。
- Product は、その Product 内の API グループをどの種類の Consumer に公開するかに影響します。
:::

## 新しい Site の作成

Site は Product と Portal をマッピングするエンティティです。

:::note
**Pilot** または **Normal** プランでは、デフォルトサイトが 1 つ提供されており、追加作成はできません。複数のサイトが必要な場合は上位プランへのアップグレードが必要です。
:::

1. メニューの **Application** > **API Manager** > **Sites** で **Create** を選択します。

[![Userguide FPT API Management 16](/img/migrated/Userguide-FPT-API-Management-16-1024x538-be9735da.png)](/img/migrated/Userguide-FPT-API-Management-16-1024x538-be9735da.png)

2. 必要な情報を入力します。
   - **Name:** サイト名。
   - **Title:** タイトル。
   - **Production mode:** プロダクトモードを選択します。
   - **Virtual area:** 管理者が事前に登録したリストからエリアを選択します。
   - **Gateway:** 管理者が事前に登録したリストから gateway を選択します。
   - **Portal:** 管理者が事前に登録したリストから Portal を選択します。

[![Userguide FPT API Management 17](/img/migrated/Userguide-FPT-API-Management-17-1024x538-c8843ff5.png)](/img/migrated/Userguide-FPT-API-Management-17-1024x538-c8843ff5.png)

3. **OK** を選択して **Site** を作成します。

[![Userguide FPT API Management 18](/img/migrated/Userguide-FPT-API-Management-18-1024x538-c20fb585.png)](/img/migrated/Userguide-FPT-API-Management-18-1024x538-c20fb585.png)

## Product の Staging

Product と Site を作成した後、使用前に Product を対応する Site に stage する必要があります。

1. **Product Management** で Site に公開する **Product** を選択し、**Staging** を選択します。

[![Userguide FPT API Management 19](/img/migrated/Userguide-FPT-API-Management-19-1024x538-32e49e03.png)](/img/migrated/Userguide-FPT-API-Management-19-1024x538-32e49e03.png)

2. **Staging to New site** を選択します。

[![Userguide FPT API Management 20](/img/migrated/Userguide-FPT-API-Management-20-1024x538-c19e306e.png)](/img/migrated/Userguide-FPT-API-Management-20-1024x538-c19e306e.png)

3. 必要な情報を入力します。
   - **Product:** Site に割り当てる Product。
   - **Site to publish:** 事前に作成したサイトを選択します。

[![Userguide FPT API Management 21](/img/migrated/Userguide-FPT-API-Management-21-1024x538-9ac596d9.png)](/img/migrated/Userguide-FPT-API-Management-21-1024x538-9ac596d9.png)

4. **OK** を選択します。

[![Userguide FPT API Management 22](/img/migrated/Userguide-FPT-API-Management-22-1024x538-7e8c715e.png)](/img/migrated/Userguide-FPT-API-Management-22-1024x538-7e8c715e.png)

:::note
- Product と Site は多対多の関係です。1 つのサイトに複数の Product を割り当てられ、1 つの Product は複数のサイトに含めることができます。
- Site はその Site に表示される Product（および Product 内の API）を決定します。
:::

## Product の Publish

Staging 後も Product はプライベート状態のままです。Consumer が Product 内の API を使用できるようにするには Publish を実行する必要があります。

1. **API Manager** メニューで **Sites** を選択します。

[![Userguide FPT API Management 23](/img/migrated/Userguide-FPT-API-Management-23-1024x590-aff731c7.png)](/img/migrated/Userguide-FPT-API-Management-23-1024x590-aff731c7.png)

2. 公開する **Product** を含む **Site** を選択し、**Product** を選択します。

[![Userguide FPT API Management 24](/img/migrated/Userguide-FPT-API-Management-24-1024x558-b953da5f.png)](/img/migrated/Userguide-FPT-API-Management-24-1024x558-b953da5f.png)

3. 公開する Product を選択し、**Publish** を選択します。

[![Userguide FPT API Management 25](/img/migrated/Userguide-FPT-API-Management-25-1024x556-cd93e7e6.png)](/img/migrated/Userguide-FPT-API-Management-25-1024x556-cd93e7e6.png)

## 新しい Consumer の作成

**Consumer** は API を利用するエンドユーザーであり、付与された Product 内のすべての API を使用できます。

1. **API Manager** メニューで **Consumers** > **Create** を選択します。

[![Userguide FPT API Management 26](/img/migrated/Userguide-FPT-API-Management-26-1024x538-38542a55.png)](/img/migrated/Userguide-FPT-API-Management-26-1024x538-38542a55.png)

2. 必要な情報を入力します。
   - **Name:** Consumer 名。
   - **Site:** Consumer が有効なサイトを選択します。
   - **API Key:** API key 認証を使用するかどうかを選択します。
   - **Title:** タイトル。
   - **Password:** **Basic Authentication** を使用する場合のパスワード。
   - **Confirm password:** パスワードの確認入力。
   - **Max per second:** クライアントが 1 秒間に API を呼び出せる最大回数。
   - **Max per minute:** クライアントが 1 分間に API を呼び出せる最大回数。
   - **Max per hour:** クライアントが 1 時間に API を呼び出せる最大回数。

[![Userguide FPT API Management 27](/img/migrated/Userguide-FPT-API-Management-27-1024x538-8505cbdc.png)](/img/migrated/Userguide-FPT-API-Management-27-1024x538-8505cbdc.png)

:::note
- API Key とパスワードは並行して宣言・使用できます。
- Consumer の認証方式は使用する API の認証方式と一致している必要があります。例えば API が Basic Authentication を使用している場合、Consumer も Basic を使用する必要があります。
:::

3. **OK** を選択して Consumer を作成します。

[![Userguide FPT API Management 28](/img/migrated/Userguide-FPT-API-Management-28-1024x538-29ff8f20.png)](/img/migrated/Userguide-FPT-API-Management-28-1024x538-29ff8f20.png)

## Product のサブスクライブ

**Consumer** を作成した後、プロバイダーは Consumer が **Product** をサブスクライブするよう指定することで、Consumer がその Product 内の API を使用できるようになります。

1. **Consumer Management** で Consumer を選択し、**Product subscription** を選択します。

[![Userguide FPT API Management 29](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)

2. **Subscribe product** を選択します。

[![Userguide FPT API Management 30](/img/migrated/Userguide-FPT-API-Management-30-1024x538-a7aedaa1.png)](/img/migrated/Userguide-FPT-API-Management-30-1024x538-a7aedaa1.png)

3. **Product** を選択します。

[![Userguide FPT API Management 31](/img/migrated/Userguide-FPT-API-Management-31-1024x538-85d308c1.png)](/img/migrated/Userguide-FPT-API-Management-31-1024x538-85d308c1.png)

:::note
Product が publish 状態でない場合、Consumer はサブスクライブ画面で Product を選択できません。
:::

4. **OK** を選択して保存します。

[![Userguide FPT API Management 32](/img/migrated/Userguide-FPT-API-Management-32-1024x538-401df389.png)](/img/migrated/Userguide-FPT-API-Management-32-1024x538-401df389.png)

以上の手順が完了すると、クライアントはプロバイダーが提供する API を利用できるようになります。

## API Provider からの情報受け取り

利用を開始するには、クライアントは以下の情報が必要です。

- **API の endpoint:** Product の endpoint 情報取得ガイドに従って提供されます。
- **Authorization:** **Consumer** の認証方式。**Basic** または **API Key** をサポートしています。
  - **Authorization** が **Basic** の場合：
    - **Username:** 構造: `UsernameProvider.サイト名.usernameConsumer`（例: `demo123.sitedemo.demoacc`）。または Consumer の認証情報取得ガイドに従って取得できます。
    - **Password:** Consumer 作成時に設定したパスワード。
  - **Authorization** が **API Key** の場合：
    - **Key:** `api-key`
    - **Value:** Consumer の認証情報取得ガイドに従って取得します。
    - **Add to:** Header
- **認可されたサイト。**

## Postman の使用

必要な情報が揃ったら、クライアントは Postman を使って API Management から API を呼び出せます。

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

:::tip
エラー確認のチェックリスト（順序に従ってください）：
1. ユーザー名とパスワードを確認します。
2. API Provider に、API に対するクライアントの権限を確認するよう依頼します。
3. API の設定が正しいか、パラメーターやヘッダーに不足がないかを確認します。
4. API 自体にエラーがないかを確認します。
5. FCI にゲートウェイの確認を依頼します。
:::
