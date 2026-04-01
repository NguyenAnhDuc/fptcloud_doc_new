---
id: "Configure-RBAC-policy"
title: "Configure Rbac Policy"
description: "**ArgoCD** supports user authorization using **RBAC (role-based access control) policy** config. By default, newly creat"
sidebar_label: "Configure Rbac Policy"
sidebar_position: 11
---

# Configure Rbac Policy

**ArgoCD** supports user authorization using **RBAC (role-based access control) policy** config. By default, newly created users will only have read-only rights when logging into the system. FPT Cloud supports **user-configurable** RBAC policy through the user interface:
**Step 1** : From the **Security & Access** tab > **RBAC** > **Update**
[![](/img/migrated/Picture76-1d962f17.png)](/img/migrated/Picture76-1d962f17.png)
**Step 2** : Enter RBAC configuration:
For example: 

```
Copyp, role:staging-db-admins, clusters, create, staging-db-admins/, allow
p, role:staging-db-admins, clusters, update, staging-db-admins/, allow
p, role:staging-db-admins, clusters, delete, staging-db-admins/, allow
p, role:staging-db-admins, clusters, get, *, allow
```

[![](/img/migrated/Picture77-6203b56d.png)](/img/migrated/Picture77-6203b56d.png)
**Step 3** : Click **Save** to apply the configuration
Result after saving:
[![](/img/migrated/Picture78-02bf6d52.png)](/img/migrated/Picture78-02bf6d52.png)
To delete configured policies, update and delete the policy line you would like to remove. Steps are identical to Updating.
