---
id: "manage-db-proxy"
title: "DB proxy の管理"
description: "FPT Smart Cloud Database Engine の DB proxy の各種操作手順。"
sidebar_label: "DB proxy の管理"
sidebar_position: 22
pagination_next: null
---

# DB proxy の管理

## DB proxy 一覧の確認

- ステータス = **Running**: DB proxy が正常に作成済み。
- ステータス = **Processing**: DB proxy を作成中。利用可能なアクション: **Start / Stop / Restart / Resize / Delete / Detail**。
- ステータス = **Failed**: DB proxy の作成が失敗。利用可能なアクション: **Delete**。

[![](/img/migrated/DBThta-1-9688a724.png)](/img/migrated/DBThta-1-9688a724.png)

## ケース 1: DB proxy の停止

- DB proxy が Running 状態であること。
- 停止したい DB proxy Cluster ID の Actions を選択します。
- **Stop** を選択します。

[![](/img/migrated/DB-Stop1-5603f1dc.png)](/img/migrated/DB-Stop1-5603f1dc.png)

- **Stop Database Cluster ID** ポップアップが表示されます。確認のため Cluster ID を再入力し、**Stop** をクリックします。
[![](/img/migrated/DB-Stop2-5a8afe96.png)](/img/migrated/DB-Stop2-5a8afe96.png)

- DB proxy は **Stopping** 状態になり、処理が完了するまで操作できません。この処理には 5〜7 分かかります。

[![](/img/migrated/DB-Stop3-b375b7c0.png)](/img/migrated/DB-Stop3-b375b7c0.png)

## ケース 2: DB proxy の起動

- DB proxy が **Stopped** 状態であること。
- Action 列で **Start** をクリックします。

[![](/img/migrated/DB-Start1-ad5fc12b.png)](/img/migrated/DB-Start1-ad5fc12b.png)

- **Start Database Cluster ID** ポップアップが表示されます。確認のため Cluster ID を再入力し、**Start** をクリックします。

[![](/img/migrated/DB-Start2-b12a86fa.png)](/img/migrated/DB-Start2-b12a86fa.png)

- DB proxy は **Starting** 状態になり、処理が完了するまで操作できません。この処理には 5〜7 分かかります。

[![](/img/migrated/DB-Start3-1a85e282.png)](/img/migrated/DB-Start3-1a85e282.png)

## ケース 3: DB proxy の再起動

- **DB proxy** が Running 状態であること。
- Action 列で **Restart** をクリックします。
[![](/img/migrated/DB_restart-20aee588.png)](/img/migrated/DB_restart-20aee588.png)

- **Restart Database Cluster ID** ポップアップが表示されます。確認のため Cluster ID を再入力し、**Restart** をクリックします。
[![](/img/migrated/DB_restart2-ca969ed6.png)](/img/migrated/DB_restart2-ca969ed6.png)

- **DB proxy** は **Restarting** 状態になり、処理が完了するまで操作できません。この処理には 5〜7 分かかります。
[![](/img/migrated/DB_restart3-76af49ff.png)](/img/migrated/DB_restart3-76af49ff.png)

## ケース 4: DB proxy のリサイズ

- DB proxy が **Running** 状態であること。
- Action 列で **Resize** をクリックします。

[![](/img/migrated/DB_resize1-26443919.png)](/img/migrated/DB_resize1-26443919.png)

- **Resize DB Proxy** ポップアップが表示されます。vCPU と RAM を入力し、**Resize DB Proxy** をクリックします。

[![](/img/migrated/DB_resize2-46fc1c9b.png)](/img/migrated/DB_resize2-46fc1c9b.png)

- DB proxy は **Resizing** 状態になり、処理が完了するまで操作できません。この処理には 5〜7 分かかります。

[![Alt text](/img/migrated/DB_resize3-1d61f76b.png)](/img/migrated/DB_resize3-1d61f76b.png)

## ケース 5: DB proxy の削除

- DB proxy が **Running** / **Stopped** / **Failed** 状態であること。
- Action 列で **Delete** をクリックします。

[![](/img/migrated/DB_delete1-79ffa16d.png)](/img/migrated/DB_delete1-79ffa16d.png)

- **Delete Database Cluster ID** ポップアップが表示されます。確認のため Cluster ID を再入力し、**Delete** をクリックします。

[![](/img/migrated/DB_delete2-e50a6b16.png)](/img/migrated/DB_delete2-e50a6b16.png)

- DB proxy は **Deleting** 状態になり、処理が完了するまで操作できません。

[![](/img/migrated/DB_delete3-14ab9e83.png)](/img/migrated/DB_delete3-14ab9e83.png)

## ケース 6: DB proxy の詳細確認

- DB proxy が **Running** 状態であること。
- Action 列で **Detail** をクリックします。

[![](/img/migrated/DB_Detail1-98be4280.png)](/img/migrated/DB_Detail1-98be4280.png)

- **DB Proxy Detail** ポップアップが表示されます。**Close** をクリックしてポップアップを閉じます。

[![](/img/migrated/DB_Detail2-8b026bce.png)](/img/migrated/DB_Detail2-8b026bce.png)
