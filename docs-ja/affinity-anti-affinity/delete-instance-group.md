---
id: "delete-instance-group"
title: "Instance Groupの削除"
description: "FPT CloudでInstance Groupを削除するガイド。"
sidebar_label: "Instance Groupの削除"
sidebar_position: 5
---

# Instance Groupの削除

:::danger
この操作は元に戻せません。Instance Group を削除すると、割り当てられたすべての Instance から自動的に解除されます。
:::

1. **Instance Group Management** テーブルで、**Action** 列の **Delete** をクリックします。

   ![Instance Group ManagementテーブルのDeleteボタン](/img/migrated/image-1705025148984-2af9c584.png)

2. 確認ダイアログが表示されます。`delete` と入力し、**Delete Instance Group** をクリックします。

   ![Instance Group削除確認ダイアログ](/img/migrated/image-1705025187846-59abb769.png)

Instance Group は完全に削除されます。割り当てられていた Instance はすべて解放されます。
