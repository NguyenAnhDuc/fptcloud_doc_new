---
id: "create-credentials"
title: "Tạo credential"
description: "Hướng dẫn tạo credential để kết nối dịch vụ FPT Kafka."
sidebar_label: "Tạo credential"
sidebar_position: 10
---

# Tạo credential

Credential cung cấp thông tin xác thực (username/password) cho ứng dụng kết nối đến Kafka Service theo phương thức SASL/SCRAM-SHA-256. Bạn cần tạo credential trước khi cấu hình ACL và kết nối từ ứng dụng.

1. Từ menu, chọn **Application** > **Credentials**, sau đó nhấn **Create**.
2. Điền các thông tin:
   - **Username** (bắt buộc)
   - **Password** (bắt buộc)

   [![Màn hình tạo credential mới với trường username và password](/img/migrated/Pic1_Taocre-e9963007.png)](/img/migrated/Pic1_Taocre-e9963007.png)

3. Nhấn **OK** để tạo credential.

:::note
Hệ thống tự động tạo mật khẩu ban đầu. Bạn có thể đặt lại mật khẩu nếu cần. Tên credential phải theo định dạng **`[prefix].[credential name]`**.
:::
