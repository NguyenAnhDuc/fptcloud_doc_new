---
id: "tags-security-group"
title: "Quản lý tag cho Security Group"
description: "Gắn và quản lý tag cho Security Group — khi tạo mới hoặc sau khi Security Group đã được khởi tạo."
sidebar_label: "Quản lý tag cho Security Group"
sidebar_position: 8
---

# Quản lý tag cho Security Group

Gắn tag cho Security Group giúp bạn phân loại các nhóm bảo mật theo dự án hoặc môi trường — thuận tiện cho việc quản lý chính sách truy cập.

## Gắn tag khi tạo Security Group

1. Chọn **Security group** từ menu, nhấn **Create security group**.

   [![Màn hình Security group với nút Create security group](/img/migrated/image-1721034868364-9582cb2e.png)](/img/migrated/image-1721034868364-9582cb2e.png)

2. Tại trang **Create security group**, chọn tag trong trường **Add tag (optional)**.

   [![Trang Create security group với trường Add tag](/img/migrated/image-1721034882491-a8d79b00.png)](/img/migrated/image-1721034882491-a8d79b00.png)

3. Điền các thông tin khác và nhấn **Create security group**.

Tag được gắn hiển thị trên trường **Tags** tại màn hình **Security group**.

[![Danh sách Security Group với tag đã gắn](/img/migrated/image-1721034894848-efbc40e0.png)](/img/migrated/image-1721034894848-efbc40e0.png)

## Quản lý tag cho Security Group đã tạo

1. Chọn **Security group** từ menu, chọn security group cần quản lý, nhấn **Actions** → **Manage tags**.

   [![Menu Actions với tùy chọn Manage tags cho Security Group](/img/migrated/image-1721034908522-a8960341.png)](/img/migrated/image-1721034908522-a8960341.png)

2. Hộp thoại hiển thị, chọn tag để gắn vào Security Group.

   [![Hộp thoại Manage tags cho Security Group](/img/migrated/image-1721034922176-ded21a16.png)](/img/migrated/image-1721034922176-ded21a16.png)

3. Để gỡ tag, nhấn dấu **x** bên cạnh tên tag. Nhấn dấu **x** ở cuối listbox để gỡ toàn bộ tag. Nhấn **Save** để lưu thay đổi.

   [![Hộp thoại Manage tags với tùy chọn gỡ tag](/img/migrated/image-1721034933906-b25bc9ee.png)](/img/migrated/image-1721034933906-b25bc9ee.png)

:::warning
Khi xóa Security Group, hệ thống tự động gỡ các tag liên kết và cập nhật danh sách tag trên màn hình Tagging.
:::

## Bước tiếp theo

- [Quản lý tag cho Load Balancer](./tagg-lb.md)
