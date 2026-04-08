---
id: "fde-glossary"
title: "Thuật ngữ chung về Cloud & DBaaS"
description: "Mục này cung cấp các định nghĩa và giải thích rõ ràng về các thuật ngữ và khái niệm chính thường được sử dụng trong nền "
sidebar_label: "Thuật ngữ chung về Cloud & DBaaS"
sidebar_position: 2
---

# Thuật ngữ chung về Cloud & DBaaS

Mục này cung cấp các định nghĩa và giải thích rõ ràng về các thuật ngữ và khái niệm chính thường được sử dụng trong nền tảng FPT Database Engine. Dù bạn là người mới bắt đầu hay đã có kinh nghiệm, việc hiểu rõ các thuật ngữ này sẽ giúp bạn tận dụng tối đa các tính năng và khả năng mà dịch vụ của chúng tôi mang lại.

### Thuật ngữ chung về Cloud & DBaaS  
| Thuật ngữ  | Định nghĩa  |  
| --- | --- |  
| Database  | Tập hợp dữ liệu có cấu trúc hoặc bán cấu trúc, được lưu trữ và quản lý để phục vụ truy xuất và xử lý thông tin.  |  
| SQL  | Ngôn ngữ tiêu chuẩn dùng để định nghĩa, truy vấn và thao tác dữ liệu trong CSDL quan hệ.  |  
| Relational Database  | Cơ sở dữ liệu tổ chức dữ liệu dưới dạng bảng có quan hệ với nhau, tuân theo mô hình quan hệ.  |  
| Non-relational Database  | Cơ sở dữ liệu không sử dụng mô hình bảng quan hệ, thường áp dụng cho dữ liệu lớn, linh hoạt.  |  
| Virtual CPU (vCPU)  | Đơn vị xử lý ảo được cấp phát cho tài nguyên compute trong môi trường cloud.  |  
| RAM  | Bộ nhớ tạm thời được cấp phát cho workload cloud.  |  
| Storage Disk  | Tài nguyên lưu trữ dữ liệu dạng block hoặc file cho hệ thống cloud.  |  
| Compute  | Tài nguyên xử lý bao gồm CPU và RAM dùng để chạy ứng dụng hoặc dịch vụ.  |  
| Flavor  | Cấu hình định sẵn của tài nguyên compute (vCPU, RAM) cho database instance.  |  
| Cloud Computing  | Mô hình cung cấp tài nguyên công nghệ thông tin (compute, storage, network) theo nhu cầu thông qua Internet.  |  
| Database-as-a-Service (DBaaS)  | Dịch vụ cơ sở dữ liệu được quản lý, cho phép người dùng sử dụng cơ sở dữ liệu mà không cần vận hành hạ tầng.  |  
| Managed Database  | Dịch vụ cơ sở dữ liệu trong đó nhà cung cấp chịu trách nhiệm triển khai, vận hành, bảo trì và sao lưu hệ thống.  |  
| Region  | Khu vực địa lý chứa một hạ tầng độc lập  |  
| Virtual Private Cloud (VPC)  | Một mạng ảo tách biệt tài nguyên đám mây theo tenant.  |  
| Subnet  | Một phần mạng con của VPC xác định dải IP cho tài nguyên.  |  
| CIDR  | Cách biểu diễn dải IP được dùng để định nghĩa subnet.  |  
| Static IP Pool  | Tập IP dự trữ trong subnet dùng cho cấp phát cố định.  |  

### Thuật ngữ về kiến trúc và triển khai cơ sở dữ liệu  
| Thuật ngữ  | Định nghĩa  |  
| --- | --- |  
| Database Instance  | Một phiên bản database đơn lẻ chạy trên tài nguyên được cấp phát.  |  
| Database Cluster  | Nhóm các database instance hoạt động cùng nhau nhằm đảm bảo HA và mở rộng.  |  
| Primary Node  | Node chịu trách nhiệm xử lý ghi dữ liệu.  |  
| Standby / Replica  | Node sao chép dữ liệu từ primary để dự phòng hoặc đọc.  |  
| Read Replica  | Replica được tối ưu cho truy vấn đọc.  |  
| Failover  | Quá trình tự động hoặc thủ công chuyển vai trò sang node dự phòng khi xảy ra sự cố.  |  
| High Availability (HA)  | Kiến trúc đảm bảo hệ thống hoạt động liên tục với thời gian gián đoạn tối thiểu.  |  
| Database Proxy  | Thành phần trung gian định tuyến kết nối ứng dụng đến cơ sở dữ liệu phù hợp.  |  

### Thuật ngữ về Sao lưu và Khôi phục  
| Thuật ngữ  | Định nghĩa  |  
| --- | --- |  
| Backup  | Bản sao dữ liệu được tạo để phục vụ khôi phục khi xảy ra sự cố.  |  
| Full Backup  | Sao lưu toàn bộ dữ liệu tại một thời điểm xác định.  |  
| Incremental Backup  | Sao lưu chỉ các thay đổi kể từ lần backup trước.  |  
| Archived Log  | Log giao dịch được lưu trữ để phục vụ PITR.  |  
| Retention Policy  | Quy định số lượng bản backup toàn bộ dữ liệu được lưu trữ.  |  
| Backup Job  | Tác vụ sao lưu database được thực hiện theo lịch hoặc theo yêu cầu.  |  
| Restore  | Quá trình phục hồi dữ liệu database từ bản sao lưu  |  
| Point-in-Time Recovery (PITR)  | Khả năng khôi phục database về một thời điểm cụ thể.  |  

### Thuật ngữ về Bảo mật và Kiểm soát truy cập  
| Thuật ngữ  | Định nghĩa  |  
| --- | --- |  
| Role-Based Access Control (RBAC)  | Cơ chế phân quyền dựa trên vai trò người dùng.  |  
| Identity and Access Management (IAM)  | Hệ thống quản lý danh tính và quyền truy cập.  |  

### Thuật ngữ về Giám sát và Vận hành  
| Thuật ngữ  | Định nghĩa  |  
| --- | --- |  
| Monitoring  | Quá trình theo dõi trạng thái và hiệu năng hệ thống.  |  
| Metrics  | Dữ liệu đo lường hiệu năng như CPU, Memory, IOPS.  |  
| Alert  | Thông báo được gửi khi vượt ngưỡng cấu hình.  |  
| Log  | Bản ghi sự kiện và hoạt động của hệ thống.  |  
| Maintenance Window  | Khoảng thời gian dành cho hoạt động bảo trì hệ thống.  |  

### Thuật ngữ về Thanh toán và Dịch vụ  
| Thuật ngữ  | Định nghĩa  |  
| --- | --- |  
| Pay-as-you-go (PAYG)  | Mô hình tính phí dựa trên tài nguyên thực tế sử dụng.  |  
| SLA (Service Level Agreement)  | Cam kết mức độ dịch vụ giữa nhà cung cấp và khách hàng.  |  
| Provisioning  | Quá trình tạo và cấu hình tài nguyên dịch vụ.  |  
| Deprovisioning  | Quá trình xoá hoặc giải phóng tài nguyên đã cấp phát.  |
