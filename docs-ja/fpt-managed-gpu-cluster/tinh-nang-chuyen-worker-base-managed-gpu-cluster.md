---
id: "tinh-nang-chuyen-worker-base-managed-gpu-cluster"
title: "ベースWorker Groupを変更する"
description: "ユーザーがベースWorker Groupを変更する場合、coredns、metrics servers、CNI controllerなどのシステムコンポーネントが新しいベースWorker GroupのWorkerノードに再デプロイされます。"
sidebar_label: "ベースWorker Groupを変更する"
sidebar_position: 12
---

# ベースWorker Groupを変更する

ユーザーがベースWorker Groupを変更する場合、システムコンポーネント（coredns、metrics servers、CNI controllerなど）が新しいベースWorker GroupのWorkerノードに再デプロイされます。この機能は、ベースWorker Group内のWorkerノードのフレーバー設定を増減したい場合に便利です。その場合、ユーザーは希望するWorkerノード設定で新しいWorker Groupを作成し、それをベースに昇格させてから古いベースWorker Groupを削除します。

**手順1:** メニューで **AI Infrastructure** > **Managed GPU Cluster** を選択します。システムはManaged GPU Cluster Managementページを表示します。Worker Group設定を変更したいクラスターを選択します。

[![](/img/migrated/29-0520eb98.png)](/img/migrated/29-0520eb98.png)

**手順2:** **Node Pools** > **Edit Workers** を選択します。

[![](/img/migrated/30-cc2c4a29.png)](/img/migrated/30-cc2c4a29.png)

**手順3:** ベースに昇格させたいWorker Groupを選択し、**Save** をクリックします。

[![](/img/migrated/31-315883dd.png)](/img/migrated/31-315883dd.png)

**注意:**

- ベースWorker Groupの変更プロセスが実行中は、完了するまでクラスターを編集できません。
- Worker Groupのパラメーターを変更すると、システムはまず希望の設定で新しいWorkerノードを作成します。新しいWorkerノードが正常に作成されると、古いWorkerノードはシステムから削除されます。Podは古いWorkerノードから新しいWorkerノードに移行されます。
