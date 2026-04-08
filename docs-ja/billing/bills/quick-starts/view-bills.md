---
id: "view-bills"
title: "請求期間別の請求照合を確認する"
description: "FPT Cloud Portalで請求期間別の照合データを確認する手順です。"
sidebar_label: "請求期間別の請求照合を確認する"
sidebar_position: 1
---

# 請求期間別の請求照合を確認する

:::note
請求データを確認するには、Tenant Ownerロール、または**view billing**権限を持つロールでログインする必要があります。権限の設定方法については、[billing権限の設定](billing-permission.md)をご参照ください。
:::

以下の手順で操作してください。

1. メニューバーで **Billing** > **Bills** を選択し、確認したい請求期間（period）、contract、invoiceを順に選択します。

   :::note
   同一Tenant内のProject/VPCやリソースを複数のbilling groupに分けて支払いを管理している場合、billing groupの数に応じた照合エントリが表示されます。
   :::

   [![請求期間の選択画面](/img/migrated/image-1744088467596-ab857222.png)](/img/migrated/image-1744088467596-ab857222.png)

2. 照合画面では、以下の情報を確認できます。

   - **Account name** – 会社名
   - **Tax code** – 税務識別番号
   - **Company address** – 会社の登録住所
   - **Billing period** – 請求期間の開始日と終了日
   - **Last updated** – データの最終更新日時
   - **Invoice status** – 照合のステータス（3種類）:
     - **Draft** – 暫定の照合データ。請求書発行前の確定前データです
     - **Invoiced** – 照合が確認され、請求書が正常に発行された状態
     - **Cancelled** – 照合がキャンセルされ、請求書は発行されない状態
   - **Grand total** – 最終更新時点でのVAT前の合計金額

3. [Charges by service](view-bill-charges-by-service.md)タブでサービス別の詳細を確認するか、[Charges by resource](view-bill-charges-by-resource.md)タブでリソース別の詳細を確認できます。
