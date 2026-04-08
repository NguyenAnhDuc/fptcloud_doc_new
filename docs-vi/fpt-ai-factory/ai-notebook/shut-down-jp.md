---
id: "shut-down-jp"
title: "Tắt kernel"
description: "Tắt các kernel đang chạy để tiết kiệm tài nguyên."
sidebar_label: "Tắt kernel"
sidebar_position: "7"
---

# Tắt kernel

**Bước 1:** Từ thanh điều hướng, chọn tùy chọn **Running Kernels/Notebooks** (biểu tượng thứ hai từ trên xuống).

[![Biểu tượng Running Kernels/Notebooks trong thanh điều hướng JupyterLab](/img/migrated/Screenshot-2025-11-04-at-13.33.53-e1094d92.png)](/img/migrated/Screenshot-2025-11-04-at-13.33.53-e1094d92.png)

## (1) Bảng GPU kernel đang chạy

Hiển thị thông tin về tất cả **GPU kernel đang chạy** trong lab của bạn.

| **Trường** | **Mô tả** |
| --- | --- |
| **Name** | Mã định danh duy nhất của GPU kernel |
| **Created At** | Ngày và giờ GPU kernel bắt đầu |
| **Action** | Các hành động có thể thực hiện: **Shut Down All** — kết thúc tất cả kernel đang chạy trong lab. Sau khi kết thúc, các kernel sẽ hiển thị trong phần **Kernel History**. **Shut Down** — chỉ kết thúc kernel đã chọn. Kernel đã kết thúc sẽ hiển thị trong phần **Kernel History**. |

## (2) Bảng lịch sử kernel

Hiển thị thông tin về tất cả **GPU kernel đã kết thúc**. Bảng này giúp bạn xác minh thời gian sử dụng kernel và đối chiếu với dữ liệu thanh toán trên **AI Factory Portal**.

| **Trường** | **Mô tả** |
| --- | --- |
| **Name** | Mã định danh duy nhất của GPU kernel |
| **Created At** | Ngày và giờ GPU kernel bắt đầu |
| **Duration** | Tổng thời gian chạy của GPU kernel |

## Đối chiếu thanh toán

:::note
Bạn có thể nhận thấy sự chênh lệch nhỏ (thường 1–10 giây) giữa thời gian chạy GPU hiển thị trong **AI Factory Billing** và cột **Duration** trong bảng **Kernel History** của AI Notebook. Sự khác biệt nhỏ này là bình thường và xảy ra do độ trễ đồng bộ hóa giữa các dịch vụ nội bộ.
:::

[![Bảng lịch sử kernel hiển thị thời gian và dữ liệu đối chiếu thanh toán](/img/migrated/Screenshot-2025-11-04-at-14.12.39-28c73e36.png)](/img/migrated/Screenshot-2025-11-04-at-14.12.39-28c73e36.png)
