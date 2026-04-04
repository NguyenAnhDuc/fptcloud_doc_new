---
id: "manage-subusers"
title: "Quản lý subuser"
description: "Hướng dẫn tạo, chỉnh sửa, xóa subuser và quản lý access key trong FPT Object Storage."
sidebar_label: "Quản lý subuser"
sidebar_position: 10
---

# Quản lý subuser

**SubUser** là người dùng con được tạo trong FPT Object Storage với quyền truy cập giới hạn, giúp tăng cường bảo mật và kiểm soát truy cập dữ liệu hiệu quả hơn.

Tuỳ theo nhu cầu sử dụng, quản trị viên có thể gán cho SubUser các **role** với mức độ truy cập khác nhau.

### Các vai trò được hỗ trợ

- **None:** Không có quyền truy cập.
- **Read:** Chỉ được đọc dữ liệu trong bucket.
- **Write:** Chỉ được ghi dữ liệu vào bucket.
- **Read - Write:** Có quyền đọc và ghi dữ liệu.
- **Full:** Toàn quyền, bao gồm cả thao tác cấu hình bucket.

Việc sử dụng SubUser giúp phân quyền rõ ràng, hạn chế rủi ro khi cần chia sẻ quyền truy cập với nhiều người dùng hoặc ứng dụng.

---

## Tạo subuser mới

1. Truy cập menu **Object Storage Management**, chọn tab **SubUser**, sau đó chọn **Region**.
2. Nhấn **Create SubUser**.
3. Nhập thông tin cần thiết:
   - **Name:** Tên hiển thị dễ nhớ.
   - **Access level:** Chọn vai trò phù hợp.
4. Nhấn **Create** để hoàn tất quá trình tạo SubUser.

---

## Chỉnh sửa role của SubUser

1. Trong danh sách SubUser, chọn **Detail** tại SubUser cần chỉnh sửa.
2. Ở trường **Access level**, chọn role mới phù hợp.
3. Nhấn **Save** để cập nhật.

---

## Quản lý SubUser Access Key

Mỗi SubUser có thể có tối đa **2 cặp access key** dùng để xác thực khi truy cập bucket qua SDK, API hoặc S3 Client.

### A. Tạo SubUser Access Key

1. Vào **Detail** của SubUser cần tạo key.
2. Nhấn **Generate Key**.
3. Hệ thống sẽ tạo một cặp **access key** và **Secret Key**.
4. **Lưu trữ ngay** thông tin key ở nơi an toàn, sau đó nhấn **Confirm access key** để xác nhận.

:::note
Secret Key chỉ hiển thị một lần duy nhất.
:::

### B. Xóa SubUser Access Key

1. Vào **Detail** của SubUser chứa key cần xóa.
2. Tại phần **Action** của access key, chọn **Delete**.
3. Xác nhận thao tác khi được yêu cầu để hoàn tất việc xóa key.

:::warning
Sau khi xóa, tất cả các client đang sử dụng key này sẽ mất quyền truy cập.
:::

---

## Xóa subuser

1. Trong danh sách SubUser, chọn **Delete** bên cạnh SubUser cần xóa.
2. Xác nhận thao tác khi hộp thoại cảnh báo hiển thị.
