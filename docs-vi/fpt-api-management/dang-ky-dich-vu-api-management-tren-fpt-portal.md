---
id: "dang-ky-dich-vu-api-management-tren-fpt-portal"
title: "Đăng ký dịch vụ API Management trên FPT Portal"
description: "Hướng dẫn đăng ký tài khoản API Provider và khởi tạo dịch vụ API Management trên FPT Portal."
sidebar_label: "Đăng ký dịch vụ API Management trên FPT Portal"
sidebar_position: 4
---

# Đăng ký dịch vụ API Management trên FPT Portal

:::note
**Đối tượng sử dụng:** API Provider.
:::

1. Trên menu của **FPT Portal**, chọn **Api Management** > **Create**.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-1-1024x538-e900f9a0.png)](/img/migrated/Userguide-FPT-API-Management-1-1024x538-e900f9a0.png)

2. Nhập thông tin **Username**, chọn **Plan** và **Pricing**.

[![Hình ảnh](/img/migrated/Tao-WS-a7ec19be.png)](/img/migrated/Tao-WS-a7ec19be.png)

Tham khảo cấu hình từng plan theo bảng sau:

| **Plan** | **Mô tả** | **Số lượng site** | **Số lượng API** | **Số lượng Product** |
| --- | --- | --- | --- | --- |
| **Pilot** | Dùng site và product mặc định, không thể tạo thêm site và product. | 1 | 2 | 1 |
| **Normal** | Dùng site và product mặc định, không thể tạo thêm site. | 1 | Không giới hạn | 1 |
| **Enterprise** | Có thể tự tạo site và product. | Không giới hạn | Không giới hạn | Không giới hạn |

| **Chức năng** | **Standard** | **Advanced** | **Premium** |
| --- | --- | --- | --- |
| **Transactions** | Max: 250/s | Max: 1000/s | Max: 5000/s |
| **Developer Portal** | No | Yes | Yes |
| **Custom Domain** | Yes | Yes | Yes |
| **Self-hosted Gateway** | No | Yes | Yes |
| **Message size** | 15KB | 25KB | 50KB |
| **Logging retention** | 1 tháng | 2 tháng | 3 tháng |
| **SLA** | 99.95% | 99.99% | 99.99% |
| **Giá hàng tháng (chưa thuế GTGT 10%)** | 6.200.000 VND | 15.000.000 VND | 35.900.000 VND |

3. Chọn **Create**. Hệ thống sẽ khởi tạo dịch vụ và thông báo tình trạng xử lý.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-3-1024x258-824a2884.png)](/img/migrated/Userguide-FPT-API-Management-3-1024x258-824a2884.png)

Sau khi khởi tạo thành công, bạn được tự động chuyển hướng sang trang quản trị **ApiManager Application** tại `console.apim.fptcloud.com/api-manager`.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-4-1024x538-56046d89.png)](/img/migrated/Userguide-FPT-API-Management-4-1024x538-56046d89.png)

Hoặc truy cập **FPT Portal** và chọn **Start** trên **API Management** để vào trang quản trị.

[![Hình ảnh](/img/migrated/Userguide-FPT-API-Management-5-1024x258-06e7b130.png)](/img/migrated/Userguide-FPT-API-Management-5-1024x258-06e7b130.png)
