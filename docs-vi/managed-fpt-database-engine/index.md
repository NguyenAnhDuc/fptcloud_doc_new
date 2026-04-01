---
id: "managed-fpt-database-engine"
title: "1. Giới thiệu về FPT Smart Cloud Database Engine:"
description: ""
sidebar_label: "1. Giới thiệu về FPT Smart Cloud Database Engine:"
sidebar_position: 1
---

# Managed – FPT Database Engine

  * [ ![](/img/migrated/initial-setup-714537aa.png) Initial Setup ](javascript: "Initial Setup")
  * [ ![](/img/migrated/icon-database-service-a532361d.png) Pre- requirement ](javascript: "Pre- requirement")
  * [ ![](/img/migrated/quick-starts-c3998e52.png) Hướng dẫn chi tiết (Tutorials) ](javascript: "Hướng dẫn chi tiết \(Tutorials\)")
Managed – FPT Database Engine
  1. [FPT Cloud Portal](https://fptcloud.com/danh-sach-tai-lieu/ "FPT Cloud Portal")
  2. Managed – FPT Database Engine

Managed – FPT Database Engine
### 1. Giới thiệu về FPT Smart Cloud Database Engine:
**FPT Smart Cloud Database Engine** là sản phẩm phục vụ cho việc triển khai và quản lý database cho doanh nghiệp.
Sản phẩm này cho phép tạo một database (SQL, non-SQL) trên cụm cluster ảo mà không cần setup chi tiết các thông số như phải làm trên máy chủ vật lý. Các hệ database mà FCI cung cấp bao gồm:
  * MySQL
  * SQL Server
  * MongoDB
  * MariaDB
  * PostgreSQL
  * Redis

Mỗi hệ database đều có nhiều version cho KH lựa chọn và FCI sẵn sàng hỗ trợ việc chuyển đổi giữa các version với cùng 1 loại database.
### 2. Thuật ngữ & Định nghĩa:  
|   |   |  
| --- | --- |  
| **Thuật ngữ**  | **Định nghĩa**  |  
| **Database**  | Cơ sở dữ liệu  |  
| **Relational Database**  | Cơ sở dữ liệu có quan hệ: các bảng trong cơ sở dữ liệu có mối liên quan tới nhau thông qua 1 trường thông tin nào đó. Sử dụng SQL để truy vấn  |  
| **Non-relational Database**  | Cơ sở dữ liệu phi quan hệ: Các bảng trong cơ sở dữ liệu phân tán và không bị ràng buộc với nhau. Không dùng SQL để truy vấn  |  
| **SQL (Structure querry language)**  | Ngôn ngữ truy vấn có cấu trúc: Ngôn ngữ lập trình phục vụ việc lưu trữ – tìm kiếm – xử lý thông tin trong các loại database có quan hệ  |  
| **Cluster**  | Là 1 cụm máy chủ (vật lý hoặc ảo) dùng làm tài nguyên để chạy 1 chương trình gì đó (ở đây là database)  |  
| **Node**  | Là 1 máy worker trong cụm cluster  |  
| **VCPU (cloud)**  | Là lõi xử lý của 1 máy chủ ảo trên cloud. Tính theo gigabite (GB)  |  
| **RAM (cloud)**  | Là tổng bộ nhớ ngẫu nhiên của máy chủ ảo trên cloud. Tính theo GB  |  
| **Storage disk (cloud)**  | Là ổ lưu trữ của máy chủ ảo trên cloud. Tính theo GB  |  
| **Backup Job**  | Tạo ra 1 công việc tự động lưu trữ dữ liệu theo 1 khoảng thời gian nhất định  |  
| **Full Backup**  | Là việc backup toàn bộ data của database: Bao gồm cả data cũ lẫn data đã sửa đổi kể từ lần backup trước  |  
| **Diff Backup**  | Là việc chỉ backup các phần data được thay đổi hoặc tạo mới so với bản backup gần nhất  |  
| **Restore**  | Là việc sử dụng 1 bản sao lưu đã backup dữ liệu để tạo 1 database trên 1 cụm cluster mới với thông tin đã sao lưu  |  
##  Trang chủ 
01Initial Setup 
02Pre- requirement 
03Hướng dẫn chi tiết (Tutorials)
