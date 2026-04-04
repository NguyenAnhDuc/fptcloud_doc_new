---
id: "change-worker-groups-configuration"
title: "Thay đổi cấu hình worker group"
description: "Hướng dẫn thay đổi cấu hình worker group trong cluster Managed FPT Kubernetes Engine."
sidebar_label: "Thay đổi cấu hình worker group"
sidebar_position: "11"
---

# Thay đổi cấu hình worker group

**Bước 1:** Ở menu chọn **Kubernetes** để mở trang **Kubernetes Management**. Chọn cluster muốn thay đổi cấu hình worker group.

[![](/img/migrated/20-1-24780232.png)](/img/migrated/20-1-24780232.png)

**Bước 2:** Chọn **Configure Worker Groups**.

[![](/img/migrated/21-1-daece880.png)](/img/migrated/21-1-daece880.png)

**Bước 3:** Điều chỉnh các thông số theo nhu cầu.

[![](/img/migrated/22-1-a6f5fed9.png)](/img/migrated/22-1-a6f5fed9.png)

**Bước 4:** Kiểm tra lại thông tin và chọn **Save** để áp dụng cấu hình worker group.

[![](/img/migrated/23-1-48952793.png)](/img/migrated/23-1-48952793.png)

Quá trình cập nhật cluster bắt đầu. Bạn không thể chỉnh sửa cluster trong thời gian này.

Khi thay đổi cấu hình worker group, hệ thống sẽ tạo worker node mới với cấu hình mong muốn trước. Sau khi node mới sẵn sàng, các node cũ sẽ bị xóa và pod được di chuyển sang worker node mới.
