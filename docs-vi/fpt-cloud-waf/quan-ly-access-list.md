---
id: "manage-access-list"
title: "Quản lý access list"
description: "Hướng dẫn tạo và quản lý access list để kiểm soát truy cập cho proxy host."
sidebar_label: "Quản lý access list"
sidebar_position: 20
---

# Quản lý access list

**Access list** cung cấp chức năng whitelist/blacklist cho các địa chỉ IP cụ thể, kết hợp với xác thực HTTP Basic Authentication cho proxy host. Quản trị viên có thể cấu hình nhiều quy tắc, gán user/password cho một access list và áp dụng cho các proxy host.

Tính năng này hữu ích cho các dịch vụ web được chuyển tiếp mà không có cơ chế xác thực tích hợp sẵn, hoặc khi cần bảo vệ khỏi truy cập từ các IP không xác định.

## Tạo mới access list

1. Chọn **Access List** từ menu để mở màn hình quản lý.

   [![Màn hình quản lý access list](/img/migrated/Userguide-FPT-WAF-2022-34-1024x499-a6882854.png)](/img/migrated/Userguide-FPT-WAF-2022-34-1024x499-a6882854.png)

2. Chọn **Create Access List** để mở màn hình thêm mới và nhập:

   - **Name**: Tên access list.
   - **Satisfy Any**
   - **Pass Auth to Host**

3. Chọn **Create Access List** để tạo và mở màn hình chi tiết.

## Cấu hình nâng cao

### Thêm xác thực HTTP Basic Auth

1. Chọn **Create Basic Auth** để thêm tài khoản xác thực:

   - **Username**: Tên xác thực.
   - **Password**: Mật khẩu xác thực.

   Chọn **Create Basic Auth** hoặc **Create & Add Another** để thêm nhiều tài khoản.

   [![Cấu hình Basic Auth](/img/migrated/Userguide-FPT-WAF-2022-35-1024x517-4d36978c.png)](/img/migrated/Userguide-FPT-WAF-2022-35-1024x517-4d36978c.png)

### Thêm whitelist/blacklist IP

2. Chọn **Create Whitelist/Blacklist** để thêm địa chỉ IP hoặc subnet:

   - **Allow**: IP hoặc subnet được phép truy cập.
   - **Deny**: IP hoặc subnet bị từ chối truy cập.
   - **IP / Subnet**: Nhập địa chỉ IP hoặc subnet.

   :::note
   Các quy tắc allow/deny được áp dụng theo thứ tự định nghĩa.
   :::

   [![Cấu hình whitelist/blacklist](/img/migrated/Userguide-FPT-WAF-2022-36-1024x519-0778cdff.png)](/img/migrated/Userguide-FPT-WAF-2022-36-1024x519-0778cdff.png)

### Gán proxy host cho access list

3. Chọn **Create Proxy** để thêm proxy host áp dụng access list vừa tạo. Tham khảo [Tạo mới proxy host](tao-moi-proxy-host.md).

   [![Gán proxy host cho access list](/img/migrated/Userguide-FPT-WAF-2022-37-1024x516-993c3cc6.png)](/img/migrated/Userguide-FPT-WAF-2022-37-1024x516-993c3cc6.png)

## Các thao tác khác

| Thao tác | Mô tả |
|---|---|
| **Edit** | Chỉnh sửa thông tin access list |
| **View** | Xem chi tiết access list |
| **Delete** | Xóa access list |
