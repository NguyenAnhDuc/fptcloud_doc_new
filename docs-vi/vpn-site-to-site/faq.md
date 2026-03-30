---
id: "faq"
title: "Câu hỏi thường gặp"
description: "VPN là cách thức tiết kiệm chi phí, tốc độ cao và bảo mật để kết nối người dùng từ xa với mạng văn phòng. Việc kết nối V"
sidebar_label: "Câu hỏi thường gặp"
sidebar_position: 39
pagination_next: null
---

# Faq

## I. Thiết lập ban đầu
### Q: **Tại sao doanh nghiệp sử dụng VPN?**
VPN là cách thức tiết kiệm chi phí, tốc độ cao và bảo mật để kết nối người dùng từ xa với mạng văn phòng. Việc kết nối VPN thường được thực hiện trên mạng Internet công cộng nên dịch vụ này sẽ có mức chi phí rẻ hơn so với kết nối trực tiếp (direct-connect) nhưng vẫn đảm bảo an toàn khi kết nối.
* * *
### Q: **Làm sao để biết VPN Site-to-Site connect đã thành công?**
Trên giao diện quản lý, bạn cần kiểm tra các cột:
  * **Operation Status** : phải là _Online_
  * **Provisioning Status** : phải là _Active_

_Lưu ý:_ Trang thái này chỉ phản ánh kết nối **Phase 1**.  
Để kiểm tra **Phase 2** , hãy thực hiện lệnh ping giữa các máy thuộc dải subnet đã được cấu hình trong VPN connection.
* * *
### Q: **Thông số IKE và IPSec policies có cần giống nhau giữa 2 đầu kết nối không?**
Có. Cấu hình các tham số của **Phase 1 (IKE)** và **Phase 2 (IPSec)** phải đồng nhất ở cả hai phía để đảm bảo thiết lập kết nối thành công.
Xem hướng dẫn cấu hình:
  * Đối với IKE (phase 1): [tại đây](../vpn-site-to-site/index.md)
  * Đối với IPSec (phase 2): [tại đây](../vpn-site-to-site/index.md)
  * Đối với DPD (VPN connection): [tại đây](../vpn-site-to-site/index.md)

* * *
### Q: **VPN Site-to-Site có tương thích với Fortigate, Pfsense, Checkpoint... không?**
Có. Dịch vụ hỗ trợ các thiết bị phổ biến như **Fortigate** , **Pfsense** , **Checkpoint**...  
Bạn có thể tham khảo tài liệu cấu hình tại:
  * Đối với Fortigate: [tại đây](../vpn-site-to-site/index.md)
  * Đối với Pfsense: [tại đây](../vpn-site-to-site/index.md)
  * Đối với Checkpoint: [tại đây](../vpn-site-to-site/index.md)

## II. Vận hành & Kiểm tra
### Q: **Có thể tạm ngưng kết nối VPN khi không sử dụng và bật lại khi cần không?**
Có. Bạn có thể đặt trạng thái kết nối là _Inactive_ để tạm dừng.
Tài liệu hướng dẫn tại đây: [link](https://www.google.com)
* * *
### Q: **Làm sao để giám sát và xem nhật ký (log) của các hoạt động VPN?**
Bạn cần truy cập vào dịch vụ **Activity log** , lựa chọn type = “VPN” và nhập ngày muốn kiểm tra. Tài liệu hướng dẫn tại đây: [tại đây](../vpn-site-to-site/index.md)
* * *
## III. Xử lý sự cố
### Q: **Kết nối VPN không thành công, tôi cần kiểm tra những gì trước?**
  * Địa chỉ IP, khóa PSK, cấu hình IPsec 
  * Cấu hình firewall và định tuyến 
  * Kiểm tra log thiết bị để xác định nguyên nhân 
  * Nếu không thể tự xử lý, vui lòng liên hệ bộ phận kỹ thuật của chúng tôi

* * *
### Q: **VPN báo kết nối thành công nhưng không ping được hai bên?**
  * Kiểm tra lại cấu hình định tuyến, security group và firewall 
  * Xác minh xem có bị NAT hoặc trùng IP không

* * *
### Q: **VPN bị rớt kết nối, xử lý thế nào?**
  * Kiểm tra xem đã khớp thông tin IKE/IPSec chưa 
  * Kiểm tra chất lượng đường truyền Internet 
  * Nếu thông tin đã khớp, đường truyền ổn định hãy liên hệ đội ngũ kỹ thuật để được hỗ trợ kiểm tra thêm

* * *
### Q: **Tốc độ VPN chậm, làm sao để cải thiện?**
  * Sử dụng thuật toán mã hóa nhẹ hơn (nếu phù hợp với yêu cầu bảo mật) 
  * Nâng cấp băng thông tại các điểm kết nối chính