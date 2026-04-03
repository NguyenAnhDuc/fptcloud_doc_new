---
id: "client-task-mapping"
title: "クライアントタスクの管理"
description: "Trellix agent がインストールされたサーバーで自動実行されるスケジュールタスクを表示・管理する手順。"
sidebar_label: "クライアントタスクの管理"
sidebar_position: 4
---

# クライアントタスクの管理

クライアントタスクは、シグネチャの更新、agent のアップグレード、マルウェアスキャンなど、各サーバーのセキュリティを維持するためのスケジュールされたジョブです。これらのタスクを把握することで、インフラ全体のセキュリティ状態を完全に把握できます。

1. 管理コンソールで **System Tree** > **Group** > **Assigned Client Task** を選択します。

   [![System Tree の Assigned Client Task インターフェース](/img/migrated/image-1765765586369-189ffc4d.png)](/img/migrated/image-1765765586369-189ffc4d.png)

2. agent が正常にインストールされたサーバーのスケジュール済みおよびアクティブなタスクの一覧が表示されます。

   [![Trellix のスケジュール済みクライアントタスク一覧](/img/migrated/image-1765765604165-da57bd94.png)](/img/migrated/image-1765765604165-da57bd94.png)

   | タスク | 説明 | 頻度 |
   |---|---|---|
   | Update AMCore Content Package | 最新のシグネチャパッケージに更新 | 毎日 |
   | Upgrade Agent – Linux | Linux 上の agent を最新バージョンにアップグレード | 毎週 |
   | Upgrade Agent – Windows | Windows / Windows Server 上の agent を最新バージョンにアップグレード | 毎週 |
   | Customer – Full Scan | サーバーのフルマルウェアスキャン | 毎週 |
   | Upgrade Endpoint Security – Linux | Linux 上の ENS を最新バージョンにアップグレード | 毎月 |
   | Upgrade Endpoint Security – Windows | Windows / Windows Server 上の ENS を最新バージョンにアップグレード | 毎月 |
   | Linux/Windows Endpoint Security Deploy | agent がサーバーに接続後、Endpoint Security を即時展開 | 即時 |
