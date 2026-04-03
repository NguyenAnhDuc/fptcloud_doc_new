---
id: "managing-consumers"
title: "Quản lý Consumers"
description: "Tạo, chỉnh sửa, xóa Consumer và quản lý đăng ký Product trên FPT API Management."
sidebar_label: "Quản lý Consumers"
sidebar_position: 9
pagination_next: null
---

# Quản lý Consumers

Sau khi API Provider public product lên site, client chưa thể sử dụng các API đó ngay. API Provider cần tạo thông tin Consumer và chỉ định Consumer đó subscribe một product đã được public. Khi đó client mới sử dụng được API.

## Tạo Consumer mới

**Bước 1:** Ở menu **API Manager** > chọn **Consumers** > **Create**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-26-1024x538-38542a55.png)](/img/migrated/Userguide-FPT-API-Management-26-1024x538-38542a55.png)

**Bước 2:** Nhập các thông tin theo yêu cầu:

- **Name**: Tên Consumer.
- **Site**: Chọn site Consumer có hiệu lực.
- **API Key**: Tích chọn xác thực bằng API key hay không.
- **Title**: Tiêu đề.
- **Password**: Mật khẩu nếu dùng Basic Authentication.
- **Confirm password**: Xác nhận lại mật khẩu.
- **Max per second**: Số lần client có thể gọi API trên giây.
- **Max per minute**: Số lần client có thể gọi API trên phút.
- **Max per hour**: Số lần client có thể gọi API trên giờ.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-27-1024x538-8505cbdc.png)](/img/migrated/Userguide-FPT-API-Management-27-1024x538-8505cbdc.png)

**Bước 3:** Chọn **OK** để tạo Consumer.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-28-1024x538-29ff8f20.png)](/img/migrated/Userguide-FPT-API-Management-28-1024x538-29ff8f20.png)

:::note
- Có thể khai báo và sử dụng song song cả API Key và Password.
- Phương thức xác thực của Consumer phải tương ứng với API cần sử dụng.
:::

## Subscribe product

**Bước 1:** Ở **Consumer Management** > chọn consumer > chọn **Product subscription**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)](/img/migrated/Userguide-FPT-API-Management-29-1024x538-821efca8.png)

**Bước 2:** Chọn **Subscribe product**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-30-1024x538-a7aedaa1.png)](/img/migrated/Userguide-FPT-API-Management-30-1024x538-a7aedaa1.png)

**Bước 3:** Chọn **Product**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-31-1024x538-85d308c1.png)](/img/migrated/Userguide-FPT-API-Management-31-1024x538-85d308c1.png)

:::note
Product phải ở trạng thái published thì consumer mới có thể subscribe.
:::

**Bước 4:** Chọn **OK** để lưu.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-32-1024x538-401df389.png)](/img/migrated/Userguide-FPT-API-Management-32-1024x538-401df389.png)

## Unsubscribe product

**Bước 1:** Ở **Consumer Management** > chọn consumer > chọn **Product subscription**.

**Bước 2:** Chọn **Unsubscribe product**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-54-1024x538-ae92854b.png)](/img/migrated/Userguide-FPT-API-Management-54-1024x538-ae92854b.png)

**Bước 3:** Chọn **OK** để lưu.

## Chỉnh sửa thông tin Consumer

**Bước 1:** Ở **Consumer Management** > chọn Consumer cần thay đổi > chọn **Edit**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-56-1024x538-cfc6b966.png)](/img/migrated/Userguide-FPT-API-Management-56-1024x538-cfc6b966.png)

**Bước 2:** Nhập các thông tin mới và chọn **OK**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-57-1024x538-7fe0874b.png)](/img/migrated/Userguide-FPT-API-Management-57-1024x538-7fe0874b.png)

## Lấy thông tin xác thực của Consumer

API Management hỗ trợ 2 phương thức xác thực: Basic Auth (User/Pass) và API Key.

### Lấy Username và Password (Basic Auth)

- **Username**: Cấu trúc `UsernameProvider.tênsite.usernameConsumer` (ví dụ: `demo123.sitedemo.demoacc`).

Hoặc lấy trực tiếp:

**Bước 1:** Ở **Consumer Management** > chọn Consumer > chọn **Edit**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-58-1024x590-c31b656b.png)](/img/migrated/Userguide-FPT-API-Management-58-1024x590-c31b656b.png)

**Bước 2:** Lấy Username ở trường **Basic Authen User**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-59-1024x590-134f47e5.png)](/img/migrated/Userguide-FPT-API-Management-59-1024x590-134f47e5.png)

- **Password**: Mật khẩu đã khai báo ở bước tạo consumer.

### Lấy thông tin API Key

**Bước 1:** Ở **Consumer Management** > chọn Consumer > chọn **Edit**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-60-1024x590-14edb59b.png)](/img/migrated/Userguide-FPT-API-Management-60-1024x590-14edb59b.png)

**Bước 2:** Lấy API Key ở trường **Api key**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-61-1024x590-bca437e1.png)](/img/migrated/Userguide-FPT-API-Management-61-1024x590-bca437e1.png)

## Xóa Consumer

Trước khi xóa, bạn cần đảm bảo Consumer không subscribe bất kỳ Product nào. Thực hiện Unsubscribe trước nếu cần.

**Bước 1:** Ở **Consumer Management** > chọn Consumer cần xóa > chọn **Remove**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-62-1024x538-8c38acd6.png)](/img/migrated/Userguide-FPT-API-Management-62-1024x538-8c38acd6.png)

**Bước 2:** Trong popup xác nhận, chọn **Yes** để tiến hành xóa.

:::note
Nếu gặp lỗi **Could not remove that consumer as there are still subscriptions of that consumer!**, hãy Unsubscribe toàn bộ Product trước khi thao tác.
:::
