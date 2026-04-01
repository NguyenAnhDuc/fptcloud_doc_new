---
id: "managing-products"
title: "Product の管理"
description: "ApiManager Application で Product を作成・編集・削除する手順です。"
sidebar_label: "Product の管理"
sidebar_position: 7
---

# Product の管理

## 1. Product の作成

1. メニューの **Application** > **API Manager** > **Products** で **Create** を選択します。

[![Userguide FPT API Management 9](/img/migrated/Userguide-FPT-API-Management-9-1024x538-a464f0e4.png)](/img/migrated/Userguide-FPT-API-Management-9-1024x538-a464f0e4.png)

2. 必要な情報を入力します。
   - **Name:** Product 名。
   - **Title:** タイトル。
   - **Visibility type:** Product の表示モード。**Public** または **Close**。

[![Userguide FPT API Management 10](/img/migrated/Userguide-FPT-API-Management-10-1024x538-5c96395a.png)](/img/migrated/Userguide-FPT-API-Management-10-1024x538-5c96395a.png)

3. **OK** を選択して **Product** を作成します。

[![Userguide FPT API Management 11](/img/migrated/Userguide-FPT-API-Management-11-1024x538-93a6a17c.png)](/img/migrated/Userguide-FPT-API-Management-11-1024x538-93a6a17c.png)

**Create** ボタンが無効な場合は、API Management のサービスプランを確認してください。**Pilot** および **Normal** プランでは、最大 1 つの **Product** のみ作成できます。

## 2. Product 情報の編集

1. **Product Management** で変更対象の **Product** を選択し、**Edit** を選択します。

[![Userguide FPT API Management 42](/img/migrated/Userguide-FPT-API-Management-42-1024x538-10a13d66.png)](/img/migrated/Userguide-FPT-API-Management-42-1024x538-10a13d66.png)

2. 新しい情報を入力して **OK** を選択します。

[![Userguide FPT API Management 43](/img/migrated/Userguide-FPT-API-Management-43-1024x538-26ece1a3.png)](/img/migrated/Userguide-FPT-API-Management-43-1024x538-26ece1a3.png)

すべての項目を入力し、Product 作成時と同じバリデーションに従ってください。

## 3. Product への API の割り当て

1. **Product Management** で API を割り当てる **Product** を選択し、**Register API** を選択します。

[![Userguide FPT API Management 12](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)

2. **Register** を選択します。

[![Userguide FPT API Management 13](/img/migrated/Userguide-FPT-API-Management-13-1024x538-40e6fd9c.png)](/img/migrated/Userguide-FPT-API-Management-13-1024x538-40e6fd9c.png)

3. **Product** に割り当てる API を選択し、**Select** を選択します。

[![Userguide FPT API Management 14](/img/migrated/Userguide-FPT-API-Management-14-1024x538-86d8a0d0.png)](/img/migrated/Userguide-FPT-API-Management-14-1024x538-86d8a0d0.png)

4. **OK** を選択して保存します。

[![Userguide FPT API Management 15](/img/migrated/Userguide-FPT-API-Management-15-1024x538-26910f97.png)](/img/migrated/Userguide-FPT-API-Management-15-1024x538-26910f97.png)

:::note
- 1 つの Product には複数の API を割り当てられます。
- 1 つの API は複数の Product に同時に含めることができます。
- Product は、その Product 内の API グループをどの種類の Consumer に公開するかに影響します。
:::

## 4. Product から API を外す

1. **Product Management** で **Product** > **Register API** を選択します。

[![Userguide FPT API Management 12](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)](/img/migrated/Userguide-FPT-API-Management-12-1024x538-a6a0d5d9.png)

2. **Product** から外す API を選択し、**Remove** を選択します。

[![Userguide FPT API Management 44](/img/migrated/Userguide-FPT-API-Management-44-1024x538-ce6ff282.png)](/img/migrated/Userguide-FPT-API-Management-44-1024x538-ce6ff282.png)

3. **Yes** を選択して確認します。

[![Userguide FPT API Management 45](/img/migrated/Userguide-FPT-API-Management-45-426f4f56.png)](/img/migrated/Userguide-FPT-API-Management-45-426f4f56.png)

## 5. Product の削除

**Product** を削除するには、対象の **Product** に **REST API** が割り当てられていないことを確認してください。「**Product から API を外す**」の手順に従って API を削除してください。

1. **Product Management** で削除する **Product** を選択し、**Remove product** を選択します。

[![Userguide FPT API Management 46](/img/migrated/Userguide-FPT-API-Management-46-1024x538-da46540b.png)](/img/migrated/Userguide-FPT-API-Management-46-1024x538-da46540b.png)

2. 確認ポップアップで **Yes** を選択して削除を実行します。

[![Userguide FPT API Management 45](/img/migrated/Userguide-FPT-API-Management-45-426f4f56.png)](/img/migrated/Userguide-FPT-API-Management-45-426f4f56.png)

:::note
エラー **「Could not remove that product as there are still API in the product!」** が表示された場合は、先に Product 内のすべての API を削除してください。
:::
