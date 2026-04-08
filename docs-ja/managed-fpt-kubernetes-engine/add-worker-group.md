---
id: "add-worker-group"
title: "worker group の追加"
description: "Managed FPT Kubernetes Engine の既存 cluster に新しい worker group を追加する方法。"
sidebar_label: "worker group の追加"
sidebar_position: "10"
draft: true
---

# worker group の追加

**ステップ 1:** メニューから **Kubernetes** を選択して **Kubernetes Management** ページを開きます。worker group を追加したい cluster を選択します。

[![](/img/migrated/15-3314db3f.png)](/img/migrated/15-3314db3f.png)

**ステップ 2:** **Configure Worker Groups** をクリックします。

[![](/img/migrated/16-1d7abe11.png)](/img/migrated/16-1d7abe11.png)

**ステップ 3:** **Add Worker Group** をクリックします。

[![](/img/migrated/17-bfaff80b.png)](/img/migrated/17-bfaff80b.png)

**ステップ 4:** 必要な情報を入力します。

[![](/img/migrated/18-1-76d3b20a.png)](/img/migrated/18-1-76d3b20a.png)

- **Type:** worker node の CPU とメモリ設定を選択します。
- **Container runtime:** Containerd。
- **Storage policy:** worker node のディスクの storage policy タイプ（IOPS に対応）を選択します。
- **Disk (GB):** worker node のルートディスク容量を選択します。
- **Scale min:** worker node の VM instance の最小数。本番環境では最低 3 node を推奨します。
- **Scale max:** worker group の VM instance の最大数。

**ステップ 5:** 情報を確認し、**Save** をクリックして worker group を追加します。

[![](/img/migrated/19-1-5e45dec7.png)](/img/migrated/19-1-5e45dec7.png)

cluster のスケール処理は数分かかり、cluster のステータスが **Processing** に変わります。新しい worker group の追加中も cluster は通常通り動作します。
