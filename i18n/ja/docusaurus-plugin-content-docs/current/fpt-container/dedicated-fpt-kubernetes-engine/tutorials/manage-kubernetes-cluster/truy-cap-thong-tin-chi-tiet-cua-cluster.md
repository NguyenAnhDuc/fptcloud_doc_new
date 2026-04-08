---
id: "truy-cap-thong-tin-chi-tiet-cua-cluster"
title: "クラスターの詳細情報へのアクセス"
description: "Kubernetes クラスターの詳細情報（クラスター情報、ノードプール、高度な設定、インスタンス、アクティビティログ）を確認する方法を説明します。"
sidebar_label: "クラスター詳細情報へのアクセス"
sidebar_position: 4
---

# クラスターの詳細情報へのアクセス

**手順 1**: メニューで **Kubernetes** を選択します。**Kubernetes Management** ページが表示されます。

[![](/img/migrated/Picture7-b69d141d.png)](/img/migrated/Picture7-b69d141d.png)

**手順 2**: 一覧から詳細を確認したい **Cluster** を選択します。

[![](/img/migrated/Picture7-b69d141d.png)](/img/migrated/Picture7-b69d141d.png)

**手順 3**: タブを選択して対応する情報を確認します。

**3.1** **Essential Properties** タブ: Cluster Information、Load Balancer VIP、API の情報を表示します。
- **Cluster Information**: Cluster ID、Version、Kubernetes config、Status、Public IP、SSH Key などのクラスター基本情報を表示します。
- **Load Balancer VIP**: K8s API および Ingress に使用される LB の仮想 IP を表示します。
- **Dashboard & API**: API URL を表示します。

[![](/img/migrated/Picture9-8b474369.png)](/img/migrated/Picture9-8b474369.png)

**3.2** **Node Pools** タブ: **Master nodes** と **Worker nodes** を含むノード構成情報を表示します。
- **Master Configuration**: Master Node の数量、CPU、Memory、Disk の構成を表示します。
- **Worker Configuration**: Worker Node の数量、CPU、Memory、Disk、Storage Policy、Auto Scale の構成を表示します。

[![](/img/migrated/Picture10-46417cf4.png)](/img/migrated/Picture10-46417cf4.png)

**3.3** **Advanced** タブ: Kubernetes クラスターの高度なパラメーターを表示します。
- **Advanced Configuration**: Kubernetes クラスターの高度なパラメーター（Nodes DNS、Pod Network、Service Network、Network Node Prefix、Max Pod Per Node、Enable Custom Script）を表示します。
- **NFS Storage**: NFS Storage の Enable/Disable ステータスとディスク容量を表示します。

[![](/img/migrated/Picture11-9d760e59.png)](/img/migrated/Picture11-9d760e59.png)

**3.4** **Instances** タブ: 参照中の Kubernetes クラスターに属する **Master nodes** と **Worker nodes** を含む仮想マシンを表示します。

[![](/img/migrated/Picture12-d65d4424.png)](/img/migrated/Picture12-d65d4424.png)

**3.5** **Activity Logs** タブ: Kubernetes クラスターで実行した **Action** のログを記録します。

[![](/img/migrated/Picture13-33e4e3ab.png)](/img/migrated/Picture13-33e4e3ab.png)
