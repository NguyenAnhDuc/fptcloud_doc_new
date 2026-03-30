---
id: "create-schedule-snapshotVM"
title: "インスタンスSnapshotスケジュールの作成"
description: "DailyまたはWeeklyの頻度でインスタンスの自動Snapshotスケジュールを作成します。"
sidebar_label: "インスタンスSnapshotスケジュールの作成"
sidebar_position: 96
---

# インスタンスSnapshotスケジュールの作成

## スケジュールの作成

1. **Compute Engine** → **Schedule Management** に移動し、**Instance snapshot schedule** タブを選択します。

   [![Instance snapshot scheduleタブ](/img/migrated/image-1766044251626-e224453b.png)](/img/migrated/image-1766044251626-e224453b.png)

2. 必要な情報を入力します：
   - **Name**：スケジュール名。
   - **Time**：時刻を選択します（現在時刻から少なくとも2時間後）。
   - **Start date** *（任意）*：開始日。
   - **End date** *（任意）*：終了日。
   - **Frequency**：Daily（毎日）またはWeekly（曜日を選択）。
   - **Applied Instance**：スケジュールにアタッチするインスタンス。

   [![Create Scheduleダイアログ](/img/migrated/image-1766044359045-49bb8a07.png)](/img/migrated/image-1766044359045-49bb8a07.png)

:::note
各インスタンスは同時に1つのSnapshotスケジュールにのみアタッチできます。
:::

3. **Create Schedule** をクリックします。

   [![作成されたスケジュール](/img/migrated/image-1766044391396-79f5a3e3.png)](/img/migrated/image-1766044391396-79f5a3e3.png)
