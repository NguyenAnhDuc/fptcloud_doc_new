---
id: "change-address-MAC"
title: "Thay đổi địa chỉ MAC"
description: "Reset địa chỉ MAC cho card NIC."
sidebar_label: "Thay đổi địa chỉ MAC"
sidebar_position: 63
---

# Thay đổi địa chỉ MAC

Bạn có thể reset địa chỉ MAC được gán cho một card NIC. Tính năng này hữu ích khi cần giải quyết xung đột mạng hoặc khi tái cấu hình máy ảo và cần một địa chỉ MAC mới.

:::warning
Việc thay đổi địa chỉ MAC sẽ gây gián đoạn mạng ngắn trên giao diện đó. Phần mềm hoặc dịch vụ sử dụng cơ chế cấp phép hoặc lọc dựa trên MAC có thể cần được cấu hình lại sau thay đổi này.
:::

## Reset địa chỉ MAC của card NIC

1. Truy cập trang **Quản lý Instance** và chọn Instance của bạn.
2. Chuyển sang tab **NIC**.
3. Tìm card NIC cần reset địa chỉ MAC, sau đó chọn **Hành động** → **Thay đổi địa chỉ MAC**.
4. Xác nhận hành động trong hộp thoại hiện ra.

Hệ thống sẽ tự động gán một địa chỉ MAC mới cho card NIC.

## Các bước tiếp theo

- [Xóa NIC](./delete-card-NIC.md)
- [Thay đổi Network Config](./change-network-config.md)
