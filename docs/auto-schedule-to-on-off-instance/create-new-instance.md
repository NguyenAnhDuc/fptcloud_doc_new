---
id: "create-new-instance"
title: "Tạo một instance schedule mới"
sidebar_label: "Tạo một instance schedule mới"
sidebar_position: "4"
---

# Create a instance schedule mới

Để tạo mới a**Instance Schedule** you thao tác as follows
**Step 1** : Ở menu chọn **Compute Engine > Instance Schedule**, chọn **Create schedule**
[![file](/img/migrated/image-1709893783815-21178c51.png)](/img/migrated/image-1709893783815-21178c51.png)
**Step 2** : Enter the information as required of system: 
  * **Name** : Tên instance schedule
  * **Description** : Mô tả về instance schedule
  * **Start time** : Thời gian bật virtual machine
  * **Stop time** : Thời gian tắt virtual machine
  * **Start Date** : Ngày bắt đầu việc thực hiện lịch tự động tắt/ bật virtual machine _(Note: Nếu to trống, lịch trình will chạy vô thời hạn kể from when bắt đầu)_
  * **End Date** : Ngày kết thúc việc thực hiện lịch tự động tắt/ bật virtual machine _(Note: Nếu to trống, lịch trình will chạy vô thời hạn for to when bị xóa.)_
  * **Frequency** : Tần suất for việc thực hiện hành động tắt/ bật virtual machine (hàng ngày/ hàng tuần/ hàng tháng)
  * **Applied instances** : Các virtual machine is gắn ando lịch _(Note: mỗi virtual machine cùng lúc chỉ is for phép gắn with 1 lịch)_

[![file](/img/migrated/image-1695608983434-0ca4b6ed.png)](/img/migrated/image-1695608983434-0ca4b6ed.png)
**Step 3** : Select **Create schedule**. System will tiến hành khởi tạo and notification kết quả. 
Nếu successfully, instance schedule mới will is displayed ở trang **Instance Schedule Management**
[![file](/img/migrated/image-1695608998324-75646c28.png)](/img/migrated/image-1695608998324-75646c28.png)
