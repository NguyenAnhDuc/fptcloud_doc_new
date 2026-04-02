---
id: "xoa-profile"
title: "Profileの削除"
description: "FPT AutoscaleでAutoscale Profileを削除するガイドです。"
sidebar_label: "Profileの削除"
sidebar_position: 5
pagination_next: null
---

# Profileの削除

## ステップ1: Autoscaling > Autoscale Profileページに移動します。削除したいProfileの行で**Delete**アイコンをクリックします。

[![delete profile](/img/migrated/Screenshot-2024-10-01-171413-fec288a5.png)](/img/migrated/Screenshot-2024-10-01-171413-fec288a5.png)

## ステップ2: 確認ダイアログが表示されます。Profile名が正しければ、**Delete profile**をクリックして確定します。操作を中止するには**Cancel**をクリックします。

[![delete profile confirmation dialog](/img/migrated/Screenshot-2024-10-01-171633-abcf343f.png)](/img/migrated/Screenshot-2024-10-01-171633-abcf343f.png)

:::warning
以下のエラーメッセージが表示された場合：

[![delete profile failed because still linked to a group](/img/migrated/Screenshot-2024-10-01-174412-8d122a6f.png)](/img/migrated/Screenshot-2024-10-01-174412-8d122a6f.png)

ProfileはAutoscale GroupまたはInstance Nodeによって参照されています。Profileを削除する前に、関連するすべてのオブジェクトを削除してください。
:::
