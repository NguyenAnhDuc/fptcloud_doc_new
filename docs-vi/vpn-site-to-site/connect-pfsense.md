---
id: "connect-pfsense"
title: "Cấu hình VPN Site-to-Site với PfSense"
description: "**Bài viết này hướng dẫn cách build thiết bị Pfsense** để kết nối VPN_S2S với dịch vụ VPN Site-to-Site của FPT Smart Clo"
sidebar_label: "Cấu hình VPN Site-to-Site với PfSense"
sidebar_position: 16
---

# Connect Pfsense

**Bài viết này hướng dẫn cách build thiết bị Pfsense** để kết nối VPN_S2S với dịch vụ VPN Site-to-Site của FPT Smart Cloud.
  * [Bước 1: Build Pfsense for Cloud](../vpn-site-to-site/index.md)
  * [Bước 2: Cấu hình cho VPN Site-to-Site](../vpn-site-to-site/index.md)
  * [Bước 3: Cấu hình cho Pfsense](../vpn-site-to-site/index.md)

Cần đảm bảo các điều kiện sau:
  * VPNAAS trên trang Portal
  * Pfsense đã được download và boot image trên cloud với tên: **Pfsense**
  * Public IP, giảm độ phức tạp thì gắn trực tiếp vào VM, không dùng Floating IP
  * Dãy Network tương ứng
  * 2 VM Pfsense để phục vụ debug( 2c4g ) 

## Bước 1: Build Pfsense for Cloud
  * Build Image Pfsense trên Horizon cấu hình 2C4G- 1 IP public gắn trực tiếp, 1 IP mạng Local cần VPN
  * Có thể vào console VM thông qua SSH 

## Bước 2: Cấu hình cho VPN Site-to-Site
Truy cập và tạo VPN Site-to-Site trên <https://console.fptcloud.com/>
**- Tạo Customer Gateway:**
  * Remote private network: dãy Lan Subnet cần peering của Pfsense
  * Remote IP public: IP public của Pfsense

[![](/img/migrated/photo_1_2025-07-09_17-34-31-98e1e24d.jpg)](/img/migrated/photo_1_2025-07-09_17-34-31-98e1e24d.jpg)
**- Tạo VPN connection:**
Thông số của VPN Connection sẽ bao gồm 3 mục chính:
  * General information (chứa các thông tin chung của kết nối VPN)
  * Remote VPN Information (chứa các thông tin mã hóa và thông tin của quý khách hàng)
  * Dead Peer Detection (số lần hệ thống tự động retry kết nối khi bị vấn đề)

**Phần 1: General information** [![](/img/migrated/photo_2_2025-07-09_17-34-31-bab62499.jpg)](/img/migrated/photo_2_2025-07-09_17-34-31-bab62499.jpg)
**Lưu ý** : Thông số Pre-shared-key cần lưu lại để kết nối với Palo Alto   
**Phần 2: Remote VPN information** [![file](/img/migrated/image-1757089299476-d2ccb53e.png)](/img/migrated/image-1757089299476-d2ccb53e.png)
Quý khách hàng lựa chọn Providers = "others" sau đó làm theo các bước sau:
  * Bước 1: Điền providers name = "pfsense" 
  * Bước 2: Điền thông tin cho IKE và IPSec cụ thể như sau:

**Đối với IKE:**
  * Authorization algorithm: sha256
  * Encryption algorithm: aes 256
  * IKE version: ikev2
  * DH group: group14
  * Lifetime: 3600 seconds
  * Phase1 negotiation mode: main

**Đối với IPsec:**
  * Authorization algorithm: sha256
  * Encryption algorithm: aes 256
  * Encapsulation mode: tunnel
  * Transform protocol: esp
  * Perfect Forward Secrecy (PFS): group14
  * Lifetime: 3600 seconds

**Phần 3: Remote VPN information** [![](/img/migrated/Screenshot-2025-08-18-110311-15-6bf84b44.png)](/img/migrated/Screenshot-2025-08-18-110311-15-6bf84b44.png)
Điền thông số Delay và max failure và chọn **Create VPN Connection**

## Bước 3: Cấu hình cho Pfsense
**-** Đăng nhập vào console VNC của VM Checkpoint theo account đã tạo trên và chạy lệnh: "Cpstart"
**-** Đăng nhập vào website theo địa chỉ IP: [https://{`IP`}](https://IP.) , có thể hiện thông báo SSL như sau: [![file](/img/migrated/image-1744194638397-e138f610.png)](/img/migrated/image-1744194638397-e138f610.png)
  * Thông tin đăng nhập mặc định:

User: _Admin_
Pass: _Pfsense_ (Có thể set lại pass khi đăng nhập lần đầu trên web)
- Nếu chưa có LAN ở tab **Interfaces → chọn LAN** để thêm LAN:  
[![file](/img/migrated/image-1744194649644-c8a77911.png)](/img/migrated/image-1744194649644-c8a77911.png) - Tiến hành config Tunnel cho Pfsense: [![file](/img/migrated/image-1744194658447-e3aaf020.png)](/img/migrated/image-1744194658447-e3aaf020.png) Tại tab VPN, chọn **IPsec → Tunnels** và ấn chọn Add P1.
  * Set up Phase 1 như hình sau:

**Chú ý** : + Pre-Shared Key: nhập từ VPNAAS đã tạo trên portal trước đó
+ Remote Gateway: là IP Public của VPNAAS đã tạo trên portal trước đó [![file](/img/migrated/image-1744194669785-8c6ee265.png)](/img/migrated/image-1744194669785-8c6ee265.png)
  * Set up Phase 2 như sau: [![file](/img/migrated/image-1744194677761-3fb897ed.png)](/img/migrated/image-1744194677761-3fb897ed.png)

Tới đây khách hàng đã có thể mở Terminal - Command line để thử Ping thông mạng.
