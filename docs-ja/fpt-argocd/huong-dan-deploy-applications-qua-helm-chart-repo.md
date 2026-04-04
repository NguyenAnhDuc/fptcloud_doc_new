---
id: "huong-dan-deploy-applications-qua-helm-chart-repo"
title: "Helmチャートリポジトリを使用してアプリケーションをデプロイする"
description: "HelmチャートリポジトリでArgoCDにアプリケーションをデプロイする方法"
sidebar_label: "Helmチャートリポジトリでデプロイ"
sidebar_position: "47"
---

# Helmチャートリポジトリを使用してアプリケーションをデプロイする

**ステップ1:** Helmチャートリポジトリを設定します。パブリックHelmチャートの場合、リポジトリ設定は不要な場合があります。ただし、プライベートHelmチャートの場合は、ArgoCDがデプロイリポジトリにアクセスできるようにHelmリポジトリを設定する必要があります。

例: xplatのHelmリポジトリをArgoCDに追加します。

[![](/img/migrated/Picture17-3-cbd4241f.png)](/img/migrated/Picture17-3-cbd4241f.png)

リポジトリの設定成功後の結果:

[![](/img/migrated/Picture18-3-f2c9fb5e.png)](/img/migrated/Picture18-3-f2c9fb5e.png)

**ステップ2:** cert-managerチャートをデプロイするApplicationを作成します。

[![](/img/migrated/Picture19-3-47801cfa.png)](/img/migrated/Picture19-3-47801cfa.png)

[![](/img/migrated/Picture20-3-92fd4474.png)](/img/migrated/Picture20-3-92fd4474.png)

[![](/img/migrated/Picture21-3-59520a91.png)](/img/migrated/Picture21-3-59520a91.png)

アプリケーションデプロイ後の結果:

[![](/img/migrated/Picture22-2-ef9ddebf.png)](/img/migrated/Picture22-2-ef9ddebf.png)

k8sクラスター上のデプロイ結果を確認します:

[![](/img/migrated/Picture23-2-b618fe2a.png)](/img/migrated/Picture23-2-b618fe2a.png)

:::note
Helmチャートを使用してアプリケーションをデプロイする場合、ArgoCDはチャートファイルを取得してmanifestとしてデプロイします。そのため、k8sクラスターでHelmチャートの一覧を表示してもデプロイしたチャートは表示されません。
:::

[![](/img/migrated/Picture24-2-5310f476.png)](/img/migrated/Picture24-2-5310f476.png)
