---
id: "configure-timereconcile"
title: "TimeReconcileの設定"
description: "Kubernetes clusterとリポジトリ間の同期確認間隔を設定するガイド"
sidebar_label: "TimeReconcileの設定"
sidebar_position: 18
---

# TimeReconcileの設定

ArgoCDはKubernetes clusterとdeployment repositoryの変更をスケジュールに従って確認します。デフォルトの間隔は3分です。FPT CloudはPortalインターフェースを通じてこの間隔の設定をサポートしています。

1. **Configuration** > **TimeReconcile**画面に移動します。

[![](/img/migrated/Picture37-4-2e5b4285.png)](/img/migrated/Picture37-4-2e5b4285.png)

2. 希望するreconcile間隔を入力します。

:::note
有効な値の例：`10s`、`20s`、`30s`、`1h`
:::

[![](/img/migrated/Picture38-4-9e381d9c.png)](/img/migrated/Picture38-4-9e381d9c.png)

[![](/img/migrated/Picture39-4-21be09d3.png)](/img/migrated/Picture39-4-21be09d3.png)

3. 設定後の結果：

[![](/img/migrated/Picture40-2-90742bf4.png)](/img/migrated/Picture40-2-90742bf4.png)
