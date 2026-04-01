---
id: "create-topics"
title: "topic の作成"
description: "FPT Message Bus で新しい topic を作成します。"
sidebar_label: "topic の作成"
sidebar_position: 10
---

# topic の作成

topic は publish/subscribe モデルを使ったメッセージ配信チャネルです。topic を作成した後、subscription を追加することで複数の consumer が同じメッセージを受信できるようになります。

1. **Application** メニューから **Topics** > **Create** に移動します。

   [![Create ボタンが表示された topic 一覧画面](/img/migrated/topic_create_1-b68393ff.png)](/img/migrated/topic_create_1-b68393ff.png)

2. topic の **Name**（必須）を入力します。

   [![必須の Name フィールドを含む topic 作成フォーム](/img/migrated/topic_create_2-3b5d7015.png)](/img/migrated/topic_create_2-3b5d7015.png)

3. **OK** をクリックして topic を作成します。

:::note
topic 名は `t.TOPIC_NAME` の命名規則に従います。
:::
