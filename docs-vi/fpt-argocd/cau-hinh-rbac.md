---
id: "cau-hinh-rbac"
title: "Cấu hình RBAC policy"
description: "**ArgoCD** hỗ trợ phân quyền cho người dùng sử dụng rbac policy config. Mặc định user mới tạo sẽ có quyền readyonly khi "
sidebar_label: "Cấu hình RBAC policy"
sidebar_position: 19
---

# Cau Hinh Rbac

**ArgoCD** hỗ trợ phân quyền cho người dùng sử dụng rbac policy config. Mặc định user mới tạo sẽ có quyền readyonly khi đăng nhập hệ thống. FPT Cloud hỗ trợ người dùng cấu hình RBAC policy thông qua giao diện như sau: 
**Bước 1** : Vào màn hình **Security & Access** > **RBAC**
[![](/img/migrated/Picture124-2-b28a7401.png)](/img/migrated/Picture124-2-b28a7401.png)
**Bước 2** : Nhập cấu hình RBAC mong muốn:
**Ví dụ:** p, role:staging-db-admins, clusters, create, staging-db-admins/_, allow p, role:staging-db-admins, clusters, update, staging-db-admins/_ , allow p, role:staging-db-admins, clusters, delete, staging-db-admins/_, allow p, role:staging-db-admins, clusters, get,_ , allow*
[![](/img/migrated/Picture125-2-68b9d186.png)](/img/migrated/Picture125-2-68b9d186.png)
**Bước 3** : Kết quả sau khi lưu:
[![](/img/migrated/Picture127-2-cd721161.png)](/img/migrated/Picture127-2-cd721161.png)
Để thực hiện xoá các policy đã cấu hình thực hiện update và xoá dòng policy muốn xoá. Thực hiện tương tự việc update.