---
id: "huong-dan-tich-hop-oidc-de-quan-ly-account"
title: "Hướng dẫn tích hợp OIDC để quản lý account trên ArgoCD"
description: "Trong phần này sẽ hướng dẫn người dùng tích hợp KeyCloak với ArgoCD để xác thực người dùng ứng dụng. Cần tạo một client "
sidebar_label: "Hướng dẫn tích hợp OIDC để quản lý account trên ArgoCD"
sidebar_position: 51
---

# Huong Dan Tich Hop Oidc De Quan Ly Account

Trong phần này sẽ hướng dẫn người dùng tích hợp KeyCloak với ArgoCD để xác thực người dùng ứng dụng. Cần tạo một client trong KeyCloak và cấu hình ArgoCD sử dụng KeyCloak trong việc xác thực, sử dụng các nhóm được cấu hình trong KeyCloak để xác định các quyền user được sử dụng trong ArgoCD.
**Bước 1** : Tạo một Client trong KeyCloak
Thực hiện Login tới KeyCloak server > Lựa chọn **Realm** để tạo Client > **Create Client** :
[![](/img/migrated/Picture119-1-b0867aca.png)](/img/migrated/Picture119-1-b0867aca.png) [![](/img/migrated/Picture120-1-6df9610a.png)](/img/migrated/Picture120-1-6df9610a.png) [![](/img/migrated/Picture121-1-45e82415.png)](/img/migrated/Picture121-1-45e82415.png)
Click **Save** > **Credential** , Thông tin Client secret được sử dụng để cấu hình thông tin trên Portal FPT Cloud.
[![](/img/migrated/Picture122-1-0ab8c726.png)](/img/migrated/Picture122-1-0ab8c726.png)
**Bước 2** : Thực hiện cấu hình Group Claim bằng việc tạo mới Client scopes:
[![](/img/migrated/Picture123-1-f51f46f3.png)](/img/migrated/Picture123-1-f51f46f3.png)
Click **Save** để tạo mới Client Scope. Trong tab **Mapper** > **Configure a new mapper** > **Group Membership** :
[![](/img/migrated/Picture124-1-d7e5585c.png)](/img/migrated/Picture124-1-d7e5585c.png)
**Bước 3** : Thực hiện cấu hình groups scope trong Client:
[![](/img/migrated/Picture125-1-706c2c4c.png)](/img/migrated/Picture125-1-706c2c4c.png)
Tạo group: 
[![](/img/migrated/Picture126-1-9b6c7dcb.png)](/img/migrated/Picture126-1-9b6c7dcb.png)
Tạo User và add tới group:
[![](/img/migrated/Picture127-1-b6c9e121.png)](/img/migrated/Picture127-1-b6c9e121.png)
**Bước 4** : Cấu hình ArgoCD Policy: 
Cấp quyền admin/readOnly cho usergroup:
g, ArgoCDAdmins, role:admin g, ArgoCDAdmins, role:readonly
[![](/img/migrated/Picture128-1-32f3f148.png)](/img/migrated/Picture128-1-32f3f148.png)
**Bước 5** : Login ArgoCD qua KeyCloak OIDC Authentication:
[![](/img/migrated/Picture129-1-46fe232c.png)](/img/migrated/Picture129-1-46fe232c.png)
Kết quả sau khi login qua KeyCloak:
[![](/img/migrated/Picture130-7270537c.png)](/img/migrated/Picture130-7270537c.png)
