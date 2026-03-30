---
id: "gpu-general"
title: "Quản lý GPU với Console Portal"
description: "Khởi tạo máy ảo có GPU, thêm/gỡ GPU và resize thông số GPU trên FPT Cloud Portal."
sidebar_label: "Quản lý GPU với Console Portal"
sidebar_position: 21
---

# Quản lý GPU với Console Portal

Bạn có thể tạo máy ảo có GPU, thêm GPU vào máy ảo đã có, gỡ GPU hoặc resize cấu hình GPU trực tiếp trên FPT Cloud Portal.

## Khởi tạo máy ảo có GPU

1. Tại **Instance Management**, nhấn **Create instance**.

   [![Màn hình Instance Management](/img/migrated/image-1744799866857-2ea8b0f3.png)](/img/migrated/image-1744799866857-2ea8b0f3.png)

2. Chọn **GPU** và loại card GPU cần sử dụng.

   [![Chọn GPU type](/img/migrated/image-1744799912482-215598f9.png)](/img/migrated/image-1744799912482-215598f9.png)

3. Nhập các thông tin còn lại và nhấn **Create Instance**.

   [![Xác nhận tạo Instance GPU](/img/migrated/image-1744799934410-03d823e6.png)](/img/migrated/image-1744799934410-03d823e6.png)

Thông tin GPU được cập nhật tại màn hình Instance Detail.

[![Instance Detail với thông tin GPU](/img/migrated/image-1744799982286-e3f4b4f1.png)](/img/migrated/image-1744799982286-e3f4b4f1.png)

## Thêm GPU vào Instance

:::note
Cần **Power off** máy ảo trước khi thêm GPU (trạng thái "Stopped"). Tính năng bị disable khi máy đang ở trạng thái "Running" hoặc "Pending".
:::

1. Tại **Instance Management**, chọn máy ảo cần thêm GPU.

   [![Chọn máy ảo](/img/migrated/image-1744799997207-f8405b2c.png)](/img/migrated/image-1744799997207-f8405b2c.png)

2. Chọn **Actions** → **Add GPU**.

   [![Menu Actions với tùy chọn Add GPU](/img/migrated/image-1744800019053-f556d42e.png)](/img/migrated/image-1744800019053-f556d42e.png)

3. Chọn **GPU type** phù hợp từ danh sách, nhấn **Add GPU**.

4. Kiểm tra thông tin tại Instance Detail.

   [![Instance Detail sau khi Add GPU](/img/migrated/image-1744800059691-eba5d618.png)](/img/migrated/image-1744800059691-eba5d618.png)

## Gỡ GPU khỏi máy ảo

:::note
Cần **Power off** máy ảo trước khi gỡ GPU.
:::

1. Tại **Instance Management**, chọn máy ảo, nhấn **Remove GPU**.
2. Chọn **resource type** thường (không có GPU) từ danh sách.
3. Nhấn **Remove GPU**. Hệ thống gỡ GPU và chuyển Instance về resource type đã chọn.

## Resize GPU

:::note
Cần **Power off** máy ảo trước khi resize.
:::

1. Tại **Instance Management**, chọn máy ảo, nhấn **Resize**.
2. Chọn **template** và **resource type**:
   - Instance có GPU chỉ resize sang type GPU.
   - Instance không có GPU chỉ resize sang type không có GPU. Dùng **Add GPU** nếu muốn chuyển sang type GPU.
3. Nhấn **Resize Instance**.

## Bước tiếp theo

- [Quản lý GPU cho dịch vụ Specific](./gpu-specific.md)
