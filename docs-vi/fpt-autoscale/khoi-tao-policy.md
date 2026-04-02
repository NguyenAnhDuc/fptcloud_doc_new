---
id: "khoi-tao-policy"
title: "Khởi tạo Policy"
description: "Hướng dẫn khởi tạo Autoscale Policy trên FPT Autoscale."
sidebar_label: "Khởi tạo Policy"
sidebar_position: 14
---

# Khởi tạo Policy

1. Truy cập trang **Autoscaling > Autoscale Policy**. Chọn **Create policy**.

   [![Nút Create policy](/img/migrated/Screenshot-2024-10-02-055525-37b63cd9.png)](/img/migrated/Screenshot-2024-10-02-055525-37b63cd9.png)

2. Cấu hình các thông số.

   - **Type**: Chọn loại policy phù hợp.
   - **Name**: Đặt tên policy sao cho dễ quản lý. Tên phải có 6 đến 250 ký tự, chỉ bao gồm chữ cái latin, số và dấu gạch dưới.

   ### Deletion policy

   Deletion policy kiểm soát thứ tự ưu tiên xóa node trong group khi có hành động làm giảm số node. Nếu group không áp dụng policy này, các node được chọn xóa ngẫu nhiên.

   [![Cấu hình Deletion policy](/img/migrated/Screenshot-2024-10-02-055724-aa33696c.png)](/img/migrated/Screenshot-2024-10-02-055724-aa33696c.png)

   - **Mode**:
     - _Oldest first_: Ưu tiên xóa các node từ cũ nhất đến mới nhất.
     - _Youngest first_: Ưu tiên xóa các node từ mới nhất đến cũ nhất.

   ### Scaling policy

   Scaling policy kiểm soát hành vi scale của group trước các hành động được thực thi tự động bởi dịch vụ giám sát.

   [![Cấu hình Scaling policy](/img/migrated/Screenshot-2024-10-02-055757-a8c024c1.png)](/img/migrated/Screenshot-2024-10-02-055757-a8c024c1.png)

   - **Change type**: Hình thức điều chỉnh cho group.
     - _Exact capacity_
     - _Change in capacity_
     - _Change in percentage_

   - **Event**: Loại event sẽ trigger policy này.
     - _Scale in_
     - _Scale out_

   - **Number**: Giá trị có ý nghĩa khác nhau tùy theo **Change type**:
     - _Exact capacity_: Nhập công suất mới (số nguyên dương). Sau khi điều chỉnh, số node trong group bằng đúng giá trị này.
     - _Change in capacity_: Nhập số node cần thêm (số nguyên dương) hoặc loại bỏ (số nguyên âm). Số node sau điều chỉnh bằng công suất hiện tại cộng/trừ giá trị tuyệt đối của **Number**.
     - _Change in percentage_: Nhập tỷ lệ (%) cần thêm (số thực dương) hoặc loại bỏ (số thực âm) dựa trên công suất hiện tại. Ví dụ: công suất hiện tại là 4 node, **Number** là 50% thì thêm 2 node mới, tổng sau điều chỉnh là 6.

   ### Load balancer policy

   Load balancer policy cho phép các node được tạo trong group tự động gắn vào một Load balancer, và tự động gỡ khỏi Load balancer khi node bị xóa.

   [![Cấu hình Load balancer policy](/img/migrated/Screenshot-2024-10-02-055840-4c829465.png)](/img/migrated/Screenshot-2024-10-02-055840-4c829465.png)

   - **Server pool**: Chọn Server pool tương ứng trong Load balancer.
   - **Member port**: Port mà các member sẽ mở để listen.

   ### Classic load balancer policy

   Classic load balancer policy cho phép các node được tạo trong group tự động gắn vào một Classic load balancer, và tự động gỡ khỏi Classic load balancer khi node bị xóa.

   [![Cấu hình Classic load balancer policy](/img/migrated/Screenshot-2024-10-02-055921-fb7c84c9.png)](/img/migrated/Screenshot-2024-10-02-055921-fb7c84c9.png)

   - **Member port**: Port mà các member sẽ mở để listen.

   ### Health policy

   Health policy kiểm soát cách kiểm tra và khôi phục các node trong group.

   [![Cấu hình Health policy](/img/migrated/Screenshot-2024-10-02-055947-c0a9514f.png)](/img/migrated/Screenshot-2024-10-02-055947-c0a9514f.png)

   - **Recovery action**: Chọn phương án khôi phục node nếu node không hoạt động.
     - _Recreate_: Xóa và tạo lại node.
     - _Reboot_: Khởi động lại node.
   - **Interval check (s)**: Khoảng thời gian (giây) giữa các lần kiểm tra sức khỏe node.

3. Chọn **Create policy** để xác nhận.

   Sau khi tạo thành công, policy hiển thị trong danh sách các policy hiện có.

   [![Danh sách policy](/img/migrated/Screenshot-2024-10-02-065449-ebb1fd0a.png)](/img/migrated/Screenshot-2024-10-02-065449-ebb1fd0a.png)

   Xem thông tin chi tiết của policy bằng cách nhấn vào tên policy trong danh sách:

   [![Nhấn vào tên policy để xem chi tiết](/img/migrated/Screenshot-2024-10-02-065632-1d3bd238.png)](/img/migrated/Screenshot-2024-10-02-065632-1d3bd238.png)

   :::note
   Hiện chưa hỗ trợ thay đổi thông số kỹ thuật của policy. Các policy được tạo chỉ là định nghĩa tĩnh. Để policy có hiệu lực trên một group cụ thể, cần attach policy vào group tương ứng.
   :::
