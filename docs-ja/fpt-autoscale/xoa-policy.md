---
id: "xoa-policy"
title: "Policyの削除"
description: "FPT AutoscaleでAutoscale Policyを削除するガイドです。"
sidebar_label: "Policyの削除"
sidebar_position: 17
pagination_next: null
---

# Policyの削除

## ステップ1: Autoscaling > Autoscale Policyページに移動します。削除したいPolicyの行で**Delete**アイコンをクリックします。

[![delete policy](/img/migrated/Screenshot-2024-10-02-071116-37f91343.png)](/img/migrated/Screenshot-2024-10-02-071116-37f91343.png)

## ステップ2: 確認ダイアログが表示されます。Policy名が正しければ、**Delete policy**をクリックして確定します。操作を中止するには**Cancel**をクリックします。

[![delete policy confirmation dialog](/img/migrated/Screenshot-2024-10-02-071213-f062f4ca.png)](/img/migrated/Screenshot-2024-10-02-071213-f062f4ca.png)

:::warning
以下のエラーメッセージが表示された場合：

[![delete policy failed because still linked to a group](/img/migrated/Screenshot-2024-10-02-071245-ee662fd2.png)](/img/migrated/Screenshot-2024-10-02-071245-ee662fd2.png)

PolicyはAutoscale Groupに関連付けられています。Policyを削除する前に、すべてのGroupからDetachが完了していることを確認してください。
:::
