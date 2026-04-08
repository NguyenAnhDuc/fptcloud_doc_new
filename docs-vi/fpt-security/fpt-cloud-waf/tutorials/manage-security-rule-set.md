---
id: "manage-security-rule-set"
title: "Quản lý security rule set"
description: "Hướng dẫn tạo và quản lý security rule set tùy chỉnh trong WAF Dashboard."
sidebar_label: "Quản lý security rule set"
sidebar_position: 11
---

# Quản lý security rule set

Ngoài rule set mặc định của **FPT Cloud WAF**, người dùng có thể tạo rule set tùy chỉnh để phù hợp với đặc thù endpoint cần bảo vệ.

## Tạo mới security rule set

1. Chọn **Security Rule Sets** từ menu để mở màn hình quản lý, sau đó chọn **Create Security Rule Set**.

   [![Màn hình quản lý security rule set](/img/migrated/Userguide-FPT-WAF-2022-42-1024x578-3ae15c86.png)](/img/migrated/Userguide-FPT-WAF-2022-42-1024x578-3ae15c86.png)

2. Điền các thông tin bắt buộc:

   - **Name**: Tên rule set mới.
   - **Description** (không bắt buộc): Mô tả.
   - **Replicated From**: Chọn rule set muốn clone để chỉnh sửa.

   [![Nhập thông tin rule set mới](/img/migrated/Userguide-FPT-WAF-2022-43-1024x578-ee9a0838.png)](/img/migrated/Userguide-FPT-WAF-2022-43-1024x578-ee9a0838.png)

3. Chọn **Create Security Rule Set** để lưu.

   [![Chi tiết security rule set sau khi tạo](/img/migrated/Userguide-FPT-WAF-2022-44-1024x578-9ec97a49.png)](/img/migrated/Userguide-FPT-WAF-2022-44-1024x578-9ec97a49.png)

## Tạo rule tùy chỉnh trong rule set

Sau khi tạo rule set, có thể thêm các rule tùy chỉnh theo nhu cầu.

1. Trong **Rule Sets Detail**, chọn **Create Rule**.

   [![Thêm rule mới](/img/migrated/Userguide-FPT-WAF-2022-45-1024x578-d2293080.png)](/img/migrated/Userguide-FPT-WAF-2022-45-1024x578-d2293080.png)

2. Nhập các thông tin của rule:

   - **File**: Tên cho rule.
   - **Rule ID**: ID của rule (từ 5.000.000 đến 5.999.999).
   - **Status**: Trạng thái hoạt động (Enabled/Disabled).
   - **Content**: Nội dung của rule.
   - **Description**: Mô tả cho rule.

   [![Nhập thông tin rule](/img/migrated/Userguide-FPT-WAF-2022-46-1024x578-74173036.png)](/img/migrated/Userguide-FPT-WAF-2022-46-1024x578-74173036.png)

3. Chọn **Create Rule** để tạo rule mới.

   [![Danh sách rule sau khi tạo](/img/migrated/Userguide-FPT-WAF-2022-47-1024x578-af74e7d2.png)](/img/migrated/Userguide-FPT-WAF-2022-47-1024x578-af74e7d2.png)
