---
id: "quan-ly-floating-ip"
title: "Floating IP管理"
description: "インスタンスがインターネットにアクセスできるよう、Floating IPのアタッチ・デタッチ・管理を行います。"
sidebar_label: "Floating IP管理"
sidebar_position: 69
---

# Floating IP管理

Floating IP lưu giữ IP Public và điều hướng truy cập từ internet vào máy ảo. Để máy ảo truy cập được từ ngoài internet, bạn cần gắn Floating IP cho nó.

Bạn có thể chuyển hướng Floating IP sang máy ảo khác cùng VPC — giúp tiết kiệm chi phí và sử dụng IP tối đa.

## Lấy IP Public mới

Nếu tài khoản còn hạn mức, bạn có thể lấy thêm IP từ pool.

1. **Networking** → **Floating IPs**, nhấn **Allocate floating IP**.
2. Điền thông tin và nhấn **Allocate**.

## Gắn Floating IP vào máy ảo

1. Tại danh sách Floating IP, chọn **Actions** → **Attach**.
2. Chọn máy ảo cần gắn, nhấn **Attach**.

## Gỡ Floating IP khỏi máy ảo

1. Tại danh sách Floating IP, chọn **Actions** → **Detach**.
2. Xác nhận gỡ.

## 削除 Floating IP

1. Tại danh sách Floating IP, chọn **Actions** → **Delete**.
2. Xác nhận xóa.

:::warning
Sau khi xóa, IP Public sẽ được trả về pool và có thể được cấp cho tài khoản khác.
:::

## 次のステップ

- [Quản lý Subnets](./Quản%20lý%20Subnets.md)
