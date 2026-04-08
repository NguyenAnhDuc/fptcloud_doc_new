---
id: "Delete-Secret-Engine"
title: "Secret Engineを削除する"
description: "使用しなくなったSecret Engineを削除する方法"
sidebar_label: "Secret Engineを削除する"
sidebar_position: 6
draft: true
---

# Secret Engineを削除する

不要になったSecret Engineを削除してリソースを解放します。この操作により、Secret Engine内に保存されているすべてのSecretが削除されます。

:::danger
Secret Engineの削除は取り消しできません。内部のすべてのSecretが完全に削除されます。実行前に必要な情報をバックアップしてください。
:::

1. Key Vault Management画面で削除する **Secret Engine** が含まれるKey Vaultを選択します。

   [![Key Vault Management一覧画面](/img/migrated/k4-f8a70872.png)](/img/migrated/k4-f8a70872.png)

2. **Secrets** タブで削除するSecret EngineのActionメニューから **Delete** をクリックします。

   [![ActionメニューにDeleteオプションが表示されたSecret Engine一覧](/img/migrated/k10-7b6554af.png)](/img/migrated/k10-7b6554af.png)

3. **Delete** をクリックして削除を確認します。

   [![削除確認ダイアログ](/img/migrated/k11-26e7c8cb.png)](/img/migrated/k11-26e7c8cb.png)
