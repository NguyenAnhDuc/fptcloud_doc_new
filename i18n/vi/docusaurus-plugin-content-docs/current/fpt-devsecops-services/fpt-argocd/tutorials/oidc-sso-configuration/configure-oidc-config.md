---
id: "configure-oidc-config"
title: "Cấu hình OIDC config"
description: "Hướng dẫn thêm mới cấu hình OIDC để tích hợp SSO với Keycloak"
sidebar_label: "Cấu hình OIDC config"
sidebar_position: 4
---

# Cấu hình OIDC config

Sau khi enable OIDC, thêm mới một OIDC config để tích hợp SSO với Keycloak.

1. Tại màn hình **Security & Access** > **OIDC Scope**, nhấn **Add new OIDC**.

[![](/img/migrated/Picture23-4-eb213e0f.png)](/img/migrated/Picture23-4-eb213e0f.png)

2. Nhập thông tin cấu hình OIDC từ hệ thống Keycloak:
   - **Name**: tên hiển thị khi đăng nhập ArgoCD (ví dụ: `Login via [Name]`)
   - **Issuer**: lấy từ Keycloak sau khi tạo client
   - **ClientID**: client ID tạo từ Keycloak để quản lý user ArgoCD
   - **ClientSecret**: client secret của ClientID đã tạo

[![](/img/migrated/Picture24-4-30a35542.png)](/img/migrated/Picture24-4-30a35542.png)

3. Kết quả sau khi cấu hình OIDC:

[![](/img/migrated/Picture25-4-ea9826ed.png)](/img/migrated/Picture25-4-ea9826ed.png)

[![](/img/migrated/Picture26-4-b05c5e5c.png)](/img/migrated/Picture26-4-b05c5e5c.png)
