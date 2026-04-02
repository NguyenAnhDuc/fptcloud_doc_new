---
id: "quan-ly-system-user-user-profile"
title: "System User – User Profile の管理"
description: "System > Admin Profiles。"
sidebar_label: "System User – User Profile の管理"
sidebar_position: 8
---

# System User – User Profile の管理

**ステップ 1：** **System** > **Admin Profiles** を選択します。
[![Userguide Fortigate FPT NGFW 2022 31](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-31-102-7d09da26.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-31-102-7d09da26.png)
**ステップ 2：** ユーザーに **Read Only** のみを許可する Admin Profile を作成します。
**Create New** > 各オブジェクトに対して権限制限（**Read – Read Only**）を選択します。**OK** をクリックしてプロファイルを作成します。
[![Userguide Fortigate FPT NGFW 2022 32](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-32-102-1513bd08.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-32-102-1513bd08.png)
**ステップ 3：** Readonly Admin Profile を持つユーザーを作成します。
**System** > **Administrators** > **Create New** を選択します。Type で **Local User** を選択し、対応するパスワードを設定します。次に **Administrator profile** で **ReadOnly**（ステップ 2 で作成したプロファイル）を選択します。**OK** をクリックしてユーザーを作成します。
[![Userguide Fortigate FPT NGFW 2022 33](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-33-102-8791e511.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-33-102-8791e511.png)
