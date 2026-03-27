---
id: "cau-hinh-oidc-config"
title: "Cấu hình OIDC config"
description: "Sau khi enable thành công OIDC, FPT Cloud cho phép thêm mới một OIDC Config để phục vụ tích hợp SSO như sau:"
sidebar_label: "Cấu hình OIDC config"
sidebar_position: 35
---

# Cau Hinh Oidc Config

Sau khi enable thành công OIDC, FPT Cloud cho phép thêm mới một OIDC Config để phục vụ tích hợp SSO như sau:
  * **Bước 1** : Tại màn hình **Security & Access** > **OIDC Scope** , thực hiện Add new OIDC như sau:

[![](/img/migrated/Picture23-4-eb213e0f.png)](/img/migrated/Picture23-4-eb213e0f.png)
  * **Bước 2** : Nhập thông tin cấu hình OIDC. Các thông tin này sẽ được lấy từ hệ thống KeyCloak để quản lý user của người dùng bao gồm các thông tin sau:

✓ Name: Tên hiển thị khi login vào ArgoCD (Login via [Name]) 
✓ Issuer: được lấy từ hệ thống Keycloak sau khi tạo 1 client 
✓ ClientID: ClientID được tạo từ hệ thống KeyCloack để quản lý user của ArgoCD 
✓ ClientSecret: ClientSecret của ClientID được tạo 
[![](/img/migrated/Picture24-4-30a35542.png)](/img/migrated/Picture24-4-30a35542.png)
**Bước 3** : Kết quả sau khi cấu hình OIDC:
[![](/img/migrated/Picture25-4-ea9826ed.png)](/img/migrated/Picture25-4-ea9826ed.png)
[![](/img/migrated/Picture26-4-b05c5e5c.png)](/img/migrated/Picture26-4-b05c5e5c.png)