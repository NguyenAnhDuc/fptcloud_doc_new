---
id: "add-cluster-to-argocd"
title: "Kubernetes clusterをArgoCDに接続します"
description: "アプリケーションデプロイのためにKubernetes clusterをArgoCD instanceに追加するガイド"
sidebar_label: "Kubernetes clusterを接続します"
sidebar_position: 6
---

# Kubernetes clusterをArgoCDに接続します

ArgoCDを通じてアプリケーションをデプロイするには、アプリケーションが実行されるKubernetes clusterを接続します。FPT CloudはArgoCD CLIではなくPortalインターフェースを通じたcluster追加をサポートしています。

1. **Cluster Managements**メニューで**Connect a Cluster**を選択します。

[![](/img/migrated/Picture62-af17013a.png)](/img/migrated/Picture62-af17013a.png)

2. Kubernetes clusterへの接続情報を入力します。この情報はkubeconfigファイルから取得します。

:::note
Kubernetes clusterの接続に使用する認証情報はadmin権限が必要です。
:::

   - **Cluster Name**（必須）: cluster名、例：`dev-env`、`prod-env`、`staging-env`
   - **Server**（必須）: kubeconfigファイルのAPI server URL、例：`https://api.xxxxx.fke.fptcloud.com:6443`
   - **CA Data**（必須）: kubeconfigファイルの`certificate-authority-data`フィールドの値
   - **Bearer Token**（必須）: kubeconfigファイルの`token`フィールドの値

[![](/img/migrated/Picture63-5914837a.png)](/img/migrated/Picture63-5914837a.png)

3. **Connector**をクリックして接続を完了します。

4. 接続されたcluster情報を確認します：
   - Portal上の情報：

[![](/img/migrated/Picture64-4e9e2808.png)](/img/migrated/Picture64-4e9e2808.png)

   - ArgoCD instanceで確認：**Settings** > **Clusters**に移動します：

[![](/img/migrated/Picture65-44537eba.png)](/img/migrated/Picture65-44537eba.png)

[![](/img/migrated/Picture66-40c67a44.png)](/img/migrated/Picture66-40c67a44.png)

   - cluster情報がArgoCD instanceに設定されています：

[![](/img/migrated/Picture67-00694a7c.png)](/img/migrated/Picture67-00694a7c.png)
