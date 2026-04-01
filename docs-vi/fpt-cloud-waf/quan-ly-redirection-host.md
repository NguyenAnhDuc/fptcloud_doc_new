---
id: "quan-ly-redirection-host"
title: "Quản lý redirection host"
description: "Hướng dẫn tạo và quản lý redirection host để chuyển hướng URL trong WAF Dashboard."
sidebar_label: "Quản lý redirection host"
sidebar_position: 17
---

# Quản lý redirection host

**Redirection host** là tính năng chuyển hướng một URL đến một trang web hoặc URL khác và hiển thị nội dung của địa chỉ đích.

## Tạo mới redirection host

1. Chọn **Hosts** > **Redirection** từ menu để mở màn hình quản lý. Chọn **Create Redirection**.

   [![Tạo redirection host — bước 1](/img/migrated/Userguide-FPT-WAF-2022-26-1024x515-a7c1ce4f.png)](/img/migrated/Userguide-FPT-WAF-2022-26-1024x515-a7c1ce4f.png)

2. Nhập thông tin redirection host:

   - **Domain Names**: Tên domain/website được thêm vào. Domain name không được trùng với domain name của các proxy host đã tạo.
   - **Forward Scheme**: Phương thức cho domain/website (auto/http/https).
   - **Forward Domain**: Domain/website đích chuyển hướng đến.
   - **HTTP Code**: Tùy chọn điều hướng trang website.

   Tính năng mở rộng tùy theo nhu cầu:
   - **Preserve Path**
   - **Block Common Exploits**
   - **SSL Certificate**: Chọn SSL certificate tương ứng.

   [![Nhập thông tin redirection host](/img/migrated/Userguide-FPT-WAF-2022-27-1024x515-98ae9d17.png)](/img/migrated/Userguide-FPT-WAF-2022-27-1024x515-98ae9d17.png)

3. Chọn **Save** để lưu.

   [![Chi tiết redirection host sau khi tạo](/img/migrated/Userguide-FPT-WAF-2022-28-1024x517-460fec80.png)](/img/migrated/Userguide-FPT-WAF-2022-28-1024x517-460fec80.png)

## Các thao tác khác

| Thao tác | Mô tả |
|---|---|
| **Toggle** | Bật/tắt redirection host (active/inactive) |
| **Edit** | Chỉnh sửa thông tin redirection host |
| **View** | Xem chi tiết redirection host |
| **Delete** | Xóa redirection host |
