---
id: "billing-permission"
title: "billing閲覧権限の設定"
description: "FPT Cloud Portalでユーザーにbilling閲覧権限を付与する方法です。"
sidebar_label: "billing閲覧権限の設定"
sidebar_position: 6
---

# billing閲覧権限の設定

billingデータを閲覧するには、Tenant Owner（Super Admin）ロール、またはbilling権限を持つロールが必要です。

Tenant Ownerロールを持たないユーザーがbillingを閲覧する必要がある場合、Tenant Ownerが以下の手順でアクセス権限を付与できます。

1. Tenant Owner（Super Admin）権限を持つユーザーでFPT Cloud Consoleにログインします。**IAM** > **Roles** > **Create Role**ボタンをクリックします。

   [![Roles一覧画面](/img/migrated/image-1733807046462-52e42c98.png)](/img/migrated/image-1733807046462-52e42c98.png)

2. Create Role画面で**Name**フィールドにロール名を入力 > フィルターを使用して権限を選択 > **Type = billing**に設定 > 必要な権限を選択 > **Create**をクリックします。

   [![ロール名の入力](/img/migrated/image-1733807051725-b839d87f.png)](/img/migrated/image-1733807051725-b839d87f.png)
   [![billingタイプの選択](/img/migrated/image-1733807059640-9e09ce9c.png)](/img/migrated/image-1733807059640-9e09ce9c.png)
   [![billing権限の選択](/img/migrated/image-1733807063820-d4a99dea.png)](/img/migrated/image-1733807063820-d4a99dea.png)

3. IAMで**User Groups** > **Create user group**をクリックします。

   [![User Groups画面](/img/migrated/image-1733807067997-1c03291a.png)](/img/migrated/image-1733807067997-1c03291a.png)

4. Create user group画面で**Name**を入力 > 手順1〜2で作成したbillingロールを選択 > 権限を付与するユーザーを選択 > **Create user group**をクリックします。

   [![billingロールを持つUser Groupの作成](/img/migrated/image-1733807076636-9336da11.png)](/img/migrated/image-1733807076636-9336da11.png)
