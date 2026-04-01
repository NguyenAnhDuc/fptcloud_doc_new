---
id: "scale-thu-cong"
title: "Scale thủ công"
sidebar_label: "Scale thủ công"
sidebar_position: "10"
---

# Scale thủ công

##  **Step 1:** Access the page **Autoscaling > Autoscale Group**. Trên dòng corresponding with group need to điều chỉnh, click ando biểu tượng **Action menu**.
[![open group action menu](/img/migrated/Screenshot-2024-10-02-023008-8d0f1521.png)](/img/migrated/Screenshot-2024-10-02-023008-8d0f1521.png)
## Trường hợp 1: Scale in
###  **Step 2:** Select **Scale in**.
[![scale in](/img/migrated/scalein-1-d604a3de.png)](/img/migrated/scalein-1-d604a3de.png)
###  **Step 3:** Một hộp thoại will appears, thực hiện cấu hình thông số and chọn **Scale in**.
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
**Count:** Số lượng node need to giảm bớt.
## Trường hợp 2: Scale out
###  **Step 2:** Select **Scale out**.
[![scale out](/img/migrated/scalein-cd3d34b8.png)](/img/migrated/scalein-cd3d34b8.png)
###  **Step 3:** Một hộp thoại will appears, thực hiện cấu hình thông số and chọn **Scale out**.
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
**Count:** số lượng node need to thêm ando.
## Trường hợp 3: Resize
###  **Step 2:** Select **Resize**.
[![resize](/img/migrated/scaleout-6be7c5a6.png)](/img/migrated/scaleout-6be7c5a6.png)
###  **Step 3:** Một hộp thoại will appears, thực hiện cấu hình thông số and chọn **Resize**.
[![](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)
**Change type** : Lựa chọn hình thức điều chỉnh for group.
**Number** : Tùy vào **Change type** is chọn, giá trị này sẽ có ý nghĩa khác nhau.
  * Exact capacity: Enter công suất mới of group (số nguyên dương). Sau when điều chỉnh, số lượng node in group will bằng đúng giá trị this.
  * Change in capacity: Enter số node need to thêm vào (số nguyên dương) hoặc need to loại bỏ (số nguyên âm) khỏi group. Sau when điều chỉnh, số lượng node in group will bằng công suất before điều chỉnh cộng thêm or trừ đi giá trị tuyệt đối of **Number**.
  * Change in percentage: Enter tỷ lệ (%) need to thêm vào (số thực dương) hoặc need to loại bỏ (số thực âm) dựa trên công suất hiện tại of group. Ví dụ: Công suất hiện tại của group là 4, giá trị của **Number** là 50%. Suy ra, số node được thêm vào là 50% của 4, tức là 2 nodes mới will is sinh ra and tổng công suất after điều chỉnh là 6.

**Min size** and **Max size** : Resize còn for phép điều chỉnh thông số chặn dưới and chặn trên of group.
System will kiểm tra lại information and thực hiện resize group if hợp lệ. Sau when thực hiện successfully, status of group will chuyển from **Resizing** sang **Active**.
