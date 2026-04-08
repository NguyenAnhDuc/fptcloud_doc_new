---
id: "Overview"
title: "Tổng quan"
description: "Tổng quan về FPT Cloud Guard – dịch vụ giám sát và cảnh báo đa kênh"
sidebar_label: "Tổng quan"
sidebar_position: 1
---

# Tổng quan về FPT Cloud Guard

FPT Cloud Guard là dịch vụ bảo mật và giám sát trên FPT Cloud, cung cấp khả năng cảnh báo tự động đa kênh cho tài nguyên cloud.

## Các tính năng chính

- **Resource alert:** Giám sát Virtual Machine, Load Balancer, Object Storage, VPN site-to-site và nhiều dịch vụ khác. Nhận cảnh báo khi các metric như CPU, RAM, băng thông mạng, disk IOPS vượt ngưỡng cấu hình.
- **Activity alert:** Nhận thông báo khi có thao tác cụ thể trên tài nguyên (tạo, xóa, cập nhật,...).
- **Threat alert:** Phát hiện các mối đe dọa bảo mật bao gồm quét cổng tần suất cao, nhiễm malware và khả năng bị tấn công DDoS.
- **Thông báo đa kênh:** Gửi cảnh báo qua Email, Telegram, Slack, Microsoft Teams, Webhook, SMS và Call.
- **Quản lý người nhận:** Tạo và quản lý người nhận cảnh báo ở cấp độ VPC hoặc Tenant.

## Cách hoạt động

1. Bạn cấu hình Alert với loại metric, ngưỡng, điều kiện và người nhận thông báo.
2. FPT Cloud Guard liên tục so sánh metric với ngưỡng theo chu kỳ đã cài đặt.
3. Khi ngưỡng bị vượt qua (hoặc trở về bình thường), hệ thống tự động gửi thông báo đến tất cả người nhận đã cấu hình.

## Bắt đầu sử dụng

Xem [Thiết lập ban đầu](Initial-Setup.md) để tạo tài khoản FPT Cloud và đăng nhập FPT Portal trước khi tạo Alert đầu tiên.
