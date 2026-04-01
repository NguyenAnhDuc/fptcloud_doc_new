---
id: "registering-on-fpt-portal"
title: "FPT Portal での API Management サービス登録"
description: "FPT Portal での API Provider アカウント登録および API Management サービスの初期化ガイドです。"
sidebar_label: "FPT Portal でのサービス登録"
sidebar_position: 4
---

# FPT Portal での API Management サービス登録

:::note
**対象ユーザー:** API Provider
:::

1. **FPT Portal** のメニューで **Api Management** > **Create** を選択します。

[![Userguide FPT API Management 1](/img/migrated/Userguide-FPT-API-Management-1-1024x538-e900f9a0.png)](/img/migrated/Userguide-FPT-API-Management-1-1024x538-e900f9a0.png)

2. **Username** を入力し、**Plan** と **Pricing** を選択します。

[![Alt text](/img/migrated/Tao-WS-a7ec19be.png)](/img/migrated/Tao-WS-a7ec19be.png)

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
| **月額料金（税抜 VAT 10%）** | 6,200,000 VND | 15,000,000 VND | 35,900,000 VND |

3. **Create** を選択します。システムがサービスを初期化し、処理状況を通知します。

[![Userguide FPT API Management 3](/img/migrated/Userguide-FPT-API-Management-3-1024x258-824a2884.png)](/img/migrated/Userguide-FPT-API-Management-3-1024x258-824a2884.png)

初期化が完了すると、自動的に `console.apim.fptcloud.com/api-manager` の **ApiManager Application** 管理画面にリダイレクトされます。

[![Userguide FPT API Management 4](/img/migrated/Userguide-FPT-API-Management-4-1024x538-56046d89.png)](/img/migrated/Userguide-FPT-API-Management-4-1024x538-56046d89.png)

または **FPT Portal** にアクセスし、**API Management** の **Start** を選択して管理画面に入ることもできます。

[![Userguide FPT API Management 5](/img/migrated/Userguide-FPT-API-Management-5-1024x258-06e7b130.png)](/img/migrated/Userguide-FPT-API-Management-5-1024x258-06e7b130.png)
