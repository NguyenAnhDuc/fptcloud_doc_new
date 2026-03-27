---
id: "backup-mgmt"
title: "Quản lý dịch vụ Backup"
description: "Mục này hướng dẫn người dùng các bước chi tiết để thực hiện các nghiệp vụ liên quan đến dịch vụ Backup, bao gồm kích hoạ"
sidebar_label: "Quản lý dịch vụ Backup"
sidebar_position: 27
---

# Backup Mgmt

Mục này hướng dẫn người dùng các bước chi tiết để thực hiện các nghiệp vụ liên quan đến dịch vụ Backup, bao gồm kích hoạt, điều chỉnh và huỷ dịch vụ Backup.
### 1. Kích hoạt dịch vụ Backup
Để kích hoạt dịch vụ Backup, bạn có thể thực hiện trực tiếp trong bước cấu hình dịch vụ bổ sung (Additional Service) khi khởi tạo cơ sở dữ liệu (xem chi tiết tại mục [Khởi tạo cơ sở dữ liệu](../managed-fpt-database-engines-new/index.md) hoặc kích hoạt sau khi cỡ sở dữ liệu đã được khởi tạo theo hướng dẫn dưới đây.
#### Điều kiện tiên quyết
Điều kiện cần để kích hoạt dịch vụ Backup là phải bật dịch vụ **Notification** và hoàn tất cấu hình danh sách email hoặc Telegram dùng để nhận cảnh báo liên quan đến hoạt động backup trước. Nếu chưa cấu hình Notification sẽ hiển thị hộp thoại như sau:
[![](/img/migrated/DBaaS_BackupDB_noti_warning-e17645618511-fb3b9b39.png)](/img/migrated/DBaaS_BackupDB_noti_warning-e17645618511-fb3b9b39.png)
Bấm **Go to Notification** để đến tab chức năng **Notification** , người dùng thao tác như hướng dẫn tại mục **Notification** để hoàn tất cấu hình cảnh báo.
#### Bước 1: Truy cập màn hình Backup
Trên thanh menu, chọn **Database Platform** > Chọn menu **All Database** hoặc chọn menu tương ứng với nhóm cơ sở dữ liệu phù hợp cluster cần kích hoạt dịch vụ backup > click vào Cluster ID > chọn tab **Backup** để vào màn hình quản lý dịch vụ backup.
[![](/img/migrated/DBaaS_BackupDB_view_inactive-scaled-5a5defe2.png)](/img/migrated/DBaaS_BackupDB_view_inactive-scaled-5a5defe2.png)
#### Bước 2: Kích hoạt dịch vụ Backup
Sau khi cụm cơ sở dữ liệu được tạo thành công và dịch vụ Backup chưa được kích hoạt, trạng thái của dịch vụ sẽ mặc định là **Inactive**. Người dùng có thể nhấp vào biểu tượng “**Enable Backup** ” (hình răng cưa) để mở hộp thoại và tiến hành kích hoạt dịch vụ. Tùy theo loại database engine và VPC là VMWare hay Open Stack mà một số trường thông tin có thể hiển thị khác nhau.
[![](/img/migrated/DBaaS_BackupDB_enable-e1764561767179-15ed20cd.png)](/img/migrated/DBaaS_BackupDB_enable-e1764561767179-15ed20cd.png)
Mô tả ý nghĩa và cách điền giá trị cho các trường trên màn hình:
  * **Capacity (GB)** : Nhập dung lượng lưu trữ dữ liệu backup cho database, tính theo đơn vị GB, với giá trị tối thiểu là 10 GB.
  * **Storage Policy** : Chọn chính sách lưu trữ (Storage Class) cho backup service. Trường này chỉ hiển thị nếu VPC chạy trên platform là VMWare.
  * **Enable PITR** : Chọn bật/không bật tính năng PITR cho dịch vụ backup. **Tính năng này mới chỉ được hỗ trợ trên loại engine là PostgreSQL.**

Sau khi nhập đầy đủ thông tin nhấn button **Save** để xác nhận kích hoạt dịch vụ backup.
Quá trình kích hoạt dịch vụ Backup có thể kéo dài từ 5–10 phút và sẽ hiển thị thanh tiến trình **Processing**. Sau khi kích hoạt thành công, dịch vụ Backup sẽ chuyển sang trạng thái **Active** với các thông số đã được thiết lập.
Để thực hiện sao lưu dữ liệu cho cơ sở dữ liệu, người dùng cần tạo các backup job bao gồm Full Backup và Differential Backup nhằm thiết lập lịch sao lưu định kỳ. Vui lòng tham khảo hướng dẫn chi tiết tại mục Quản lý job backup.
### 2. Điều chỉnh dịch vụ Backup
Trong quá trình sử dụng, nếu muốn điều chỉnh cài đặt đã thiết lập cho dịch vụ Backup, thực hiện như sau:
Tại màn hình quản lý dịch vụ Backup, nhấp vào nút **Update Backup** (biểu tượng hình bút chì) cạnh section **Backup Service** để mở hộp thoại cập nhật cấu hình dịch vụ backup.
[![Alt text](/img/migrated/DBaaS_BackupDB_edit_popup-e1764562966549-d646a978.png)](/img/migrated/DBaaS_BackupDB_edit_popup-e1764562966549-d646a978.png)
Nhập các thông tin cần thay đổi và nhấn Save để xác nhận. Quá trình cập nhật có thể mất khoảng 5–10 phút; trong thời gian này, dịch vụ Backup sẽ hiển thị trạng thái **Updating**. Sau khi cập nhật thành công, dịch vụ sẽ chuyển về trạng thái **Active** với các cấu hình theo giá trị đã được điều chỉnh.
### 3. Huỷ dịch vụ Backup
⚠️
**Cảnh báo:**  
Việc huỷ dịch vụ Backup sẽ xóa toàn bộ dữ liệu đã được sao lưu, đồng thời hủy tất cả các job backup hiện có. Sau khi xóa, bạn không thể thực hiện restore hoặc khôi phục cơ sở dữ liệu theo thời điểm (PITR).  

Để huỷ dịch vụ Backup, tại màn hình quản lý dịch vụ Backup, nhấp vào nút **Delete Backup** (biểu tượng hình thùng rác) cạnh section **Backup Service** để mở hộp thoại xác nhận xoá. Nhập “**delete** ” và bấm **Confirm** để xác nhận huỷ dịch vụ backup. Quá trình này có thể kéo dài từ 5–10 phút, trong thời gian này dịch vụ Backup sẽ hiển thị trạng thái **Deleting**. Sau khi xử lý thành công, dịch vụ sẽ chuyển về trạng thái **Inactive**.