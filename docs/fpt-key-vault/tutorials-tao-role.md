---
id: "tutorials-tao-role"
title: "Create a Role"
description: "How to create a new Role in an Auth Method to grant Secret access"
sidebar_label: "Create a Role"
sidebar_position: "12"
---

# Create a Role

A Role links an Auth Method with a Policy, defining the set of permissions granted to an application upon successful authentication. After creating a Role, the system generates a **Role ID** and **Secret ID** used for authentication.

1. On **Access Detail**, select the **Auth Method** to add a **Role** to.

   [![Auth Method list screen](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)

2. Click **Create**.

   [![Access Detail screen with Create button](/img/migrated/Userguide-FPT-KeyVault-2022-26-1024x538-35ec4a72.png)](/img/migrated/Userguide-FPT-KeyVault-2022-26-1024x538-35ec4a72.png)

3. On the **Create New Role** screen, enter the required information:

   - **Role Name**: The Role name.
   - **Assigned Groups**: Add the Policy created in Policy management.

   [![Create New Role form with Role Name and Assigned Groups fields](/img/migrated/Userguide-FPT-KeyVault-2022-27-edacd088.png)](/img/migrated/Userguide-FPT-KeyVault-2022-27-edacd088.png)

4. Click **Create**. After successful creation, a popup containing the **Role ID** and **Secret ID** appears.

   [![Popup showing Role ID and Secret ID after successful creation](/img/migrated/Userguide-FPT-KeyVault-2022-28-1043058f.png)](/img/migrated/Userguide-FPT-KeyVault-2022-28-1043058f.png)

:::warning
**Role ID** and **Secret ID** are displayed only once. Store them in a safe place immediately after creation.
:::
