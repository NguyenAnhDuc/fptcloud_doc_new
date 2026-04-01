---
id: "configure-rbac"
title: "RBAC policyの設定"
description: "ArgoCDユーザーのRBAC権限を設定するガイド"
sidebar_label: "RBAC policyの設定"
sidebar_position: 19
---

# RBAC policyの設定

ArgoCDはRBAC policy configによるユーザー権限管理をサポートしています。デフォルトでは、新しく作成されたアカウントはログイン時に`readonly`権限を持ちます。FPT CloudはPortalインターフェースを通じたRBAC policy設定をサポートしています。

1. **Security & Access** > **RBAC**画面に移動します。

[![](/img/migrated/Picture124-2-b28a7401.png)](/img/migrated/Picture124-2-b28a7401.png)

2. 希望するRBAC設定を入力します。

例：
```
p, role:staging-db-admins, clusters, create, staging-db-admins/*, allow
p, role:staging-db-admins, clusters, update, staging-db-admins/*, allow
p, role:staging-db-admins, clusters, delete, staging-db-admins/*, allow
p, role:staging-db-admins, clusters, get, *, allow
```

[![](/img/migrated/Picture125-2-68b9d186.png)](/img/migrated/Picture125-2-68b9d186.png)

3. 保存後の結果：

[![](/img/migrated/Picture127-2-cd721161.png)](/img/migrated/Picture127-2-cd721161.png)

policyを削除するには、設定を更新して不要なpolicy行を削除します。
