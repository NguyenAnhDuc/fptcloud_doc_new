---
id: "scale-in-chi-dinh-node"
title: "クラスター内の特定 node を指定したスケールイン機能"
description: "クラスターの手動スケールイン時に node の優先順位を指定する設定手順を説明します。"
sidebar_label: "クラスター内の特定 node を指定したスケールイン機能"
sidebar_position: 4
---

# クラスター内の特定 node を指定したスケールイン機能

**I. 概要**

このドキュメントでは、クラスターを手動でスケールインする際に node の削除優先順位を指定する設定手順を説明します。クラスター内の node は 1 から 3 の優先度（重要度の昇順）を持ちます。デフォルトでは、クラスター内のすべての node が同じ優先度（3）を持ちます。

node 数の削減（スケールダウン）プロセス中、MachineDeployment または MachineSet によってトリガーされると、MCM（Machine Controller Manager）は最も低い優先度の worker node を優先的に削除します。管理者は特定の worker node の優先度を 1 に下げることができます。その後、次回のスケールダウン時に MachineDeployment が最も低い優先度の worker node を優先的に削除します。

**II. 設定手順**

**ステップ 1:** 削除したい node に以下のアノテーションを設定します。

```
kubectl annotate no <node-name> worker.fptcloud.com/nodepriority=1
```

[![](/img/migrated/Screenshot_1-2-2a8d0ed1.png)](/img/migrated/Screenshot_1-2-2a8d0ed1.png)

**ステップ 2:** ポータル上でワーカーグループの min-max node を調整して、手動スケールダウンを実行します。

[![](/img/migrated/Screenshot_2-2-0bcd5774.png)](/img/migrated/Screenshot_2-2-0bcd5774.png)

[![](/img/migrated/Screenshot_3-1-27090c5d.png)](/img/migrated/Screenshot_3-1-27090c5d.png)

min-max node を調整した後、システムは指定した node のスケールインを実行します。スケールインプロセスは数分以内に実行され、クラスターのステータスが **Processing** に変わります。クラスターは正常に動作し続けます。

[![](/img/migrated/Screenshot_4-1-2b9a2dc4.png)](/img/migrated/Screenshot_4-1-2b9a2dc4.png)

[![](/img/migrated/Screenshot_5-1-4b366a9b.png)](/img/migrated/Screenshot_5-1-4b366a9b.png)

複数の node を指定してスケールダウンする必要がある場合は、複数の node に `worker.fptcloud.com/nodepriority=1` アノテーションを設定できます。

注意: この機能は、cluster auto scaler によって worker node がスケールインされる場合はサポートされません。
