---
id: "enable-disable-admin-user"
title: "Enable Disable Admin User"
description: "Mặc định khi tạo ArgoCD instance user admin sẽ được enable để người dùng có thể login vào ArgoCD để sử dụng. Nếu muốn di"
sidebar_label: "Enable Disable Admin User"
sidebar_position: 32
pagination_next: null
---

# Enable Disable Admin User

Mặc định khi tạo ArgoCD instance user admin sẽ được enable để người dùng có thể login vào ArgoCD để sử dụng. Nếu muốn disable/enable admin user người dùng có thể thực hiện như sau:
**_A. Disable admin user_**
  * **Bước 1:** Tại màn **Essential Properties** > Click **Disable Admin Account:** [![](/img/migrated/Picture60-2-5541f2bd.png)](/img/migrated/Picture60-2-5541f2bd.png)
  * **Bước 2:** Sau khi Click Disable Admin Account thực hiện **Confirm** để hoàn tất hành động: [![](/img/migrated/Picture61-2-8c88f74e.png)](/img/migrated/Picture61-2-8c88f74e.png)
  * **Bước 3:** Kết quả sau khi disable Admin Account: [![](/img/migrated/Picture62-2-bbc635b4.png)](/img/migrated/Picture62-2-bbc635b4.png) Sau khi disable Admin Account người dùng có thể truy cập vào ArgoCD thông qua Local Account hoặc thông qua OIDC Scope. Trong trường hợp chưa có Local Account/ OIDC config màn hình đăng nhập sẽ như sau: [![](/img/migrated/Picture63-2-e3980c02.png)](/img/migrated/Picture63-2-e3980c02.png) Trong trường hợp có Local Account/ Cấu hình OIDC Scope, có thể login vào ArgoCD thông qua username/password như bình thường: [![](/img/migrated/Picture64-2-c91c0f62.png)](/img/migrated/Picture64-2-c91c0f62.png)

**_B. Enable admin user_**
Người dùng có thể enable lại user admin như sau:
  * **Bước 1:** Tại màn **Essential Properties** > Click **Enable Admin Account:** [![](/img/migrated/Picture65-2-3de06794.png)](/img/migrated/Picture65-2-3de06794.png)
  * **Bước 2:** Sau khi Click Enable Admin Account thực hiện **Confirm** để hoàn tất hành động: [![](/img/migrated/Picture66-2-c7f796fd.png)](/img/migrated/Picture66-2-c7f796fd.png)
  * **Bước 3:** Kết quả sau khi Enable Admin Account: [![](/img/migrated/Picture67-2-07f5266a.png)](/img/migrated/Picture67-2-07f5266a.png) Sau khi enable admin account có thể đang nhập vào ArgoCD thông qua account admin: [![](/img/migrated/Picture68-2-3bc07d4a.png)](/img/migrated/Picture68-2-3bc07d4a.png)