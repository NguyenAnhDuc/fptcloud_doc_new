---
id: "configure-rbac"
title: "Cấu hình RBAC policy"
description: "Hướng dẫn cấu hình phân quyền RBAC cho người dùng ArgoCD"
sidebar_label: "Cấu hình RBAC policy"
sidebar_position: 19
---

# Cấu hình RBAC policy

ArgoCD hỗ trợ phân quyền người dùng bằng RBAC policy config. Mặc định, tài khoản mới tạo có quyền `readonly` khi đăng nhập. FPT Cloud hỗ trợ cấu hình RBAC policy qua giao diện Portal.

1. Vào màn hình **Security & Access** > **RBAC**.

[![](/img/migrated/Picture124-2-b28a7401.png)](/img/migrated/Picture124-2-b28a7401.png)

2. Nhập cấu hình RBAC mong muốn.

Ví dụ:
```
p, role:staging-db-admins, clusters, create, staging-db-admins/*, allow
p, role:staging-db-admins, clusters, update, staging-db-admins/*, allow
p, role:staging-db-admins, clusters, delete, staging-db-admins/*, allow
p, role:staging-db-admins, clusters, get, *, allow
```

[![](/img/migrated/Picture125-2-68b9d186.png)](/img/migrated/Picture125-2-68b9d186.png)

3. Kết quả sau khi lưu:

[![](/img/migrated/Picture127-2-cd721161.png)](/img/migrated/Picture127-2-cd721161.png)

Để xóa policy, cập nhật lại cấu hình và xóa dòng policy không cần thiết.
