---
id: "tao-rule-nat"
title: "Tạo rule NAT"
description: "**Bước 1:** Trên **Object Pane** (**F11**) > tìm Object cần SNAT > chuột phải chọn **Edit.**"
sidebar_label: "Tạo rule NAT"
sidebar_position: 13
---

# Tạo rule NAT

**Bước 1:** Trên **Object Pane** (**F11**) > tìm Object cần SNAT > chuột phải chọn **Edit.**
[![Userguide Checkpoint FPT NGFW 2022 60](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-60-90ecad9b.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-60-90ecad9b.png)
**Bước 2:** Trên Menu chọn **NAT** > tích **Add automatic address translation rules** > tích **Hide behind IP address** > điền IP muốn SNAT > chọn gateway để apply
[![Userguide Checkpoint FPT NGFW 2022 61](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-61-4c558934.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-61-4c558934.png)
**Bước 3:** Trên Menu chọn **Security Policies** (**Ctrl + 2**) > chọn **Access Control** > chọn **NAT** > Kiểm tra rule đã được tạo.
[![Userguide Checkpoint FPT NGFW 2022 62](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-62-10-dc17c546.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-62-10-dc17c546.png)
**Bước 4:** Install Policy
**Bước 1:** Trên Menu chọn **Security Policies** (**Ctrl + 2**) > chọn **Access Control** > chọn **NAT.**
[![Userguide Checkpoint FPT NGFW 2022 63](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-63-10-ac53aa0f.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-63-10-ac53aa0f.png)
**Bước 2:** Chọn **Add rule above/ to top/ to bottom** để thêm rule vào vị trí phù hợp.
[![Userguide Checkpoint FPT NGFW 2022 64](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-64-10-a10726e9.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-64-10-a10726e9.png)
**Bước 3:** Thiết lập thông tin cho rule mới:
[![Userguide Checkpoint FPT NGFW 2022 65](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-65-10-b8780102.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-65-10-b8780102.png)
  * **Name** (tên rule):[![Userguide Checkpoint FPT NGFW 2022 66](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-66-10-56f58df1.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-66-10-56f58df1.png)
  * **Original Source** (IP nguồn khi chưa NAT):[![Userguide Checkpoint FPT NGFW 2022 67](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-67-10-85cf6d50.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-67-10-85cf6d50.png)
  * **Original Destination** (IP đích khi chưa NAT):[![Userguide Checkpoint FPT NGFW 2022 68](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-68-10-e30c8c04.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-68-10-e30c8c04.png)
  * **Original Services** (Dịch vụ/ port khi chưa NAT):[![Userguide Checkpoint FPT NGFW 2022 69](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-69-10-a48979cb.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-69-10-a48979cb.png)
  * **Translated Source** (IP nguồn sau khi NAT):[![Userguide Checkpoint FPT NGFW 2022 70](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-70-10-9a29270a.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-70-10-9a29270a.png)

Giữ nguyên IP nguồn
  * **Translated Destination** (IP đích sau khi NAT):[![Userguide Checkpoint FPT NGFW 2022 71](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-71-10-3ed249b0.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-71-10-3ed249b0.png)
  * **Translated Services** (Dịch vụ/ port sau khi NAT):[![Userguide Checkpoint FPT NGFW 2022 72](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-72-10-d9e3bb2b.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-72-10-d9e3bb2b.png)
  * **Install On** (Thiết bị chứa rule NAT):[![Userguide Checkpoint FPT NGFW 2022 73](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-73-10-5d70b6f5.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-73-10-5d70b6f5.png)

Rule DNAT sau khi tạo:
[![Userguide Checkpoint FPT NGFW 2022 74](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-74-10-4254a83f.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-74-10-4254a83f.png)
**Bước 4:** Tạo Firewall rule cho phép kết nối DNAT đã tạo.
[![Userguide Checkpoint FPT NGFW 2022 75](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-75-10-32e9c82c.png)](/img/migrated/Userguide-Checkpoint-FPT-NGFW-2022-75-10-32e9c82c.png)
**Bước 5:** Install Policy.
