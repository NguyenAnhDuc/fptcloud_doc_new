---
id: "tags-subnet"
title: "Quản lý tag cho Subnet"
description: "Gắn và quản lý tag cho Subnet — khi tạo mới hoặc sau khi Subnet đã được khởi tạo."
sidebar_label: "Quản lý tag cho Subnet"
sidebar_position: 12
---

# Quản lý tag cho Subnet

Gắn tag cho Subnet giúp bạn phân loại mạng con theo dự án hoặc môi trường — thuận tiện cho việc quản lý hạ tầng mạng.

## Gắn tag khi tạo Subnet

1. Chọn **Subnet** từ menu, nhấn **Create subnet**.

   [![Màn hình Subnet với nút Create subnet](/img/migrated/image-1721034781650-31f7f246.png)](/img/migrated/image-1721034781650-31f7f246.png)

2. Tại trang **Create subnet**, chọn tag trong trường **Add tag (optional)**.

   [![Trang Create subnet với trường Add tag](/img/migrated/image-1721034795338-032c129b.png)](/img/migrated/image-1721034795338-032c129b.png)

3. Điền các thông tin khác và nhấn **Create subnet**.

Tag được gắn hiển thị trên trường **Tags** tại màn hình **Subnet**.

[![Danh sách Subnet với tag đã gắn](/img/migrated/image-1721034807246-4eb48b05.png)](/img/migrated/image-1721034807246-4eb48b05.png)

## Quản lý tag cho Subnet đã tạo

1. Chọn **Subnet** từ menu, chọn subnet cần quản lý, nhấn **Actions** → **Manage tags**.

   [![Menu Actions với tùy chọn Manage tags cho Subnet](/img/migrated/image-1721034830614-0a44d416.png)](/img/migrated/image-1721034830614-0a44d416.png)

2. Hộp thoại hiển thị, chọn tag để gắn vào Subnet.

   [![Hộp thoại Manage tags cho Subnet](/img/migrated/image-1721034842841-94a4bdb4.png)](/img/migrated/image-1721034842841-94a4bdb4.png)

3. Để gỡ tag, nhấn dấu **x** bên cạnh tên tag. Nhấn dấu **x** ở cuối listbox để gỡ toàn bộ tag. Nhấn **Save** để lưu thay đổi.

   [![Hộp thoại Manage tags với tùy chọn gỡ tag](/img/migrated/image-1721034855299-a138f9c7.png)](/img/migrated/image-1721034855299-a138f9c7.png)

:::warning
Khi xóa Subnet, hệ thống tự động gỡ các tag liên kết và cập nhật danh sách tag trên màn hình Tagging.
:::

## Bước tiếp theo

- [Quản lý tag cho Security Group](./tags-security-group.md)
