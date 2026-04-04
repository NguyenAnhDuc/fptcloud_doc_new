---
id: "create-role"
title: "Roleの作成と権限付与"
description: "FPT IAMで新しいCustom Roleを作成し、権限を付与する方法。"
sidebar_label: "Roleの作成と権限付与"
sidebar_position: "6"
---

# Roleの作成と権限付与

新しいCustom Roleを作成するには、以下の手順に従います。

1. **IAM** > **Roles** を選択し、**Create Role** をクリックします。

[![](/img/migrated/image-1734344082428-bbf19de4.png)](/img/migrated/image-1734344082428-bbf19de4.png)

2. **Create role** ページで必要な情報を入力します。

[![](/img/migrated/image-1734344107230-7ca36cf8.png)](/img/migrated/image-1734344107230-7ca36cf8.png)

   - **Name**: Role名（必須、最大100文字、英字・数字・アンダースコア・ハイフン・スペース・ドットのみ使用可、重複不可）。
   - **Description**: Roleの説明（任意）。
   - **Permissions**: 3つの要素で構成 — **Service type**（サービスの種類）、**Action**（アクション）、**Resource**（リソース）。

3. ドロップダウンリストから **Service type** を選択します。

[![](/img/migrated/image-1734344121975-fab6d10b.png)](/img/migrated/image-1734344121975-fab6d10b.png)

4. そのサービスのアクション一覧から **Action** を選択します。

[![](/img/migrated/image-1734344178335-9d6630c8.png)](/img/migrated/image-1734344178335-9d6630c8.png)

5. ユーザーがアクションを実行できる **Resource** を選択します。2つのオプションがあります：
   - **All**: テナント上のすべてのリソース（すべてのProjectおよびVPC）に権限を付与します。

[![](/img/migrated/image-1734344193185-d4cff5ca.png)](/img/migrated/image-1734344193185-d4cff5ca.png)

   - **Specific**: 特定のリソースに権限を付与します。仮想マシンの場合は個別のinstanceまで、その他のサービスはProjectまたはVPCレベルで権限を付与できます。

[![](/img/migrated/image-1734344207802-f7293df7.png)](/img/migrated/image-1734344207802-f7293df7.png)

[![](/img/migrated/image-1734344228919-7517e5bf.png)](/img/migrated/image-1734344228919-7517e5bf.png)

6. **Create** をクリックします。システムがRoleを作成し、結果を表示します。
