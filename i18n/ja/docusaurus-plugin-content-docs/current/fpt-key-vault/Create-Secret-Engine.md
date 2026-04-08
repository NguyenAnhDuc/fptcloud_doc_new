---
id: "Create-Secret-Engine"
title: "Secret Engineを作成する"
description: "Vault Instance内にSecret Engineを新規作成する方法"
sidebar_label: "Secret Engineを作成する"
sidebar_position: 5
draft: true
---

# Secret Engineを作成する

Secret EngineはVault内でSecretを保存・管理するコンポーネントです。各Secret Engineは固有のマウントポイントを持ち、Key/Value形式の複数のSecretを格納できます。

1. Key Vault Management画面でSecret Engineを追加するKey Vaultを選択します。

   [![Key Vault Management一覧画面](/img/migrated/k4-f8a70872.png)](/img/migrated/k4-f8a70872.png)

2. **Secrets** タブで **Create** をクリックします。

   [![Createボタンが表示されたSecretsタブ](/img/migrated/k5-88a87dd9.png)](/img/migrated/k5-88a87dd9.png)

3. **Create New Secret Engine** ポップアップで必要な情報を入力します。

   [![Create New Secret Engineフォーム](/img/migrated/k6-60939da2.png)](/img/migrated/k6-60939da2.png)

4. **Create** をクリックして続行します。システムがリソース要件を確認し、確認メッセージを送信後、入力した情報に基づいて新しい **Secret Engine** を作成します。

   [![新しく作成されたEngineが表示されたSecret Engine一覧](/img/migrated/k7-a3bd99d0.png)](/img/migrated/k7-a3bd99d0.png)
