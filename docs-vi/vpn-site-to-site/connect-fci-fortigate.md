---
id: "connect-fci-fortigate"
title: "Cấu hình VPN Site-to-Site với Fortigate"
description: "Bài viết này hướng dẫn build thiết bị Router để đấu nối VPN Site-to-Site của FPT Smart Cloud."
sidebar_label: "Cấu hình VPN Site-to-Site với Fortigate"
sidebar_position: 23
---

# Connect Fci Fortigate

Bài viết này hướng dẫn build thiết bị Router để đấu nối VPN Site-to-Site của FPT Smart Cloud. 
  * [Bước 1: Cấu hình cho VPN Site-to-Site](../vpn-site-to-site/index.md)
  * [Bước 2: Cấu hình IPsec cho Fortigate](../vpn-site-to-site/index.md)
  * [Bước 3: Cấu hình firewall và routing cho Fortigate](../vpn-site-to-site/index.md)

Cần đảm bảo các điều kiện sau:
  * VPN Site-to-Site trên trang Portal
  * Fortigate đã được cài đặt và enable, active license ở phía khách hàng.
  * Fortigate đã được cài đặt và có IP LAN WAN. 

## Bước 1: Cấu hình cho VPN Site-to-Site
Truy cập và tạo VPN Site To Site trên trang <https://console.fptcloud.com/>
- Tạo Customer Gateway:
  * Remote private network: dãy Lan Subnet cần peering Fortigate
  * Remote IP public: IP public của Fortigate

[![](/img/migrated/photo_1_2025-07-09_17-37-35-3a5135c3.jpg)](/img/migrated/photo_1_2025-07-09_17-37-35-3a5135c3.jpg)
- Tạo VPN Connection:
Với thông số **"Pre-shared key"** cần lưu lại để điền vào Fortigate
Thông số của VPN Connection sẽ bao gồm 3 mục chính:
  * General information (chứa các thông tin chung của kết nối VPN)
  * Remote VPN Information (chứa các thông tin mã hóa và thông tin của quý khách hàng)
  * Dead Peer Detection (số lần hệ thống tự động retry kết nối khi bị vấn đề)

**Phần 1: General information**
[![](/img/migrated/photo_2_2025-07-09_17-37-35-f1f6f494.jpg)](/img/migrated/photo_2_2025-07-09_17-37-35-f1f6f494.jpg)
**Phần 2: Remote VPN information**
[![file](/img/migrated/image-1757055954440-3519ef8e.png)](/img/migrated/image-1757055954440-3519ef8e.png)
Khi quý khách hàng lựa chọn Providers "Fortigate",hệ thống sẽ tự động điền thông tin cho IKE và IPSec cụ thể như sau:
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

**Phần 3: Remote VPN information**
[![](/img/migrated/Screenshot-2025-08-18-110311-2300da0e.png)](/img/migrated/Screenshot-2025-08-18-110311-2300da0e.png)
Điền thông số Delay và max failure và chọn **Create VPN Connection**

## Bước 2: Cấu hình IPsec cho Fortigate
- Đăng nhập web vào Fortigate khách hàng: [![file](/img/migrated/image-1744193935450-35f5c8ce.png)](/img/migrated/image-1744193935450-35f5c8ce.png) - Chọn IPsec Wizard: [![file](/img/migrated/image-1744193947980-2791ca43.png)](/img/migrated/image-1744193947980-2791ca43.png) - Chọn IPsec Tunnels:
  * IP Address là IP của FPT đã tạo ở bước 1

+ Interface là WAN, trong trường hợp có nhiều WAN thì xác định WAN bạn cần. [![file](/img/migrated/image-1744193964825-d0b0043d.png)](/img/migrated/image-1744193964825-d0b0043d.png) Kiểm tra trạng thái của connection bên portal của FPT Smart Cloud [![file](/img/migrated/image-1744193984133-1153c0da.png)](/img/migrated/image-1744193984133-1153c0da.png) - Bật Local Gateway và chọn Primary IP [![file](/img/migrated/image-1744193993723-b814a802.png)](/img/migrated/image-1744193993723-b814a802.png) - Bật Method là **Pre-shared Key** và điền vào giống với thông số ở Bước 1: [![file](/img/migrated/image-1744194001749-b890d7b8.png)](/img/migrated/image-1744194001749-b890d7b8.png) Lưu ý: Mô hình của khách có thể sử dụng sau NAT, trong trường hợp dùng NAT thì cấu hình như sau+ Liên hệ L3-FCI để được support [![file](/img/migrated/image-1744194012256-2ab35738.png)](/img/migrated/image-1744194012256-2ab35738.png) - Cấu hình Phase 1 như sau: [![file](/img/migrated/image-1744194042329-41a8e0ca.png)](/img/migrated/image-1744194042329-41a8e0ca.png)
  * Nếu khách không dùng NAT thì phải disabled NAT mode.

- Cấu hình Phase 2 như sau:
+ Local IP là dãy network khách hàng cần kết nối [![file](/img/migrated/image-1744194053329-8c1ac803.png)](/img/migrated/image-1744194053329-8c1ac803.png)

## Bước 3: Cấu hình firewall và routing cho Fortigate
  * Set firewall Allowed All cả incoming và outcoming như 2 hình dưới đây:

- Tạo từ FPT Cloud tới Fortigate:  
[![file](/img/migrated/image-1744194062973-cc3001df.png)](/img/migrated/image-1744194062973-cc3001df.png) - Tiếp tục tạo từ Fortigate về FPT Cloud: [![file](/img/migrated/image-1744194072242-b7107945.png)](/img/migrated/image-1744194072242-b7107945.png) - Hoàn thành kết nối giữa FPT Cloud và Fortigate: [![file](/img/migrated/image-1744194081090-379a371e.png)](/img/migrated/image-1744194081090-379a371e.png)
  * Set routing như hình dưới với **Destination** là dãy Network ở phía của FPT(FCI- 172.30.205.0/255.255.255.0), Interface là " IPsec Tunnel" mà ta đã tạo ở bước bên trên. [![file](/img/migrated/image-1744194099241-826d8df0.png)](/img/migrated/image-1744194099241-826d8df0.png)

Tới đây bạn đã có thể thử mở Terminal - Command line để thử Ping thông mạng.
