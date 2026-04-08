---
id: "manual-scale"
title: "Manual Scale"
description: "D-FKE の Worker Node を手動でスケールイン/スケールアウトする手順。"
sidebar_label: "Manual Scale"
sidebar_position: 4
---

# Manual Scale

D-FKE は worker node の手動スケールイン/スケールアウトをサポートしており、ユーザーが必要に応じて worker の数を手動で増減できます。autoscaler を待たずに node 数を柔軟に管理でき、実際のワークロードに基づいて worker node 数を迅速に調整する場面に適しています。

**Manual Scale の設定手順:**

1. メニューから **Kubernetes** を選択します。**Kubernetes Management** ページが表示されます。対象の cluster を選択し、node pool セクションを選択します。
[![](/img/migrated/anh1-212b9e0c.png)](/img/migrated/anh1-212b9e0c.png)
2. **Worker Config** > **Auto Scale** セクションで、**Enable Auto Scale Node** アイコンを選択します。
[![](/img/migrated/anh2-027ebf13.png)](/img/migrated/anh2-027ebf13.png)
3. **Scale Worker Nodes** 画面が表示されます。必要な情報を入力します。
   - **Scale Type:** Scale Out（増加）または Scale In（減少）を選択します。
   - **Scale In:**
     - List of node name: 削除する node を選択します（選択しない場合はランダムに削除されます）。
     - Quantity: 追加/削除する worker node の数を入力します。
   - **Scale Out:**
     - Quantity: 追加する worker node の数を入力します。

   入力後、スケール実行後の worker node 数が **"Quantity worker after scale-up/scale-down equals"** 行に表示されます。

4. 情報を確認し、**Scale Cluster** を選択して Worker のスケールを実行します。
[![](/img/migrated/anh3-e979a990.png)](/img/migrated/anh3-e979a990.png)
[![](/img/migrated/anh44-88f304e7.png)](/img/migrated/anh44-88f304e7.png)

Cluster のスケール処理が開始されます。処理中は完了するまで cluster の編集操作を行うことができません。
