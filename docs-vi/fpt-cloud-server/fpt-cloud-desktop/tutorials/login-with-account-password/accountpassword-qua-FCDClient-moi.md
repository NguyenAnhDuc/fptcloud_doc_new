---
id: "accountpassword-qua-FCDClient-moi"
title: "Account/Password qua FCDClient mới"
description: "Hướng dẫn đăng nhập Account/Password qua FCDClient mới - phương thức khuyên dùng"
sidebar_label: "Qua FCDClient mới (khuyên dùng)"
sidebar_position: 2
---

# Account/Password qua FCDClient mới

Dành cho trải nghiệm ổn định và đầy đủ tính năng nhất, cho phép thao tác trực tiếp trên ứng dụng.

:::note
Bạn chỉ cần thực hiện Bước 1 (cài đặt) một lần. Từ lần tiếp theo, bạn có thể truy cập thẳng từ ứng dụng FCDClient.
:::

## Bước 1: Cài đặt FCDClient mới

### 1. Truy cập vào trang chủ dịch vụ với URL phù hợp

Các định dạng URL hợp lệ:

- URL riêng của doanh nghiệp/tổ chức dùng cho FCD (quản trị viên khách hàng cung cấp)
- URL đã chứa authentication code hợp lệ (định dạng `code.domain`). Ví dụ: `pil783454741.pilotfcd.online`
- URL mặc định của dịch vụ

:::note
Thông tin URL này do quản trị viên khách hàng cung cấp.
:::

Truy cập đường link dịch vụ bằng trình duyệt web, chọn **Access through FPT Cloud Desktop Client**.

[![Màn hình chọn phương thức truy cập FPT Cloud Desktop](/img/migrated/image-1767859575680-f5ed3897.png)](/img/migrated/image-1767859575680-f5ed3897.png)

### 2. Tải xuống, cài đặt và mở ứng dụng FCDClient

Hệ thống sẽ tự động tải xuống bản FCDClient mới nhất tương thích với hệ điều hành của bạn.

Nếu trình duyệt hiển thị cảnh báo khi tải xuống:

[![Cảnh báo tải xuống trên trình duyệt](/img/migrated/image-1767859694792-be1aa0bc.png)](/img/migrated/image-1767859694792-be1aa0bc.png)

Chọn dấu ba chấm > **Keep** > **Keep anyway**.

[![Xác nhận giữ file tải xuống](/img/migrated/image-1767859804851-972a2244.png)](/img/migrated/image-1767859804851-972a2244.png)

Sau khi tải xuống hoàn thành, chọn **Open file** để cài đặt ứng dụng vào thiết bị.

[![Mở file cài đặt FCDClient](/img/migrated/image-1767859882851-7f4cfd99.png)](/img/migrated/image-1767859882851-7f4cfd99.png)

**Với Windows:** Tại popup "Windows protected your PC", chọn **More info** rồi chọn **Run anyway**.

**Với macOS:**

1. Kéo file cài đặt vào thư mục **Applications**
2. Mở file cài đặt, chọn **Open** để xác nhận
3. Đánh dấu chọn **Don't warn me when opening applications on this disk image**

[![Cài đặt FCDClient trên macOS](/img/migrated/image-1767859982299-d48afcb4.png)](/img/migrated/image-1767859982299-d48afcb4.png)

Cài đặt FCDClient thành công. Sau khi cài đặt xong, mở ứng dụng FCDClient.

:::note
**Với macOS:** Bạn cần cài đặt thêm ứng dụng Microsoft Windows App tại [Mac App Store](https://apps.apple.com/us/app/windows-app/id1295203466?mt=12).

[![Cài đặt Microsoft Windows App trên macOS](/img/migrated/image-1767860277298-7ec9d9f6.png)](/img/migrated/image-1767860277298-7ec9d9f6.png)

Nếu thiết bị hiển thị cảnh báo về FCDClient, truy cập **Settings > Privacy & Security > Open Anyway** với FCDClient.
:::

## Bước 2: Truy cập máy ảo qua FCDClient mới

### 3. Mở ứng dụng FCDClient và đăng nhập vào Authenticator (Server)

- **Nếu FCDClient đã có sẵn thông tin Server** (do đã điền trước đó, hoặc tải xuống từ URL chứa authentication code hợp lệ): Chọn **Connect Server** và nhập thông tin tài khoản theo hướng dẫn ở bước 4.

[![FCDClient có sẵn thông tin Server](/img/migrated/image-1767952725970-cec7271f.png)](/img/migrated/image-1767952725970-cec7271f.png)

- **Nếu FCDClient chưa có thông tin Server:** Chọn **New Server** > Nhập URL hoặc Domain hợp lệ (do quản trị viên khách hàng cung cấp).

  Ví dụ: Nhập thẳng URL `pil783454741.pilotfcd.online`, **hoặc** nhập Domain `pilotfcd.online` trước, sau đó nhập Authentication code `pil783454741`.

[![Thêm Server mới trong FCDClient](/img/migrated/image-1767860539108-fc0555bc.png)](/img/migrated/image-1767860539108-fc0555bc.png)

### 4. Nhập thông tin tài khoản và mật khẩu

Nhập tài khoản và mật khẩu tương ứng với Server.

[![Màn hình nhập tài khoản/mật khẩu](/img/migrated/image-1767955827414-9e7265a7.png)](/img/migrated/image-1767955827414-9e7265a7.png)

:::note
**Nếu hệ thống hiển thị mã QR xác thực 2 lớp:**

1. Tải và cài đặt ứng dụng **Microsoft Authenticator** trên điện thoại tại App Store hoặc Google Play.

[![Màn hình hiển thị mã QR xác thực](/img/migrated/image-1767955899835-0408f00d.png)](/img/migrated/image-1767955899835-0408f00d.png)

2. Mở ứng dụng Authenticator và quét mã QR.

[![Quét mã QR bằng Microsoft Authenticator](/img/migrated/image-1767955938951-3aac0b75.png)](/img/migrated/image-1767955938951-3aac0b75.png)

3. Ứng dụng đồng bộ và hiển thị mã OTP. Nhập mã OTP và chọn **Submit**. Đăng nhập Authenticator (Server) thành công.
:::

### 5. Truy cập vào máy ảo

Tại màn hình danh sách máy ảo, chọn máy ảo bạn muốn truy cập.

[![Danh sách máy ảo trong FCDClient](/img/migrated/image-1767860779789-05426af5.png)](/img/migrated/image-1767860779789-05426af5.png)

Nhập thông tin đăng nhập vào máy ảo nếu hệ thống yêu cầu. Truy cập máy ảo thành công.

---

## Các tính năng khác trên FCDClient mới

- **Auto-connect Server:** Cho phép truy cập thẳng vào Authenticator khi mở ứng dụng FCDClient (chỉ áp dụng khi vào thẳng ứng dụng, chưa hỗ trợ khi vào qua **Access through FCDClient** trên trang chủ)
- **Settings:** Cho phép xem thông tin FCDClient đã cài đặt
- **New Server:** Cho phép thêm thông tin Authenticator Server mới
