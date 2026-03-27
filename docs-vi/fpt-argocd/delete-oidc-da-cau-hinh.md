---
id: "delete-oidc-da-cau-hinh"
title: "Delete OIDC đã cấu hình"
description: "* **Bước 1** : Tại màn hình **Security & Access** > **OIDC Scope** , thực hiện Delete OIDC Scope như sau:"
sidebar_label: "Delete OIDC đã cấu hình"
sidebar_position: 37
---

# Delete Oidc Da Cau Hinh

* **Bước 1** : Tại màn hình **Security & Access** > **OIDC Scope** , thực hiện Delete OIDC Scope như sau:

[![](/img/migrated/Picture30-3-7c37461f.png)](/img/migrated/Picture30-3-7c37461f.png)
  * **Bước 2** : Nhập confirm “delete” text để xác nhận hành động

[![](/img/migrated/Picture31-3-c8f7c979.png)](/img/migrated/Picture31-3-c8f7c979.png)
  * **Bước 3** : Kết quả sau khi xoá OIDC Scope:

[![](/img/migrated/Picture32-3-ab4a5764.png)](/img/migrated/Picture32-3-ab4a5764.png)
Sau khi xoá OIDC Scope, OIDC Scope sẽ chuyển về trạng thái disable và ArgoCD chỉ hỗ trợ login qua user/pass nếu admin account được enable hoặc có local account được cấu hình:
[![](/img/migrated/Picture33-3-9e7d4359.png)](/img/migrated/Picture33-3-9e7d4359.png)
Hướng dẫn chi tiết xem tại mục **Demo > Hướng dẫn tích hợp OIDC để quản lý account trên ArgoCD**