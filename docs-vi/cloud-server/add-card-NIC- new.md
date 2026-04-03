---
id: "add-card-NIC- new"
title: "Thêm Network Interface Card mới"
description: "Thêm card NIC mới vào máy ảo để kết nối thêm Subnet."
sidebar_label: "Thêm Network Interface Card mới"
sidebar_position: 60
---

# Thêm Network Interface Card mới

Bạn có thể thêm các card NIC bổ sung vào máy ảo để kết nối với nhiều Subnet, từ đó xây dựng các kiến trúc mạng linh hoạt hơn.

## Điều kiện tiên quyết

- Subnet đích phải đã tồn tại trong cấu hình mạng của cloud.
- Bạn phải có đủ quyền để chỉnh sửa Instance.

## Thêm card NIC

1. Truy cập trang **Quản lý Instance** và chọn Instance của bạn.
2. Chuyển sang tab **NIC**.
3. Nhấn **Thêm NIC**.
4. Chọn **Subnet** để gắn card NIC mới vào.
5. Cấu hình địa chỉ IP (tĩnh hoặc động) theo yêu cầu.
6. Nhấn **Xác nhận** để tạo card NIC.

:::note
Sau khi thêm card NIC mới, bạn có thể cần cập nhật cấu hình mạng bên trong hệ điều hành của máy ảo. Xem [Thay đổi Network Config](./change-network-config.md) để biết thêm chi tiết.
:::

## Các bước tiếp theo

- [Chuyển card thường thành card Primary](./convert-card.md)
- [Thay đổi Network Config](./change-network-config.md)
