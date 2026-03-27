---
id: "tags-floating-ip"
title: "Quản lý tag cho Floating IP"
description: "Gắn và quản lý tag cho Floating IP — khi allocate hoặc sau khi địa chỉ IP đã được tạo."
sidebar_label: "Quản lý tag cho Floating IP"
sidebar_position: 11
---

# Tags Floating Ip

## **1. Gắn tag trong lúc allocate floating IP**
**Bước 1** : Ở menu chọn **Floating IP** > chọn **Allocate floating IP**
[![file](/img/migrated/image-1721033013519-4b52f8a3.png)](/img/migrated/image-1721033013519-4b52f8a3.png)
**Bước 2** : Tại hộp thoại **Allocate floating IP** người dùng có thể chọn tag ở trường **Add tag (optional)** để gắn tag vào floating ip.
[![file](/img/migrated/image-1721033024980-d3da2516.png)](/img/migrated/image-1721033024980-d3da2516.png)
**Bước 3** : Người dùng điền các thông tin khác và nhấn **Allocate floating IP** để tạo địa chỉ IP, tag được gắn vào địa chỉ IP sẽ hiển thị trên trường **Tags** tại màn hình **Floating IP**
[![file](/img/migrated/image-1721033045955-e90a291a.png)](/img/migrated/image-1721033045955-e90a291a.png)
## **2. Manage tag cho Floating IP**
**Bước 1** : Ở menu chọn **Floating IP** > chọn **Actions** > chọn **Manage tags**
[![file](/img/migrated/image-1721033062003-848e2fa0.png)](/img/migrated/image-1721033062003-848e2fa0.png)
**Bước 2** : Hộp thoại hiện ra, người dùng chọn tag để gắn vào floating ip
[![file](/img/migrated/image-1721033073805-c26dcd82.png)](/img/migrated/image-1721033073805-c26dcd82.png)
**Bước 3** : Nếu người dùng muốn gỡ tag ra khỏi floating ip
Chọn dấu “x” bên cạnh tên các tag muốn gỡ để thực hiện thao tác gỡ tag (người dùng cũng có thể click vào dấu “x” ở cuối listbox để gỡ cùng lúc toàn bộ tag khỏi floating ip), sau đó chọn **Save**.
**Lưu ý rằng khi người dùng xóa floating ip, điều này sẽ dẫn đến việc hệ thống tự động gỡ bỏ các tag liên kết và cập nhật lại danh sách tag trên màn hình Tagging.**
[![file](/img/migrated/image-1721033085127-782fa93d.png)](/img/migrated/image-1721033085127-782fa93d.png)