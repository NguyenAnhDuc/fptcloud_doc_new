---
id: "push-s3"
title: "Đẩy dữ liệu backup lên S3"
description: "Chức năng **Đẩy dữ liệu backup lên S3** cho phép người dùng đẩy các file sao lưu của cơ sở dữ liệu lên kho lưu trữ S3 tư"
sidebar_label: "Đẩy dữ liệu backup lên S3"
sidebar_position: 31
---

# Push S3

Chức năng **Đẩy dữ liệu backup lên S3** cho phép người dùng đẩy các file sao lưu của cơ sở dữ liệu lên kho lưu trữ S3 tương thích, phục vụ các mục đích như lưu trữ dài hạn, sao lưu ngoài hệ thống hoặc tiêu thụ dữ liệu bên ngoài. Tính năng này hữu ích cho kịch bản phục hồi sau thảm họa, kiểm toán hoặc nhân rộng dữ liệu sang hệ thống khác.
Hiện tại, FPT đang cung cấp tính năng này cho các loại engine: PostgreSQL, MySQL, MariaDB, SQLServer, Redis, MongoDB, TimescaleDB.
Hướng dẫn này giúp bạn biết cách sử dụng tính năng để quản lý việc đẩy dữ liệu sao lưu lên S3, phục vụ các mục tiêu lưu trữ an toàn, phục hồi hoặc tích hợp dữ liệu ngoài hệ thống.
### 1. Thêm cấu hình S3 mới
Chức năng Thêm cấu hình S3 mới cho phép người dùng cấu hình thông tin S3-compatible storage để hệ thống sử dụng làm nơi lưu trữ dữ liệu sao lưu.
#### Điều kiện tiên quyết:
  * Người dùng đã có S3 bucket hợp lệ.
  * Có Access Key và Secret Key với quyền truy cập bucket.
  * Endpoint S3 có thể truy cập từ hệ thống.

#### Các bước thực hiện:
**Bước 1: Truy cập trang quản lý cấu hình S3**
Đăng nhập FPT Cloud Console. Mở trang **Database list** > chọn ID của database cluster để mở trang chi tiết > chọn tab **Migration**. Trang quản lý migration hiển thị như sau:
[![](/img/migrated/migration-list-scaled-03d0f2a3.png)](/img/migrated/migration-list-scaled-03d0f2a3.png)
**Bước 2: Thêm cấu hình S3**
Tại màn hình **Migration** , nhấn vào nút **Add S3 Configuration** (biểu tượng dấu cộng cạnh section "**Configure** ") để bắt đầu thêm cấu hình S3. Hệ thống hiển thị hộp thoại như sau:
[![](/img/migrated/s3-config-scaled-8f6342cf.png)](/img/migrated/s3-config-scaled-8f6342cf.png)
Điền thông tin cấu hình S3:
  * **S3 endpoint** : Nhập URL endpoint của dịch vụ S3 (ví dụ: <https://s3.amazonaws.com> cho AWS S3).
  * **S3 bucket name** : Tên bucket dùng để lưu trữ dữ liệu backup.
  * **S3 region** : Nhập khu vực (region) của bucket S3 (ví dụ: us-east-1).
  * **S3 access key** : Access key dùng để xác thực truy cập S3.
  * **S3 Secret Key** : Secret key tương ứng với access key.

**Lưu ý bảo mật:**
  * Thông tin Access Key và Secret Key được mã hoá và ẩn khi nhập.
  * Không chia sẻ thông tin xác thực S3 cho bên thứ ba không được uỷ quyền.

Sau khi nhập thông tin, kiểm tra lại và nhấn "**Add** " để lưu cấu hình. Sau khi cấu hình thành công, S3 storage sẽ khả dụng để sử dụng cho các chức năng đẩy dữ liệu backup lên S3 (tuỳ theo engine hỗ trợ).
Khi cần thiết, người dùng có thể thực hiện các thao tác sau đối với cấu hình S3 đã tạo:
  * **Chỉnh sửa cấu hình S3** : Chức năng này cho phép cập nhật các thông tin đã cấu hình cho S3. Trên trang **Migration** , nhấp vào biểu tượng **Edit** (hình bút chì) tương ứng với cấu hình S3 cần chỉnh sửa. Cập nhật các thông tin cần thay đổi và nhấn Update để lưu lại.
  * **Xóa cấu hình S3** : Chức năng này cho phép xoá các cấu hình S3 không còn sử dụng, giúp hệ thống được quản lý gọn gàng và chính xác hơn. Trên trang **Migration** , nhấp vào biểu tượng **Delete** (hình thùng rác) tương ứng với cấu hình cần xoá. Xác nhận thao tác trong hộp thoại cảnh báo để hoàn tất.

### 2. Đẩy dữ liệu backup lên S3
Chức năng **Đẩy dữ liệu backup lên S3** cho phép người dùng đẩy các file backup hiện có của database cluster lên S3 storage đã được cấu hình trước đó.
#### Điều kiện tiên quyết:
  * Đã cấu hình S3 storage hợp lệ.
  * Database cluster đã có ít nhất một backup thành công.
  * Engine của database hỗ trợ tính năng Push S3.

#### Các bước thực hiện Restore:
**Bước 1: Truy cập màn hình Restore**
Từ thanh menu, chọn **Database Platform** > Chọn menu **All Database** hoặc menu tương ứng với nhóm cơ sở dữ liệu > nhấp vào Cluster ID của databse cluster cần restore > chọn tab **Backup** > chọn sub tab **Restore**. Hệ thống sẽ hiển thị danh sách các **Available Restore Points** , bao gồm loại backup (Full hoặc Diff).
[![](/img/migrated/DBaaS_BackupDB_restore_list-44b1a2e5.png)](/img/migrated/DBaaS_BackupDB_restore_list-44b1a2e5.png)
**Bước 2: Thực hiện Push S3**
Tại cột **Actions** , bấm vào biểu tượng ba chấm (⋮) tương ứng với restore point mong muốn → chọn **Push S3**. Hộp thoại Push S3 hiển thị danh sách các cấu hình S3 khả dụng:
[![](/img/migrated/push-s3-a69f73c5.png)](/img/migrated/push-s3-a69f73c5.png)
Chọn S3 storage mong muốn bằng cách tick vào checkbox trong cột Action rồi nhấn Push để bắt đầu quá trình đẩy file backup lên S3.
Để theo dõi trạng thái của tiến trình đẩy file lên S3, truy cập tab **Migration** và chọn sub-tab **Logs** để xem thông tin chi tiết:
[![](/img/migrated/log-s3-0f76689c.png)](/img/migrated/log-s3-0f76689c.png)
Sau khi thao tác hoàn tất thành công, các file backup của database cluster sẽ được đẩy lên S3 storage đã chọn. Để kiểm tra kết quả, người dùng có thể truy cập S3 Browser hoặc công cụ quản lý S3 tương ứng để xác nhận các file đã được push.
[![](/img/migrated/S3-browser-ab343b8a.png)](/img/migrated/S3-browser-ab343b8a.png)