---
id: "tao-firewall-policy"
title: "Tạo Firewall Policy"
description: "Tạo rule firewall cho phép một máy tính trong VLAN 10.2.0.0/24 (Port 3) kết nối ra internet."
sidebar_label: "Tạo Firewall Policy"
sidebar_position: 5
---

# Tạo Firewall Policy

Tạo rule firewall cho phép một máy tính trong VLAN 10.2.0.0/24 (Port 3) kết nối ra internet.  
**Bước 1:** Cấu hình **Firewall Address** (định nghĩa các IP Address sử dụng):  
**Policy & Objects** > **Addresses** > **Create new** > **Address**.
[![Userguide Fortigate FPT NGFW 2022 7](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-7-1024-f6cbec98.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-7-1024-f6cbec98.png)
[![Userguide Fortigate FPT NGFW 2022 8](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-8-1024-6b3e2463.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-8-1024-6b3e2463.png)  
**Bước 2:** Tạo **Firewall Policy:**  
**Policy & Objects** > **Firewall Policy** > **Create new**  
[![Userguide Fortigate FPT NGFW 2022 9](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-9-1024-0428cf8e.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-9-1024-0428cf8e.png)  
Cấu hình **Interfaces** , **Action** , **Service** và các **Security Profiles** (Cấu hình các Security Profile ở mục 4.4)
[![Userguide Fortigate FPT NGFW 2022 10](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-10-102-cfc82ca1.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-10-102-cfc82ca1.png)
  * **Incoming Interface:** Chọn VLAN 10.2.0.0/24 (Port3).
  * **Outgoing Interfaces:** Chọn Port 2 (WAN).
  * **Source:** Chọn **Address** đã tạo ở bước 1.
  * **Destination:** Chọn **ALL** (hoặc có thể giới hạn các destionation bằng cách chọn nhiều destination đã tạo).
  * **Service:** Chọn **ALL**.
  * **NAT:** **Use Outgoing Interface Address** – NAT sử dụng IP public đã NAT qua Port 2 (WAN).[![Userguide Fortigate FPT NGFW 2022 11](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-11-102-c05de940.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-11-102-c05de940.png)

Add thêm các Security profile để bảo vệ hệ thống bởi các mối nguy hại từ Internet.
  * **SSL Inspection:** Chuyển sang dạng deep-inspection. Yêu cầu cài đặt certificate trên browser người dùng. (Có thể download certificate bằng cách click vào **Deep-inspection** > **Edit** > **Download certificate**)