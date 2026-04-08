---
id: "db-manage-operate"
title: "Khởi tạo và vận hành cơ sở dữ liệu"
description: "Nhóm chức năng **Khởi tạo và vận hành cơ sở dữ liệu** cho phép người dùng khởi tạo, cấu hình, vận hành và xoá các cơ sở "
sidebar_label: "Khởi tạo và vận hành cơ sở dữ liệu"
sidebar_position: 19
---

# Khởi tạo và vận hành cơ sở dữ liệu

Nhóm chức năng **Khởi tạo và vận hành cơ sở dữ liệu** cho phép người dùng khởi tạo, cấu hình, vận hành và xoá các cơ sở dữ liệu trong môi trường FPT Database Engine.
Các thao tác trong nhóm này áp dụng ở cấp database resource và yêu cầu người dùng được gán các quyền IAM tương ứng.
**Điều kiện tiên quyết:**
  * Dịch vụ FPT Database Engine đã được kích hoạt (activate) trong VPC.
  * Người dùng được gán role có các quyền quản lý và vận hành cơ sở dữ liệu.

**Quyền cần thiết:**  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:List  | View  | Quyền xem danh sách các cơ sở dữ liệu.  |  
| manageDatabase:Create  | Create  | Quyền tạo mới cơ sở dữ liệu.  |  
| manageDatabase:View  | View  | Quyền xem thông tin chi tiết của cơ sở dữ liệu.  |  
| manageDatabase:Management  | Edit  | Quyền vận hành database: start, stop, restart.  |  
| FDE:hide_admin_pw  | View  | Quyền chặn xem mật khẩu quản trị của cơ sở dữ liệu.  |  
| manageDatabase:Delete  | Delete  | Quyền xóa cơ sở dữ liệu.  |  
Để quản lý và vận hành cơ sở dữ liệu, vui lòng tham khảo hướng dẫn chi tiết tại các mục:
  * [Xem danh sách cơ sở dữ liệu](/vi/docs/fpt-database-engine/managed-fpt-database-engines-new/)/: Hiển thị danh sách các cơ sở dữ liệu bạn có quyền truy cập, bao gồm trạng thái, cấu hình và các thông tin quan trọng.
  * [Khởi tạo cơ sở dữ liệu](/vi/docs/fpt-database-engine/managed-fpt-database-engines-new/)/: Khởi tạo một cơ sở dữ liệu mới bằng cách lựa chọn hệ quản trị, phiên bản, flavor và các cấu hình cần thiết khác.
  * [Kết nối cơ sở dữ liệu](/vi/docs/fpt-database-engine/managed-fpt-database-engines-new/)/: Tìm hiểu cách lấy thông tin kết nối và kết nối tới cơ sở dữ liệu từ ứng dụng hoặc các công cụ client.
  * [Vận hành cơ sở dữ liệu](/vi/docs/fpt-database-engine/managed-fpt-database-engines-new/)/: Thực hiện các thao tác vận hành phổ biến như khởi động, dừng, khởi động lại, quản lý cấu hình và theo dõi cơ sở dữ liệu.
  * "7.2.5. Nâng cấp phiên bản cơ sở dữ liệu": Nâng cấp phiên bản hệ quản trị cơ sở dữ liệu để sử dụng các tính năng mới, cải tiến hiệu năng và bản vá bảo mật.
