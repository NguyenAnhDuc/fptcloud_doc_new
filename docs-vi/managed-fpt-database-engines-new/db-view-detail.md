---
id: "db-view-detail"
title: "Xem thông tin cơ sở dữ liệu"
description: "Chức năng **Xem thông tin chi tiết của cụm cơ sở dữ liệu** cho phép người dùng:"
sidebar_label: "Xem thông tin cơ sở dữ liệu"
sidebar_position: 22
---

# Xem thông tin cơ sở dữ liệu

Chức năng **Xem thông tin chi tiết của cụm cơ sở dữ liệu** cho phép người dùng:
  * Theo dõi trạng thái vận hành của cụm cơ sở dữ liệu.
  * Nắm rõ cấu hình tài nguyên (CPU, RAM, Storage).
  * Kiểm tra engine, version, network.
  * Nhận biết các cảnh báo hệ thống (ví dụ: yêu cầu restart sau scale-up).
  * Truy cập nhanh các chức năng quản lý liên quan.

Để truy cập chức năng này, thực hiện đăng nhập FPT Console Portal, trên thanh menu chọn **Database Platform** > **All Database** , sau đó chọn ID của cụm cơ sở dữ liệu và chọn tab **Overview** để vào trang chi tiết:
[![Alt text](/img/migrated/overview-scaled-11bc300a.png)](/img/migrated/overview-scaled-11bc300a.png)
Toàn bộ thông tin cốt lõi của cụm cơ sở dữ liệu được hiển thị:  
| Section  | Thông tin hiển thị  |  
| --- | --- |  
| Thông tin tổng quan (Header Section)  | Hiển thị các thông tin chính của cụm cơ sở dữ liệu: 
* Cluster ID của cụm cơ sở dữ liệu.
* Trạng thái của cụm cơ sở dữ liệu (ví dụ: Running, Stopped, …).
* Cấu hình hiện tại: gồm vCPU – RAM – Storage.
* Loại engine (ví dụ: PostgreSQL, MySQL).
* Phiên bản engine (ví dụ: 8.0.42, 17).
* Thời gian tạo.
 |  
| Basic Information  | Hiển thị các thông tin phục vụ kết nối ứng dụng và kiểm tra thông tin hạ tầng, bao gồm: 
* Tên của cụm.
* Loại cơ sở dữ liệu.
* Loại version
* Endpoint (Domain/IP)
* Port
* Network/Subnet
 |  
| Service Information  | Hiển thị trạng thái bật/tắt của các nhận các dịch vụ đi kèm, gồm: dịch vụ Backup, dịch vụ Monitoring và dịch vụ Vertical Scaling.  |  
| Engine Information  | Hiển thị thông tin kết nối tới cụm cơ sở dữ liệu mặc định, bao gồm: 
* Tên của cụm cơ sở dữ liệu mặc định.
* Thông tin của tài khoản mặc định (user – password).
 |  
| Data Nodes Configuration  | Cấu hình một node trong cụm cơ sở dữ liệu, gồm: 
* Storage policy.
* Số lượng node.
* Cấu hình tài nguyên hiện tại (vCPU – RAM – Storage).
 |  
| List Instances  | Danh sách các instance (node) thuộc cụm cơ sở dữ liệu, giúp theo dõi tình trạng từng node và hỗ trợ troubleshooting khi có sự cố, gồm: 
* Tên instance
* Vai trò: Primary (hiển thị True)/Replica (hiển thị False) nếu có.
* Cấu hình
* Trạng thái
* Thời gian tạo
* Thời gian cập nhật gần nhất
 |  
**Cảnh báo restart cụm cơ sở dữ liệu:**
Trong trường hợp cụm cơ sở dữ liệu đang ở trạng thái cần restart (ví dụ: sau khi điều chỉnh tài nguyên compute), khi người dùng truy cập vào trang chi tiết, hệ thống sẽ tự động hiển thị một hộp thoại cảnh báo và một banner cảnh báo ở mục Header như sau:
[![Alt text](/img/migrated/overview-with-warning-popup-scaled-ffe6ebc4.png)](/img/migrated/overview-with-warning-popup-scaled-ffe6ebc4.png)
**Mục đích:**
  * Nhấn mạnh rằng tuy cụm cơ sở dữ liệu vẫn đang hoạt động nhưng thực tế đang chạy với cấu hình chưa đầy đủ.
  * Đảm bảo người dùng chủ động và có ý thức trước khi thực hiện restart.

Sau khi việc restart hoàn tất (có thể thủ công bởi người dùng sử dụng chức năng restart trên Portal hoặc tự động bởi hệ thống khi có một thao tác khác yêu cầu restart) popup cảnh báo và banner sẽ mất đi.
