---
id: "khoi-tao-group"
title: "Create Group"
sidebar_label: "Create Group"
sidebar_position: "7"
---

# Create Group

##  **Step 1:** Access the page **Autoscaling > Autoscale Group**. Select **Create group**.
[![create group](/img/migrated/Screenshot-2024-10-02-014656-aeae77df.png)](/img/migrated/Screenshot-2024-10-02-014656-aeae77df.png)
##  **Step 2:** Một hộp thoại will appears. Thực hiện cấu hình the thông số.
[![create group form](/img/migrated/create_group-401c4b95.png)](/img/migrated/create_group-401c4b95.png)
**Group name** : Enter tên group sao for dễ quản lý nhất. Tên must from 6 đến 20 kí tự, chỉ includes kí tự chữ cái latin, số, and dấu gạch dưới.
**Group profile** : Chọn profile has been tạo trước that làm tham chiếu cơ sở for group.
**Desired capacity** : Số node mong muốn khởi tạo in group, bắt buộc must lớn hơn or bằng **Min size** and nhỏ hơn or bằng **Max size** of group. Đây là số lượng node will is khởi tạo dựa trên profile has been chọn when group is khởi tạo.
**Min size** : Thông số chặn dưới of group, đảm bảo số node tối thiểu in quá trình vận hành group (tránh gây gián đoạn service). Giá trị mặc định là 0, tuy nhiên giá trị is đề xuất là 2 to đảm bảo group will luôn có 2 nodes is duy trì in group trước bất kỳ hành động gây giảm số lượng node nào.
**Max size** : Thông số chặn trên of group, đảm bảo số node tối đa in quá trình vận hành group (tránh gây tiêu tốn tài nguyên mà không có kiểm soát). Giá trị mặc định là 10 đảm bảo group chỉ chứa tối đa 10 nodes is khởi tạo in group trước bất kỳ hành động gây tăng số lượng node nào.
##  **Step 3:** Select **Create**.
Hệ thống will thực hiện kiểm tra lại information về hạn ngạch tài nguyên còn lại in VPC and tạo group. Group is tạo will displayed in trang list groups with status **Creating**.
[![list group creating](/img/migrated/creating-group-96965492.png)](/img/migrated/creating-group-96965492.png)
Tùy ando số node has been điền ở Desired capacity mà thời gian tạo group nhanh hay chậm. Khi status chuyển from **Creating** sang **Active** , group has been sẵn sàng.
[![list group active](/img/migrated/active-group-e4a39361.png)](/img/migrated/active-group-e4a39361.png)
Có thể xem information details of group bằng theh click ando tên group corresponding trên list:
[![view group detail](/img/migrated/Screenshot-2024-10-02-023725-5b0574c3.png)](/img/migrated/Screenshot-2024-10-02-023725-5b0574c3.png)
[![group detail page](/img/migrated/screencapture-console-fptcloud-000823-IN-d1bf88fa.png)](/img/migrated/screencapture-console-fptcloud-000823-IN-d1bf88fa.png)
