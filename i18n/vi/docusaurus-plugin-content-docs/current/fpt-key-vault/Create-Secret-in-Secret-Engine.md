---
id: "Create-Secret-in-Secret-Engine"
title: "Create Secret In Secret Engine"
sidebar_label: "Create Secret In Secret Engine"
sidebar_position: "8"
description: "Secret Engine内にSecretを新規作成する方法"
draft: true
---

# Create Secret In Secret Engine

SecretはSecret Engine内でKey/Valueペアとして機密情報を保存する単位です。各SecretはバージョニングをサポートしているためKey/Valueペアを複数格納でき、変更履歴を追跡できます。

1. Secret Engine Management画面でSecretを追加するSecret Engineを選択する。

   [![Secret Engine Management画面](/img/migrated/k10-7b6554af.png)](/img/migrated/k10-7b6554af.png)

2. **Create**をクリックする。

   [![CreateボタンがあるSecret Engine詳細画面](/img/migrated/k23-ca7f1791.png)](/img/migrated/k23-ca7f1791.png)

3. **Create New Version**ポップアップで必要な情報を入力する:

   - **Name**: Secretの名前。
   - **Secret Data**: Key/Value形式のデータ。複数フィールドを追加できます。

   [![NameとSecret Dataフィールドが表示されたCreate New Versionフォーム](/img/migrated/k22-15c5ab18.png)](/img/migrated/k22-15c5ab18.png)

   [![複数のKey/Valueフィールドが入力されたSecret Data](/img/migrated/k24-c4c0a8a8.png)](/img/migrated/k24-c4c0a8a8.png)

4. **Create**をクリックして完了する。システムが確認メッセージを送信し、入力した情報に基づいて新しい**Secret**を作成します。
