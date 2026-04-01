---
id: "scale-thu-cong"
title: "Scale thủ công"
sidebar_label: "Scale thủ công"
sidebar_position: "10"
---

# Scale thủ công

##  **ステップ1:** Truy cập trang **Autoscaling > Autoscale Group**. Trên dòng tương ứng với group cần điều chỉnh, click vào biểu tượng **Action menu**.
[![open group action menu](/img/migrated/Screenshot-2024-10-02-023008-8d0f1521.png)](/img/migrated/Screenshot-2024-10-02-023008-8d0f1521.png)
## Trường hợp 1: Scale in
###  **ステップ2:** **Scale in**.
[![scale in](/img/migrated/scalein-1-d604a3de.png)](/img/migrated/scalein-1-d604a3de.png)
###  **ステップ3:** Một hộp thoại sẽ xuất hiện, thực hiện cấu hình thông số và chọn **Scale in**.
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
**Count:** Số lượng node cần giảm bớt.
## Trường hợp 2: Scale out
###  **ステップ2:** **Scale out**.
[![scale out](/img/migrated/scalein-cd3d34b8.png)](/img/migrated/scalein-cd3d34b8.png)
###  **ステップ3:** Một hộp thoại sẽ xuất hiện, thực hiện cấu hình thông số và chọn **Scale out**.
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
**Count:** số lượng node cần thêm vào.
## Trường hợp 3: Resize
###  **ステップ2:** **Resize**.
[![resize](/img/migrated/scaleout-6be7c5a6.png)](/img/migrated/scaleout-6be7c5a6.png)
###  **ステップ3:** Một hộp thoại sẽ xuất hiện, thực hiện cấu hình thông số và chọn **Resize**.
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
**Change type** : Lựa chọn hình thức điều chỉnh cho group.
**Number** : Tùy vào **Change type** được chọn, giá trị này sẽ có ý nghĩa khác nhau.
  * Exact capacity: Nhập công suất mới của group (số nguyên dương). Sau khi điều chỉnh, số lượng node trong group sẽ bằng đúng giá trị này.
  * Change in capacity: Nhập số node cần thêm vào (số nguyên dương) hoặc cần loại bỏ (số nguyên âm) khỏi group. Sau khi điều chỉnh, số lượng node trong group sẽ bằng công suất trước khi điều chỉnh cộng thêm hoặc trừ đi giá trị tuyệt đối của **Number**.
  * Change in percentage: Nhập tỷ lệ (%) cần thêm vào (số thực dương) hoặc cần loại bỏ (số thực âm) dựa trên công suất hiện tại của group. Ví dụ: Công suất hiện tại của group là 4, giá trị của **Number** là 50%. Suy ra, số node được thêm vào là 50% của 4, tức là 2 nodes mới sẽ được sinh ra và tổng công suất sau khi điều chỉnh là 6.

**Min size** và **Max size** : Resize còn cho phép điều chỉnh thông số chặn dưới và chặn trên của group.
Hệ thống sẽ kiểm tra lại thông tin và thực hiện resize group nếu hợp lệ. Sau khi thực hiện thành công, status của group sẽ chuyển từ **Resizing** sang **Active**.
