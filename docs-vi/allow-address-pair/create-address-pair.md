---
id: "create-address-pair"
title: "Tạo address pair"
description: "Một Network interface card có thể cấu hình nhiều allow address pair và ngược lại, một address pair có thể cấu hình cho nhiều Network interface card của các instance khác nhau."
sidebar_label: "Tạo address pair"
sidebar_position: 3
---

# Tạo address pair

Một Network interface card có thể cấu hình nhiều allow address pair và ngược lại, một address pair có thể cấu hình cho nhiều Network interface card của các instance khác nhau.

1. Ở màn hình quản lý Allow address pair, chọn **Create allow address pair**.

   [![Màn hình quản lý Allow address pair](/img/migrated/image-1708395038189-f6a186ff.png)](/img/migrated/image-1708395038189-f6a186ff.png)

2. Cấu hình allow IP address pair:
   - Chọn instance.
   - Chọn card mạng để cài đặt Allow address pair.
   - Nhập IP (hoặc CIDR) để allow.

   [![Cấu hình allow IP address pair](/img/migrated/image-1708395102833-872f3b79.png)](/img/migrated/image-1708395102833-872f3b79.png)

3. Cấu hình allow MAC address pair (tùy chọn). Nếu không chọn, mặc định hệ thống sẽ lấy địa chỉ MAC của Network interface card đang được chọn.
   - Bấm vào **Advanced Setting**.
   - Nhập địa chỉ MAC.

   [![Cấu hình allow MAC address pair](/img/migrated/image-1708395142834-551ea26d.png)](/img/migrated/image-1708395142834-551ea26d.png)

4. Bấm **Create allow address pair**.

   [![Bấm Create allow address pair](/img/migrated/image-1708395173721-87a3a5e8.png)](/img/migrated/image-1708395173721-87a3a5e8.png)

5. Kiểm tra thông tin. Thông tin được cập nhật ở màn hình danh sách Allow address pair và thông tin trong Network interface của instance.

   [![Danh sách Allow address pair sau khi tạo](/img/migrated/image-1708395209748-2de1f3be.png)](/img/migrated/image-1708395209748-2de1f3be.png)

   [![Network interface của instance sau khi tạo](/img/migrated/image-1708395219352-74b14a4a.png)](/img/migrated/image-1708395219352-74b14a4a.png)
