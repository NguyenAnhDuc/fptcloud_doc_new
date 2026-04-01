---
id: "bat-tat-node-auto-repair"
title: "Node Auto-repair の有効化/無効化"
description: "Cluster Autoscale 機能に加え、FPTCloud は Node Auto-repair 機能を提供します。この機能により、NotReady 状態が 3 分以上続く worker node を自動的に再起動します。"
sidebar_label: "Node Auto-repair の有効化/無効化"
sidebar_position: 15
---

# Node Auto-repair の有効化/無効化

Cluster Autoscale 機能に加え、FPTCloud は Node Auto-repair 機能を提供します。この機能により、NotReady 状態が 3 分以上続く worker node を自動的に再起動します。worker node が過負荷になった場合や、container runtime、kubelet に関連する問題により node が NotReady 状態になった場合に効果的です。auto repair 後も node が Ready 状態に戻れない場合、10 分後にシステムが同じ構成の新しい node に置き換えます。この機能は、クラスターのシステムコンポーネントを含む base worker group に対してデフォルトで有効になっています。ユーザーはクラスター内の他のワーカーグループに対してこの機能を有効または無効にすることができます。

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。Node Auto-repair を有効化/無効化したい **Cluster** を選択します。

[![](/img/migrated/Picture31-fa3d5722.png)](/img/migrated/Picture31-fa3d5722.png)

**ステップ 2:** **Node Pools** > **Edit Workers** を選択します。

[![](/img/migrated/Picture4-3-1c81009b.png)](/img/migrated/Picture4-3-1c81009b.png)

**ステップ 3:** ワーカープールで Node auto repair 機能を有効化/無効化します。

[![](/img/migrated/Picture33-8691df0e.png)](/img/migrated/Picture33-8691df0e.png)

**注意:** バージョンのアップグレードのみ可能です。ダウングレードはできません。

**ステップ 4:** **Save** ボタンをクリックします。

[![](/img/migrated/Picture34-0822dd51.png)](/img/migrated/Picture34-0822dd51.png)

[![](/img/migrated/Picture35-b4d39044.png)](/img/migrated/Picture35-b4d39044.png)

Node auto repair の有効化/無効化の処理は数分以内に完了します。処理中はクラスターのステータスが **Processing** に変わり、処理が完了するまでクラスターの編集操作はできません。
