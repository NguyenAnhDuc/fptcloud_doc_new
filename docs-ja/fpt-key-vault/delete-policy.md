---
id: "Delete-Policy"
title: "Policyを削除する"
description: "使用しなくなったPolicyを削除する方法"
sidebar_label: "Policyを削除する"
sidebar_position: 13
---

# Policyを削除する

アクセスルールが不要になったPolicyを削除します。削除前に、このPolicyが現在アクティブなRoleに割り当てられていないことを確認してください。

:::danger
Policyの削除は取り消しできません。このPolicyが割り当てられているRoleは、対応するアクセス権限を失います。
:::

1. Key Vault Management画面で削除するPolicyが含まれるKey Vaultを選択します。

2. **Policies** タブで削除するPolicyのActionメニューから **Delete** をクリックします。

   [![ActionメニューにDeleteオプションが表示されたPolicy一覧](/img/migrated/policy-2-b412ee81.png)](/img/migrated/policy-2-b412ee81.png)

3. **Delete** をクリックして削除を確認します。

   [![削除確認ダイアログ](/img/migrated/policy-3-201d226a.png)](/img/migrated/policy-3-201d226a.png)
