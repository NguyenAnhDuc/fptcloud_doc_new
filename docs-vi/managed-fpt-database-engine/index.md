---
id: "managed-fpt-database-engine"
title: "Managed FPT Database Engine"
description: "FPT Smart Cloud Database Engine là sản phẩm hỗ trợ triển khai và quản lý database cho doanh nghiệp."
sidebar_label: "Managed FPT Database Engine"
sidebar_position: 1
---

# Managed FPT Database Engine

**FPT Smart Cloud Database Engine** là sản phẩm hỗ trợ triển khai và quản lý database cho doanh nghiệp. Sản phẩm cho phép tạo database (SQL hoặc non-SQL) trên cụm cluster ảo mà không cần cấu hình chi tiết như trên máy chủ vật lý. Các hệ database được hỗ trợ:

- MySQL
- SQL Server
- MongoDB
- MariaDB
- PostgreSQL
- Redis

Mỗi hệ database có nhiều phiên bản để lựa chọn và hỗ trợ chuyển đổi giữa các phiên bản cùng loại.

## Thuật ngữ và định nghĩa

| Thuật ngữ | Định nghĩa |
| --- | --- |
| **Database** | Cơ sở dữ liệu |
| **Relational Database** | Cơ sở dữ liệu quan hệ: các bảng liên kết với nhau qua trường thông tin, sử dụng SQL để truy vấn |
| **Non-relational Database** | Cơ sở dữ liệu phi quan hệ: các bảng phân tán, không ràng buộc nhau, không dùng SQL |
| **SQL (Structured Query Language)** | Ngôn ngữ truy vấn có cấu trúc dùng để lưu trữ, tìm kiếm và xử lý dữ liệu trong database quan hệ |
| **Cluster** | Cụm máy chủ (vật lý hoặc ảo) dùng làm tài nguyên chạy database |
| **Node** | Một máy worker trong cụm cluster |
| **vCPU (cloud)** | Lõi xử lý của máy chủ ảo trên cloud, tính theo GB |
| **RAM (cloud)** | Tổng bộ nhớ của máy chủ ảo trên cloud, tính theo GB |
| **Storage disk (cloud)** | Ổ lưu trữ của máy chủ ảo trên cloud, tính theo GB |
| **Backup Job** | Công việc tự động lưu trữ dữ liệu theo khoảng thời gian định kỳ |
| **Full Backup** | Backup toàn bộ dữ liệu database, bao gồm cả dữ liệu đã sửa đổi từ lần backup trước |
| **Diff Backup** | Chỉ backup các phần dữ liệu thay đổi hoặc tạo mới so với bản backup gần nhất |
| **Restore** | Sử dụng bản backup để tạo database trên cluster mới với dữ liệu đã sao lưu |
