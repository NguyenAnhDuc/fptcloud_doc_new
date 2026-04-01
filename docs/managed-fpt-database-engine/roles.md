---
id: "roles"
title: "Roles and permissions"
description: "Steps to create and manage IAM roles for FPT Smart Cloud Database Engine."
sidebar_label: "Roles and permissions"
sidebar_position: 7
---

# Roles and permissions

## Create a role

1. Go to the **IAM** tab on the Portal > select **Roles** > click **Create Role**.
[![](/img/migrated/Roles_b1-8117f050.jpg)](/img/migrated/Roles_b1-8117f050.jpg)
2. The **Create role** screen appears. Enter the **Name** and **Description** as required.
[![](/img/migrated/Roles_b2-602cef2c.jpg)](/img/migrated/Roles_b2-602cef2c.jpg)
3. Select **Filter**. The **Permission filter** popup appears. Enter the **Permission** value (a value of type manageDatabase, e.g. manageDatabase:List), select **Type ManageDatabase** from the list, and click **Show**.
[![](/img/migrated/Roles_b3-329193e1.jpg)](/img/migrated/Roles_b3-329193e1.jpg)

   :::note
   In the Filter step, you can omit the Permission value and select only the Type — the system will display all permission values for ManageDatabase.
   :::

4. Check or uncheck the permissions under **ManageDatabase** as needed, then click **Create role**.
[![](/img/migrated/Roles_b4-76491f25.jpg)](/img/migrated/Roles_b4-76491f25.jpg)

The role is created successfully with status **Active**.
[![](/img/migrated/Roles_b5-05b90a70.jpg)](/img/migrated/Roles_b5-05b90a70.jpg)
