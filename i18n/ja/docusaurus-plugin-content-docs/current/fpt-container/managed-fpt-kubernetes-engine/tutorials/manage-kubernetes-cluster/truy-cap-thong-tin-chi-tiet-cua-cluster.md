---
id: "truy-cap-thong-tin-chi-tiet-cua-cluster"
title: "クラスターの詳細情報へのアクセス"
description: "Kubernetes Management ページでクラスターの詳細情報を確認する手順を説明します。"
sidebar_label: "クラスターの詳細情報へのアクセス"
sidebar_position: 3
---

# クラスターの詳細情報へのアクセス

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。**Managed** タブを選択します。詳細情報を確認したい **Cluster** を選択します。

[![](/img/migrated/Picture10-9e9b162d.png)](/img/migrated/Picture10-9e9b162d.png)

**ステップ 2:** **Essential Properties** タブにクラスターの情報が表示されます。

[![](/img/migrated/Picture11-33402987.png)](/img/migrated/Picture11-33402987.png)

  * **Cluster Information:** クラスターの基本情報（Cluster Name、Kubernetes バージョン、Kubernetes Config ファイル、ステータス、SSH Key ファイル）が含まれます。
  * **Load Balancer VIP:** 選択した LB サイズの情報です。
  * **Worker Groups Config:** グループの一覧と Worker Node の設定（Min / Max 数、CPU、Memory、Disk）です。
  * **API:** API URL です。

**ステップ 3:** **Node Pools** タブに、クラスターに属する全ワーカーグループと各ワーカーグループの設定情報が表示されます。

[![](/img/migrated/Picture12-7afcc680.png)](/img/migrated/Picture12-7afcc680.png)

  * **Name:** ワーカーグループ名
  * **Is Based:** ベース worker と通常 worker の区別
  * **Instance Type:** インスタンスの種類（CPU または GPU）
  * **Resource Type:** CPU と RAM の数量
  * **Disk:** ディスク容量
  * **Policy:** 選択した Storage Policy の情報
  * **Auto Scale:** auto scale の有効/無効状態
  * **Scale min:** ワーカーグループに設定した Worker Node の最小 VM インスタンス数
  * **Scale max:** ワーカーグループに設定した Worker Node の最大 VM インスタンス数
  * **Actions:** 使用しなくなったワーカーグループを削除できますが、ベースワーカーグループは削除できません。
