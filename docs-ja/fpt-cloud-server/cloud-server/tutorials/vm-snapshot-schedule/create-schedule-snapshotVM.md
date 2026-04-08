---
id: "create-schedule-snapshotVM"
title: "Create Schedule Snapshotvm"
sidebar_label: "仮想マシンSnapshotスケジュールの作成"
sidebar_position: 2
---

仮想マシンSnapshotスケジュールの作成


新しい仮想マシンSnapshotスケジュールを作成するには、以下の手順に従ってください。

**ステップ1：** メニューでCompute Engine > Schedule Managementを選択し、「Instance snapshot schedule」タブを選択します。

![file](images/create-schedule-snapshotVM/img-001.png)

**ステップ2：** システムの要求に従って必要な情報を入力します：

  * Name：スケジュール名

  * Time：スケジュールが正確に実行されるよう、編集時点から少なくとも2時間後の時刻のみ選択できます

  * Start date：Snapshotスケジュールが繰り返し開始される日付。空白の場合は、スケジュールが正常に作成された時点から開始されます

  * End date：Snapshotスケジュールが終了する日付。空白の場合は、スケジュールに有効期限はありません

  * Frequency：Snapshot操作が実行される頻度

  *     * Daily：毎日時間単位で実行されるスケジュール
  *     * Weekly：週単位で実行されるスケジュール。曜日を選択できます
  * Applied Instance：スケジュールに割り当てられた仮想マシン（注意：各仮想マシンは同時に1つのスケジュールにのみ割り当てることができます）


![file](images/create-schedule-snapshotVM/img-002.png)

**ステップ3：** 「Create Schedule」をクリックします。システムはスケジュールの初期化を開始し、結果をお知らせします。成功した場合、新しいスケジュールはInstance snapshot scheduleページに表示されます。

![file](images/create-schedule-snapshotVM/img-003.png)
