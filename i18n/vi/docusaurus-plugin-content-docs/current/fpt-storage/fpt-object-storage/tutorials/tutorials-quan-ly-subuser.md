---
id: "tutorials-quan-ly-subuser"
title: "Quản Lý SubUser Trên FPT Object Storage"
description: "**SubUser** là người dùng con được tạo trong FPT Object Storage với quyền truy cập giới hạn, giúp tăng cường bảo mật và "
sidebar_label: "Quản Lý SubUser Trên..."
sidebar_position: 3
---

# Quản Lý SubUser Trên FPT Object Storage

**SubUser** là người dùng con được tạo trong FPT Object Storage với quyền truy cập giới hạn, giúp tăng cường bảo mật và kiểm soát truy cập dữ liệu hiệu quả hơn.
Tuỳ theo nhu cầu sử dụng, quản trị viên có thể gán cho SubUser các **role** với mức độ truy cập khác nhau.

### Các vai trò được hỗ trợ:
  * **None** : Không có quyền truy cập.
  * **Read** : Chỉ được đọc dữ liệu trong bucket.
  * **Write** : Chỉ được ghi dữ liệu vào bucket.
  * **Read - Write** : Có quyền đọc và ghi dữ liệu.
  * **Full** : Toàn quyền, bao gồm cả thao tác cấu hình bucket.

Việc sử dụng SubUser giúp phân quyền rõ ràng, hạn chế rủi ro khi cần chia sẻ quyền truy cập với nhiều người dùng hoặc ứng dụng.
* * *

## Tạo SubUser Mới
**Bước 1:** Truy cập menu **Object Storage Management** , chọn tab **SubUser** , sau đó chọn **Region**.
**Bước 2:** Nhấn **Create SubUser**.
**Bước 3:** Nhập thông tin cần thiết:
  * **Name** : Tên hiển thị dễ nhớ.
  * **Access level** : Chọn vai trò phù hợp.

**Bước 4:** Nhấn **Create** để hoàn tất quá trình tạo SubUser.
* * *

## Chỉnh Sửa Role Của SubUser
**Bước 1:** Trong danh sách SubUser, chọn **Detail** tại SubUser cần chỉnh sửa.
**Bước 2:** Ở trường **Access level** , chọn role mới phù hợp.
**Bước 3:** Nhấn **Save** để cập nhật.
* * *

## Quản Lý SubUser Access Key
Mỗi SubUser có thể có tối đa **2 cặp Access Key** dùng để xác thực khi truy cập bucket qua SDK, API hoặc S3 Client.

### A. Tạo SubUser Access Key
**Bước 1:** Vào **Detail** của SubUser cần tạo key.
**Bước 2:** Nhấn **Generate Key**.
**Bước 3:** Hệ thống sẽ tạo một cặp **Access Key** và **Secret Key**.
**Bước 4:** **Lưu trữ ngay** thông tin key ở nơi an toàn, sau đó nhấn **Confirm access key** để xác nhận.
> 🔐 Lưu ý: Secret Key chỉ hiển thị một lần duy nhất.

### B. Xóa SubUser Access Key
**Bước 1:** Vào **Detail** của SubUser chứa key cần xoá.
**Bước 2:** Tại phần **Action** của Access Key, chọn **Delete**.
**Bước 3:** Xác nhận thao tác khi được yêu cầu để hoàn tất việc xoá key.
> ⚠️ Sau khi xoá, tất cả các client đang sử dụng key này sẽ mất quyền truy cập.
* * *

## Xoá SubUser
**Bước 1:** Trong danh sách SubUser, chọn **Delete** bên cạnh SubUser cần xoá.
**Bước 2:** Xác nhận thao tác khi hộp thoại cảnh báo hiển thị.
