---
id: "createschedule-snapshotstorage"
title: "ストレージディスクSnapshotスケジュールの作成"
description: "DailyまたはWeeklyの頻度でストレージディスクの自動Snapshotスケジュールを作成します。"
sidebar_label: "ストレージディスクSnapshotスケジュールの作成"
sidebar_position: 101
---

# ストレージディスクSnapshotスケジュールの作成

## スケジュールの作成

1. **Compute Engine** → **Schedule Management** に移動し、**Storage snapshot schedule** タブを選択します。

   [![Storage snapshot scheduleタブ](/img/migrated/image-1766044844669-47ffb5e0.png)](/img/migrated/image-1766044844669-47ffb5e0.png)

2. 必要な情報を入力します：
   - **Name**：スケジュール名。
   - **Time**：時刻を選択します（現在時刻から少なくとも2時間後）。
   - **Start date** / **End date** *（任意）*。
   - **Frequency**：DailyまたはWeekly。
   - **Applied Storage**：スケジュールにアタッチするストレージディスク。

   [![Create Scheduleダイアログ](/img/migrated/image-1766044938913-12b00e98.png)](/img/migrated/image-1766044938913-12b00e98.png)

:::note
各ストレージディスクは同時に1つのSnapshotスケジュールにのみアタッチできます。
:::

3. **Create Schedule** をクリックします。

   [![作成されたスケジュール](/img/migrated/image-1766044968475-8510c5bd.png)](/img/migrated/image-1766044968475-8510c5bd.png)
