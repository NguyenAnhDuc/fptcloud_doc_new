---
id: "them-worker-group"
title: "worker group の追加"
description: "Managed FPT Kubernetes Engine の既存 cluster に新しい worker group を追加する方法。"
sidebar_label: "worker group の追加"
sidebar_position: "12"
---

# worker group の追加

**ステップ 1:** メニューから **Kubernetes** を選択して **Kubernetes Management** ページを開きます。worker group を追加したい cluster を選択します。
[![](/img/migrated/Picture21-59a1a031.png)](/img/migrated/Picture21-59a1a031.png)

**ステップ 2:** **Node Pools** > **Edit Workers** を選択します。
[![](/img/migrated/Picture22-21285b05.png)](/img/migrated/Picture22-21285b05.png)

**ステップ 3:** **ADD WORKER GROUP** を選択します。
[![](/img/migrated/Picture23-51511b2e.png)](/img/migrated/Picture23-51511b2e.png)

**ステップ 4:** 必要な情報を入力します。
[![](/img/migrated/Picture24-753cbc70.png)](/img/migrated/Picture24-753cbc70.png)
  * **Instance Type:** Worker Node の Instance タイプ（CPU または GPU）を選択します。
  * **Type:** Worker Node の設定（CPU & Memory）を選択します。
  * **Container Runtime:** **Containerd** を選択します。
  * **Storage Policy:** Worker Node Disk の **Storage Policy** タイプ（IOPS に対応）を選択します。
  * **Disk (GB):** Worker Node のルートディスク容量を選択します。
  * **Network:** Kubernetes Cluster の VM をデプロイするための Subnet を選択します。
  * **Scale min:** K8s クラスターの Worker Node VM instance の最小数。本番環境では最低 03 Node を推奨します。
  * **Scale max:** K8s クラスターの 1 つの worker group の Worker Node VM instance の最大数。
  * **Label:** **Worker Group** にラベルを付けます。
  * **Taint:** **Worker Group** に Taint を設定します。

**ステップ 5:** 情報を確認し、**Save** を選択して Worker の追加を実行します。
[![](/img/migrated/Picture25-131290d6.png)](/img/migrated/Picture25-131290d6.png)
Cluster のスケール処理は数分かかります。Cluster のステータスは **Processing** に変わります。新しい Worker Group の追加中も Cluster は通常通り動作します。
