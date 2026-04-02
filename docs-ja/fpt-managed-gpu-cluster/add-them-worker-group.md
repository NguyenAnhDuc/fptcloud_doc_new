---
id: "add-them-worker-group"
title: "Worker Groupを追加する"
description: "Managed GPU Clusterでは、必要に応じてクラスターにworker groupを追加できます。"
sidebar_label: "Worker Groupを追加する"
sidebar_position: 9
---

# Worker Groupを追加する

Managed GPU Clusterでは、必要に応じてクラスターにworker groupを追加できます。Worker Groupを追加するには、ポータルで以下の手順を実行してください。

**手順1:** メニューで **AI Infrastructure** > **Managed GPU Cluster** を選択します。システムは **Managed GPU Management** ページを表示します。Worker Groupを追加したいクラスターを選択します。

[![](/img/migrated/17-502dd1f3.png)](/img/migrated/17-502dd1f3.png)

**手順2:** **Node Pools** > **Edit Workers** を選択します。

[![](/img/migrated/18-13f798d7.png)](/img/migrated/18-13f798d7.png)

**手順3:** **Add Worker Group** を選択します。

[![](/img/migrated/19-437d9b85.png)](/img/migrated/19-437d9b85.png)

**手順4:** 必要なフィールドを入力し、**Save** をクリックします。

[![](/img/migrated/20-d9c3a1fa.png)](/img/migrated/20-d9c3a1fa.png)

**• Group Name**: Worker Groupを識別するための名前を入力します。

**• Container Runtime**: コンテナランタイムを選択します。現在はContainerdのみサポートされています。

**• Flavor**: GPU WorkerのリソースフレーバーI。

**• Number of Server**: クラスターのWorkerとして実行するMetal Cloud Serverの数。

**• Label**: Worker Groupにラベルを割り当てます。

**• Taint**: Worker GroupにTaintを割り当てます。

**注意**: 新しいWorker Groupの追加プロセスは数分かかります。クラスターのステータスは **Processing** に変わります。新しいWorker Groupの追加中も、クラスターは正常に動作し続けます。
