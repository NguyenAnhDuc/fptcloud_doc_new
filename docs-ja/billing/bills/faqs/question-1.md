---
id: "question-1"
title: "請求書が表示されないのはなぜですか？"
description: "FPT Cloud PortalでBillingモジュールが表示されない場合のトラブルシューティングガイドです。"
sidebar_label: "請求書が表示されないのはなぜですか？"
sidebar_position: 1
---

# 請求書が表示されないのはなぜですか？

BillingモジュールおよびBills機能が表示されない原因として、以下の3つのケースが考えられます。

**1. アカウントにTenant Ownerロールがあるが、請求データが空の場合**

FCI Sale Supportに連絡してサービス料金の設定とPortalへの照合データ表示の対応を依頼してください。

**2. アカウントにTenant Ownerロールがない場合**

組織内のTenant Owner権限を持つ担当者に、IAM billing権限の付与を依頼してください。手順については[billing閲覧権限の設定](billing-permission.md)をご参照ください。

**3. アカウントに十分なbilling閲覧権限があるがデータが表示されない場合**

現在選択しているprojectとregionを確認してください。デフォルトのprojectと請求対象リソースのあるregionに切り替えてお試しください。解決しない場合は、FCIサポートにお問い合わせください。
