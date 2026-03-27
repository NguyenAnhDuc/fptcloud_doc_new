---
id: "tags-snapshot"
title: "Quản lý tag cho Snapshot"
description: "**Bước 1** : Ở menu chọn **Instance Management** , chọn **Actions** > chọn **Create snapshot**"
sidebar_label: "Quản lý tag cho Snapshot"
sidebar_position: 9
---

# Tags Snapshot

## **1. Gắn tag trong lúc tạo snapshot từ instance**
**Bước 1** : Ở menu chọn **Instance Management** , chọn **Actions** > chọn **Create snapshot**
[![file](/img/migrated/image-1721015609867-c4ddd33b.png)](/img/migrated/image-1721015609867-c4ddd33b.png)
**Bước 2** : Tại hộp thoại **Create instance snapshot** người dùng có thể chọn tag ở trường **Add tag (optional)** để gắn tag vào snapshot.
[![file](/img/migrated/image-1721015621343-b9f22c97.png)](/img/migrated/image-1721015621343-b9f22c97.png)
## **2. Gắn tag trong lúc tạo snapshot từ storage disk**
**Bước 1** : Ở menu chọn **Storage disk** > chọn **Actions** > chọn **Create volume snapshot**
[![file](/img/migrated/image-1721015651110-79c2804c.png)](/img/migrated/image-1721015651110-79c2804c.png)
**Bước 2** : Tại hộp thoại **Create volume snapshot** người dùng có thể chọn tag ở trường **Add tag (optional)** để gắn tag vào máy ảo.
[![file](/img/migrated/image-1721015663094-733cc8b6.png)](/img/migrated/image-1721015663094-733cc8b6.png)
## **3. Manage tag cho snapshot**
**Bước 1** : Ở menu chọn **Snapshot**. Ở tab **Instance snapshot** chọn **Manage tags**
[![file](/img/migrated/image-1721015686871-371220cc.png)](/img/migrated/image-1721015686871-371220cc.png)
**Bước 2** : Hộp thoại hiện ra, người dùng chọn tag để gắn vào snapshot
[![file](/img/migrated/image-1721015699377-5c976a3c.png)](/img/migrated/image-1721015699377-5c976a3c.png)
**Bước 3** : Nếu người dùng muốn gỡ tag ra khỏi instance snapshot
Chọn dấu “x” bên cạnh tên các tag muốn gỡ để thực hiện thao tác gỡ tag (người dùng cũng có thể click vào dấu “x” ở cuối listbox để gỡ cùng lúc toàn bộ tag khỏi instance snapshot), sau đó chọn **Save**.
**Lưu ý rằng khi người dùng xóa snapshot, điều này sẽ dẫn đến việc hệ thống tự động gỡ bỏ các tag liên kết và cập nhật lại danh sách tag trên màn hình Tagging.**
[![file](/img/migrated/image-1721015718376-1c3d39b9.png)](/img/migrated/image-1721015718376-1c3d39b9.png)