---
id: "cau-hinh-timeout"
title: "Cấu hình Timeout"
description: "Tính năng cấu hình **Timeout** cho **Load Balancer** cho phép bạn định rõ thời gian tối đa mà một kết nối hoặc yêu cầu c"
sidebar_label: "Cấu hình Timeout"
sidebar_position: 4
---

# Cấu hình Timeout

Tính năng cấu hình **Timeout** cho **Load Balancer** cho phép bạn định rõ thời gian tối đa mà một kết nối hoặc yêu cầu có thể tồn tại trước khi bị đóng. Điều này quan trọng để quản lý tài nguyên và đảm bảo hiệu suất ổn định của hệ thống.
**Cách hoạt động**
  * Khi một kết nối hoặc yêu cầu được gửi đến **Load Balancer** , hệ thống bắt đầu tính toán thời gian cho phép kết nối đó tồn tại.
  * Nếu kết nối không hoàn thành hoặc yêu cầu không được phản hồi trong khoảng thời gian này, nó sẽ bị đóng.
  * Việc cấu hình **Timeout** giúp tránh tình trạng kết nối hoặc yêu cầu bị treo và tiêu tốn tài nguyên.
