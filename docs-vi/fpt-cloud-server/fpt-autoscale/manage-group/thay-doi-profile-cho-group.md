---
id: "thay-doi-profile-cho-group"
title: "Thay đổi Profile cho Group"
description: "Hướng dẫn thay đổi Profile được tham chiếu bởi Autoscale Group trên FPT Autoscale."
sidebar_label: "Thay đổi Profile cho Group"
sidebar_position: 4
---

# Thay đổi Profile cho Group

1. Truy cập trang **Autoscaling > Autoscale Group**. Trên dòng tương ứng với group cần thay đổi profile, nhấn vào biểu tượng **Action menu**.

   [![Menu hành động của Group](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

2. Trong menu, chọn **Update profile**.

   [![Tùy chọn Update profile trong menu](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

3. Chọn profile mới cho group và nhấn **Update**.

   [![Hộp thoại cập nhật Profile](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

   - **Current profile**: Profile hiện tại đang được group tham chiếu.
   - **Change to**: Chọn profile mới sẽ áp dụng cho group.

:::note
Chỉ các node được tạo mới sẽ tham chiếu đến profile mới. Các node đã tồn tại trước đó tiếp tục duy trì tham chiếu tới profile cũ. Tại một thời điểm, group chỉ tham chiếu một profile, nhưng các node trong group có thể tham chiếu đến các profile khác nhau.
:::
