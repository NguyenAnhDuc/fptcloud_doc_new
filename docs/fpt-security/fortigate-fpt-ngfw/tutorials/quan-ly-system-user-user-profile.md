---
id: "quan-ly-system-user-user-profile"
title: "Manage system users and user profiles"
description: "Guide to creating admin profiles and user accounts on Fortigate NGFW."
sidebar_label: "Manage system users"
sidebar_position: 7
---

# Manage system users and user profiles

1. Go to **System > Admin Profiles**.

   [![Admin Profiles list](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-31-102-7d09da26.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-31-102-7d09da26.png)

2. Create an Admin Profile with **Read Only** permissions:

   Click **Create New**, select the permission level (**Read** or **Read Only**) for each object, then click **OK** to create the profile.

   [![Create Read Only Admin Profile](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-32-102-1513bd08.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-32-102-1513bd08.png)

3. Create a user with the ReadOnly Admin Profile:

   Go to **System > Administrators > Create New**. Set Type to **Local User** and create a password. Under **Administrator profile**, select **ReadOnly** (the profile created in step 2). Click **OK** to create the user.

   [![Create user with ReadOnly profile](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-33-102-8791e511.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-33-102-8791e511.png)
