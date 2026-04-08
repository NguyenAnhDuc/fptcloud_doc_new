---
id: "maintenance-window"
title: "Maintenance Window"
description: "**Maintenance Window** cho phép khách hàng chủ động thiết lập khung thời gian bảo trì định kỳ cho cụm cơ sở dữ liệu. Tro"
sidebar_label: "Maintenance Window"
sidebar_position: 37
---

# Maintenance Window

**Maintenance Window** cho phép khách hàng chủ động thiết lập khung thời gian bảo trì định kỳ cho cụm cơ sở dữ liệu. Trong thời gian này, FPT sẽ thực hiện các hoạt động nâng cấp, vá lỗi và tối ưu hệ thống.
Tính năng giúp giảm thiểu ảnh hưởng đến hoạt động kinh doanh và nâng cao độ ổn định của dịch vụ.

#### Quy tắc hoạt động:
  * Maintenance Window có chu kỳ hàng tuần.
  * Áp dụng cho từng database cluster riêng biệt.
  * Mỗi cluster chỉ có một Maintenance Window đang hiệu lực.

#### Quyền cần thiết:  
| Tên quyền  | Loại thao tác  | Mô tả  |  
| --- | --- | --- |  
| manageDatabase:Configuration  | Edit  | Quyền thay đổi cấu hình cơ sở dữ liệu (parameter, cấu hình scaling,...)  |  

#### Chức năng chính:
  * Cấu hình ngày và giờ bảo trì định kỳ.
  * Hỗ trợ chỉnh sửa trong quá trình vận hành.
  * Hiển thị các sự kiện bảo trì sắp diễn ra.
  * Gửi thông báo trước khi bảo trì.

#### Thao tác thực hiện:
Khi tạo mới cluster, người dùng có thể chọn maintenance window tại bước cấu hình **Additional Service** (chi tiết xem tại mục [Khởi tạo cơ sở dữ liệu](/docs/vi/fpt-database-engine/managed-fpt-database-engines-new/)/) và hệ thống sẽ áp dụng cấu hình ngay từ lần vận hành đầu tiên.
Trong quá trình sử dụng, người dùng có thể cập nhật lại khung thời gian bảo trì theo các thao tác dưới đây:
**Bước 1: Truy cập chức năng**
Đăng nhập vào FPT Cloud Portal. Từ menu chính, chọn **Database Platform** → **All Database**. Trên trang Database list, chọn Cluster ID của cụm bạn muốn cấu hình maintenance window. Chọn tab **Maintennace** để mở màn hình quản lý cấu hình maintenance window.
[![](/img/migrated/view-maintenance-3d911f64.png)](/img/migrated/view-maintenance-3d911f64.png)
**Bước 2: Cấu hình maintenance window**
Trên tab **Maintennace** , nhấn biểu tượng **Configuration** (hình bánh răng cạnh **Maintenance Window**) để mở của sổ **Update Maintenance Window** :
[![](/img/migrated/update-maintenance-wwindow-d95e9f42.png)](/img/migrated/update-maintenance-wwindow-d95e9f42.png)
Nhập thông tin:
  * **Day of Week** : Ngày được thực hiện bảo trì trong tuần, bao gồm các lựa chọn từ **Monday** cho đến **Sunday**.
  * **Start Time** : Thời gian bắt đầu được thực hiện bảo trì.

Nhấn **Save** để lưu thông tin cấu hình. Hệ thống sẽ áp dụng cấu hình cho các lần bảo trì tiếp theo.
**Lưu ý** : Bạn chỉ có thể cập nhật cài đặt lập lịch nếu database cluster của bạn chưa được lên lịch bảo trì.
**Bước 3: Xem lịch bảo trì sắp tới**
Các sự kiện bảo trì đã được lên lịch sẽ được hiển thị tại mục **Pending Maintenance Event**. Thông tin chi tiết bao gồm:
  * **Maintenance Event** : Tên sự kiện bảo trì.
  * **Type** : Loại bảo trì.
  * **Duration (Minute)** : Thời gian dự kiến thực hiện bảo trì (tính bằng phút).
  * **Apply At** : Thời điểm bắt đầu thực hiện bảo trì.

Người dùng nên thường xuyên theo dõi lịch bảo trì để chủ động lập kế hoạch vận hành và giảm thiểu ảnh hưởng đến dịch vụ.
Hệ thống sẽ gửi thông báo qua email trước khi diễn ra hoạt động bảo trì. Hiện tại hỗ trợ hai mốc thông báo: trước 7 ngày và trước 1 ngày. Để cấu hình danh sách email nhận thông báo bảo trì, người dùng truy cập tab **Notification** và điều chỉnh thiết lập cho dịch vụ **Maintenance** (tham khảo chi tiết tại mục [Notification](/docs/vi/fpt-database-engine/managed-fpt-database-engines-new/)/).
