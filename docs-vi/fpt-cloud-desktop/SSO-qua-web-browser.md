---
id: "SSO-qua-web-browser"
title: "SSO qua Web browser"
description: "Hướng dẫn đăng nhập SSO qua Web browser, không cần cài đặt FCDClient"
sidebar_label: "Qua Web browser"
sidebar_position: 6
---

# SSO qua Web browser

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

- Đăng nhập bằng tài khoản SSO tương ứng (ví dụ: tài khoản Microsoft), nhập OTP tương ứng theo SSO. Đăng nhập Authenticator (Server) thành công.

[![Màn hình đăng nhập SSO qua Web browser](/img/migrated/image-1767953411678-b06915c9.png)](/img/migrated/image-1767953411678-b06915c9.png)

---

**Nếu bạn truy cập từ URL mặc định của dịch vụ:**

1. Nhập Authentication Code (do quản trị viên khách hàng cung cấp). Ví dụ: `pil783454741`.

[![Nhập Authentication Code](/img/migrated/image-1768028663933-f7f3275f.png)](/img/migrated/image-1768028663933-f7f3275f.png)

2. Đăng nhập bằng tài khoản SSO (ví dụ: tài khoản Microsoft), nhập OTP tương ứng theo SSO. Đăng nhập Authenticator (Server) thành công.

[![Màn hình đăng nhập SSO sau khi nhập Authentication Code](/img/migrated/image-1768028737250-ddc30cb9.png)](/img/migrated/image-1768028737250-ddc30cb9.png)

## 3. Truy cập vào máy ảo

Tại màn hình danh sách máy ảo, chọn máy ảo bạn muốn truy cập.

[![Danh sách máy ảo trên Web browser](/img/migrated/image-1767860779789-05426af5.png)](/img/migrated/image-1767860779789-05426af5.png)

Nhập thông tin đăng nhập vào máy ảo nếu hệ thống yêu cầu. Truy cập máy ảo thành công.
