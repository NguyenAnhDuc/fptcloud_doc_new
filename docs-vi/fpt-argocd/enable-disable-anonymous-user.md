---
id: "enable-disable-anonymous-user"
title: "Enable Disable Anonymous User"
description: "Người dùng có thể bật/tắt quyền truy cập ẩn danh vào ArgoCD thông qua giao diện portal. Anonymous user sẽ sử dụng quyền "
sidebar_label: "Enable Disable Anonymous User"
sidebar_position: 31
---

# Enable Disable Anonymous User

Người dùng có thể bật/tắt quyền truy cập ẩn danh vào ArgoCD thông qua giao diện portal. Anonymous user sẽ sử dụng quyền mặc định với role là readonly (chỉ đọc) đối với các chức năng trên ArgoCD. Mặc định trong ArgoCD sẽ tắt quyền truy cập ẩn danh. 
**_A. Enable Anonymous User_**
  * **Bước 1** : Tại màn **Essential Properties** > Click **Enable Anonymous** user

[![](/img/migrated/Picture13-5-658b74a8.png)](/img/migrated/Picture13-5-658b74a8.png)
  * **Bước 2** : Sau khi Click Enable Anonymous user thực hiện **Confirm** để hoàn tất hành động:

[![](/img/migrated/Picture14-5-7a0bd307.png)](/img/migrated/Picture14-5-7a0bd307.png)
  * **Bước 3** : Kết quả sau khi Enable Anonymous user:

[![](/img/migrated/Picture15-5-dddf86f8.png)](/img/migrated/Picture15-5-dddf86f8.png)
Sau khi enable truy cập ẩn danh, có thể xem thông tin chức năng của ArgoCD mà không cần phải đăng nhập:
[![](/img/migrated/Picture16-5-e4b4859f.png)](/img/migrated/Picture16-5-e4b4859f.png)
**_B. Disable Anonymous User_**
  * **Bước 1** : Tại màn **Essential Properties** > Click **Disable Anonymous user** :

[![](/img/migrated/Picture17-5-8c2ea772.png)](/img/migrated/Picture17-5-8c2ea772.png)
  * **Bước 2** : Sau khi Click Disable Anonymous user thực hiện **Confirm** để hoàn tất hành động:

[![](/img/migrated/Picture18-5-6373d159.png)](/img/migrated/Picture18-5-6373d159.png)
  * **Bước 3** : Kết quả sau khi disable anonymous user:

[![](/img/migrated/Picture19-5-8be2f6fe.png)](/img/migrated/Picture19-5-8be2f6fe.png)
Sau khi disable ArgoCD sẽ yêu cầu xác thực bằng việc login trước khi muốn xem thông tin chức năng:
[![](/img/migrated/Picture20-4-2b3f54ba.png)](/img/migrated/Picture20-4-2b3f54ba.png)