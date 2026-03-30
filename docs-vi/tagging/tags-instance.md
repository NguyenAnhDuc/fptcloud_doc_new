---
id: "tags-instance"
title: "Quản lý tag cho Instance"
description: "Gắn và quản lý tag cho Instance — khi khởi tạo hoặc sau khi Instance đã được tạo."
sidebar_label: "Quản lý tag cho Instance"
sidebar_position: 7
---

# Quản lý tag cho Instance

Gắn tag cho Instance giúp bạn phân loại máy ảo theo môi trường, dự án hoặc chủ sở hữu — thuận tiện cho việc tìm kiếm và theo dõi chi phí.

## Gắn tag khi khởi tạo Instance

1. Chọn **Instance Management** từ menu, nhấn **Create instance**.

   [![Màn hình Instance Management với nút Create instance](/img/migrated/image-1713112548052-b3294042.png)](/img/migrated/image-1713112548052-b3294042.png)

2. Tại hộp thoại **Create instance**, chọn tag trong trường **Add tag (optional)**.

   [![Hộp thoại Create instance với trường Add tag](/img/migrated/image-1713112563043-5f748c8d.png)](/img/migrated/image-1713112563043-5f748c8d.png)

3. Điền các thông tin khác và nhấn **Create**.

Tag được gắn hiển thị trên trường **Tags** tại màn hình **Instance Management**.

[![Danh sách Instance với tag đã gắn](/img/migrated/image-1713112579862-79f3ce78.png)](/img/migrated/image-1713112579862-79f3ce78.png)

## Quản lý tag cho Instance đã tạo

1. Tại màn hình **Instance Management**, chọn máy ảo, nhấn **Actions** → **Manage tags**.

   [![Menu Actions với tùy chọn Manage tags](/img/migrated/image-1713112615854-06a308da.png)](/img/migrated/image-1713112615854-06a308da.png)

2. Hộp thoại hiển thị, chọn tag để gắn vào máy ảo.

   [![Hộp thoại Manage tags cho Instance](/img/migrated/image-1713112633880-63abac4e.png)](/img/migrated/image-1713112633880-63abac4e.png)

3. Để gỡ tag, nhấn dấu **x** bên cạnh tên tag. Nhấn dấu **x** ở cuối listbox để gỡ toàn bộ tag. Nhấn **Save** để lưu thay đổi.

   [![Hộp thoại Manage tags với tùy chọn gỡ tag](/img/migrated/image-1713112743998-0feaeb65.png)](/img/migrated/image-1713112743998-0feaeb65.png)

:::warning
Khi xóa máy ảo, hệ thống tự động gỡ các tag liên kết và cập nhật danh sách tag trên màn hình Tagging.
:::

## Bước tiếp theo

- [Quản lý tag cho ổ đĩa](./tags-storage-disk.md)
