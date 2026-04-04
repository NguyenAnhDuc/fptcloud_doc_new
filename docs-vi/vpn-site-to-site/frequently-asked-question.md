---
id: "frequently-asked-question"
title: "Câu hỏi thường gặp (chi tiết)"
description: "Câu hỏi thường gặp và giải đáp về VPN Site-to-Site trên FPT Cloud."
sidebar_label: "Câu hỏi thường gặp (chi tiết)"
sidebar_position: "30"
---

# Câu hỏi thường gặp

## Thiết lập ban đầu

### Q: Tại sao doanh nghiệp sử dụng VPN?

VPN là cách thức tiết kiệm chi phí, tốc độ cao và bảo mật để kết nối người dùng từ xa với mạng văn phòng. Kết nối VPN thường được thực hiện qua mạng Internet công cộng nên dịch vụ có chi phí thấp hơn kết nối trực tiếp (direct-connect) nhưng vẫn đảm bảo an toàn.

### Q: Làm sao biết kết nối VPN Site-to-Site đã thành công?

Trên giao diện quản lý, kiểm tra các cột sau:

- **Operation Status**: Online
- **Provisioning Status**: Active

:::note
Trạng thái này chỉ phản ánh kết nối **Phase 1**. Để kiểm tra **Phase 2**, thực hiện lệnh ping giữa các máy thuộc dải subnet đã cấu hình trong VPN Connection.
:::

### Q: Thông số IKE và IPSec policies có cần giống nhau giữa 2 đầu kết nối không?

Có. Cấu hình các tham số của **Phase 1 (IKE)** và **Phase 2 (IPSec)** phải đồng nhất ở cả hai phía để thiết lập kết nối thành công.

### Q: VPN Site-to-Site có tương thích với Fortigate, pfSense, Checkpoint... không?

Có. Dịch vụ hỗ trợ các thiết bị phổ biến như Fortigate, pfSense, Checkpoint và nhiều thiết bị khác. Tham khảo tài liệu cấu hình cho từng thiết bị.

## Vận hành và kiểm tra

### Q: Có thể tạm ngưng kết nối VPN và bật lại khi cần không?

Có. Đặt trạng thái kết nối là **Inactive** để tạm dừng.

### Q: Làm sao để giám sát và xem nhật ký hoạt động VPN?

Sử dụng tab **Logging** trong màn hình chi tiết VPN để giám sát hoạt động và xem các bản ghi log. Xem [Giám sát qua Logging](./monitoring-service-through-logging-feature-guide.md) để biết thêm chi tiết.

## Xử lý sự cố

### Q: Kết nối VPN không thành công — cần kiểm tra những gì trước?

- Địa chỉ IP, khóa PSK và cấu hình IPsec
- Cấu hình firewall và định tuyến
- Kiểm tra log thiết bị để xác định lỗi cụ thể
- Nếu vẫn không giải quyết được, liên hệ đội ngũ hỗ trợ kỹ thuật

### Q: VPN báo kết nối thành công nhưng không ping được hai bên?

- Kiểm tra lại cấu hình định tuyến, security group và firewall
- Xác minh xem có bị NAT hoặc trùng dải IP không

### Q: VPN bị rớt kết nối — xử lý thế nào?

- Kiểm tra xem thông số IKE/IPSec đã khớp chưa
- Kiểm tra chất lượng đường truyền Internet
- Nếu thông số đã khớp và đường truyền ổn định, liên hệ đội hỗ trợ để kiểm tra thêm

### Q: Tốc độ VPN chậm — làm sao cải thiện?

- Sử dụng thuật toán mã hóa nhẹ hơn (nếu phù hợp với yêu cầu bảo mật)
- Nâng cấp băng thông tại các điểm kết nối chính
