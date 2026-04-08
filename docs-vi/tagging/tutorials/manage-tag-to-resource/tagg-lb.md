---
id: "tagg-lb"
title: "Quản lý tag cho Load Balancer"
description: "Gắn và quản lý tag cho Load Balancer — khi tạo mới hoặc sau khi Load Balancer đã được khởi tạo."
sidebar_label: "Quản lý tag cho Load Balancer"
sidebar_position: 9
pagination_next: null
---

# Quản lý tag cho Load Balancer

Gắn tag cho Load Balancer giúp bạn phân loại bộ cân bằng tải theo dự án hoặc môi trường — thuận tiện cho việc quản lý hạ tầng mạng.

## Gắn tag khi tạo Classic Load Balancer

1. Chọn **Classic load balancer** từ menu, nhấn **Create load balancer**.

   [![Màn hình Classic load balancer với nút Create load balancer](/img/migrated/image-1721034946476-8389286e.png)](/img/migrated/image-1721034946476-8389286e.png)

2. Tại hộp thoại **Create load balancer**, chọn tag trong trường **Add tag (optional)**.

   [![Hộp thoại Create load balancer với trường Add tag](/img/migrated/image-1721034960349-bc880785.png)](/img/migrated/image-1721034960349-bc880785.png)

## Quản lý tag cho Load Balancer đã tạo

1. Tại màn hình **Classic Load Balancer**, chọn load balancer, nhấn **Actions** → **Manage tags**.

   [![Menu Actions với tùy chọn Manage tags cho Load Balancer](/img/migrated/image-1721034970802-6fc88cac.png)](/img/migrated/image-1721034970802-6fc88cac.png)

2. Hộp thoại hiển thị, chọn tag để gắn vào Load Balancer.

   [![Hộp thoại Manage tags cho Load Balancer](/img/migrated/image-1721034981643-db1aeca2.png)](/img/migrated/image-1721034981643-db1aeca2.png)

3. Để gỡ tag, nhấn dấu **x** bên cạnh tên tag. Nhấn dấu **x** ở cuối listbox để gỡ toàn bộ tag. Nhấn **Save** để lưu thay đổi.

   [![Hộp thoại Manage tags với tùy chọn gỡ tag](/img/migrated/image-1721034991057-8426f650.png)](/img/migrated/image-1721034991057-8426f650.png)

:::warning
Khi xóa Load Balancer, hệ thống tự động gỡ các tag liên kết và cập nhật danh sách tag trên màn hình Tagging.
:::
