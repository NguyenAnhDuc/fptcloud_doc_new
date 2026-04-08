---
id: "lay-thong-tin-truy-cap-cluster"
title: "cluster アクセス情報の取得"
description: "Managed FPT Kubernetes Engine の cluster にアクセスするための kubeconfig ファイルをダウンロードする方法。"
sidebar_label: "cluster アクセス情報の取得"
sidebar_position: "7"
---

# cluster アクセス情報の取得

**ステップ 1:** メニューから **Kubernetes** を選択して **Kubernetes Management** ページを開きます。アクセス情報を取得したい cluster を選択します。
[![](/img/migrated/Picture13-81dbf0a6.png)](/img/migrated/Picture13-81dbf0a6.png)

**ステップ 2:** **Essential Properties** > **Cluster Information** > **Configuration** セクションで、kubectl またはその他のツールを使用して cluster にログインするための kubeconfig ファイルをダウンロードします。
[![](/img/migrated/Picture14-513c6f7b.png)](/img/migrated/Picture14-513c6f7b.png)

ヒント: M-FKE は native Kubernetes を使用しているため、通常の Kubernetes Cluster と同様に kubectl や dashboard などのツールで cluster を利用できます。
