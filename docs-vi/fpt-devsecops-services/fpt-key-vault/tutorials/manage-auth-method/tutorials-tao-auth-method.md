---
id: "tutorials-tao-auth-method"
title: "Tạo Auth Method"
description: "Hướng dẫn tạo mới Auth Method để xác thực ứng dụng với Vault"
sidebar_label: "Tạo Auth Method"
sidebar_position: 1
---

# Tạo Auth Method

Auth Method xác định cách ứng dụng hoặc người dùng xác thực với Vault để lấy token truy cập Secret. FPT Key Vault hỗ trợ Auth Method kiểu AppRole, phù hợp cho machine-to-machine authentication.

1. Trên **Key Vault Management**, chọn **Key Vault** cần thêm **Auth Method**.

   [![Màn hình danh sách Key Vault Management](/img/migrated/Userguide-FPT-KeyVault-2022-4-1024x538-3dcfc356.png)](/img/migrated/Userguide-FPT-KeyVault-2022-4-1024x538-3dcfc356.png)

2. Mở tab **Access** và chọn **Create**.

   [![Tab Access với nút Create](/img/migrated/Userguide-FPT-KeyVault-2022-23-1024x538-203d8c88.png)](/img/migrated/Userguide-FPT-KeyVault-2022-23-1024x538-203d8c88.png)

3. Trên màn hình **Create New Auth Method**, nhập các thông tin cần thiết:

   - **Mount Point**: Phân vùng lưu trữ thông tin Secret của phương thức xác thực.
   - **Type**: Chọn **App Role**.

   [![Form tạo mới Auth Method với các trường Mount Point và Type](/img/migrated/Userguide-FPT-KeyVault-2022-24-de0b25f2.png)](/img/migrated/Userguide-FPT-KeyVault-2022-24-de0b25f2.png)

4. Chọn **Create** để hoàn tất. Hệ thống gửi thông báo xác nhận và tiến hành tạo **Auth Method** mới.

   [![Danh sách Auth Method sau khi tạo thành công](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)

:::note
Hệ thống luôn tạo mặc định một Auth Method với type **Token**. Auth Method này không thể xóa được.
:::
