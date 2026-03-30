---
id: "create-new-instance"
title: "Tạo Instance Schedule mới"
description: "Tạo lịch tự động tắt/bật máy ảo theo thời gian và tần suất mong muốn."
sidebar_label: "Tạo Instance Schedule"
sidebar_position: 90
---

# Tạo Instance Schedule mới

## Tạo Schedule

1. Chọn **Compute Engine** → **Instance Schedule**, nhấn **Create schedule**.

   [![Màn hình Instance Schedule](/img/migrated/image-1695608969930-81286d57.png)](/img/migrated/image-1695608969930-81286d57.png)

2. Nhập thông tin:
   - **Name**: Tên Schedule.
   - **Description**: Mô tả.
   - **Start time**: Thời gian bật máy ảo.
   - **Stop time**: Thời gian tắt máy ảo.
   - **Start Date** *(tùy chọn)*: Ngày bắt đầu. Nếu để trống, chạy vô thời hạn từ khi tạo.
   - **End Date** *(tùy chọn)*: Ngày kết thúc. Nếu để trống, chạy đến khi bị xóa.
   - **Frequency**: Tần suất — hàng ngày / hàng tuần / hàng tháng.
   - **Applied instances**: Máy ảo gắn vào lịch.

   [![Hộp thoại Create schedule](/img/migrated/image-1695608983434-0ca4b6ed.png)](/img/migrated/image-1695608983434-0ca4b6ed.png)

:::note
Mỗi máy ảo chỉ được gắn vào 1 Schedule cùng lúc.
:::

3. Nhấn **Create schedule**.

Schedule mới hiển thị tại trang **Instance Schedule Management**.

[![Schedule đã tạo](/img/migrated/image-1695608998324-75646c28.png)](/img/migrated/image-1695608998324-75646c28.png)

## Bước tiếp theo

- [Xem chi tiết Instance Schedule](./view-detail-instance.md)
