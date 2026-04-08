---
id: "tutorials-tao-auth-method"
title: "Create an Auth Method"
description: "How to create a new Auth Method to authenticate applications with Vault"
sidebar_label: "Create an Auth Method"
sidebar_position: "11"
---

# Create an Auth Method

An Auth Method defines how an application or user authenticates with Vault to obtain a Secret access token. FPT Key Vault supports AppRole-type Auth Methods, suited for machine-to-machine authentication.

1. On **Key Vault Management**, select the **Key Vault** to add an **Auth Method** to.

   [![Key Vault Management list screen](/img/migrated/Userguide-FPT-KeyVault-2022-4-1024x538-3dcfc356.png)](/img/migrated/Userguide-FPT-KeyVault-2022-4-1024x538-3dcfc356.png)

2. Open the **Access** tab and click **Create**.

   [![Access tab with Create button](/img/migrated/Userguide-FPT-KeyVault-2022-23-1024x538-203d8c88.png)](/img/migrated/Userguide-FPT-KeyVault-2022-23-1024x538-203d8c88.png)

3. On the **Create New Auth Method** screen, enter the required information:

   - **Mount Point**: The partition storing Secret information for the authentication method.
   - **Type**: Select **App Role**.

   [![Create New Auth Method form with Mount Point and Type fields](/img/migrated/Userguide-FPT-KeyVault-2022-24-de0b25f2.png)](/img/migrated/Userguide-FPT-KeyVault-2022-24-de0b25f2.png)

4. Click **Create** to finish. The system sends a confirmation message and creates the new **Auth Method**.

   [![Auth Method list after successful creation](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)

:::note
The system always creates a default Auth Method with type **Token**. This Auth Method cannot be deleted.
:::
