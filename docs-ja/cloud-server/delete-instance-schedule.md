---
id: "delete-instance-schedule"
title: "Instance Scheduleの削除"
description: "インスタンスの自動起動・停止スケジュールを削除します。"
sidebar_label: "Instance Scheduleの削除"
sidebar_position: 94
pagination_next: null
---

# Instance Scheduleの削除

:::warning
スケジュールが現在実行中の場合、この操作は実行できません。Instance Scheduleの削除は元に戻すことができません。
:::

**手順1**: **Instance Schedule Management** パネルで、**Action** の中から **Delete** をクリックします。

![Deleteスケジュールの選択](images/delete-instance-schedule/img-001.png)

**手順2**: 確認ダイアログが表示され、スケジュール名と確認の入力を求めるメッセージが示されます。**delete** と入力し、**Delete schedule** をクリックして削除を実行します。

![スケジュール削除の確認](images/delete-instance-schedule/img-002.png)

システムはスケジュールを完全に削除します。アタッチされているインスタンスが存在する場合は解放され、現在の状態が維持されます。
