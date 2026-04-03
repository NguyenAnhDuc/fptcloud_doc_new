---
id: "tutorials-tao-role"
title: "Tạo Role"
description: "Hướng dẫn tạo mới Role trong Auth Method để cấp quyền truy cập Secret"
sidebar_label: "Tạo Role"
sidebar_position: "12"
---

# Tạo Role

Role liên kết Auth Method với Policy, xác định tập hợp quyền mà ứng dụng được cấp khi xác thực thành công. Sau khi tạo Role, hệ thống cấp **Role ID** và **Secret ID** dùng để xác thực.

1. Trên **Access Detail**, chọn **Auth Method** cần thêm **Role**.

   [![Màn hình danh sách Auth Method](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)](/img/migrated/Userguide-FPT-KeyVault-2022-25-1024x538-eeeed2db.png)

2. Chọn **Create**.

   [![Màn hình Access Detail với nút Create](/img/migrated/Userguide-FPT-KeyVault-2022-26-1024x538-35ec4a72.png)](/img/migrated/Userguide-FPT-KeyVault-2022-26-1024x538-35ec4a72.png)

3. Trên màn hình **Create New Role**, nhập các thông tin cần thiết:

   - **Role Name**: Tên Role.
   - **Assigned Groups**: Thêm Policy đã tạo trong phần Quản lý Policy.

   [![Form tạo mới Role với các trường Role Name và Assigned Groups](/img/migrated/Userguide-FPT-KeyVault-2022-27-edacd088.png)](/img/migrated/Userguide-FPT-KeyVault-2022-27-edacd088.png)

4. Chọn **Create**. Sau khi tạo thành công, popup chứa **Role ID** và **Secret ID** sẽ hiển thị.

   [![Popup hiển thị Role ID và Secret ID sau khi tạo thành công](/img/migrated/Userguide-FPT-KeyVault-2022-28-1043058f.png)](/img/migrated/Userguide-FPT-KeyVault-2022-28-1043058f.png)

:::warning
**Role ID** và **Secret ID** chỉ hiển thị một lần duy nhất. Hãy lưu trữ ở nơi an toàn ngay sau khi tạo.
:::
