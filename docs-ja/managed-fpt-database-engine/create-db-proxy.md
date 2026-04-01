---
id: "create-db-proxy"
title: "DB proxy の作成"
description: "FPT Smart Cloud Database Engine で DB proxy を作成する手順。"
sidebar_label: "DB proxy の作成"
sidebar_position: 21
---

# DB proxy の作成

1. **Database Engine** を選択し、**ID Cluster** を選択します。**Database Detail** の **DB Proxy** タブを選択します。
[![](/img/migrated/Db-pro-1-7e7b7ca8.png)](/img/migrated/Db-pro-1-7e7b7ca8.png)
2. **DB Proxy Management** パネルで **Create DB Proxy** を選択します。
[![](/img/migrated/Db-pro-2-d46a7cbe.png)](/img/migrated/Db-pro-2-d46a7cbe.png)
3. **Create DB Proxy** を選択して DB proxy の作成を実行します。システムがリソースを確認し、入力した情報に基づいて新しい **DB proxy** の作成を開始します。
[![](/img/migrated/Db-pro-3-ac3ae541.png)](/img/migrated/Db-pro-3-ac3ae541.png)

DB proxy の作成後、システムは 5〜7 分以内に自動的に LB クラスターを作成します。この間ステータスは **Processing** となり、正常に作成されると **Running** ステータスになります。

[![](/img/migrated/Db-pro-34-cf0e838d.png)](/img/migrated/Db-pro-34-cf0e838d.png)
