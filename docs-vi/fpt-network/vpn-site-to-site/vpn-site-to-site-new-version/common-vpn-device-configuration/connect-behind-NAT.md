---
id: "connect-behind-NAT"
title: "Cấu hình VPN Site-to-Site với các thiết bị NAT IP"
description: "**NAT IP (Network Address Translation) là gì?**"
sidebar_label: "Cấu hình VPN Site-to-Site với các thiết bị NAT IP"
sidebar_position: 10
pagination_next: null
---

# Cấu hình VPN Site-to-Site với các thiết bị NAT IP

**NAT IP (Network Address Translation) là gì?**
**NAT (Network Address Translation) IP** là cơ chế dịch địa chỉ IP, nó nằm trên router hoặc firewall, dùng để biến đổi địa chỉ IP private trong mạng nội bộ thành IP public khi ra Internet, và ngược lại. 
  

**Tính năng Kết nối thiết bị Behind NAT IP của dịch vụ VPN Site-to-Site**
Trong một số trường hợp, thiết bị VPN của khách hàng không được gắn trực tiếp địa chỉ IP Public, mà chỉ sử dụng IP Private bên trong mạng nội bộ (ví dụ đặt sau modem hoặc router của nhà mạng). Tính năng Behind NAT IP của dịch vụ VPN Site-to-Site cho phép thiết bị Behind NAT vẫn có thể khởi tạo và duy trì kết nối VPN tunnel ra ngoài Internet.   

**Hướng dẫn cách kết nối thiết bị Behind NAT IP**
**Bước 1:** Ở menu chọn **Network** , chọn tab **VPN Site-to-Site.**
Tại đây sẽ quản lý các VPN Connection, quý khách hàng chọn **Create VPN connection**
[![](/img/migrated/Picture7-ed87f20e.jpg)](/img/migrated/Picture7-ed87f20e.jpg)
Chọn khởi tạo VPN Gateway Sau khi đã có VPN Gateway, chọn 
[![](/img/migrated/Picture6-1e3fa5a4.jpg)](/img/migrated/Picture6-1e3fa5a4.jpg)
**Bước 2** : Quý khách thực hiện nhập thông tin cấu hình: 
[![](/img/migrated/Picture5-15bee5a1.jpg)](/img/migrated/Picture5-15bee5a1.jpg)
Thông số của VPN Connection sẽ bao gồm 3 mục chính: 
  * **General Information** (chứa các thông tin chung của kết nối VPN) 
  * **Remote VPN Information** (chứa các thông tin mã hóa và thông tin của quý khách hàng) 
  * **Dead Peer Detection** (số lần hệ thống tự động retry kết nối khi bị vấn đề) 
  * **Advanced Information** (chứa thông tin advanced để kết nối với các thiết bị Behind NAT của quý khách hàng) 

**Phần 1: General information** [![](/img/migrated/Picture4-dbd5b6be.jpg)](/img/migrated/Picture4-dbd5b6be.jpg)  
| **Trường**  | **Mô tả**  |  
| --- | --- |  
| **VPN name**  | Tên của VPN Connection  |  
| **Description**  | Mô tả VPN Connection  |  
| **Pre-shared key**  | Khoá bảo mật giữa hai thiết bị.  
Quý khách có thể thiết lập key mới bằng cách nhấn **Refresh Key** và sao chép key bằng cách click **Copy**.  |  
| **Local IP public**  | IP public được cấp từ hệ thống FPT Cloud  |  
| **Local private networks**  | Dải Network tài nguyên trên FPT Cloud  |  
**Phần 2: Remote VPN Information** [![](/img/migrated/3-a5e38ac9.jpg)](/img/migrated/3-a5e38ac9.jpg)
  * **Customer gateway name là thông tin cấu hình ở đầu còn lại kết nối, ở bước này cần chọn đúng Customer Gateway muốn kết nối**

  
| **Trường**  | **Mô tả**  |  
| --- | --- |  
| **Customer gateway**  |   |  
| Customer gateway  | Là thông tin cấu hình ở đầu còn lại kết nối, ở bước này cần chọn đúng Customer Gateway muốn kết nối   
  
Nếu bạn chưa có Customer Gateway, vui lòng click [tại đây](/docs/vi/fpt-network/vpn-site-to-site/)/ để xem hướng dẫn khởi tạo  |  
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
  * Hiện tại FCI có hỗ trợ cấu hình sẵn cho các providers như: AWS, Fortigate, Palo Alto. Để có được kết nối tối ưu nhất FCI khuyến nghị quý khách hàng sử dụng các thông số này. 

  
| **Thông số cấu hình**  | **AWS**  | **Fortigate**  | **Palo Alto**  |  
| --- | --- | --- | --- |  
| **IKE Info**  |   |   |   |  
| IKE version  | ikev2  | ikev2  | ikev2  |  
| Encryption algorithm  | aes-256  | aes-256  | aes-256  |  
| Authorization algorithm  | sha256  | sha256  | sha256  |  
| DH Group  | group14  | group14 - group19  | group14 – group20  |  
| Lifetime value  | 28800s  | 28800s  | 28800s  |  
| Phase 1 negotiation mode  | main  | main  | main  |  
| **IPSec Info**  |   |   |   |  
| Encryption algorithm  | aes-256  | aes-256  | aes-256  |  
| Authorization algorithm  | sha256  | sha256  | sha256  |  
| Perfect forward secrecy  | group14  | group14 (hoặc group19)  | group19  |  
| Lifetime value  | 3600s  | 3600s  | 3600s  |  
| Encapsulation mode  | tunnel  | tunnel  | tunnel  |  
| Transform protocol  | esp  | esp  | esp  |  
  * Đối với trường hợp Providers không thuộc danh sách trên, quý khách hàng vui lòng điền các thông tin IKE và IPsec phù hợp với cấu hình kết nối 

**Phần 3: Dead Peer Detection** [![](/img/migrated/2-212a5d64.jpg)](/img/migrated/2-212a5d64.jpg)  
| Trường  | Mô tả  |  
| --- | --- |  
| **Delay (s)**  | Thời gian (giây) giữa mỗi lần gửi **DPD probe** để kiểm tra kết nối.   
  
**Mặc định:** 30s  |  
| **Max failures**  | Số lần kiểm tra thất bại tối đa trước khi xác định **peer đã chết** và reset kết nối.   
  
**Mặc định:** 10  |  
**Phần 4: Advanced Information** [![](/img/migrated/1-bdb8bdfa.jpg)](/img/migrated/1-bdb8bdfa.jpg)  
| Trường  | Mô tả  |  
| --- | --- |  
| **Peer ID**  | Định danh (địa chỉ IP gốc) của thiết bị VPN khách hàng trong quá trình thiết lập VPN (IKE negotiation).   
  
Mặc định hệ thống sẽ lấy **Customer Gateway IP**. Nếu quý khách có sử dụng **NAT IP** , vui lòng kiểm tra lại **địa chỉ IP gốc (trước khi bị NAT)** và điền thông tin vào trường **Peer ID** này.  |  
Sau khi điền đầy đủ thông tin cho VPN Connection, Quý khách tiến hành chọn **Create VPN Connection** hoặc **Cancel** để hủy bỏ.
