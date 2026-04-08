---
id: "Allow-IP-CIDR"
title: "Cấu hình Allow IP/CIDR"
description: "**Cách hoạt động**"
sidebar_label: "Cấu hình Allow IP/CIDR"
sidebar_position: 12
---

# Cấu hình Allow IP/CIDR

**Cách hoạt động**
  * Khi một yêu cầu truy cập đến Load Balancer, hệ thống sẽ kiểm tra địa chỉ IP nguồn của yêu cầu.
  * Nếu địa chỉ IP nguồn nằm trong dải CIDRs cho phép, yêu cầu sẽ được chấp nhận và tiếp tục đến máy chủ backend.
  * Nếu địa chỉ IP nguồn không nằm trong dải CIDRs cho phép, yêu cầu sẽ bị từ chối và không được chuyển tiếp.

**Khi nào cần cấu hình allow CIDRs đến Load Balancer**
  * **Tăng cường bảo mật** : Ngăn chặn các kết nối không mong muốn từ đó giảm thiểu nguy cơ tấn công từ bên ngoài
  * **Kiểm soát truy cập** : Cho phép quản lý quyền truy cập vào Load Balancer bằng cách khai báo danh sách CIDRs được cho phép
  * **Tối ưu hiệu suất** : Giảm tải cho Load Balancer bằng cách ngăn chặn các truy cập không mong muốn

**Hướng dẫn cấu hình**
**Bước 1:** Truy cập vào trang chủ Load Balancer trên FPT Cloud Portal
**Bước 2:** Tại trang chủ Load Balancer, click chọn Load Balancer cần cấu hình.
**Bước 3:** Tại phần thông tin chi tiết Load Balancer, chọn tab Listener.
**Bước 4:** Chọn tên Listener cần cấu hình để vào màn Update
**Bước 5:** Trang update Listener sẽ hiện ra, tìm đến phần Cấu hình Allow CIDRs ở cuối màn hình. 
  * Từ đây người dùng có thể cấu hình 1 hoặc nhiều dải IP được phép truy cập. Nếu cần nhập nhiều dải IP, vui lòng nhập mỗi dòng 1 dải
  * Ví dụ người dùng nhập:

"192.168.0.0/24
172.16.0.0/24" 
Có nghĩa là chỉ những địa chỉ IP thuộc 2 dải IP Range này mới có quyền truy cập.
**Bước 6:** Nhấn nút "Update Listener" tại góc dưới bên phải của trang để hoàn tất việc cập nhật.
**Lưu ý**
  * Chỉ khai báo các CIDRs đáng tin cậy để tránh bị lạm dụng
  * Sau khi thay đổi cấu hình, nên kiểm tra lại truy cập để đảm bảo dịch vụ vẫn hoạt động bình thường
  * Nếu có sử dụng firewall khác đừng trước Load Balancer như FPT Cloud NGFW, hãy cấu hình tương ứng trên firewall
