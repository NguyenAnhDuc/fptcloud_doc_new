---
id: "cluster-autoscale"
title: "Cluster Autoscale の有効化"
description: "Managed FKE の Cluster Autoscale 機能の使い方を説明します。"
sidebar_label: "Cluster Autoscale の有効化"
sidebar_position: 18
pagination_next: null
---

# Cluster Autoscale

Managed FKE の Cluster Autoscale 機能は、ワーカープール上で稼働しているアプリケーションが、そのプールの worker node によって十分なリソース（CPU、Memory）が提供されない場合に、ワーカープール内に新しいワーカーを自動的にスケールアウトします。この場合、ノードのリソース不足により Pending 状態になっている Pod が、スケールアップ後の新しい worker node によって処理されます。Cluster Autoscale 機能は、そのノードの利用率（デフォルトは 50%）が十分でない node を自動的に削除します。ワーカープール内の worker node の数は、FPTCloud Portal でユーザーが事前に定義した min-max の範囲内でのみスケールされます。

## Cluster Autoscale の有効化

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。**Cluster Autoscale** 機能を有効にしたい **Cluster** を選択します。

[![](/img/migrated/Picture44-6cc61968.png)](/img/migrated/Picture44-6cc61968.png)

**ステップ 2:** **Node Pools** > **Edit Workers** を選択します。

[![](/img/migrated/Picture8-3-f8bef870.png)](/img/migrated/Picture8-3-f8bef870.png)

**ステップ 3:** ユーザーが選択したサイジングに合わせて、worker の min-max 数を調整します。

[![](/img/migrated/Picture46-88c23a88.png)](/img/migrated/Picture46-88c23a88.png)

_注意: worker の最大数が worker の最小数より大きい場合、cluster autoscale 機能が自動的に有効になります。_

**ステップ 4:** 情報を確認し、**Save** を選択して Cluster AutoScale 機能を有効にします。

[![](/img/migrated/Picture47-173646fd.png)](/img/migrated/Picture47-173646fd.png)

## Cluster Autoscale の無効化

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。**Cluster Autoscale** 機能を無効にしたい **Cluster** を選択します。

[![](/img/migrated/Picture48-a1ae1266.png)](/img/migrated/Picture48-a1ae1266.png)

**ステップ 2:** **Nodes Pool** > **Edit workers** を選択します。

[![](/img/migrated/Picture49-44ab28e4.png)](/img/migrated/Picture49-44ab28e4.png)

**ステップ 3:** worker の min-max 数を同じ値に調整します。

[![](/img/migrated/Picture50-840f09a1.png)](/img/migrated/Picture50-840f09a1.png)

**注意:** ワーカープール内の worker min と worker max が同じ値の場合、cluster autoscale 機能は自動的に無効になります。

**ステップ 4:** 情報を確認し、**Save** を選択します。

[![](/img/migrated/Picture51-e16b0e3d.png)](/img/migrated/Picture51-e16b0e3d.png)

## Cluster Autoscale の設定変更

**ステップ 1:** メニューで **Kubernetes** を選択すると、**Kubernetes Management** ページが表示されます。**Cluster Autoscale** 設定をカスタマイズしたい **Cluster** を選択します。

[![](/img/migrated/Picture52-39af7576.png)](/img/migrated/Picture52-39af7576.png)

**ステップ 2:** **Nodes Pool** > **Edit workers** を選択します。

[![](/img/migrated/Picture53-4178c5ad.png)](/img/migrated/Picture53-4178c5ad.png)

**ステップ 3:** 使用ニーズに合わせて worker 数を調整します。

[![](/img/migrated/Picture54-969dcae3.png)](/img/migrated/Picture54-969dcae3.png)

**ステップ 4:** 情報を確認し、**Save** を選択します。

[![](/img/migrated/Picture55-f877e43a.png)](/img/migrated/Picture55-f877e43a.png)
