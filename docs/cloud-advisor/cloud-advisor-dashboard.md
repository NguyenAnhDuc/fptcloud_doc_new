---
id: "cloud-advisor-dashboard"
title: "Phân loại theo nhóm"
sidebar_label: "Phân loại theo nhóm"
sidebar_position: "3"
---

# Phân loại theo nhóm

[![](/img/migrated/Dashboard-CA-1024x756-9afa85a9.png)](/img/migrated/Dashboard-CA-1024x756-9afa85a9.png)

Dashboard displayed:

- **Action recommended**: Số lượng vấn đề need to xử lý
- **Investigation recommended**: Vấn đề need to kiểm tra thêm
- **Rules with excluded items**: Các rule has been loại trừ cụ thể 1 số tài nguyên không need to kiểm tra

## Phân loại theo nhóm

Mỗi nhóm is phân loại theo:

- **Security**: mục tiêu giảm thiểu rủi ro security and tăng mức độ an toàn for system.
- **Cost Optimization**: Tối ưu cost vận hành mà không ảnh hưởng đến hiệu năng system.
- **Fault Tolerance**: Tăng độ ổn định and đảm bảo tính sẵn sàng of system.

## Danh sách vấn đề is phát hiện

Bên dưới là list the vấn đề is phát hiện, ví dụ:

**Security Groups – Specific Ports Unrestricted**: Phát hiện Security Group mở port ra Internet (0.0.0.0/0) → có nguy cơ security

### Thông tin mỗi vấn đề

Mỗi vấn đề including:

- Tên vấn đề
- Thời gian dữ liệu is cập nhật mới nhất
- Nút refresh
- Nút download: hỗ trợ xuất file excel information rule & the resource vi phạm to report nội bộ
- Mô tả vấn đề
- Số lượng resource is vi phạm need to kiểm tra

### Thao tác user

Người dùng can:

- Chọn fromng item
- Exclude (loại trừ) in trường hợp cố ý cấu hình or phục vụ mục đích đặc biệt (test, staging) to Rule không alert lại
- Refresh lại kết quả
