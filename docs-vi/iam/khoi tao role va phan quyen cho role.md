---
id: "create-role"
title: "Khởi tạo role và phân quyền cho role"
description: "Hướng dẫn tạo một Custom Role mới và phân quyền cho role trong FPT IAM."
sidebar_label: "Khởi tạo role và phân quyền cho role"
sidebar_position: 6
---

# Khởi tạo role và phân quyền cho role

Để khởi tạo một Custom Role mới, thực hiện như sau.

1. Chọn **IAM** > **Roles**, sau đó chọn **Create Role**.

[![](/img/migrated/image-1734344082428-bbf19de4.png)](/img/migrated/image-1734344082428-bbf19de4.png)

2. Trên trang **Create role**, nhập các thông tin theo yêu cầu.

[![](/img/migrated/image-1734344107230-7ca36cf8.png)](/img/migrated/image-1734344107230-7ca36cf8.png)

   - **Name**: Tên role (bắt buộc, tối đa 100 ký tự, chỉ dùng chữ cái, số, dấu gạch dưới, gạch ngang, khoảng trắng, dấu chấm; không được trùng tên).
   - **Description**: Mô tả role (không bắt buộc).
   - **Permissions**: Gồm 3 thành phần — **Service type** (loại dịch vụ), **Action** (hành động), **Resource** (tài nguyên).

3. Chọn **Service type** từ dropdown list.

[![](/img/migrated/image-1734344121975-fab6d10b.png)](/img/migrated/image-1734344121975-fab6d10b.png)

4. Chọn **Action** từ danh sách hành động của dịch vụ đó.

[![](/img/migrated/image-1734344178335-9d6630c8.png)](/img/migrated/image-1734344178335-9d6630c8.png)

5. Chọn **Resource** mà người dùng được phép thực hiện action. Có 2 lựa chọn:
   - **All**: Phân quyền cho toàn bộ tài nguyên trên tenant (tất cả Project và VPC).

[![](/img/migrated/image-1734344193185-d4cff5ca.png)](/img/migrated/image-1734344193185-d4cff5ca.png)

   - **Specific**: Phân quyền cho một số tài nguyên nhất định. Đối với máy ảo có thể phân quyền đến từng instance; đối với dịch vụ khác có thể phân quyền đến mức Project hoặc VPC.

[![](/img/migrated/image-1734344207802-f7293df7.png)](/img/migrated/image-1734344207802-f7293df7.png)

[![](/img/migrated/image-1734344228919-7517e5bf.png)](/img/migrated/image-1734344228919-7517e5bf.png)

6. Chọn **Create**. Hệ thống tiến hành khởi tạo và thông báo kết quả.
