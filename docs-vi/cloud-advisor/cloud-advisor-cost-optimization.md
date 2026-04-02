---
id: "cloud-advisor-cost-optimization"
title: "Các vấn đề tối ưu hóa chi phí"
description: "Hướng dẫn các vấn đề liên quan đến tối ưu hóa chi phí trong Cloud Advisor."
sidebar_label: "Các vấn đề tối ưu hóa chi phí"
sidebar_position: 5
---

# Các vấn đề tối ưu hóa chi phí

Cloud Advisor phát hiện các vấn đề liên quan đến tối ưu hóa chi phí sau đây:

## Low utilization instances

**Mô tả**: Danh sách instance có mức sử dụng thấp.

| Thông tin | Mô tả |
|-----------|-------|
| Project | Project chứa instance |
| Region | Region của instance |
| VPC | VPC của instance |
| Instance name | Tên instance |
| Instance status | Trạng thái instance |
| Stop duration | Thời gian dừng |
| CPU utilization 14-day average | Mức sử dụng CPU trung bình 14 ngày |
| Number of days low utilization | Số ngày sử dụng thấp |
| Estimated monthly savings | Ước tính tiết kiệm hàng tháng |

## Underutilized storage disk

**Mô tả**: Danh sách storage disk có mức sử dụng thấp.

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

**Mô tả**: Danh sách instance đã tắt hơn 30 ngày.

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

## Unassociated IP addresses

**Mô tả**: Danh sách IP không gắn vào instance đang chạy nào.

| Thông tin | Mô tả |
|-----------|-------|
| Project | Project chứa IP |
| Region | Region của IP |
| VPC | VPC của IP |
| Public IP | Địa chỉ IP công cộng |
| Estimated monthly savings | Ước tính tiết kiệm hàng tháng |
