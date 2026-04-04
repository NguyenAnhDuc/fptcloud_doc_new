---
id: "revoke-token"
title: "Tokenの失効"
description: "FPT Cloud Portalで認証Tokenを失効させる手順"
sidebar_label: "Tokenの失効"
sidebar_position: "4"
---

# Tokenの失効

Tokenを失効させることで、Tokenが不要になったときや漏洩した場合にAPIアクセスを即座に無効化できます。確認後はこの操作を元に戻すことができません。

1. **Token**ページで、失効させたいTokenに対応する**Revoke**ボタンを押します。

   [![アクション列にRevokeボタンが表示されたToken一覧](/img/migrated/image-1731025026905-158de23e.png)](/img/migrated/image-1731025026905-158de23e.png)

2. 確認ダイアログでTokenの失効を確認します。

   [![Token失効の確認ダイアログ](/img/migrated/image-1731025048482-957c5ad2.png)](/img/migrated/image-1731025048482-957c5ad2.png)

3. システムが自動的にTokenを無効化します。Token一覧でTokenのステータスが**Revoked**に変わります。

   [![失効後にRevokedステータスが表示されたToken一覧](/img/migrated/image-1731025071939-e64b80bc.png)](/img/migrated/image-1731025071939-e64b80bc.png)

:::note
FPT Cloud Portalのアップグレード前に作成された古いTokenは失効をサポートしていません。これらのTokenのRevokeボタンにカーソルを合わせると、ツールチップ「Tokens created earlier cannot be revoked」が表示されます。
:::
