---
id: "create-instance-group"
title: "作成 một Instance Group mới"
sidebar_label: "作成 một Instance Group mới"
sidebar_position: "3"
---

# Khởi tạo một Instance Group mới

Bạn có thể khởi tạo một instance group mới với các thao tác đơn giản sau (lưu ý là instance group sau khi tạo ra thì ko thể chỉnh sửa lại được thông tin đã tạo, do đó nếu bạn muốn thay đổi thì hãy xóa nhóm hiện tại & tạo ra một nhóm mới).
**Bước 1** : Ở menu chọn **Compute Engine** > **Instance Group** , chọn **Create instance Group**.
[![file](/img/migrated/image-1705024581953-a55d4346.png)](/img/migrated/image-1705024581953-a55d4346.png)
**Bước 2** : Nhập các thông tin theo yêu cầu của hệ thống:
  * Name: Tên **instance group**.
  * Policy: tùy chọn chính sách **Soft Affinity** hoặc **Soft Anti Affinity** để áp dụng cho instance group bạn đang tạo
  * Lưu ý: Bạn có thể tạo tối đa 10 instance groups, và mỗi instance group chỉ có thể gắn với tối đa 10 instances. [![file](/img/migrated/image-1705024842925-f64a0e6f.png)](/img/migrated/image-1705024842925-f64a0e6f.png)

**Bước 3** : Chọn **Create instance group**. Hệ thống sẽ tiến hành khởi tạo và thông báo kết quả. Nếu thành công, instance group mới sẽ được hiển thị ở trang **Instance Group Management**. [![file](/img/migrated/image-1705024897223-9b650495.png)](/img/migrated/image-1705024897223-9b650495.png)
