---
id: "delete-instance-schedule"
title: "Instance scheduleの削除"
description: "FPT CloudにおけるInstance scheduleの削除方法です。"
sidebar_label: "Instance scheduleの削除"
sidebar_position: 6
---

# Instance scheduleの削除

:::warning
スケジュールが実行中の場合、この操作は実行できません。削除したinstance scheduleは復元できません。
:::

**ステップ1:** **Instance Schedule Management** ページの **Action** 列で **Delete** をクリックします。

[![一覧の削除ボタン](/img/migrated/image-1695609049584-8754accf.png)](/img/migrated/image-1695609049584-8754accf.png)

**ステップ2:** 確認ダイアログが表示され、スケジュール名が示されます。確認フィールドに **delete** と入力し、**Delete schedule** をクリックします。

システムはスケジュールを完全に削除します。紐付けられていた仮想マシンは解放され、現在の状態を維持します。

[![削除確認ダイアログ](/img/migrated/image-1695609061103-74aa2b28.png)](/img/migrated/image-1695609061103-74aa2b28.png)
