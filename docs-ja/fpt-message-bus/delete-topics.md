---
id: "Delete-topics"
title: "topic の削除"
description: "FPT Message Bus で topic を削除します。"
sidebar_label: "topic の削除"
sidebar_position: 14
pagination_next: null
---

# topic の削除

topic を削除すると、その topic と登録されているすべての subscription が完全に削除されます。実行前に、その topic や subscription を使用しているアプリケーションがないことを確認してください。

:::danger
この操作は元に戻せません。topic 内のすべての subscription と未処理のメッセージが完全に失われます。
:::

1. **Application** メニューから **Topics** > 削除する topic を選択 > **Remove** に移動します。

   [![topic を選択して Remove ボタンをクリックした topic 一覧画面](/img/migrated/topic_delete_1-f1ebb7a9.png)](/img/migrated/topic_delete_1-f1ebb7a9.png)

2. **Confirmation** ダイアログが表示されます。**Yes** をクリックして削除を確定するか、**No** をクリックしてキャンセルします。

   [![Yes と No ボタンを含む削除確認ダイアログ](/img/migrated/topic_delete_2-5a1a6a8d.png)](/img/migrated/topic_delete_2-5a1a6a8d.png)
