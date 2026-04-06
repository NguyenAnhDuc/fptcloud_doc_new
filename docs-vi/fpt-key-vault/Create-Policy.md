---
id: "Create-Policy"
title: "Create Policy"
sidebar_label: "Create Policy"
sidebar_position: "12"
description: "Secretアクセスをコントロールする新しいPolicyを作成する方法"
---

# Create Policy

PolicyはVault内のSecretパスへのアクセスルールを定義します。Policyを使用して、どのユーザーまたはアプリケーションがSecretの読み取り、書き込み、削除を行えるかを制御します。

1. Key Vault Management画面でPolicyを追加するKey Vaultを選択します。

   [![Key Vault Management一覧画面](/img/migrated/a1-ead7c276.png)](/img/migrated/a1-ead7c276.png)

2. **Policies** タブで **Create** をクリックします。

   [![Createボタンが表示されたPoliciesタブ](/img/migrated/A2-a834177e.png)](/img/migrated/A2-a834177e.png)

3. **Create New Policy** ポップアップで必要な情報を入力します:

   - **Name**: Policyの名前。
   - **Rule**: ユーザーまたはアプリケーションがアクセスできるSecretパス。

   [![NameとRuleフィールドが表示されたCreate New Policyフォーム](/img/migrated/a3-a18630ac.png)](/img/migrated/a3-a18630ac.png)

4. **Create** をクリックして続行します。システムが確認メッセージを送信し、入力した情報に基づいて新しい **Policy** を作成します。
