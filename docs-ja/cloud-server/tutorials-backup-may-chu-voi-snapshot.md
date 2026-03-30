---
id: "tutorials-backup-may-chu-voi-snapshot"
title: "Snapshotによるバックアップ"
description: "FPT Cloud Serverで仮想マシンとStorage DiskのSnapshotを作成、管理、復元する方法。"
sidebar_label: "Snapshotによるバックアップ"
sidebar_position: 18
---

# Snapshotによるバックアップ

Snapshotは特定の時点での仮想マシンの状態を素早く記録します — 障害やデータ損失が発生した際にシステムを復元するのに役立ちます。

:::tip
複数の時点で定期的に保存する必要がある場合は、FPT Backupサービスをご検討ください。
:::

## 仮想マシンのSnapshot

### Snapshotの作成

1. **Instance Management** で **Actions** → **Snapshot** → **Create snapshot** を選択します。

   [![Create snapshotオプションのあるActionsメニュー](/img/migrated/image-1712656669900-805aff75.png)](/img/migrated/image-1712656669900-805aff75.png)

2. **Create instance snapshot** ダイアログが表示されます。**Create snapshot** をクリックします。

   [![Create instance snapshotダイアログ](/img/migrated/image-1734595203830-4982aec6.png)](/img/migrated/image-1734595203830-4982aec6.png)

Snapshotが **Snapshots** 画面に表示されます。

[![作成されたSnapshot](/img/migrated/image-1734595376651-974ca75e.png)](/img/migrated/image-1734595376651-974ca75e.png)

### SnapshotからInstanceを作成

1. **Snapshot** で **Actions** → **Launch as Instance** を選択します。

   [![Launch as InstanceオプションのあるActionsメニュー](/img/migrated/image-1734595412087-f0bc6c13.png)](/img/migrated/image-1734595412087-f0bc6c13.png)

2. SnapshotからのInstanceを作成する **Create instance** ダイアログが表示されます。設定を行い **Create** をクリックします。

   [![SnapshotからのCreate instanceダイアログ](/img/migrated/image-1712653436496-23f6c725.png)](/img/migrated/image-1712653436496-23f6c725.png)

新しい仮想マシンが **Instance Management** に表示されます。

[![Snapshotから作成された仮想マシン](/img/migrated/image-1734595491154-0444976f.png)](/img/migrated/image-1734595491154-0444976f.png)

### Snapshotの削除

1. **Snapshot** で **Actions** → **Delete Image** を選択します。

   [![Delete ImageオプションのあるActionsメニュー](/img/migrated/image-1734595518655-0f965a42.png)](/img/migrated/image-1734595518655-0f965a42.png)

2. **Delete snapshot** をクリックして確認します。仮想マシンに接続されたストレージディスクのSnapshotも削除する場合は **Delete all volume snapshots attached to this image** にチェックを入れます。

   [![Snapshot削除確認ダイアログ](/img/migrated/image-1712653461557-c3a5551d.png)](/img/migrated/image-1712653461557-c3a5551d.png)

## Storage DiskのSnapshot

### Snapshotの作成

1. **Storage Disk** で **Actions** → **Snapshot** → **Create volume snapshot** を選択します。

   [![Create volume snapshotオプションのあるActionsメニュー](/img/migrated/image-1734595578696-e2a9d562.png)](/img/migrated/image-1734595578696-e2a9d562.png)

2. **Create volume snapshot** をクリックします。

   [![Create volume snapshotダイアログ](/img/migrated/image-1744797304260-c56185cf.png)](/img/migrated/image-1744797304260-c56185cf.png)

Snapshotが **Snapshots** の **Storage snapshot** セクションに表示されます。

[![作成されたStorage snapshot](/img/migrated/image-1734595691770-9cda8337.png)](/img/migrated/image-1734595691770-9cda8337.png)

### SnapshotからStorage Diskを作成

1. **Snapshot** で **Actions** → **Create storage disk** を選択します。

   [![Create storage diskオプションのあるActionsメニュー](/img/migrated/image-1734595729279-9bdc6a8e.png)](/img/migrated/image-1734595729279-9bdc6a8e.png)

2. **Create storage disk** をクリックします。

   [![Create storage diskダイアログ](/img/migrated/image-1712653495975-03166cff.png)](/img/migrated/image-1712653495975-03166cff.png)

### Storage DiskのSnapshotの削除

1. **Snapshot** で **Actions** → **Delete Snapshot** を選択します。

   [![Delete SnapshotオプションのあるActionsメニュー](/img/migrated/image-1734595780158-c6454938.png)](/img/migrated/image-1734595780158-c6454938.png)

2. **Delete snapshot** をクリックします。

   [![Storage snapshot削除確認ダイアログ](/img/migrated/image-1712653549274-050d524e.png)](/img/migrated/image-1712653549274-050d524e.png)

## SpecificサービスのSnapshot

### Snapshotの作成

1. **Instance Management** で **Actions** → **Create snapshot** を選択します。

   [![Create snapshot（Specific）オプションのあるActionsメニュー](/img/migrated/image-1734595898541-1f53740c.png)](/img/migrated/image-1734595898541-1f53740c.png)

2. **Create** をクリックして確認します。

   [![Snapshot作成確認ダイアログ](/img/migrated/image-1712818258855-797847d8.png)](/img/migrated/image-1712818258855-797847d8.png)

:::note
各Instanceに保存できるSnapshotは1つのみです。新しいSnapshotは古いSnapshotを上書きします。作成には機種やデータ量に応じて約30分かかります。
:::

### SnapshotからInstanceを復元

1. **Instance Management** で **Actions** → **Restore snapshot** を選択します。

   [![Restore snapshotオプションのあるActionsメニュー](/img/migrated/image-1734596025787-1725e2ff.png)](/img/migrated/image-1734596025787-1725e2ff.png)

2. **Restore instance** をクリックして確認します。

   [![復元確認ダイアログ](/img/migrated/image-1712818286728-db082ce3.png)](/img/migrated/image-1712818286728-db082ce3.png)

:::warning
復元中（約30分）は仮想マシンが一時停止することがあり、完了するまで操作できない場合があります。
:::

### Snapshotの削除（Specific）

1. **Instance Management** で **Actions** → **Delete snapshot** を選択します。

   [![Delete snapshotオプションのあるActionsメニュー](/img/migrated/image-1734596064066-5bcf4544.png)](/img/migrated/image-1734596064066-5bcf4544.png)

2. **Delete snapshot** をクリックします。

   [![Snapshot削除確認ダイアログ](/img/migrated/image-1712818777331-c575dc0c.png)](/img/migrated/image-1712818777331-c575dc0c.png)

:::danger
削除されたSnapshotは復元できません。
:::

## 次のステップ

- [仮想マシンの削除](./tutorials-xoa-may-ao.md)
