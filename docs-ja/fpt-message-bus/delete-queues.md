---
id: "xoa-queues"
title: "queue の削除"
description: "FPT Message Bus で queue を削除します。"
sidebar_label: "queue の削除"
sidebar_position: 8
---

# queue の削除

queue を削除すると、その queue と未処理のメッセージがすべて完全に削除されます。実行前に、その queue を使用しているアプリケーションがないことを確認してください。

:::danger
この操作は元に戻せません。queue 内のすべてのメッセージが完全に失われます。
:::

1. **Application** メニューから **Queues** > 削除する queue を選択 > **Remove** に移動します。

   [![queue を選択して Remove ボタンをクリックした queue 一覧画面](/img/migrated/delete1-aa8577cc.png)](/img/migrated/delete1-aa8577cc.png)

2. **Confirmation** ダイアログが表示されます。**Yes** をクリックして削除を確定するか、**Cancel** をクリックしてキャンセルします。

   [![Yes と Cancel ボタンを含む削除確認ダイアログ](/img/migrated/delete2-3d5e084f.png)](/img/migrated/delete2-3d5e084f.png)
