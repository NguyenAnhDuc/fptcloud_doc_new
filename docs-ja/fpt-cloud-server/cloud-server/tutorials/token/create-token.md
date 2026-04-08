---
id: "create-token"
title: "Tokenの作成"
description: "FPT Cloud Portalで認証Tokenを作成する手順"
sidebar_label: "Tokenの作成"
sidebar_position: "3"
---

# 新規Tokenの作成

認証Tokenを使用することで、パスワードを使わずにFPT CloudのAPIおよびサービスにアクセスできます。各Tokenには固定の有効期限があり、作成後に一度だけ表示されます。作成直後に必ずTokenをコピーして保存してください。

1. FPT Cloud Portalで**Token**ページにアクセスし、**Create token**を選択します。

   [![Create tokenボタンが表示されたTokenページ](/img/migrated/image-1731024975251-9874a41d.png)](/img/migrated/image-1731024975251-9874a41d.png)

2. 必要な情報を入力します。
   - **Token名**: 最大50文字。英字、数字、`-`、`_`、`.`およびスペースを使用可能。重複した名前も許可されます。
   - **有効期限**: システムが提供するリストから有効期限を選択します。

   [![Token名と有効期限フィールドが表示されたToken作成フォーム](/img/migrated/image-1731024985103-48bcc2ab.png)](/img/migrated/image-1731024985103-48bcc2ab.png)

3. **Create**を押してTokenを作成します。

4. システムがTokenを生成し、画面に表示します。**Done**を押す前にTokenをすぐにコピーしてください。

   [![コピーボタンが表示された作成済みTokenの画面](/img/migrated/image-1731024996987-252d326d.png)](/img/migrated/image-1731024996987-252d326d.png)

   [![Tokenのコピー完了確認画面](/img/migrated/image-1731025005016-e209b46c.png)](/img/migrated/image-1731025005016-e209b46c.png)

:::warning
**Done**を押すと、システムはウィンドウを閉じ、Tokenを再度確認することはできません。FPT Cloud Portalはお客様のTokenを保存しません。
:::
