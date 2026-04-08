---
id: "chuyen-worker-group-base"
title: "ベースワーカーグループの切り替え"
description: "ベースワーカーグループを変更する手順と仕組みを説明します。"
sidebar_label: "ベースワーカーグループの切り替え"
sidebar_position: 7
---

# ベースワーカーグループの切り替え

ユーザーがベースワーカーグループを変更したい場合、システムコンポーネント（coredns、metrics servers、CNI controller など）が新しいベースワーカーグループの worker node 上に再デプロイされます。この機能は、ユーザーがベースワーカーグループの worker node のフレーバー設定を変更したい場合に有用です。その場合、希望する worker node 設定で新しいワーカーグループを作成し、その新しいワーカーグループをベースに切り替えて、古いベースワーカーグループを削除します。

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。ワーカーグループの設定を変更したい **Cluster** を選択します。

[![](/img/migrated/Picture36-569deb38.png)](/img/migrated/Picture36-569deb38.png)

**ステップ 2:** **Node Pools** > **Edit Workers** を選択します。

[![](/img/migrated/Picture5-3-59491c55.png)](/img/migrated/Picture5-3-59491c55.png)

**ステップ 3:** 変更したいワーカーグループを選択します。

[![](/img/migrated/Picture6-3-2ddc619d.png)](/img/migrated/Picture6-3-2ddc619d.png)

**ステップ 4:** 情報を確認し、**Save** を選択して変更を保存します。

[![](/img/migrated/Picture39-31886a4d.png)](/img/migrated/Picture39-31886a4d.png)

[![](/img/migrated/Picture40-6f5a3087.png)](/img/migrated/Picture40-6f5a3087.png)

ベースワーカーグループの変更プロセスが実行されます。処理中はクラスターの編集操作ができません。処理が完了するまでお待ちください。

_ヒント: ワーカーグループのパラメーターを変更する際、まずシステムが希望する設定で新しい worker node を追加します。新しい worker node が正常に作成されると、古い設定の worker node がシステムから削除されます。Pod は古い worker node から新しい worker node に移行されます。_
