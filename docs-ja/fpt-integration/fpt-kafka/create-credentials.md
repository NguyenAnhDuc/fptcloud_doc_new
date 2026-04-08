---
id: "create-credentials"
title: "credentialの作成"
description: "FPT Kafka接続用のcredentialを作成する方法。"
sidebar_label: "credentialの作成"
sidebar_position: 10
---

# credentialの作成

credentialは、アプリケーションがSASL/SCRAM-SHA-256でKafka Serviceに接続するために使用する認証情報（username/password）を提供します。ACLの設定やアプリケーションからの接続前にcredentialを作成する必要があります。

1. メニューから**Application** > **Credentials**に移動し、**Create**をクリックします。
2. 必要な情報を入力します：
   - **Username**（必須）
   - **Password**（必須）

   [![usernameとpasswordフィールドを含む新規credential作成フォーム](/img/migrated/Pic1_Taocre-e9963007.png)](/img/migrated/Pic1_Taocre-e9963007.png)

3. **OK**をクリックしてcredentialを作成します。

:::note
システムが初期パスワードを自動生成します。必要に応じてパスワードをリセットできます。credential名は**`[prefix].[credential name]`**の形式に従う必要があります。
:::
