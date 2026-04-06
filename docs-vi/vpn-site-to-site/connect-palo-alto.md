---
id: "VPN-Site-to-Site-Configuration-with-Palo-Alto-guide"
title: "Cấu hình VPN Site-to-Site với Palo Alto"
description: "**Bài viết này hướng dẫn build thiết bị Router để đấu nối VPN_S2S với dịch vụ VPN Site-to-Site của FPT Smart Cloud.**"
sidebar_label: "Cấu hình VPN Site-to-Site với Palo Alto"
sidebar_position: 15
---

# Cấu hình VPN Site-to-Site với Palo Alto

**Bài viết này hướng dẫn build thiết bị Router để đấu nối VPN_S2S với dịch vụ VPN Site-to-Site của FPT Smart Cloud.**
  * [Bước 1: Cấu hình cho VPN Site-to-Site](../vpn-site-to-site/index.md)
  * [Bước 2: Cấu hình IPsec cho Palo Alto](../vpn-site-to-site/index.md)
  * [Bước 3: Cấu hình firewall và routing cho Palo Alto](../vpn-site-to-site/index.md)

Cần đảm bảo các điều kiện sau:
  * VPN Site-to-Site trên trang Portal
  * Palo Alto đã được cài đặt và enable ở phía khách hàng.
  * Palo Alto đã được cài đặt và có 3 IP: **Managenment( IP public)** - **WAN( IP public)** - **LAN**. 

## Bước 1: Cấu hình cho VPN Site-to-Site
Truy cập và tạo VPN Site-to-Site trên trang <https://console.fptcloud.com/>
**- Tạo Customer Gateway:**
  * Remote private network: dãy Lan Subnet cần peering Palo Alto
  * Remote IP public: IP public của Palo Alto  
[![](/img/migrated/photo_1_2025-07-09_17-34-04-eb79dd6d.jpg)](/img/migrated/photo_1_2025-07-09_17-34-04-eb79dd6d.jpg)

**- Tạo VPN Connection:**
Thông số của VPN Connection sẽ bao gồm 3 mục chính:
  * General information (chứa các thông tin chung của kết nối VPN)
  * Remote VPN Information (chứa các thông tin mã hóa và thông tin của quý khách hàng)
  * Dead Peer Detection (số lần hệ thống tự động retry kết nối khi bị vấn đề)

**Phần 1: General information**
[![](/img/migrated/photo_2_2025-07-09_17-34-04-b9535872.jpg)](/img/migrated/photo_2_2025-07-09_17-34-04-b9535872.jpg)
**Lưu ý** : Thông số Pre-shared-key cần lưu lại để kết nối với Palo Alto   

**Phần 2: Remote VPN information** [![](/img/migrated/photo_3_2025-07-09_17-34-04-8e9693a4.jpg)](/img/migrated/photo_3_2025-07-09_17-34-04-8e9693a4.jpg)
  
Khi quý khách hàng lựa chọn Providers "Palo Alto", hệ thống sẽ tự động điền thông tin cho IKE và IPSec cụ thể như sau:
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

**Phần 3: Remote VPN information** [![](/img/migrated/Screenshot-2025-08-18-110311-14-33d5df01.png)](/img/migrated/Screenshot-2025-08-18-110311-14-33d5df01.png)
Điền thông số Delay và max failure và chọn **Create VPN Connection**

## Bước 2: Cấu hình IPsec cho Palo Alto
- Đăng nhập web vào Palo Alto khách hàng theo IP Management: [![file](/img/migrated/image-1744194232470-9da590d2.png)](/img/migrated/image-1744194232470-9da590d2.png) - Chọn Add và kích hoạt Zone của Palo Alto [![file](/img/migrated/image-1744194240732-d4006205.png)](/img/migrated/image-1744194240732-d4006205.png) - Tạo Virtual Router của Palo Alto và chọn OK. [![file](/img/migrated/image-1744194248910-06f7f0cd.png)](/img/migrated/image-1744194248910-06f7f0cd.png) - Tạo ra interface WAN là LAN, (lưu ý làm cho ethernet1/1 và tương tự cho ethernet 1/2)  
[![file](/img/migrated/image-1744194257003-e445a49a.png)](/img/migrated/image-1744194257003-e445a49a.png) [![file](/img/migrated/image-1744194266348-d59065a8.png)](/img/migrated/image-1744194266348-d59065a8.png) [![file](/img/migrated/image-1744194276204-d3083457.png)](/img/migrated/image-1744194276204-d3083457.png) [![file](/img/migrated/image-1744194290319-f4e7ca1b.png)](/img/migrated/image-1744194290319-f4e7ca1b.png) - Tạo ra IKE Crypto: [![file](/img/migrated/image-1744194301359-e16f558f.png)](/img/migrated/image-1744194301359-e16f558f.png) - Tạo ra IPSec Crypto: [![file](/img/migrated/image-1744194310783-c9d4bb7e.png)](/img/migrated/image-1744194310783-c9d4bb7e.png) - Chọn IPsec Tunnels:
  * Tại tab General, điền Peer Address là IP của FPT đã tạo ở bước 1(trong hình là 103.176.147.48) [![file](/img/migrated/image-1744194319286-af6f827c.png)](/img/migrated/image-1744194319286-af6f827c.png) +Tại tab Advanced Options điền các thông tin sau: [![file](/img/migrated/image-1744194330142-443aff9d.png)](/img/migrated/image-1744194330142-443aff9d.png) - Tạo ra GlobalProtect IPSec: [![file](/img/migrated/image-1744194338236-aff2c542.png)](/img/migrated/image-1744194338236-aff2c542.png) - Tạo ra IPSec Tunnels: [![file](/img/migrated/image-1744194345834-175f8eb5.png)](/img/migrated/image-1744194345834-175f8eb5.png) [![file](/img/migrated/image-1744194370901-6e262c62.png)](/img/migrated/image-1744194370901-6e262c62.png) [![file](/img/migrated/image-1744194404210-8d78429e.png)](/img/migrated/image-1744194404210-8d78429e.png)

## Bước 3: Cấu hình firewall và routing cho Palo Alto
Để cấu hình firewall và routing cho Palo Alto, thao tác theo các bước ở ví dụ dưới đây:
- Mở firewall bất kỳ
Tuỳ theo từng khách hàng mà mở source và destination theo rule [![file](/img/migrated/image-1744194387472-7a2a5471.png)](/img/migrated/image-1744194387472-7a2a5471.png) [![file](/img/migrated/image-1744194396699-4fadaad6.png)](/img/migrated/image-1744194396699-4fadaad6.png) [![file](/img/migrated/image-1744194478669-09f9447b.png)](/img/migrated/image-1744194478669-09f9447b.png)
- Mở Routing theo 2 subnet là 30.30.30.0/24 và 80.80.80/24 (tùy theo khách hàng mà mở source và destination theo rule). [![file](/img/migrated/image-1744194487401-0030c70b.png)](/img/migrated/image-1744194487401-0030c70b.png) Tới đây khách hàng đã có thể mở Terminal - Command line để thử Ping thông mạng.
