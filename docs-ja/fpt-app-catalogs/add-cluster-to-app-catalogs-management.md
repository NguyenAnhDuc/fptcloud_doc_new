---
id: "add-cluster-to-app-catalogs-management"
title: "クラスターを App Catalogs Management に追加する"
description: "アプリケーションをデプロイするために Kubernetes クラスターを App Catalogs Management に接続する手順。"
sidebar_label: "クラスターを App Catalogs Management に追加する"
sidebar_position: 5
---

# クラスターを App Catalogs Management に追加する

App Catalogs Management を通じてアプリケーションをデプロイするには、アプリがデプロイされる Kubernetes クラスターを接続する必要があります。FPT Cloud はポータルインターフェースからのクラスター接続をサポートしています。

1. アプリをデプロイする Kubernetes クラスターを準備します。クラスターの接続には kubeconfig が必要です。

2. **Management Cluster** メニューから **Connect Cluster** を選択します。

   [![Connect Cluster オプション](/img/migrated/Picture9-1-12077ac5.png)](/img/migrated/Picture9-1-12077ac5.png)

3. クラスター接続に必要な情報を入力します。

   [![クラスター接続フォーム](/img/migrated/Picture10-1-44a26315.png)](/img/migrated/Picture10-1-44a26315.png)

   :::note
   Kubernetes クラスターへの接続情報には管理者権限が必要です。
   :::

4. **Connect Cluster** ボタンをクリックして完了します。

5. 接続された Kubernetes クラスターの情報を確認します。

   [![接続済みクラスター情報](/img/migrated/Picture11-1-e7ad5362.png)](/img/migrated/Picture11-1-e7ad5362.png)
