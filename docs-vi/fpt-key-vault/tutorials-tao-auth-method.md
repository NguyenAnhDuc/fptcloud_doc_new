---
id: "tutorials-tao-auth-method"
title: "Tạo Auth Method"
description: "**Bước 1:** Trên **Key Vault Management** , chọn **Key Vault** cần thêm **Auth Method.**"
sidebar_label: "Tạo Auth Method"
sidebar_position: 11
---

# Tutorials Tao Auth Method

**Bước 1:** Trên **Key Vault Management** , chọn **Key Vault** cần thêm **Auth Method.**
[![Userguide FPT KeyVault 2022 4](/img/migrated/Userguide-FPT-KeyVault-2022-4-1024x538-3dcfc356.png)](/img/migrated/Userguide-FPT-KeyVault-2022-4-1024x538-3dcfc356.png)
**Bước 2:** Mở tab **Access** và chọn **Create.**
[![Userguide FPT KeyVault 2022 23](/img/migrated/Userguide-FPT-KeyVault-2022-23-1024x538-203d8c88.png)](/img/migrated/Userguide-FPT-KeyVault-2022-23-1024x538-203d8c88.png)
**Bước 3:** Màn hình **Create New Auth Method** hiện ra, người dùng nhập các thông tin cần thiết.
[![Userguide FPT KeyVault 2022 24](/img/migrated/Userguide-FPT-KeyVault-2022-24-de0b25f2.png)](/img/migrated/Userguide-FPT-KeyVault-2022-24-de0b25f2.png)
**Trong đó:**
  * **Mount Point:** phân vùng để lưu trữ thông tin secret của phương thức xác thực
  * **Type:** Chọn **App Role.**

**Bước 4:** Chọn **Create** để thực hiện tạo mới **Auth Method.** Hệ thống sẽ thông báo xác nhận và tiến hành quá trình tạo mới **Auth Method** mới dựa vào thông tin đã nhập.
Danh sách **Auth Method** sau khi tạo thành công.
[![Userguide FPT KeyVault 2022 25](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)
**Lưu ý:** Hệ thống luôn tạo mặc định một Auth Method với type Token. Auth Method này không thể xóa được.