---
id: "cloud-advisor-cost-optimization"
title: "Hướng dẫn các vấn đề liên quan đến tối ưu hóa chi phí trong Cloud Advisor."
sidebar_label: "Hướng dẫn các vấn đề liên quan đến tối ưu hóa chi phí trong Cloud Advisor."
sidebar_position: "5"
---

# Hướng dẫn the vấn đề liên quan to tối ưu hóa cost in Cloud Advisor.

Show những vấn đề liên quan to Cost Optimization

## Low utilization instances

Description: danh sách Instance có mức sử dụng thấp

List vi phạm displayed:

| Information | Mô tả |
|-----------|-------|
| Project | Project chứa instance |
| Region | Region of instance |
| VPC | VPC of instance |
| Instance name | Tên instance |
| Instance status | Trạng thái instance |
| Stop duration | Thời gian dừng |
| CPU Utilization 14-day Average | Mức sử dụng CPU trung bình 14 ngày |
| Number of Day Low Utilization | Số ngày sử dụng thấp |
| Estimated monthly savings | Ước tính tiết kiệm hàng tháng |

## Underutilized Storage Disk

Description: danh sách Storage Disk có mức sử dụng thấp

List vi phạm displayed:

| Information | Mô tả |
|-----------|-------|
| Project | Project chứa storage disk |
| Region | Region of storage disk |
| VPC | VPC of storage disk |
| Storage disk name | Tên storage disk |
| Storage disk type | Loại storage disk |
| Storage policy | Chính sách storage |
| Storage size | Kích thước storage |
| Attached | Trạng thái gắn kết |
| Average IOPS per day | IOPS trung bình mỗi ngày |
| Estimated monthly savings | Ước tính tiết kiệm hàng tháng |

## Instances stopped

Description: List Instance has been tắt hơn 30 ngày

List vi phạm displayed:

| Information | Mô tả |
|-----------|-------|
| Project | Project chứa instance |
| Region | Region of instance |
| VPC | VPC of instance |
| Instance name | Tên instance |
| Instance status | Trạng thái instance |
| Stop duration | Thời gian dừng |
| Size | Kích thước |
| Estimated monthly savings | Ước tính tiết kiệm hàng tháng |

## Unassociated IP Addresses

Description: List IP không gắn ando Instance is chạy nào

List vi phạm displayed:

| Information | Mô tả |
|-----------|-------|
| Project | Project chứa IP |
| Region | Region of IP |
| VPC | VPC of IP |
| Public IP | Địa chỉ IP công cộng |
| Estimated monthly savings | Ước tính tiết kiệm hàng tháng |
