---
id: "quan-ly-ssl-certificates"
title: "Quản lý SSL certificate"
description: "Hướng dẫn tạo và quản lý SSL certificate trong WAF Dashboard bằng Let's Encrypt hoặc Custom."
sidebar_label: "Quản lý SSL certificate"
sidebar_position: 21
---

# Quản lý SSL certificate

SSL certificate (chứng chỉ TLS) là dạng khóa mã hóa cho phép website được mã hóa đến người dùng cuối.

## Tạo mới SSL certificate

1. Chọn **SSL Certificates** từ menu để mở màn hình quản lý.

   [![Màn hình quản lý SSL certificate](/img/migrated/Userguide-FPT-WAF-2022-38-1024x578-810c62cf.png)](/img/migrated/Userguide-FPT-WAF-2022-38-1024x578-810c62cf.png)

2. Chọn **Create SSL Certificates** để mở màn hình thêm mới. Có hai chế độ:

   **Chế độ 1: Let's Encrypt** — Chứng nhận CA mở, miễn phí và tự động, có sẵn trên FPT Cloud WAF.

   - **Domain Name**: Tên domain/website cấu hình SSL.
   - **Email Address for Let's Encrypt**: Email cho Let's Encrypt.
   - **Use a DNS Challenge** (tùy chọn): Kích hoạt nếu cần.
   - **I Agree to the Let's Encrypt Terms of Service**: Chọn để đồng ý điều khoản.

   [![Cấu hình Let's Encrypt](/img/migrated/Userguide-FPT-WAF-2022-39-1024x578-92f29cbe.png)](/img/migrated/Userguide-FPT-WAF-2022-39-1024x578-92f29cbe.png)

   **Chế độ 2: Custom** — Tự cấu hình certificate từ bên thứ ba. Quản trị viên tự chịu trách nhiệm quản lý thông tin.

   - **Certificate Key**: Tải lên file Certificate Key.
   - **Certificate**: Tải lên file Certificate.
   - **Intermediate Certificate**: Tải lên file Intermediate Certificate.

   [![Cấu hình Custom certificate](/img/migrated/Userguide-FPT-WAF-2022-40-1024x578-650e0090.png)](/img/migrated/Userguide-FPT-WAF-2022-40-1024x578-650e0090.png)

3. Chọn **Create SSL Certificate** để lưu và hoàn tất.

   [![Danh sách SSL certificate sau khi tạo](/img/migrated/Userguide-FPT-WAF-2022-41-1024x578-f0ea5431.png)](/img/migrated/Userguide-FPT-WAF-2022-41-1024x578-f0ea5431.png)
