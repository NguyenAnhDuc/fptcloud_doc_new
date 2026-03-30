---
id: "hpc-fixed-rental"
title: "Đặt thời gian thuê cố định"
description: "Tiết kiệm chi phí bằng cách đặt thời gian thuê cố định (Fixed Rental) cho GPU Server trên HPC Portal."
sidebar_label: "Đặt thời gian thuê cố định"
sidebar_position: 26
---

# Đặt thời gian thuê cố định

Fixed Rental giúp bạn tiết kiệm đáng kể chi phí khi cần sử dụng GPU Server liên tục cho các dự án dài hạn — so với thuê theo giờ thông thường.

## Các mức giảm giá

| Thời gian | Tiết kiệm |
|-----------|-----------|
| **6 hours** | 6% so với thuê theo giờ |
| **Day** (1 ngày) | 8% so với thuê theo giờ |
| **Week** (1 tuần) | 10% so với thuê theo giờ |
| **Month** (1 tháng) | 20% so với thuê theo giờ |

:::note
Fixed Rental không tích lũy thời gian bật máy — hệ thống tính tiền và mặc định máy bật liên tục trong thời gian đã chọn.
:::

:::tip
Ví dụ: Dự án cần 8 giờ. Chọn Fixed Rental 6 giờ + thiết lập **Keep machine running** để chạy tiếp 2 giờ còn lại — tối ưu chi phí nhất.
:::

## Thiết lập Fixed Rental

1. Truy cập **Hosts** → **Fixed rental** để mở hộp thoại thiết lập.
2. Chọn ít nhất 1 image, cấu hình **Rental period**, **Number of machines**, kiểm tra số tiền giảm và nhấn **Confirm**.

## Cài đặt sau khi hết hạn (Action after expired)

Chọn **Image** → **Setting** và lựa chọn:

- **Keep the machine running**: Sau khi hết hạn, máy tiếp tục chạy và tính tiền theo giờ.
- **Shutdown machine**: Hệ thống tự động tắt máy khi hết hạn.

## Gia hạn và kết thúc

- **Gia hạn**: Chọn **Image** → **Renewal** và cấu hình tương tự khi thiết lập.
- **Kết thúc**: Chọn **Image** → **Deactivate**.

## Bước tiếp theo

- [Sao lưu image](./hpc-snapshot-backup.md)
