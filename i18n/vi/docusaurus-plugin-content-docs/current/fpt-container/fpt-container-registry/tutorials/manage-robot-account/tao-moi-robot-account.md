---
id: "tao-moi-robot-account"
title: "Tạo mới robot account"
description: "Tạo robot account với quyền pull/push để tích hợp CI/CD."
sidebar_label: "Tạo mới robot account"
sidebar_position: 2
---

# Tạo mới robot account

Robot account cung cấp thông tin xác thực riêng biệt cho các hệ thống tự động, giúp tách biệt quyền truy cập giữa người dùng và pipeline CI/CD.

1. Trên menu **FPT Portal**, chọn **Container Registry** > tab **Robot Account**.

   [![Tab Robot Account](/img/migrated/Picture59-8e6c388e.png)](/img/migrated/Picture59-8e6c388e.png)

2. Chọn **NEW ROBOT ACCOUNT** và nhập thông tin khởi tạo.

   [![Form tạo robot account](/img/migrated/Picture60-4718d2bb.png)](/img/migrated/Picture60-4718d2bb.png)

   [![Cấu hình chi tiết robot account](/img/migrated/Picture61-b449c47e.png)](/img/migrated/Picture61-b449c47e.png)

   | Trường | Mô tả |
   |---|---|
   | **Name** | Tên robot account |
   | **Expiration time** | Thời gian hết hạn token: theo số ngày hoặc không hết hạn (never expire) |
   | **Description** | Mô tả mục đích sử dụng |
   | **Permissions** | Quyền pull và/hoặc push repository |

3. Sau khi tạo thành công, hộp thoại hiển thị **Username** và **Token**. Sao chép hoặc **Export to File** để lưu thông tin xác thực.

   [![Hộp thoại Username/Token sau khi tạo](/img/migrated/Picture62-f6c856f2.png)](/img/migrated/Picture62-f6c856f2.png)

   :::warning
   Username và Token chỉ hiển thị một lần duy nhất. Hãy lưu ở nơi an toàn ngay sau khi tạo.
   :::

4. Kiểm tra robot account vừa tạo trong danh sách.

   [![Danh sách robot account sau khi tạo](/img/migrated/Picture63-a14d0bfe.png)](/img/migrated/Picture63-a14d0bfe.png)
