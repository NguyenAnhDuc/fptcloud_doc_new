---
id: "SNI-load-balancer"
title: "Cấu hình SNI trên Load balancer"
description: "Tính năng cấu hình **SNI (Server Name Indication)** trên Load Balancer cho phép một Listener phục vụ nhiều tên miền (hos"
sidebar_label: "Cấu hình SNI trên Load balancer"
sidebar_position: 19
pagination_next: null
---

# Cấu hình SNI trên Load balancer

Tính năng cấu hình **SNI (Server Name Indication)** trên Load Balancer cho phép một Listener phục vụ nhiều tên miền (hostname) khác nhau bằng cách ánh xạ từng tên miền với một chứng chỉ SSL/TLS cụ thể. Tính năng này giúp tiết kiệm tài nguyên, hỗ trợ triển khai đa miền và tăng cường bảo mật cho các dịch vụ HTTPS.

### Cách hoạt động
  * Khi một client gửi yêu cầu HTTPS đến Load Balancer, trình duyệt hoặc ứng dụng sẽ đính kèm tên miền (SNI hostname) vào trong giai đoạn bắt tay SSL.
  * Load Balancer sẽ đọc thông tin hostname từ SNI và chọn chứng chỉ SSL tương ứng được cấu hình sẵn cho hostname đó.
  * Nếu hostname khớp với một SNI đã cấu hình, kết nối sẽ được thiết lập thành công với chứng chỉ đúng.
  * Nếu hostname không khớp, Load Balancer sẽ sử dụng **Default certificate**.

### Khi nào cần cấu hình SNI trên Load Balancer
  * **Lưu trữ nhiều tên miền trên cùng một IP** : Hỗ trợ nhiều website HTTPS chạy trên một Load Balancer duy nhất.
  * **Tiết kiệm tài nguyên** : Không cần tạo nhiều Load Balancer chỉ để phục vụ các tên miền khác nhau.
  * **Bảo mật tên miền** : Mỗi domain có thể dùng chứng chỉ riêng biệt, giúp dễ quản lý và tuân thủ chính sách bảo mật.

### Hướng dẫn cấu hình
**Bước 1** : Truy cập vào trang quản lý Load Balancer trên **FPT Cloud Portal**
**Bước 2** : Tại danh sách Load Balancer, chọn Load Balancer bạn muốn cấu hình.
**Bước 3** : Chọn tab **Listener** , sau đó chọn Listener đang sử dụng protocol TERMINATED_HTTPS, hoặc tạo mới Listener nếu chưa có
**Bước 4** : Chọn các chứng chỉ SSL/TLS lên 2 trường: 
  * Default SSL/TLS certificate: Chọn chứng chỉ mặc định sử dụng cho Listener
**Bước 5** : Nhấn "Update Listener" hoặc " Create Listener để lưu thay đổi.
**Bước 6** : Trỏ các tên miền (hostname) về IP public của Load balancer và truy cập.
Ngoài ra, người dùng có thể kết hợp sử dụng L7 policy để điều phối truy cập từng domain tới Pool mong muốn, cấu hình như sau:
**Bước 1** : Tải lên đầy đủ chứng chỉ và add vào Listener như hướng dẫn trên, sau đó chọn tab L7 policy **Bước 2** : Tạo các L7 policy tại Listener:

```
CopyVí dụ người dùng có 3 domain:
* example1.com cần redirect tới Pool1
* example2.com cần redirect tới Pool2
* example3.com cần redirect tới Pool3

Tạo 3 policy tương ứng, và action với 3 Pool khác nhau:
Policy1:
- Policy action: Redirect to pool
- Redirect to: Pool1
- Position:1
Policy2:
- Policy action: Redirect to pool
- Redirect to: Pool2
- Position:2
Policy3:
- Policy action: Redirect to pool
- Redirect to: Pool3
- Position:3
Mỗi policy tạo 1 rule:
Policy1 - Rule:
- Type: Hostname
- Compare type: Equal to
- Value: example1.com
- Invert: No
Policy2 - Rule:
- Type: Hostname
- Compare type: Equal to
- Value: example2.com
- Invert: No
Policy3 - Rule:
- Type: Hostname
- Compare type: Equal to
- Value: example3.com
- Invert: No
```

**Bước 3** : Lưu lại các thay đổi và truy cập tới các domain để kiểm tra Load balancer đã redirect request đúng chưa

### Lưu ý
  * **Client phải hỗ trợ SNI** : Đa số trình duyệt và công cụ hiện nay đều hỗ trợ SNI. Một số client cũ (như curl bản rất cũ hoặc thiết bị IoT) có thể không hỗ trợ.
  * **Chứng chỉ SSL cần hợp lệ** và đúng với hostname.
  * **Hostname phải duy nhất** : Không nên cấu hình trùng hostname với nhiều chứng chỉ.
  * **Sử dụng wildcard:** Trong trường hợp dùng cho các subdomain, người dùng có thể chỉ cần một chứng chỉ wildcard (ví dụ: *.example.com) làm default certificate, thay vì cấu hình nhiều chứng chỉ riêng lẻ cho từng hostname.
  * **Sử dụng L7 policy:** Nếu không có policy trùng khớp, request sẽ được điều hướng vào Pool mặc định
