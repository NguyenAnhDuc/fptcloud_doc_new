---
id: "create-new-instance"
title: "新しいInstance Scheduleの作成"
description: "希望する時間と頻度でインスタンスを自動起動・停止するスケジュールを作成します。"
sidebar_label: "Instance Scheduleの作成"
sidebar_position: 90
---

# 新しいInstance Scheduleの作成

## スケジュールの作成

1. **Compute Engine** → **Instance Schedule** に移動し、**Create schedule** をクリックします。

   [![Instance Schedule画面](/img/migrated/image-1695608969930-81286d57.png)](/img/migrated/image-1695608969930-81286d57.png)

2. 必要な情報を入力します：
   - **Name**：スケジュール名。
   - **Description**：説明。
   - **Start time**：インスタンスを起動する時刻。
   - **Stop time**：インスタンスを停止する時刻。
   - **Start Date** *（任意）*：開始日。空白の場合、作成時から無期限に実行されます。
   - **End Date** *（任意）*：終了日。空白の場合、削除されるまで実行されます。
   - **Frequency**：頻度 — 毎日 / 毎週 / 毎月。
   - **Applied instances**：スケジュールにアタッチするインスタンス。

   [![Create scheduleダイアログ](/img/migrated/image-1695608983434-0ca4b6ed.png)](/img/migrated/image-1695608983434-0ca4b6ed.png)

:::note
各インスタンスは同時に1つのScheduleにのみアタッチできます。
:::

3. **Create schedule** をクリックします。

新しいスケジュールが **Instance Schedule Management** ページに表示されます。

[![作成されたスケジュール](/img/migrated/image-1695608998324-75646c28.png)](/img/migrated/image-1695608998324-75646c28.png)

## 次のステップ

- [Instance Scheduleの詳細確認](./view-detail-instance.md)
