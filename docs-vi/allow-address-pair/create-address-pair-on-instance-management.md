---
id: "create-address-pair-on-instance-management"
title: "Tạo address pair trong Instance Management"
description: "Hướng dẫn tạo allow address pair trực tiếp từ màn hình quản lý instance."
sidebar_label: "Tạo address pair trong Instance Management"
sidebar_position: 4
---

# Tạo address pair trong Instance Management

1. Vào **Network Interface** trong Instance Management.

   [![Màn hình Network Interface trong Instance Management](/img/migrated/image-1708395287542-5f97bc70.png)](/img/migrated/image-1708395287542-5f97bc70.png)

2. Chọn nút ba chấm (action).

   [![Nút action ba chấm](/img/migrated/image-1708395308051-7e4aea2c.png)](/img/migrated/image-1708395308051-7e4aea2c.png)

3. Chọn **Create allow address pair**.

   [![Chọn Create allow address pair từ menu action](/img/migrated/image-1708395330849-4dc00d57.png)](/img/migrated/image-1708395330849-4dc00d57.png)

4. Cấu hình allow IP address pair:
   - Hệ thống mặc định chọn Network interface card hiện tại.
   - Nhập IP (hoặc CIDR) để allow.

   [![Cấu hình allow IP address pair](/img/migrated/image-1708395364577-06c64d2e.png)](/img/migrated/image-1708395364577-06c64d2e.png)

5. Cấu hình allow MAC address pair (tùy chọn). Nếu không chọn, mặc định hệ thống sẽ lấy địa chỉ MAC của Network interface card đang được chọn.
   - Bấm vào **Advanced Setting**.
   - Nhập địa chỉ MAC.

   [![Cấu hình allow MAC address pair](/img/migrated/image-1708395403972-a559d684.png)](/img/migrated/image-1708395403972-a559d684.png)

6. Bấm **Create allow address pair**.

   [![Bấm Create allow address pair](/img/migrated/image-1708395440253-4bafad85.png)](/img/migrated/image-1708395440253-4bafad85.png)

7. Kiểm tra thông tin. Thông tin được cập nhật ở màn hình danh sách Allow address pair và thông tin trong Network interface của instance.

   [![Danh sách Allow address pair sau khi tạo](/img/migrated/image-1708395474257-047d287b.png)](/img/migrated/image-1708395474257-047d287b.png)

   [![Network interface của instance sau khi tạo](/img/migrated/image-1708395486779-7e386ff3.png)](/img/migrated/image-1708395486779-7e386ff3.png)
