---
id: "khoi-tao-policy"
title: "Khởi tạo Policy"
description: "[![create policy](/img/migrated/Screenshot-2024-10-02-055525-37b63cd9.png)](/img/migrated/Screenshot-2024-10-02-055525-3"
sidebar_label: "Khởi tạo Policy"
sidebar_position: 14
---

# Khoi Tao Policy

##  **Bước 1** : Truy cập trang **Autoscaling > Autoscale Policy**. Chọn **Create policy**.
[![create policy](/img/migrated/Screenshot-2024-10-02-055525-37b63cd9.png)](/img/migrated/Screenshot-2024-10-02-055525-37b63cd9.png)
##  **Bước 2** : Thực hiện cấu hình các thông số.
**Type** : Chọn loại policy phù hợp.
**Name** : Đặt tên policy sao cho dễ quản lý nhất. Tên phải có 6 đến 250 kí tự, chỉ bao gồm chữ cái latin, số và dấu gạch dưới.
### Deletion policy
Deletion policy sẽ kiểm soát thứ tự ưu tiên xóa node trong một group nếu có bất kỳ hành động nào gây giảm node. Nếu group không áp dụng policy này, các nodes sẽ được lựa chọn ngẫu nhiên.
[![deletion policy](/img/migrated/Screenshot-2024-10-02-055724-aa33696c.png)](/img/migrated/Screenshot-2024-10-02-055724-aa33696c.png)
**Mode** :
  * OLDEST FIRST: Ưu tiên xóa các nodes từ cũ nhất đến mới nhất.
  * YOUNGEST FIRST: Ưu tiên xóa các nodes từ mới nhất đến cũ nhất.

### Scaling policy
Scaling policy sẽ kiểm soát hành vi scale của một group trước các hành động được thực thi tự động bởi dịch vụ giám sát.
[![scaling policy](/img/migrated/Screenshot-2024-10-02-055757-a8c024c1.png)](/img/migrated/Screenshot-2024-10-02-055757-a8c024c1.png)
**Change type** : Lựa chọn hình thức điều chỉnh cho group.
  * Exact capacity
  * Change in capacity
  * Change in percentage

**Event** : Loại event sẽ trigger policy này.
  * Scale in
  * Scale out

**Number** : Tùy vào **Change type** được chọn, giá trị này sẽ có ý nghĩa khác nhau.
  * Exact capacity: Nhập công suất mới (số nguyên dương) của group. Sau khi điều chỉnh, số lượng node trong group sẽ bằng đúng giá trị này.
  * Change in capacity: Nhập số node cần thêm vào (số nguyên dương) hoặc cần loại bỏ (số nguyên âm) khỏi group. Sau khi điều chỉnh, số lượng node trong group sẽ bằng công suất trước khi điều chỉnh cộng thêm hoặc trừ đi giá trị tuyệt đối của giá trị này.
  * Change in percentage: Nhập tỷ lệ (%) cần thêm vào (số thực dương) hoặc cần loại bỏ (số thực âm) dựa trên công suất hiện tại của group. Ví dụ: Công suất hiện tại của group là 4, giá trị của **Number** là 50%. Suy ra, số node được thêm vào là 50% của 4, tức là 2 nodes mới sẽ được sinh ra và tổng công suất sau khi điều chỉnh là 6.

### Load balancer policy
Load balancer policy cho phép các nodes được sinh ra trong một group tự động gắn với một Load balancer hoặc tự động gỡ khỏi Load balancer khi các nodes bị xóa.
[![load balancer policy](/img/migrated/Screenshot-2024-10-02-055840-4c829465.png)](/img/migrated/Screenshot-2024-10-02-055840-4c829465.png)
**Load balancer** : Chọn Load balancer đã tạo. Nếu chưa có, hãy tạo mới trước ([xem thêm](https://fptcloud.com/documents/load-balancer/?doc=khoi-tao-load-balancer "Khởi tạo Load Balancer")).
**Server pool** : Chọn Server pool tương ứng trong Load balancer.
**Member port** : Port mà các member sẽ mở để listen.
### Classic load balancer policy
Classic load balancer policy cho phép các nodes được sinh ra trong một group tự động gắn với một Classic load balancer hoặc tự động gỡ khỏi Classic load balancer khi các nodes bị xóa.
[![classic load balancer policy](/img/migrated/Screenshot-2024-10-02-055921-fb7c84c9.png)](/img/migrated/Screenshot-2024-10-02-055921-fb7c84c9.png)
**Load balancer** : Chọn Load balancer đã tạo. Nếu chưa có, hãy tạo mới trước ([xem thêm](https://fptcloud.com/documents/load-balancer/?doc=khoi%20tao%20mot%20load%20balancer%20moi "Khởi tạo Classic Load Balancer")).
**Member port** : Port mà các member sẽ mở để listen.
### Health policy
Health policy sẽ kiểm soát cách kiểm tra và khôi phục các nodes trong một group.
[![health policy](/img/migrated/Screenshot-2024-10-02-055947-c0a9514f.png)](/img/migrated/Screenshot-2024-10-02-055947-c0a9514f.png)
**Recovery action** : Chọn phương án khôi phục node nếu node không hoạt động.
  * Recreate: Xóa và tạo lại node.
  * Reboot: Khởi động lại node.

**Interval check (s)** : Khoảng thời gian (tính bằng giây) giữa các lần kiểm tra sức khỏe nodes.
##  **Bước 3** : Chọn **Create policy** để xác nhận.
Sau khi tạo thành công, policy sẽ hiển thị trên danh sách các policies hiện có.
[![list policy](/img/migrated/Screenshot-2024-10-02-065449-ebb1fd0a.png)](/img/migrated/Screenshot-2024-10-02-065449-ebb1fd0a.png)
Có thể xem lại thông tin chi tiết của policy bằng cách click vào tên policy tương ứng trên danh sách:
[![click to view policy details](/img/migrated/Screenshot-2024-10-02-065632-1d3bd238.png)](/img/migrated/Screenshot-2024-10-02-065632-1d3bd238.png)
## Lưu ý
Hiện chưa hỗ trợ thay đổi các thông số kỹ thuật cho policy. Các policy được tạo chỉ là định nghĩa tĩnh. Để policy được áp dụng trên một group cụ thể, cần phải attach policy vào group tương ứng.