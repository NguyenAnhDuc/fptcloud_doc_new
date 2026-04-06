---
id: "xem-thong-tin-snapshot"
title: "View details snapshot"
sidebar_label: "View details snapshot"
description: "View details snapshot"
---

# View details snapshot

コネクターの snapshot 情報を確認するには、以下の手順を実行してください:

**手順 1:** メニューバーから **Data Platform** > **Workspace Management** > **Workspace name** を選択します。

**手順 2:** **My services** セクションで **CDC service** を選択します。

**手順 3:** **CDC service** 詳細画面 > **Connectors** タブを選択します。

Connectors 一覧画面では、各コネクターの snapshot 情報を確認できます:

  * **Snapshot Status 列**: snapshot の現在のステータスを表示します。
    * source connector のみに表示されます: MySQL、MariaDB、PostgreSQL、SQL Server
    * その他のコネクター（Oracle など）は「-」を表示します。
  * **Actions メニュー > Snapshot**: snapshot 管理操作を実行できます。
    * incremental snapshot をサポートする source connector のみで使用可能です。
