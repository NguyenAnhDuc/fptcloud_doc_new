---
id: "thay-doi-profile-cho-group"
title: "GroupのProfileを変更する"
description: "FPT AutoscaleでAutoscale Groupが参照するProfileを変更するガイドです。"
sidebar_label: "GroupのProfileを変更する"
sidebar_position: 4
---

# GroupのProfileを変更する

## ステップ1: Autoscaling > Autoscale Groupページに移動します。Profileを変更したいGroupの行で**Action menu**アイコンをクリックします。

[![open group action menu](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

## ステップ2: メニューで**Update profile**を選択します。

[![update profile menu option](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

## ステップ3: Groupの新しいProfileを選択し、**Update**をクリックします。

[![update profile dialog](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

- **Current profile**: Groupが現在参照しているProfile。
- **Change to**: Groupに適用する新しいProfileを選択します。

:::note
新しく作成されたNodeのみが新しいProfileを参照します。既存のNodeは引き続き古いProfileを参照します。Groupは常に1つのProfileのみを参照しますが、Group内のNodeは異なるProfileを参照することがあります。
:::
