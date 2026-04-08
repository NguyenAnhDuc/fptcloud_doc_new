---
id: "cau-hinh-network-interfaces"
title: "Cấu hình Network Interfaces"
description: "**Bước 1:** Sau khi đã cấu hình Interface quản trị (Port 1) trên CLI và đã truy cập giao diện web thành công. Dưới đây l"
sidebar_label: "Cấu hình Network Interfaces"
sidebar_position: 2
---

# Cấu hình Network Interfaces

**Bước 1:** Sau khi đã cấu hình Interface quản trị (Port 1) trên CLI và đã truy cập giao diện web thành công. Dưới đây là hướng dẫn cấu hình một Interface đóng vai trò LAN.  
[![Userguide Fortigate FPT NGFW 2022 3](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-3-1024-f1152674.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-3-1024-f1152674.png)  
**Bước 2:** Cấu hình Interface đóng vai trò WAN (Port 2).  
[![Userguide Fortigate FPT NGFW 2022 4](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-4-1024-81285d65.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-4-1024-81285d65.png)  
**Administrative Access:** Cho phép truy cập vào interface thông qua các Services.
Lưu ý trên VMWare/OpenStack đã NAT cho phép IP 10.0.0.6 kết nối ra internet.
