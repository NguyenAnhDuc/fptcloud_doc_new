---
id: "quan-ly-redirection-host"
title: "Quản lý Redirection Host"
description: "**Redirection Hosts** là tính năng chuyển hướng trang web hoặc thay đổi một URL đến một trang web, một URL khác và hiển "
sidebar_label: "Quản lý Redirection Host"
sidebar_position: 17
---

# Quan Ly Redirection Host

**Redirection Hosts** là tính năng chuyển hướng trang web hoặc thay đổi một URL đến một trang web, một URL khác và hiển thị nội dung của địa chỉ chuyển đến.
Để cấu hình/thêm mới một **Redirection Host** thực hiện các bước sau đây:
**Bước 1:** Chọn **Hosts** > R**edirection** từ menu để mở màn hình quản lý **Redirection Host**. Chọn **Create Redirection**.
[![Userguide FPT WAF 2022 26](/img/migrated/Userguide-FPT-WAF-2022-26-1024x515-a7c1ce4f.png)](/img/migrated/Userguide-FPT-WAF-2022-26-1024x515-a7c1ce4f.png)
**Bước 2:** Nhập thông tin **Redirection Host** theo hướng dẫn sau:
  * **Domain Names:** điền tên domain/website được thêm vào. Domain name tại Redirection Host không được trùng với Domain name của các Proxy Host đã tạo.
  * **Forward Scheme:** chọn phương thức cho domain/website (auto/http/https).
  * **Forward Domain:** điền domain/website chuyển hướng.
  * **HTTP Code:** Lựa chọn các option điều hướng trang website.

Một số tính năng mở rộng: tùy thuộc vào nhu cầu sử dụng mà quản trị viên tùy chọn các tính năng mở rộng như:
  * **Preserve Path**.
  * **Block Common Exploits**.
  * **SSL Certificate** : Chọn SSL Certificate tương ứng cho domain/website.[![Userguide FPT WAF 2022 27](/img/migrated/Userguide-FPT-WAF-2022-27-1024x515-98ae9d17.png)](/img/migrated/Userguide-FPT-WAF-2022-27-1024x515-98ae9d17.png)

**Bước 3:** Chọn **Save** để lưu. Màn hình xem chi tiết **Redirection Host** hiển thị như sau:
[![Userguide FPT WAF 2022 28](/img/migrated/Userguide-FPT-WAF-2022-28-1024x517-460fec80.png)](/img/migrated/Userguide-FPT-WAF-2022-28-1024x517-460fec80.png)
**Các chức năng khác:**
**Toggle** : disable/enable Redirection Host, tương ứng với trạng thái active/inactive.
**Edit** : Sửa thông tin Redirection Host.
**View** : Xem chi tiết Redirection Host
**Delete** : Loại bỏ Redirection Host.