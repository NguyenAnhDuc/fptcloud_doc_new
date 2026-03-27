---
id: "edit-vpn-connection"
title: "Hướng dẫn chỉnh sửa VPN Connection"
description: "Để chỉnh sửa VPN Connection, quý khách hàng cần thao tác theo hướng dẫn sau:"
sidebar_label: "Hướng dẫn chỉnh sửa VPN Connection"
sidebar_position: 27
---

# Edit Vpn Connection

Để chỉnh sửa VPN Connection, quý khách hàng cần thao tác theo hướng dẫn sau:
**Bước 1** : Ở menu chọn Network, chọn tab **VPN Site-to-Site**.
Tại đây sẽ quản lý các VPN Connection, quý khách hàng chọn **Edit VPN connection**
[![](/img/migrated/photo_7_2025-07-09_17-33-39-1b52f62f.jpg)](/img/migrated/photo_7_2025-07-09_17-33-39-1b52f62f.jpg)   

**Bước 2** : Người dùng thực hiện chỉnh sửa thông tin cấu hình để khởi tạo VPN Connection
Thông số của VPN Connection sẽ bao gồm 3 mục chính:
  * **General Information** (chứa các thông tin chung của kết nối VPN)
  * **Remote VPN Information** (chứa các thông tin mã hóa và thông tin của quý khách hàng)
  * **Dead Peer Detection** (số lần hệ thống tự động retry kết nối khi bị vấn đề)

**Phần 1: General information**
[![file](/img/migrated/image-1752120550850-12c6cfd0.png)](/img/migrated/image-1752120550850-12c6cfd0.png)
  
  
| **Trường**  | **Mô tả**  |  
| --- | --- |  
| VPN name  | Tên của VPN Connection  |  
| Description  | Mô tả VPN Connection  |  
| Pre-shared key  | Khoá bảo mật giữa hai thiết bị  
  
Người dùng có thể thiết lập key mới bằng cách nhấn chọn **Refresh Key** và sao chép key bằng cách click **Copy**  |  
| Local IP public  | IP public được cấp từ hệ thống FPT Cloud  |  
| Local private networks  | Dải Network tài nguyên trên FPT Cloud  |  
  

**Phần 2: Remote VPN Information**
[![](/img/migrated/photo_5_2025-07-09_17-33-39-e3bbb047.jpg)](/img/migrated/photo_5_2025-07-09_17-33-39-e3bbb047.jpg)
**Customer gateway**  
| **Trường**  | **Mô tả**  |  
| --- | --- |  
| **Customer gateway**  |   |  
| Customer gateway  | Là thông tin cấu hình ở đầu còn lại kết nối, ở bước này cần chọn đúng Customer Gateway muốn kết nối   
  
Nếu bạn chưa có Customer Gateway, vui lòng click [tại đây](../vpn-site-to-site/index.md) để xem hướng dẫn khởi tạo  |  
| Providers  | Danh sách các nhà cung cấp kết nối VPN tới FCI.  |  
| **IKE Policy**  |   |  
| Authorization algorithm  | Thuật toán được sử dụng để xác thực dữ liệu trong quá trình thiết lập kết nối VPN.  
  
Các giá trị: sha1, sha256, sha384, sha512, aes-xcbc   
  
Nên sử dụng ‘sha256’ để cân bằng bảo mật và hiệu suất_  |  
| Encryption algorithm  | Mã hóa quá trình đàm phán khóa bảo mật.  
  
Các giá trị: aes-128, aes-192, aes-256, aes-128-gcm-8, aes-128-gcm-12, aes-128-gcm-16, aes-192-gcm-8, aes-192-gcm-12, aes-192-gcm-16, aes-256-gcm-8, aes-256-gcm-12, aes-256-gcm-16'   
  
FCI khuyến nghị nên sử dụng **aes-256** để cân bằng tốt giữa bảo mật và hiệu suất   
  
Nếu quý khách hàng sử dụng **ikev1** , vui lòng không chọn các thuật toán gcm vì việc này sẽ gây ra ảnh hưởng khi kết nối dịch vụ VPN  |  
| IKE version  | Các phiên bản IKE hỗ trợ.  
Danh sách các giá trị: ikev1, ikev2   
  
FCI khuyến nghị nên sử dụng **ikev2** cho hầu hết các thiết bị firewall khi kết nối.   
Nếu quý khách hàng sử dụng thiết bị Cisco đời cũ và chỉ support ikev1, vui lòng chọn ikev1 để khởi tạo kết nối  |  
| Lifetime units  | Đơn vị đo thời gian tồn tại của kết nối IKE  
  
Mặc định là second  |  
| Lifetime value  | Giá trị thời gian sống (lifetime) cụ thể của phase 1  |  
| DH Group  | Nhóm thuật toán Diffie-Hellman dùng để tạo khoá trao đổi ban đầu   
Các giá trị: group_1, group_2, group_5, group_14, group_15, group_16, group_17, group_18, group_19 group_20, group_21.  |  
| Phase 1 negotiation mode  | Cách thức mà hai thiết bị sẽ thiết lập kết nối bảo mật trong giai đoạn 1 của IKE.  
  
Các giá trị: main, aggressive (default main)  |  
| **IPSec Policy**  |   |  
| Authorization algorithm  | Thuật toán được sử dụng để xác thực dữ liệu trong quá trình thiết lập kết nối VPN.  
  
Các giá trị: sha1, sha256, sha384, sha512, aes-xcbc  
  
 _Nên sử dụng ‘sha256’ để cân bằng bảo mật và hiệu suất_  |  
| Encapsulation mode  | Chế độ mà dữ liệu sẽ được mã hóa và đóng gói trước khi truyền tải.  
  
Mặc định là tunnel.  |  
| Encryption algorithm  | Mã hóa dữ liệu thực tế được truyền qua VPN  
  
Các giá trị: aes-128, aes-192,aes-256'  
  
Nên sử dụng **aes-256** để cân bằng bảo mật và hiệu suất  |  
| Lifetime units  | Mặc định là second  |  
| Lifetime value  | Khoảng thời gian mà một phiên kết nối IPSec được cho phép tồn tại trước khi phải được tái thiết lập.  |  
| Perfect forward secrecy  | Tùy chọn đảm bảo bảo mật khoá phiên (PFS - thường đi kèm DH Group).  
  
Các giá trị: off, group_1, group_2, group_5, group_14, group_15, group_16, group_17, group_18, group_19 group_20, group_21   
_Nên sử dụng ‘group _14’ để cân bằng bảo mật_  |  
| Transform protocol  | Giao thức được sử dụng để xác định cách thức mã hóa và xác thực trong IPSec.  
  
Các giá trị: esp, ah  |  
**Về thông tin Providers**
  * Hiện tại FCI có hỗ trợ cấu hình sẵn cho các providers như: **AWS, Fortigate, Palo Alto**. Để có được kết nối tối ưu nhất FCI khuyến nghị quý khách hàng sử dụng các thông số này.
  * Đối với trường hợp Providers không thuộc danh sách trên, quý khách hàng vui lòng điền các thông tin IKE và IPsec theo hướng dẫn bên trên

Bộ thông số cấu hình sẵn của các providers:  
| **Thông số cấu hình**  | **AWS**  | **Fortigate**  | **Palo Alto**  |  
| --- | --- | --- | --- |  
| **IKE Info**  |   |   |   |  
| IKE version  | ikev2  | ikev2  | ikev2  |  
| Encryption algorithm  | aes-256  | aes-256  | aes-256  |  
| Authorization algorithm  | sha256  | sha256  | sha256  |  
| DH Group  | group14  | group 19  | group 20  |  
| Lifetime value  | 28800s  | 28800s  | 28800s  |  
| Phase 1 negotiation mode  | main  | main  | main  |  
| **IPSec Info**  |   |   |   |  
| Encryption algorithm  | aes-256  | aes-256  | aes-256  |  
| Authorization algorithm  | sha256  | sha256  | sha256  |  
| Perfect forward secrecy  | group14  | group14 (hoặc group19)  | group 19  |  
| Lifetime value  | 3600s  | 3600s  | 3600s  |  
| Encapsulation mode  | tunnel  | tunnel  | tunnel  |  
| Transform protocol  | esp  | esp  | esp  |  
**Phần 3: Dead Peer Detection**
[![](/img/migrated/Screenshot-2025-08-18-135750-8b41586b.png)](/img/migrated/Screenshot-2025-08-18-135750-8b41586b.png)   
  
| **Trường**  | **Mô tả**  |  
| --- | --- |  
| Delay(s)  | Thời gian (giây) giữa mỗi lần gửi DPD probe để kiểm tra kết nối  
Mặc định là: 30s  |  
| Max failures  | Số lần kiểm tra thất bại tối đa trước khi xác định peer đã chết và reset kết nối.   
Mặc định là: 10  |  
  

Sau khi điền đầy đủ thông tin chọn **Update VPN Connection** để cập nhật hoặc **Cancel** để huỷ bỏ**.**