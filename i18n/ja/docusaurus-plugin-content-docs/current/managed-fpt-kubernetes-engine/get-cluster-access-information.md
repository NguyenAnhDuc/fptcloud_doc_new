---
id: "get-cluster-access-information"
title: "cluster アクセス情報の取得"
description: "Managed FPT Kubernetes Engine の cluster にアクセスするための kubeconfig ファイルをダウンロードする方法。"
sidebar_label: "cluster アクセス情報の取得"
sidebar_position: "7"
draft: true
---

# cluster アクセス情報の取得

**ステップ 1:** メニューから **Kubernetes** を選択して **Kubernetes Management** ページを開きます。アクセス情報を取得したい cluster を選択します。

[![](/img/migrated/10-1b870f1f.png)](/img/migrated/10-1b870f1f.png)

**ステップ 2:** **Advanced Config** > **Configuration** セクションで、kubectl またはその他のツールを使用して cluster にログインするための `.kubeconfig` ファイルをダウンロードします。

[![](/img/migrated/11-fa42218b.png)](/img/migrated/11-fa42218b.png)

M-FKE は native Kubernetes を使用しているため、kubectl、dashboard ツール、その他の標準 Kubernetes ツールを使用して cluster を操作できます。
