---
id: "change-removable-drive-capacity"
title: "ストレージディスク容量の変更"
description: "FPT Cloud Portalで既存のストレージディスクのポリシーと容量を変更する方法。"
sidebar_label: "ストレージディスク容量の変更"
sidebar_position: 2
---

# ストレージディスク容量の変更

既存のストレージディスクのポリシーと容量を変更できます。

:::note
- 変更を行うには、少なくとも50,000 VNDと1時間分のストレージ使用料金が必要です。
- 変更適用時に、新しい構成に基づく1時間分のストレージ使用料金が即時引き落とされます。
- 仮想マシンに接続されていないストレージディスクはストレージポリシーを変更できません。
:::

1. **Compute Engine – Storage Disks**ページに移動します。

2. 変更したいディスクの**Action**をクリックし、**Edit**を選択します。

[![ストレージディスクのEditを選択](/img/migrated/image-1694073979781-7ec29458.png)](/img/migrated/image-1694073979781-7ec29458.png)

3. 新しいポリシーと容量を選択します。システムが参考として1時間あたりの使用コストを表示します。

[![新しいディスク構成の選択](/img/migrated/image-1694073989051-4fa42062.png)](/img/migrated/image-1694073989051-4fa42062.png)

4. **Edit storage disk**をクリックします。
   - 情報が有効な場合、システムはストレージを更新し、Storage Disksページにリダイレクトします。
   - リソース制限に達している場合、システムはエラーメッセージを表示し、変更を防ぎます。

[![ストレージディスク容量変更結果](/img/migrated/image-1694073998971-887af5ca.png)](/img/migrated/image-1694073998971-887af5ca.png)

[![変更後に引き落とされたコスト](/img/migrated/image-1694074005987-1a09c503.png)](/img/migrated/image-1694074005987-1a09c503.png)
