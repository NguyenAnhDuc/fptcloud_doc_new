---
id: "db-engine-service"
title: "Quản lý dịch vụ FPT Database Engine"
description: "Nhóm chức năng **Quản lý dịch vụ FPT Database Engine** đóng vai trò quan trọng trong việc kiểm soát khả năng sử dụng dịc"
sidebar_label: "Quản lý dịch vụ FPT Database Engine"
sidebar_position: 16
---

# Db Engine Service

Nhóm chức năng **Quản lý dịch vụ FPT Database Engine** đóng vai trò quan trọng trong việc kiểm soát khả năng sử dụng dịch vụ database trong môi trường FPT Cloud, cho phép quản trị viên kích hoạt (activate) hoặc huỷ kích hoạt (deactivate) dịch vụ FPT Database Engine trong phạm vi VPC. Các thao tác trong nhóm này ảnh hưởng đến toàn bộ khả năng sử dụng database, do đó chỉ nên được cấp cho các vai trò quản trị cấp cao như Tenant Admin hoặc Cloud Platform Admin. Việc phân quyền đúng đối tượng giúp đảm bảo an toàn, ổn định và tuân thủ cho hệ thống DBaaS.
**Quyền cần thiết:**  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:ProvisionBackend  | Create  | Quyền kích hoạt (activate) dịch vụ FPT Database Engine trong VPC.  |  
| manageDatabase:DeactiveBackend  | Delete  | Quyền ngừng (deactivate) dịch vụ FPT Database Engine trong VPC.  |  
**Kích hoạt / Huỷ kích hoạt dịch vụ FPT Database Engine:**
Để quản lý dịch vụ FPT Database Engine, vui lòng tham khảo hướng dẫn chi tiết tại các mục [Kích hoạt FPT Database Engine](../managed-fpt-database-engines-new/index.md) và [Huỷ kích hoạt FPT Database Engine](../managed-fpt-database-engines-new/index.md).