---
id: "tao-moi-robot-account"
title: "Create a robot account"
description: "Create a robot account with pull/push permissions for CI/CD integration."
sidebar_label: "Create a robot account"
sidebar_position: "19"
---

# Create a robot account

Robot accounts provide separate credentials for automated systems, keeping access isolated between users and CI/CD pipelines.

1. On the **FPT Portal** menu, select **Container Registry** > **Robot Account** tab.

   [![Robot Account tab](/img/migrated/Picture59-8e6c388e.png)](/img/migrated/Picture59-8e6c388e.png)

2. Click **NEW ROBOT ACCOUNT** and enter the initialization information.

   [![Robot account creation form](/img/migrated/Picture60-4718d2bb.png)](/img/migrated/Picture60-4718d2bb.png)

   [![Robot account detailed configuration](/img/migrated/Picture61-b449c47e.png)](/img/migrated/Picture61-b449c47e.png)

   | Field | Description |
   |---|---|
   | **Name** | Robot account name |
   | **Expiration time** | Token expiration: by number of days or never expire |
   | **Description** | Description of the intended use |
   | **Permissions** | pull and/or push repository permissions |

3. After successful creation, the dialog displays the **Username** and **Token**. Copy or click **Export to File** to save the credentials.

   [![Username/Token dialog after creation](/img/migrated/Picture62-f6c856f2.png)](/img/migrated/Picture62-f6c856f2.png)

   :::warning
   The Username and Token are displayed only once. Save them in a secure location immediately after creation.
   :::

4. Verify the newly created robot account in the list.

   [![Robot account list after creation](/img/migrated/Picture63-a14d0bfe.png)](/img/migrated/Picture63-a14d0bfe.png)
