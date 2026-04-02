---
id: "quan-ly-rest-apis"
title: "Quản lý REST APIs"
description: "Hướng dẫn khai báo, chỉnh sửa và xóa REST APIs trên FPT API Management."
sidebar_label: "Quản lý REST APIs"
sidebar_position: 6
---

# Quản lý REST APIs

REST APIs là thành phần cốt lõi của API Management — cho phép bạn đăng ký, quản lý và phân phối API tới các consumer.

## Khai báo REST APIs

**Bước 1:** Ở menu **Application** > **API Manager** > **Rest Apis** > chọn **Create**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-6-1024x538-b760ac40.png)](/img/migrated/Userguide-FPT-API-Management-6-1024x538-b760ac40.png)

**Bước 2:** Nhập các thông tin cần thiết:

- **Name**: Tên API.
- **Title**: Tiêu đề cho API.
- **Base path**: Đường dẫn để client gọi vào sau khi public API.
- **Use host group**: Kích hoạt mode HA hoặc không.
- **Target endpoint**: Endpoint của API hiện có, cần đưa ra cho consumer dùng.
- **Target Security**: Thông tin xác thực của API.
- **Security method**: Phương thức xác thực khi client sử dụng API. Hỗ trợ **Basic Authentication**, **OAuth** và **Api Key**.
- **Enable doc**: Tạo doc cho API.
- **Enable validation schema**: Thêm validation cho body request.

:::warning
**Security method** sẽ không thể thay đổi sau khi tạo. Hãy cẩn thận khi khai báo thông tin này.
:::

[![Hình ảnh](/img/migrated/472080589_951032306478361_13273467091314-3c62edec.png)](/img/migrated/472080589_951032306478361_13273467091314-3c62edec.png)

**Bước 3:** Chọn **OK** để khởi tạo REST APIs.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-8-1024x538-c2bb67f9.png)](/img/migrated/Userguide-FPT-API-Management-8-1024x538-c2bb67f9.png)

:::note
Nếu nút **Create** bị disable, hãy kiểm tra lại gói dịch vụ API Management. Với gói **Pilot**, chỉ có thể khai báo tối đa 2 API.
:::

Nếu bạn có nhiều API cần khai báo, hãy sử dụng tính năng import hàng loạt:

1. Ở menu **API Manager** > chọn **Utility** > **Import API**.
2. Nhập dữ liệu các API vào ô JSON text theo format:

```json
[
  {
    "name": "",
    "title": "",
    "base_path": "",
    "target_endpoint": "",
    "security_method": ""
  }
]
```

3. Chọn **Parse** > chọn **Import**.

## Chỉnh sửa REST APIs

**Bước 1:** Ở **Rest APIs Management** > chọn REST API cần thay đổi > chọn **Edit**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-38-1024x538-b5f27198.png)](/img/migrated/Userguide-FPT-API-Management-38-1024x538-b5f27198.png)

**Bước 2:** Nhập các thông tin mới và chọn **OK**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-39-1024x538-b96225dd.png)](/img/migrated/Userguide-FPT-API-Management-39-1024x538-b96225dd.png)

## Xóa REST APIs

Trước khi xóa, bạn cần đảm bảo REST API không gắn vào bất kỳ Product nào.

**Bước 1:** Ở **Rest APIs Management** > chọn REST API cần xóa > chọn **Remove Api**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-40-1024x538-a6db032e.png)](/img/migrated/Userguide-FPT-API-Management-40-1024x538-a6db032e.png)

**Bước 2:** Trong popup xác nhận, chọn **Yes** để tiến hành xóa.

## Transformer

Nếu bạn muốn thêm hoặc sửa field với giá trị xác định trong request hoặc response, hãy sử dụng tính năng Transformer.

1. Ở **Rest APIs Management** > chọn REST API > **Edit** > tab **Advance** > **Transformations**.
2. Tích chọn **Request Transformer** hoặc **Response Transformer**, click **Raw view** và nhập thông tin cần thay đổi.

## Security (Cross-Origin Resource Sharing)

**Bước 1:** Ở menu **Application** > **API Manager** > **Rest Apis** > chọn API > **Edit**.

**Bước 2:** Chọn tab **Advance** > tab **Security** > tích vào ô **Use CORS**.

**Bước 3:** Nhập thông tin:

- **Access-Control-Allow-Origin**: Nhập IP, domain cho phép truy cập API. Nếu để trống, tất cả domain đều được phép truy cập.
