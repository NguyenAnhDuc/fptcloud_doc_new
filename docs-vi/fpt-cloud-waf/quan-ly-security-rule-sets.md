---
id: "quan-ly-security-rule-sets"
title: "Quản lý Security Rule Sets"
description: "Ngoài Rule Set mặc định của **FPT Cloud WAF** cung cấp, người dùng có thể tự tạo một Rule Set với các Rule tùy chỉnh để "
sidebar_label: "Quản lý Security Rule Sets"
sidebar_position: 22
---

# Quan Ly Security Rule Sets

Ngoài Rule Set mặc định của **FPT Cloud WAF** cung cấp, người dùng có thể tự tạo một Rule Set với các Rule tùy chỉnh để phù hợp với đặc thù endpoint cần bảo vệ.
Để thêm mới một Rule Set tùy chỉnh, quản trị viên thực hiện các bước sau:
**Bước 1** : Chọn **Security Rule Sets** tại menu để mở màn hình quản lý **Security Rule Sets** > chọn **Create Security Rule Set.**
[![Userguide FPT WAF 2022 42](/img/migrated/Userguide-FPT-WAF-2022-42-1024x578-3ae15c86.png)](/img/migrated/Userguide-FPT-WAF-2022-42-1024x578-3ae15c86.png)
**Bước 2:** Chọn **Create Security Rule Set** để mở màn hình thêm mới **Rule Set** và điền các thông tin bắt buộc:
  * **Name:** Tên Rule Set mới.
  * **Description** (không bắt buộc): Mô tả.
  * **Replicated From:** Chọn Rule Set mà quản trị viên muốn clone và chỉnh sửa.

[![Userguide FPT WAF 2022 43](/img/migrated/Userguide-FPT-WAF-2022-43-1024x578-ee9a0838.png)](/img/migrated/Userguide-FPT-WAF-2022-43-1024x578-ee9a0838.png)
**Bước 3:** Chọn **Create Security Rule Set** để lưu và hoàn tất việc tạo **Rule Set**.
[![Userguide FPT WAF 2022 44](/img/migrated/Userguide-FPT-WAF-2022-44-1024x578-9ec97a49.png)](/img/migrated/Userguide-FPT-WAF-2022-44-1024x578-9ec97a49.png)
##### 
Tạo Rule tùy chỉnh trong Rule Sets
Sau khi tạo Rule Set bạn đã có thể thêm các Rule tùy chỉnh theo nhu cầu.
Để thêm Rule tùy chỉnh mới bạn thao tác như sau:
**Bước 1:** Trong **Rule Sets Detail** cần add thêm Rule, chọn **Create Rule.**
[![Userguide FPT WAF 2022 45](/img/migrated/Userguide-FPT-WAF-2022-45-1024x578-d2293080.png)](/img/migrated/Userguide-FPT-WAF-2022-45-1024x578-d2293080.png)
**Bước 2:** Nhập các thông tin cần thiết của Rule:
  * **File:** Đặt tên cho rule.
  * **Rule ID:** ID của Rule (nằm trong khoảng từ 5.000.000 đến 5.999.999)
  * **Status:** Trạng thái hoạt động (Enabled/Disabled)
  * **Content:** Nội dung của rule.
  * **Description:** Mô tả cho rule.

[![Userguide FPT WAF 2022 46](/img/migrated/Userguide-FPT-WAF-2022-46-1024x578-74173036.png)](/img/migrated/Userguide-FPT-WAF-2022-46-1024x578-74173036.png)
**Bước 3:** Chọn **Creat Rule** để thực hiện tạo Rule mới.
[![Userguide FPT WAF 2022 47](/img/migrated/Userguide-FPT-WAF-2022-47-1024x578-af74e7d2.png)](/img/migrated/Userguide-FPT-WAF-2022-47-1024x578-af74e7d2.png)