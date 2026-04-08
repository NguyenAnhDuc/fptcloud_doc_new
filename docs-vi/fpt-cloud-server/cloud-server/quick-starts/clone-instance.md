---
id: "clone-instance"
title: "Nhân bản máy ảo"
description: "Tạo bản sao máy ảo từ Instance gốc với cùng cấu hình."
sidebar_label: "Nhân bản máy ảo"
sidebar_position: 2
---

# Nhân bản máy ảo

Tính năng Clone Instance giúp bạn tạo ra máy ảo mới giống với máy ảo gốc — tiết kiệm thời gian khi cần triển khai nhiều máy ảo cùng cấu hình.

## Điều kiện tiên quyết

- ✅ Instance gốc đang ở trạng thái **Power on** hoặc **Power off**.
- ✅ Instance không có external disk đính kèm.

:::note
- Tính năng chưa hỗ trợ cho các Instance có external disk.
- Đối với Instance có Snapshot hoặc GPU, hệ thống clone Instance nhưng không bao gồm Snapshot và GPU.
:::

## Nhân bản máy ảo

1. Chọn Instance cần clone, nhấn **Actions** → **Clone instance**.

   [![Menu Actions với tùy chọn Clone instance](/img/migrated/image-1717475698353-5ed202f9.png)](/img/migrated/image-1717475698353-5ed202f9.png)

2. Nhập các thông số:
   - **Tên instance**: Tên máy ảo sau khi clone (chỉ chấp nhận chữ cái, số, `-`, `_`, khoảng trắng và dấu chấm).
   - **Storage policy**: Chọn loại storage.
   - **Subnet**: Chọn subnet từ danh sách.
   - **Private IP** *(tùy chọn)*: Nhập IP cho clone instance. Nếu để trống, hệ thống tự tạo.

   [![Hộp thoại Clone instance](/img/migrated/image-1717475716702-fb6919a9.png)](/img/migrated/image-1717475716702-fb6919a9.png)

3. Nhấn **Clone**.

Hệ thống chuyển sang màn hình danh sách Instance. Clone Instance hiển thị ở trạng thái **Pending**.

[![Clone Instance đang ở trạng thái Pending](/img/migrated/image-1717475729573-36124bd2.png)](/img/migrated/image-1717475729573-36124bd2.png)

Sau khi hoàn tất, trạng thái chuyển sang **Running**.

[![Clone Instance đã chuyển sang trạng thái Running](/img/migrated/image-1717475743661-15f71aa3.png)](/img/migrated/image-1717475743661-15f71aa3.png)

## Bước tiếp theo

- [Tắt/Bật máy ảo](./quick-starts-tatbat-may-ao.md)
