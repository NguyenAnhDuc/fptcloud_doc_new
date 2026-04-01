---
id: "delete-credentials"
title: "credentialの削除"
description: "FPT Kafkaでcredentialを削除する方法。"
sidebar_label: "credentialの削除"
sidebar_position: 12
---

# credentialの削除

不要になったcredentialを削除してセキュリティリスクを軽減します。削除前に、このcredentialを使用しているACLやアプリケーションがないことを確認してください。

:::danger
credentialを削除すると、そのcredentialを使用しているすべてのアプリケーションの接続アクセスが即座に取り消されます。この操作は取り消せません。
:::

1. 削除するcredentialを選択し、**Remove**をクリックします。

   [![Removeボタンが表示されたcredentialリスト](/img/migrated/Pic1_XoaCre-4d7c6047.png)](/img/migrated/Pic1_XoaCre-4d7c6047.png)

2. 確認ダイアログで**Yes**をクリックして削除を確認します。

   [![credential削除の確認ダイアログ](/img/migrated/Pic2_remove-354c9e9d.png)](/img/migrated/Pic2_remove-354c9e9d.png)
