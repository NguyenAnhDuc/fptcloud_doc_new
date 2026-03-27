---
id: "mange-admin-account"
title: "Mange Admin Account"
description: "Mặc định khi tạo ArgoCD instance user admin sẽ được enable để người dùng có thể login vào ArgoCD để sử dụng. Nếu muốn di"
sidebar_label: "Mange Admin Account"
sidebar_position: 28
---

# Mange Admin Account

Mặc định khi tạo ArgoCD instance user admin sẽ được enable để người dùng có thể login vào ArgoCD để sử dụng. Nếu muốn disable/enable admin user người dùng có thể thực hiện như sau: 
**_A. Disable admin user_**
  * **Bước 1** : Tại màn **Essential Properties** > Click **Disable Admin Account** : 

[![](/img/migrated/Picture1-5-71caab00.png)](/img/migrated/Picture1-5-71caab00.png)
  * **Bước 2** : Sau khi Click Disable Admin Account thực hiện **Confirm** để hoàn tất hành động: 

[![](/img/migrated/Picture2-5-41f37b40.png)](/img/migrated/Picture2-5-41f37b40.png)
  * **Bước 3** : Kết quả sau khi disable Admin Account:

[![](/img/migrated/Picture3-6-fa289198.png)](/img/migrated/Picture3-6-fa289198.png)
Sau khi disable Admin Account người dùng có thể truy cập vào ArgoCD thông qua Local Account hoặc thông qua OIDC Scope. Trong trường hợp chưa có Local Account/ OIDC config màn hình đăng nhập sẽ như sau:
[![](/img/migrated/Picture4-6-602fd335.png)](/img/migrated/Picture4-6-602fd335.png)
Trong trường hợp có Local Account/ Cấu hình OIDC Scope, có thể login vào ArgoCD thông qua username/password như bình thường:
[![](/img/migrated/Picture5-6-9efcfab4.png)](/img/migrated/Picture5-6-9efcfab4.png)
**_B. Enable admin user_**
Người dùng có thể enable lại user admin như sau:
  * **Bước 1** : Tại màn **Essential Properties** > Click **Enable Admin Account** :

[![](/img/migrated/Picture6-6-f3355acc.png)](/img/migrated/Picture6-6-f3355acc.png)
  * **Bước 2** : Sau khi Click Enable Admin Account thực hiện **Confirm** để hoàn tất hành động:

[![](/img/migrated/Picture7-6-6c7b65b6.png)](/img/migrated/Picture7-6-6c7b65b6.png)
  * **Bước 3** : Kết quả sau khi Enable Admin Account:

[![](/img/migrated/Picture8-6-a1c6eba8.png)](/img/migrated/Picture8-6-a1c6eba8.png)
Sau khi enable admin account có thể đang nhập vào ArgoCD thông qua account admin: 
[![](/img/migrated/Picture9-6-ab4e8650.png)](/img/migrated/Picture9-6-ab4e8650.png)