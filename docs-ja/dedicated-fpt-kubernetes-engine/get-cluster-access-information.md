---
id: "get-cluster-access-information"
title: "cluster アクセス情報の取得"
description: "Kubernetes cluster のアクセス情報を取得する手順。"
sidebar_label: "cluster アクセス情報の取得"
sidebar_position: 7
---

# cluster アクセス情報の取得

1. メニューから **Kubernetes** を選択します。**Kubernetes Management** ページが表示されます。
[![](/img/migrated/Picture16-21cbb44f.png)](/img/migrated/Picture16-21cbb44f.png)
2. 一覧から情報を確認したい **Cluster** を選択します。
[![](/img/migrated/Picture17-4140b996.png)](/img/migrated/Picture17-4140b996.png)
3. **Essential Properties** タブ > **Cluster Information** > **Configuration** から、kubeconfig ファイルをダウンロードして kubectl 経由で cluster にログインできます。
[![](/img/migrated/Picture18-4fc4ea74.png)](/img/migrated/Picture18-4fc4ea74.png)
4. **API** セクションでは、**FPT Portal** に API URL の完全な情報が表示されます。**コピーアイコン** を選択してコピーします。
[![](/img/migrated/Picture19-4703b2d7.png)](/img/migrated/Picture19-4703b2d7.png)

FKE は Native Kubernetes を使用しているため、通常の Kubernetes cluster と同様に kubectl などのツールで cluster を操作できます。
