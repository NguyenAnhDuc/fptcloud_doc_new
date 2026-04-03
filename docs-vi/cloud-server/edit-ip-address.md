---
id: "edit-ip-address"
title: "Chỉnh sửa IP Address"
description: "Thay đổi địa chỉ IP của card NIC."
sidebar_label: "Chỉnh sửa IP Address"
sidebar_position: 62
---

# Chỉnh sửa IP Address

Bạn có thể thay đổi địa chỉ IP được gán cho card NIC trên máy ảo, bằng cách chỉ định một IP tĩnh cụ thể hoặc chuyển sang cấp phát động.

:::warning
Việc thay đổi địa chỉ IP của card NIC sẽ làm gián đoạn kết nối mạng trên giao diện đó. Hãy lên kế hoạch cho thời gian ngừng hoạt động trước khi thực hiện thay đổi này trong môi trường production.
:::

## Chỉnh sửa địa chỉ IP của card NIC

1. Truy cập trang **Quản lý Instance** và chọn Instance của bạn.
2. Chuyển sang tab **NIC**.
3. Tìm card NIC cần thay đổi địa chỉ IP, sau đó chọn **Hành động** → **Chỉnh sửa IP Address**.
4. Nhập địa chỉ IP và subnet mask mới, hoặc chọn cấp phát động (DHCP).
5. Nhấn **Xác nhận** để áp dụng các thay đổi.

:::note
Sau khi thay đổi địa chỉ IP, hãy cập nhật cấu hình mạng bên trong hệ điều hành của máy ảo nếu bạn đang sử dụng IP tĩnh. Xem [Thay đổi Network Config](./change-network-config.md) để biết thêm chi tiết.
:::

## Các bước tiếp theo

- [Thay đổi địa chỉ MAC](./change-address-MAC.md)
- [Thay đổi Network Config](./change-network-config.md)
