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