---
id: "iam"
title: "Quyền truy cập dịch vụ FPT Database Engine"
description: "Để đảm bảo bảo mật, phân tách trách nhiệm và tuân thủ trong môi trường cloud, FPT Cloud sử dụng mô-đun IAM để kiểm soát "
sidebar_label: "Quyền truy cập dịch vụ FPT Database Engine"
sidebar_position: 12
---

# Iam

### Tổng quan về Identity and Access Management (IAM)
Để đảm bảo bảo mật, phân tách trách nhiệm và tuân thủ trong môi trường cloud, FPT Cloud sử dụng mô-đun IAM để kiểm soát ai có thể thực hiện hành động gì, trên tài nguyên nào.
IAM cho phép quản lý quyền truy cập trên nhiều người dùng, nhóm và các thành phần DBaaS trong FPT Cloud Portal, đồng thời thực thi nguyên tắc phân quyền tối thiểu bằng cách gán Role cho người dùng thông qua User Group, trong phạm vi Tenant và VPC.
**_Nguyên tắc phân quyền tối thiểu_** : chỉ cấp quyền tối thiểu cần thiết để hoàn thành nhiệm vụ. Ví dụ: Nếu chỉ cần xem logs, không cấp quyền thao tác cấu hình hoặc delete.

### Các thành phần chính của IAM  
| Thành phần  | Mô tả  |  
| --- | --- |  
| Role  | Tập hợp các quyền (permissions) xác định những thao tác người dùng có thể thực hiện trên tài nguyên DBaaS.  |  
| Permission  | Một quyền cụ thể cho phép thực hiện một hành động như xem, tạo, sửa hoặc xóa tài nguyên.  |  
| User Group  | Nhóm người dùng chia sẻ cùng vai trò và phạm vi truy cập (Tenant/VPC).  |  
| IAM User  | Định danh cá nhân được thêm vào Tenant và được cấp quyền thông qua Group/Role.  |  

### Mô hình phân quyền cho dịch vụ FPT Database Engine
Để thực hiện các thao tác khởi tạo, vận hành và quản lý database và các dịch vụ liên quan, người dùng cần được cấp các quyền IAM phù hợp. Mỗi thao tác trên dịch vụ FPT Database Engine đều được kiểm soát bởi các quyền tương ứng. Nếu người dùng không được gán quyền cần thiết, thao tác đó sẽ không khả dụng.
Các quyền của dịch vụ FPT Database Engine được phân loại theo từng nhóm nghiệp vụ/chức năng, như được trình bày trong bảng dưới đây:
**1. Nhóm quyền Quản lý dịch vụ FDE Database Engine**  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:ProvisionBackend  | Create  | Quyền kích hoạt (activate) dịch vụ FPT Database Engine trong VPC.  |  
| manageDatabase:DeactiveBackend  | Delete  | Quyền ngừng (deactivate) dịch vụ FPT Database Engine trong VPC.  |  
**2. Nhóm quyền Quản lý Database**  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:List  | View  | Quyền xem danh sách các cơ sở dữ liệu.  |  
| manageDatabase:Create  | Create  | Quyền tạo mới cơ sở dữ liệu.  |  
| manageDatabase:View  | View  | Quyền xem thông tin chi tiết của cơ sở dữ liệu.  |  
| manageDatabase:Management  | Edit  | Quyền vận hành database: start, stop, restart.  |  
| manageDatabase:UpdateResource  | Edit  | Quyền cập nhật tài nguyên cơ sở dữ liệu (CPU, RAM, storage…).  |  
| manageDatabase:Configuration  | Edit  | Quyền thay đổi cấu hình cơ sở dữ liệu (parameter, cấu hình scaling,...)  |  
| FDE:hide_admin_pw  | View  | Quyền chặn xem mật khẩu quản trị của cơ sở dữ liệu.  |  
| manageDatabase:Delete  | Delete  | Quyền xóa cơ sở dữ liệu.  |  
**3. Nhóm quyền Backup & Restore**  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:ListBackup  | View  | Quyền xem thông tin Backup cơ sở dữ liệu.  |  
| manageDatabase:EnableBackup  | Create  | Quyền kích hoạt chức năng Backup & Restore cho cơ sở dữ liệu.  |  
| manageDatabase:DeleteBackup  | Edit  | Quyền vô hiệu hóa chức năng Backup & Restore cho cơ sở dữ liệu.  |  
| manageDatabase:CreateJobBackup  | Create  | Quyền tạo job backup cho cơ sở dữ liệu.  |  
| manageDatabase:ViewJobBackup  | View  | Quyền xem chi tiết job backup.  |  
| manageDatabase:RunNowJobBackup  | Create  | Quyền tạo snapshot backup thủ công cho cơ sở dữ liệu.  |  
| manageDatabase:EditJobBackup  | Edit  | Quyền chỉnh sửa job backup.  |  
| manageDatabase:DeleteJobBackup  | Delete  | Quyền xoá job backup.  |  
| manageDatabase:ListRestore  | View  | Quyền xem danh sách bản backup có thể restore.  |  
| manageDatabase:Restore  | Create  | Quyền khôi phục database từ bản backup hoặc khôi phục theo thời điểm cụ thể.  |  
**4. Nhóm quyền Quản lý DB Proxy**  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:ListProxy  | View  | Quyền xem danh sách DB Proxy cảu cơ sở dữ liệu.  |  
| manageDatabase:CreateProxy  | Create  | Quyền tạo DB Proxy cho cơ sở dữ liệu.  |  
| manageDatabase:DeleteProxy  | Delete  | Quyền xoá DB Proxy cho cơ sở dữ liệu.  |  
**5. Nhóm quyền Notification**  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:ListNotification  | View  | Quyền xem cấu hình nhận thông báo từ hệ thống cho cơ sở dữ liệu.  |  
| manageDatabase:CreateNotification  | Create  | Quyền kích hoạt chức năng nhận thông báo từ hệ thống cho cơ sở dữ liệu.  |  
| manageDatabase:DeleteNotification  | Delete  | Quyền huỷ chức năng nhận thông báo từ hệ thống cho cơ sở dữ liệu.  |  
**6. Nhóm quyền Monitor**  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:Monitor  | View  | Quyền giám sát hiệu năng và trạng thái cơ sở dữ liệu.  |  
**7. Nhóm quyền Reporting**  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:ReportConfig  | Edit  | Quyền cấu hình lịch nhận báo cáo về hoạt động của cơ sở dữ liệu.  |  

### Cấu hình quyền truy cập dịch vụ FPT Database Engine
Để cấu hình quyền truy cập và khai báo nhóm người dùng, vui lòng tham khảo chi tiết tại mục [Quản lý Role](../managed-fpt-database-engines-new/index.md) và [Quản lý User Group](../managed-fpt-database-engines-new/index.md).
