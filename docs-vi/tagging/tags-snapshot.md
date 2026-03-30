---
id: "tags-snapshot"
title: "Quản lý tag cho Snapshot"
description: "Gắn và quản lý tag cho Snapshot — khi tạo từ Instance hoặc từ Storage Disk."
sidebar_label: "Quản lý tag cho Snapshot"
sidebar_position: 9
---

# Quản lý tag cho Snapshot

Gắn tag cho Snapshot giúp bạn phân loại các bản sao lưu theo dự án hoặc mục đích — thuận tiện cho việc tìm kiếm và quản lý.

## Gắn tag khi tạo Snapshot từ Instance

1. Chọn **Instance Management** từ menu, nhấn **Actions** → **Create snapshot**.

   [![Menu Actions với tùy chọn Create snapshot](/img/migrated/image-1721015609867-c4ddd33b.png)](/img/migrated/image-1721015609867-c4ddd33b.png)

2. Tại hộp thoại **Create instance snapshot**, chọn tag trong trường **Add tag (optional)**.

   [![Hộp thoại Create instance snapshot với trường Add tag](/img/migrated/image-1721015621343-b9f22c97.png)](/img/migrated/image-1721015621343-b9f22c97.png)

## Gắn tag khi tạo Snapshot từ Storage Disk

1. Chọn **Storage disk** từ menu, nhấn **Actions** → **Create volume snapshot**.

   [![Menu Actions với tùy chọn Create volume snapshot](/img/migrated/image-1721015651110-79c2804c.png)](/img/migrated/image-1721015651110-79c2804c.png)

2. Tại hộp thoại **Create volume snapshot**, chọn tag trong trường **Add tag (optional)**.

   [![Hộp thoại Create volume snapshot với trường Add tag](/img/migrated/image-1721015663094-733cc8b6.png)](/img/migrated/image-1721015663094-733cc8b6.png)

## Quản lý tag cho Snapshot đã tạo

1. Chọn **Snapshot** từ menu. Tại tab **Instance snapshot**, nhấn **Manage tags**.

   [![Tab Instance snapshot với tùy chọn Manage tags](/img/migrated/image-1721015686871-371220cc.png)](/img/migrated/image-1721015686871-371220cc.png)

2. Hộp thoại hiển thị, chọn tag để gắn vào Snapshot.

   [![Hộp thoại Manage tags cho Snapshot](/img/migrated/image-1721015699377-5c976a3c.png)](/img/migrated/image-1721015699377-5c976a3c.png)

3. Để gỡ tag, nhấn dấu **x** bên cạnh tên tag. Nhấn dấu **x** ở cuối listbox để gỡ toàn bộ tag. Nhấn **Save** để lưu thay đổi.

   [![Hộp thoại Manage tags với tùy chọn gỡ tag](/img/migrated/image-1721015718376-1c3d39b9.png)](/img/migrated/image-1721015718376-1c3d39b9.png)

:::warning
Khi xóa Snapshot, hệ thống tự động gỡ các tag liên kết và cập nhật danh sách tag trên màn hình Tagging.
:::

## Bước tiếp theo

- [Quản lý tag cho Custom Image](./tags-custom-image.md)
