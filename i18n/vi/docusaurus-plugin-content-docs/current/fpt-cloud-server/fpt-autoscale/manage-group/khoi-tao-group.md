---
id: "khoi-tao-group"
title: "Khởi tạo Group"
description: "Hướng dẫn khởi tạo Autoscale Group trên FPT Autoscale."
sidebar_label: "Khởi tạo Group"
sidebar_position: 2
---

# Khởi tạo Group

1. Truy cập trang **Autoscaling > Autoscale Group**. Chọn **Create group**.

   [![Nút Create group](/img/migrated/Screenshot-2024-10-02-014656-aeae77df.png)](/img/migrated/Screenshot-2024-10-02-014656-aeae77df.png)

2. Một hộp thoại xuất hiện. Cấu hình các thông số sau.

   [![Form khởi tạo Group](/img/migrated/create_group-401c4b95.png)](/img/migrated/create_group-401c4b95.png)

   - **Group name**: Nhập tên group sao cho dễ quản lý. Tên phải từ 6 đến 20 ký tự, chỉ bao gồm ký tự chữ cái latin, số và dấu gạch dưới.
   - **Group profile**: Chọn profile đã tạo trước đó làm tham chiếu cơ sở cho group.
   - **Desired capacity**: Số node mong muốn khởi tạo trong group. Giá trị phải lớn hơn hoặc bằng **Min size** và nhỏ hơn hoặc bằng **Max size**. Đây là số node được khởi tạo dựa trên profile đã chọn khi group được tạo.
   - **Min size**: Giới hạn dưới của group, đảm bảo số node tối thiểu trong quá trình vận hành (tránh gián đoạn dịch vụ). Giá trị mặc định là 0; giá trị đề xuất là 2 để đảm bảo group luôn duy trì ít nhất 2 node.
   - **Max size**: Giới hạn trên của group, đảm bảo số node tối đa trong quá trình vận hành (tránh tiêu tốn tài nguyên không kiểm soát). Giá trị mặc định là 10.

3. Chọn **Create**.

   Hệ thống kiểm tra hạn ngạch tài nguyên còn lại trong VPC và tạo group. Group được tạo hiển thị trong danh sách với trạng thái **Creating**.

   [![Danh sách group với trạng thái Creating](/img/migrated/creating-group-96965492.png)](/img/migrated/creating-group-96965492.png)

   Thời gian tạo group phụ thuộc vào số node trong Desired capacity. Khi trạng thái chuyển từ **Creating** sang **Active**, group đã sẵn sàng hoạt động.

   [![Danh sách group với trạng thái Active](/img/migrated/active-group-e4a39361.png)](/img/migrated/active-group-e4a39361.png)

   Xem thông tin chi tiết của group bằng cách nhấn vào tên group trong danh sách:

   [![Nhấn vào tên group để xem chi tiết](/img/migrated/Screenshot-2024-10-02-023725-5b0574c3.png)](/img/migrated/Screenshot-2024-10-02-023725-5b0574c3.png)

   [![Trang chi tiết Group](/img/migrated/screencapture-console-fptcloud-000823-IN-d1bf88fa.png)](/img/migrated/screencapture-console-fptcloud-000823-IN-d1bf88fa.png)
