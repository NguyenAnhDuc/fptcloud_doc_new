---
id: "huong-dan-cau-hinh-argocd-cluster-de-deploy-ung-dung-voi-manifes"
title: "manifestを使用してアプリケーションをデプロイする"
description: "ArgoCD クラスターをmanifestファイルでアプリケーションをデプロイするよう設定する方法"
sidebar_label: "manifestでアプリケーションをデプロイ"
sidebar_position: "44"
---

# manifestを使用してアプリケーションをデプロイする

**ステップ1:** クラスターを追加します（この手順はドキュメントで説明されています）。

**ステップ2:** アプリケーションをデプロイするmanifestを含むリポジトリを準備します。

**例:** deploymentとserviceファイルを持つアプリケーションをデプロイするmanifestを使用します:

[![](/img/migrated/Picture75-2-31e0e130.png)](/img/migrated/Picture75-2-31e0e130.png)

[![](/img/migrated/Picture76-2-2d55c192.png)](/img/migrated/Picture76-2-2d55c192.png)

**ステップ3:** リポジトリを設定します。

  * **Settings** > **Repository** に移動します:

[![](/img/migrated/Picture77-2-25744da2.png)](/img/migrated/Picture77-2-25744da2.png)

  * 新しいリポジトリを追加します:

[![](/img/migrated/Picture78-2-548ab240.png)](/img/migrated/Picture78-2-548ab240.png)

  * ArgoCDに追加されたリポジトリのステータスを確認します:

[![](/img/migrated/Picture79-2-5cfd1e45.png)](/img/migrated/Picture79-2-5cfd1e45.png)

**ステップ4:** アプリケーションをデプロイするApplicationを作成します。

  * **Application** > **NEW APP** メニューに移動します:

[![](/img/migrated/Picture80-2-9e02e9e0.png)](/img/migrated/Picture80-2-9e02e9e0.png)

  * Applicationを作成するための情報を入力します:

[![](/img/migrated/Picture81-2-9a2e22b5.png)](/img/migrated/Picture81-2-9a2e22b5.png)

[![](/img/migrated/Picture82-2-426ba565.png)](/img/migrated/Picture82-2-426ba565.png)

  * **Create** をクリックして **Application** を作成します。

Application作成後の結果:

[![](/img/migrated/Picture83-2-d51b08f7.png)](/img/migrated/Picture83-2-d51b08f7.png)
