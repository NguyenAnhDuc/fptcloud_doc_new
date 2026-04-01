---
id: "mange-admin-account"
title: "Quản lý tài khoản admin"
description: "Hướng dẫn enable và disable tài khoản admin trong ArgoCD instance"
sidebar_label: "Quản lý tài khoản admin"
sidebar_position: 28
---

# Quản lý tài khoản admin

Mặc định, tài khoản admin được bật khi tạo ArgoCD instance. Người dùng có thể enable/disable tài khoản admin như sau.

## A. Disable tài khoản admin

1. Tại màn hình **Essential Properties**, nhấn **Disable Admin Account**.

[![](/img/migrated/Picture1-5-71caab00.png)](/img/migrated/Picture1-5-71caab00.png)

2. Nhấn **Confirm** để xác nhận.

[![](/img/migrated/Picture2-5-41f37b40.png)](/img/migrated/Picture2-5-41f37b40.png)

3. Kết quả sau khi disable:

[![](/img/migrated/Picture3-6-fa289198.png)](/img/migrated/Picture3-6-fa289198.png)

Sau khi disable, người dùng có thể truy cập ArgoCD qua Local Account hoặc OIDC. Nếu chưa có cấu hình nào, màn hình đăng nhập sẽ như sau:

[![](/img/migrated/Picture4-6-602fd335.png)](/img/migrated/Picture4-6-602fd335.png)

Nếu đã có Local Account hoặc OIDC Scope, vẫn có thể đăng nhập bình thường:

[![](/img/migrated/Picture5-6-9efcfab4.png)](/img/migrated/Picture5-6-9efcfab4.png)

## B. Enable tài khoản admin

1. Tại màn hình **Essential Properties**, nhấn **Enable Admin Account**.

[![](/img/migrated/Picture6-6-f3355acc.png)](/img/migrated/Picture6-6-f3355acc.png)

2. Nhấn **Confirm** để xác nhận.

[![](/img/migrated/Picture7-6-6c7b65b6.png)](/img/migrated/Picture7-6-6c7b65b6.png)

3. Kết quả sau khi enable:

[![](/img/migrated/Picture8-6-a1c6eba8.png)](/img/migrated/Picture8-6-a1c6eba8.png)

Sau khi enable, có thể đăng nhập ArgoCD bằng tài khoản admin:

[![](/img/migrated/Picture9-6-ab4e8650.png)](/img/migrated/Picture9-6-ab4e8650.png)
