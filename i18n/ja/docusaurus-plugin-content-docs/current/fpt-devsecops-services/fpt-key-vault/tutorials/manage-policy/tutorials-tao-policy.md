---
id: "tutorials-tao-policy"
title: "Policyを作成する"
description: "Secretアクセスをコントロールする新しいPolicyを作成する方法"
sidebar_label: "Policyを作成する"
sidebar_position: "9"
---

# Policyを作成する

PolicyはVault内のSecretパスへのアクセスルールを定義します。Policyを使用して、どのユーザーまたはアプリケーションがSecretの読み取り、書き込み、削除を行えるかを制御します。

1. **Key Vault Management** で **Policy** を追加する **Key Vault** を選択します。

   [![Key Vault Management一覧画面](/img/migrated/Userguide-FPT-KeyVault-2022-4-1024x538-3dcfc356.png)](/img/migrated/Userguide-FPT-KeyVault-2022-4-1024x538-3dcfc356.png)

2. **Policies** タブを開き、**Create** をクリックします。

   [![Createボタンが表示されたPoliciesタブ](/img/migrated/Userguide-FPT-KeyVault-2022-18-1024x538-c0e5b589.png)](/img/migrated/Userguide-FPT-KeyVault-2022-18-1024x538-c0e5b589.png)

3. **Create New Policy** 画面で必要な情報を入力します:

   - **Name**: **Policy** の名前。
   - **Rule**: ユーザーまたはアプリケーションがアクセスできるSecretパスを記述します。

   [![NameとRuleフィールドが表示されたCreate New Policyフォーム](/img/migrated/Userguide-FPT-KeyVault-2022-19-2cd1b5bd.png)](/img/migrated/Userguide-FPT-KeyVault-2022-19-2cd1b5bd.png)

4. **Create** をクリックして完了します。システムが確認メッセージを送信し、新しい **Policy** を作成します。

   [![作成成功後のPolicy一覧](/img/migrated/Userguide-FPT-KeyVault-2022-20-1024x538-0f781649.png)](/img/migrated/Userguide-FPT-KeyVault-2022-20-1024x538-0f781649.png)
