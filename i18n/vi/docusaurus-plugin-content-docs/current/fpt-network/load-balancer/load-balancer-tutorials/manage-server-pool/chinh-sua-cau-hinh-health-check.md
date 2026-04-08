---
id: "chinh-sua-cau-hinh-health-check"
title: "Chỉnh sửa cấu hình Health check"
description: "**Health check** (kiểm tra sức khỏe) là một tính năng quan trọng của **Load Balancer** được sử dụng để đảm bảo tính khả "
sidebar_label: "Chỉnh sửa cấu hình Health check"
sidebar_position: 5
pagination_next: null
---

# Chỉnh sửa cấu hình Health check

**Health check** (kiểm tra sức khỏe) là một tính năng quan trọng của **Load Balancer** được sử dụng để đảm bảo tính khả dụng và hiệu suất của các máy chủ. **Health check** cho phép **Load Balancer** phát hiện máy chủ hoặc dịch vụ nào đang hoạt động cùng với việc tự động loại bỏ các máy chủ hoặc dịch vụ không khả dụng khỏi **Load Balancer.**
**Cách thức hoạt động:**
  * **Kiểm tra sức khỏe định kỳ:** LB sẽ thực hiện các kiểm tra sức khỏe định kỳ trên các máy chủ hoặc đối tượng trong pool. Các kiểm tra này có thể là Ping, HTTP GET request, hoặc kiểm tra tùy chỉnh khác.
  * **Xác định máy chủ/sự cố không khả dụng** : Nếu máy chủ hoặc đối tượng không phản hồi kiểm tra sức khỏe hoặc trả về lỗi, LB sẽ xem xét máy chủ hoặc đối tượng đó là không khả dụng.
  * **Loại bỏ máy chủ/sự cố không khả dụng** : Sau khi xác định máy chủ hoặc đối tượng không khả dụng, LB sẽ ngừng chuyển hướng lưu lượng đến máy chủ đó trong một thời gian. Điều này giúp ngăn lưu lượng bị gửi đến máy chủ không hoạt động, đảm bảo tính khả dụng của dịch vụ.

**Lợi ích:**
  * **Tăng tính khả dụng:** **Health check** giúp đảm bảo rằng chỉ những máy chủ hoặc dịch vụ khả dụng mới nhận lưu lượng truy cập. Điều này giúp tăng tính khả dụng của dịch vụ và tránh trường hợp máy chủ không hoạt động nhận lưu lượng.
  * **Tối ưu hóa hiệu suất:** LB có thể tự động điều chỉnh tải trọng cân bằng bằng cách loại bỏ máy chủ không hoạt động. Điều này giúp tối ưu hóa hiệu suất hệ thống và ngăn máy chủ quá tải.
  * **Tự động quản lý:** **Health check** giúp tự động quản lý tính khả dụng của máy chủ hoặc dịch vụ, giảm thiểu sự can thiệp thủ công.
  * **Bảo mật:** LB có thể loại bỏ máy chủ không hoạt động để đảm bảo rằng lưu lượng không được gửi đến các máy chủ không an toàn hoặc không hoạt động.

**Các loại cấu hình Health check:**
  * **Health check HTTP/HTTPS** khi khởi tạo **Server pool** giao thức **TCP/Proxy.**
  * **Health check TCP** khi khởi tạo **Server pool** giao thức **TCP/Proxy.**
  * **Health check PING** khi khởi tạo **Server pool** giao thức **UDP**.

Để cấu hình cho các loại **Health check,** bạn làm theo hướng dẫn sau:
  * **Protocol:** Chọn giao thức phù hợp với giao thức của **Server pool** theo bảng sau:

  
|  ` `**Health Monitor Pool**  | **HTTP**  | **HTTPS**  | **PING**  | **SCTP**  | **TCP**  | **TLS-HELLO**  | **UDP-CONNECT**  |  
| --- | --- | --- | --- | --- | --- | --- | --- |  
| HTTP  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| HTTPS  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| PROXY  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| PROXYV2  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| SCTP  | Y  | N  | N  | Y  | Y  | N  | Y  |  
| TCP  | Y  | Y  | Y  | N  | Y  | Y  | N  |  
| UDP  | Y  | N  | N  | Y  | Y  | N  | Y  |
