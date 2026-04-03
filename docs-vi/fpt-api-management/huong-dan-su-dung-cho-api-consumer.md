---
id: "consumer-api-usage-guide"
title: "Hướng dẫn sử dụng cho API Consumer"
description: "Hướng dẫn API Consumer nhận thông tin xác thực và sử dụng API thông qua Postman."
sidebar_label: "Hướng dẫn sử dụng cho API Consumer"
sidebar_position: 11
pagination_next: null
---

# Hướng dẫn sử dụng cho API Consumer

## Nhận thông tin từ API Provider

Để bắt đầu sử dụng, bạn cần có các thông tin sau:

- **Endpoint của API**: Được cung cấp theo hướng dẫn lấy thông tin Endpoint của Product.
- **Authorization**: Phương thức xác thực của Consumer. Hỗ trợ **Basic** hoặc **API Key**.
  - Nếu Authorization là **Basic**:
    - **Username**: Cấu trúc `UsernameProvider.tênsite.usernameConsumer` (ví dụ: `demo123.sitedemo.demoacc`). Hoặc lấy theo hướng dẫn lấy thông tin xác thực của Consumer.
    - **Password**: Mật khẩu đã khai báo ở bước tạo consumer.
  - Nếu Authorization là **API Key**:
    - **Key**: `api-key`
    - **Value**: Lấy theo hướng dẫn lấy thông tin xác thực của Consumer.
    - **Add to**: Header.
- **Site được ủy quyền**.

## Sử dụng Postman

Khi đã có đủ thông tin, bạn có thể sử dụng Postman để gọi API từ API Management.

**Bước 1:** Nhập endpoint và chọn method gọi API.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-33-1024x640-6851d77f.png)](/img/migrated/Userguide-FPT-API-Management-33-1024x640-6851d77f.png)

**Bước 2:** Nhập thông tin **Authorization**:

- Chọn **Basic Auth** và nhập **Username**/**Password** nếu Authorization là Basic.
- Chọn **API Key** và nhập key nếu Authorization là API Key.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-34-1024x640-c6cc1291.png)](/img/migrated/Userguide-FPT-API-Management-34-1024x640-c6cc1291.png)

**Bước 3:** Nhập request body và các param khác, sau đó chọn **Send**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-35-1024x640-fc9f24a1.png)](/img/migrated/Userguide-FPT-API-Management-35-1024x640-fc9f24a1.png)

**Bước 4:** Nhận kết quả trả về:

- **Status 2xx**: Gọi API thành công.
- **Status 4xx–5xx**: Lỗi — liên hệ FCI để được hỗ trợ.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-36-1024x640-9e719493.png)](/img/migrated/Userguide-FPT-API-Management-36-1024x640-9e719493.png)

:::tip
Checklist kiểm tra lỗi theo thứ tự:
1. Kiểm tra username, password.
2. Yêu cầu API Provider kiểm tra quyền của client với API.
3. Kiểm tra API đã khai báo đúng chưa, param hoặc header có bị thiếu không.
4. Kiểm tra API có bị lỗi không.
5. Yêu cầu FCI kiểm tra gateway.
:::
