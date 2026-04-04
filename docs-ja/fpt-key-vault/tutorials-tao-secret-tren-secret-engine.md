---
id: "tutorials-tao-secret-tren-secret-engine"
title: "Secret EngineにSecretを作成する"
description: "Secret Engine内にSecretを新規作成する方法"
sidebar_label: "Secret EngineにSecretを作成する"
sidebar_position: "6"
---

# Secret EngineにSecretを作成する

SecretはSecret Engine内でKey/Valueペアとして機密情報を保存する単位です。各SecretはKey/Valueペアを複数格納でき、バージョニングをサポートしているため変更履歴を追跡できます。

1. **Secret Engine Detail** で **Secret** を追加する **Secret Engine** を選択します。

   [![Secret Engine詳細画面](/img/migrated/Userguide-FPT-KeyVault-2022-10-1024x538-794c4794.png)](/img/migrated/Userguide-FPT-KeyVault-2022-10-1024x538-794c4794.png)

2. **Create** をクリックします。

   [![Createボタンが表示されたSecret一覧](/img/migrated/Userguide-FPT-KeyVault-2022-11-1024x538-5970f818.png)](/img/migrated/Userguide-FPT-KeyVault-2022-11-1024x538-5970f818.png)

3. **Create New Version** 画面で必要な情報を入力します:

   - **Name**: **Secret** の名前。
   - **Secret data**: Key/Value形式。

   [![NameとSecret dataフィールドが表示されたCreate New Secretフォーム](/img/migrated/Userguide-FPT-KeyVault-2022-12-bea1cf7c.png)](/img/migrated/Userguide-FPT-KeyVault-2022-12-bea1cf7c.png)

4. **Add** をクリックして各Key/Valueペアを追加します。すべてのSecretを入力したら **Create** をクリックして保存します。システムが確認メッセージを送信し、新しい **Secret** を作成します。

   [![作成成功後のSecret一覧](/img/migrated/Userguide-FPT-KeyVault-2022-13-da5b58e1.png)](/img/migrated/Userguide-FPT-KeyVault-2022-13-da5b58e1.png)
