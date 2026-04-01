---
id: "tutorials-tao-secret-tren-secret-engine"
title: "Tạo Secret trên Secret Engine"
description: "Hướng dẫn tạo mới Secret trong một Secret Engine"
sidebar_label: "Tạo Secret trên Secret Engine"
sidebar_position: 6
---

# Tạo Secret trên Secret Engine

Secret là đơn vị lưu trữ thông tin bí mật theo cấu trúc Key/Value trong Secret Engine. Mỗi Secret có thể chứa nhiều cặp Key/Value và hỗ trợ versioning để theo dõi lịch sử thay đổi.

1. Trên **Secret Engine Detail**, chọn **Secret Engine** cần thêm **Secret**.

   [![Màn hình chi tiết Secret Engine](/img/migrated/Userguide-FPT-KeyVault-2022-10-1024x538-794c4794.png)](/img/migrated/Userguide-FPT-KeyVault-2022-10-1024x538-794c4794.png)

2. Chọn **Create**.

   [![Danh sách Secret với nút Create](/img/migrated/Userguide-FPT-KeyVault-2022-11-1024x538-5970f818.png)](/img/migrated/Userguide-FPT-KeyVault-2022-11-1024x538-5970f818.png)

3. Trên màn hình **Create New Version**, nhập các thông tin cần thiết:

   - **Name**: Tên của **Secret**.
   - **Secret data**: Theo cấu trúc Key/Value.

   [![Form tạo mới Secret với các trường Name và Secret data](/img/migrated/Userguide-FPT-KeyVault-2022-12-bea1cf7c.png)](/img/migrated/Userguide-FPT-KeyVault-2022-12-bea1cf7c.png)

4. Chọn **Add** để thêm từng cặp Key/Value. Sau khi khai báo đủ các Secret, chọn **Create** để lưu. Hệ thống gửi thông báo xác nhận và tiến hành tạo các **Secret** mới.

   [![Danh sách Secret sau khi tạo thành công](/img/migrated/Userguide-FPT-KeyVault-2022-13-da5b58e1.png)](/img/migrated/Userguide-FPT-KeyVault-2022-13-da5b58e1.png)
