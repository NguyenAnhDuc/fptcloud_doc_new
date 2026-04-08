---
id: "managing-consumers"
title: "Consumer の管理"
description: "Consumer の作成・編集・削除および Product のサブスクライブ手順です。"
sidebar_label: "Consumer の管理"
sidebar_position: 6
pagination_next: null
---

# Consumer の管理

プロバイダーが Product をサイトに公開した後も、クライアントはすぐに API を利用できません。クライアントが API を利用するには、プロバイダーが Consumer メニューでクライアント情報を作成し、そのクライアントが事前に公開された Product をサブスクライブするよう指定する必要があります。

## Consumer の新規作成

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

3. **OK** を選択して Consumer を作成します。

[![Userguide FPT API Management 28](/img/migrated/Userguide-FPT-API-Management-28-1024x538-29ff8f20.png)](/img/migrated/Userguide-FPT-API-Management-28-1024x538-29ff8f20.png)

## Product のサブスクライブ

Consumer を作成した後、プロバイダーは Consumer が Product 内の API を使用できるよう、Product をサブスクライブするよう指定する必要があります。

1. **Consumer Management** で Consumer を選択し、**Product subscription** を選択します。

[![Userguide FPT API Management 29](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)

2. **Subscribe product** を選択します。

[![Userguide FPT API Management 30](/img/migrated/Userguide-FPT-API-Management-30-1024x538-a7aedaa1.png)](/img/migrated/Userguide-FPT-API-Management-30-1024x538-a7aedaa1.png)

3. **Product** を選択します。

[![Userguide FPT API Management 31](/img/migrated/Userguide-FPT-API-Management-31-1024x538-85d308c1.png)](/img/migrated/Userguide-FPT-API-Management-31-1024x538-85d308c1.png)

4. **OK** を選択して保存します。

[![Userguide FPT API Management 32](/img/migrated/Userguide-FPT-API-Management-32-1024x538-401df389.png)](/img/migrated/Userguide-FPT-API-Management-32-1024x538-401df389.png)

上記の手順が完了すると、クライアントはプロバイダーが提供する API を利用できるようになります。

:::note
Product が publish 状態でない場合、Consumer はサブスクライブ画面で Product を選択できません。
:::

## Product のサブスクライブ解除

1. **Consumer Management** で Consumer を選択し、**Product subscription** を選択します。

[![Userguide FPT API Management 29](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)

2. **Unsubscribe product** を選択します。

[![Userguide FPT API Management 54](/img/migrated/Userguide-FPT-API-Management-54-1024x538-ae92854b.png)](/img/migrated/Userguide-FPT-API-Management-54-1024x538-ae92854b.png)

3. **OK** を選択して保存します。

[![Userguide FPT API Management 55](/img/migrated/Userguide-FPT-API-Management-55-16026107.png)](/img/migrated/Userguide-FPT-API-Management-55-16026107.png)

## Consumer 情報の変更

1. **Consumer Management** で変更対象の **Consumer** を選択し、**Edit** を選択します。

[![Userguide FPT API Management 56](/img/migrated/Userguide-FPT-API-Management-56-1024x538-cfc6b966.png)](/img/migrated/Userguide-FPT-API-Management-56-1024x538-cfc6b966.png)

2. 新しい情報を入力して **OK** を選択します。

[![Userguide FPT API Management 57](/img/migrated/Userguide-FPT-API-Management-57-1024x538-7fe0874b.png)](/img/migrated/Userguide-FPT-API-Management-57-1024x538-7fe0874b.png)

:::note
一部のフィールドは編集画面で変更できず、無効化されます。その他のフィールドは Consumer 作成時と同じバリデーションに従ってください。
:::

## Consumer の認証情報の取得

API Management で作成された API を使用するには、API 管理者が各 **Consumer** の認証情報を取得してエンドユーザーに提供する必要があります。現在 API Management は Basic Auth（ユーザー名/パスワード）と API Key の 2 つの認証方式をサポートしています。

### 5.1 Basic Auth のユーザー名とパスワードの取得

- **Username:** 以下の構造で構成されます：

  `UsernameProvider.サイト名.usernameConsumer`

  **例:** `demo123.sitedemo.demoacc`

  または以下の手順で取得できます：

  1. **Consumer Management** で対象の **Consumer** を選択し、**Edit** を選択します。

  [![Userguide FPT API Management 58](/img/migrated/Userguide-FPT-API-Management-58-1024x590-c31b656b.png)](/img/migrated/Userguide-FPT-API-Management-58-1024x590-c31b656b.png)

  2. **Basic Authen User** フィールドからユーザー名を取得します。

  [![Userguide FPT API Management 59](/img/migrated/Userguide-FPT-API-Management-59-1024x590-134f47e5.png)](/img/migrated/Userguide-FPT-API-Management-59-1024x590-134f47e5.png)

- **Password:** Consumer 作成時に設定したパスワードです。

### 5.2 API Key の取得

1. **Consumer Management** で対象の **Consumer** を選択し、**Edit** を選択します。

[![Userguide FPT API Management 60](/img/migrated/Userguide-FPT-API-Management-60-1024x590-14edb59b.png)](/img/migrated/Userguide-FPT-API-Management-60-1024x590-14edb59b.png)

2. **Api key** フィールドから API Key を取得します。

[![Userguide FPT API Management 61](/img/migrated/Userguide-FPT-API-Management-61-1024x590-bca437e1.png)](/img/migrated/Userguide-FPT-API-Management-61-1024x590-bca437e1.png)

## Consumer の削除

**Consumer** を削除するには、対象の **Consumer** がいずれの Product もサブスクライブしていないことを確認してください。**Product のサブスクライブ解除**については、上記の手順をご参照ください。

1. **Consumer Management** で削除する **Consumer** を選択し、**Remove** を選択します。

[![Userguide FPT API Management 62](/img/migrated/Userguide-FPT-API-Management-62-1024x538-8c38acd6.png)](/img/migrated/Userguide-FPT-API-Management-62-1024x538-8c38acd6.png)

2. 確認ポップアップで **Yes** を選択して削除を実行します。

[![Userguide FPT API Management 55](/img/migrated/Userguide-FPT-API-Management-55-16026107.png)](/img/migrated/Userguide-FPT-API-Management-55-16026107.png)

:::note
エラー **「Could not remove that consumer as there are still subscriptions of that consumer!」** が表示された場合は、先にすべての Product をアンサブスクライブしてください。
:::
