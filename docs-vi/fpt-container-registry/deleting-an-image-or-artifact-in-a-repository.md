---
id: "deleting-an-image-or-artifact-in-a-repository"
title: "FPT Portal で repository を管理する"
description: "FPT Container Registry の repository を Portal から表示・管理する。"
sidebar_label: "Repository を管理する"
sidebar_position: "7"
---

# FPT Portal で repository を管理する

FPT Container Registry では、FPT Portal から直接すべての repository を管理できます。repository の一覧表示や、不要なイメージ・artifact の削除が可能です。

## Repository 一覧の表示

サイドバーメニューで **Container Registry** を選択します。**Repositories** タブに push 済みの repository が一覧表示されます。

[![FPT Portal の repository 一覧](/img/migrated/image08-1-a7d4f8c0.png)](/img/migrated/image08-1-a7d4f8c0.png)

## イメージまたは artifact の削除

ストレージ容量を解放したり、不要なイメージを削除したりする場合は以下の手順に従います。削除は元に戻せません。

:::danger
イメージ、artifact、または tag の削除は永続的であり、元に戻すことはできません。削除前にそのリソースが不要であることを確認してください。
:::

1. **Container Registry** ページで、イメージまたは artifact の **Actions** ドロップダウンを開き、**Delete** をクリックします。

   [![Actions から Delete を選択](/img/migrated/image09-1-8e031632.png)](/img/migrated/image09-1-8e031632.png)

2. 確認ポップアップで **Delete** をクリックして削除を確定します。

   [![削除確認ポップアップ](/img/migrated/image10-1-ee3a6545.png)](/img/migrated/image10-1-ee3a6545.png)
