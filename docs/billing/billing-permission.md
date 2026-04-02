---
id: "billing-permission"
title: "Billing permissions"
description: "How to grant billing view permissions to users in FPT Cloud Portal."
sidebar_label: "Billing permissions"
sidebar_position: 6
---

# Billing permissions

To view billing data, a user must have the Tenant Owner (Super Admin) role or a role that includes billing permission.

If a user without the Tenant Owner role needs to view billing, the Tenant Owner can grant access by following these steps:

1. Log in to the FPT Cloud Console as a user with Tenant Owner (Super Admin) rights. Go to **IAM** > **Roles** > click **Create Role**.

   [![Roles list screen](/img/migrated/image-1733807046462-52e42c98.png)](/img/migrated/image-1733807046462-52e42c98.png)

2. On the Create Role screen, enter a name in the **Name** field > use the filter to select permissions > set **Type = billing** > select the required permissions > click **Create**.

   [![Enter role name](/img/migrated/image-1733807051725-b839d87f.png)](/img/migrated/image-1733807051725-b839d87f.png)
   [![Select billing type](/img/migrated/image-1733807059640-9e09ce9c.png)](/img/migrated/image-1733807059640-9e09ce9c.png)
   [![Select billing permissions](/img/migrated/image-1733807063820-d4a99dea.png)](/img/migrated/image-1733807063820-d4a99dea.png)

3. In IAM, select **User Groups** > click **Create user group**.

   [![User Groups screen](/img/migrated/image-1733807067997-1c03291a.png)](/img/migrated/image-1733807067997-1c03291a.png)

4. On the Create user group screen, enter a **Name** > select the billing role created in steps 1–2 > select the users to assign > click **Create user group**.

   [![Create user group with billing role](/img/migrated/image-1733807076636-9336da11.png)](/img/migrated/image-1733807076636-9336da11.png)
