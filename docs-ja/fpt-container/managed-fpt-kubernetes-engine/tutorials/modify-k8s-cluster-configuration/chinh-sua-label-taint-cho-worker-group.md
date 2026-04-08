---
id: "chinh-sua-label-taint-cho-worker-group"
title: "ワーカーグループの label/taint 設定変更"
description: "ワーカーグループの label と taint を編集する手順を説明します。"
sidebar_label: "ワーカーグループの label/taint 設定変更"
sidebar_position: 5
---

# ワーカーグループの label/taint 設定変更

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。Label/Taint を編集したい Cluster を選択します。

[![](/img/migrated/Picture26-e8646f3c.png)](/img/migrated/Picture26-e8646f3c.png)

**ステップ 2:** **Node Pools** > **Edit Workers** を選択します。

[![](/img/migrated/Picture2-3-c348126c.png)](/img/migrated/Picture2-3-c348126c.png)

**ステップ 3:** ワーカーグループに追加したい **Labels** と **Taints** を入力し、**Save** ボタンをクリックします。

[![](/img/migrated/Picture28-4f201b20.png)](/img/migrated/Picture28-4f201b20.png)

[![](/img/migrated/Picture29-db44e41c.png)](/img/migrated/Picture29-db44e41c.png)

[![](/img/migrated/Picture3-3-ae58b9db.png)](/img/migrated/Picture3-3-ae58b9db.png)

Labels と Taints の編集プロセスは数分以内に実行され、クラスターのステータスが **Processing** に変わります。処理中はクラスターの編集操作ができません。処理が完了するまでお待ちください。

# システムワークロードとアプリケーションワークロードの分離

アプリケーションワークロードがクラスターの動作に影響を与えないよう、**Reserve this worker group for system workloads only** 機能により、ユーザーはベースワーカーグループをシステム Pod 専用として確保し、アプリケーション Pod がこのワーカーグループにスケジュールされないようにすることができます。

⚠️ 注意：この機能は 2 つ以上のワーカーグループを持つクラスターにのみ適用されます。

新しいクラスターを作成する際、ベースワーカーグループの設定ステップで「Reserve this worker group for system workloads only」オプションを有効にします。この機能を有効にすると、ベースワーカーグループのノードに **CriticalAddonsOnly=true:NoSchedule** taint が設定され、適切な toleration が設定されていないアプリケーション Pod はベースワーカーグループにスケジュールされなくなります。

クラスターが稼働中でベースワーカーグループにアプリケーション pod が存在する場合、この機能を有効にしても既存のアプリケーション pod には影響しません。toleration なしで新しく作成された pod はベースワーカーグループにスケジュールされません。

ワーカーグループを削除してクラスターにワーカーグループが 1 つだけ残った場合、システムは新しいワーカーグループが追加されるまで自動的にこのオプションを無効にします。
