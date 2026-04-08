---
id: "manage-admin-account"
title: "Manage the admin account"
description: "Guide to enabling and disabling the admin account in an ArgoCD instance"
sidebar_label: "Manage admin account"
sidebar_position: 4
---

# Manage the admin account

By default, the admin account is enabled when an ArgoCD instance is created. You can enable or disable the admin account as follows.

## A. Disable the admin account

1. On the **Essential Properties** screen, click **Disable Admin Account**.

[![](/img/migrated/Picture1-5-71caab00.png)](/img/migrated/Picture1-5-71caab00.png)

2. Click **Confirm** to confirm.

[![](/img/migrated/Picture2-5-41f37b40.png)](/img/migrated/Picture2-5-41f37b40.png)

3. The result after disabling:

[![](/img/migrated/Picture3-6-fa289198.png)](/img/migrated/Picture3-6-fa289198.png)

After disabling, you can access ArgoCD via a Local Account or OIDC. If neither is configured, the login screen appears as follows:

[![](/img/migrated/Picture4-6-602fd335.png)](/img/migrated/Picture4-6-602fd335.png)

If a Local Account or OIDC Scope is already configured, you can still log in normally:

[![](/img/migrated/Picture5-6-9efcfab4.png)](/img/migrated/Picture5-6-9efcfab4.png)

## B. Enable the admin account

1. On the **Essential Properties** screen, click **Enable Admin Account**.

[![](/img/migrated/Picture6-6-f3355acc.png)](/img/migrated/Picture6-6-f3355acc.png)

2. Click **Confirm** to confirm.

[![](/img/migrated/Picture7-6-6c7b65b6.png)](/img/migrated/Picture7-6-6c7b65b6.png)

3. The result after enabling:

[![](/img/migrated/Picture8-6-a1c6eba8.png)](/img/migrated/Picture8-6-a1c6eba8.png)

After enabling, you can log in to ArgoCD with the admin account:

[![](/img/migrated/Picture9-6-ab4e8650.png)](/img/migrated/Picture9-6-ab4e8650.png)
