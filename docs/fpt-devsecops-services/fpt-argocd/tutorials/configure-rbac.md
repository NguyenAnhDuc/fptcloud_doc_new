---
id: "configure-rbac"
title: "Configure RBAC policy"
description: "Guide to configuring RBAC permissions for ArgoCD users"
sidebar_label: "Configure RBAC policy"
sidebar_position: 8
---

# Configure RBAC policy

ArgoCD supports user permission management via RBAC policy config. By default, newly created accounts have `readonly` permission when they log in. FPT Cloud supports configuring RBAC policy via the Portal interface.

1. Go to the **Security & Access** > **RBAC** screen.

[![](/img/migrated/Picture124-2-b28a7401.png)](/img/migrated/Picture124-2-b28a7401.png)

2. Enter the desired RBAC configuration.

Example:
```
p, role:staging-db-admins, clusters, create, staging-db-admins/*, allow
p, role:staging-db-admins, clusters, update, staging-db-admins/*, allow
p, role:staging-db-admins, clusters, delete, staging-db-admins/*, allow
p, role:staging-db-admins, clusters, get, *, allow
```

[![](/img/migrated/Picture125-2-68b9d186.png)](/img/migrated/Picture125-2-68b9d186.png)

3. The result after saving:

[![](/img/migrated/Picture127-2-cd721161.png)](/img/migrated/Picture127-2-cd721161.png)

To remove a policy, update the configuration and delete the unnecessary policy line.
