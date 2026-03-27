---
id: "khoi tao role va phan quyen cho role"
title: "Khởi tạo role và phân quyền cho role"
description: "Để khởi tạo một Custom Role mới, bạn thao tác như sau:"
sidebar_label: "Khởi tạo role và phân quyền cho role"
sidebar_position: 6
---

# Khoi Tao Role Va Phan Quyen Cho Role

Để khởi tạo một Custom Role mới, bạn thao tác như sau:
**Bước 1** : Ở menu chọn **IAM** > Roles, chọn **Create Role**.
[![file](/img/migrated/image-1734344082428-bbf19de4.png)](/img/migrated/image-1734344082428-bbf19de4.png)
**Bước 2** : Trên giao diện trang Create role nhập các thông tin theo yêu cầu
[![file](/img/migrated/image-1734344107230-7ca36cf8.png)](/img/migrated/image-1734344107230-7ca36cf8.png)
  * **Name** : Chọn tên role (Trường bắt buộc - Name limits up to 100 characters. Only letters, numbers, underscore, hyphens, spaces, dot are allowed. - không được trùng tên).
  * **Description** : Mô tả role, trường không bắt buộc
  * **Permissions** : gồm có 3 thành phần
    * **Loại dịch vụ được cấp quyền** : danh sách dịch vụ trên hệ thống (compute, storage, networking...)
    * **Action** : những action của tính năng được filter theo loại dịch vụ ( Vd: Create Instance, Edit Instance, Delete Instance...)
    * **Resource** : tài nguyên mà người dùng được phân quyền có thể tương tác

**Bước 2.1** Chọn **Service type**
  * Người dùng bấm vào dropdown list để chọn loại dịch vụ

[![file](/img/migrated/image-1734344121975-fab6d10b.png)](/img/migrated/image-1734344121975-fab6d10b.png)
  * **Bước 2.2** Chọn **Action**
    * Sau khi người dùng chọn service type, hệ thống sẽ hiển thị danh sách action của dịch vụ đó
    * Người dùng chọn action để phân quyền

[![file](/img/migrated/image-1734344178335-9d6630c8.png)](/img/migrated/image-1734344178335-9d6630c8.png)
**Bước 2.3** Chọn resource người dùng được quyền action. Có 2 lựa chọn gồm:
  * **All** : phân quyền cho toàn bộ tài nguyên trên tenant (tất cả Project và VPC thuộc tenant)

[![file](/img/migrated/image-1734344193185-d4cff5ca.png)](/img/migrated/image-1734344193185-d4cff5ca.png)
  * **Specific** : phân quyền cho 1 số tài nguyên nhất định 
    * Đối với dịch vụ máy ảo: người dùng có thể phân quyền đến từng máy ảo 

[![file](/img/migrated/image-1734344207802-f7293df7.png)](/img/migrated/image-1734344207802-f7293df7.png)
  * Đối với dịch vụ khác: người dùng có thể phân quyền đến mức Project, VPC

[![file](/img/migrated/image-1734344228919-7517e5bf.png)](/img/migrated/image-1734344228919-7517e5bf.png)
**Bước 3** : Chọn **Create** , hệ thống sẽ tiến hành khởi tạo và thông báo kết quả.