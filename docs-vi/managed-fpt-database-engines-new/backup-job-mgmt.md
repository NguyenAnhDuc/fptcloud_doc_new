---
id: "backup-job-mgmt"
title: "Quản lý Job Backup"
description: "Mục này hướng dẫn người dùng các bước chi tiết để thực hiện các nghiệp vụ liên quan đến quản lý backup job, bao gồm tạo "
sidebar_label: "Quản lý Job Backup"
sidebar_position: 28
---

# Backup Job Mgmt

Mục này hướng dẫn người dùng các bước chi tiết để thực hiện các nghiệp vụ liên quan đến quản lý backup job, bao gồm tạo job Full Backup, tạo job Differential Backup, chạy, cập nhật và xoá backup job.
### 1. Tạo Job Backup Full
Để thực hiện sao lưu (backup) cho cơ sở dữ liệu, sau khi kích hoạt dịch vụ backup, bạn cần tạo một job để chạy sao lưu toàn bộ cơ sở dữ liệu định kỳ. Thực hiện theo các bước sau:
Tại màn hình quản lý dịch vụ Backup, nhấp vào nút **Add Full Backup Job** (biểu tượng dấu cộng trong phần **Full Backup Job**) để bắt đầu tạo job sao lưu toàn bộ cơ sở dữ liệu.
Hộp thoại cấu hình job hiển thị như sau:
[![](/img/migrated/DBaaS_BackupDB_full_bk_job_add_popuo-f80ee1ef.png)](/img/migrated/DBaaS_BackupDB_full_bk_job_add_popuo-f80ee1ef.png)
Mô tả ý nghĩa và cách điền giá trị cho các trường trên màn hình:
  * **Backup Job Name** : Nhập tên job backup, với độ dài từ 6–25 ký tự và chỉ được chứa chữ cái, chữ số, khoảng trắng, dấu gạch ngang (-) và dấu gạch dưới (_).
  * **Backup Retention** : Nhập số lượng bản backup cần lưu giữ với giá trị là một số nguyên dương. Khi một bản backup full bị xóa theo chính sách lưu trữ thì tất cả các bản backup different và archived log đi theo nó sẽ bị xóa hoàn toàn.
  * **Hour / Minute / Day of Week** : Thiết lập lịch chạy backup (giờ, phút, ngày trong tuần). **Lưu ý** : Đối với engine Kafka, thao tác backup có thể gây gián đoạn tạm thời. Bạn nên lên lịch chạy backup vào khung thời gian ít tải để hạn chế ảnh hưởng đến dịch vụ.

Sau khi điền đầy đủ thông tin, bạn có thể nhấn **Create** để tạo job sao lưu mới. Quá trình này kéo dài từ 5 - 10 phút và sẽ hiển thị job backup ở trạng thái **Creating**. Sau khi tạo thành công, job backup hiển thị ở trạng thái **Ready** với các thông số đã thiết lập cho job và sẵn sàng chạy backup toàn bộ cơ sở dữ liệu theo lịch đã thiết lập.
### 2. Tạo Job Backup Diff
#### Khuyến nghị
FPT Cloud khuyến nghị khách hàng cấu hình lịch sao lưu sao cho mỗi tuần có ít nhất một bản Full Backup và thực hiện Differential Backup vào các ngày còn lại, đặc biệt đối với các cơ sở dữ liệu có dung lượng lớn.
#### Điều kiện tiên quyết
Người dùng phải tạo job Full Backup trước khi có thể tạo job Differential Backup.
#### Tạo Job
Để tạo Differential Backup Job nhằm sao lưu các thay đổi của cơ sở dữ liệu, tại màn hình quản lý dịch vụ Backup, nhấp vào **Add Diff Backup Job** (biểu tượng dấu cộng trong phần **Diff Backup Job**) để mở hộp thoại cấu hình job.
Các bước cấu hình tương tự như khi tạo Full Backup Job.
**Lưu ý:** Chính sách retention của Differential Backup sẽ tuân theo retention của Full Backup Job tương ứng. Khi một bản Full Backup bị xoá theo chính sách lưu trữ, tất cả các Differential Backup liên quan cũng sẽ bị xoá hoàn toàn.
### 3. Chạy Job Backup
Thông thường, sau khi được thiết lập thành công, job backup sẽ tự động chạy định kỳ theo lịch đã cài đặt và tạo ra các bản sao lưu (restore points) để phục vụ cho việc khôi phục cơ sở dữ liệu (tham khảo chức năng Restore). Nếu người dùng cần tạo bản snapshot cơ sở dữ liệu, có thể thực hiện chạy job backup theo các bước sau:
Trên màn hình quản lý dịch vụ Backup, nhấp vào nút **Run Now** (biểu tượng mũi tên) tương ứng với job backup cần chạy để bắt đầu thực hiện sao lưu cơ sở dữ liệu.
Hệ thống xuất hiện hộp thoại xác nhận chạy job. Nhập “**run** ” để xác nhận một lần nữa và bấm **Confirm**. Sau khi thực hiện xong sẽ sinh ra một bản backup tương ứng với một restore point trong màn Restore. Thông tin backup job chạy thành công hay lỗi cũng sẽ được cập nhật tại bảng **Backup Request** trên màn hình quản lý dịch vụ Backup
**Lưu ý** : Đối với engine Kafka, thao tác backup có thể gây gián đoạn tạm thời. Bạn nên chạy backup vào khung thời gian ít tải để hạn chế ảnh hưởng đến dịch vụ.
### 4. Cập nhật Job Backup
Khi cần điều chỉnh các cấu hình đã thiết lập cho backup job, tại màn hình quản lý dịch vụ Backup, nhấp vào nút **Update Backup Job** (biểu tượng bút chì tương ứng với job cần cập nhật) để mở popup cập nhật cấu hình job. 
Hộp thoại Update Job hiển thị tương tự như khi tạo Backup Job. Cập nhật các thông tin cần thay đổi và nhấn **Update** để lưu cấu hình mới.
### 5. Xoá Job Backup
Để xóa job backup không còn nhu cầu sử dụng, tại màn hình quản lý dịch vụ Backup, nhấp vào nút **Delete Job** (biểu tượng thùng rác) tương ứng với job backup cần xoá.
Màn hình xuất hiện popup Delete Backup Job. Nhập thông tin theo yêu cầu và bấm **Confirm** để xác nhận xoá job.
**Lưu ý** : Bạn chỉ có thể xóa job backup full khi job backup diff đã được xóa.
