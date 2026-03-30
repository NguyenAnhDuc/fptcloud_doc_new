---
id: "quan-ly-floating-ip"
title: "Quản lý Floating IP"
description: "Gắn, gỡ và quản lý Floating IP để máy ảo truy cập internet."
sidebar_label: "Quản lý Floating IP"
sidebar_position: 69
---

# Quản lý Floating IP

Floating IP lưu giữ IP Public và điều hướng truy cập từ internet vào máy ảo. Để máy ảo truy cập được từ ngoài internet, bạn cần gắn Floating IP cho nó.

Bạn có thể chuyển hướng Floating IP sang máy ảo khác cùng VPC — giúp tiết kiệm chi phí và sử dụng IP tối đa.

## Lấy IP Public mới

Nếu tài khoản còn hạn mức, bạn có thể lấy thêm IP từ pool.

1. Chọn **Networking** → **Floating IPs**, nhấn **Allocate floating IP**.
2. Điền thông tin và nhấn **Allocate**.

## Gắn Floating IP vào máy ảo

1. Tại danh sách Floating IP, chọn **Actions** → **Attach**.
2. Chọn máy ảo cần gắn, nhấn **Attach**.

## Gỡ Floating IP khỏi máy ảo

1. Tại danh sách Floating IP, chọn **Actions** → **Detach**.
2. Xác nhận gỡ.

## Xóa Floating IP

1. Tại danh sách Floating IP, chọn **Actions** → **Delete**.
2. Xác nhận xóa.

:::warning
Sau khi xóa, IP Public sẽ được trả về pool và có thể được cấp cho tài khoản khác.
:::

## Bước tiếp theo

- [Quản lý Subnets](./Quản%20lý%20Subnets.md)
