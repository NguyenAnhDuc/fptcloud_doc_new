---
id: "delete-tag"
title: "タグの削除"
description: "タグを削除し、関連するすべてのリソースを解除します。この操作は元に戻せません。"
sidebar_label: "タグの削除"
sidebar_position: 3
---

# タグの削除

不要になったtagは、tagリストを整理するために削除できます。tagを削除すると、関連するすべてのリソースからtagが解除されます。

:::danger
tagを削除すると、すべてのリソースとの関連付けが解除されます。この操作は元に戻せません。
:::

## タグの削除手順

1. メニューから **Tagging** を選択し、削除するtagで **Actions** → **Delete** を選択します。

   [![DeleteオプションのあるActionsメニュー](/img/migrated/image-1740552377439-b880b0b2.png)](/img/migrated/image-1740552377439-b880b0b2.png)

2. 警告ダイアログにtag名と関連リソース数が表示されます。**Delete** をクリックして確認します。

   [![削除確認ダイアログ](/img/migrated/image-1740552393637-bac57f0d.png)](/img/migrated/image-1740552393637-bac57f0d.png)

システムがすべてのリソースとの関連付けを解除し、tagをリストから削除します。

## 次のステップ

- [タグの作成](./create-tag-new.md)
- [リソースのタグ管理](../tutorials/manage-tag-to-resource/resource-1.md)
