---
id: "xem-danh-sach-managed-gpu-cluster"
title: "Managed GPU Clusterの一覧を表示する"
description: "Managed GPU Cluster Managementページで、作成したGPU Clusterの一覧を確認・管理できます。"
sidebar_label: "Managed GPU Clusterの一覧を表示する"
sidebar_position: 3
---

# Managed GPU Clusterの一覧を表示する

Managed GPU Cluster Managementページで、作成したGPU Clusterの一覧を確認・管理できます。Managementページを開くには、次の手順を実行してください。

**FPT Portal** のメニューで **AI Infrastructure** > **Managed GPU Cluster** を選択します。システムは、**Name**、**Version**、**Worker Group**、**Status**、**Created At**、**Actions** などの重要な情報とともに、作成済みクラスターの一覧を表示します。

[![](/img/migrated/8-1-75374b83.png)](/img/migrated/8-1-75374b83.png)

**クラスターの詳細を確認する**

**手順1:** メニューで **Managed GPU Cluster** を選択します。システムは **Managed GPU Management** ページを表示します。詳細を確認したいクラスターを選択します。

[![](/img/migrated/9-1-1670bae1.png)](/img/migrated/9-1-1670bae1.png)

**手順2:** **Essential Properties** タブにクラスターの情報が表示されます。

[![](/img/migrated/10-1-6e0a4cbd.png)](/img/migrated/10-1-6e0a4cbd.png)

**• Cluster Information**: クラスターの基本情報（以下を含む）：

- クラスター名
- Managed GPU Clusterのバージョン
- Managed GPU Cluster設定ファイル
- ステータス
- ネットワーク

**• Load Balancer Service**: 作成時に入力したInternal LB Subnetの情報。

**• API**: クラスターへのAPI URL。

**手順3:** **Node Pools** タブには、クラスターに属するすべてのWorker Groupと各Worker Groupの設定の詳細が表示されます。

[![](/img/migrated/11-1-3eeaf351.png)](/img/migrated/11-1-3eeaf351.png)

**• Name**: Worker Group名。

**• Is Based**: ベースWorkerの場合は（✔）、そうでない場合は（✘）を表示します。

**• Flavor Type**: 選択されたリソースフレーバーを表示します。

**• Number of Server**: Worker Group内のMetal Cloudサーバーの数。
