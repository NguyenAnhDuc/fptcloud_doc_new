---
id: "disable-cluster-autoscale"
title: "Cluster Autoscale の無効化"
description: "Managed FKE クラスターでCluster Autoscaleを無効化する方法を説明します。"
sidebar_label: "Cluster Autoscale の無効化"
sidebar_position: 15
draft: true
---

# Cluster Autoscale の無効化

**手順 1**: メニューで **Kubernetes** を選択します。**Kubernetes Management** ページが表示されます。Cluster Autoscale を無効化したい Cluster を選択します。

[![](/img/migrated/30-1-afd6524b.png)](/img/migrated/30-1-afd6524b.png)

**手順 2**: **Configure Worker Groups** をクリックします。

[![](/img/migrated/31-1-f850853b.png)](/img/migrated/31-1-f850853b.png)

**手順 3**: Worker の最小数と最大数を同じ値に調整します。

[![](/img/migrated/32-1-dd7a83a3.png)](/img/migrated/32-1-dd7a83a3.png)

:::note
Worker Pool の最小 Worker 数と最大 Worker 数が同じ場合、Cluster Autoscale 機能は自動的に無効化されます。
:::

**手順 4**: 情報を確認し、**Save** をクリックします。

[![](/img/migrated/33-1-ea1e7929.png)](/img/migrated/33-1-ea1e7929.png)
