---
id: "enable-cluster-autoscale"
title: "Cluster Autoscale の有効化"
description: "Managed FKE クラスターでCluster Autoscaleを有効化する方法を説明します。"
sidebar_label: "Cluster Autoscale の有効化"
sidebar_position: 14
---

# Cluster Autoscale の有効化

**手順 1**: メニューで **Kubernetes** を選択します。**Kubernetes Management** ページが表示されます。Cluster Autoscale を有効化したい Cluster を選択します。

[![](/img/migrated/27-1-baec35bd.png)](/img/migrated/27-1-baec35bd.png)

**手順 2**: **Configure Worker Groups** をクリックします。

[![](/img/migrated/28-1-b4b32aec.png)](/img/migrated/28-1-b4b32aec.png)

**手順 3**: 選択したサイジングに基づいて Worker の最小数と最大数を調整します。

[![](/img/migrated/29-1-67174b85.png)](/img/migrated/29-1-67174b85.png)

:::note
最大 Worker 数が最小 Worker 数より大きい場合、Cluster Autoscale 機能は自動的に有効化されます。
:::

**手順 4**: 情報を確認し、**Save** をクリックして Cluster Autoscale 機能を有効化します。
