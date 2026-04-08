---
id: "detailed-configuration-information"
title: "Cấu hình chi tiết"
description: "Thông tin cấu hình chi tiết của deployment Model Serving."
sidebar_label: "Cấu hình chi tiết"
sidebar_position: "9"
---

# Cấu hình chi tiết

**1. Thông tin cấu hình Model**

Truy cập AI Platform → Model Serving → Deployment → Tên Deployment → Model Settings

[![Alt text](/img/migrated/12-6b7d693a.png)](/img/migrated/12-6b7d693a.png)

Trong phần Model Settings, người dùng có thể sửa đổi các cấu hình của Image Information như sau:

| **Thông tin** | **Mô tả** | **Hành động có sẵn** |
| --- | --- | --- |
| Model Name | Mô hình AI cần triển khai | Chỉnh sửa để thay đổi thông tin |
| Model Version | Phiên bản của mô hình AI cần triển khai | Chỉnh sửa để thay đổi thông tin |
| Model Token | Token xác thực với Model Registry để triển khai mô hình | Chỉnh sửa để thay đổi thông tin |
| Model URL | Đường dẫn đến vị trí lưu trữ mô hình (Model Registry) | Chỉnh sửa để thay đổi thông tin |
| Image Registry | Liên kết đến kho lưu trữ container image | Chỉnh sửa để thay đổi thông tin |
| Image Tag | Phiên bản của container image | Chỉnh sửa để thay đổi thông tin |
| Username | Tài khoản người dùng để xác thực với Private Registry | Chỉnh sửa để thay đổi thông tin |
| Password | Mật khẩu người dùng để xác thực với Private Registry | Chỉnh sửa để thay đổi thông tin |

**Lưu ý:**

| **Chủ đề** | **Mô tả** |
| --- | --- |
| Image Tag | Khi Image Tag được thay đổi, Deployment sẽ tạo lại các instance với phiên bản mới được khai báo. Tùy thuộc vào chiến lược Deployment, việc tạo lại có thể hoặc không có downtime. **Recreate:** Instance được tạo lại với downtime trong quá trình khởi tạo Image Tag mới. **Rolling:** Các instance được thay thế dần dần, không có downtime, nhưng cần một lượng tài nguyên dự phòng nhất định. |
| Model Version | Tương tự Image Tag, khi Model Version được thay đổi, Deployment sẽ tạo lại các instance với phiên bản mới được khai báo. |
