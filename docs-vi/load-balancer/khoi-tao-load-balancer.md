---
id: "khoi-tao-load-balancer"
title: "Khởi tạo Load Balancer"
description: "**Bước 1:** Ở menu chọn **Load Balancer > Load Balancer**, chọn **Create Load Balancer**"
sidebar_label: "Khởi tạo Load Balancer"
sidebar_position: 4
---

# Khoi Tao Load Balancer

**Bước 1:** Ở menu chọn **Load Balancer > Load Balancer**, chọn **Create Load Balancer**
**Bước 2:** Nhập thông tin cấu hình **Load Balancer** tại màn tạo mới
Để khởi tạo 1 Load Balancer, hệ thống sẽ mặc định tạo 1 Listener và 1 Server pool mặc định cho người dùng dựa trên phần cấu hình được chọn khi khởi tạo, bao gồm các thông tin sau
#### 1. Thông tin Load Balancer  
| Trường  | Mô tả  |  
| --- | --- |  
| Name  | Nhập tên Load Balancer để dễ dàng quản lý, tên có thể thay đổi trong quá trình sử dụng  |  
| Description  | Mô tả  |  
| Size  | Chọn gói Load Balancer phù hợp với nhu cầu sử dụng của bạn. FPT Cloud cung cấp 4 loại với cam kết khả dụng 24/7 (High Availability): Basic-1,Basic-2, Standard, Advanced  |  
| Public IP  | Chọn IP public cho Load Balancer nếu bạn muốn truy cập từ ngoài internet  |  
| Subnet  | Chọn subnet/nhập CIDR cho Load Balancer theo quy hoạch của người dùng. Nếu không có nhu cầu quy hoạch đặc biệt, hệ thống sẽ chọn 1 subnet bất kỳ sẵn có của VPC  |  
| IP Private  | Nhập IP Private chỉ định cụ thể của Load balancer. Yêu cầu nhập 1 IP thuộc subnet/CIDR đã chọn. Nếu không có nhu cầu quy hoạch đặc biệt, hệ thống sẽ chọn 1 IP bất kỳ thuộc subnet/CIDR trên  |  

```
CopyLưu ý: Với Load Balancer v2.0, người dùng không cần tạo security group cho Load Balancer khi đính IP Public. Hệ thống tự động mở firewall theo rule đã cấu hình cho Listener.
```

#### 2. Cấu hình Listener  
| Trường  | Mô tả  |  
| --- | --- |  
| Listener name  | Nhập tên Listener để dễ dàng quản lý, tên có thể thay đổi trong quá trình sử dụng  |  
| Description  | Mô tả  |  
| Protocol  | Chọn giao thức mà Listener nhận request và điều phối  |  
| Port  | Chọn Port mà Listener điều phối request tới  |  
#### 3. Cấu hình Server pool  
| Trường  | Mô tả  |  
| --- | --- |  
| Name  | Nhập tên  |  
| Add server  | Thêm member cho pool, có thể chọn từ các máy chủ ảo trên FPT Cloud (thuộc VPC) hoặc member là các máy chủ bên ngoài  |  
| Port  | Port nhận request của member  |  
| Weight  | Trọng số của member trong Server pool giúp Load Balancer phân phối request. Nhập bắt đầu từ 1, mặc định là 1 nếu các member có khả năng xử lý request như nhau  |  
| Algorithm  | Thuật toán phân phối request trong server pool  |  
| Sticky session  | Sử dụng sticky session để đảm bảo các request tiếp theo từ cùng một client sẽ được định tuyến đến cùng một server để duy trì dữ liệu phiên làm việc  |  
| Healthcheck configuration  | Cấu hình cách LB health check các member của nó. Hệ thống đã có cấu hình mặc định khi tạo LB, người dùng có thể bỏ qua nếu không có nhu cầu health check đặc biệt  |  
Sau khi nhập và kiểm tra đầy đủ thông tin, nhấn **Create** để khởi tạo
**Bước 3** : Kiểm tra trạng thái **Load Balancer** đã khởi tạo
Sau khi hoàn tất khởi tạo, hệ thống sẽ điều hướng người dùng đến trang danh sách Load Balancer, tại đây có thể theo dõi trạng thái LB. Mỗi Load Balancer, Listener, Server pool, Member được tạo ra đều có các trạng thái của mình, bao gồm:  
| Đối tượng  | Provisioning status  | Operating status  |  
| --- | --- | --- |  
| Load Balancer  |  **Active** : Đã khởi tạo thành công   
**Creating** : Đang khởi tạo   
**Updating** : Đang cập nhật   
**Deleting** : Đang xóa   
**Pending** : Có lỗi xảy ra trong quá trình khởi tạo. Thông báo customer support để được hỗ trợ  |  **Healthy** : Tất cả server pool/member của nó đang healthy (khả dụng để nhận request). Load balancer hoạt động bình thường   
**Unhealthy** : Có ít nhất 1 member thuộc Load Balancer đang unhealthy (không khả dụng để nhận request)   
**Offline** : Tất cả member thuộc Load Balancer đang unhealthy   
**No healthcheck** : Không có cấu hình healthcheck cho load balancer hoặc cấu hình lỗi. Thông báo Customer Support để được hỗ trợ  |  
| Listener  | Tương tự Load Balancer  | N/A  |  
| Server pool  | Tương tự Load Balancer  | Tương tự Load Balancer  |  
| Member  | N/A  |  **Healthy** : Member đang khả dụng để nhận request   
**Unhealthy** : Member không khả dụng  |  
#### 4. Recommended alarm
Khi khởi tạo LB, hệ thống tự động gợi ý tạo kèm 2 cảnh báo quan trọng nhằm nhận biết quá tải LB trong quá trình sử dụng bao gồm:
  * Cảnh báo số packet/s bị drop khi qua LB vượt ngưỡng an toàn (>50 pps)
  * Cảnh báo số active connection đồng thời qua LB vượt ngưỡng gợi ý của gói

Người dùng sẽ cần chọn người nhận cảnh báo (Recipient) hoặc tạo mới nếu chưa có (hỗ trợ các phương thức Email, Telegram, Slack, Teams) 
Các cảnh báo được gợi ý tích hợp với dịch vụ Cloud Guard để tạo cảnh báo, như hình sau: [![file](/img/migrated/image-1767670460483-a8f82152.png)](/img/migrated/image-1767670460483-a8f82152.png)
Người dùng có thể thêm bớt hoặc chỉnh sửa cảnh báo tùy vào nhu cầu sử dụng. Tài liệu chi tiết về cảnh báo Cloud Guard cho Load Balancer xem tại đây [Khởi tạo cảnh báo cho Load Balancer](https://fptcloud.com/documents/cloud-guard/?doc=khoi-tao-canh-bao-load-balancer "Khởi tạo cảnh báo cho Load Balancer")

```
CopyLưu ý: Khởi tạo Load Balancer có thể mất 1 lúc, người dùng vui lòng chờ đến khi LB active rồi mới tiếp tục thao tác.
```