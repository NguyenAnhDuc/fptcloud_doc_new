---
id: "monitoring-service-through-logging-feature-guide"
title: "Theo dõi dịch vụ thông qua tính năng logging"
description: "Bài viết này hướng dẫn bạn cách theo dõi và đọc thông tin log của dịch vụ VPN Site-to-Site trên nền tảng FPT Smart Cloud"
sidebar_label: "Theo dõi dịch vụ thông qua tính năng logging"
sidebar_position: 37
---

# Logging

Bài viết này hướng dẫn bạn cách theo dõi và đọc thông tin log của dịch vụ VPN Site-to-Site trên nền tảng FPT Smart Cloud, giúp quý khách hàng dễ dàng kiểm tra trạng thái và xử lý sự cố kết nối
**Bước 1:** Tại màn hiển thị, quý khách chọn **Logging** trên thanh menu ngang.  
[![](/img/migrated/Screenshot-2025-09-12-103802-1-088dfdf7.png)](/img/migrated/Screenshot-2025-09-12-103802-1-088dfdf7.png) **Bước 2:** Quý khách theo dõi lịch sử hoạt động của dịch vụ. 
[![](/img/migrated/Screenshot-2025-09-12-103908-b231479b.png)](/img/migrated/Screenshot-2025-09-12-103908-b231479b.png)
  * Hiện tại FCI đang cung cấp các loại log hệ thống như sau: 

  
| Type  | Ý nghĩa  |  
| --- | --- |  
| **IKE (Internet Key Exchange)**  | Thông tin về thiết lập Phase 1 – trao đổi khóa  |  
| **CFG (Configuration)**  | Thông tin về thiết lập Phase 2 – cấu hình Tunnel  |  
| **NET (Network)**  | Thông tin về giao tiếp giữa peer thông qua UDP 500/4500  |  
| **KNL (Kernel)**  | Thông tin về thiết lập route/route policy  |  
| **ENC (Encryption)**  | Thông tin về mã hóa/giải mã trong handshake  |  
| **DPD (Dead Peer Detection)**  | Thông tin về kiểm tra peer có còn sống không  |  
| **LIB (Library)**  | Thông tin về các thư viện gọi bên trong engine charon  |  
| **ESP (Encapsulating Security Payload)**  | Thông tin về thiết lập Security Association dùng IPsec  |  
| **TRC (Traffic)**  | Thông tin về action gửi gói dữ liệu đã mã hóa  |  
| **System**  | Thông tin về các log hệ thống khác  |  
  * Thông tin log thường gặp:

  
| Nội dung  | Message logs  | Ý nghĩa / Cách khắc phục  |  
| --- | --- | --- |  
| **Các mẫu thông tin log thành công**  | N/A  | N/A  |  
| **IKE Phase 1 thành công**  | `[IKE] IKE_SA  established between 192.0.2.90[192.0.2.90]...192.0.2.74[192.0.2.74]`  | Kết nối IKE SA được thiết lập thành công giữa hai địa chỉ IP (local và remote).  
Trong đó `` là tên của VPN connection đang sử dụng.  |  
| **IPSec Phase 2 thành công**  | `[IKE] CHILD_SA  established with SPIs cf4973bf_i c1cbfdf2_o and TS 192.168.48.0/24/0 === 10.42.42.0/24/0`  | Tunnel dữ liệu đã được thiết lập thành công giữa các dải subnet.  
Trong đó `` là tên của VPN connection đang sử dụng.  |  
| **Traffic thành công**  |  `[NET]  sending packet: from x.x.x.x[4500] to x.x.x.x[4500] (80 bytes)`  
`[NET]  received packet: from x.x.x.x[4500] to x.x.x.x[4500] (80 bytes)`  | Gói dữ liệu được gửi qua tunnel thành công. Port 4500 cho thấy NAT-T đang được sử dụng.  
Nếu thông tin send packet và received packet xuất hiện nghĩa là việc gửi và nhận phản hồi từ peer vẫn ổn định, không bị ngắt.  |  
| **Rekey thành công**  | ` CHILD_SA con4{97} state change: REKEYING => REKEYED`  | Hệ thống tự động tạo lại khóa bảo mật mới mà không làm gián đoạn kết nối.  |  
| **Reauthentication thành công**  | `IKE_SA reauthentication completed`  | Thiết bị xác thực lại kết nối thành công sau một thời gian.  |  
| **Xác thực thành công PSK**  | `authentication of 'IP' with pre-shared key successful`  | Thiết bị đã xác thực thành công bằng khóa chia sẻ sẵn.  |  
| **Các thông tin log thất bại**  | N/A  | N/A  |  
| **Sai chế độ negotiation mode tại IKE Policy – phase 1**  |  **Log từ phía khởi tạo kết nối:**  
`[IKE] initiating Aggressive Mode IKE_SA con2[1] to 203.0.113.5`  
`[IKE] received AUTHENTICATION_FAILED error notify`  
`[ENC] parsed INFORMATIONAL_V1 request 1215317906 [ N(AUTH_FAILED) ]`  
`[IKE] received AUTHENTICATION_FAILED error notify`  
  
**Log từ phía kết nối:**  
`Aggressive Mode PSK disabled for security reasons`  
`Generating INFORMATIONAL_V1 request 2940146627 [ N(AUTH_FAILED) ]`  | Sai thông tin Phase1 negotiation mode giữa 2 đầu kết nối, cần thực hiện check lại trong chi tiết VPN Connection.  |  
| **Sai thông tin tại IKE Policy – phase 1**  |  **Log từ phía khởi tạo kết nối:**  
`[ENC] parsed INFORMATIONAL_V1 request 4216246776 [ HASH N(AUTH_FAILED) ]`  
`[IKE] received AUTHENTICATION_FAILED error notify`  
  
**Log từ phía kết nối:**  
`[CFG] looking for pre-shared key peer configs matching 203.0.113.5...198.51.100.3[someid]`  
`[IKE] no peer config found`  
`[ENC] generating INFORMATIONAL_V1 request 4216246776 [ HASH N(AUTH_FAILED) ]`  | Xác thực phase 1 thất bại. Vui lòng kiểm tra lại thông tin cấu hình kết nối của connection tại mục **IKE Policy** giữa 2 đầu kết nối.  |  
| **Sai thông tin Pre-shared-key ở 2 đầu kết nối**  |  **Log kết nối:**  
`charon: 09[ENC] invalid HASH_V1/ID_V1 payload length, decryption failed?`  
`charon: 09[ENC] could not decrypt payloads`  
`charon: 09[IKE] message parsing failed`  | Xác thực thất bại. Vui lòng kiểm tra lại thông tin PSK của connection của 2 đầu kết nối.  |  
| **Sai thông tin tại IKE Policy – phase 1**  |  **Log kết nối:**  
`[IKE] no proposal found`  
`[ENC] generating INFORMATIONAL_V1 request 3851683074 [ N(NO_PROP) ]`  
`[ENC] parsed INFORMATIONAL_V1 - request 3851683074 [ N(NO_PROP) ]`  
`[IKE] received NO_PROPOSAL_CHOSEN error notify`  | Sai thuật toán kết nối tại phase 1. Vui lòng kiểm tra lại thông tin cấu hình kết nối của connection của **IKE Policy** giữa 2 đầu kết nối.  |  
| **Sai thông tin tại IPsec Policy – phase 2**  |  **Log kết nối:**  
`[IKE] no matching CHILD_SA config found`  
`[ENC] generating INFORMATIONAL_V1 request 1136605099 [ HASH N(INVAL_ID) ]`  
`[ENC] generating INFORMATIONAL_V1 request 1275272345 [ HASH N(NO_PROP) ]`  
`[IKE] received NO_PROPOSAL_CHOSEN error notify`  | Xác thực phase 2 thất bại. Vui lòng kiểm tra lại thông tin cấu hình kết nối của connection tại mục **IPsec Policy** giữa 2 đầu kết nối.  
Đây cũng có thể là trường hợp sai thông tin dải network khai báo trong **customer gateway** , cần kiểm tra lại **remote subnet**.  |  
| **Sai thông tin peer ID giữa kết nối**  |  **Log kết nối:**  
`[IKE] remote host is behind NAT`  
`[IKE] IDir '192.0.2.10' does not match to '203.0.113.245'`  | Định danh peer ID không khớp. Nếu khách hàng có dùng NAT IP thì cần kiểm tra lại cấu hình **Local/Remote ID**.  
Để xem hướng dẫn đấu nối VPN với NAT IP, vui lòng tham khảo hướng dẫn tương ứng.  |
