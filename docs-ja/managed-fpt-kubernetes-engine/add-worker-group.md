---
id: "them-worker-group"
title: "ワーカーグループの追加"
description: "Kubernetes Cluster にワーカーグループを追加する手順を説明します。"
sidebar_label: "ワーカーグループの追加"
sidebar_position: 12
---

# ワーカーグループの追加

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。ワーカーグループを追加したい **Cluster** を選択します。

[![](/img/migrated/Picture21-59a1a031.png)](/img/migrated/Picture21-59a1a031.png)

**ステップ 2:** **Node Pools** > **Edit Workers** を選択します。

[![](/img/migrated/Picture22-21285b05.png)](/img/migrated/Picture22-21285b05.png)

**ステップ 3:** **ADD WORKER GROUP** を選択します。

[![](/img/migrated/Picture23-51511b2e.png)](/img/migrated/Picture23-51511b2e.png)

**ステップ 4:** 必要な情報を入力します。

[![](/img/migrated/Picture24-753cbc70.png)](/img/migrated/Picture24-753cbc70.png)

  * **Instance Type:** **Worker Node** のインスタンス種別（CPU または GPU）を選択します。
  * **Type:** **Worker Node** の設定（CPU・Memory）を選択します。
  * **Container Runtime:** **Containerd** を選択します。
  * **Storage Policy:** Worker Node ディスクの **Storage Policy**（IOPS に対応）を選択します。
  * **Disk (GB):** **Worker Node** のルートディスク容量を選択します。
  * **Network:** Kubernetes Cluster の VM をデプロイするために使用する Subnet です。
  * **Scale min:** k8s クラスターの Worker Node の最小 VM インスタンス数。本番環境では最低 3 ノードを推奨します。
  * **Scale max:** k8s クラスターのワーカーグループあたりの最大 VM インスタンス数。
  * **Label:** **Worker Group** に Label を付けます。
  * **Taint:** **Worker Group** に Taint を付けます。

**ステップ 5:** 情報を確認し、**Save** を選択して新しい Worker を追加します。

[![](/img/migrated/Picture25-131290d6.png)](/img/migrated/Picture25-131290d6.png)

クラスターのスケールプロセスは数分以内に実行され、クラスターのステータスが **Processing** に変わります。新しいワーカーグループを追加している間も、クラスターは正常に動作し続けます。
