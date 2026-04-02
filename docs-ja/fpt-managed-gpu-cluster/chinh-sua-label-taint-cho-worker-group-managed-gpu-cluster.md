---
id: "chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster"
title: "Worker GroupのラベルとTaintを編集する"
description: "ラベルとTaintは、複数のWorker Groupを持つシステムでワークロードを効率的に管理・分散するための2つの重要なメカニズムです。"
sidebar_label: "Worker GroupのラベルとTaintを編集する"
sidebar_position: 11
---

# Worker GroupのラベルとTaintを編集する

ラベルとTaintは、複数のWorker Groupを持つシステムでワークロードを効率的に管理・分散するための2つの重要なメカニズムです。これらにより、目的、パフォーマンス、または地理的リージョンごとにworkerをグループ化することが容易になります。Managed GPU ClusterはUnify Portal上でラベル/Taintの追加、編集、削除をサポートしています。

**手順1:** メニューで **AI Infrastructure** > **Managed GPU Cluster** を選択します。システムはManaged GPU Cluster Managementページを表示します。ラベル/Taintを編集したいクラスターを選択します。

[![](/img/migrated/24-2bafdf17.png)](/img/migrated/24-2bafdf17.png)

**手順2:** **Node Pools** > **Edit Workers** を選択します。

[![](/img/migrated/25-62db8512.png)](/img/migrated/25-62db8512.png)

**手順3:** Worker Groupに追加したいラベルとTaintを入力し、**Save** をクリックします。

[![](/img/migrated/26-888e5fac.png)](/img/migrated/26-888e5fac.png)

[![](/img/migrated/27-1e045ce9.png)](/img/migrated/27-1e045ce9.png)

[![](/img/migrated/28-8da95fc4.png)](/img/migrated/28-8da95fc4.png)

**注意:**

ラベルとTaintの編集プロセスは数分かかります。クラスターのステータスは **Processing** に変わります。この処理中は、完了するまでクラスターを編集できません。
