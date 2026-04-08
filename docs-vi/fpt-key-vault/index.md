---
id: "fpt-key-vault"
title: "FPT Key Vault"
description: "Tài liệu hướng dẫn sử dụng dịch vụ FPT Key Vault"
sidebar_label: "FPT Key Vault"
sidebar_position: 1
draft: true
---

# FPT Key Vault

FPT Key Vault là dịch vụ lưu trữ và quản lý Secret an toàn trên nền tảng FPT Cloud. Dịch vụ hỗ trợ nhiều loại Secret như Key/Value, SSH key, certificate và tích hợp dễ dàng với ứng dụng, container, VM thông qua SDK và CLI.

## Tài liệu FPT Key Vault

Cung cấp hướng dẫn chi tiết về các thao tác khởi tạo, sử dụng và quản lý FPT Key Vault thông qua giao diện FPT Portal.

## Tính năng

- Tạo và quản lý Vault Instance trên giao diện Portal
- Xem danh sách và chi tiết các Vault, Secret Engine, Secret
- Quản lý Policy kiểm soát quyền truy cập Secret
- Quản lý Auth Method và Role để xác thực ứng dụng
- Tích hợp với ứng dụng và hệ thống hiện có

## Release note

### Ra mắt dịch vụ FPT Key Vault

FPT Cloud chính thức ra mắt dịch vụ Key Vault trên giao diện Portal. Khách hàng có thể lưu trữ, quản lý và xóa Secret một cách an toàn. FPT Key Vault dễ dàng tích hợp vào ứng dụng, container, VM thông qua SDK và CLI.

### FPT Key Vault version 1.1

**Tính năng mới:**

- Chọn gói khi khởi tạo Vault
- Nâng/hạ cấp gói để phù hợp với nhu cầu sử dụng
- Giám sát lượng request sử dụng của hệ thống
- Hỗ trợ tính năng HA khi khởi tạo Vault
- Backup Vault hằng ngày lên S3
- Hỗ trợ tạo Vault trên region HAN
