---
id: "cloud-advisor-cost-optimization"
title: "Hướng dẫn các vấn đề liên quan đến tối ưu hóa chi phí trong Cloud Advisor."
description: "Hướng dẫn các vấn đề liên quan đến tối ưu hóa chi phí trong Cloud Advisor."
sidebar_label: "Hướng dẫn các vấn đề liên quan đến tối ưu hóa chi phí trong Cloud Advisor."
sidebar_position: 5
---

# Hướng dẫn các vấn đề liên quan đến tối ưu hóa chi phí trong Cloud Advisor.

Show những vấn đề liên quan đến Cost Optimization

## Low utilization instances

Mô tả: danh sách Instance có mức sử dụng thấp

Danh sách vi phạm hiển thị:

| Thông tin | Mô tả |
|-----------|-------|
| Project | Project chứa instance |
| Region | Region của instance |
| VPC | VPC của instance |
| Instance name | Tên instance |
| Instance status | Trạng thái instance |
| Stop duration | Thời gian dừng |
| CPU Utilization 14-day Average | Mức sử dụng CPU trung bình 14 ngày |
| Number of Day Low Utilization | Số ngày sử dụng thấp |
| Estimated monthly savings | Ước tính tiết kiệm hàng tháng |

## Underutilized Storage Disk

Mô tả: danh sách Storage Disk có mức sử dụng thấp

Danh sách vi phạm hiển thị:

| Thông tin | Mô tả |
|-----------|-------|
| Project | Project chứa storage disk |
| Region | Region của storage disk |
| VPC | VPC của storage disk |
| Storage disk name | Tên storage disk |
| Storage disk type | Loại storage disk |
| Storage policy | Chính sách storage |
| Storage size | Kích thước storage |
| Attached | Trạng thái gắn kết |
| Average IOPS per day | IOPS trung bình mỗi ngày |
| Estimated monthly savings | Ước tính tiết kiệm hàng tháng |

## Instances stopped

Mô tả: Danh sách Instance đã tắt hơn 30 ngày

Danh sách vi phạm hiển thị:

| Thông tin | Mô tả |
|-----------|-------|
| Project | Project chứa instance |
| Region | Region của instance |
| VPC | VPC của instance |
| Instance name | Tên instance |
| Instance status | Trạng thái instance |
| Stop duration | Thời gian dừng |
| Size | Kích thước |
| Estimated monthly savings | Ước tính tiết kiệm hàng tháng |

## Unassociated IP Addresses

Mô tả: Danh sách IP không gắn vào Instance đang chạy nào

Danh sách vi phạm hiển thị:

| Thông tin | Mô tả |
|-----------|-------|
| Project | Project chứa IP |
| Region | Region của IP |
| VPC | VPC của IP |
| Public IP | Địa chỉ IP công cộng |
| Estimated monthly savings | Ước tính tiết kiệm hàng tháng |
