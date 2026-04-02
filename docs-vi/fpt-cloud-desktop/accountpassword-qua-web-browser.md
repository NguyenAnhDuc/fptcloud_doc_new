---
id: "accountpassword-qua-web-browser"
title: "Account/Password qua Web browser"
description: "Hướng dẫn đăng nhập Account/Password qua Web browser, không cần cài đặt FCDClient"
sidebar_label: "Qua Web browser"
sidebar_position: 10
---

# Account/Password qua Web browser

Dành cho người dùng muốn truy cập máy ảo nhanh, không cần cài đặt FCDClient.

## 1. Truy cập vào trang chủ dịch vụ với URL phù hợp

Các định dạng URL hợp lệ:

- URL riêng của doanh nghiệp/tổ chức dùng cho FCD (quản trị viên khách hàng cung cấp)
- URL đã chứa authentication code hợp lệ (định dạng `code.domain`). Ví dụ: `pil783454741.pilotfcd.online`
- URL mặc định của dịch vụ

:::note
Thông tin URL này do quản trị viên khách hàng cung cấp.
:::

Truy cập đường link dịch vụ bằng trình duyệt web, chọn **Access through Web Browser**.

[![Màn hình chọn phương thức truy cập FPT Cloud Desktop](/img/migrated/image-1767859575680-f5ed3897.png)](/img/migrated/image-1767859575680-f5ed3897.png)

## 2. Đăng nhập vào Authenticator (Server) phù hợp

**Nếu bạn truy cập bằng URL đã chứa authentication code hợp lệ** (ví dụ: `pil783454741.pilotfcd.online`):

- Nhập tài khoản và mật khẩu tương ứng. Đăng nhập Authenticator (Server) thành công.

[![Màn hình nhập tài khoản/mật khẩu](/img/migrated/image-1767956660879-1796a9b2.png)](/img/migrated/image-1767956660879-1796a9b2.png)

---

**Nếu bạn truy cập từ URL mặc định của dịch vụ:**

1. Nhập Authentication Code (do quản trị viên khách hàng cung cấp). Ví dụ: `pil783454741`.

[![Nhập Authentication Code](/img/migrated/image-1767863050735-fee7cee6.png)](/img/migrated/image-1767863050735-fee7cee6.png)

2. Nhập tài khoản và mật khẩu tương ứng với Server.

[![Màn hình nhập tài khoản/mật khẩu sau khi nhập Authentication Code](/img/migrated/image-1767955827414-9e7265a7.png)](/img/migrated/image-1767955827414-9e7265a7.png)

:::note
**Nếu hệ thống hiển thị mã QR xác thực 2 lớp:**

1. Tải và cài đặt ứng dụng **Microsoft Authenticator** trên điện thoại tại App Store hoặc Google Play.

[![Màn hình hiển thị mã QR xác thực](/img/migrated/image-1767955899835-0408f00d.png)](/img/migrated/image-1767955899835-0408f00d.png)

2. Mở ứng dụng Authenticator và quét mã QR.

[![Quét mã QR bằng Microsoft Authenticator](/img/migrated/image-1767955938951-3aac0b75.png)](/img/migrated/image-1767955938951-3aac0b75.png)

3. Ứng dụng đồng bộ và hiển thị mã OTP. Nhập mã OTP và chọn **Submit**. Đăng nhập Authenticator (Server) thành công.
:::

## 3. Truy cập vào máy ảo

Tại màn hình danh sách máy ảo, chọn máy ảo bạn muốn truy cập.

[![Danh sách máy ảo trên Web browser](/img/migrated/image-1767860779789-05426af5.png)](/img/migrated/image-1767860779789-05426af5.png)

Nhập thông tin đăng nhập vào máy ảo nếu hệ thống yêu cầu. Truy cập máy ảo thành công.
