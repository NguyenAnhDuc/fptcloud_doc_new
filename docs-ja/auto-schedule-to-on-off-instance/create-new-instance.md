---
id: "create-new-instance"
title: "新しいinstance scheduleの作成"
description: "FPT Cloudで仮想マシンを自動起動/停止するための新しいinstance scheduleの作成方法です。"
sidebar_label: "新しいinstance scheduleの作成"
sidebar_position: 4
---

# 新しいinstance scheduleの作成

新しいinstance scheduleを作成するには、以下の手順を実行します。

**ステップ1:** メニューから **Compute Engine > Instance Schedule** を選択し、**Create schedule** をクリックします。

[![Instance schedule一覧画面](/img/migrated/image-1709893783815-21178c51.png)](/img/migrated/image-1709893783815-21178c51.png)

**ステップ2:** 必要な情報を入力します。

- **Name**: Instance scheduleの名前。
- **Description**: Instance scheduleの説明。
- **Start time**: 仮想マシンを起動する時刻。
- **Stop time**: 仮想マシンを停止する時刻。
- **Start Date**: スケジュールを開始する日付。_(空白のままにすると、作成時から無期限で実行されます。)_
- **End Date**: スケジュールを終了する日付。_(空白のままにすると、削除されるまで無期限で実行されます。)_
- **Frequency**: 起動/停止を実行する頻度（毎日、毎週、毎月）。
- **Applied instances**: スケジュールに紐付ける仮想マシン。_(各仮想マシンは同時に1つのスケジュールにのみ紐付けることができます。)_

[![Instance schedule作成フォーム](/img/migrated/image-1695608983434-0ca4b6ed.png)](/img/migrated/image-1695608983434-0ca4b6ed.png)

**ステップ3:** **Create schedule** をクリックします。システムがスケジュールを初期化し、結果を表示します。

作成が成功すると、新しいinstance scheduleが **Instance Schedule Management** ページに表示されます。

[![Instance schedule作成成功](/img/migrated/image-1695608998324-75646c28.png)](/img/migrated/image-1695608998324-75646c28.png)
