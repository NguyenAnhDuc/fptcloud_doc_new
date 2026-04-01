---
id: "khoi-tao-policy"
title: "Khởi tạo Policy"
sidebar_label: "Khởi tạo Policy"
sidebar_position: "14"
---

# Initialize Policy

##  **Step 1** : Truy cập trang **Autoscaling > Autoscale Policy**. Select **Create policy**.
[![create policy](/img/migrated/Screenshot-2024-10-02-055525-37b63cd9.png)](/img/migrated/Screenshot-2024-10-02-055525-37b63cd9.png)
##  **Step 2** : Thực hiện cấu hình the thông số.
**Type** : Chọn loại policy phù hợp.
**Name** : Đặt tên policy sao for dễ quản lý nhất. Tên phải có 6 to 250 kí tự, chỉ includes chữ cái latin, số and dấu gạch dưới.
### Deletion policy
Deletion policy will kiểm soát thứ tự ưu tiên xóa node in a group if có bất kỳ hành động nào gây giảm node. Nếu group không áp dụng policy this, the nodes will is lựa chọn ngẫu nhiên.
[![deletion policy](/img/migrated/Screenshot-2024-10-02-055724-aa33696c.png)](/img/migrated/Screenshot-2024-10-02-055724-aa33696c.png)
**Mode** :
  * OLDEST FIRST: Ưu tiên xóa the nodes from cũ nhất to mới nhất.
  * YOUNGEST FIRST: Ưu tiên xóa the nodes from mới nhất to cũ nhất.

### Scaling policy
Scaling policy will kiểm soát hành vi scale of a group trước the hành động is thực thi tự động bởi service monitoring.
[![scaling policy](/img/migrated/Screenshot-2024-10-02-055757-a8c024c1.png)](/img/migrated/Screenshot-2024-10-02-055757-a8c024c1.png)
**Change type** : Lựa chọn hình thức điều chỉnh for group.
  * Exact capacity
  * Change in capacity
  * Change in percentage

**Event** : Loại event sẽ trigger policy này.
  * Scale in
  * Scale out

**Number** : Tùy vào **Change type** is chọn, giá trị này sẽ có ý nghĩa khác nhau.
  * Exact capacity: Enter công suất mới (số nguyên dương) of group. Sau when điều chỉnh, số lượng node in group will bằng đúng giá trị this.
  * Change in capacity: Enter số node cần thêm vào (số nguyên dương) hoặc cần loại bỏ (số nguyên âm) khỏi group. Sau when điều chỉnh, số lượng node in group will bằng công suất before điều chỉnh cộng thêm or trừ đi giá trị tuyệt đối of giá trị this.
  * Change in percentage: Enter tỷ lệ (%) cần thêm vào (số thực dương) hoặc cần loại bỏ (số thực âm) dựa trên công suất hiện tại of group. Ví dụ: Công suất hiện tại của group là 4, giá trị của **Number** là 50%. Suy ra, số node được thêm vào là 50% của 4, tức là 2 nodes mới will is sinh ra and tổng công suất after điều chỉnh là 6.

### Load balancer policy
Load balancer policy for phép the nodes is sinh ra in a group tự động gắn with a Load balancer or tự động gỡ khỏi Load balancer when the nodes bị xóa.
[![load balancer policy](/img/migrated/Screenshot-2024-10-02-055840-4c829465.png)](/img/migrated/Screenshot-2024-10-02-055840-4c829465.png)
**Server pool** : Chọn Server pool corresponding in Load balancer.
**Member port** : Port mà the member will mở to listen.
### Classic load balancer policy
Classic load balancer policy for phép the nodes is sinh ra in a group tự động gắn with a Classic load balancer or tự động gỡ khỏi Classic load balancer when the nodes bị xóa.
[![classic load balancer policy](/img/migrated/Screenshot-2024-10-02-055921-fb7c84c9.png)](/img/migrated/Screenshot-2024-10-02-055921-fb7c84c9.png)
**Member port** : Port mà the member will mở to listen.
### Health policy
Health policy will kiểm soát theh kiểm tra and restore the nodes in a group.
[![health policy](/img/migrated/Screenshot-2024-10-02-055947-c0a9514f.png)](/img/migrated/Screenshot-2024-10-02-055947-c0a9514f.png)
**Recovery action** : Chọn phương án restore node if node không hoạt động.
  * Recreate: Delete and tạo lại node.
  * Reboot: Khởi động lại node.

**Interval check (s)** : Khoảng thời gian (tính bằng giây) giữa the lần kiểm tra sức khỏe nodes.
##  **Step 3** : Select **Create policy** to xác nhận.
Sau when tạo successfully, policy will displayed trên danh sách the policies hiện có.
[![list policy](/img/migrated/Screenshot-2024-10-02-065449-ebb1fd0a.png)](/img/migrated/Screenshot-2024-10-02-065449-ebb1fd0a.png)
Có thể xem lại thông tin chi tiết of policy bằng theh click ando tên policy corresponding trên danh sách:
[![click to view policy details](/img/migrated/Screenshot-2024-10-02-065632-1d3bd238.png)](/img/migrated/Screenshot-2024-10-02-065632-1d3bd238.png)
## Save ý
Hiện chưa hỗ trợ thay đổi the thông số kỹ thuật for policy. Các policy is tạo chỉ là định nghĩa tĩnh. Để policy is áp dụng trên a group cụ thể, must attach policy ando group corresponding.
