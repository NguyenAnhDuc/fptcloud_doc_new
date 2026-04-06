---
id: "disable-NIC-card"
title: "Tắt Network Interface Card"
description: "Tắt card NIC để ngừng kết nối mạng qua card đó."
sidebar_label: "Tắt Network Interface Card"
sidebar_position: 58
---

# Tắt Network Interface Card

Bạn có thể tắt tạm thời card NIC trên máy ảo để ngừng kết nối mạng qua giao diện đó mà không cần xóa card.

:::warning
Việc tắt card NIC sẽ làm gián đoạn toàn bộ lưu lượng mạng qua giao diện đó. Hãy đảm bảo điều này không ảnh hưởng đến các dịch vụ quan trọng trước khi tiến hành.
:::

## Tắt card NIC

1. Truy cập trang **Quản lý Instance** và chọn Instance của bạn.
2. Chuyển sang tab **NIC**.
3. Tìm card NIC cần tắt, sau đó chọn **Hành động** → **Tắt**.
4. Xác nhận hành động trong hộp thoại hiện ra.

Trạng thái card NIC sẽ chuyển thành **Đã tắt**.

## Các bước tiếp theo

- [Enable NIC](./enable-NIC-card.md)
- [Xóa NIC](./delete-card-NIC.md)
