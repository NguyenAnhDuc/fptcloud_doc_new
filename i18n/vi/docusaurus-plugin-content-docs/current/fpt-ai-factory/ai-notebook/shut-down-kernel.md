---
id: "shut-down-kernel"
title: "Tắt kernel"
description: "Tắt kernel đang chạy để tiết kiệm tài nguyên."
sidebar_label: "Tắt kernel"
sidebar_position: 13
---

# Tắt kernel

**Bước 1:** Điều hướng đến Running Kernels/Notebooks. Từ thanh điều hướng, chọn tùy chọn **Running Kernels/Notebooks** (biểu tượng thứ hai từ trên xuống).

[![Biểu tượng Running Kernels/Notebooks trong thanh điều hướng JupyterLab](/img/migrated/Screenshot-2025-11-04-at-13.33.53-8b5ebeba.png)](/img/migrated/Screenshot-2025-11-04-at-13.33.53-8b5ebeba.png)

## Bảng GPU kernel đang chạy

Hiển thị thông tin về tất cả **GPU kernel đang hoạt động** trong lab của bạn.

| Trường | Mô tả |
| --- | --- |
| **Name** | Định danh duy nhất của GPU kernel |
| **Created At** | Ngày và giờ GPU kernel bắt đầu chạy |
| **Action** | Các hành động khả dụng: **Shut Down All** kết thúc tất cả kernel đang chạy trong lab. Sau khi kết thúc, kernel sẽ xuất hiện trong phần **Kernel History**. **Shut Down** chỉ kết thúc kernel được chọn. Kernel đã kết thúc sẽ xuất hiện trong phần **Kernel History**. |

## Bảng lịch sử kernel

Hiển thị thông tin về tất cả **GPU kernel đã kết thúc**.

Bảng này giúp bạn xác minh thời gian sử dụng kernel và đối chiếu với dữ liệu thanh toán trên **AI Factory Portal**.

| Trường | Mô tả |
| --- | --- |
| **Name** | Định danh duy nhất của GPU kernel |
| **Created At** | Ngày và giờ GPU kernel bắt đầu chạy |
| **Duration** | Tổng thời gian chạy của GPU kernel |

## Đối chiếu thanh toán

:::note
Bạn có thể nhận thấy sự chênh lệch nhỏ (thường từ 1–10 giây) giữa thời gian chạy GPU hiển thị trong **AI Factory Billing** và cột **Duration** trong bảng **Kernel History** của AI Notebook. Sự khác biệt nhỏ này là bình thường và xảy ra do độ trễ đồng bộ hóa giữa các dịch vụ nội bộ.
:::

[![Bảng Kernel History hiển thị dữ liệu duration và đối chiếu thanh toán](/img/migrated/Screenshot-2025-11-04-at-14.12.39-862af5d2.png)](/img/migrated/Screenshot-2025-11-04-at-14.12.39-862af5d2.png)
