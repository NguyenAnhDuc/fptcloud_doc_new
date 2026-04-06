---
id: "managed-fpt-database-engines-new"
title: "Giới thiệu về FPT Database Engine"
description: "Giới thiệu về FPT Database Engine"
sidebar_label: "Giới thiệu về FPT Database Engine"
sidebar_position: 1
---

# Giới thiệu về FPT Database Engine

  * [ ![](/img/migrated/917117-2dbd42e3.png) Glossary ](javascript: "Glossary")
  * [ ![](/img/migrated/4996664-200-fdb9153b.png) Concepts ](javascript: "Concepts")
  * [ ![](/img/migrated/settings-d31fa71f.png) Thiết lập ban đầu (Initial Setup) ](javascript: "Thiết lập ban đầu \(Initial Setup\)")
  * [ ![](/img/migrated/icon-networking-2645685c.png) Hướng dẫn chi tiết ](javascript: "Hướng dẫn chi tiết")
  * [ ![](/img/migrated/performance-and-benchmark-a5b996e7.png) Peformance & Benchmark ](javascript: "Peformance & Benchmark")
  * [ ![](/img/migrated/1351902-efe1cca3.png) Troubleshooting ](javascript: "Troubleshooting")
  * [ ![](/img/migrated/question-94737ec1.png) Các câu hỏi thường gặp (FAQs) ](javascript: "Các câu hỏi thường gặp \(FAQs\)")
  * [ ![](/img/migrated/managed-fpt-database-engines-new-4b2dfbfd.html) ](javascript:)

Managed – FPT Database Engines
  1. [FPT Cloud Portal](https://fptcloud.com/danh-sach-tai-lieu/ "FPT Cloud Portal")
  2. Managed – FPT Database Engines

Managed – FPT Database Engines

## Giới thiệu về FPT Database Engine
FPT Database Engine là dịch vụ Managed Database (DBaaS) được cung cấp trên nền tảng FPT Cloud, cho phép người dùng triển khai, vận hành và quản trị cơ sở dữ liệu mà không cần trực tiếp quản lý hạ tầng vật lý hoặc các tác vụ vận hành phức tạp. Dịch vụ được thiết kế nhằm đảm bảo tính sẵn sàng cao (High Availability), khả năng mở rộng linh hoạt (Scalability), an toàn dữ liệu (Data Security) và vận hành ổn định, phù hợp cho các hệ thống nghiệp vụ từ môi trường thử nghiệm đến môi trường sản xuất.

## Các hệ quản trị cơ sở dữ liệu được hỗ trợ
FPT Database Engine hỗ trợ nhiều hệ quản trị cơ sở dữ liệu phổ biến, đáp ứng đa dạng nhu cầu ứng dụng và kiến trúc hệ thống của doanh nghiệp, bao gồm:
  * **Relational Databases** : PostgreSQL, MySQL, MariaDB, Microsoft SQL Server
  * **Non-Relational Database** : MongoDB, Cassandra, Redis
  * **Search Engine** : OpenSearch
  * **Data Streaming** : RabbitMQ, Kafka
  * **Time Series Database** : TimescaleDB
  * **OLAP** : Clickhouse

Danh sách hệ quản trị và phiên bản cụ thể có thể thay đổi theo từng thời điểm và được công bố trên Console Portal.

## Tổng quan kiến trúc dịch vụ
FPT Database Engine được triển khai trên hạ tầng Cloud-native của FPT Cloud, tích hợp sẵn các thành phần vận hành và bảo vệ hệ thống, bao gồm:
  * Tài nguyên Compute, Storage và Network được phân bổ tự động.
  * Cơ chế High Availability (HA) và Failover.
  * Hệ thống Backup & Restore
  * Giám sát hiệu năng và trạng thái hệ thống theo thời gian thực

Người dùng tương tác với dịch vụ thông qua Unified Service Portal hoặc OpenAPI, không cần truy cập trực tiếp vào tầng hạ tầng bên dưới.

## Các tính năng chính
  * **Tự động triển khai** : Người dùng có thể nhanh chóng tạo mới Database Instance hoặc Database Cluster chỉ với vài bước cấu hình trên portal, bao gồm lựa chọn engine, phiên bản, cấu hình tài nguyên và chính sách sao lưu.
  * **Sao lưu và khôi phục dữ liệu** : FPT Database Engine hỗ trợ sao lưu tự động và thủ công, cho phép khôi phục dữ liệu nhằm giảm thiểu rủi ro mất dữ liệu.
  * **Mở rộng và quản lý tài nguyên** : Hệ thống cho phép mở rộng tài nguyên theo chiều dọc (Vertical Scaling) hoặc điều chỉnh cấu hình linh hoạt nhằm đáp ứng nhu cầu tải tăng trưởng.
  * **Giám sát và ghi log** : Người dùng có thể theo dõi các chỉ số quan trọng như CPU, Memory, Storage, … thông qua tích hợp với dịch vụ FMON của FPT Cloud.
  * **Bảo mật và tuân thủ** : FPT Database Engine áp dụng các cơ chế bảo mật ở nhiều lớp, bao gồm: 
    * Cách ly tài nguyên theo tenant.
    * Kiểm soát truy cập dựa trên vai trò (RBAC).
    * Tuân thủ các tiêu chuẩn bảo mật của nền tảng FPT Cloud.
  * **Phạm vi dịch vụ và trách nhiệm** : FPT Cloud chịu trách nhiệm quản lý hạ tầng, nền tảng và các tác vụ vận hành cốt lõi của hệ thống cơ sở dữ liệu. Người dùng chịu trách nhiệm quản lý dữ liệu, schema, truy cập ứng dụng và logic nghiệp vụ.

##  Trang chủ 
01Glossary 
02Concepts 
03Thiết lập ban đầu (Initial Setup) 
04Hướng dẫn chi tiết 
05Peformance & Benchmark 
06Troubleshooting 
07Các câu hỏi thường gặp (FAQs) 
08
