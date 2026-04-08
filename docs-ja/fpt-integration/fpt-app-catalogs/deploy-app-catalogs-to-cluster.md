---
id: "deploy-app-catalogs-to-cluster"
title: "クラスターへ App Catalog をデプロイする"
description: "検索したチャートを Kubernetes クラスターにデプロイする手順。"
sidebar_label: "クラスターへ App Catalog をデプロイする"
sidebar_position: 10
---

# クラスターへ App Catalog をデプロイする

デプロイしたいチャートを検索したら、以下の手順で Kubernetes クラスターにデプロイします。

1. **Deploy** をクリックして App Catalog のデプロイを開始します。

   [![Deploy ボタン](/img/migrated/Picture13-1-c7b08d31.png)](/img/migrated/Picture13-1-c7b08d31.png)

2. デプロイに必要な情報を入力します。各アプリには以下の情報が必要です。

   - **Release name**: チャートのデプロイに使用する名前。

     :::note
     Release name は各 namespace 上の各チャートで一意である必要があります。
     :::

   - **Versions**: デプロイに使用するチャートのバージョン。

     :::note
     アプリのバージョンと Kubernetes クラスターのバージョンの互換性を確認してください。
     :::

   - **Clusters**: Manage Clusters からクラスターを選択します。
   - **Namespace**: アプリをデプロイする namespace 名を入力します。namespace が Kubernetes クラスターに存在しない場合、チャートインストール時に自動的に作成されます。
   - **User Define Values**: デプロイ時に変更が必要な values を入力します。空の場合、アプリはデフォルト値でインストールされます。

   [![デプロイフォーム](/img/migrated/Picture14-1-42e55883.png)](/img/migrated/Picture14-1-42e55883.png)

3. **Install App** をクリックして完了します。デプロイ後、アプリは **Deployed Apps** セクションで管理されます。

   [![デプロイ済みアプリ一覧](/img/migrated/Picture15-1-0f840ff4.png)](/img/migrated/Picture15-1-0f840ff4.png)

4. クラスター上でデプロイされたアプリを確認します。

   - namespace にデプロイされたチャートを確認する:

     ```bash
     helm -n cert-manager list
     ```

     [![Helm list 結果](/img/migrated/Picture16-1-038b9b9f.png)](/img/migrated/Picture16-1-038b9b9f.png)

   - デプロイに使用された values を確認する:

     ```bash
     helm -n cert-manager get values cert-manager
     ```

     [![Helm values 結果](/img/migrated/Picture17-1-39cc0cef.png)](/img/migrated/Picture17-1-39cc0cef.png)

   - デプロイされた Pod と Service の状態を確認する:

     [![Pod と Service の状態](/img/migrated/Picture18-1-1a158bc4.png)](/img/migrated/Picture18-1-1a158bc4.png)
