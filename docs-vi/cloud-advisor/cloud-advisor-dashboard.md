---
id: "cloud-advisor-dashboard"
title: "Phân loại theo nhóm"
description: "Hướng dẫn sử dụng Dashboard của Cloud Advisor để theo dõi và quản lý các vấn đề về bảo mật, chi phí và độ ổn định hệ thống."
sidebar_label: "Phân loại theo nhóm"
sidebar_position: 3
---

# Phân loại theo nhóm

[![](/img/migrated/Dashboard-CA-1024x756-9afa85a9.png)](/img/migrated/Dashboard-CA-1024x756-9afa85a9.png)

Dashboard hiển thị:

- **Action recommended**: Số lượng vấn đề cần xử lý
- **Investigation recommended**: Vấn đề cần kiểm tra thêm
- **Rules with excluded items**: Các rule đã loại trừ cụ thể 1 số tài nguyên không cần kiểm tra

## Phân loại theo nhóm

Mỗi nhóm được phân loại theo:

- **Security**: mục tiêu giảm thiểu rủi ro bảo mật và tăng mức độ an toàn cho hệ thống.
- **Cost Optimization**: Tối ưu chi phí vận hành mà không ảnh hưởng đến hiệu năng hệ thống.
- **Fault Tolerance**: Tăng độ ổn định và đảm bảo tính sẵn sàng của hệ thống.

## Danh sách vấn đề được phát hiện

Bên dưới là danh sách các vấn đề được phát hiện, ví dụ:

**Security Groups – Specific Ports Unrestricted**: Phát hiện Security Group mở port ra Internet (0.0.0.0/0) → có nguy cơ bảo mật

### Thông tin mỗi vấn đề

Mỗi vấn đề bao gồm:

- Tên vấn đề
- Thời gian dữ liệu được cập nhật mới nhất
- Nút refresh
- Nút download: hỗ trợ xuất file excel thông tin rule & các resource vi phạm để báo cáo nội bộ
- Mô tả vấn đề
- Số lượng resource đang vi phạm cần kiểm tra

### Thao tác người dùng

Người dùng có thể:

- Chọn từng item
- Exclude (loại trừ) trong trường hợp cố ý cấu hình hoặc phục vụ mục đích đặc biệt (test, staging) để Rule không cảnh báo lại
- Refresh lại kết quả
