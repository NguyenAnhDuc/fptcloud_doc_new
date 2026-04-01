---
id: "on-off-pitr"
title: "Bật/tắt PITR"
description: "Chức năng **Point-in-Time Recovery (PITR)** cho phép người dùng khôi phục cơ sở dữ liệu về một thời điểm cụ thể trong qu"
sidebar_label: "Bật/tắt PITR"
sidebar_position: 29
---

# On Off Pitr

Chức năng **Point-in-Time Recovery (PITR)** cho phép người dùng khôi phục cơ sở dữ liệu về một thời điểm cụ thể trong quá khứ, giúp đảm bảo tính liên tục và độ tin cậy của dữ liệu.
Hiện tại, **FPT Cloud hỗ trợ PITR cho engine PostgreSQL**. Phần hướng dẫn này cung cấp các bước chi tiết để bật hoặc tắt chức năng PITR cho PostgreSQL.
### 1. Bật PITR
Người dùng có thể bật chức năng PITR cho PostgreSQL ngay khi kích hoạt dịch vụ Backup (tham khảo chi tiết tại mục [Kích hoạt dịch vụ Backup](../managed-fpt-database-engines-new/index.md)) hoặc bật sau khi dịch vụ Backup đã được kích hoạt theo hướng dẫn bên dưới.
#### Điều kiện tiên quyết:
Để kích hoạt PITR, cơ sở dữ liệu bắt buộc phải có ít nhất một job backup full đã được tạo. Vui lòng cấu hình job backup full trước khi tiếp tục bật PITR.
Trong trường hợp bật PITR khi chưa cấu hình Full Backup Job, hệ thống sẽ hiển thị hộp thoại cảnh báo như sau:
[![](/img/migrated/DBaaS_BackupDB_pitr_enable_warning-17bc4181.png)](/img/migrated/DBaaS_BackupDB_pitr_enable_warning-17bc4181.png)
Chọn **Configure Now** để hoàn tất việc tạo job backup full trước khi tiếp tục thao tác kích hoạt PITR.
#### Thao tác thực hiện:
Tại màn hình quản lý dịch vụ Backup, nhấp vào nút **Enable PITR** (biểu tượng hình răng cưa bên cạnh trạng thái PITR):
[![](/img/migrated/DBaaS_BackupDB_pitr_enable-bec47e5a.png)](/img/migrated/DBaaS_BackupDB_pitr_enable-bec47e5a.png)
Hệ thống sẽ hiển thị hộp thoại xác nhận:
[![](/img/migrated/DBaaS_BackupDB_pitr_enable_popup-0e361ade.png)](/img/migrated/DBaaS_BackupDB_pitr_enable_popup-0e361ade.png)
Việc bật PITR sẽ làm tăng dung lượng lưu trữ sử dụng và phát sinh thêm chi phí. Người dùng cần đánh giá và dự trù dung lượng phát sinh trước khi tiếp tục.
Để bật tính năng, chọn checkbox xác nhận và nhấn **Confirm**.
Sau khi hoàn tất, tính năng PITR chưa có hiệu lực ngay mà cần chờ hệ thống tạo Full Backup tiếp theo. Khi PITR đã sẵn sàng, người dùng có thể khôi phục cơ sở dữ liệu về bất kỳ thời điểm nào kể từ mốc Full Backup đó. Các thay đổi dữ liệu phát sinh trước thời điểm Full Backup này sẽ không nằm trong phạm vi bảo vệ của PITR và không thể khôi phục.
### 2. Tắt PITR
Để tắt chức năng PITR, tại màn hình quản lý dịch vụ Backup, nhấp vào nút **Disbale PITR** (biểu tượng hình răng cưa bên cạnh trạng thái PITR). Hệ thống hiển thị hộp thoại xác nhận:
[![](/img/migrated/DBaaS_BackupDB_pitr_disable_popup-385a70da.png)](/img/migrated/DBaaS_BackupDB_pitr_disable_popup-385a70da.png)
Nhập “**disable** ” và nhấn **Confirm** để xác nhận. Sau khi PITR bị tắt, người dùng không thể khôi phục cơ sở dữ liệu về các thời điểm trong quá khứ.
