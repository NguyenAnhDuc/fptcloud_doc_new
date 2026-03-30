---
id: "create-token"
title: "Token の作成"
description: "FPT Cloud 上で Terraform や API を使用するための新しい Token を作成します。"
sidebar_label: "Token の作成"
sidebar_position: 43
---

# Token の作成

Token を作成することで、Terraform または API を使用して FPT Cloud 上のリソースを管理する際に認証できます。

## Token の作成

1. **Token** ページで **Create token** をクリックします。

   [![Create token ボタンがある Token ページ](/img/migrated/image-1731024975251-9874a41d.png)](/img/migrated/image-1731024975251-9874a41d.png)

2. 必要事項を入力します。
   - **Token name**: 最大 50 文字（英字、数字、`-`、`_`、`.`、スペース使用可）。
   - **Expiry time**: リストから選択します。

   [![Create token ダイアログ](/img/migrated/image-1731024985103-48bcc2ab.png)](/img/migrated/image-1731024985103-48bcc2ab.png)

3. **Create** をクリックします。

4. システムが Token を表示します。コピーして安全な場所に保管してください。

   [![Token 作成完了](/img/migrated/image-1731024996987-252d326d.png)](/img/migrated/image-1731024996987-252d326d.png)

:::danger
Token は一度しか表示されません。**Done** をクリックした後は再表示できません。FPT Cloud Portal はお客様の Token を保存しません。
:::

## 次のステップ

- [Token の失効](./revoke-token.md)
