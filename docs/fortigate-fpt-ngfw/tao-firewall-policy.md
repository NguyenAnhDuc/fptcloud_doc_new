---
id: "tao-firewall-policy"
title: "Tạo Firewall Policy"
sidebar_label: "Tạo Firewall Policy"
sidebar_position: "5"
---

# Create Firewall Policy

Create rule firewall for phép a máy tính in VLAN 10.2.0.0/24 (Port 3) kết nối ra internet.  
**Step 1:** Configure **Firewall Address** (định nghĩa the IP Address sử dụng):  
**Policy & Objects** > **Addresses** > **Create new** > **Address**.
[![Userguide Fortigate FPT NGFW 2022 7](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-7-1024-f6cbec98.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-7-1024-f6cbec98.png)
[![Userguide Fortigate FPT NGFW 2022 8](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-8-1024-6b3e2463.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-8-1024-6b3e2463.png)  
**Step 2:** Create **Firewall Policy:**  
**Policy & Objects** > **Firewall Policy** > **Create new**  
[![Userguide Fortigate FPT NGFW 2022 9](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-9-1024-0428cf8e.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-9-1024-0428cf8e.png)  
Configure **Interfaces** , **Action** , **Service** and the **Security Profiles** (Configure the Security Profile ở mục 4.4)
[![Userguide Fortigate FPT NGFW 2022 10](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-10-102-cfc82ca1.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-10-102-cfc82ca1.png)
  * **Incoming Interface:** Chọn VLAN 10.2.0.0/24 (Port3).
  * **Outgoing Interfaces:** Chọn Port 2 (WAN).
  * **Source:** Select **Address** has been tạo ở bước 1.
  * **Destination:** Select **ALL** (or can giới hạn the destionation bằng theh chọn nhiều destination has been tạo).
  * **Service:** Select **ALL**.
  * **NAT:** **Use Outgoing Interface Address** – NAT sử dụng IP public has been NAT qua Port 2 (WAN).[![Userguide Fortigate FPT NGFW 2022 11](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-11-102-c05de940.png)](/img/migrated/Userguide-Fortigate-FPT-NGFW-2022-11-102-c05de940.png)

Add thêm the Security profile to bảo vệ hệ thống bởi the mối nguy hại from Internet.
  * **SSL Inspection:** Chuyển sang dạng deep-inspection. Requirements cài đặt certificate trên browser user. (Có thể download certificate bằng theh click ando **Deep-inspection** > **Edit** > **Download certificate**)
