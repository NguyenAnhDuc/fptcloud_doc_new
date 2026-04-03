---
id: "delete-card-NIC"
title: "Xóa Network Interface Card"
description: "Xóa card NIC khỏi máy ảo khi không còn nhu cầu."
sidebar_label: "Xóa Network Interface Card"
sidebar_position: 64
---

# Xóa Network Interface Card

Bạn có thể xóa card NIC khỏi máy ảo khi không còn cần thiết, giúp đơn giản hóa cấu hình mạng.

:::danger
Việc xóa card NIC sẽ xóa vĩnh viễn card đó cùng toàn bộ cấu hình mạng liên quan. Hành động này không thể hoàn tác.
:::

:::note
Card NIC Primary không thể bị xóa. Để xóa card NIC Primary, trước tiên hãy chuyển một card khác thành Primary bằng cách sử dụng tính năng [Chuyển card thường thành card Primary](./convert-card.md).
:::

## Xóa card NIC

1. Truy cập trang **Quản lý Instance** và chọn Instance của bạn.
2. Chuyển sang tab **NIC**.
3. Tìm card NIC cần xóa, sau đó chọn **Hành động** → **Xóa**.
4. Xác nhận việc xóa trong hộp thoại hiện ra.

Card NIC sẽ bị xóa khỏi máy ảo và kết nối mạng qua giao diện đó sẽ dừng ngay lập tức.

## Các bước tiếp theo

- [Tổng quan NIC](./overview-nic.md)
- [Quản lý NIC](./NIC-overview-1.md)
