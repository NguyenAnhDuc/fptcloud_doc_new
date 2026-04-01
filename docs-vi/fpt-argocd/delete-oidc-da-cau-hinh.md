---
id: "delete-oidc-da-cau-hinh"
title: "Xóa cấu hình OIDC"
description: "Hướng dẫn xóa OIDC Scope đã cấu hình trong ArgoCD"
sidebar_label: "Xóa cấu hình OIDC"
sidebar_position: 37
---

# Xóa cấu hình OIDC

:::danger
Sau khi xóa, OIDC Scope chuyển về trạng thái disable. ArgoCD chỉ hỗ trợ đăng nhập qua username/password nếu tài khoản admin đang được bật hoặc có local account.
:::

1. Tại màn hình **Security & Access** > **OIDC Scope**, nhấn **Delete** tại OIDC Scope muốn xóa.

[![](/img/migrated/Picture30-3-7c37461f.png)](/img/migrated/Picture30-3-7c37461f.png)

2. Nhập `delete` để xác nhận hành động.

[![](/img/migrated/Picture31-3-c8f7c979.png)](/img/migrated/Picture31-3-c8f7c979.png)

3. Kết quả sau khi xóa:

[![](/img/migrated/Picture32-3-ab4a5764.png)](/img/migrated/Picture32-3-ab4a5764.png)

[![](/img/migrated/Picture33-3-9e7d4359.png)](/img/migrated/Picture33-3-9e7d4359.png)
