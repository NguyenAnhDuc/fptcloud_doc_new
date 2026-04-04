---
id: "tutorials-xoa-secret-engine"
title: "Secret Engineを削除する"
description: "使用しなくなったSecret Engineを削除する方法"
sidebar_label: "Secret Engineを削除する"
sidebar_position: "5"
---

# Secret Engineを削除する

不要になったSecret Engineを削除してリソースを解放します。この操作により、Secret Engine内に保存されているすべてのSecretが削除されます。

:::danger
Secret Engineの削除は取り消しできません。内部のすべてのSecretが完全に削除されます。実行前に必要な情報をバックアップしてください。
:::

1. **Key Vault Management** で削除する **Secret Engine** が含まれる **Key Vault** を選択します。

   [![Key Vault Management一覧画面](/img/migrated/Userguide-FPT-KeyVault-2022-4-1024x538-3dcfc356.png)](/img/migrated/Userguide-FPT-KeyVault-2022-4-1024x538-3dcfc356.png)

2. **Secret** タブで削除する **Secret Engine** のActionメニューから **Delete** をクリックします。

   [![ActionメニューにDeleteオプションが表示されたSecret Engine一覧](/img/migrated/Userguide-FPT-KeyVault-2022-8-1024x385-60cfced4.png)](/img/migrated/Userguide-FPT-KeyVault-2022-8-1024x385-60cfced4.png)

3. 確認ダイアログが表示されます。**Delete** をクリックして **Secret Engine** の削除を確認します。

   [![Secret Engine削除確認ダイアログ](/img/migrated/Userguide-FPT-KeyVault-2022-9-b25853dd.png)](/img/migrated/Userguide-FPT-KeyVault-2022-9-b25853dd.png)
