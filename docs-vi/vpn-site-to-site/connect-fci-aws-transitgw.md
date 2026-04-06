---
id: "connect-fci-aws-transitgw"
title: "Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)"
description: "**Bài viết này hướng dẫn kết nối VPNaaS của 2 nền tảng AWS và OPS trên Unify portal**"
sidebar_label: "Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)"
sidebar_position: 20
---

# Cấu hình kết nối VPN Site-to-Site giữa FCI Cloud và AWS (Transit-Gateway)

**Bài viết này hướng dẫn kết nối VPNaaS của 2 nền tảng AWS và OPS trên Unify portal**
  * [I. Cấu hình VPN Site-to-Site trên FCI Cloud](../vpn-site-to-site/index.md)
  * [II. Cấu hình VPN Site-to-Site trên AWS](../vpn-site-to-site/index.md)
  * [III. Chỉnh sửa cấu hình VPN Site-to-Site trên FCI Cloud với IP mới của VPN AWS](../vpn-site-to-site/index.md)

Trong ví dụ này chúng ta sẽ tạo kết nối VPN Site-to-Site với các thông số như trong topology bên dưới:
[![file](/img/migrated/image-1744187555434-7059bf1d.png)](/img/migrated/image-1744187555434-7059bf1d.png)

## Cấu hình VPN Site-to-Site trên FCI Cloud
**Bước 1. Tạo Customer gateways**
1.1 Tạo customer gateway với các bước sau:
[![](/img/migrated/photo_1_2025-07-09_17-36-42-336a5990.jpg)](/img/migrated/photo_1_2025-07-09_17-36-42-336a5990.jpg)
1.2 Tạo customer gateway với các thông tin sau:
[![](/img/migrated/photo_2_2025-07-09_17-36-42-7a7fc088.jpg)](/img/migrated/photo_2_2025-07-09_17-36-42-7a7fc088.jpg)
1.3 Kết quả:
[![](/img/migrated/photo_3_2025-07-09_17-36-42-cc4e0bfd.jpg)](/img/migrated/photo_3_2025-07-09_17-36-42-cc4e0bfd.jpg)
Lưu ý, vì ta chưa tạo VPN ở AWS nên bước này vẫn là IP ngẫu nhiên, Tới cuối bài, ta sẽ chỉnh sửa lại IP này ở Phần 1.1   

**Bước 2. Tạo VPN connection**
Thông số của VPN Connection sẽ bao gồm 3 mục chính:
  * General information (chứa các thông tin chung của kết nối VPN)
  * Remote VPN Information (chứa các thông tin mã hóa và thông tin của quý khách hàng)
  * Dead Peer Detection (số lần hệ thống tự động retry kết nối khi bị vấn đề)

**Phần 1: General information**
[![](/img/migrated/photo_4_2025-07-09_17-36-42-7456c972.jpg)](/img/migrated/photo_4_2025-07-09_17-36-42-7456c972.jpg)
**Phần 2: Remote VPN information** [![](/img/migrated/photo_5_2025-07-09_17-36-42-e0dc4e56.jpg)](/img/migrated/photo_5_2025-07-09_17-36-42-e0dc4e56.jpg)
Khi quý khách hàng lựa chọn Providers "AWS ",hệ thống sẽ tự động điền thông tin cho IKE và IPSec cụ thể như sau:
**Đối với IKE:**
  * Encryption algorithm: aes-256
  * Authorization algorithm: sha256
  * IKE version: ikev2
  * Lifetime units: seconds
  * Lifetime value: 28800
  * DH Group: GROUP_14
  * Phase1 negotiation mode: main

**Đối với IPsec:**
  * Encapsulation mode: tunnel
  * Encryption algorithm: aes-256
  * Authorization algorithm: sha256
  * Lifetime units: seconds
  * Lifetime value: 3600
  * Perfect forward secrecy (PFS): GROUP_14
  * Transform protocol: esp

**Phần 3: Remote VPN information** [![](/img/migrated/Screenshot-2025-08-18-110311-4-6969ef54.png)](/img/migrated/Screenshot-2025-08-18-110311-4-6969ef54.png)
Điền thông số Delay và max failure và chọn **Create VPN Connection**
Sau khi VPN HAN khởi tạo hoàn tất, VPN Connection kết nối hai dải mạng LAN sẽ ONLINE, và các VM sẽ có thể giao tiếp với nhau qua IP LAN của chúng.

## Cấu hình VPN Site-to-Site trên AWS
**Bước 1.** Tạo **Customer gateway**  
**Customer Gateway** là một tài nguyên trong AWS để đại diện cho thiết bị **gateway** tại on-premises network.  
Để tạo Customer gateway thao tác như sau:
  1. Truy cập: <https://console.aws.amazon.com/vpc/>
  2. Chọn **Customer gateways > Create customer gateway**

Nhập các trường thông tin và IP address là **Local IP public** của VPN Gateway FCI  
[![file](/img/migrated/image-1744188410276-6a0f1b1a.png)](/img/migrated/image-1744188410276-6a0f1b1a.png)
  3. Chọn **Create Customer gateway**

Thông tin **Customer gateway** đã tạo:  
[![file](/img/migrated/image-1744188423009-f32f6ae2.png)](/img/migrated/image-1744188423009-f32f6ae2.png) **Bước 2. Tạo Create transit gateway**  
Để tạo Create transit gateway thao tác như sau:
  1. Trên navigation pane, chọn Transit gateway **> Create transit gateway** [![file](/img/migrated/image-1744188442634-cdb7a1f9.png)](/img/migrated/image-1744188442634-cdb7a1f9.png)
  2. Kết quả sau khi tạo [![file](/img/migrated/image-1744188583244-7114d4b9.png)](/img/migrated/image-1744188583244-7114d4b9.png)
  3. Attach **transit gateway** vừa tạo vào **VPC** [![file](/img/migrated/image-1744188600627-a65a4744.png)](/img/migrated/image-1744188600627-a65a4744.png)   
**Bước 3. Tạo VPN connection**

3.1. Tạo **VPN connection** Tạo **VPN connection** bằng **Customer gateway ( Phần I.4.3)** và **Attach Transit Gateway** đã tạo ở bên trên đó. 
Để tạo VPN connection:
  1. Tại navigation pane, chọn **Site-to-Site VPN connections**.
  2. Chọn **Create VPN connection**.
  3. Chọn **Target gateway type** là **Transit Gateway**
  4. Chọn **Transit Gateway** và Customer gateway đã tạo trước đó
  5. Routing option chọn **Static,** static IP prefixes**:** Nhập dải subnet phía FCI( 172.16.8.0/24)
  6. Nhập **Local IPv4 network** : Nhập dải subnet phía FCI
  7. Nhập **Remote IPv4 network** : Nhập dải subnet phía AWS
  8. Chỉnh sửa các thông số cho **tunnel1** và **tunnel2**
  9. **Chọn Create VPN connection**.

[![file](/img/migrated/image-1744188630355-2f54788d.png)](/img/migrated/image-1744188630355-2f54788d.png)
[![file](/img/migrated/image-1744188646389-8d296d6c.png)](/img/migrated/image-1744188646389-8d296d6c.png) 3.2 Attach **transit gateway** vào **VPN connection** [![file](/img/migrated/image-1744188658544-061bd822.png)](/img/migrated/image-1744188658544-061bd822.png) **Kết quả:** [![file](/img/migrated/image-1744188666706-b3f50841.png)](/img/migrated/image-1744188666706-b3f50841.png) **Bước 4. Cấu hình routing**  
Config routing để hướng lưu lượng từ VPC (AWS) đến Customer Gateway (FCI) thông qua **Transit Gateway**. 
Thêm các routes từ VPN connection vào route table. (subnet FCI: 172.16.8.0/16 ) [![file](/img/migrated/image-1744188682034-612ad31a.png)](/img/migrated/image-1744188682034-612ad31a.png) **Bước 5. Cập nhật Security group**  
Cập nhật các S**ecurity group** để cho phép truy cập **SSH** , **RDP** và **ICMP**.  
Để thêm rule vào **Security group** thao tác như sau:
  1. Tại navigation pane, chọn **Security groups**.
  2. Chọn security group cho instances trong VPC muốn cho phép truy cập.
  3. Tại **Inbound rules tab** , Chọn **Edit inbound rules**. Cho phép dãy subnet của FCI qua với trạng thái All Traffic.
  4. Thêm rules để allow inbound SSH, RDP, and ICMP, và sau đó chọn **Save rules** [![file](/img/migrated/image-1744188698660-3295619c.png)](/img/migrated/image-1744188698660-3295619c.png) Khởi tạo thành công VPN Connection có trạng thái là **'Available'.** Tiếp theo, kiểm tra lại **Route table** đã route đúng chưa. 

**Bước 6. Tải configuration file**  
Sau khi tạo VPN connection, có thể tải xuống **configuration file** để sử dụng cho việc định cấu hình tại FCI VPC.  
Để tải **configuration file** thao tác như sau:
  1. Vào trang VPN connection
  2. Chọn connection vừa tạo > chọn **Download configuration**
  3. Chọn Vendor: **pfSense** , IKE version: **IKEv1( hoặc IKEv2)** > chọn **Download** [![file](/img/migrated/image-1744188724857-b4bdaa67.png)](/img/migrated/image-1744188724857-b4bdaa67.png) Ta sẽ dựa vào configuration file này để tạo VPN Site-to-Site phía FCI 

## Chỉnh sửa cấu hình VPN Site-to-Site trên FCI Cloud với IP mới của VPN AWS
  1. Sử dụng IP ở Tunnel 1 để chỉnh sửa lại ở phía FCI: [![file](/img/migrated/image-1744188753554-65ec6a49.png)](/img/migrated/image-1744188753554-65ec6a49.png)
  2. Edit Customter Gateways theo IP mới của AWS đã tạo. [![file](/img/migrated/image-1744188812981-69678af0.png)](/img/migrated/image-1744188812981-69678af0.png)   
Điền thông tin IP của tunnel AWS vào field remote IP public  
[![file](/img/migrated/image-1744188828118-52186cfb.png)](/img/migrated/image-1744188828118-52186cfb.png)

  * Đến đây chúng ta đã hoàn thành cấu hình VPN Site-to-Site giữa AWS và FCI Cloud
  * Sau khi kết nối thành công ở cuối bài hướng dẫn `**Operation status** ` của các VPN connection phía FCI Cloud sẽ là `**Online** ` và AWS là `UP` ở tunnel 1
  * **Kiểm tra trạng thái kết nối phía AWS**  
Vào **VPN connections** > chọn **VPN connection** > chọn **Tunnel details**  
Nếu kết nối thành công **status** của các tunnels sẽ là `**UP** `
  * **Cách Kiểm tra kết quả:**

Khởi tạo các VM nằm trong mỗi VPC sử dụng dải mảng trong VPN Site-to-Site và PING các VM qua lại với nhau.
**Kết quả khi PING từ FCI qua AWS**  
**Kết quả khi PING từ AWS qua FCI Cloud**
