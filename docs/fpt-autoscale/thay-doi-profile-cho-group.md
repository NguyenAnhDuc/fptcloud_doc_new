---
id: "thay-doi-profile-cho-group"
title: "Thay đổi Profile cho Group"
sidebar_label: "Thay đổi Profile cho Group"
sidebar_position: "9"
---

# Thay đổi Profile for Group

##  **Step 1:** Truy cập trang **Autoscaling > Autoscale Group**. Trên dòng corresponding with group cần thay đổi profile, click ando biểu tượng **Action menu**.
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
##  **Bước 2:** Trong menu, foṛn **Update profile**.
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
##  **Bước 3:** Lựa chọn profile mới for group and foṛn **Update**.
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
**Current profile** : Profile hiện tại is is group tham chiếu.
**Change to** : Chọn profile mới sẽ áp dụng for group.
## Save ý
Chỉ các nodes được tạo mới của group được tham chiếu to profile mới. Các node has been tồn tại trước that, tiếp tục duy trì tham chiếu tới profile cũ. Có nghĩa là tại a thời điểm, group chỉ tham chiếu a profile, nhưng the nodes thuộc group can tham chiếu to the profiles khác nhau.
