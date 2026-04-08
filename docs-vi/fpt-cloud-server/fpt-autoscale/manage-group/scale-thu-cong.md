---
id: "scale-thu-cong"
title: "Scale thủ công"
description: "Hướng dẫn thực hiện scale in, scale out và resize thủ công cho Autoscale Group trên FPT Autoscale."
sidebar_label: "Scale thủ công"
sidebar_position: 5
---

# Scale thủ công

1. Truy cập trang **Autoscaling > Autoscale Group**. Trên dòng tương ứng với group cần điều chỉnh, nhấn vào biểu tượng **Action menu**.

   [![Menu hành động của Group](/img/migrated/Screenshot-2024-10-02-023008-8d0f1521.png)](/img/migrated/Screenshot-2024-10-02-023008-8d0f1521.png)

## Trường hợp 1: Scale in

2. Chọn **Scale in**.

   [![Tùy chọn Scale in trong menu](/img/migrated/scalein-1-d604a3de.png)](/img/migrated/scalein-1-d604a3de.png)

3. Một hộp thoại xuất hiện. Cấu hình thông số và chọn **Scale in**.

   [![Hộp thoại Scale in](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

   - **Count**: Số lượng node cần giảm bớt.

## Trường hợp 2: Scale out

2. Chọn **Scale out**.

   [![Tùy chọn Scale out trong menu](/img/migrated/scalein-cd3d34b8.png)](/img/migrated/scalein-cd3d34b8.png)

3. Một hộp thoại xuất hiện. Cấu hình thông số và chọn **Scale out**.

   [![Hộp thoại Scale out](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

   - **Count**: Số lượng node cần thêm vào.

## Trường hợp 3: Resize

2. Chọn **Resize**.

   [![Tùy chọn Resize trong menu](/img/migrated/scaleout-6be7c5a6.png)](/img/migrated/scaleout-6be7c5a6.png)

3. Một hộp thoại xuất hiện. Cấu hình thông số và chọn **Resize**.

   [![Hộp thoại Resize](/img/migrated/placeholder.png)](/img/migrated/placeholder.png)

   - **Change type**: Hình thức điều chỉnh cho group.
   - **Number**: Giá trị có ý nghĩa khác nhau tùy theo **Change type** được chọn:
     - _Exact capacity_: Nhập công suất mới (số nguyên dương). Sau khi điều chỉnh, số node trong group bằng đúng giá trị này.
     - _Change in capacity_: Nhập số node cần thêm (số nguyên dương) hoặc loại bỏ (số nguyên âm). Số node sau điều chỉnh bằng công suất hiện tại cộng/trừ giá trị tuyệt đối của **Number**.
     - _Change in percentage_: Nhập tỷ lệ (%) cần thêm (số thực dương) hoặc loại bỏ (số thực âm) dựa trên công suất hiện tại. Ví dụ: công suất hiện tại là 4 node, **Number** là 50% thì thêm 2 node mới, tổng sau điều chỉnh là 6.
   - **Min size** và **Max size**: Resize cho phép điều chỉnh đồng thời giới hạn dưới và giới hạn trên của group.

   Hệ thống kiểm tra thông tin và thực hiện resize group nếu hợp lệ. Sau khi thành công, trạng thái group chuyển từ **Resizing** sang **Active**.
