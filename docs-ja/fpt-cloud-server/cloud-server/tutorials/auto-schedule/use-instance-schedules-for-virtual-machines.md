---
id: "use-instance-schedules-for-virtual-machines"
title: "仮想マシンへのinstance scheduleの活用"
description: "FPT CloudでInstance scheduleを使用して仮想マシンを自動起動/停止する方法です。"
sidebar_label: "仮想マシンへのinstance scheduleの活用"
sidebar_position: 7
---

# 仮想マシンへのinstance scheduleの活用

Instance scheduleを使用すると、定義した時刻と頻度で仮想マシンの起動・停止を自動化できます。この機能を利用するには、以下の手順を順番に実行してください。

1. 適切な時刻と頻度の設定で[新しいinstance scheduleを作成](./create-new-instance.md)します。
2. 作成したスケジュールに[仮想マシンを紐付け](./attach-schedule-to-instance.md)ます。
3. [Instance scheduleの詳細](./view-detail-instance.md)ページで実行状態を監視します。

スケジュールが不要になった場合は、スケジュールから[仮想マシンを解除](./detach-schedule-to-instance.md)するか、[スケジュールを削除](./delete-instance-schedule.md)することができます。
