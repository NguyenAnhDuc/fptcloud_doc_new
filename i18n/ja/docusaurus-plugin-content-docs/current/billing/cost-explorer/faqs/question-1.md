---
id: "question-1"
title: "Cost Explorerが表示されない"
description: "Cost Explorerが表示されない場合の原因と対処法。"
sidebar_label: "Cost Explorerが表示されない"
sidebar_position: "4"
---

# Cost Explorerが表示されない

BillingモジュールおよびCost Explorer機能が表示されない原因として、以下の3つのケースが考えられます。

**1. アカウントにTenant Ownerロールがあるが、billingデータが空の場合**

FCI Sale Supportに連絡してサービス料金の設定とPortalへのbillingデータ表示の対応を依頼してください。

**2. アカウントにTenant Ownerロールがない場合**

組織内のTenant Owner権限を持つ担当者に、IAM権限の付与を依頼してください。手順については[billing閲覧権限の設定](/ja/docs/billing/)/をご参照ください。

**3. アカウントに十分なbilling閲覧権限があるがデータが表示されない場合**

現在選択しているProjectとRegionを確認してください。デフォルトのProjectと請求対象リソースのあるRegionに切り替えてお試しください。解決しない場合は、FCIサポートにお問い合わせください。
