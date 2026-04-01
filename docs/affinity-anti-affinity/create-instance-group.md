---
id: "create-instance-group"
title: "Khởi tạo một Instance Group mới"
sidebar_label: "Khởi tạo một Instance Group mới"
sidebar_position: "3"
---

# Initialize a Instance Group mới

Bạn can khởi tạo a instance group mới with the thao tác đơn giản sau (lưu ý là instance group after tạo ra thì ko thể chỉnh sửa lại is thông tin has been tạo, do that if you muốn thay đổi thì hãy xóa nhóm hiện tại & tạo ra a nhóm mới).
**Step 1** : Ở menu chọn **Compute Engine** > **Instance Group** , chọn **Create instance Group**.
[![file](/img/migrated/image-1705024581953-a55d4346.png)](/img/migrated/image-1705024581953-a55d4346.png)
**Step 2** : Enter the thông tin theo yêu cầu of hệ thống:
  * Name: Tên **instance group**.
  * Policy: tùy chọn chính sách **Soft Affinity** or **Soft Anti Affinity** to áp dụng for instance group you is tạo
  * Note: Bạn can tạo tối đa 10 instance groups, and mỗi instance group chỉ can gắn with tối đa 10 instances. [![file](/img/migrated/image-1705024842925-f64a0e6f.png)](/img/migrated/image-1705024842925-f64a0e6f.png)

**Step 3** : Select **Create instance group**. System will tiến hành khởi tạo and notification kết quả. Nếu successfully, instance group mới will is displayed ở trang **Instance Group Management**. [![file](/img/migrated/image-1705024897223-9b650495.png)](/img/migrated/image-1705024897223-9b650495.png)
