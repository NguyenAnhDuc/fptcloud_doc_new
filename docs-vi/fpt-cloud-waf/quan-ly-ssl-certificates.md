---
id: "quan-ly-ssl-certificates"
title: "Quản lý SSL Certificates"
description: "Chứng chỉ SSL (được gọi chính xác là Chứng chỉ TLS) là một dạng khóa mã hóa cho phép trang web của bạn được mã hóa cho n"
sidebar_label: "Quản lý SSL Certificates"
sidebar_position: 21
---

# Quan Ly Ssl Certificates

Chứng chỉ SSL (được gọi chính xác là Chứng chỉ TLS) là một dạng khóa mã hóa cho phép trang web của bạn được mã hóa cho người dùng cuối.
Để cấu hình/thêm mới một **SSL Certificates** , bạn thực hiện các bước sau đây:
**Bước 1:** Chọn **SSL Certificates** tại menu để mở màn hình quản lý **SSL Certificates**
[![Userguide FPT WAF 2022 38](/img/migrated/Userguide-FPT-WAF-2022-38-1024x578-810c62cf.png)](/img/migrated/Userguide-FPT-WAF-2022-38-1024x578-810c62cf.png)
**Bước 2:** Chọn **Create SSL Certificates** để mở màn hình thêm mới, ở đây sẽ có hai chế độ cài đặt:
  1. **Let’s Encrypt** là chứng nhận (CA) mở, miễn phí và tự động, có sẵn trên FPT Cloud WAF.
  2. **Custom** : quản trị viên tự cấu hình Certificates theo nhu cầu. Certificates của bên thứ 3.

Nếu chọn dùng Let’s Encrypt, bạn cấu hình như sau:
  * **Domain Name:** điền tên domain/website được cấu hình SSL
  * **Email Address for Let’s Encrypt:** Điền email cho Let’s Encrypt.
  * **Use a DNS Challenge** – Tùy chọn mở rộng: tùy thuộc vào nhu cầu sử dụng mà quản trị viên chọn thêm tùy chọn “Use a DNS Challenge”
  * **I Agree to the Let’s Encrypt Terms of Service** : Click chọn để đồng ý sử dụng chứng nhận (CA) Let’s Encrypt.

[![Userguide FPT WAF 2022 39](/img/migrated/Userguide-FPT-WAF-2022-39-1024x578-92f29cbe.png)](/img/migrated/Userguide-FPT-WAF-2022-39-1024x578-92f29cbe.png)
Nếu chọn chế độ Custom Import, bạn cần nhập các thông tin Certificates của bên thứ 3 và tự chịu trách nhiệm quản lý các thông tin này. Để import **Custom Certificate** , bạn nhập các thông tin sau:
  * **Certificate Key** : Tải lên file **Certificate Key.**
  * **Certificate** : Tải lên file
  * **Intermediate Certificate:** Tải lên file **Intermediate Certificate.**

[![Userguide FPT WAF 2022 40](/img/migrated/Userguide-FPT-WAF-2022-40-1024x578-650e0090.png)](/img/migrated/Userguide-FPT-WAF-2022-40-1024x578-650e0090.png)
**Bước 3:** Chọn **Create SSL Certificate** để lưu và hoàn tất cấu hình/thêm mới SSL Certificate.
[![Userguide FPT WAF 2022 41](/img/migrated/Userguide-FPT-WAF-2022-41-1024x578-f0ea5431.png)](/img/migrated/Userguide-FPT-WAF-2022-41-1024x578-f0ea5431.png)