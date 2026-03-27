---
id: "quan-ly-access-list"
title: "Quản lý Access List"
description: "Access Lists cung cấp danh sách đen hoặc danh sách trắng (Whitelist/Blacklist) các địa chỉ IP máy trạm cụ thể, cùng với "
sidebar_label: "Quản lý Access List"
sidebar_position: 20
---

# Quan Ly Access List

Access Lists cung cấp danh sách đen hoặc danh sách trắng (Whitelist/Blacklist) các địa chỉ IP máy trạm cụ thể, cùng với xác thực cho Proxy Hosts thông qua xác thực HTTP cơ bản.
Quản trị viên có thể cấu hình nhiều quy tắc (rules), gán user/password cho một danh sách truy cập và sau đó áp dụng cho Proxy Hosts.
Điều này hữu ích cho các dịch vụ web được chuyển tiếp, không có cơ chế xác thực được tích hợp sẵn hoặc quản trị muốn bảo vệ khỏi sự truy cập của các máy trạm không xác định.
Để cấu hình/thêm mới một Access List thực hiện theo các bước sau đây :
**Bước 1:** Chọn **Accest List** tại menu để mở màn hình quản lý Access List.
[![Userguide FPT WAF 2022 34](/img/migrated/Userguide-FPT-WAF-2022-34-1024x499-a6882854.png)](/img/migrated/Userguide-FPT-WAF-2022-34-1024x499-a6882854.png)
**Bước 2:** Chọn **Create Access List** để mở màn hình thêm mới và nhập thông tin như sau:
  * **Name:** Nhập tên cho Access List
  * **Satisfy Any**
  * **Pass Auth to Host**

**Bước 3:** Nhấn **Create Access List** để thêm mới list đã nhập thông tin và mở màn hình xem chi tiết.
## Cấu hình nâng cao cho Access List:
**Bước 1:** Nhấn **Create Basic Auth** để cấu hình thêm mới tài khoản xác thực cơ bản HTTP Nginx.
  * **Username:** Nhập tên xác thực
  * **Password:** Nhập password xác thực.

Chọn **Create Basic Auth** hoặc **Create & Add Another** để thêm mới authentication khác nếu có.
**[![Userguide FPT WAF 2022 35](/img/migrated/Userguide-FPT-WAF-2022-35-1024x517-4d36978c.png)](/img/migrated/Userguide-FPT-WAF-2022-35-1024x517-4d36978c.png)**
**Bước 2.** Chọn **Create Whitelist/Blacklist** để thêm mới địa chỉ IP hoặc subnet cho phép truy cập/từ chối truy cập
  * **Check box chọn allow hoặc deny tương ứng với các IP hoặc subnet tương ứng.**
    * **Allow:** với IP hoặc Subnet được phép truy cập.
    * **Deny:** với IP hoặc Subnet bị từ chối truy cập.
  * **IP / Subnet: Nhập địa chỉ IP hoặc subnet**

Nhấn Create Whitelist/Blacklist để thêm địa chỉ IP được cấu hình truy cập cho phép hoặc từ chối (allow/deny).
Lưu ý: Cấu hình các truy cập cho phép và từ chối (allow/deny) sẽ được áp dụng theo thứ tự mà chúng được xác định.
[![Userguide FPT WAF 2022 36](/img/migrated/Userguide-FPT-WAF-2022-36-1024x519-0778cdff.png)](/img/migrated/Userguide-FPT-WAF-2022-36-1024x519-0778cdff.png)
**Bước 3.** Nhấn **Create Proxy** để thêm mới proxy host áp dụng cho Access List vừa tạo. Tham khảo cách thêm mới Proxy Host tại trang Quản lý Proxy Host
[![Userguide FPT WAF 2022 37](/img/migrated/Userguide-FPT-WAF-2022-37-1024x516-993c3cc6.png)](/img/migrated/Userguide-FPT-WAF-2022-37-1024x516-993c3cc6.png)
**Các chức năng khác:**
**Edit:** Sửa thông tin Access List.
**View:** Xem chi tiết Access List.
**Delete:** Loại bỏ Access List.