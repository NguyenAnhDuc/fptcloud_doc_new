---
id: "thay-doi-profile-cho-group"
title: "Thay đổi Profile cho Group"
description: "Thay đổi Profile cho Group"
sidebar_label: "Thay đổi Profile cho Group"
sidebar_position: 9
---

# Thay đổi Profile cho Group

##  **Bước 1:** Truy cập trang **Autoscaling > Autoscale Group**. Trên dòng tương ứng với group cần thay đổi profile, click vào biểu tượng **Action menu**.
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
##  **Bước 2:** Trong menu, chọn **Update profile**.
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
##  **Bước 3:** Lựa chọn profile mới cho group và chọn **Update**.
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
**Current profile** : Profile hiện tại đang được group tham chiếu.
**Change to** : Chọn profile mới sẽ áp dụng cho group.
## Lưu ý
Chỉ các nodes được tạo mới của group được tham chiếu đến profile mới. Các node đã tồn tại trước đó, tiếp tục duy trì tham chiếu tới profile cũ. Có nghĩa là tại một thời điểm, group chỉ tham chiếu một profile, nhưng các nodes thuộc group có thể tham chiếu đến các profiles khác nhau.
