---
id: "khoi-tao-canh-bao-load-balancer"
title: "Khởi tạo cảnh báo cho Load Balancer"
sidebar_label: "Khởi tạo cảnh báo cho Load Balancer"
sidebar_position: "6"
---

# Khởi tạo cảnh báo cho Load Balancer

#### ステップ1: Ở menu chọn Security > Cloud Guard, mở tab Resource Alerts và chọn Create Alert.
Để thực hiện tạo cảnh báo cho dịch vụ Load balancer đang sử dụng, chọn **Type** là **Load Balancer** [![file](/img/migrated/image-1722327850097-b58a81be.png)](/img/migrated/image-1722327850097-b58a81be.png) Chọn **Metric Type** , **Apply to** , **Severity** , cấu hình điều kiện cảnh báo tại **Configure Condition** và chọn người nhận cảnh báo tại **Notify to**
FPT Cloud Guard hỗ trợ đặt cảnh báo cho những Load balancer metric như sau:  
| STT  | Metric  | Đơn vị  | Mô tả  |  
| --- | --- | --- | --- |  
| 1  | HTTP request  | request/s  | ·Số lượng request/s đến Load balancer  |  
| 2  | HTTP code 1xx  | request/s  | Số lượng HTTP response code trả về là 1xx trên giây của Load balancer  |  
| 3  | HTTP code 2xx  | request/s  | Số lượng HTTP response code trả về là 2xx trên giây của Load balancer  |  
| 4  | HTTP code 3xx  | request/s  | Số lượng HTTP response code trả về là 3xx trên giây của Load balancer  |  
| 5  | HTTP code 4xx  | request/s  | Số lượng HTTP response code trả về là 4xx trên giây của Load balancer  |  
| 6  | HTTP code 5xx  | request/s  | Số lượng HTTP response code trả về là 5xx trên giây của Load balancer  |  
| 7  | Active connection  | connection  | Số lượng connection đang kết nối tới Load balancer, một connection có thể có nhiều request (ccu)  |  
| 8  | Percentage of backend down  | % (percentage)  | Phần trăm số backend đang down (unhealthy) của Load balancer  |  
| 9  | Number of backends down  | number of backends  | Số lượng backend đang down (unhealthy) của Load balancer  |  
| 10  | Total packet In/Out per second  | packet/s  | Tổng lượng packet được Load balancer xử lý theo hướng In hoặc Out. Chỉ số giúp người dùng nắm bắt mức độ tải thực tế qua LB từ đó phát hiện thời điểm hệ thống tăng tải bất thường  |  
| 11  | Drop packet In/Out per second  | packet/s  | Tổng lượng packet qua Load balancer nhưng bị rớt mỗi giây. Chiều In/Out vượt ngưỡng sẽ bắn cảnh báo. Chỉ số phản ánh tình trạng rớt gói dùng để phát hiện lỗi gián đoạn kết nối qua LB hoặc quá tải LB  |  
| 12  | Provisioning status Pending  | N/A  | Khi Load balancer có trạng thái provisioning (khởi tạo/cập nhật/thay đổi cấu hình) - Provisioning status là Pending, hệ thống sẽ gửi cảnh báo. Giúp người dùng nhanh chóng phát hiện trạng thái bất thường của LB để kịp thời xử lý  |  
| 13  | Operating status Unhealthy  | N/A  | Khi Load balancer có trạng thái hoạt động - Operating status là Unhealthy, hệ thống sẽ gửi cảnh báo. Giúp người dùng nhanh chóng phát hiện trạng thái bất thường của LB để kịp thời xử lý.  |  
Cấu hình điều kiện cảnh báo (Configure condition) như sau:  
| STT  | Trường  | Mô tả  |  
| --- | --- | --- |  
| 1  | Metric type  | Chọn loại metric của load balancer để đặt cảnh báo (như bảng trên)  |  
| 2  | Operator  | Chọn điều kiện so sánh  |  
| 3  | Threshold  | Chọn ngưỡng cảnh báo, khi hệ thống phát hiện vượt ngưỡng theo điều kiện sẽ bắn cảnh báo  |  
| 4  | Alert interval  | Chọn thời gian lặp lại tính toán của hệ thống (nhỏ nhất là 3 phút)  |  
| 5  | Repeat time  | Chọn thời gian lặp lại cảnh báo nếu chỉ số duy trì vượt ngưỡng  |  
#### Bước 2: Tạo người nhận cảnh báo mức VPC
Nếu chưa có người nhận cho cảnh báo Load balancer, nhấn Create recipient here để tạo mới người nhận mức VPC như sau: [![file](/img/migrated/image-1722328406388-fa58b299.png)](/img/migrated/image-1722328406388-fa58b299.png)
#### Bước 3: Quay trở lại màn tạo Alert, chọn người nhận mới tạo và nhấn Create
[![file](/img/migrated/image-1722329874375-73b8678d.png)](/img/migrated/image-1722329874375-73b8678d.png) Alert đã tạo thành công hiển thị tại màn danh sách, khi điều kiện vượt ngưỡng hoặc trở về mức an toàn hệ thống sẽ tự động bắn cảnh báo cho người nhận qua phương thức cảnh báo đã chọn.
