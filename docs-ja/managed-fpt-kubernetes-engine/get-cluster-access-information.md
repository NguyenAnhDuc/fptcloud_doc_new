---
id: "lay-thong-tin-truy-cap-cluster"
title: "クラスターのアクセス情報の取得"
description: "Kubernetes Management ページでクラスターのアクセス情報を取得する手順を説明します。"
sidebar_label: "クラスターのアクセス情報の取得"
sidebar_position: 7
---

# クラスターのアクセス情報の取得

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。アクセス情報を取得したい **Cluster** を選択します。

[![](/img/migrated/Picture13-81dbf0a6.png)](/img/migrated/Picture13-81dbf0a6.png)

**ステップ 2:** **Essential Properties > Cluster Information > Configuration** セクションから kubeconfig ファイルをダウンロードして、kubectl やその他のツールで Cluster にログインできます。

[![](/img/migrated/Picture14-513c6f7b.png)](/img/migrated/Picture14-513c6f7b.png)

_ヒント: M-FKE はネイティブ Kubernetes を使用しているため、通常の Kubernetes Cluster と同様に kubectl やダッシュボードツールを使用してクラスターを操作できます。_
