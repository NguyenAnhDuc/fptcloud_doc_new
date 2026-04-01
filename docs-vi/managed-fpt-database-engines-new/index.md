---
id: "managed-fpt-database-engines-new"
title: "Giới thiệu về FPT Database Engine"
description: ""
sidebar_label: "Giới thiệu về FPT Database Engine"
sidebar_position: 1
---

# Managed – FPT Database Engines

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

![FPT Cloud](/img/migrated/footer-logo-f6780be4.png)
**Hotline:[1900 638 399](tel:1900%20638%20399)**
Địa chỉ:
**Hà Nội:**[FPT Tower, Số 10 Phạm Văn Bạch, Phường Cầu Giấy](https://maps.app.goo.gl/BtHa6J7ToZf7RZbF6)  
**TP. Hồ Chí Minh:** Tòa nhà PJICO, 186 Điện Biên Phủ, Phường Xuân Hòa  
**Tokyo:** 33F, Sumitomo Fudosan Tokyo Mita Garden Tower, 3-5-19 Mita, Minato-ku  

Email: support@fptcloud.com
  * [ ](https://www.facebook.com/fptsmartcloud)
  * [ ](https://www.linkedin.com/company/fpt-cloud/)
  * [ ](https://www.youtube.com/channel/UCJM51jaizo0jSbv35HD2nYA)

[ ![DMCA compliant image](/img/migrated/_dmca_premi_badge_4-f0377188.png) ](https://www.dmca.com/compliance/fptcloud.com "DMCA Compliance information for fptcloud.com")
Về chúng tôi 
  * [ Giới thiệu chung ](https://fptcloud.com/gioi-thieu/ "Giới thiệu chung")
  * [ Đối tác & Khách hàng ](https://fptcloud.com/doi-tac/ "Đối tác & Khách hàng")
  * [ Tin tức - Sự kiện ](https://fptcloud.com/blog/ "Tin tức - Sự kiện")
  * [ Tuyển dụng ](https://fptsmartcloud.com/co-hoi-nghe-nghiep/ "Tuyển dụng")
  * [ Liên hệ ](https://fptcloud.com/lien-he/ "Liên hệ")

Dịch vụ 
  * [ FPT Cloud Server ](https://fptcloud.com/product/cloud-server/ "FPT Cloud Server")
  * [ FPT Backup Service ](https://fptcloud.com/product/backup-service/ "FPT Backup Service")
  * [ FPT Disaster Recovery Services ](https://fptcloud.com/product/disaster-recovery-service/ "FPT Disaster Recovery Services")
  * [ FPT Object storage ](https://fptcloud.com/product/object-storage/ "FPT Object storage")
  * [ FPT Kubernetes Engine ](https://fptcloud.com/product/kubernetes-engine/ "FPT Kubernetes Engine")
  * [ FPT Monitoring ](https://fptcloud.com/product/monitoring/ "FPT Monitoring")
  * [ FPT Load Balancer ](https://fptcloud.com/product/load-balancer/ "FPT Load Balancer")
  * [ FPT Next-Gen Firewall ](https://fptcloud.com/product/fpt-next-gen-firewall/ "FPT Next-Gen Firewall")
  * [ FPT Cloud Desktop ](https://fptcloud.com/product/cloud-desktop/ "FPT Cloud Desktop")

Điều khoản & Chính sách 
  * [ Điều Khoản Sử dụng ](https://fptcloud.com/chinh-sach/#policy-tab-1 "Điều Khoản Sử dụng")
  * [ Chính sách Bảo vệ quyền riêng tư ](https://fptcloud.com/chinh-sach/#policy-tab-1 "Chính sách Bảo vệ quyền riêng tư ")
  * [ Báo cáo lỗ hổng bảo mật hoặc quyền riêng tư ](https://fptcloud.com/chinh-sach/#policy-tab-3 "Báo cáo lỗ hổng bảo mật hoặc quyền riêng tư")
  * [ Chính sách Bảo vệ Dữ liệu Cá nhân ](https://fptcloud.com/chinh-sach/#policy-tab-5 "Chính sách Bảo vệ Dữ liệu Cá nhân")
  * [ Biểu mẫu Báo Cáo Rủi Ro hoặc Vi Phạm ](https://fptcloud.com/chinh-sach/#policy-tab-6 "Biểu mẫu Báo Cáo Rủi Ro hoặc Vi Phạm")

Đăng ký nhận tin 
Gửi 

  * [ Liên hệ ](tel:1900%20638%20399)
Email

Chúng tôi quan tâm đến sự riêng tư của bạn
Trang web này sử dụng cookie để cải thiện trải nghiệm người dùng. Bằng cách sử dụng trang web của chúng tôi, bạn đồng ý với tất cả cookie theo [Chính sách bảo mật](https://fptcloud.com/chinh-sach/#policy-tab-1) của chúng tôi
[Chỉ những cookie cần thiết](javascript:void\(0\);) [Cài đặt](javascript:void\(0\);) [Tôi đồng ý](javascript:void\(0\);)
[ ](tel:1900638399 "Gọi 1900638399")