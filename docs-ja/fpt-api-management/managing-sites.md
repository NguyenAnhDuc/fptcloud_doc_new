---
id: "managing-sites"
title: "API Site の管理"
description: "ApiManager Application で API Site を作成・編集・削除する手順です。"
sidebar_label: "API Site の管理"
sidebar_position: 8
---

# API Site の管理

Site は Product と Portal をマッピングするためのエンティティです。

**Pilot** および **Normal** プランでは、デフォルトの Public サイトが 1 つ提供されており、新しいサイトを追加作成することはできません。複数のサイトが必要な場合は、上位プランへのアップグレードが必要です。

## Site の新規作成

1. メニューの **Application** > **API Manager** > **Sites** で **Create** を選択します。

[![Userguide FPT API Management 16](/img/migrated/Thiet-ke-chua-co-ten-1-1-16b23576.png)](/img/migrated/Thiet-ke-chua-co-ten-1-1-16b23576.png)

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

## Site 情報の変更

1. **Site Management** で変更対象の **Site** を選択し、**Edit** を選択します。

[![Userguide FPT API Management 47](/img/migrated/Userguide-FPT-API-Management-47-1024x538-e8bb885d.png)](/img/migrated/Userguide-FPT-API-Management-47-1024x538-e8bb885d.png)

2. 新しい情報を入力して **OK** を選択します。

## Product を Site に Staging する

Product と Site を作成した後、使用前に Product を対応する Site に stage（配置）する必要があります。

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

## Product を Publish する

Staging 後も Product はプライベート状態のままです。Consumer が Product 内の API を使用できるようにするには、Publish を実行する必要があります。

1. **API Manager** メニューで **Sites** を選択します。

[![Userguide FPT API Management 23](/img/migrated/Userguide-FPT-API-Management-23-1024x590-aff731c7.png)](/img/migrated/Userguide-FPT-API-Management-23-1024x590-aff731c7.png)

2. 公開する **Product** を含む **Site** を選択し、**Product** を選択します。

[![Userguide FPT API Management 24](/img/migrated/Userguide-FPT-API-Management-24-1024x558-b953da5f.png)](/img/migrated/Userguide-FPT-API-Management-24-1024x558-b953da5f.png)

3. 公開する Product を選択し、**Publish** を選択します。

[![Userguide FPT API Management 25](/img/migrated/Userguide-FPT-API-Management-25-1024x556-cd93e7e6.png)](/img/migrated/Userguide-FPT-API-Management-25-1024x556-cd93e7e6.png)
