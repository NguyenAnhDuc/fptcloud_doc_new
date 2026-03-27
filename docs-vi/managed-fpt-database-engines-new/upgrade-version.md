---
id: "upgrade-version"
title: "Nâng cấp phiên bản cho cơ sở dữ liệu"
description: "Tính năng **Nâng cấp phiên bản cho cơ sở dữ liệu** trong FPT Database Engine **hiện cho phép** người dùng **nâng cấp cơ "
sidebar_label: "Nâng cấp phiên bản cho cơ sở dữ liệu"
sidebar_position: 25
---

# Upgrade Version

Tính năng **Nâng cấp phiên bản cho cơ sở dữ liệu** trong FPT Database Engine **hiện cho phép** người dùng **nâng cấp cơ sở dữ liệu thuộc loại MariaDB từ phiên bản hiện tại lên MariaDB 10.9**. Việc nâng cấp giúp bạn tận dụng các cải tiến về hiệu năng, bảo mật và tính năng mới của phiên bản cao hơn.
### Phạm vi & Giới hạn
  * Chỉ áp dụng cho MariaDB. Các database không phải MariaDB sẽ không hiển thị chức năng này.
  * Chỉ hỗ trợ upgrade lên MariaDB 10.9.
  * Không hỗ trợ downgrade hoặc upgrade sang phiên bản khác.

### Điều kiện tiên quyết
  * Đảm bảo bạn có quyền IAM để quản lý và cập nhật cluster.
  * Ngắt kết nối tất cả các ứng dụng đang kết nối với cơ sở dữ liệu.
  * Thực hiện full backup trước khi upgrade để phục hồi khi cần.
  * Kiểm tra ứng dụng tương thích với phiên bản mục tiêu.

### Hướng dẫn chi tiết
#### Bước 1: Truy cập trang Xem chi tiết cơ sở dữ liệu
Đăng nhập vào FPT Cloud Portal và đi tới trang **Database List**. Chọn cụm MariaDB bạn muốn cập nhật. Trên trang **Overview** của cluster, bạn sẽ thấy phiên bản hiện tại và icon **Upgrade** ở bên cạnh.
[![](/img/migrated/view-upgrade-action-scaled-4bc6cce2.png)](/img/migrated/view-upgrade-action-scaled-4bc6cce2.png)
#### Bước 2: Thực hiện ugrade phiên bản
Trên trang **Overview** , tìm và nhấp vào biểu tượng **Upgrade** bên cạnh thông tin phiên bản. Một hộp thoại sẽ mở ra hiển thị phiên bản hiện tại và phiên bản mục tiêu có thể cập nhật.
[![](/img/migrated/upgrade-version-mariadb-scaled-9e7d5cfb.png)](/img/migrated/upgrade-version-mariadb-scaled-9e7d5cfb.png)
Chọn version cần nâng cấp và nhập từ khóa xác nhận vào trường nhập liệu. Nhấn **Upgrade** để bắt đầu quá trình nâng cấp.
Trong quá trình thực hiện, trạng thái của database cluster sẽ chuyển sang **“Updating”**. Không cố gắng kết nối hoặc thay đổi khi cập nhật đang diễn ra. Cụm sẽ tự động khởi động lại trong quá trình cập nhật.
Khi hoàn tất upgrade, trạng thái sẽ trở về **“Running”** và cơ sở dữ liệu đã được nâng cấp lên phiên bản mới.
### Lưu ý quan trọng
  * **Không thể hoàn tác** : Việc cập nhật phiên bản không thể quay lại; hãy đảm bảo bản sao lưu hoàn chỉnh.
  * **Ngắt kết nối** : Tất cả kết nối ứng dụng phải được dừng trước khi nâng cấp.
  * **Ảnh hưởng dịch vụ:** Cluster sẽ khởi động lại, gây gián đoạn tạm thời.
  * Nếu cập nhật thất bại, sử dụng bản sao lưu để phục hồi trạng thái trước đó.