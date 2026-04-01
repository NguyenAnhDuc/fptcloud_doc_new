---
id: "gpu-specific"
title: "Quản lý GPU cho dịch vụ Specific"
description: "Thêm GPU, tạo GPU Server mới và gỡ GPU cho loại dịch vụ Specific trên FPT Cloud."
sidebar_label: "Quản lý GPU cho dịch vụ Specific"
sidebar_position: 22
pagination_next: null
---

# Quản lý GPU cho dịch vụ Specific

Hướng dẫn quản lý GPU cho loại dịch vụ Specific — bao gồm thêm GPU vào máy ảo đã tạo, tạo GPU Server mới và gỡ GPU.

## Thêm GPU vào máy ảo đã tạo

:::note
Cần **Power off** máy ảo trước khi thêm GPU. Cấu hình tối thiểu: 8 vCPU – 24 GB RAM.
:::

1. Tại **Instance Management**, chọn **Actions** → **Add GPU**.

   [![Menu Actions với tùy chọn Add GPU](/img/migrated/image-1705028237983-e4b7aeed.png)](/img/migrated/image-1705028237983-e4b7aeed.png)

2. Chọn cấu hình **GPU** từ danh sách, nhấn **Update**.

## Tạo GPU Server mới

:::note
- Cần được cấp quota GPU. Khi VPC hết quota, hệ thống báo lỗi khi tạo GPU Server mới.
- Cấu hình tối thiểu: 8 vCPU – 24 GB RAM.
:::

1. Chọn **Compute Engine** → **Instance Management**, nhấn **Create instance**.

   [![Màn hình Instance Management](/img/migrated/image-1712739862804-d5b7552c.png)](/img/migrated/image-1712739862804-d5b7552c.png)

2. Cấu hình máy ảo:
   - **Instance Type**: Chọn **GPU**.
   - **GPU type**: Chọn loại GPU phù hợp.
   - **Image**: Chọn OS phù hợp.
   - **Resource type**: Chọn cấu hình từ danh sách.
   - **Local Storage**: Tăng giảm dung lượng ổ cứng (tối thiểu 40 GB).
   - **Subnet** và **Private IP**: Auto-assign hoặc tùy chỉnh.
   - **Tên instance**: Nhập tên máy ảo.
   - **Authentication type**: Standard (Password) hoặc SSH Key.

3. Nhấn **Create Instance**.

Sau khi tạo, hệ thống thêm GPU vào máy ảo ngay lập tức. Bạn có thể console vào máy để kiểm tra thông tin GPU.

## Gỡ GPU khỏi máy ảo

1. Tại **Instance Management**, chọn **Actions** → **Remove GPU**.
2. Xác nhận thông tin và nhấn **Update**.
