---
id: "deactive-db-service"
title: "Huỷ kích hoạt dịch vụ FPT Database Engine"
description: "Việc huỷ kích hoạt dịch vụ FPT Database Engine sẽ ngừng toàn bộ khả năng tạo và quản lý cơ sở dữ liệu trong phạm vi VPC "
sidebar_label: "Huỷ kích hoạt dịch vụ FPT Database Engine"
sidebar_position: 18
pagination_next: null
---

# Deactive Db Service

Việc huỷ kích hoạt dịch vụ FPT Database Engine sẽ ngừng toàn bộ khả năng tạo và quản lý cơ sở dữ liệu trong phạm vi VPC đã chọn. **Thao tác này chỉ có thể thực hiện khi không còn cơ sở dữ liệu nào tồn tại trong VPC**. Các bước thực hiện như sau:
### Bước 1: Truy cập trang Quản lý cơ sở dữ liệu
Thực hiện đăng nhập vào FPT Cloud Portal. Sau khi đăng nhập thành công, từ menu chính, chọn **Database Platform** > **All Databases**. Giao diện **Database Engine Management** sẽ hiển thị như sau:
[![](/img/migrated/deactive-FDE-scaled-ad13f2c5.png)](/img/migrated/deactive-FDE-scaled-ad13f2c5.png)
### Bước 2: Huỷ kích hoạt dịch vụ FPT Database Engine
Trên trang **Database Engine Management** , nhấn **Deactivate** để huỷ kích hoạt dịch vụ. Hệ thống sẽ chuyển sang màn hình xử lý huỷ kích hoạt. Quá trình này có thể mất khoảng 8–10 phút để hoàn tất.
Sau khi huỷ kích hoạt, trạng thái dịch vụ sẽ chuyển sang **Inactive** , và toàn bộ thao tác của dịch vụ FPT Database Engine sẽ bị chặn.
