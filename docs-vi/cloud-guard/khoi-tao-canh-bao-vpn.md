---
id: "khoi-tao-canh-bao-vpn"
title: "Khởi tạo cảnh báo cho VPN site-to-site"
description: "Để thực hiện tạo cảnh báo cho dịch vụ VPN đang sử dụng, chọn **Type** là **VPN site-to-site** [![file](/img/"
sidebar_label: "Khởi tạo cảnh báo cho VPN site-to-site"
sidebar_position: 7
---

# Khởi tạo cảnh báo cho VPN site-to-site

#### Bước 1: Ở menu chọn Security > Cloud Guard, mở tab Resource Alerts và chọn Create Alert.
Để thực hiện tạo cảnh báo cho dịch vụ VPN đang sử dụng, chọn **Type** là **VPN site-to-site** [![file](/img/migrated/image-1759485440087-d519bebe.png)](/img/migrated/image-1759485440087-d519bebe.png) Chọn **Metric Type** , **Apply to** , **Severity** , cấu hình điều kiện cảnh báo tại **Configure Condition** và chọn người nhận cảnh báo tại **Notify to**
FPT Cloud Guard hỗ trợ đặt cảnh báo cho những VPN metric như sau:  
| STT  | Metric  | Đơn vị  | Mô tả  |  
| --- | --- | --- | --- |  
| 1  | CPU usage  | %  | Phần trăm CPU sử dụng của VPN Gateway. Nếu giá trị CPU usage (%) trung bình trong (interval) phút vượt ngưỡng thì bắn cảnh báo  |  
| 2  | RAM usage  | %  | Phần trăm memory sử dụng của VPN Gateway. Nếu giá trị RAM usage (%) trung bình trong (interval) phút vượt ngưỡng thì bắn cảnh báo  |  
| 3  | Packet loss  | packet/s  | Số lượng gói tin bị mất mỗi giây trong quá trình truyền qua VPN tunnel  |  
| 4  | VPN Gateway status Offline  | status  | Trạng thái của VPN Gateway. Khi đặt cảnh báo với metric này, người dùng sẽ nhận cảnh báo khi trạng thái VPN Gateway là Offline  |  
| 5  | VPN Connection status phase 1 Offline  | status  | Trạng thái của VPN Connection Phase 1. Khi đặt cảnh báo với metric này, người dùng sẽ nhận cảnh báo khi trạng thái VPN Connection là Offline  |  
| 6  | VPN Connection status phase 2 Offline  | status  | Trạng thái của VPN Connection Phase 2. Khi đặt cảnh báo với metric này, người dùng sẽ nhận cảnh báo khi toàn bộ tunnel phase 2 có trạng thái Offline. Nếu có ít nhất 1 tunnel còn Online thì VPN Connection status phase 2 = Online và chưa có cảnh báo  |  
Cấu hình điều kiện cảnh báo (Configure condition) như sau:  
| STT  | Trường  | Mô tả  |  
| --- | --- | --- |  
| 1  | Metric type  | Chọn loại metric của VPN để đặt cảnh báo (như bảng trên)  |  
| 2  | Operator  | Chọn điều kiện so sánh  |  
| 3  | Threshold  | Chọn ngưỡng cảnh báo, khi hệ thống phát hiện vượt ngưỡng theo điều kiện sẽ bắn cảnh báo  |  
| 4  | Alert interval  | Chọn thời gian lặp lại tính toán của hệ thống (nhỏ nhất là 3 phút)  |  
| 5  | Repeat time  | Chọn thời gian lặp lại cảnh báo nếu chỉ số duy trì vượt ngưỡng  |  
#### Bước 2: Tạo người nhận cảnh báo mức VPC
Nếu chưa có người nhận cho cảnh báo VPN, nhấn Create recipient here để tạo mới người nhận mức VPC như sau: [![file](/img/migrated/image-1722328406388-fa58b299.png)](/img/migrated/image-1722328406388-fa58b299.png)
#### Bước 3: Quay trở lại màn tạo Alert, chọn người nhận mới tạo và nhấn Create
[![file](/img/migrated/image-1722329874375-73b8678d.png)](/img/migrated/image-1722329874375-73b8678d.png) Alert đã tạo thành công hiển thị tại màn danh sách, khi điều kiện vượt ngưỡng hoặc trở về mức an toàn hệ thống sẽ tự động bắn cảnh báo cho người nhận qua phương thức cảnh báo đã chọn.