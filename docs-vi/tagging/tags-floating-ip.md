---
id: "tags-floating-ip"
title: "Quản lý tag cho Floating IP"
description: "Gắn và quản lý tag cho Floating IP — khi allocate hoặc sau khi địa chỉ IP đã được tạo."
sidebar_label: "Quản lý tag cho Floating IP"
sidebar_position: 11
---

# Quản lý tag cho Floating IP

Gắn tag cho Floating IP giúp bạn phân loại địa chỉ IP theo dự án hoặc môi trường — thuận tiện cho việc quản lý mạng và theo dõi chi phí.

## Gắn tag khi allocate Floating IP

1. Chọn **Floating IP** từ menu, nhấn **Allocate floating IP**.

   [![Màn hình Floating IP với nút Allocate floating IP](/img/migrated/image-1721033013519-4b52f8a3.png)](/img/migrated/image-1721033013519-4b52f8a3.png)

2. Tại hộp thoại **Allocate floating IP**, chọn tag trong trường **Add tag (optional)**.

   [![Hộp thoại Allocate floating IP với trường Add tag](/img/migrated/image-1721033024980-d3da2516.png)](/img/migrated/image-1721033024980-d3da2516.png)

3. Điền các thông tin khác và nhấn **Allocate floating IP**.

Tag được gắn hiển thị trên trường **Tags** tại màn hình **Floating IP**.

[![Danh sách Floating IP với tag đã gắn](/img/migrated/image-1721033045955-e90a291a.png)](/img/migrated/image-1721033045955-e90a291a.png)

## Quản lý tag cho Floating IP đã tạo

1. Chọn **Floating IP** từ menu, nhấn **Actions** → **Manage tags**.

   [![Menu Actions với tùy chọn Manage tags cho Floating IP](/img/migrated/image-1721033062003-848e2fa0.png)](/img/migrated/image-1721033062003-848e2fa0.png)

2. Hộp thoại hiển thị, chọn tag để gắn vào Floating IP.

   [![Hộp thoại Manage tags cho Floating IP](/img/migrated/image-1721033073805-c26dcd82.png)](/img/migrated/image-1721033073805-c26dcd82.png)

3. Để gỡ tag, nhấn dấu **x** bên cạnh tên tag. Nhấn dấu **x** ở cuối listbox để gỡ toàn bộ tag. Nhấn **Save** để lưu thay đổi.

   [![Hộp thoại Manage tags với tùy chọn gỡ tag](/img/migrated/image-1721033085127-782fa93d.png)](/img/migrated/image-1721033085127-782fa93d.png)

:::warning
Khi xóa Floating IP, hệ thống tự động gỡ các tag liên kết và cập nhật danh sách tag trên màn hình Tagging.
:::

## Bước tiếp theo

- [Quản lý tag cho Subnet](./tags-subnet.md)
