---
id: "tutorials-xoa-secret"
title: "Secretを削除する"
description: "使用しなくなった、または期限切れのSecretを削除する方法"
sidebar_label: "Secretを削除する"
sidebar_position: "8"
---

# Secretを削除する

不要になった機密情報や有効期限が切れたSecretを削除します。この操作はVaultをクリーンかつセキュアに保つために役立ちます。

:::danger
Secretの削除は取り消しできません。Secretのすべてのバージョンが完全に削除されます。実行前に必要な情報をバックアップしてください。
:::

1. **Secret Engine Detail** で削除する **Secret** が含まれる **Secret Engine** を選択します。

   [![Secret Engine詳細画面](/img/migrated/Userguide-FPT-KeyVault-2022-10-1024x538-794c4794.png)](/img/migrated/Userguide-FPT-KeyVault-2022-10-1024x538-794c4794.png)

2. 削除する **Secret** を選択します。

   [![Secret Engine内のSecret一覧](/img/migrated/Userguide-FPT-KeyVault-2022-14-1024x538-d907beb1.png)](/img/migrated/Userguide-FPT-KeyVault-2022-14-1024x538-d907beb1.png)

3. **Edit Secret** 画面で **Delete** をクリックしてSecretを削除します。表示されるダイアログで確認します。

   [![Deleteボタンが表示されたEdit Secret画面](/img/migrated/Userguide-FPT-KeyVault-2022-15-d8251b2f.png)](/img/migrated/Userguide-FPT-KeyVault-2022-15-d8251b2f.png)
