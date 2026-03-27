---
id: "create-instance-group"
title: "Khởi tạo một Instance Group mới"
description: "Người dùng có thể khởi tạo một instance group mới với các thao tác:"
sidebar_label: "Khởi tạo một Instance Group mới"
sidebar_position: 78
---

# Create Instance Group

### **Đối với người dùng sử dụng tài nguyên loại General**
Người dùng có thể khởi tạo một instance group mới với các thao tác: 
**Bước 1** : Ở menu chọn **Compute Engine** > **Instance Group** , chọn **Create instance group**.
[![file](/img/migrated/image-1718787333684-df681824.png)](/img/migrated/image-1718787333684-df681824.png)
**Bước 2** : Nhập các thông tin theo yêu cầu của hệ thống: 
  * **Name** : Tên instance group.
  * **Policy** : Tùy chọn chính sách Soft Affinity hoặc Soft Anti Affinity để áp dụng cho instance group người dùng đang tạo

**Lưu ý: Hệ thống hỗ trợ tạo tối đa 10 instance groups, và mỗi instance group chỉ có thể gắn với tối đa 10 instances.**
[![file](/img/migrated/image-1718787364108-3904ea38.png)](/img/migrated/image-1718787364108-3904ea38.png)
**Bước 3** : Chọn **Create instance group**. Hệ thống sẽ tiến hành khởi tạo và thông báo kết quả. 
Nếu thành công, instance group mới sẽ được hiển thị ở trang **Instance Group**.
[![file](/img/migrated/image-1718787383248-4ac3fdff.png)](/img/migrated/image-1718787383248-4ac3fdff.png)
**Lưu ý: Hệ thống không hỗ trợ chỉnh sửa instance group trên resource general, chỉ hỗ trợ xóa để tạo lại instance group mới.**
### **Đối với người dùng sử dụng tài nguyên loại Specific**
Đối với loại tài nguyên specific, khởi tạo một instance group với các thao tác sau:
**Bước 1** : Ở menu chọn **Compute Engine** > **Instance Group** , chọn **Create instance group**.
[![file](/img/migrated/image-1718787551692-5397586a.png)](/img/migrated/image-1718787551692-5397586a.png)
**Bước 2** : Nhập các thông tin theo yêu cầu của hệ thống: 
  * **Name** : Tên instance group.
  * **Policy** : Tùy chọn chính sách Soft Affinity hoặc Soft Anti Affinity để áp dụng cho instance group người dùng đang tạo
  * **Instances** : Người dùng cần chọn ít nhất 2 instance để tạo instance group

[![file](/img/migrated/image-1718787564579-fd673a1f.png)](/img/migrated/image-1718787564579-fd673a1f.png)
**Lưu ý:**
  * Danh sách instance chỉ liệt kê các máy ảo có trạng thái: Running, Stopped.
  * Mỗi VPC được tạo tối đa 10 instance group, mỗi instance group tối đa 10 instance.